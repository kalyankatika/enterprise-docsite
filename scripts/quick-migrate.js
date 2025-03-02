/**
 * Quick Migration Script
 * 
 * A streamlined script to quickly migrate legacy documentation to the new EDS platform.
 * This script handles the entire migration process in a single command.
 */

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const { convertNjkToMd } = require('../src/utils/njk-to-md');
const { formatMarkdown } = require('../src/utils/migration/md-formatter');

// Default configuration - edit this or provide a config file
const DEFAULT_CONFIG = {
  // Source repositories to migrate
  sources: [
    // Add your legacy repositories here
    // Example: { path: '/path/to/repo1', name: 'product-docs' }
  ],
  
  // Destination directory (relative to EDS root)
  destRoot: './src/migrated',
  
  // Layout mappings
  layoutMap: {
    'legacy_component': 'layouts/component.njk',
    'legacy_doc': 'layouts/page.njk',
    'legacy_api': 'layouts/api.njk',
    // Default fallback
    'default': 'layouts/page.njk'
  },
  
  // Add tags to categorize content
  addTags: ['migrated', 'legacy-content']
};

/**
 * Process a single file based on its extension
 */
async function processFile(filePath, destPath, config) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Create destination directory if it doesn't exist
  await fs.ensureDir(path.dirname(destPath));
  
  try {
    switch (ext) {
      case '.md':
        // Copy and format Markdown files
        await formatMarkdown(filePath, destPath, {
          topHeadingLevel: 1,
          applyEdsStyles: true,
          fixLinks: true
        });
        return { success: true, action: 'formatted', source: filePath, dest: destPath };
        
      case '.njk':
        // Convert Nunjucks to Markdown
        const result = await convertNjkToMd(filePath, destPath.replace('.njk', '.md'), {}, {
          layoutMap: config.layoutMap,
          addFrontMatter: true
        });
        return { success: true, action: 'converted', source: filePath, dest: destPath.replace('.njk', '.md') };
        
      case '.html':
        // For HTML files, we'll convert them to Markdown using a simple approach
        // (In a real implementation, you would use convertHtmlToMd)
        const content = await fs.readFile(filePath, 'utf8');
        const title = extractTitle(content) || path.basename(filePath, '.html');
        
        const frontMatter = `---
layout: ${config.layoutMap.default}
title: "${title}"
tags: ${JSON.stringify(config.addTags)}
migrated: true
source_file: "${filePath}"
---\n\n`;
        
        // Simple HTML-to-Markdown conversion (placeholder for actual conversion)
        let markdown = `# ${title}\n\n`;
        markdown += 'This content was migrated from HTML. Review may be needed.\n\n';
        
        await fs.writeFile(destPath.replace('.html', '.md'), frontMatter + markdown);
        return { success: true, action: 'html-converted', source: filePath, dest: destPath.replace('.html', '.md') };
        
      default:
        // For other files (images, etc.), just copy them
        await fs.copy(filePath, destPath);
        return { success: true, action: 'copied', source: filePath, dest: destPath };
    }
  } catch (error) {
    return { 
      success: false, 
      action: 'failed', 
      source: filePath, 
      dest: destPath,
      error: error.message
    };
  }
}

/**
 * Extract title from HTML content
 */
function extractTitle(content) {
  const titleMatch = content.match(/<title>(.*?)<\/title>/i) || 
                     content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  return titleMatch ? titleMatch[1].trim() : null;
}

/**
 * Process a source repository
 */
async function processRepo(sourceConfig, config) {
  console.log(`\nProcessing repository: ${sourceConfig.name}`);
  
  // Create destination directory
  const destDir = path.join(config.destRoot, sourceConfig.name);
  await fs.ensureDir(destDir);
  
  // Find all files
  const files = glob.sync(path.join(sourceConfig.path, '**/*'), { nodir: true });
  console.log(`Found ${files.length} files to process`);
  
  // Process each file
  const results = {
    success: 0,
    failed: 0,
    formatted: 0,
    converted: 0,
    copied: 0,
    errors: []
  };
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const relativePath = path.relative(sourceConfig.path, file);
    const destPath = path.join(destDir, relativePath);
    
    // Skip hidden files and node_modules
    if (file.includes('node_modules') || 
        file.includes('/.git/') || 
        path.basename(file).startsWith('.')) {
      continue;
    }
    
    // Process the file
    const result = await processFile(file, destPath, config);
    
    // Update results
    if (result.success) {
      results.success++;
      results[result.action]++;
      
      // Log progress every 10 files
      if (i % 10 === 0) {
        const percent = Math.round((i / files.length) * 100);
        process.stdout.write(`\rProgress: ${percent}% (${i}/${files.length})`);
      }
    } else {
      results.failed++;
      results.errors.push({
        file: file,
        error: result.error
      });
    }
  }
  
  // Final progress update
  process.stdout.write(`\rProgress: 100% (${files.length}/${files.length})\n`);
  
  // Return results
  return {
    name: sourceConfig.name,
    results: results
  };
}

/**
 * Update navigation and references
 */
async function updateReferences(config) {
  console.log('\nUpdating navigation and references...');
  
  // Create a navigation file for the migrated content
  const navFile = path.join(config.destRoot, 'migrated-nav.json');
  
  // Find all markdown files in the migrated content
  const mdFiles = glob.sync(path.join(config.destRoot, '**/*.md'));
  
  // Create a navigation structure
  const navigation = mdFiles.map(file => {
    const relativePath = path.relative(config.destRoot, file);
    const urlPath = '/' + relativePath.replace(/\.md$/, '/');
    
    // Read the front matter to get the title
    let title = path.basename(file, '.md');
    try {
      const content = fs.readFileSync(file, 'utf8');
      const titleMatch = content.match(/title:\s*["'](.+?)["']/);
      if (titleMatch) {
        title = titleMatch[1];
      }
    } catch (e) {
      // Use the default title if file can't be read
    }
    
    return {
      title: title,
      url: urlPath
    };
  });
  
  // Write the navigation file
  await fs.writeFile(navFile, JSON.stringify(navigation, null, 2));
  
  console.log(`Created navigation file with ${navigation.length} entries`);
  
  // Create an index file for the migrated content
  const indexFile = path.join(config.destRoot, 'index.md');
  const indexContent = `---
layout: layouts/page.njk
title: Migrated Content
description: Content migrated from legacy documentation systems
eleventyNavigation:
  key: Migrated
  order: 100
---

# Migrated Content

This section contains documentation migrated from legacy systems.

## Available Content

${navigation.map(item => `- [${item.title}](${item.url})`).join('\n')}
`;
  
  await fs.writeFile(indexFile, indexContent);
  console.log('Created index file for migrated content');
}

/**
 * Generate a migration report
 */
async function generateReport(repoResults, config) {
  console.log('\nGenerating migration report...');
  
  const reportPath = path.join(config.destRoot, 'migration-report.md');
  
  let report = `# Migration Report

Generated on: ${new Date().toISOString()}

## Summary

`;

  let totalSuccess = 0;
  let totalFailed = 0;
  let totalFormatted = 0;
  let totalConverted = 0;
  let totalCopied = 0;
  
  report += '| Repository | Files Processed | Success | Failed | Formatted | Converted | Copied |\n';
  report += '| ---------- | --------------- | ------- | ------ | --------- | --------- | ------ |\n';
  
  repoResults.forEach(repo => {
    const r = repo.results;
    report += `| ${repo.name} | ${r.success + r.failed} | ${r.success} | ${r.failed} | ${r.formatted} | ${r.converted} | ${r.copied} |\n`;
    
    totalSuccess += r.success;
    totalFailed += r.failed;
    totalFormatted += r.formatted;
    totalConverted += r.converted;
    totalCopied += r.copied;
  });
  
  report += `| **Total** | **${totalSuccess + totalFailed}** | **${totalSuccess}** | **${totalFailed}** | **${totalFormatted}** | **${totalConverted}** | **${totalCopied}** |\n`;
  
  report += '\n## Errors\n\n';
  
  repoResults.forEach(repo => {
    if (repo.results.errors.length > 0) {
      report += `### ${repo.name}\n\n`;
      
      repo.results.errors.forEach(error => {
        report += `- **${error.file}**: ${error.error}\n`;
      });
      
      report += '\n';
    }
  });
  
  report += `\n## Next Steps

1. Review the migrated content for accuracy
2. Update internal links and references
3. Rebuild the site with \`npx @11ty/eleventy\`
4. Test the site and fix any issues
`;
  
  await fs.writeFile(reportPath, report);
  console.log(`Migration report saved to ${reportPath}`);
  
  return reportPath;
}

/**
 * Main migration function
 */
async function migrate(customConfig = {}) {
  // Merge custom config with defaults
  const config = { ...DEFAULT_CONFIG, ...customConfig };
  
  console.log('=== Quick Migration Started ===');
  console.log(`Destination root: ${config.destRoot}`);
  console.log(`Source repositories: ${config.sources.length}`);
  
  // Create destination root directory
  await fs.ensureDir(config.destRoot);
  
  // Process each source repository
  const repoResults = [];
  for (const source of config.sources) {
    const result = await processRepo(source, config);
    repoResults.push(result);
  }
  
  // Update navigation and references
  await updateReferences(config);
  
  // Generate report
  const reportPath = await generateReport(repoResults, config);
  
  console.log('\n=== Migration Complete ===');
  console.log(`See the migration report at: ${reportPath}`);
  console.log(`Migrated content is in: ${config.destRoot}`);
  console.log('Run the server to view the results: npx @11ty/eleventy --serve');
}

// If this script is run directly (not imported)
if (require.main === module) {
  // Check for config file path in command line arguments
  const configPath = process.argv[2];
  
  if (configPath) {
    // Load custom config from file
    try {
      const customConfig = require(path.resolve(configPath));
      migrate(customConfig).catch(err => {
        console.error('Migration failed:', err);
        process.exit(1);
      });
    } catch (err) {
      console.error(`Error loading config file ${configPath}:`, err);
      process.exit(1);
    }
  } else {
    // Use default config, but require sources to be defined
    if (DEFAULT_CONFIG.sources.length === 0) {
      console.error('Error: No source repositories defined in DEFAULT_CONFIG.');
      console.log('Please edit the script to add your source repositories or provide a config file:');
      console.log('  node scripts/quick-migrate.js /path/to/config.js');
      process.exit(1);
    }
    
    migrate().catch(err => {
      console.error('Migration failed:', err);
      process.exit(1);
    });
  }
}

module.exports = { migrate };