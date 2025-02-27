#!/usr/bin/env node

/**
 * Migration CLI Tool
 * 
 * A command line interface for migrating content from legacy documentation systems
 * to the 11ty-based Enterprise Documentation System.
 */

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const yaml = require('js-yaml');
const chalk = require('chalk');

// Import migration utilities
const migrationUtils = require('../../src/utils/migration');

// Set up the CLI
program
  .name('migrate')
  .description('Migrate content from legacy documentation systems to 11ty-based EDS')
  .version('1.0.0');

// Convert command for individual files
program
  .command('convert')
  .description('Convert a single file from a legacy format to Markdown')
  .argument('<source>', 'Source file to convert')
  .argument('<destination>', 'Destination file path')
  .option('-t, --type <type>', 'Type of source file (html, xml, njk)')
  .option('-s, --site-type <siteType>', 'Type of site (confluence, sharepoint, jira, etc.)')
  .option('-f, --front-matter <json>', 'Additional front matter as JSON string')
  .option('-c, --config <file>', 'Path to a YAML configuration file')
  .action(async (source, destination, options) => {
    try {
      // Validate source file
      if (!fs.existsSync(source)) {
        console.error(chalk.red(`Error: Source file not found: ${source}`));
        process.exit(1);
      }
      
      // Create destination directory if it doesn't exist
      const destDir = path.dirname(destination);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Get file extension to determine type if not specified
      if (!options.type) {
        const ext = path.extname(source).toLowerCase();
        if (ext === '.html' || ext === '.htm') {
          options.type = 'html';
        } else if (ext === '.xml' || ext === '.dita' || ext === '.ditamap') {
          options.type = 'xml';
        } else if (ext === '.njk') {
          options.type = 'njk';
        } else {
          console.error(chalk.red(`Error: Could not determine file type from extension ${ext}`));
          console.error(chalk.yellow('Please specify the file type using the --type option'));
          process.exit(1);
        }
      }
      
      // Load config file if specified
      let config = {};
      if (options.config && fs.existsSync(options.config)) {
        try {
          const configContent = fs.readFileSync(options.config, 'utf8');
          config = yaml.load(configContent);
        } catch (error) {
          console.error(chalk.red(`Error loading config file: ${error.message}`));
          process.exit(1);
        }
      }
      
      // Parse front matter JSON if provided
      let frontMatter = {};
      if (options.frontMatter) {
        try {
          frontMatter = JSON.parse(options.frontMatter);
        } catch (error) {
          console.error(chalk.red(`Error parsing front matter JSON: ${error.message}`));
          process.exit(1);
        }
      }
      
      // Combine options
      const convertOptions = {
        ...config,
        siteType: options.siteType || config.siteType,
        frontMatter: {
          ...config.frontMatter,
          ...frontMatter
        }
      };
      
      // Perform the conversion based on file type
      console.log(chalk.blue(`Converting ${options.type.toUpperCase()} file to Markdown...`));
      
      let result;
      switch (options.type.toLowerCase()) {
        case 'html':
          if (!migrationUtils.htmlMigration) {
            console.error(chalk.red('HTML migration utility not available'));
            process.exit(1);
          }
          result = await migrationUtils.htmlMigration.convertHtmlToMd(source, destination, convertOptions);
          break;
          
        case 'xml':
          if (!migrationUtils.xmlMigration) {
            console.error(chalk.red('XML migration utility not available'));
            process.exit(1);
          }
          result = await migrationUtils.xmlMigration.convertXmlToMd(source, destination, convertOptions);
          break;
          
        case 'njk':
          if (!migrationUtils.njkMigration) {
            console.error(chalk.red('Nunjucks migration utility not available'));
            process.exit(1);
          }
          result = await migrationUtils.njkMigration.convertNjkToMd(source, destination, convertOptions);
          break;
          
        default:
          console.error(chalk.red(`Unsupported file type: ${options.type}`));
          process.exit(1);
      }
      
      if (result && result.success !== false) {
        console.log(chalk.green(`Successfully converted ${source} to ${destination}`));
      } else {
        console.error(chalk.red(`Error converting file: ${result?.error || 'Unknown error'}`));
        process.exit(1);
      }
    } catch (error) {
      console.error(chalk.red(`Conversion failed: ${error.message}`));
      process.exit(1);
    }
  });

// Batch command for processing directories
program
  .command('batch')
  .description('Batch convert files from a legacy format to Markdown')
  .argument('<sourceDir>', 'Source directory containing files to convert')
  .argument('<destDir>', 'Destination directory for converted files')
  .option('-t, --type <type>', 'Type of source files (html, xml, njk)')
  .option('-s, --site-type <siteType>', 'Type of site (confluence, sharepoint, jira, etc.)')
  .option('-p, --pattern <pattern>', 'File name pattern to match (e.g., "*.html")')
  .option('-c, --config <file>', 'Path to a YAML configuration file')
  .option('-r, --recursive', 'Process directories recursively')
  .action(async (sourceDir, destDir, options) => {
    try {
      // Validate source directory
      if (!fs.existsSync(sourceDir)) {
        console.error(chalk.red(`Error: Source directory not found: ${sourceDir}`));
        process.exit(1);
      }
      
      // Create destination directory if it doesn't exist
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Load config file if specified
      let config = {};
      if (options.config && fs.existsSync(options.config)) {
        try {
          const configContent = fs.readFileSync(options.config, 'utf8');
          config = yaml.load(configContent);
        } catch (error) {
          console.error(chalk.red(`Error loading config file: ${error.message}`));
          process.exit(1);
        }
      }
      
      // Combine options
      const batchOptions = {
        ...config,
        siteType: options.siteType || config.siteType,
        pattern: options.pattern || config.pattern,
        recursive: options.recursive || config.recursive,
        type: options.type || config.type
      };
      
      // Determine file type to process if not explicitly set
      if (!batchOptions.type && batchOptions.pattern) {
        if (batchOptions.pattern.endsWith('.html') || batchOptions.pattern.endsWith('.htm')) {
          batchOptions.type = 'html';
        } else if (batchOptions.pattern.endsWith('.xml') || batchOptions.pattern.endsWith('.dita')) {
          batchOptions.type = 'xml';
        } else if (batchOptions.pattern.endsWith('.njk')) {
          batchOptions.type = 'njk';
        }
      }
      
      if (!batchOptions.type) {
        console.error(chalk.red('Error: File type not specified or could not be determined'));
        console.error(chalk.yellow('Please specify the file type using the --type option'));
        process.exit(1);
      }
      
      console.log(chalk.blue(`Batch converting ${batchOptions.type.toUpperCase()} files to Markdown...`));
      console.log(chalk.blue(`Source: ${sourceDir}`));
      console.log(chalk.blue(`Destination: ${destDir}`));
      
      // Process files based on type
      let results;
      switch (batchOptions.type.toLowerCase()) {
        case 'html':
          if (!migrationUtils.htmlMigration) {
            console.error(chalk.red('HTML migration utility not available'));
            process.exit(1);
          }
          results = await migrationUtils.htmlMigration.processDirectory(sourceDir, destDir, batchOptions);
          break;
          
        case 'xml':
          if (!migrationUtils.xmlMigration) {
            console.error(chalk.red('XML migration utility not available'));
            process.exit(1);
          }
          results = await migrationUtils.xmlMigration.processDirectory(sourceDir, destDir, batchOptions);
          break;
          
        case 'njk':
          if (!migrationUtils.njkMigration) {
            console.error(chalk.red('Nunjucks migration utility not available'));
            process.exit(1);
          }
          results = await migrationUtils.njkMigration.processDirectory(sourceDir, destDir, batchOptions);
          break;
          
        default:
          console.error(chalk.red(`Unsupported file type: ${batchOptions.type}`));
          process.exit(1);
      }
      
      // Report results
      if (Array.isArray(results)) {
        const successful = results.filter(r => r.success !== false).length;
        const failed = results.length - successful;
        
        console.log(chalk.green(`Successfully converted ${successful} files`));
        if (failed > 0) {
          console.log(chalk.yellow(`Failed to convert ${failed} files`));
        }
      } else {
        console.log(chalk.green('Batch processing completed'));
      }
    } catch (error) {
      console.error(chalk.red(`Batch processing failed: ${error.message}`));
      process.exit(1);
    }
  });

// Schema command to create a migration configuration file
program
  .command('schema')
  .description('Create a migration configuration schema file')
  .argument('[output]', 'Output file path', 'migration-config.yml')
  .action((output) => {
    try {
      const schemaContent = `# Migration Configuration Schema
# This file defines the configuration for migrating content from legacy systems

# Source content type
type: html  # Options: html, xml, njk

# Source site type (for site-specific processing)
siteType: confluence  # Options: confluence, sharepoint, jira, wordpress

# Processing options
options:
  # Whether to process recursively (for batch operations)
  recursive: false
  
  # File pattern to match (for batch operations)
  pattern: "*.html"
  
  # Image handling
  images:
    # How to handle images: copy, reference, or ignore
    handling: copy
    
    # Where to save images
    destDir: "src/assets/images/migrated"
    
    # Base URL for images if using reference mode
    baseUrl: "/assets/images/migrated"

# Front matter to add to all converted files
frontMatter:
  layout: layouts/base.njk
  eleventyNavigation:
    key: Migrated Content
    parent: Documentation
  tags:
    - migrated
  migrationSource: "Legacy System"
  migrationDate: ${new Date().toISOString().split('T')[0]}
`;

      fs.writeFileSync(output, schemaContent, 'utf8');
      console.log(chalk.green(`Migration configuration schema created at ${output}`));
    } catch (error) {
      console.error(chalk.red(`Error creating schema: ${error.message}`));
      process.exit(1);
    }
  });

program.parse();

// If no arguments, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}