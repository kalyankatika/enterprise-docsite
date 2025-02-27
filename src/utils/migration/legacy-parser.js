/**
 * Legacy Parser Utility
 * 
 * This utility handles parsing of proprietary legacy documentation formats
 * and converts them to Markdown for the Enterprise Documentation System.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Import the HTML to Markdown converter for content transformation
let htmlToMd;
try {
  htmlToMd = require('./html-to-md');
} catch (error) {
  console.warn('HTML to Markdown converter not available, some features will be limited');
  htmlToMd = null;
}

/**
 * Parse a legacy format file to Markdown
 * @param {string} source - Path to the source file
 * @param {string} dest - Path where to save the converted Markdown file
 * @param {object} options - Additional options for conversion
 * @returns {Promise<object>} - Result of the conversion
 */
async function parseLegacyToMd(source, dest, options = {}) {
  try {
    if (!fs.existsSync(source)) {
      throw new Error(`Source file not found: ${source}`);
    }

    // Create destination directory if it doesn't exist
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Determine the file format based on extension or option
    const format = options.format || detectFormat(source);
    
    // Read the source file
    const content = fs.readFileSync(source, 'utf8');
    
    // Parse the content based on format
    let result;
    switch (format.toLowerCase()) {
      case 'internalwiki':
        result = await parseInternalWikiFormat(content, options);
        break;
      case 'legacydoc':
        result = await parseLegacyDocFormat(content, options);
        break;
      case 'customxml':
        result = await parseCustomXmlFormat(content, options);
        break;
      case 'rtf':
        result = await parseRtfFormat(content, options);
        break;
      default:
        throw new Error(`Unsupported legacy format: ${format}`);
    }
    
    // Get the markdown content and front matter
    const { markdown, frontMatter: extractedFrontMatter } = result;
    
    // Merge with additional front matter from options
    const frontMatter = {
      ...extractedFrontMatter,
      ...(options.frontMatter || {})
    };
    
    // Combine front matter with the markdown content
    const frontMatterYaml = yaml.dump(frontMatter);
    const finalContent = `---\n${frontMatterYaml}---\n\n${markdown}`;
    
    // Write the result to the destination file
    fs.writeFileSync(dest, finalContent, 'utf8');
    
    console.log(`Successfully converted ${source} to ${dest}`);
    return { success: true, source, dest };
  } catch (error) {
    console.error(`Error converting ${source}:`, error);
    return { success: false, source, dest, error: error.message };
  }
}

/**
 * Detect the format of a legacy file based on extension and content
 * @param {string} filePath - Path to the file
 * @returns {string} - Detected format
 */
function detectFormat(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Check extension
  if (ext === '.iwiki') return 'internalwiki';
  if (ext === '.ldoc') return 'legacydoc';
  if (ext === '.cxml') return 'customxml';
  if (ext === '.rtf') return 'rtf';
  
  // If extension doesn't match, try to detect from content
  const sample = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' }).slice(0, 500);
  
  if (sample.includes('<internalwiki>')) return 'internalwiki';
  if (sample.includes('<legacydoc>')) return 'legacydoc';
  if (sample.includes('<customxml>')) return 'customxml';
  if (sample.startsWith('{\\rtf1\\')) return 'rtf';
  
  // Default to legacydoc if can't determine
  return 'legacydoc';
}

/**
 * Parse Internal Wiki Format
 * @param {string} content - File content
 * @param {object} options - Parsing options
 * @returns {Promise<object>} - Parsed result with markdown and frontMatter
 */
async function parseInternalWikiFormat(content, options = {}) {
  // Extract metadata from the header
  const metadataMatch = content.match(/---METADATA---\s*\{([\s\S]*?)\}\s*---ENDMETADATA---/);
  let frontMatter = {};
  
  if (metadataMatch) {
    try {
      // Parse the JSON metadata
      frontMatter = JSON.parse(`{${metadataMatch[1]}}`);
      
      // Remove metadata block from content
      content = content.replace(/---METADATA---\s*\{[\s\S]*?\}\s*---ENDMETADATA---/, '');
    } catch (error) {
      console.warn('Error parsing internal wiki metadata:', error);
    }
  }
  
  // Process the content
  let markdown = content;
  
  // Convert headings (e.g., =Heading 1=, ==Heading 2==)
  markdown = markdown.replace(/^=([^=].*?)=\s*$/gm, '# $1');
  markdown = markdown.replace(/^==([^=].*?)==\s*$/gm, '## $1');
  markdown = markdown.replace(/^===([^=].*?)===\s*$/gm, '### $1');
  markdown = markdown.replace(/^====([^=].*?)====\s*$/gm, '#### $1');
  
  // Convert lists
  markdown = markdown.replace(/^\*\s+(.*)$/gm, '- $1');
  markdown = markdown.replace(/^#\s+(.*)$/gm, '1. $1');
  
  // Convert links ([link text|URL])
  markdown = markdown.replace(/\[([^\[\]|]*?)\|([^\[\]]*?)\]/g, '[$1]($2)');
  
  // Convert simple inline formatting
  markdown = markdown.replace(/''(.*?)''/g, '**$1**');  // Bold
  markdown = markdown.replace(/\/\/(.*?)\/\//g, '*$1*'); // Italic
  markdown = markdown.replace(/\_\_(.*?)\_\_/g, '`$1`'); // Code
  
  // Convert tables
  markdown = markdown.replace(/\{\|([\s\S]*?)\|\}/g, (match, tableContent) => {
    const rows = tableContent.split(/\|-+/);
    let mdTable = '';
    
    // Process table rows
    rows.forEach((row, index) => {
      // Skip empty rows
      if (!row.trim()) return;
      
      // Process cells in the row
      const cells = row.split(/\|\|/).map(cell => cell.trim());
      
      // Skip the first empty cell if present
      if (cells[0] === '') cells.shift();
      
      // Add the row to markdown table
      mdTable += '| ' + cells.join(' | ') + ' |\n';
      
      // Add separator row after the header
      if (index === 0) {
        mdTable += '| ' + cells.map(() => '---').join(' | ') + ' |\n';
      }
    });
    
    return mdTable;
  });
  
  // Set standard front matter fields
  if (!frontMatter.layout) {
    frontMatter.layout = 'layouts/base.njk';
  }
  
  if (!frontMatter.title && content.match(/^=([^=].*?)=\s*$/m)) {
    frontMatter.title = content.match(/^=([^=].*?)=\s*$/m)[1].trim();
  }
  
  return { markdown, frontMatter };
}

/**
 * Parse Legacy Doc Format
 * @param {string} content - File content
 * @param {object} options - Parsing options
 * @returns {Promise<object>} - Parsed result with markdown and frontMatter
 */
async function parseLegacyDocFormat(content, options = {}) {
  // Extract document properties
  const titleMatch = content.match(/@TITLE:\s*(.*?)(?:\r?\n|$)/);
  const authorMatch = content.match(/@AUTHOR:\s*(.*?)(?:\r?\n|$)/);
  const dateMatch = content.match(/@DATE:\s*(.*?)(?:\r?\n|$)/);
  const tagsMatch = content.match(/@TAGS:\s*(.*?)(?:\r?\n|$)/);
  
  // Build front matter
  const frontMatter = {
    layout: 'layouts/base.njk',
    title: titleMatch ? titleMatch[1].trim() : 'Untitled Document',
    author: authorMatch ? authorMatch[1].trim() : undefined,
    date: dateMatch ? dateMatch[1].trim() : undefined
  };
  
  // Parse tags if present
  if (tagsMatch) {
    frontMatter.tags = tagsMatch[1].split(',').map(tag => tag.trim());
  }
  
  // Remove document properties from content
  let markdown = content
    .replace(/@TITLE:\s*(.*?)(?:\r?\n|$)/, '')
    .replace(/@AUTHOR:\s*(.*?)(?:\r?\n|$)/, '')
    .replace(/@DATE:\s*(.*?)(?:\r?\n|$)/, '')
    .replace(/@TAGS:\s*(.*?)(?:\r?\n|$)/, '');
  
  // Convert document sections
  markdown = markdown.replace(/@SECTION:\s*(.*?)(?:\r?\n|$)/g, '## $1\n\n');
  markdown = markdown.replace(/@SUBSECTION:\s*(.*?)(?:\r?\n|$)/g, '### $1\n\n');
  
  // Convert special blocks
  markdown = markdown.replace(/@NOTE_BEGIN\s*\r?\n([\s\S]*?)@NOTE_END/g, '> **Note:** $1\n\n');
  markdown = markdown.replace(/@WARNING_BEGIN\s*\r?\n([\s\S]*?)@WARNING_END/g, '> **Warning:** $1\n\n');
  markdown = markdown.replace(/@EXAMPLE_BEGIN\s*\r?\n([\s\S]*?)@EXAMPLE_END/g, '```\n$1\n```\n\n');
  
  // Convert code sections with language specification
  markdown = markdown.replace(/@CODE_BEGIN\((.*?)\)\s*\r?\n([\s\S]*?)@CODE_END/g, '```$1\n$2\n```\n\n');
  
  // Convert lists
  markdown = markdown.replace(/@ITEM\s+(.*?)(?:\r?\n|$)/g, '- $1\n');
  markdown = markdown.replace(/@ENUM\s+(.*?)(?:\r?\n|$)/g, '1. $1\n');
  
  // Convert links
  markdown = markdown.replace(/@LINK\((.*?),(.*?)\)/g, '[$2]($1)');
  
  // Convert images
  markdown = markdown.replace(/@IMAGE\((.*?),(.*?)\)/g, '![$2]($1)');
  
  return { markdown, frontMatter };
}

/**
 * Parse Custom XML Format
 * @param {string} content - File content
 * @param {object} options - Parsing options
 * @returns {Promise<object>} - Parsed result with markdown and frontMatter
 */
async function parseCustomXmlFormat(content, options = {}) {
  // For more complex XML, we'd use a proper XML parser
  // This is a simplified version using regex for demonstration
  
  // Extract document metadata
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const descMatch = content.match(/<description>(.*?)<\/description>/);
  const creatorMatch = content.match(/<creator>(.*?)<\/creator>/);
  const dateMatch = content.match(/<created-date>(.*?)<\/created-date>/);
  
  // Build front matter
  const frontMatter = {
    layout: 'layouts/base.njk',
    title: titleMatch ? titleMatch[1] : 'Untitled Document',
    description: descMatch ? descMatch[1] : undefined,
    author: creatorMatch ? creatorMatch[1] : undefined,
    date: dateMatch ? dateMatch[1] : undefined
  };
  
  // Extract keywords/tags if present
  const keywordsMatch = content.match(/<keywords>(.*?)<\/keywords>/);
  if (keywordsMatch) {
    frontMatter.tags = keywordsMatch[1].split(',').map(tag => tag.trim());
  }
  
  // Extract document body
  let documentBody = '';
  const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/);
  
  if (bodyMatch) {
    documentBody = bodyMatch[1];
  } else {
    // If no body tag found, use content after the metadata section
    const metadataEndIndex = content.indexOf('</metadata>');
    if (metadataEndIndex !== -1) {
      documentBody = content.substring(metadataEndIndex + 11);
    } else {
      documentBody = content;
    }
  }
  
  // If HTML to Markdown converter is available, use it
  let markdown;
  if (htmlToMd && documentBody.includes('<')) {
    try {
      // Process the document body as HTML
      const result = await htmlToMd.processHtmlContent(documentBody, options);
      markdown = result;
    } catch (error) {
      console.warn('Error converting HTML in custom XML:', error);
      // Fall back to simple replacement
      markdown = documentBody;
    }
  } else {
    // Basic conversion of common XML elements to Markdown
    markdown = documentBody
      // Convert sections
      .replace(/<section title="(.*?)">/g, '## $1\n\n')
      .replace(/<\/section>/g, '\n\n')
      
      // Convert paragraphs
      .replace(/<p>([\s\S]*?)<\/p>/g, '$1\n\n')
      
      // Convert lists
      .replace(/<ul>([\s\S]*?)<\/ul>/g, '$1\n')
      .replace(/<li>([\s\S]*?)<\/li>/g, '- $1\n')
      
      // Convert links
      .replace(/<link url="(.*?)">(.*?)<\/link>/g, '[$2]($1)')
      
      // Convert code blocks
      .replace(/<code language="(.*?)">([\s\S]*?)<\/code>/g, '```$1\n$2\n```\n\n')
      
      // Remove other XML tags
      .replace(/<[^>]+>/g, '');
  }
  
  return { markdown, frontMatter };
}

/**
 * Parse RTF Format
 * @param {string} content - File content
 * @param {object} options - Parsing options
 * @returns {Promise<object>} - Parsed result with markdown and frontMatter
 */
async function parseRtfFormat(content, options = {}) {
  // Note: Full RTF parsing would require a dedicated RTF parser library
  // This is a simplified version for demonstration purposes
  
  // Default front matter
  const frontMatter = {
    layout: 'layouts/base.njk',
    title: 'RTF Document'
  };
  
  // Try to extract title from RTF content (simplified)
  const titleMatch = content.match(/\\title\s+(.*?)(?:\\|\{|\})/);
  if (titleMatch) {
    frontMatter.title = titleMatch[1].trim();
  }
  
  // Try to extract author
  const authorMatch = content.match(/\\author\s+(.*?)(?:\\|\{|\})/);
  if (authorMatch) {
    frontMatter.author = authorMatch[1].trim();
  }
  
  // Extract plain text content (very simplified)
  let plainText = content
    // Remove RTF header
    .replace(/^{\\rtf1.*?\\viewkind4/, '')
    
    // Remove common RTF control sequences
    .replace(/\\[a-z]+\d*/g, '')
    .replace(/\\\n/g, '\n')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')
    
    // Remove curly braces
    .replace(/[{}]/g, '')
    
    // Clean up
    .trim();
  
  // Very basic paragraph detection
  plainText = plainText.replace(/\n\s*\n/g, '\n\n');
  
  // Basic structure detection (simplified)
  let markdown = '';
  const lines = plainText.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) {
      markdown += '\n\n';
      continue;
    }
    
    // Try to detect headings (based on line length and position)
    if (line.length < 60 && (i === 0 || !lines[i-1].trim())) {
      if (!frontMatter.title || frontMatter.title !== line) {
        // This could be a heading
        markdown += `## ${line}\n\n`;
        continue;
      }
    }
    
    // Regular paragraph
    markdown += `${line}\n\n`;
  }
  
  return { markdown, frontMatter };
}

/**
 * Process a directory of legacy format files and convert them to Markdown
 * @param {string} sourceDir - Directory containing legacy format files
 * @param {string} destDir - Directory to save Markdown files
 * @param {object} options - Additional options for conversion
 * @returns {Promise<array>} - Results of the conversions
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

    // Get all files in the source directory
    const files = fs.readdirSync(sourceDir);
    
    // Filter files based on format or extension
    const targetFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.iwiki', '.ldoc', '.cxml', '.rtf'].includes(ext) || 
             (options.format && options.extensions && 
              options.extensions.some(e => file.endsWith(e)));
    });

    const results = [];
    
    // Process each file
    for (const file of targetFiles) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, path.basename(file, path.extname(file)) + '.md');
      
      const result = await parseLegacyToMd(sourcePath, destPath, options);
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
  parseLegacyToMd,
  processDirectory,
  detectFormat
};

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'convert') {
    // Convert a single file: node legacy-parser.js convert source.ext dest.md [format]
    const source = args[1];
    const dest = args[2];
    const format = args[3];
    
    if (!source || !dest) {
      console.error('Usage: node legacy-parser.js convert <source.ext> <dest.md> [format]');
      process.exit(1);
    }
    
    const options = format ? { format } : {};
    
    parseLegacyToMd(source, dest, options)
      .catch(() => process.exit(1));
  } 
  else if (command === 'batch') {
    // Process a directory: node legacy-parser.js batch sourceDir destDir [format]
    const sourceDir = args[1];
    const destDir = args[2];
    const format = args[3];
    
    if (!sourceDir || !destDir) {
      console.error('Usage: node legacy-parser.js batch <sourceDir> <destDir> [format]');
      process.exit(1);
    }
    
    const options = format ? { format } : {};
    
    processDirectory(sourceDir, destDir, options)
      .catch(() => process.exit(1));
  }
  else {
    console.error('Unknown command. Use "convert" or "batch".');
    console.error('Usage:');
    console.error('  node legacy-parser.js convert <source.ext> <dest.md> [format]');
    console.error('  node legacy-parser.js batch <sourceDir> <destDir> [format]');
    process.exit(1);
  }
}