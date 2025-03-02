# Migration Utilities

This directory contains utilities for migrating content from legacy documentation systems to the new 11ty-based Enterprise Documentation System.

## Overview

The migration utilities provide tools for converting content from various legacy formats:

- `html-to-md.js` - Converts HTML files to Markdown
- `xml-to-md.js` - Converts XML-based documentation (DITA, DocBook) to Markdown
- `legacy-parser.js` - Handles proprietary legacy formats
- `md-formatter.js` - Formats and normalizes converted Markdown files
- `index.js` - Exports all migration utilities for easy importing

## Usage

### Basic Conversion

To convert HTML content to Markdown:

```javascript
const { convertHtmlToMd } = require('./html-to-md');

// Convert a single file
await convertHtmlToMd(
  '/path/to/source.html',
  '/path/to/destination.md', 
  { 
    siteType: 'confluence',  // Optional: 'confluence', 'sharepoint', 'jira', 'wordpress'
    preserveHeadings: true   // Preserve heading levels rather than normalizing them
  }
);

// Process an entire directory
const { processDirectory } = require('./html-to-md');
const results = await processDirectory(
  '/path/to/html-files',
  '/path/to/output-directory',
  { 
    recursive: true,
    siteType: 'confluence'
  }
);
```

### XML-based Documentation

To convert DITA or DocBook content:

```javascript
const { convertXmlToMd } = require('./xml-to-md');

// Convert a DITA file
await convertXmlToMd(
  '/path/to/document.dita',
  '/path/to/output.md',
  { 
    xmlType: 'dita',  // or 'docbook'
    extractMetadata: true
  }
);
```

### Proprietary Formats

For custom or proprietary legacy documentation formats:

```javascript
const { parseLegacyToMd } = require('./legacy-parser');

// Convert a legacy format file
await parseLegacyToMd(
  '/path/to/legacy-doc',
  '/path/to/output.md',
  {
    format: 'wiki'  // or 'rtf', 'custom', etc.
  }
);
```

### Post-processing Markdown

After conversion, you can normalize and format the Markdown files:

```javascript
const { formatMarkdown } = require('./md-formatter');

// Format a markdown file
await formatMarkdown(
  '/path/to/input.md',
  '/path/to/formatted.md',
  {
    topHeadingLevel: 1,
    applyEdsStyles: true,
    fixLinks: true,
    baseUrl: 'https://docs.example.com'
  }
);
```

## Configuration Options

### HTML to Markdown Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `siteType` | string | `'generic'` | Source site type: 'confluence', 'sharepoint', 'jira', 'wordpress' |
| `preserveHeadings` | boolean | `false` | Whether to preserve existing heading levels |
| `extractFrontMatter` | boolean | `true` | Extract metadata into front matter |
| `cleanupImages` | boolean | `true` | Clean up image paths and download images |
| `processCodeBlocks` | boolean | `true` | Process code blocks with language detection |
| `baseUrl` | string | `''` | Base URL for fixing relative links |

### XML to Markdown Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `xmlType` | string | `'auto'` | Type of XML: 'dita', 'docbook', or 'auto' for auto-detection |
| `extractMetadata` | boolean | `true` | Extract metadata into front matter |
| `preserveStructure` | boolean | `false` | Preserve original document structure |
| `processRelationships` | boolean | `true` | Process related links and references |

### Legacy Parser Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `format` | string | `'auto'` | Format type: 'wiki', 'rtf', 'custom', or 'auto' |
| `customParser` | function | `null` | Custom parsing function for proprietary formats |
| `extractMetadata` | boolean | `true` | Extract metadata from the document |

### Markdown Formatter Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `topHeadingLevel` | number | `1` | Normalize top heading level (1-6) |
| `applyEdsStyles` | boolean | `true` | Apply EDS-specific styles and conventions |
| `fixLinks` | boolean | `true` | Fix and normalize links |
| `fixTables` | boolean | `true` | Fix table formatting |
| `baseUrl` | string | `''` | Base URL for fixing relative links |

## Testing

You can test the migration utilities with sample files:

```bash
# Run migration tests
node scripts/run-migration-test.js
```

## Example

A complete migration workflow might look like:

```javascript
const { convertHtmlToMd } = require('./src/utils/migration/html-to-md');
const { formatMarkdown } = require('./src/utils/migration/md-formatter');

async function migrateDocument(sourcePath, destinationPath) {
  // First convert HTML to Markdown
  const result = await convertHtmlToMd(
    sourcePath,
    '/tmp/intermediate.md',
    { siteType: 'confluence' }
  );
  
  if (result.status === 'converted') {
    // Then format and normalize the Markdown
    await formatMarkdown(
      '/tmp/intermediate.md',
      destinationPath,
      { 
        topHeadingLevel: 1,
        applyEdsStyles: true,
        fixLinks: true 
      }
    );
    
    console.log(`Successfully migrated: ${sourcePath} -> ${destinationPath}`);
    return true;
  }
  
  console.error(`Failed to convert: ${sourcePath}`);
  return false;
}
```

## Architecture

The migration utilities are designed to be modular and composable. Each module focuses on a specific conversion task, and they can be combined to create custom migration workflows.

```
migration/
├── index.js            # Main entry point exporting all utilities
├── html-to-md.js       # HTML to Markdown conversion
├── xml-to-md.js        # XML to Markdown conversion
├── legacy-parser.js    # Proprietary format parsing
└── md-formatter.js     # Markdown formatting and normalization
```