/**
 * HTML to Markdown Migration Utility
 * 
 * This utility converts HTML files from legacy documentation sites to Markdown format
 * for use in the 11ty-based Enterprise Documentation System.
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

/**
 * Convert HTML file to Markdown
 * @param {string} source - Path to the source HTML file
 * @param {string} dest - Path where to save the converted Markdown file
 * @param {object} options - Additional options for the conversion
 * @returns {Promise<void>}
 */
async function convertHtmlToMd(source, dest, options = {}) {
  try {
    // Read the source file
    const html = fs.readFileSync(source, 'utf8');
    
    // Process the HTML content
    const { markdown, frontMatter } = await processHtmlContent(html, options);
    
    // Create directory if it doesn't exist
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Write the front matter and markdown content to the destination file
    const frontMatterYaml = generateFrontMatter(frontMatter);
    fs.writeFileSync(dest, `${frontMatterYaml}\n\n${markdown}`);
    
    console.log(`Successfully converted ${source} to ${dest}`);
    return { source, dest, success: true };
  } catch (error) {
    console.error(`Error converting ${source} to Markdown:`, error);
    return { source, dest, success: false, error: error.message };
  }
}

/**
 * Process HTML content and convert it to markdown
 * @param {string} html - HTML content to process
 * @param {object} options - Processing options
 * @returns {Promise<{markdown: string, frontMatter: object}>} - Markdown content and front matter
 */
async function processHtmlContent(html, options = {}) {
  // Load HTML with cheerio
  const $ = cheerio.load(html);
  
  // Extract front matter
  const frontMatter = extractFrontMatter($);
  
  // Apply site-specific transformations if needed
  if (options.siteType) {
    applySiteSpecificTransformations($, options.siteType);
  }
  
  // Process common elements
  processCommonElements($);
  
  // Convert HTML to Markdown
  let markdown = await htmlToMarkdown($.html('body'));
  
  // Clean up the markdown
  markdown = cleanupMarkdown(markdown);
  
  return { markdown, frontMatter };
}

/**
 * Extract front matter from HTML document
 * @param {Object} $ - Cheerio instance
 * @returns {object} - Front matter object
 */
function extractFrontMatter($) {
  const frontMatter = {
    layout: 'component',
    title: $('title').text() || $('h1').first().text() || 'Untitled Document',
    date: new Date().toISOString().split('T')[0],
    tags: [],
  };
  
  // Extract metadata from meta tags
  $('meta').each((i, el) => {
    const name = $(el).attr('name');
    const content = $(el).attr('content');
    
    if (name && content) {
      switch(name.toLowerCase()) {
        case 'author':
          frontMatter.author = content;
          break;
        case 'created':
        case 'date':
          frontMatter.date = content;
          break;
        case 'description':
          frontMatter.description = content;
          break;
        case 'category':
        case 'categories':
          frontMatter.tags = content.split(',').map(tag => tag.trim());
          break;
        case 'keywords':
          frontMatter.keywords = content.split(',').map(kw => kw.trim());
          break;
      }
    }
  });
  
  // Extract description from meta description or first p tag
  if (!frontMatter.description) {
    frontMatter.description = $('meta[name="description"]').attr('content') || 
                             $('p').first().text().trim().substring(0, 160);
  }
  
  // Extract version if available
  const versionEl = $('.version');
  if (versionEl.length) {
    frontMatter.version = versionEl.text().replace('Version', '').trim();
  }
  
  return frontMatter;
}

/**
 * Generate YAML front matter
 * @param {object} frontMatter - Front matter object
 * @returns {string} - YAML front matter string
 */
function generateFrontMatter(frontMatter) {
  let yaml = '---\n';
  
  for (const [key, value] of Object.entries(frontMatter)) {
    if (Array.isArray(value)) {
      yaml += `${key}:\n`;
      value.forEach(item => {
        yaml += `  - ${item}\n`;
      });
    } else if (typeof value === 'object') {
      yaml += `${key}:\n`;
      for (const [subKey, subValue] of Object.entries(value)) {
        yaml += `  ${subKey}: ${subValue}\n`;
      }
    } else if (value !== undefined && value !== null && value !== '') {
      yaml += `${key}: ${value}\n`;
    }
  }
  
  yaml += '---';
  return yaml;
}

/**
 * Apply transformations specific to different legacy site types
 * @param {Object} $ - Cheerio instance
 * @param {string} siteType - Type of legacy site ('confluence', 'sharepoint', 'jira', etc.)
 */
function applySiteSpecificTransformations($, siteType) {
  switch (siteType.toLowerCase()) {
    case 'confluence':
      handleConfluenceSpecifics($);
      break;
    case 'sharepoint':
      handleSharePointSpecifics($);
      break;
    case 'jira':
      handleJiraSpecifics($);
      break;
    case 'wordpress':
      handleWordPressSpecifics($);
      break;
    default:
      // No specific transformations for unknown site types
      break;
  }
}

/**
 * Process common HTML elements for any site type
 * @param {Object} $ - Cheerio instance
 */
function processCommonElements($) {
  // Remove scripts, styles, and comments
  $('script, style, comment').remove();
  
  // Process headings
  $('h1, h2, h3, h4, h5, h6').each((i, el) => {
    const $el = $(el);
    const level = parseInt(el.tagName.substring(1));
    
    // Add IDs to headings for anchor links if they don't have one
    if (!$el.attr('id')) {
      const id = $el.text().toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      $el.attr('id', id);
    }
  });
  
  // Process tables
  $('table').each((i, el) => {
    const $table = $(el);
    
    // Ensure tables have proper headers
    if ($table.find('thead').length === 0) {
      const $firstRow = $table.find('tr').first();
      if ($firstRow.find('td').length) {
        $firstRow.find('td').each((i, cell) => {
          const content = $(cell).html();
          $(cell).replaceWith(`<th>${content}</th>`);
        });
        const $thead = $('<thead></thead>');
        $thead.append($firstRow);
        $table.prepend($thead);
      }
    }
  });
  
  // Process blockquotes and notes
  $('.note, .warning, .info, .tip').each((i, el) => {
    const $el = $(el);
    const content = $el.html();
    const className = $el.attr('class');
    
    let prefix = '> ';
    if (className.includes('warning')) {
      prefix = '> ⚠️ **Warning:** ';
    } else if (className.includes('info')) {
      prefix = '> ℹ️ **Info:** ';
    } else if (className.includes('tip')) {
      prefix = '> 💡 **Tip:** ';
    } else if (className.includes('note')) {
      prefix = '> 📝 **Note:** ';
    }
    
    $el.replaceWith(`<blockquote>${prefix}${content}</blockquote>`);
  });
  
  // Process code blocks
  $('pre, code').each((i, el) => {
    const $el = $(el);
    
    if (el.tagName === 'PRE') {
      const content = $el.text();
      const language = $el.attr('data-language') || $el.attr('class')?.match(/language-(\w+)/)?.[1] || '';
      $el.replaceWith(`\n\`\`\`${language}\n${content}\n\`\`\`\n`);
    } else if (el.tagName === 'CODE' && !$(el).parent().is('pre')) {
      const content = $el.text();
      $el.replaceWith(`\`${content}\``);
    }
  });
  
  // Process links
  $('a').each((i, el) => {
    const $el = $(el);
    const href = $el.attr('href') || '';
    const text = $el.text();
    
    // Handle special cases for links
    if (href.startsWith('mailto:')) {
      $el.replaceWith(`[${text}](${href})`);
    }
  });
  
  // Process images
  $('img').each((i, el) => {
    const $el = $(el);
    const src = $el.attr('src') || '';
    const alt = $el.attr('alt') || '';
    const title = $el.attr('title') || '';
    
    const titleAttr = title ? ` "${title}"` : '';
    $el.replaceWith(`![${alt}](${src}${titleAttr})`);
  });
}

/**
 * Handle Confluence-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleConfluenceSpecifics($) {
  // Confluence-specific selectors and transformations
  $('.confluence-information-macro').each((i, el) => {
    const $el = $(el);
    const title = $el.find('.confluence-information-macro-header').text();
    const content = $el.find('.confluence-information-macro-body').html();
    
    let prefix = '> ';
    if ($el.hasClass('confluence-information-macro-warning')) {
      prefix = '> ⚠️ **Warning:** ';
    } else if ($el.hasClass('confluence-information-macro-information')) {
      prefix = '> ℹ️ **Info:** ';
    } else if ($el.hasClass('confluence-information-macro-tip')) {
      prefix = '> 💡 **Tip:** ';
    } else if ($el.hasClass('confluence-information-macro-note')) {
      prefix = '> 📝 **Note:** ';
    }
    
    $el.replaceWith(`<blockquote>${prefix}${title ? `**${title}**: ` : ''}${content}</blockquote>`);
  });
}

/**
 * Handle SharePoint-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleSharePointSpecifics($) {
  // SharePoint-specific selectors and transformations
  $('.ms-rtestate-field').each((i, el) => {
    // Process SharePoint rich text fields
    const $el = $(el);
    // Any specific processing for SharePoint content
  });
}

/**
 * Handle Jira-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleJiraSpecifics($) {
  // Jira-specific selectors and transformations
  $('.jira-issue-status').each((i, el) => {
    const $el = $(el);
    const key = $el.attr('data-issue-key');
    const status = $el.attr('data-issue-status');
    
    $el.replaceWith(`**JIRA Issue:** [${key}](https://jira.example.com/browse/${key}) (Status: ${status})`);
  });
}

/**
 * Handle WordPress-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleWordPressSpecifics($) {
  // WordPress-specific selectors and transformations
  $('.wp-block-code').each((i, el) => {
    const $el = $(el);
    const content = $el.text();
    const language = $el.attr('data-language') || '';
    
    $el.replaceWith(`\n\`\`\`${language}\n${content}\n\`\`\`\n`);
  });
}

/**
 * Convert HTML to Markdown using simple transformations
 * @param {string} html - HTML content
 * @returns {Promise<string>} - Markdown content
 */
async function htmlToMarkdown(html) {
  // A simple HTML to Markdown converter
  // For a real-world application, you might want to use a library like turndown
  
  // Load HTML with cheerio again to process the body
  const $ = cheerio.load(html);
  let markdown = '';
  
  // Process the body content
  $('body').children().each((i, el) => {
    markdown += processNode($, el) + '\n\n';
  });
  
  return markdown.trim();
}

/**
 * Process an HTML node and convert it to Markdown
 * @param {Object} $ - Cheerio instance
 * @param {Object} node - HTML node
 * @returns {string} - Markdown string
 */
function processNode($, node) {
  const $node = $(node);
  const tagName = node.tagName ? node.tagName.toLowerCase() : '';
  
  switch (tagName) {
    case 'h1':
      return `# ${$node.text()}`;
    case 'h2':
      return `## ${$node.text()}`;
    case 'h3':
      return `### ${$node.text()}`;
    case 'h4':
      return `#### ${$node.text()}`;
    case 'h5':
      return `##### ${$node.text()}`;
    case 'h6':
      return `###### ${$node.text()}`;
    case 'p':
      return $node.text();
    case 'ul':
      return processList($, node, '- ');
    case 'ol':
      return processList($, node, (i) => `${i+1}. `);
    case 'li':
      // This should be handled by processList
      return $node.text();
    case 'blockquote':
      return $node.children().map((i, el) => `> ${$(el).text()}`).get().join('\n> ');
    case 'pre':
      // Code blocks should already be transformed
      return $node.text();
    case 'table':
      return processTable($, node);
    case 'a':
      const href = $node.attr('href') || '';
      const text = $node.text();
      return `[${text}](${href})`;
    case 'img':
      const src = $node.attr('src') || '';
      const alt = $node.attr('alt') || '';
      const title = $node.attr('title') ? ` "${$node.attr('title')}"` : '';
      return `![${alt}](${src}${title})`;
    case 'br':
      return '\n';
    case 'hr':
      return '---';
    case 'strong':
    case 'b':
      return `**${$node.text()}**`;
    case 'em':
    case 'i':
      return `*${$node.text()}*`;
    case 'code':
      return `\`${$node.text()}\``;
    case 'div':
    case 'span':
    case 'section':
    case 'article':
    case 'main':
    case 'header':
    case 'footer':
      // For container elements, process their children
      let result = '';
      $node.children().each((i, el) => {
        result += processNode($, el) + '\n\n';
      });
      return result.trim();
    default:
      if (node.type === 'text') {
        return $(node).text().trim();
      }
      // For unknown elements, get their inner text
      return $node.text().trim();
  }
}

/**
 * Process list items
 * @param {Object} $ - Cheerio instance
 * @param {Object} listNode - List node
 * @param {string|Function} prefix - Prefix for list items
 * @returns {string} - Markdown list
 */
function processList($, listNode, prefix) {
  const $list = $(listNode);
  const items = [];
  
  $list.children('li').each((i, li) => {
    const $li = $(li);
    const itemPrefix = typeof prefix === 'function' ? prefix(i) : prefix;
    
    let item = $li.text().trim();
    
    // Handle nested lists
    if ($li.children('ul, ol').length) {
      item = $li.clone().children('ul, ol').remove().end().text().trim();
      const nestedList = $li.children('ul, ol').map((i, el) => {
        const nestedPrefix = $(el).is('ol') ? (j) => `    ${j+1}. ` : '    - ';
        return processList($, el, nestedPrefix);
      }).get().join('\n');
      
      items.push(`${itemPrefix}${item}\n${nestedList}`);
    } else {
      items.push(`${itemPrefix}${item}`);
    }
  });
  
  return items.join('\n');
}

/**
 * Process tables
 * @param {Object} $ - Cheerio instance
 * @param {Object} tableNode - Table node
 * @returns {string} - Markdown table
 */
function processTable($, tableNode) {
  const $table = $(tableNode);
  let markdown = '';
  
  // Process table headers
  const headers = [];
  const alignments = [];
  
  $table.find('thead th').each((i, th) => {
    const $th = $(th);
    headers.push($th.text().trim());
    
    // Determine alignment based on style or class
    const align = $th.attr('align') || $th.css('text-align');
    if (align === 'center') {
      alignments.push(':---:');
    } else if (align === 'right') {
      alignments.push('---:');
    } else {
      alignments.push(':---');
    }
  });
  
  // If no headers found, try getting them from first row
  if (headers.length === 0) {
    $table.find('tr').first().find('td, th').each((i, cell) => {
      headers.push($(cell).text().trim());
      alignments.push(':---');
    });
  }
  
  // Add headers to markdown
  markdown += `| ${headers.join(' | ')} |\n`;
  markdown += `| ${alignments.join(' | ')} |\n`;
  
  // Process table rows
  $table.find('tbody tr').each((i, tr) => {
    const cells = [];
    $(tr).find('td').each((j, td) => {
      cells.push($(td).text().trim());
    });
    markdown += `| ${cells.join(' | ')} |\n`;
  });
  
  return markdown;
}

/**
 * Clean up and format the markdown content
 * @param {string} markdown - Raw markdown content
 * @returns {string} - Cleaned up markdown
 */
function cleanupMarkdown(markdown) {
  return markdown
    // Fix extra line breaks
    .replace(/\n{3,}/g, '\n\n')
    // Fix spaces around code blocks
    .replace(/```\n\n/g, '```\n')
    .replace(/\n\n```/g, '\n```')
    // Clean up extra spaces
    .replace(/ +/g, ' ')
    // Fix line breaks in blockquotes
    .replace(/\n>/g, '\n> ')
    // Trim each line
    .split('\n').map(line => line.trim()).join('\n');
}

/**
 * Process a directory of HTML files and convert them to Markdown
 * @param {string} sourceDir - Directory containing HTML files
 * @param {string} destDir - Directory to save Markdown files
 * @param {object} options - Additional options for conversion
 * @returns {Promise<array>} - Results of the conversion
 */
async function processDirectory(sourceDir, destDir, options = {}) {
  const results = [];
  
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory ${sourceDir} does not exist`);
    return results;
  }
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  const files = fs.readdirSync(sourceDir);
  
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subResults = await processDirectory(
        sourcePath, 
        path.join(destDir, file),
        options
      );
      results.push(...subResults);
    } else if (file.endsWith('.html') || file.endsWith('.htm')) {
      // Process HTML files
      const baseName = path.basename(file, path.extname(file));
      const destPath = path.join(destDir, `${baseName}.md`);
      
      const result = await convertHtmlToMd(sourcePath, destPath, options);
      results.push(result);
    }
  }
  
  return results;
}

// CLI handling
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'convert':
      if (args.length < 3) {
        console.error('Usage: node html-to-md.js convert <source> <destination> [options]');
        process.exit(1);
      }
      
      const source = args[1];
      const dest = args[2];
      const options = {};
      
      // Parse additional options
      for (let i = 3; i < args.length; i += 2) {
        if (args[i].startsWith('--')) {
          const key = args[i].substring(2);
          const value = args[i + 1];
          options[key] = value;
        }
      }
      
      convertHtmlToMd(source, dest, options)
        .then(result => {
          if (result.success) {
            console.log(`Successfully converted ${source} to ${dest}`);
            process.exit(0);
          } else {
            console.error(`Failed to convert ${source}:`, result.error);
            process.exit(1);
          }
        })
        .catch(error => {
          console.error('Conversion error:', error);
          process.exit(1);
        });
      break;
      
    case 'batch':
      if (args.length < 3) {
        console.error('Usage: node html-to-md.js batch <sourceDir> <destDir> [options]');
        process.exit(1);
      }
      
      const sourceDir = args[1];
      const destDir = args[2];
      const batchOptions = {};
      
      // Parse additional options
      for (let i = 3; i < args.length; i += 2) {
        if (args[i].startsWith('--')) {
          const key = args[i].substring(2);
          const value = args[i + 1];
          batchOptions[key] = value;
        }
      }
      
      processDirectory(sourceDir, destDir, batchOptions)
        .then(results => {
          const successful = results.filter(r => r.success).length;
          console.log(`Batch conversion complete. ${successful}/${results.length} files converted successfully.`);
          process.exit(0);
        })
        .catch(error => {
          console.error('Batch conversion error:', error);
          process.exit(1);
        });
      break;
      
    default:
      console.error('Unknown command. Use "convert" or "batch".');
      process.exit(1);
  }
}

module.exports = {
  convertHtmlToMd,
  processHtmlContent,
  processDirectory,
  htmlToMarkdown
};