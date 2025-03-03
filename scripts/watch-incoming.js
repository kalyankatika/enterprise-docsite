/**
 * Incoming Content Watcher
 * 
 * This script watches the incoming directories for new content files
 * and automatically processes them into the appropriate locations.
 */

const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs-extra');
const { 
  convertMarkdown, 
  convertNunjucks, 
  convertHtml, 
  convertXml,
  updateNavigation
} = require('../src/utils/migration');

// Define paths to watch
const incomingDir = path.join(__dirname, '../src/incoming');
const markdownDir = path.join(incomingDir, 'markdown');
const nunjucksDir = path.join(incomingDir, 'nunjucks');
const htmlDir = path.join(incomingDir, 'html');
const xmlDir = path.join(incomingDir, 'xml');

// Create directories if they don't exist
fs.ensureDirSync(markdownDir);
fs.ensureDirSync(path.join(markdownDir, 'processed'));
fs.ensureDirSync(nunjucksDir);
fs.ensureDirSync(path.join(nunjucksDir, 'processed'));
fs.ensureDirSync(htmlDir);
fs.ensureDirSync(path.join(htmlDir, 'processed'));
fs.ensureDirSync(xmlDir);
fs.ensureDirSync(path.join(xmlDir, 'processed'));

// Initialize watcher
const watcher = chokidar.watch([
  `${markdownDir}/**/*.md`,
  `${nunjucksDir}/**/*.njk`,
  `${htmlDir}/**/*.html`,
  `${xmlDir}/**/*.xml`,
], {
  persistent: true,
  ignoreInitial: false,
  awaitWriteFinish: true,
  ignored: [
    '**/processed/**', // Ignore the processed directory
    '**/node_modules/**',
    '**/.git/**'
  ]
});

// Process event handlers
watcher
  .on('add', filePath => processFile(filePath, 'add'))
  .on('change', filePath => processFile(filePath, 'change'));

async function processFile(filePath, event) {
  // Skip files in the 'processed' directory
  if (filePath.includes('/processed/')) {
    return;
  }
  
  console.log(`File ${event === 'add' ? 'added' : 'changed'}: ${filePath}`);
  
  try {
    const ext = path.extname(filePath).toLowerCase();
    const fileName = path.basename(filePath);
    const relativePath = path.relative(incomingDir, path.dirname(filePath));
    let destinationPath;
    
    // Determine processor based on file extension
    if (ext === '.md') {
      destinationPath = await convertMarkdown(filePath);
    } else if (ext === '.njk') {
      destinationPath = await convertNunjucks(filePath);
    } else if (ext === '.html') {
      destinationPath = await convertHtml(filePath);
    } else if (ext === '.xml') {
      destinationPath = await convertXml(filePath);
    }
    
    if (destinationPath) {
      console.log(`Successfully processed: ${filePath} -> ${destinationPath}`);
      
      // Move original file to processed folder to avoid reprocessing
      const processedDir = path.join(path.dirname(filePath), 'processed');
      fs.ensureDirSync(processedDir);
      fs.moveSync(filePath, path.join(processedDir, fileName), { overwrite: true });
      
      // Update navigation if needed
      updateNavigation(destinationPath);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

console.log('Watching for new content in:');
console.log(`- Markdown: ${markdownDir}`);
console.log(`- Nunjucks: ${nunjucksDir}`);
console.log(`- HTML: ${htmlDir}`);
console.log(`- XML: ${xmlDir}`);
console.log('Place files in these directories to automatically process them.');
console.log('Press Ctrl+C to stop watching.');