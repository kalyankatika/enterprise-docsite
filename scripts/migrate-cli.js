#!/usr/bin/env node
/**
 * Migration CLI Tool
 * 
 * A simple command-line interface for migrating legacy documentation.
 */

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const { migrate } = require('./quick-migrate');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DEFAULT_CONFIG = {
  sources: [],
  destRoot: './src/migrated',
  layoutMap: {
    'legacy_component': 'layouts/component.njk',
    'legacy_doc': 'layouts/page.njk',
    'default': 'layouts/page.njk'
  },
  addTags: ['migrated', 'legacy-content']
};

/**
 * Ask a question and get a response
 */
function question(query) {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
}

/**
 * Main function
 */
async function main() {
  console.log('=== Legacy Documentation Migration Tool ===\n');
  
  let config = { ...DEFAULT_CONFIG };
  let mode = '';
  
  // Determine migration mode
  while (!['1', '2', '3', '4'].includes(mode)) {
    mode = await question(`Select migration mode:
1. Migrate local repositories (provide paths)
2. Migrate a Git repository (provide URL)
3. Run test migration (sample files)
4. Use existing config file

Enter option (1-4): `);
  }
  
  if (mode === '1') {
    // Migrate local repositories
    let addAnother = 'y';
    
    while (addAnother.toLowerCase() === 'y') {
      const repoPath = await question('Enter the absolute path to the repository: ');
      
      if (!fs.existsSync(repoPath)) {
        console.error(`Error: Path does not exist: ${repoPath}`);
        continue;
      }
      
      const repoName = await question('Enter a name for this repository: ');
      
      config.sources.push({
        path: repoPath,
        name: repoName
      });
      
      addAnother = await question('Add another repository? (y/n): ');
    }
    
  } else if (mode === '2') {
    // Migrate a Git repository
    const repoUrl = await question('Enter the Git repository URL: ');
    const repoName = await question('Enter a name for this repository: ');
    
    // Create temp directory for the repository
    const tempDir = path.join(__dirname, '..', 'temp');
    const repoDir = path.join(tempDir, repoName);
    
    await fs.ensureDir(tempDir);
    
    // Check if repo directory already exists
    if (await fs.pathExists(repoDir)) {
      const update = await question('Repository already cloned. Update it? (y/n): ');
      
      if (update.toLowerCase() === 'y') {
        console.log('Updating repository...');
        execSync(`cd "${repoDir}" && git pull`, { stdio: 'inherit' });
      }
    } else {
      // Clone the repository
      console.log(`Cloning repository to ${repoDir}...`);
      execSync(`git clone "${repoUrl}" "${repoDir}"`, { stdio: 'inherit' });
    }
    
    config.sources.push({
      path: repoDir,
      name: repoName
    });
    
  } else if (mode === '3') {
    // Run test migration
    console.log('Running test migration with sample files...');
    
    // Create sample files
    await fs.ensureDir('example-files/legacy-examples');
    
    // Sample Markdown file
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
    
    // Sample HTML file
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
    
    // Sample Nunjucks file
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
    
    config.sources.push({
      path: path.resolve('example-files/legacy-examples'),
      name: 'test-migration'
    });
    
    config.destRoot = path.resolve('example-files/migrated');
    config.addTags = ['test', 'migrated'];
    
  } else if (mode === '4') {
    // Use existing config file
    const configPath = await question('Enter the path to your config file: ');
    
    try {
      config = require(path.resolve(configPath));
    } catch (err) {
      console.error(`Error loading config file: ${err.message}`);
      process.exit(1);
    }
  }
  
  // Confirm migration configuration
  console.log('\nMigration Configuration:');
  console.log(`Destination: ${config.destRoot}`);
  console.log('Source repositories:');
  
  config.sources.forEach(source => {
    console.log(`- ${source.name}: ${source.path}`);
  });
  
  const confirm = await question('\nProceed with migration? (y/n): ');
  
  if (confirm.toLowerCase() !== 'y') {
    console.log('Migration cancelled.');
    rl.close();
    return;
  }
  
  // Run migration
  try {
    console.log('\nStarting migration process...');
    await migrate(config);
    
    console.log('\nMigration completed successfully!');
    
    // Ask if user wants to build the site
    const buildSite = await question('Build the site now? (y/n): ');
    
    if (buildSite.toLowerCase() === 'y') {
      console.log('\nBuilding the site...');
      execSync('npx @11ty/eleventy', { stdio: 'inherit' });
      
      console.log('\nSite built successfully!');
      
      // Ask if user wants to serve the site
      const serveSite = await question('Serve the site locally? (y/n): ');
      
      if (serveSite.toLowerCase() === 'y') {
        console.log('\nStarting development server...');
        console.log('(Press Ctrl+C to stop the server when finished)');
        execSync('npx @11ty/eleventy --serve', { stdio: 'inherit' });
      }
    }
    
  } catch (err) {
    console.error('Migration failed:', err.message || err);
  }
  
  rl.close();
}

// Run the main function
main().catch(err => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});