/**
 * Markdown Formatter Utility
 * 
 * This utility formats and normalizes converted Markdown files to ensure
 * they adhere to the styling conventions of the Enterprise Documentation System.
 */

const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');
const yaml = require('js-yaml');

/**
 * Format a Markdown file
 * @param {string} source - Path to the source Markdown file
 * @param {string} dest - Path where to save the formatted file (can be the same as source)
 * @param {object} options - Additional options for formatting
 * @returns {Promise<object>} - Result of the operation
 */
async function formatMarkdown(source, dest, options = {}) {
  try {
    if (!fs.existsSync(source)) {
      throw new Error(`Source file not found: ${source}`);
    }

    // Create destination directory if it doesn't exist
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Read the Markdown file
    const content = fs.readFileSync(source, 'utf8');

    // Parse front matter
    let mdContent;
    let frontMatterData = {};
    
    if (content.trim().startsWith('---')) {
      const parsed = frontMatter(content);
      mdContent = parsed.body;
      frontMatterData = parsed.attributes;
    } else {
      mdContent = content;
    }

    // Update front matter with options
    if (options.frontMatter) {
      frontMatterData = { ...frontMatterData, ...options.frontMatter };
    }

    // Format the markdown content
    const formattedMd = formatMarkdownContent(mdContent, options);

    // Combine front matter with the formatted markdown
    const frontMatterYaml = yaml.dump(frontMatterData);
    const result = `---\n${frontMatterYaml}---\n\n${formattedMd}`;

    // Write the result to the destination file
    fs.writeFileSync(dest, result, 'utf8');
    
    console.log(`Successfully formatted ${source} to ${dest}`);
    return { success: true, source, dest };
  } catch (error) {
    console.error(`Error formatting ${source}:`, error);
    return { success: false, source, dest, error: error.message };
  }
}

/**
 * Format markdown content
 * @param {string} markdown - Markdown content to format
 * @param {object} options - Formatting options
 * @returns {string} - Formatted markdown
 */
function formatMarkdownContent(markdown, options = {}) {
  // Fix headings (ensure space after # and consistent levels)
  let formatted = fixHeadings(markdown, options.topHeadingLevel || 1);
  
  // Fix code blocks
  formatted = fixCodeBlocks(formatted);
  
  // Fix list formatting
  formatted = fixLists(formatted);
  
  // Fix links
  formatted = fixLinks(formatted, options.baseUrl);
  
  // Fix tables
  formatted = fixTables(formatted);
  
  // Fix spacing (ensure consistent paragraph breaks)
  formatted = fixSpacing(formatted);
  
  // Apply EDS-specific transformations
  if (options.applyEdsStyles) {
    formatted = applyEdsStyles(formatted, options);
  }
  
  return formatted;
}

/**
 * Fix heading levels and formatting
 * @param {string} markdown - Markdown content
 * @param {number} topLevel - Top heading level (1-6)
 * @returns {string} - Markdown with fixed headings
 */
function fixHeadings(markdown, topLevel = 1) {
  // Ensure topLevel is between 1 and 6
  topLevel = Math.max(1, Math.min(6, topLevel));
  
  // Split content into lines
  const lines = markdown.split('\n');
  const processedLines = [];
  
  // Process each line
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Check if the line is a heading
    if (line.trim().startsWith('#')) {
      // Get heading level and text
      const match = line.match(/^(#+)\s*(.*?)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        
        // Adjust heading level based on topLevel
        const adjustedLevel = Math.min(6, topLevel + level - 1);
        
        // Reformat heading with proper spacing
        line = '#'.repeat(adjustedLevel) + ' ' + text.trim();
      }
    }
    
    processedLines.push(line);
  }
  
  return processedLines.join('\n');
}

/**
 * Fix code block formatting
 * @param {string} markdown - Markdown content
 * @returns {string} - Markdown with fixed code blocks
 */
function fixCodeBlocks(markdown) {
  // Ensure code blocks have language specified
  return markdown.replace(/```\s*\n/g, '```text\n');
}

/**
 * Fix list formatting
 * @param {string} markdown - Markdown content
 * @returns {string} - Markdown with fixed lists
 */
function fixLists(markdown) {
  // Split content into lines
  const lines = markdown.split('\n');
  const processedLines = [];
  
  // Process each line
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Check if the line is a list item
    if (/^\s*[-*+]\s/.test(line)) {
      // Standardize on dashes for unordered lists
      line = line.replace(/^\s*[-*+]\s/, '- ');
    }
    
    // Fix ordered lists
    if (/^\s*\d+\.\s/.test(line)) {
      // Ensure there's a space after the period
      line = line.replace(/^(\s*\d+\.)\s*/, '$1 ');
    }
    
    processedLines.push(line);
  }
  
  return processedLines.join('\n');
}

/**
 * Fix link formatting
 * @param {string} markdown - Markdown content
 * @param {string} baseUrl - Base URL for relative links
 * @returns {string} - Markdown with fixed links
 */
function fixLinks(markdown, baseUrl = '') {
  if (!baseUrl) return markdown;
  
  // Fix relative links by prepending baseUrl
  return markdown.replace(/\]\((?!https?:\/\/|\/|#)([^)]+)\)/g, `](${baseUrl}/$1)`);
}

/**
 * Fix table formatting
 * @param {string} markdown - Markdown content
 * @returns {string} - Markdown with fixed tables
 */
function fixTables(markdown) {
  // Split content into lines
  const lines = markdown.split('\n');
  const processedLines = [];
  
  let inTable = false;
  let tableStartIndex = -1;
  
  // Process each line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line is part of a table
    if (line.includes('|') && line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableStartIndex = processedLines.length;
      }
    } else if (inTable && line.trim() === '') {
      inTable = false;
      
      // Fix table formatting
      const tableLines = processedLines.slice(tableStartIndex);
      
      // Ensure the separator row has at least 3 dashes
      if (tableLines.length >= 2) {
        const headerRow = tableLines[0];
        const separatorRow = tableLines[1];
        
        if (separatorRow.includes('|') && separatorRow.includes('-')) {
          const columns = headerRow.split('|').filter(Boolean);
          const newSeparatorRow = '|' + columns.map(() => ' --- |').join('');
          
          processedLines[tableStartIndex + 1] = newSeparatorRow;
        }
      }
    }
    
    processedLines.push(line);
  }
  
  return processedLines.join('\n');
}

/**
 * Fix spacing in markdown
 * @param {string} markdown - Markdown content
 * @returns {string} - Markdown with fixed spacing
 */
function fixSpacing(markdown) {
  // Remove excessive blank lines (more than 2 consecutive blank lines)
  let result = markdown.replace(/\n{3,}/g, '\n\n');
  
  // Ensure paragraphs have proper spacing
  result = result.replace(/(\S)\n(\S)/g, '$1\n\n$2');
  
  return result;
}

/**
 * Apply EDS-specific styles and conventions
 * @param {string} markdown - Markdown content
 * @param {object} options - Styling options
 * @returns {string} - Markdown with EDS styles applied
 */
function applyEdsStyles(markdown, options = {}) {
  let result = markdown;
  
  // Apply callout styles
  result = applyCalloutStyles(result);
  
  // Add image classes
  if (options.imageClass) {
    result = result.replace(/!\[(.*?)\]\((.*?)\)/g, `![$1]($2){.${options.imageClass}}`);
  }
  
  // Apply code block styles
  if (options.codeBlockClass) {
    result = result.replace(/```([a-z]*)/g, `\`\`\`$1 {.${options.codeBlockClass}}`);
  }
  
  return result;
}

/**
 * Apply EDS callout styles to blockquotes
 * @param {string} markdown - Markdown content
 * @returns {string} - Markdown with callout styles
 */
function applyCalloutStyles(markdown) {
  // Split content into lines
  const lines = markdown.split('\n');
  const processedLines = [];
  
  let inBlockquote = false;
  let blockquoteType = 'info';
  const blockquoteBuffer = [];
  
  // Process each line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line is a blockquote
    if (line.trim().startsWith('> ')) {
      if (!inBlockquote) {
        inBlockquote = true;
        blockquoteBuffer.length = 0;
        
        // Determine blockquote type from first line
        const content = line.replace(/^>\s*/, '').trim();
        
        if (content.toLowerCase().startsWith('**note:**')) {
          blockquoteType = 'note';
        } else if (content.toLowerCase().startsWith('**warning:**')) {
          blockquoteType = 'warning';
        } else if (content.toLowerCase().startsWith('**info:**')) {
          blockquoteType = 'info';
        } else if (content.toLowerCase().startsWith('**tip:**')) {
          blockquoteType = 'tip';
        } else if (content.toLowerCase().startsWith('**error:**')) {
          blockquoteType = 'error';
        }
      }
      
      blockquoteBuffer.push(line);
    } else if (inBlockquote) {
      inBlockquote = false;
      
      // Convert blockquote to EDS callout
      processedLines.push(`<div class="eds-callout eds-callout-${blockquoteType}">`);
      
      // Process blockquote content
      for (const bqLine of blockquoteBuffer) {
        // Remove '>' prefix and clean up text
        let content = bqLine.replace(/^>\s*/, '').trim();
        
        // Handle the callout title only for the first line
        if (bqLine === blockquoteBuffer[0]) {
          // Replace **Type:** with styled heading
          content = content.replace(/^\*\*(.*?):\*\*\s*/, (match, type) => {
            return `<div class="eds-callout-title">${type}</div>`;
          });
        }
        
        if (content) {
          processedLines.push(content);
        }
      }
      
      processedLines.push('</div>');
      processedLines.push(''); // Add an empty line after the callout
      
      // Process the current line
      processedLines.push(line);
    } else {
      processedLines.push(line);
    }
  }
  
  // Handle case where blockquote is at the end of the document
  if (inBlockquote) {
    // Convert blockquote to EDS callout
    processedLines.push(`<div class="eds-callout eds-callout-${blockquoteType}">`);
    
    // Process blockquote content
    for (const bqLine of blockquoteBuffer) {
      // Remove '>' prefix and clean up text
      let content = bqLine.replace(/^>\s*/, '').trim();
      
      // Handle the callout title only for the first line
      if (bqLine === blockquoteBuffer[0]) {
        // Replace **Type:** with styled heading
        content = content.replace(/^\*\*(.*?):\*\*\s*/, (match, type) => {
          return `<div class="eds-callout-title">${type}</div>`;
        });
      }
      
      if (content) {
        processedLines.push(content);
      }
    }
    
    processedLines.push('</div>');
  }
  
  return processedLines.join('\n');
}

/**
 * Process a directory of Markdown files and format them
 * @param {string} sourceDir - Directory containing Markdown files
 * @param {string} destDir - Directory to save formatted files (can be the same as sourceDir for in-place formatting)
 * @param {object} options - Additional options for formatting
 * @returns {Promise<array>} - Results of the operation
 */
async function processDirectory(sourceDir, destDir, options = {}) {
  try {
    if (!fs.existsSync(sourceDir)) {
      throw new Error(`Source directory not found: ${sourceDir}`);
    }

    // Create destination directory if it doesn't exist and it's different from source
    if (sourceDir !== destDir && !fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Get all Markdown files in the source directory
    const files = fs.readdirSync(sourceDir)
      .filter(file => file.endsWith('.md') || file.endsWith('.markdown'));

    const results = [];
    
    // Process each file
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      
      const result = await formatMarkdown(sourcePath, destPath, options);
      results.push(result);
    }

    console.log(`Successfully processed directory: ${sourceDir}`);
    return results;
  } catch (error) {
    console.error(`Error processing directory ${sourceDir}:`, error);
    throw error;
  }
}

// Export functions
module.exports = {
  formatMarkdown,
  processDirectory,
  formatMarkdownContent
};

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'format') {
    // Format a single file: node md-formatter.js format source.md [dest.md]
    const source = args[1];
    const dest = args[2] || source; // Default to in-place formatting
    
    if (!source) {
      console.error('Usage: node md-formatter.js format <source.md> [dest.md]');
      process.exit(1);
    }
    
    formatMarkdown(source, dest)
      .catch(() => process.exit(1));
  } 
  else if (command === 'batch') {
    // Process a directory: node md-formatter.js batch sourceDir [destDir]
    const sourceDir = args[1];
    const destDir = args[2] || sourceDir; // Default to in-place formatting
    
    if (!sourceDir) {
      console.error('Usage: node md-formatter.js batch <sourceDir> [destDir]');
      process.exit(1);
    }
    
    processDirectory(sourceDir, destDir)
      .catch(() => process.exit(1));
  }
  else {
    console.error('Unknown command. Use "format" or "batch".');
    console.error('Usage:');
    console.error('  node md-formatter.js format <source.md> [dest.md]');
    console.error('  node md-formatter.js batch <sourceDir> [destDir]');
    process.exit(1);
  }
}