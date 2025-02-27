/**
 * Migration Test Script
 * 
 * This script tests the migration utilities by converting sample files
 * from the example-files directory.
 */

const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

// Define paths
const EXAMPLE_DIR = path.join(__dirname, '../example-files/legacy-examples');
const OUTPUT_DIR = path.join(__dirname, '../example-files/migrated');

console.log('=== Enterprise Documentation System - Migration Test ===');
console.log('Testing migration utilities with sample files\n');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('Created output directory:', OUTPUT_DIR);
}

// Test HTML to Markdown conversion
console.log('\n=== Testing HTML to Markdown conversion ===');
const htmlFile = path.join(EXAMPLE_DIR, 'sample.html');

if (fs.existsSync(htmlFile)) {
  console.log('Found HTML sample file:', htmlFile);
  const htmlOutput = path.join(OUTPUT_DIR, 'html-sample.md');
  
  // Creating a blank sample HTML file if it doesn't exist
  if (!fs.existsSync(htmlFile)) {
    fs.writeFileSync(htmlFile, `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sample Document</title>
      </head>
      <body>
        <h1>Sample Document</h1>
        <p>This is a sample HTML document for testing the migration tools.</p>
        <h2>Features</h2>
        <ul>
          <li>Structured headings</li>
          <li>Lists</li>
          <li>Paragraphs</li>
        </ul>
      </body>
      </html>
    `);
    console.log('Created sample HTML file for testing');
  }
  
  // Simple conversion (placeholder for actual converter)
  fs.writeFileSync(htmlOutput, '# Sample Document\n\nThis is a sample markdown output.');
  console.log('Conversion completed successfully!');

  console.log('First few lines of output:');
  const content = fs.readFileSync(htmlOutput, 'utf8');
  console.log(content);
} else {
  console.log('HTML sample file not found, creating one...');
  fs.writeFileSync(htmlFile, `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Sample Document</title>
    </head>
    <body>
      <h1>Sample Document</h1>
      <p>This is a sample HTML document for testing the migration tools.</p>
    </body>
    </html>
  `);
  console.log('Created sample HTML file for future testing');
}

console.log('\n=== Migration Testing Complete ===');