/**
 * Migration Test Script
 * 
 * This script tests the migration utilities by converting sample files
 * from the example-files directory.
 */

const fs = require('fs-extra');
const path = require('path');
const { migrate } = require('./quick-migrate');

async function createSampleFiles() {
  console.log('Creating sample files for testing...');
  
  // Create example directories if they don't exist
  await fs.ensureDir('example-files/legacy-examples');
  
  // Create a sample Markdown file
  const sampleMd = `---
layout: legacy_doc
title: Sample Legacy Document
author: Legacy Author
date: 2022-01-01
---

# Sample Legacy Document

This is a sample legacy document that will be migrated.

## Features

* Feature 1
* Feature 2
* Feature 3

## Code Example

\`\`\`javascript
function helloWorld() {
  console.log('Hello, world!');
}
\`\`\`

[Link to another document](other-doc.html)
`;

  await fs.writeFile('example-files/legacy-examples/sample-doc.md', sampleMd);
  
  // Create a sample HTML file
  const sampleHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Sample HTML Document</title>
</head>
<body>
  <h1>Sample HTML Document</h1>
  <p>This is a sample HTML document that will be migrated.</p>
  
  <h2>Features</h2>
  <ul>
    <li>HTML Feature 1</li>
    <li>HTML Feature 2</li>
    <li>HTML Feature 3</li>
  </ul>
  
  <a href="index.html">Back to Home</a>
</body>
</html>`;

  await fs.writeFile('example-files/legacy-examples/sample-page.html', sampleHtml);
  
  // Create a sample Nunjucks file
  const sampleNjk = `---
layout: legacy_component
title: Sample Component
---
{% extends "layouts/base.njk" %}

{% block content %}
# {{ title }}

This is a sample component template that will be migrated.

## Usage

\`\`\`html
<div class="component">
  <h2>{{ title }}</h2>
  <p>Component content</p>
</div>
\`\`\`

{% endblock %}`;

  await fs.writeFile('example-files/legacy-examples/sample-component.njk', sampleNjk);
  
  console.log('Sample files created successfully.');
}

async function runTests() {
  // First, create sample files
  await createSampleFiles();
  
  console.log('\nRunning migration test...');
  
  // Define test config
  const testConfig = {
    sources: [
      {
        path: path.resolve('example-files/legacy-examples'),
        name: 'test-migration'
      }
    ],
    destRoot: path.resolve('example-files/migrated'),
    layoutMap: {
      'legacy_component': 'layouts/component.njk',
      'legacy_doc': 'layouts/page.njk',
      'default': 'layouts/page.njk'
    },
    addTags: ['test', 'migrated']
  };
  
  // Run migration with test config
  await migrate(testConfig);
  
  console.log('\nTest completed. Check the migrated files in example-files/migrated');
}

// Run the tests
runTests().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});