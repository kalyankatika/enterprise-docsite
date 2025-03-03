/**
 * Migration Utilities
 * 
 * A set of utilities for migrating content from various formats into the EDS documentation system.
 */

const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');
const { execSync } = require('child_process');

/**
 * Convert a Markdown file to the proper format and location
 * @param {string} filePath - Path to the source Markdown file
 * @returns {Promise<string>} - Path to the converted file
 */
async function convertMarkdown(filePath) {
  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Parse front matter
    const { data, content: markdownContent } = matter(content);
    
    if (!data.title) {
      throw new Error(`Missing required front matter: title in ${filePath}`);
    }
    
    // Determine destination based on category
    const category = data.category || 'components';
    const subcategory = data.subcategory || '';
    const legacySource = data.legacy_source || '';
    
    let destinationDir;
    
    // Determine the appropriate destination directory
    if (legacySource) {
      destinationDir = path.join('src', 'legacy', legacySource);
    } else if (category === 'components' && subcategory) {
      destinationDir = path.join('src', category, subcategory);
    } else {
      destinationDir = path.join('src', category);
    }
    
    // Create slug from title if filename is not specified
    const fileName = path.basename(filePath, '.md');
    const slug = fileName === 'index' ? 'index' : (data.slug || slugify(data.title));
    
    // Ensure destination directory exists
    fs.ensureDirSync(destinationDir);
    
    // Create destination file path
    const destinationPath = path.join(destinationDir, `${slug}.md`);
    
    // Write the file
    fs.writeFileSync(destinationPath, content);
    
    console.log(`Converted Markdown: ${filePath} -> ${destinationPath}`);
    
    return destinationPath;
  } catch (error) {
    console.error(`Error converting Markdown file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Convert a Nunjucks template to Markdown
 * @param {string} filePath - Path to the source Nunjucks file
 * @returns {Promise<string>} - Path to the converted file
 */
async function convertNunjucks(filePath) {
  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's a layout file or a content file
    if (content.includes('{% extends') || content.includes('{% block content %}')) {
      // This is likely a layout file, copy it to _includes/layouts
      const fileName = path.basename(filePath);
      const destinationPath = path.join('src', '_includes', 'layouts', fileName);
      
      // Ensure destination directory exists
      fs.ensureDirSync(path.dirname(destinationPath));
      
      // Copy the file
      fs.copyFileSync(filePath, destinationPath);
      
      console.log(`Copied layout: ${filePath} -> ${destinationPath}`);
      
      return destinationPath;
    } else {
      // Try to extract front matter if it exists
      let frontMatter = {};
      const frontMatterMatch = content.match(/---\s+([\s\S]*?)\s+---/);
      
      if (frontMatterMatch) {
        try {
          // Extract and parse front matter
          const frontMatterText = frontMatterMatch[1];
          const parsedFrontMatter = matter(`---\n${frontMatterText}\n---`);
          frontMatter = parsedFrontMatter.data;
        } catch (e) {
          console.warn(`Warning: Could not parse front matter in ${filePath}`);
        }
      }
      
      // If no title in front matter, try to extract from content
      if (!frontMatter.title) {
        const titleMatch = content.match(/<h1>(.*?)<\/h1>/) || content.match(/# (.*?)[\r\n]/);
        if (titleMatch) {
          frontMatter.title = titleMatch[1].trim();
        } else {
          // Use filename as title if nothing else found
          frontMatter.title = path.basename(filePath, '.njk');
        }
      }
      
      // Determine destination based on category or default to legacy
      const category = frontMatter.category || 'legacy';
      const subcategory = frontMatter.subcategory || '';
      const legacySource = frontMatter.legacy_source || 'njk';
      
      let destinationDir;
      
      // Determine the appropriate destination directory
      if (category === 'legacy' || legacySource) {
        destinationDir = path.join('src', 'legacy', legacySource);
      } else if (category === 'components' && subcategory) {
        destinationDir = path.join('src', category, subcategory);
      } else {
        destinationDir = path.join('src', category);
      }
      
      // Create slug from title if filename is not specified
      const fileName = path.basename(filePath, '.njk');
      const slug = fileName === 'index' ? 'index' : (frontMatter.slug || slugify(frontMatter.title));
      
      // Ensure destination directory exists
      fs.ensureDirSync(destinationDir);
      
      // For content files that should remain as njk, copy to destination
      if (category === 'legacy' || legacySource) {
        const destinationPath = path.join(destinationDir, `${slug}.njk`);
        fs.copyFileSync(filePath, destinationPath);
        console.log(`Copied Nunjucks: ${filePath} -> ${destinationPath}`);
        return destinationPath;
      } else {
        // Create index file if saving as a directory
        const destinationPath = path.join(destinationDir, `${slug}.md`);
        
        // Create new content with proper front matter and original content
        let newContent = '---\n';
        Object.entries(frontMatter).forEach(([key, value]) => {
          newContent += `${key}: ${typeof value === 'string' ? `"${value}"` : value}\n`;
        });
        newContent += '---\n\n';
        
        // Remove the original front matter if it exists
        let mainContent = content;
        if (frontMatterMatch) {
          mainContent = content.replace(frontMatterMatch[0], '');
        }
        
        newContent += mainContent;
        
        // Write the file
        fs.writeFileSync(destinationPath, newContent);
        
        console.log(`Converted Nunjucks: ${filePath} -> ${destinationPath}`);
        
        return destinationPath;
      }
    }
  } catch (error) {
    console.error(`Error converting Nunjucks file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Convert an HTML file to Markdown
 * @param {string} filePath - Path to the source HTML file
 * @returns {Promise<string>} - Path to the converted file
 */
async function convertHtml(filePath) {
  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Try to extract title
    const titleMatch = content.match(/<title>(.*?)<\/title>/) || content.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.html');
    
    // Create a temporary markdown file with minimal front matter
    const tempFile = path.join('src', 'incoming', 'temp.md');
    fs.writeFileSync(tempFile, `---
title: "${title}"
legacy_source: "html"
---

${content}
`);
    
    // Use html-to-md utility to convert
    const destinationDir = path.join('src', 'legacy', 'html');
    fs.ensureDirSync(destinationDir);
    
    const slug = slugify(title);
    const destinationPath = path.join(destinationDir, `${slug}.md`);
    
    // Simple HTML to MD conversion
    const markdown = await htmlToMarkdown(content);
    
    // Write front matter and converted content
    fs.writeFileSync(destinationPath, `---
title: "${title}"
description: "Converted from HTML"
legacy_source: "html"
---

${markdown}
`);
    
    console.log(`Converted HTML: ${filePath} -> ${destinationPath}`);
    
    return destinationPath;
  } catch (error) {
    console.error(`Error converting HTML file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Convert an XML file to Markdown
 * @param {string} filePath - Path to the source XML file
 * @returns {Promise<string>} - Path to the converted file
 */
async function convertXml(filePath) {
  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Determine XML type (DITA, DocBook, etc)
    const xmlType = detectXmlType(content);
    
    // Create a temporary XML file
    const tempFile = path.join('src', 'incoming', 'temp.xml');
    fs.writeFileSync(tempFile, content);
    
    // Determine destination directory
    const destinationDir = path.join('src', 'legacy', xmlType.toLowerCase());
    fs.ensureDirSync(destinationDir);
    
    // Extract title or use filename
    let title = path.basename(filePath, '.xml');
    if (xmlType === 'DITA') {
      const titleMatch = content.match(/<title>(.*?)<\/title>/);
      if (titleMatch) title = titleMatch[1].trim();
    } else if (xmlType === 'DocBook') {
      const titleMatch = content.match(/<title>(.*?)<\/title>/) || content.match(/<book.*?title="(.*?)"/);
      if (titleMatch) title = titleMatch[1].trim();
    }
    
    const slug = slugify(title);
    const destinationPath = path.join(destinationDir, `${slug}.md`);
    
    // Simple XML to MD conversion
    const markdown = await xmlToMarkdown(content, xmlType);
    
    // Write front matter and converted content
    fs.writeFileSync(destinationPath, `---
title: "${title}"
description: "Converted from ${xmlType} XML"
legacy_source: "${xmlType.toLowerCase()}"
---

${markdown}
`);
    
    console.log(`Converted XML (${xmlType}): ${filePath} -> ${destinationPath}`);
    
    return destinationPath;
  } catch (error) {
    console.error(`Error converting XML file ${filePath}:`, error);
    throw error;
  }
}

/**
 * Update the navigation with a new file
 * @param {string} filePath - Path to the file to add to navigation
 */
function updateNavigation(filePath) {
  // Implementation for navigation updates
  // This would parse the content, extract metadata, and update the navigation file
  console.log(`Updated navigation for ${filePath}`);
}

/**
 * Convert a string to a URL-friendly slug
 * @param {string} text - Text to convert to slug
 * @returns {string} - Slugified text
 */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\-\-+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')           // Trim - from start of text
    .replace(/-+$/, '');          // Trim - from end of text
}

/**
 * Detect the type of XML document
 * @param {string} content - XML content
 * @returns {string} - XML document type
 */
function detectXmlType(content) {
  if (content.includes('<topic') || content.includes('<concept') || 
      content.includes('<task') || content.includes('<reference')) {
    return 'DITA';
  } else if (content.includes('<book') || content.includes('<article') || 
             content.includes('DOCTYPE book') || content.includes('DOCTYPE article')) {
    return 'DocBook';
  } else {
    return 'Generic';
  }
}

/**
 * Simple HTML to Markdown converter
 * @param {string} html - HTML content
 * @returns {Promise<string>} - Markdown content
 */
async function htmlToMarkdown(html) {
  // Simple replacements for basic HTML to Markdown conversion
  let markdown = html;
  
  // Remove <html>, <head>, and <body> tags
  markdown = markdown.replace(/<html.*?>|<\/html>|<head>.*?<\/head>|<body.*?>|<\/body>/gs, '');
  
  // Convert common HTML elements
  markdown = markdown
    .replace(/<h1.*?>(.*?)<\/h1>/g, '# $1')
    .replace(/<h2.*?>(.*?)<\/h2>/g, '## $1')
    .replace(/<h3.*?>(.*?)<\/h3>/g, '### $1')
    .replace(/<h4.*?>(.*?)<\/h4>/g, '#### $1')
    .replace(/<h5.*?>(.*?)<\/h5>/g, '##### $1')
    .replace(/<h6.*?>(.*?)<\/h6>/g, '###### $1')
    .replace(/<p.*?>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<strong.*?>(.*?)<\/strong>/g, '**$1**')
    .replace(/<b.*?>(.*?)<\/b>/g, '**$1**')
    .replace(/<em.*?>(.*?)<\/em>/g, '*$1*')
    .replace(/<i.*?>(.*?)<\/i>/g, '*$1*')
    .replace(/<a href="(.*?)".*?>(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<ul.*?>(.*?)<\/ul>/gs, '$1')
    .replace(/<ol.*?>(.*?)<\/ol>/gs, '$1')
    .replace(/<li.*?>(.*?)<\/li>/g, '- $1\n')
    .replace(/<code.*?>(.*?)<\/code>/g, '`$1`')
    .replace(/<pre.*?>(.*?)<\/pre>/gs, '```\n$1\n```\n')
    .replace(/<br\s*\/?>/g, '\n');
    
  // Clean up extra whitespace
  markdown = markdown
    .replace(/\n\s+\n/g, '\n\n')
    .replace(/\n{3,}/g, '\n\n');
    
  return markdown;
}

/**
 * Simple XML to Markdown converter
 * @param {string} xml - XML content
 * @param {string} type - XML document type
 * @returns {Promise<string>} - Markdown content
 */
async function xmlToMarkdown(xml, type) {
  // Simple conversion for XML to Markdown
  if (type === 'DITA') {
    return convertDitaToMarkdown(xml);
  } else if (type === 'DocBook') {
    return convertDocBookToMarkdown(xml);
  } else {
    return convertGenericXmlToMarkdown(xml);
  }
}

/**
 * Convert DITA XML to Markdown
 * @param {string} xml - DITA XML content
 * @returns {string} - Markdown content
 */
function convertDitaToMarkdown(xml) {
  let markdown = '';
  
  // Extract title
  const titleMatch = xml.match(/<title>(.*?)<\/title>/);
  if (titleMatch) {
    markdown += `# ${titleMatch[1].trim()}\n\n`;
  }
  
  // Extract shortdesc
  const shortDescMatch = xml.match(/<shortdesc>(.*?)<\/shortdesc>/);
  if (shortDescMatch) {
    markdown += `${shortDescMatch[1].trim()}\n\n`;
  }
  
  // Extract main content
  const bodyMatch = xml.match(/<conbody>(.*?)<\/conbody>|<taskbody>(.*?)<\/taskbody>|<refbody>(.*?)<\/refbody>/s);
  if (bodyMatch) {
    let body = bodyMatch[1] || bodyMatch[2] || bodyMatch[3];
    
    // Convert sections and paragraphs
    body = body
      .replace(/<section.*?><title>(.*?)<\/title>/g, '## $1')
      .replace(/<\/section>/g, '')
      .replace(/<p>(.*?)<\/p>/g, '$1\n\n');
      
    // Convert lists
    body = body
      .replace(/<ul.*?>(.*?)<\/ul>/gs, '$1')
      .replace(/<ol.*?>(.*?)<\/ol>/gs, '$1')
      .replace(/<li>(.*?)<\/li>/g, '- $1\n');
      
    // Convert code and examples
    body = body
      .replace(/<codeblock.*?>(.*?)<\/codeblock>/gs, '```\n$1\n```\n')
      .replace(/<codeph>(.*?)<\/codeph>/g, '`$1`');
      
    markdown += body;
  }
  
  return markdown;
}

/**
 * Convert DocBook XML to Markdown
 * @param {string} xml - DocBook XML content
 * @returns {string} - Markdown content
 */
function convertDocBookToMarkdown(xml) {
  let markdown = '';
  
  // Extract title
  const titleMatch = xml.match(/<title>(.*?)<\/title>/) || xml.match(/<book.*?title="(.*?)"/);
  if (titleMatch) {
    markdown += `# ${titleMatch[1].trim()}\n\n`;
  }
  
  // Extract abstract or info
  const abstractMatch = xml.match(/<abstract>(.*?)<\/abstract>/s) || xml.match(/<info>(.*?)<\/info>/s);
  if (abstractMatch) {
    let abstract = abstractMatch[1];
    abstract = abstract.replace(/<para>(.*?)<\/para>/g, '$1\n\n');
    markdown += `${abstract.trim()}\n\n`;
  }
  
  // Extract chapters or sections
  const chapterMatches = xml.match(/<chapter.*?>(.*?)<\/chapter>/gs) || [];
  for (const chapterMatch of chapterMatches) {
    const chapterTitleMatch = chapterMatch.match(/<title>(.*?)<\/title>/);
    if (chapterTitleMatch) {
      markdown += `## ${chapterTitleMatch[1].trim()}\n\n`;
    }
    
    // Extract sections
    const sectionMatches = chapterMatch.match(/<section.*?>(.*?)<\/section>/gs) || [];
    for (const sectionMatch of sectionMatches) {
      const sectionTitleMatch = sectionMatch.match(/<title>(.*?)<\/title>/);
      if (sectionTitleMatch) {
        markdown += `### ${sectionTitleMatch[1].trim()}\n\n`;
      }
      
      // Extract paragraphs
      const paraMatches = sectionMatch.match(/<para>(.*?)<\/para>/gs) || [];
      for (const paraMatch of paraMatches) {
        const paraContent = paraMatch.replace(/<para>(.*?)<\/para>/s, '$1');
        markdown += `${paraContent.trim()}\n\n`;
      }
    }
  }
  
  return markdown;
}

/**
 * Convert generic XML to Markdown
 * @param {string} xml - XML content
 * @returns {string} - Markdown content
 */
function convertGenericXmlToMarkdown(xml) {
  // Very simple conversion for generic XML
  let markdown = '# Converted XML Document\n\n';
  
  // Extract text content (very naive approach)
  let textContent = xml
    .replace(/<\?xml.*?\?>/g, '')
    .replace(/<![^>]*>/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  markdown += textContent;
  
  return markdown;
}

module.exports = {
  convertMarkdown,
  convertNunjucks,
  convertHtml,
  convertXml,
  updateNavigation
};