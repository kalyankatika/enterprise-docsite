# Enterprise Documentation System Utilities

This directory contains utility modules used throughout the EDS documentation platform.

## Migration Utilities

The `migration/` directory contains tools for migrating content from legacy documentation systems to the new 11ty-based Enterprise Documentation System. See the [Migration README](./migration/README.md) for detailed documentation.

## Nunjucks to Markdown Converter

The `njk-to-md.js` utility converts Nunjucks (.njk) templates to Markdown (.md) format to facilitate content migration and consolidation.

### Features

- Convert Nunjucks templates to Markdown
- Preserve original templates when needed
- Extract front matter from templates
- Process HTML content into proper Markdown
- Generate reports of the conversion process
- Create sample legacy content for testing

### Usage

```javascript
const { 
  convertNjkToMd, 
  copyNjkFile, 
  processDirectory, 
  generateConversionReport,
  createSampleLegacyContent
} = require('./utils/njk-to-md');

// Convert a single Nunjucks file to Markdown
await convertNjkToMd(
  'src/legacy-docs/component.njk',
  'src/components/component.md',
  {
    title: 'Component Title',
    description: 'Component description' 
  },
  {
    layout: 'layouts/component.njk',
    addFrontMatter: true
  }
);

// Copy a Nunjucks file without converting
await copyNjkFile(
  'src/legacy-docs/template.njk',
  'src/components/template.njk',
  { 
    preserveLayout: true 
  }
);

// Process an entire directory
const results = await processDirectory(
  'src/legacy-docs',
  'src/converted',
  {
    convertToMarkdown: true,  // Set to false to preserve as .njk
    recursive: true,
    preserveLayout: false,
    layoutMap: {
      'legacy_layout': 'layouts/modern.njk'
    }
  }
);

// Generate a conversion report
generateConversionReport(results, 'src/conversion-report.md');

// Create sample legacy content for testing
createSampleLegacyContent('src/legacy-samples');
```

### API Reference

#### `convertNjkToMd(source, dest, data = {}, options = {})`

Converts a Nunjucks template to Markdown.

**Parameters:**
- `source` (string): Path to the source .njk file
- `dest` (string): Path where to save the .md file
- `data` (object): Optional data to pass to the Nunjucks template
- `options` (object): Additional options for conversion
  - `layout` (string): Layout to use in the front matter
  - `addFrontMatter` (boolean): Whether to add front matter to the output
  - `preserveLayout` (boolean): Keep the original layout reference
  - `layoutMap` (object): Map of legacy layouts to new layouts

**Returns:** Promise<object> - Result object with status and path

#### `copyNjkFile(source, dest, options = {})`

Copies a Nunjucks file without converting it.

**Parameters:**
- `source` (string): Path to the source .njk file
- `dest` (string): Path where to save the .njk file
- `options` (object): Additional options for copying
  - `preserveLayout` (boolean): Keep the original layout reference
  - `layoutMap` (object): Map of legacy layouts to new layouts

**Returns:** Promise<object> - Result object with status and path

#### `processDirectory(sourceDir, destDir, options = {})`

Process a directory of Nunjucks files, converting them to Markdown or preserving them as needed.

**Parameters:**
- `sourceDir` (string): The directory containing .njk files
- `destDir` (string): The directory where to save processed files
- `options` (object): Options for processing
  - `convertToMarkdown` (boolean|function): Whether to convert to markdown (true) or preserve as njk (false)
  - `recursive` (boolean): Process subdirectories recursively
  - `preserveLayout` (boolean): Keep original layout references
  - `layoutMap` (object): Map of legacy layouts to new layouts
  - `fileMap` (object): Custom filename mapping for specific files

**Returns:** Promise<object> - Results of the processing with converted, preserved, and error counts

#### `generateConversionReport(results, reportPath)`

Generate a report of the conversion process.

**Parameters:**
- `results` (object): The results from processDirectory
- `reportPath` (string): Path to save the report

#### `createSampleLegacyContent(directory)`

Create sample legacy content for demonstration.

**Parameters:**
- `directory` (string): Directory to create sample content

### Example

Full example of converting legacy content:

```javascript
const path = require('path');
const { 
  createSampleLegacyContent, 
  processDirectory, 
  generateConversionReport 
} = require('./utils/njk-to-md');

// Configuration
const LEGACY_NJK_DIR = path.join(__dirname, 'src/legacy-docs/njk');
const CONVERTED_MD_DIR = path.join(__dirname, 'src/legacy-docs/converted');
const REPORT_PATH = path.join(__dirname, 'src/legacy-docs/conversion-report.md');

// Create sample legacy content
createSampleLegacyContent(LEGACY_NJK_DIR);

// Convert to markdown
const results = await processDirectory(
  LEGACY_NJK_DIR,
  CONVERTED_MD_DIR,
  {
    convertToMarkdown: true,
    layoutMap: {
      'legacy_component': 'layouts/component.njk',
      'legacy_doc': 'layouts/page.njk'
    }
  }
);

// Generate a report
generateConversionReport(results, REPORT_PATH);
```