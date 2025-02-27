/**
 * Nunjucks to Markdown Converter Utility
 * 
 * This utility converts Nunjucks (.njk) files to Markdown (.md) format
 * to help with content migration and consolidation across documentation sites.
 */

const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const frontMatter = require('front-matter');
const yaml = require('js-yaml');
const { marked } = require('marked');
const cheerio = require('cheerio');

// Configure Nunjucks environment
const nunjucksEnv = new nunjucks.Environment(
  new nunjucks.FileSystemLoader([
    path.join(__dirname, '../_includes'),
    path.join(__dirname, '../')
  ])
);

/**
 * Convert a Nunjucks template to Markdown
 * @param {string} source - The path to the source .njk file
 * @param {string} dest - The path where to save the .md file
 * @param {object} data - Optional data to pass to the Nunjucks template
 * @returns {Promise<void>}
 */
async function convertNjkToMd(source, dest, data = {}) {
  try {
    if (!fs.existsSync(source)) {
      throw new Error(`Source file not found: ${source}`);
    }

    // Create destination directory if it doesn't exist
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Read the Nunjucks file
    const njkContent = fs.readFileSync(source, 'utf8');

    // Extract front matter if it exists
    let content = njkContent;
    let frontMatterData = {};

    if (njkContent.trim().startsWith('---')) {
      const parsed = frontMatter(njkContent);
      content = parsed.body;
      frontMatterData = parsed.attributes;
    }

    // Render the Nunjucks template with provided data
    const renderedHtml = nunjucksEnv.renderString(content, {
      ...data,
      ...frontMatterData
    });

    // Convert HTML to Markdown
    const markdown = convertHtmlToMarkdown(renderedHtml);

    // Combine front matter with the converted markdown
    const frontMatterYaml = yaml.dump(frontMatterData);
    const result = `---\n${frontMatterYaml}---\n\n${markdown}`;

    // Write the result to the destination file
    fs.writeFileSync(dest, result, 'utf8');
    
    console.log(`Successfully converted ${source} to ${dest}`);
  } catch (error) {
    console.error(`Error converting ${source} to Markdown:`, error);
    throw error;
  }
}

/**
 * Convert HTML to Markdown
 * @param {string} html - The HTML content to convert
 * @returns {string} - The resulting Markdown content
 */
function convertHtmlToMarkdown(html) {
  try {
    // First, preserve code blocks and replace them with placeholders
    const codeBlocks = [];
    let modifiedHtml = html.replace(/<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/g, (match, code) => {
      const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
      codeBlocks.push(match);
      return placeholder;
    });

    // Load HTML into cheerio for better parsing
    const $ = cheerio.load(modifiedHtml);

    // Process tables to make them more markdown-friendly
    $('table').each((i, table) => {
      const $table = $(table);
      const headers = [];
      const rows = [];

      // Extract headers
      $table.find('th').each((j, th) => {
        headers.push($(th).text().trim());
      });

      // Extract rows
      $table.find('tr').each((j, tr) => {
        if (j > 0) { // Skip header row
          const rowData = [];
          $(tr).find('td').each((k, td) => {
            rowData.push($(td).text().trim());
          });
          rows.push(rowData);
        }
      });

      // Create markdown table
      let markdownTable = '';
      
      // Header row
      markdownTable += '| ' + headers.join(' | ') + ' |\n';
      
      // Separator row
      markdownTable += '| ' + headers.map(() => '---').join(' | ') + ' |\n';
      
      // Data rows
      rows.forEach(row => {
        markdownTable += '| ' + row.join(' | ') + ' |\n';
      });

      // Replace the table with markdown version
      $table.replaceWith(markdownTable);
    });

    // Get the HTML back from cheerio
    let processedHtml = $.html();

    // Convert HTML to Markdown using marked
    let markdown = '';
    
    // Split by lines to process each line
    const lines = processedHtml.split('\n');
    
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

    // Final cleanup of the markdown
    markdown = markdown
      // Remove extra newlines
      .replace(/\n{3,}/g, '\n\n')
      // Fix markdown list items that might be broken
      .replace(/^\s*[-*+]\s+/gm, '- ')
      // Fix headers
      .replace(/^#+\s*/gm, match => match.trim() + ' ');

    return markdown;
  } catch (error) {
    console.error('Error converting HTML to Markdown:', error);
    return html; // Return original HTML if conversion fails
  }
}

/**
 * Process a directory of Nunjucks files and convert them to Markdown
 * @param {string} sourceDir - The directory containing .njk files
 * @param {string} destDir - The directory where to save .md files
 * @param {object} data - Optional data to pass to the Nunjucks templates
 * @returns {Promise<void>}
 */
async function processDirectory(sourceDir, destDir, data = {}) {
  try {
    if (!fs.existsSync(sourceDir)) {
      throw new Error(`Source directory not found: ${sourceDir}`);
    }

    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Get all .njk files in the source directory
    const files = fs.readdirSync(sourceDir)
      .filter(file => file.endsWith('.njk'));

    // Process each file
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file.replace('.njk', '.md'));
      await convertNjkToMd(sourcePath, destPath, data);
    }

    console.log(`Successfully processed directory: ${sourceDir}`);
  } catch (error) {
    console.error(`Error processing directory ${sourceDir}:`, error);
    throw error;
  }
}

// Export the utility functions
module.exports = {
  convertNjkToMd,
  processDirectory
};

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'convert') {
    // Convert a single file: node njk-to-md.js convert source.njk dest.md
    const source = args[1];
    const dest = args[2];
    
    if (!source || !dest) {
      console.error('Usage: node njk-to-md.js convert <source.njk> <dest.md>');
      process.exit(1);
    }
    
    convertNjkToMd(source, dest)
      .catch(() => process.exit(1));
  } 
  else if (command === 'batch') {
    // Process a directory: node njk-to-md.js batch sourceDir destDir
    const sourceDir = args[1];
    const destDir = args[2];
    
    if (!sourceDir || !destDir) {
      console.error('Usage: node njk-to-md.js batch <sourceDir> <destDir>');
      process.exit(1);
    }
    
    processDirectory(sourceDir, destDir)
      .catch(() => process.exit(1));
  }
  else {
    console.error('Unknown command. Use "convert" or "batch".');
    console.error('Usage:');
    console.error('  node njk-to-md.js convert <source.njk> <dest.md>');
    console.error('  node njk-to-md.js batch <sourceDir> <destDir>');
    process.exit(1);
  }
}
