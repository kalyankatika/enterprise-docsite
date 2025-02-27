/**
 * XML to Markdown Migration Utility
 * 
 * This utility converts XML-based documentation (like DITA, DocBook)
 * to Markdown format for use in the 11ty-based Enterprise Documentation System.
 */

const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');
const yaml = require('js-yaml');

/**
 * Convert XML file to Markdown
 * @param {string} source - Path to the source XML file
 * @param {string} dest - Path where to save the converted Markdown file
 * @param {object} options - Additional options for the conversion
 * @returns {Promise<object>} - Result of the conversion
 */
async function convertXmlToMd(source, dest, options = {}) {
  try {
    if (!fs.existsSync(source)) {
      throw new Error(`Source file not found: ${source}`);
    }

    // Create destination directory if it doesn't exist
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Read the XML file
    const xmlContent = fs.readFileSync(source, 'utf8');

    // Parse XML content
    const doc = new DOMParser().parseFromString(xmlContent, 'text/xml');

    // Generate front matter based on XML metadata
    const frontMatterData = extractFrontMatter(doc, options);

    // Additional front matter from options
    if (options.frontMatter) {
      Object.assign(frontMatterData, options.frontMatter);
    }

    // Convert XML to Markdown based on the document type
    let markdown = '';
    
    if (options.xmlType === 'dita') {
      markdown = await processDitaDocument(doc, options);
    } else if (options.xmlType === 'docbook') {
      markdown = await processDocBookDocument(doc, options);
    } else {
      // Try to auto-detect XML type
      const rootNode = doc.documentElement;
      if (rootNode.nodeName === 'topic' || rootNode.nodeName === 'concept' || rootNode.nodeName === 'task') {
        markdown = await processDitaDocument(doc, options);
      } else if (rootNode.nodeName === 'article' || rootNode.nodeName === 'book' || rootNode.nodeName === 'chapter') {
        markdown = await processDocBookDocument(doc, options);
      } else {
        // Default generic XML processing
        markdown = await processGenericXmlDocument(doc, options);
      }
    }

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
 * Extract front matter data from XML document
 * @param {Document} doc - XML DOM document
 * @param {object} options - Extraction options
 * @returns {object} - Front matter data
 */
function extractFrontMatter(doc, options = {}) {
  const frontMatter = {};
  const rootNode = doc.documentElement;

  // Default front matter
  frontMatter.layout = options.layout || 'layouts/base.njk';
  
  // Try to extract title
  let titleNode;
  
  // Check for DITA title
  titleNode = doc.getElementsByTagName('title')[0];
  if (titleNode) {
    frontMatter.title = titleNode.textContent.trim();
  }
  
  // DocBook title
  if (!frontMatter.title) {
    titleNode = doc.getElementsByTagName('info')[0]?.getElementsByTagName('title')[0];
    if (titleNode) {
      frontMatter.title = titleNode.textContent.trim();
    }
  }
  
  // Extract description/abstract
  let descNode;
  
  // DITA shortdesc
  descNode = doc.getElementsByTagName('shortdesc')[0];
  if (descNode) {
    frontMatter.description = descNode.textContent.trim();
  }
  
  // DocBook abstract
  if (!frontMatter.description) {
    descNode = doc.getElementsByTagName('abstract')[0];
    if (descNode) {
      frontMatter.description = getTextContent(descNode).trim();
    }
  }
  
  // Extract date information
  const created = getCreatedDate(doc);
  if (created) {
    frontMatter.date = created;
  }
  
  // Extract author information
  const author = getAuthorInfo(doc);
  if (author) {
    frontMatter.author = author;
  }
  
  // Add additional metadata
  if (options.metadata) {
    Object.assign(frontMatter, options.metadata);
  }
  
  return frontMatter;
}

/**
 * Process a DITA XML document
 * @param {Document} doc - XML DOM document
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
async function processDitaDocument(doc, options = {}) {
  let markdown = '';
  const rootNode = doc.documentElement;
  
  // Process DITA content based on topic type
  if (rootNode.nodeName === 'concept') {
    markdown = processDitaConcept(rootNode, options);
  } else if (rootNode.nodeName === 'task') {
    markdown = processDitaTask(rootNode, options);
  } else if (rootNode.nodeName === 'reference') {
    markdown = processDitaReference(rootNode, options);
  } else {
    // Generic DITA topic processing
    markdown = processDitaTopic(rootNode, options);
  }
  
  return markdown;
}

/**
 * Process a DocBook XML document
 * @param {Document} doc - XML DOM document
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
async function processDocBookDocument(doc, options = {}) {
  let markdown = '';
  const rootNode = doc.documentElement;
  
  // Process DocBook content based on document type
  if (rootNode.nodeName === 'article') {
    markdown = processDocBookArticle(rootNode, options);
  } else if (rootNode.nodeName === 'book') {
    markdown = processDocBookBook(rootNode, options);
  } else if (rootNode.nodeName === 'chapter') {
    markdown = processDocBookChapter(rootNode, options);
  } else {
    // Generic DocBook processing
    markdown = processDocBookGeneric(rootNode, options);
  }
  
  return markdown;
}

/**
 * Process a generic XML document
 * @param {Document} doc - XML DOM document
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
async function processGenericXmlDocument(doc, options = {}) {
  let markdown = '';
  const rootNode = doc.documentElement;
  
  // Process the main content section
  let contentNode = null;
  
  // Try to find the main content section based on common XML patterns
  const contentNodeNames = ['content', 'body', 'main', 'text', 'section'];
  for (const nodeName of contentNodeNames) {
    const nodes = rootNode.getElementsByTagName(nodeName);
    if (nodes.length > 0) {
      contentNode = nodes[0];
      break;
    }
  }
  
  if (contentNode) {
    markdown = processXmlNode(contentNode, options);
  } else {
    // If no specific content section found, process the entire document
    markdown = processXmlNode(rootNode, options);
  }
  
  return markdown;
}

/**
 * Process a generic XML node to Markdown
 * @param {Node} node - XML node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processXmlNode(node, options = {}) {
  if (!node) return '';
  
  // Skip comment nodes
  if (node.nodeType === 8) return '';
  
  // Text node
  if (node.nodeType === 3) {
    return node.nodeValue.trim();
  }
  
  let result = '';
  
  // Process based on node name
  switch (node.nodeName) {
    case 'p':
    case 'para':
      result = processChildren(node, options) + '\n\n';
      break;
      
    case 'h1':
    case 'title':
      result = '# ' + processChildren(node, options) + '\n\n';
      break;
      
    case 'h2':
    case 'subtitle':
      result = '## ' + processChildren(node, options) + '\n\n';
      break;
      
    case 'h3':
      result = '### ' + processChildren(node, options) + '\n\n';
      break;
      
    case 'h4':
      result = '#### ' + processChildren(node, options) + '\n\n';
      break;
      
    case 'ul':
    case 'itemizedlist':
      result = processListItems(node, options, '- ') + '\n';
      break;
      
    case 'ol':
    case 'orderedlist':
      result = processListItems(node, options, null, true) + '\n';
      break;
      
    case 'li':
    case 'listitem':
      result = processChildren(node, options);
      break;
      
    case 'a':
    case 'xref':
    case 'link':
      const href = node.getAttribute('href') || '';
      const text = processChildren(node, options) || href;
      result = `[${text}](${href})`;
      break;
      
    case 'b':
    case 'strong':
    case 'emphasis':
      if (node.nodeName === 'emphasis' && node.getAttribute('role') !== 'bold') {
        result = '*' + processChildren(node, options) + '*';
      } else {
        result = '**' + processChildren(node, options) + '**';
      }
      break;
      
    case 'i':
    case 'em':
      result = '*' + processChildren(node, options) + '*';
      break;
      
    case 'code':
    case 'codeph':
      result = '`' + processChildren(node, options) + '`';
      break;
      
    case 'pre':
    case 'codeblock':
      const language = node.getAttribute('language') || '';
      result = '```' + language + '\n' + processChildren(node, options) + '\n```\n\n';
      break;
      
    case 'img':
    case 'image':
      const src = node.getAttribute('src') || node.getAttribute('href') || '';
      const alt = node.getAttribute('alt') || '';
      result = `![${alt}](${src})`;
      break;
      
    case 'table':
      result = processTable(node, options) + '\n\n';
      break;
      
    case 'note':
    case 'warning':
    case 'caution':
    case 'danger':
    case 'important':
      const type = node.nodeName.charAt(0).toUpperCase() + node.nodeName.slice(1);
      result = `> **${type}:** ${processChildren(node, options)}\n\n`;
      break;
      
    default:
      // For unknown elements, just process their children
      result = processChildren(node, options);
  }
  
  return result;
}

/**
 * Process child nodes of an XML element
 * @param {Node} node - Parent node
 * @param {object} options - Processing options
 * @returns {string} - Combined markdown of all children
 */
function processChildren(node, options = {}) {
  if (!node || !node.childNodes) return '';
  
  let result = '';
  
  for (let i = 0; i < node.childNodes.length; i++) {
    result += processXmlNode(node.childNodes[i], options);
  }
  
  return result;
}

/**
 * Process list items
 * @param {Node} node - List node
 * @param {object} options - Processing options
 * @param {string} prefix - Prefix for unordered lists
 * @param {boolean} ordered - Whether this is an ordered list
 * @returns {string} - Markdown list
 */
function processListItems(node, options = {}, prefix = '- ', ordered = false) {
  if (!node || !node.childNodes) return '';
  
  let result = '';
  let itemCount = 1;
  
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    
    // Skip non-element nodes and non-list items
    if (child.nodeType !== 1 || (child.nodeName !== 'li' && child.nodeName !== 'listitem')) continue;
    
    const itemContent = processChildren(child, options).trim();
    const itemPrefix = ordered ? `${itemCount}. ` : prefix;
    
    // Add the list item
    result += `${itemPrefix}${itemContent}\n`;
    
    // Increment counter for ordered lists
    if (ordered) itemCount++;
  }
  
  return result;
}

/**
 * Process table to Markdown
 * @param {Node} node - Table node
 * @param {object} options - Processing options
 * @returns {string} - Markdown table
 */
function processTable(node, options = {}) {
  if (!node) return '';
  
  let result = '';
  const rows = [];
  let headerRow = null;
  
  // Find header row
  const thead = findChildByName(node, 'thead');
  if (thead) {
    const tr = findChildByName(thead, 'tr');
    if (tr) {
      headerRow = extractTableRow(tr, options);
    }
  }
  
  // If no thead, try to use first tr as header
  if (!headerRow) {
    const trs = node.getElementsByTagName('tr');
    if (trs.length > 0) {
      headerRow = extractTableRow(trs[0], options);
    }
  }
  
  // Find all body rows
  const tbody = findChildByName(node, 'tbody') || node;
  const trs = tbody.getElementsByTagName('tr');
  
  // Skip first row if we're using it as header
  const startIdx = (!thead && headerRow && trs.length > 0) ? 1 : 0;
  
  for (let i = startIdx; i < trs.length; i++) {
    rows.push(extractTableRow(trs[i], options));
  }
  
  // Cannot create a table without a header row
  if (!headerRow && rows.length > 0) {
    // Create a default header row with empty columns
    headerRow = Array(rows[0].length).fill('');
  }
  
  // Build Markdown table
  if (headerRow) {
    // Header row
    result += '| ' + headerRow.join(' | ') + ' |\n';
    
    // Separator row
    result += '| ' + headerRow.map(() => '---').join(' | ') + ' |\n';
    
    // Data rows
    rows.forEach(row => {
      // Ensure row has the right number of columns
      while (row.length < headerRow.length) {
        row.push('');
      }
      
      result += '| ' + row.join(' | ') + ' |\n';
    });
  }
  
  return result;
}

/**
 * Extract cells from a table row
 * @param {Node} tr - Table row node
 * @param {object} options - Processing options
 * @returns {string[]} - Array of cell contents
 */
function extractTableRow(tr, options = {}) {
  if (!tr) return [];
  
  const cells = [];
  const thCells = tr.getElementsByTagName('th');
  const tdCells = tr.getElementsByTagName('td');
  
  // Process th cells
  for (let i = 0; i < thCells.length; i++) {
    cells.push(processChildren(thCells[i], options).trim());
  }
  
  // Process td cells
  for (let i = 0; i < tdCells.length; i++) {
    cells.push(processChildren(tdCells[i], options).trim());
  }
  
  return cells;
}

/**
 * Find a child element by name
 * @param {Node} node - Parent node
 * @param {string} name - Element name to find
 * @returns {Node|null} - Found node or null
 */
function findChildByName(node, name) {
  if (!node || !node.childNodes) return null;
  
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (child.nodeType === 1 && child.nodeName === name) {
      return child;
    }
  }
  
  return null;
}

/**
 * Get text content of a node and its descendants
 * @param {Node} node - XML node
 * @returns {string} - Combined text content
 */
function getTextContent(node) {
  if (!node) return '';
  
  if (node.nodeType === 3) {
    return node.nodeValue || '';
  }
  
  let result = '';
  
  if (node.childNodes) {
    for (let i = 0; i < node.childNodes.length; i++) {
      result += getTextContent(node.childNodes[i]);
    }
  }
  
  return result;
}

/**
 * Extract created date from XML document
 * @param {Document} doc - XML document
 * @returns {string|null} - ISO date string or null
 */
function getCreatedDate(doc) {
  let dateNode;
  
  // DITA created date
  dateNode = doc.getElementsByTagName('created')[0];
  if (dateNode) {
    const date = dateNode.getAttribute('date');
    if (date) {
      try {
        return new Date(date).toISOString().split('T')[0];
      } catch (e) {
        return date;
      }
    }
  }
  
  // DocBook date
  dateNode = doc.getElementsByTagName('date')[0];
  if (dateNode) {
    const dateText = dateNode.textContent.trim();
    if (dateText) {
      try {
        return new Date(dateText).toISOString().split('T')[0];
      } catch (e) {
        return dateText;
      }
    }
  }
  
  return null;
}

/**
 * Extract author information from XML document
 * @param {Document} doc - XML document
 * @returns {string|object|null} - Author info or null
 */
function getAuthorInfo(doc) {
  let authorNode;
  
  // DITA author
  authorNode = doc.getElementsByTagName('author')[0];
  if (authorNode) {
    return authorNode.textContent.trim();
  }
  
  // DocBook author
  authorNode = doc.getElementsByTagName('author')[0];
  if (authorNode) {
    const firstname = authorNode.getElementsByTagName('firstname')[0]?.textContent.trim() || '';
    const surname = authorNode.getElementsByTagName('surname')[0]?.textContent.trim() || '';
    
    if (firstname || surname) {
      if (firstname && surname) {
        return `${firstname} ${surname}`;
      } else {
        return firstname || surname;
      }
    }
  }
  
  return null;
}

/**
 * Process a DITA concept
 * @param {Node} node - Concept node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDitaConcept(node, options = {}) {
  let markdown = '';
  
  // Process title
  const titleNode = findChildByName(node, 'title');
  if (titleNode) {
    // We don't add the title as a heading because it will be in the front matter
  }
  
  // Process shortdesc
  const shortdescNode = findChildByName(node, 'shortdesc');
  if (shortdescNode) {
    markdown += processChildren(shortdescNode, options) + '\n\n';
  }
  
  // Process conbody
  const conbodyNode = findChildByName(node, 'conbody');
  if (conbodyNode) {
    markdown += processConbody(conbodyNode, options);
  }
  
  return markdown;
}

/**
 * Process a DITA task
 * @param {Node} node - Task node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDitaTask(node, options = {}) {
  let markdown = '';
  
  // Process shortdesc
  const shortdescNode = findChildByName(node, 'shortdesc');
  if (shortdescNode) {
    markdown += processChildren(shortdescNode, options) + '\n\n';
  }
  
  // Process taskbody
  const taskbodyNode = findChildByName(node, 'taskbody');
  if (taskbodyNode) {
    // Process context
    const contextNode = findChildByName(taskbodyNode, 'context');
    if (contextNode) {
      markdown += processChildren(contextNode, options) + '\n\n';
    }
    
    // Process prerequisites
    const prereqNode = findChildByName(taskbodyNode, 'prereq');
    if (prereqNode) {
      markdown += '## Prerequisites\n\n';
      markdown += processChildren(prereqNode, options) + '\n\n';
    }
    
    // Process steps
    const stepsNode = findChildByName(taskbodyNode, 'steps');
    if (stepsNode) {
      markdown += '## Steps\n\n';
      
      const stepNodes = stepsNode.getElementsByTagName('step');
      for (let i = 0; i < stepNodes.length; i++) {
        const step = stepNodes[i];
        const cmd = findChildByName(step, 'cmd');
        if (cmd) {
          markdown += `${i+1}. ${processChildren(cmd, options)}\n`;
          
          // Process substeps if any
          const substepsNode = findChildByName(step, 'substeps');
          if (substepsNode) {
            const substepNodes = substepsNode.getElementsByTagName('substep');
            for (let j = 0; j < substepNodes.length; j++) {
              const substep = substepNodes[j];
              const subcmd = findChildByName(substep, 'cmd');
              if (subcmd) {
                markdown += `   - ${processChildren(subcmd, options)}\n`;
              }
            }
          }
          
          // Process info
          const infoNode = findChildByName(step, 'info');
          if (infoNode) {
            markdown += `   ${processChildren(infoNode, options)}\n`;
          }
        }
      }
      
      markdown += '\n';
    }
    
    // Process result
    const resultNode = findChildByName(taskbodyNode, 'result');
    if (resultNode) {
      markdown += '## Result\n\n';
      markdown += processChildren(resultNode, options) + '\n\n';
    }
    
    // Process example
    const exampleNode = findChildByName(taskbodyNode, 'example');
    if (exampleNode) {
      markdown += '## Example\n\n';
      markdown += processChildren(exampleNode, options) + '\n\n';
    }
    
    // Process postreq
    const postreqNode = findChildByName(taskbodyNode, 'postreq');
    if (postreqNode) {
      markdown += '## Post-requisites\n\n';
      markdown += processChildren(postreqNode, options) + '\n\n';
    }
  }
  
  return markdown;
}

/**
 * Process a DITA reference
 * @param {Node} node - Reference node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDitaReference(node, options = {}) {
  let markdown = '';
  
  // Process shortdesc
  const shortdescNode = findChildByName(node, 'shortdesc');
  if (shortdescNode) {
    markdown += processChildren(shortdescNode, options) + '\n\n';
  }
  
  // Process refbody
  const refbodyNode = findChildByName(node, 'refbody');
  if (refbodyNode) {
    // Process sections
    const sectionNodes = refbodyNode.getElementsByTagName('section');
    for (let i = 0; i < sectionNodes.length; i++) {
      const section = sectionNodes[i];
      const title = findChildByName(section, 'title');
      
      if (title) {
        markdown += `## ${processChildren(title, options)}\n\n`;
      }
      
      // Process content of the section excluding the title
      for (let j = 0; j < section.childNodes.length; j++) {
        const child = section.childNodes[j];
        if (child !== title) {
          markdown += processXmlNode(child, options);
        }
      }
      
      markdown += '\n';
    }
    
    // Process properties (tables)
    const propNodes = refbodyNode.getElementsByTagName('properties');
    for (let i = 0; i < propNodes.length; i++) {
      markdown += processTable(propNodes[i], options) + '\n\n';
    }
  }
  
  return markdown;
}

/**
 * Process a generic DITA topic
 * @param {Node} node - Topic node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDitaTopic(node, options = {}) {
  let markdown = '';
  
  // Process shortdesc
  const shortdescNode = findChildByName(node, 'shortdesc');
  if (shortdescNode) {
    markdown += processChildren(shortdescNode, options) + '\n\n';
  }
  
  // Process body
  const bodyNode = findChildByName(node, 'body');
  if (bodyNode) {
    // Process sections
    const sectionNodes = bodyNode.getElementsByTagName('section');
    for (let i = 0; i < sectionNodes.length; i++) {
      const section = sectionNodes[i];
      const title = findChildByName(section, 'title');
      
      if (title) {
        markdown += `## ${processChildren(title, options)}\n\n`;
      }
      
      // Process content of the section excluding the title
      for (let j = 0; j < section.childNodes.length; j++) {
        const child = section.childNodes[j];
        if (child !== title) {
          markdown += processXmlNode(child, options);
        }
      }
      
      markdown += '\n';
    }
    
    // Process paragraphs directly in the body
    const pNodes = bodyNode.getElementsByTagName('p');
    for (let i = 0; i < pNodes.length; i++) {
      // Check if this paragraph is already processed as part of a section
      let isInSection = false;
      for (let j = 0; j < sectionNodes.length; j++) {
        if (sectionNodes[j].contains(pNodes[i])) {
          isInSection = true;
          break;
        }
      }
      
      if (!isInSection) {
        markdown += processXmlNode(pNodes[i], options);
      }
    }
  }
  
  return markdown;
}

/**
 * Process the conbody node of a DITA concept
 * @param {Node} conbodyNode - The conbody node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processConbody(conbodyNode, options = {}) {
  let markdown = '';
  
  // Process sections
  const sectionNodes = conbodyNode.getElementsByTagName('section');
  for (let i = 0; i < sectionNodes.length; i++) {
    const section = sectionNodes[i];
    const title = findChildByName(section, 'title');
    
    if (title) {
      markdown += `## ${processChildren(title, options)}\n\n`;
    }
    
    // Process content of the section excluding the title
    for (let j = 0; j < section.childNodes.length; j++) {
      const child = section.childNodes[j];
      if (child !== title) {
        markdown += processXmlNode(child, options);
      }
    }
    
    markdown += '\n';
  }
  
  // Process direct paragraphs in conbody
  const pNodes = conbodyNode.getElementsByTagName('p');
  for (let i = 0; i < pNodes.length; i++) {
    // Check if this paragraph is already processed as part of a section
    let isInSection = false;
    for (let j = 0; j < sectionNodes.length; j++) {
      if (sectionNodes[j].contains(pNodes[i])) {
        isInSection = true;
        break;
      }
    }
    
    if (!isInSection) {
      markdown += processXmlNode(pNodes[i], options);
    }
  }
  
  return markdown;
}

/**
 * Process a DocBook article
 * @param {Node} node - Article node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDocBookArticle(node, options = {}) {
  let markdown = '';
  
  // Process abstract
  const abstractNode = findChildByName(node, 'abstract');
  if (abstractNode) {
    markdown += processChildren(abstractNode, options) + '\n\n';
  }
  
  // Process sections
  const sectionNodes = node.getElementsByTagName('section');
  for (let i = 0; i < sectionNodes.length; i++) {
    markdown += processDocBookSection(sectionNodes[i], options, 2);
  }
  
  return markdown;
}

/**
 * Process a DocBook book
 * @param {Node} node - Book node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDocBookBook(node, options = {}) {
  let markdown = '';
  
  // Process book info
  const infoNode = findChildByName(node, 'info');
  if (infoNode) {
    const abstractNode = findChildByName(infoNode, 'abstract');
    if (abstractNode) {
      markdown += processChildren(abstractNode, options) + '\n\n';
    }
  }
  
  // Process chapters
  const chapterNodes = node.getElementsByTagName('chapter');
  for (let i = 0; i < chapterNodes.length; i++) {
    const chapter = chapterNodes[i];
    const title = findChildByName(chapter, 'title') || 
                 findChildByName(findChildByName(chapter, 'info'), 'title');
    
    if (title) {
      markdown += `## ${processChildren(title, options)}\n\n`;
    }
    
    // Process chapter content
    markdown += processDocBookChapter(chapter, options);
  }
  
  return markdown;
}

/**
 * Process a DocBook chapter
 * @param {Node} node - Chapter node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDocBookChapter(node, options = {}) {
  let markdown = '';
  
  // Process sections
  const sectionNodes = node.getElementsByTagName('section');
  for (let i = 0; i < sectionNodes.length; i++) {
    markdown += processDocBookSection(sectionNodes[i], options, 3);
  }
  
  // Process direct paragraphs
  const paraNodes = node.getElementsByTagName('para');
  for (let i = 0; i < paraNodes.length; i++) {
    // Check if this paragraph is already processed as part of a section
    let isInSection = false;
    for (let j = 0; j < sectionNodes.length; j++) {
      if (sectionNodes[j].contains(paraNodes[i])) {
        isInSection = true;
        break;
      }
    }
    
    if (!isInSection) {
      markdown += processXmlNode(paraNodes[i], options);
    }
  }
  
  return markdown;
}

/**
 * Process a DocBook section
 * @param {Node} node - Section node
 * @param {object} options - Processing options
 * @param {number} level - Heading level
 * @returns {string} - Markdown content
 */
function processDocBookSection(node, options = {}, level = 2) {
  let markdown = '';
  
  // Process title
  const title = findChildByName(node, 'title');
  
  if (title) {
    const headingPrefix = '#'.repeat(Math.min(level, 6));
    markdown += `${headingPrefix} ${processChildren(title, options)}\n\n`;
  }
  
  // Process paragraphs and other direct children
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (child !== title) {
      markdown += processXmlNode(child, options);
    }
  }
  
  // Process sub-sections recursively
  const sectionNodes = node.getElementsByTagName('section');
  for (let i = 0; i < sectionNodes.length; i++) {
    // Only process direct children sections
    if (sectionNodes[i].parentNode === node) {
      markdown += processDocBookSection(sectionNodes[i], options, level + 1);
    }
  }
  
  return markdown;
}

/**
 * Process a generic DocBook document
 * @param {Node} node - Root node
 * @param {object} options - Processing options
 * @returns {string} - Markdown content
 */
function processDocBookGeneric(node, options = {}) {
  let markdown = '';
  
  // Process all sections
  const sectionNodes = node.getElementsByTagName('section');
  for (let i = 0; i < sectionNodes.length; i++) {
    // Only process top-level sections
    if (sectionNodes[i].parentNode === node) {
      markdown += processDocBookSection(sectionNodes[i], options, 2);
    }
  }
  
  // Process direct paragraphs
  const paraNodes = node.getElementsByTagName('para');
  for (let i = 0; i < paraNodes.length; i++) {
    // Check if this paragraph is already processed as part of a section
    let isInSection = false;
    for (let j = 0; j < sectionNodes.length; j++) {
      if (sectionNodes[j].contains(paraNodes[i])) {
        isInSection = true;
        break;
      }
    }
    
    if (!isInSection && paraNodes[i].parentNode === node) {
      markdown += processXmlNode(paraNodes[i], options);
    }
  }
  
  return markdown;
}

/**
 * Process a directory of XML files and convert them to Markdown
 * @param {string} sourceDir - Directory containing XML files
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

    // Get all XML files in the source directory
    const files = fs.readdirSync(sourceDir)
      .filter(file => file.endsWith('.xml') || file.endsWith('.dita') || file.endsWith('.ditamap'));

    const results = [];
    
    // Process each file
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file.replace(/\.(xml|dita|ditamap)$/, '.md'));
      
      const result = await convertXmlToMd(sourcePath, destPath, options);
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
  convertXmlToMd,
  processDirectory
};

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'convert') {
    // Convert a single file: node xml-to-md.js convert source.xml dest.md [xmlType]
    const source = args[1];
    const dest = args[2];
    const xmlType = args[3];
    
    if (!source || !dest) {
      console.error('Usage: node xml-to-md.js convert <source.xml> <dest.md> [xmlType]');
      process.exit(1);
    }
    
    const options = xmlType ? { xmlType } : {};
    
    convertXmlToMd(source, dest, options)
      .catch(() => process.exit(1));
  } 
  else if (command === 'batch') {
    // Process a directory: node xml-to-md.js batch sourceDir destDir [xmlType]
    const sourceDir = args[1];
    const destDir = args[2];
    const xmlType = args[3];
    
    if (!sourceDir || !destDir) {
      console.error('Usage: node xml-to-md.js batch <sourceDir> <destDir> [xmlType]');
      process.exit(1);
    }
    
    const options = xmlType ? { xmlType } : {};
    
    processDirectory(sourceDir, destDir, options)
      .catch(() => process.exit(1));
  }
  else {
    console.error('Unknown command. Use "convert" or "batch".');
    console.error('Usage:');
    console.error('  node xml-to-md.js convert <source.xml> <dest.md> [xmlType]');
    console.error('  node xml-to-md.js batch <sourceDir> <destDir> [xmlType]');
    process.exit(1);
  }
}