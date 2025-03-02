/**
 * Nunjucks to Markdown Converter Utility
 * 
 * This utility converts Nunjucks (.njk) files to Markdown (.md) format
 * to help with content migration and consolidation across documentation sites.
 * It also supports preserving .njk files for direct rendering when needed.
 */

const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const frontMatter = require('front-matter');
const marked = require('marked');
const cheerio = require('cheerio');

/**
 * Convert a Nunjucks template to Markdown
 * @param {string} source - The path to the source .njk file
 * @param {string} dest - The path where to save the .md file
 * @param {object} data - Optional data to pass to the Nunjucks template
 * @param {object} options - Additional options for conversion
 * @returns {Promise<object>} - Result object with status and path
 */
async function convertNjkToMd(source, dest, data = {}, options = {}) {
  try {
    // Read the source file
    const content = fs.readFileSync(source, 'utf8');
    
    // Configure Nunjucks
    const env = new nunjucks.Environment(new nunjucks.FileSystemLoader([
      path.dirname(source),
      './src/_includes',
      './src/legacy-docs/njk'
    ]));
    
    // Parse front matter
    const { attributes, body } = frontMatter(content);
    
    // Merge attributes with options
    const mergedAttributes = {
      ...attributes,
      converted_from: source,
      conversion_date: new Date().toISOString().split('T')[0]
    };
    
    // Check if we should preserve the original layout
    const preserveLayout = options.preserveLayout || attributes.preserveLayout;
    
    if (!preserveLayout && mergedAttributes.layout) {
      // Map legacy layouts to the new system if needed
      const layoutMap = options.layoutMap || {
        'legacy_base': 'layouts/base.njk',
        'legacy_doc': 'layouts/page.njk',
        'legacy_component': 'layouts/component.njk'
      };
      
      if (layoutMap[mergedAttributes.layout]) {
        mergedAttributes.layout = layoutMap[mergedAttributes.layout];
      }
    }
    
    // Combine data with attributes
    const mergedData = { ...data, ...mergedAttributes };
    
    // Render the template
    let renderedHtml;
    try {
      renderedHtml = env.renderString(body, mergedData);
    } catch (renderError) {
      console.warn(`Warning: Template rendering error in ${source}. Using plain body instead.`);
      renderedHtml = body;
    }
    
    // Convert HTML to Markdown
    const markdown = convertHtmlToMarkdown(renderedHtml);
    
    // Prepare front matter for markdown
    let mdFrontMatter = '';
    for (const [key, value] of Object.entries(mergedAttributes)) {
      if (typeof value === 'string') {
        mdFrontMatter += `${key}: "${value}"\n`;
      } else if (Array.isArray(value)) {
        mdFrontMatter += `${key}:\n${value.map(item => `  - ${item}`).join('\n')}\n`;
      } else if (typeof value === 'object' && value !== null) {
        mdFrontMatter += `${key}: ${JSON.stringify(value, null, 2)}\n`;
      } else {
        mdFrontMatter += `${key}: ${value}\n`;
      }
    }
    
    // Write to destination file
    const mdContent = `---\n${mdFrontMatter}---\n\n${markdown}`;
    
    // Ensure destination directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.writeFileSync(dest, mdContent);
    
    console.log(`Converted ${source} to ${dest}`);
    return {
      status: 'success',
      source,
      destination: dest,
      frontMatter: mergedAttributes
    };
  } catch (error) {
    console.error(`Error converting ${source}:`, error);
    return {
      status: 'error',
      source,
      error: error.message
    };
  }
}

/**
 * Copy a Nunjucks file without converting it
 * @param {string} source - The path to the source .njk file
 * @param {string} dest - The path where to save the .njk file
 * @param {object} options - Additional options for copying
 * @returns {Promise<object>} - Result object with status and path
 */
async function copyNjkFile(source, dest, options = {}) {
  try {
    // Read the source file
    const content = fs.readFileSync(source, 'utf8');
    
    // Parse front matter
    const { attributes, body } = frontMatter(content);
    
    // Add metadata to indicate this is a legacy file
    const mergedAttributes = {
      ...attributes,
      legacy_file: true,
      original_path: source,
      import_date: new Date().toISOString().split('T')[0]
    };
    
    // Convert attributes to front matter string
    let njkFrontMatter = '';
    for (const [key, value] of Object.entries(mergedAttributes)) {
      if (typeof value === 'string') {
        njkFrontMatter += `${key}: "${value}"\n`;
      } else if (Array.isArray(value)) {
        njkFrontMatter += `${key}:\n${value.map(item => `  - ${item}`).join('\n')}\n`;
      } else if (typeof value === 'object' && value !== null) {
        njkFrontMatter += `${key}: ${JSON.stringify(value, null, 2)}\n`;
      } else {
        njkFrontMatter += `${key}: ${value}\n`;
      }
    }
    
    // Assemble the file content
    const njkContent = `---\n${njkFrontMatter}---\n\n${body}`;
    
    // Ensure destination directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.writeFileSync(dest, njkContent);
    
    console.log(`Copied ${source} to ${dest}`);
    return {
      status: 'success',
      source,
      destination: dest,
      preserved: true
    };
  } catch (error) {
    console.error(`Error copying ${source}:`, error);
    return {
      status: 'error',
      source,
      error: error.message
    };
  }
}

/**
 * Convert HTML to Markdown
 * @param {string} html - The HTML content to convert
 * @returns {string} - The resulting Markdown content
 */
function convertHtmlToMarkdown(html) {
  // Pre-process HTML using cheerio
  const $ = cheerio.load(html);
  
  // Handle specific HTML structures that marked doesn't convert well
  
  // Alerts, notes, warnings
  $('div.note, div.warning, div.info, div.alert, div.tip').each(function() {
    const blockquoteType = $(this).attr('class');
    const content = $(this).html();
    $(this).replaceWith(`<blockquote class="${blockquoteType}">${content}</blockquote>`);
  });
  
  // Code blocks
  $('pre code').each(function() {
    const $code = $(this);
    let language = $code.attr('class')?.replace('language-', '') || '';
    
    // Add language hint for markdown code blocks
    if (language) {
      $code.parent().attr('data-language', language);
    }
  });
  
  // Handle tables better
  $('table').each(function() {
    const $table = $(this);
    const $headers = $table.find('th');
    
    if ($headers.length === 0) {
      // Add header row if missing
      const colCount = $table.find('tr:first-child td').length;
      let headerRow = '<tr>';
      for (let i = 0; i < colCount; i++) {
        headerRow += '<th>Column ' + (i + 1) + '</th>';
      }
      headerRow += '</tr>';
      $table.find('thead').append(headerRow);
    }
  });
  
  // Convert preprocessed HTML to markdown
  const processedHtml = $.html();
  const markdown = marked.parse(processedHtml);
  
  // Post-process the markdown
  let processedMarkdown = markdown
    .replace(/\n{3,}/g, '\n\n') // Remove excess newlines
    .replace(/&lt;/g, '<')      // Fix HTML entities
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
    
  // Fix code blocks, ensuring language is preserved
  processedMarkdown = processedMarkdown.replace(
    /```\n\s*<pre data-language="([^"]+)">/g, 
    '```$1\n'
  );
  
  return processedMarkdown;
}

/**
 * Process a directory of Nunjucks files
 * @param {string} sourceDir - The directory containing .njk files
 * @param {string} destDir - The directory where to save processed files
 * @param {object} options - Options for processing
 * @returns {Promise<object>} - Results of the processing
 */
async function processDirectory(sourceDir, destDir, options = {}) {
  try {
    const results = {
      converted: [],
      preserved: [],
      errors: []
    };
    
    // Default options
    const defaultOptions = {
      convertToMarkdown: true, // Whether to convert to .md or preserve as .njk
      recursive: true,         // Process subdirectories
      preserveLayout: false,   // Keep original layout or map to new ones
      layoutMap: {             // Mapping from legacy to new layouts
        'legacy_base': 'layouts/base.njk',
        'legacy_doc': 'layouts/page.njk',
        'legacy_component': 'layouts/component.njk'
      },
      fileMap: {}              // Custom filename mapping
    };
    
    const mergedOptions = { ...defaultOptions, ...options };
    
    // Ensure the destination directory exists
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Read all files in the source directory
    const files = fs.readdirSync(sourceDir);
    
    // Process each .njk file
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const stats = fs.statSync(sourcePath);
      
      if (stats.isDirectory() && mergedOptions.recursive) {
        // Recursively process subdirectories
        const subDestDir = path.join(destDir, file);
        const subResults = await processDirectory(sourcePath, subDestDir, mergedOptions);
        
        // Merge results
        results.converted = [...results.converted, ...subResults.converted];
        results.preserved = [...results.preserved, ...subResults.preserved];
        results.errors = [...results.errors, ...subResults.errors];
      } else if (file.endsWith('.njk')) {
        // Determine destination filename
        let destFilename = mergedOptions.fileMap[file] || file;
        
        if (mergedOptions.convertToMarkdown) {
          // Convert .njk file to .md
          destFilename = destFilename.replace('.njk', '.md');
          const destPath = path.join(destDir, destFilename);
          
          const result = await convertNjkToMd(sourcePath, destPath, {}, mergedOptions);
          
          if (result.status === 'success') {
            results.converted.push(result);
          } else {
            results.errors.push(result);
          }
        } else {
          // Copy .njk file without converting
          const destPath = path.join(destDir, destFilename);
          
          const result = await copyNjkFile(sourcePath, destPath, mergedOptions);
          
          if (result.status === 'success') {
            results.preserved.push(result);
          } else {
            results.errors.push(result);
          }
        }
      }
    }
    
    console.log(`Processed directory ${sourceDir} -> ${destDir}`);
    console.log(`  - Converted: ${results.converted.length}`);
    console.log(`  - Preserved: ${results.preserved.length}`);
    console.log(`  - Errors: ${results.errors.length}`);
    
    return results;
  } catch (error) {
    console.error(`Error processing directory ${sourceDir}:`, error);
    return {
      converted: [],
      preserved: [],
      errors: [{ 
        status: 'error', 
        source: sourceDir, 
        error: error.message 
      }]
    };
  }
}

/**
 * Generate a report of the conversion process
 * @param {object} results - The results from processDirectory
 * @param {string} reportPath - Path to save the report
 */
function generateConversionReport(results, reportPath) {
  let report = `# Legacy Documentation Conversion Report\n\n`;
  report += `Report generated on: ${new Date().toISOString()}\n\n`;
  
  report += `## Summary\n\n`;
  report += `- Total files converted to Markdown: ${results.converted.length}\n`;
  report += `- Total files preserved as Nunjucks: ${results.preserved.length}\n`;
  report += `- Total errors: ${results.errors.length}\n\n`;
  
  if (results.converted.length > 0) {
    report += `## Converted Files\n\n`;
    results.converted.forEach(result => {
      report += `- ${result.source} → ${result.destination}\n`;
    });
    report += '\n';
  }
  
  if (results.preserved.length > 0) {
    report += `## Preserved Files\n\n`;
    results.preserved.forEach(result => {
      report += `- ${result.source} → ${result.destination}\n`;
    });
    report += '\n';
  }
  
  if (results.errors.length > 0) {
    report += `## Errors\n\n`;
    results.errors.forEach(error => {
      report += `- ${error.source}: ${error.error}\n`;
    });
  }
  
  // Ensure the directory exists
  const reportDir = path.dirname(reportPath);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  fs.writeFileSync(reportPath, report);
  console.log(`Conversion report saved to ${reportPath}`);
}

/**
 * Create sample legacy content for demonstration
 * @param {string} directory - Directory to create sample content
 */
function createSampleLegacyContent(directory) {
  // Ensure directory exists
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
  
  // Create sample files
  const sampleFiles = [
    {
      name: 'legacy-component.njk',
      content: `---
title: "Legacy Component"
layout: "legacy_component"
description: "A sample legacy component from the previous documentation system"
created_at: "2023-06-15"
author: "Previous Team"
---
<div class="legacy-component">
  <h1>{{ title }}</h1>
  
  <div class="note">
    This component was migrated from the legacy documentation system.
  </div>
  
  <h2>Usage</h2>
  <p>This is an example of how a component was documented in the previous system.</p>
  
  <h3>Code Example</h3>
  <pre><code class="language-html">
&lt;div class="legacy-component"&gt;
  &lt;div class="legacy-component__header"&gt;
    &lt;h3&gt;Component Title&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="legacy-component__body"&gt;
    &lt;p&gt;Component content goes here&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
  </code></pre>
  
  <h3>Properties</h3>
  <table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>title</td>
        <td>string</td>
        <td>"Component"</td>
        <td>The title displayed in the component header</td>
      </tr>
      <tr>
        <td>isCollapsible</td>
        <td>boolean</td>
        <td>false</td>
        <td>Whether the component can be collapsed</td>
      </tr>
    </tbody>
  </table>
</div>`
    },
    {
      name: 'legacy-page.njk',
      content: `---
title: "Legacy Documentation Page"
layout: "legacy_doc"
description: "A sample legacy page from the previous documentation system"
category: "guides"
---
<div class="legacy-page">
  <h1>{{ title }}</h1>
  
  <div class="info">
    This page was part of the legacy documentation system and has been migrated.
  </div>
  
  <h2>Introduction</h2>
  <p>This documentation page was written in the old format. It contains various elements that need to be properly converted.</p>
  
  <h2>Section 1</h2>
  <p>Here is an example of a paragraph with some <strong>bold text</strong> and <em>italic text</em>.</p>
  
  <h3>Subsection</h3>
  <p>Lists are also common in documentation:</p>
  
  <ul>
    <li>First item</li>
    <li>Second item with <a href="#nested">a link</a></li>
    <li>Third item</li>
  </ul>
  
  <h2>Section 2</h2>
  <p>Sometimes we need to include code snippets:</p>
  
  <pre><code class="language-javascript">
function exampleFunction() {
  const message = "Hello, legacy documentation!";
  console.log(message);
  return message;
}
  </code></pre>
  
  <div class="warning">
    Be careful when migrating legacy content to ensure all formatting is preserved correctly.
  </div>
</div>`
    }
  ];
  
  // Write sample files
  for (const file of sampleFiles) {
    fs.writeFileSync(
      path.join(directory, file.name),
      file.content
    );
    console.log(`Created sample file: ${file.name}`);
  }
}

module.exports = {
  convertNjkToMd,
  copyNjkFile,
  processDirectory,
  generateConversionReport,
  createSampleLegacyContent
};