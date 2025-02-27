/**
 * HTML to Markdown Migration Utility
 * 
 * This utility converts HTML files from legacy documentation sites to Markdown format
 * for use in the 11ty-based Enterprise Documentation System.
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { marked } = require('marked');
const yaml = require('js-yaml');
const frontMatter = require('front-matter');

/**
 * Convert HTML file to Markdown
 * @param {string} source - Path to the source HTML file
 * @param {string} dest - Path where to save the converted Markdown file
 * @param {object} options - Additional options for the conversion
 * @returns {Promise<void>}
 */
async function convertHtmlToMd(source, dest, options = {}) {
  try {
    if (!fs.existsSync(source)) {
      throw new Error(`Source file not found: ${source}`);
    }

    // Create destination directory if it doesn't exist
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Read the HTML file
    const htmlContent = fs.readFileSync(source, 'utf8');

    // Extract front matter if it exists
    let content = htmlContent;
    let frontMatterData = {};

    if (htmlContent.trim().startsWith('---')) {
      const parsed = frontMatter(htmlContent);
      content = parsed.body;
      frontMatterData = parsed.attributes;
    }

    // Additional front matter from options
    if (options.frontMatter) {
      frontMatterData = { ...frontMatterData, ...options.frontMatter };
    }

    // Convert HTML to Markdown
    const markdown = await processHtmlContent(content, options);

    // Combine front matter with the converted markdown
    const frontMatterYaml = yaml.dump(frontMatterData);
    const result = `---\n${frontMatterYaml}---\n\n${markdown}`;

    // Write the result to the destination file
    fs.writeFileSync(dest, result, 'utf8');
    
    console.log(`Successfully converted ${source} to ${dest}`);
    return { success: true, source, dest };
  } catch (error) {
    console.error(`Error converting ${source} to Markdown:`, error);
    return { success: false, source, dest, error: error.message };
  }
}

/**
 * Process HTML content and convert it to markdown
 * @param {string} html - HTML content to process
 * @param {object} options - Processing options
 * @returns {Promise<string>} - Markdown content
 */
async function processHtmlContent(html, options = {}) {
  try {
    // Preserve code blocks
    const codeBlocks = [];
    let processedHtml = html.replace(/<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/g, (match, code) => {
      const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
      codeBlocks.push(match);
      return placeholder;
    });

    // Load HTML into cheerio
    const $ = cheerio.load(processedHtml);

    // Site-specific transformations based on options
    if (options.siteType) {
      processedHtml = applySiteSpecificTransformations($, options.siteType);
    } else {
      // Default processing
      processCommonElements($);
    }

    // Get the processed HTML
    processedHtml = $.html();

    // Convert HTML to Markdown
    let markdown = await htmlToMarkdown(processedHtml);

    // Restore code blocks
    codeBlocks.forEach((codeBlock, index) => {
      const placeholder = `__CODE_BLOCK_${index}__`;
      const language = codeBlock.match(/class="language-([^"]+)"/)?.[1] || '';
      
      // Extract the code content
      const codeContent = codeBlock.match(/<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/)?.[1] || '';
      
      // Create markdown code block
      const markdownCodeBlock = '```' + language + '\n' + 
        codeContent
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'") + 
        '\n```\n';
      
      markdown = markdown.replace(placeholder, markdownCodeBlock);
    });

    // Clean up the markdown
    markdown = cleanupMarkdown(markdown);

    return markdown;
  } catch (error) {
    console.error('Error processing HTML content:', error);
    throw error;
  }
}

/**
 * Apply transformations specific to different legacy site types
 * @param {Object} $ - Cheerio instance
 * @param {string} siteType - Type of legacy site ('confluence', 'sharepoint', 'jira', etc.)
 * @returns {string} - Processed HTML
 */
function applySiteSpecificTransformations($, siteType) {
  switch (siteType.toLowerCase()) {
    case 'confluence':
      // Confluence-specific transformations
      handleConfluenceSpecifics($);
      break;
    case 'sharepoint':
      // SharePoint-specific transformations
      handleSharePointSpecifics($);
      break;
    case 'jira':
      // Jira-specific transformations
      handleJiraSpecifics($);
      break;
    case 'wordpress':
      // WordPress-specific transformations
      handleWordPressSpecifics($);
      break;
    default:
      // Default processing for unknown site types
      processCommonElements($);
  }

  return $.html();
}

/**
 * Process common HTML elements for any site type
 * @param {Object} $ - Cheerio instance
 */
function processCommonElements($) {
  // Process tables to make them more markdown-friendly
  $('table').each((i, table) => {
    const $table = $(table);
    
    // Add a class to identify it as a markdown-compatible table
    $table.addClass('markdown-table');
    
    // Ensure table has headers
    if ($table.find('th').length === 0 && $table.find('tr').length > 0) {
      const $firstRow = $table.find('tr').first();
      $firstRow.find('td').each((j, cell) => {
        const $cell = $(cell);
        const $newHeader = $('<th></th>').html($cell.html());
        $cell.replaceWith($newHeader);
      });
    }
  });

  // Handle images
  $('img').each((i, img) => {
    const $img = $(img);
    const src = $img.attr('src') || '';
    const alt = $img.attr('alt') || '';
    
    // Check if it's an external image
    if (src.startsWith('http') || src.startsWith('//')) {
      // Keep external images as-is
    } else {
      // For local images, we might need to fix paths
      // This depends on the migration strategy for images
    }
    
    // Ensure all images have alt text
    if (!alt) {
      $img.attr('alt', 'Image');
    }
  });

  // Transform divs with specific classes to their semantic equivalents
  $('div.note, div.info, div.warning, div.error, div.tip').each((i, div) => {
    const $div = $(div);
    const className = $div.attr('class');
    let prefix = '> ';
    
    if (className.includes('note')) prefix = '> **Note:** ';
    if (className.includes('info')) prefix = '> **Info:** ';
    if (className.includes('warning')) prefix = '> **Warning:** ';
    if (className.includes('error')) prefix = '> **Error:** ';
    if (className.includes('tip')) prefix = '> **Tip:** ';
    
    const content = $div.html();
    const $blockquote = $('<blockquote></blockquote>').html(prefix + content);
    $div.replaceWith($blockquote);
  });
}

/**
 * Handle Confluence-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleConfluenceSpecifics($) {
  // First, apply common transformations
  processCommonElements($);
  
  // Handle Confluence-specific classes and elements
  
  // Handle Confluence macros
  $('div.confluence-information-macro').each((i, div) => {
    const $div = $(div);
    const macroType = $div.hasClass('confluence-information-macro-note') ? 'Note' :
                     $div.hasClass('confluence-information-macro-warning') ? 'Warning' :
                     $div.hasClass('confluence-information-macro-info') ? 'Info' :
                     $div.hasClass('confluence-information-macro-tip') ? 'Tip' : 'Info';
    
    const $macroBody = $div.find('.confluence-information-macro-body');
    const content = $macroBody.html() || '';
    
    const $blockquote = $('<blockquote></blockquote>').html(`**${macroType}:** ${content}`);
    $div.replaceWith($blockquote);
  });
  
  // Handle Confluence code blocks
  $('div.code').each((i, div) => {
    const $div = $(div);
    const content = $div.text();
    const $pre = $('<pre></pre>');
    const $code = $('<code></code>').text(content);
    $pre.append($code);
    $div.replaceWith($pre);
  });
  
  // Handle Confluence attachments
  $('ri\\:attachment, ri\\:page, ri\\:content').remove();
  
  // Handle Confluence page properties
  $('ac\\:structured-macro[ac\\:name="details"]').each((i, macro) => {
    const $macro = $(macro);
    const $title = $macro.find('ac\\:parameter[ac\\:name="title"]');
    const $body = $macro.find('ac\\:rich-text-body');
    
    const title = $title.text();
    const body = $body.html();
    
    const $details = $('<details></details>');
    const $summary = $('<summary></summary>').text(title);
    $details.append($summary);
    $details.append(body);
    
    $macro.replaceWith($details);
  });
}

/**
 * Handle SharePoint-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleSharePointSpecifics($) {
  // Apply common transformations first
  processCommonElements($);
  
  // SharePoint-specific transformations would go here
  // Remove SharePoint UI elements
  $('.ms-rtestate-field, .ms-rtestate-read, .ms-rte-wpbox').each((i, el) => {
    const $el = $(el);
    const content = $el.html();
    $el.replaceWith(content);
  });
  
  // Handle SharePoint web parts
  $('div[id^="WebPartWPQ"]').each((i, div) => {
    const $div = $(div);
    
    // Check if it's a document library web part
    if ($div.find('.ms-WPBody table.ms-listviewtable').length > 0) {
      // Convert document library to a Markdown list
      const $list = $('<ul></ul>');
      
      $div.find('.ms-listviewtable tbody tr').each((j, row) => {
        const $row = $(row);
        const title = $row.find('td.ms-vb-title a').text();
        const link = $row.find('td.ms-vb-title a').attr('href');
        
        if (title && link) {
          const $item = $('<li></li>');
          const $link = $('<a></a>').attr('href', link).text(title);
          $item.append($link);
          $list.append($item);
        }
      });
      
      $div.replaceWith($list);
    }
  });
}

/**
 * Handle Jira-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleJiraSpecifics($) {
  // Apply common transformations first
  processCommonElements($);
  
  // Jira-specific transformations
  
  // Handle Jira issue links
  $('a[href*="browse/"]').each((i, link) => {
    const $link = $(link);
    const href = $link.attr('href');
    const text = $link.text();
    
    // If the link text is an issue key (e.g., EDS-123)
    if (/[A-Z]+-\d+/.test(text)) {
      // Keep the link but add a class for reference
      $link.addClass('jira-issue-link');
    }
  });
  
  // Handle Jira panels
  $('.aui-message, .jira-info-panel').each((i, panel) => {
    const $panel = $(panel);
    let type = 'info';
    
    if ($panel.hasClass('warning')) type = 'warning';
    if ($panel.hasClass('error')) type = 'error';
    if ($panel.hasClass('success')) type = 'success';
    
    const content = $panel.html();
    const $blockquote = $('<blockquote></blockquote>').html(`**${type.charAt(0).toUpperCase() + type.slice(1)}:** ${content}`);
    $panel.replaceWith($blockquote);
  });
}

/**
 * Handle WordPress-specific content transformations
 * @param {Object} $ - Cheerio instance
 */
function handleWordPressSpecifics($) {
  // Apply common transformations first
  processCommonElements($);
  
  // WordPress-specific transformations
  
  // Handle WordPress shortcodes
  $('p').each((i, p) => {
    const $p = $(p);
    const content = $p.html();
    
    // Replace WordPress shortcodes with Markdown equivalents
    if (content && content.includes('[') && content.includes(']')) {
      let newContent = content
        // Replace gallery shortcode
        .replace(/\[gallery.*?\]/g, '*Image gallery*')
        // Replace caption shortcode
        .replace(/\[caption.*?\](.*?)\[\/caption\]/g, '$1')
        // Replace other common shortcodes
        .replace(/\[button.*?\](.*?)\[\/button\]/g, '**$1**');
      
      $p.html(newContent);
    }
  });
  
  // Remove WordPress specific classes
  $('[class^="wp-"]').each((i, el) => {
    const $el = $(el);
    $el.removeAttr('class');
  });
}

/**
 * Convert HTML to Markdown using marked
 * @param {string} html - HTML content
 * @returns {Promise<string>} - Markdown content
 */
async function htmlToMarkdown(html) {
  try {
    // Remove empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '');
    
    // Split by lines to process each line
    const lines = html.split('\n');
    let markdown = '';
    
    for (const line of lines) {
      // Skip empty lines and HTML comments
      if (line.trim() === '' || line.trim().startsWith('<!--')) {
        markdown += '\n';
        continue;
      }
      
      // Convert the line to markdown
      let lineMarkdown = '';
      
      try {
        // Use marked to parse HTML to markdown
        const tokens = marked.lexer(line);
        lineMarkdown = marked.parser(tokens);
      } catch (error) {
        // If marked fails, just keep the original line
        lineMarkdown = line;
      }
      
      markdown += lineMarkdown;
    }
    
    return markdown;
  } catch (error) {
    console.error('Error converting HTML to Markdown:', error);
    throw error;
  }
}

/**
 * Clean up and format the markdown content
 * @param {string} markdown - Raw markdown content
 * @returns {string} - Cleaned up markdown
 */
function cleanupMarkdown(markdown) {
  return markdown
    // Remove extra newlines
    .replace(/\n{3,}/g, '\n\n')
    // Fix markdown list items that might be broken
    .replace(/^\s*[-*+]\s+/gm, '- ')
    // Fix headers
    .replace(/^#+\s*/gm, match => match.trim() + ' ')
    // Fix html entities
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * Process a directory of HTML files and convert them to Markdown
 * @param {string} sourceDir - Directory containing HTML files
 * @param {string} destDir - Directory to save Markdown files
 * @param {object} options - Additional options for conversion
 * @returns {Promise<array>} - Results of the conversion
 */
async function processDirectory(sourceDir, destDir, options = {}) {
  try {
    if (!fs.existsSync(sourceDir)) {
      throw new Error(`Source directory not found: ${sourceDir}`);
    }

    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Get all HTML files in the source directory
    const files = fs.readdirSync(sourceDir)
      .filter(file => file.endsWith('.html') || file.endsWith('.htm'));

    const results = [];
    
    // Process each file
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file.replace(/\.html?$/, '.md'));
      
      const result = await convertHtmlToMd(sourcePath, destPath, options);
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
  convertHtmlToMd,
  processDirectory,
  processHtmlContent
};

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'convert') {
    // Convert a single file: node html-to-md.js convert source.html dest.md [siteType]
    const source = args[1];
    const dest = args[2];
    const siteType = args[3];
    
    if (!source || !dest) {
      console.error('Usage: node html-to-md.js convert <source.html> <dest.md> [siteType]');
      process.exit(1);
    }
    
    const options = siteType ? { siteType } : {};
    
    convertHtmlToMd(source, dest, options)
      .catch(() => process.exit(1));
  } 
  else if (command === 'batch') {
    // Process a directory: node html-to-md.js batch sourceDir destDir [siteType]
    const sourceDir = args[1];
    const destDir = args[2];
    const siteType = args[3];
    
    if (!sourceDir || !destDir) {
      console.error('Usage: node html-to-md.js batch <sourceDir> <destDir> [siteType]');
      process.exit(1);
    }
    
    const options = siteType ? { siteType } : {};
    
    processDirectory(sourceDir, destDir, options)
      .catch(() => process.exit(1));
  }
  else {
    console.error('Unknown command. Use "convert" or "batch".');
    console.error('Usage:');
    console.error('  node html-to-md.js convert <source.html> <dest.md> [siteType]');
    console.error('  node html-to-md.js batch <sourceDir> <destDir> [siteType]');
    process.exit(1);
  }
}