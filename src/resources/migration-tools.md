---
layout: layouts/base.njk
title: Migration Tools
description: Tools and utilities for migrating legacy documentation to the Enterprise Documentation System
eleventyNavigation:
  key: Migration Tools
  parent: Resources
  order: 50
---

# Migration Tools

The Enterprise Documentation System (EDS) provides a suite of tools to help migrate content from legacy documentation systems into our unified 11ty-based platform. These tools are designed to preserve content structure and formatting while converting to Markdown format, which is the standard for our documentation.

## Available Migration Utilities

The following migration utilities are available to help you convert content from various sources:

### HTML to Markdown Converter

Converts HTML-based legacy sites to Markdown format. This utility can handle:

- Generic HTML content
- Confluence-specific HTML formats
- SharePoint-specific HTML formats
- Jira documentation
- WordPress content

### XML to Markdown Converter

Converts XML-based documentation formats to Markdown, supporting:

- DITA XML
- DocBook XML
- Generic XML structures

### Nunjucks to Markdown Converter

Converts Nunjucks templates to Markdown format, useful for migrating from other 11ty-based sites.

### Markdown Formatter

Formats and normalizes converted Markdown files to ensure they adhere to our documentation standards and styling conventions.

## Migration CLI Tool

We provide a command-line interface (CLI) tool that makes it easy to run migrations either on individual files or in batch mode for entire directories.

### Installation

The migration tools are included in the repository. Before using them, make sure you have the necessary dependencies installed:

```bash
npm install
```

### Basic Usage

#### Single File Conversion

To convert a single file from a legacy format to Markdown:

```bash
node scripts/migration/migrate.js convert source.html destination.md --type html
```

#### Batch Conversion

To convert multiple files in a directory:

```bash
node scripts/migration/migrate.js batch source-directory/ destination-directory/ --type html
```

#### Configuration File

For more complex migration scenarios, you can create a configuration file:

```bash
node scripts/migration/migrate.js schema migration-config.yml
```

Then use the configuration file in your migration:

```bash
node scripts/migration/migrate.js batch source-directory/ destination-directory/ --config migration-config.yml
```

### Migration Options

The migration tools support the following options:

| Option | Description |
| ------ | ----------- |
| `--type` | Source file type (html, xml, njk) |
| `--site-type` | Type of site (confluence, sharepoint, jira, wordpress) |
| `--front-matter` | Additional front matter as JSON string |
| `--config` | Path to a YAML configuration file |
| `--recursive` | Process directories recursively (for batch operations) |
| `--pattern` | File name pattern to match (for batch operations) |

## Best Practices for Content Migration

When migrating content from legacy systems, consider the following best practices:

### Preparation

1. **Content Audit**: Perform a content audit to identify what needs to be migrated and what can be discarded.
2. **Structure Planning**: Map the structure of your legacy content to the new documentation structure.
3. **Test Migration**: Run test migrations on a small subset of content before processing everything.

### During Migration

1. **Preserve Metadata**: Make sure to capture and convert any metadata like authors, dates, and categories.
2. **Handle Images**: Ensure images are properly transferred and references are updated.
3. **Check Links**: Update internal links to reflect the new structure.

### Post-Migration

1. **Format Review**: Review the formatting of migrated content to ensure it meets our standards.
2. **Structural Check**: Verify the structure and navigation of the migrated content.
3. **Fix Broken Elements**: Address any elements that didn't convert properly.

## Example: Migrating from Confluence

Here's an example of migrating content from Confluence:

```bash
# Create a migration configuration
node scripts/migration/migrate.js schema confluence-migration.yml

# Edit the configuration file to customize settings

# Run the migration
node scripts/migration/migrate.js batch confluence-export/ src/migrated-content/ --config confluence-migration.yml

# Format the migrated content
node src/utils/migration/md-formatter.js batch src/migrated-content/
```

## Example Configuration File

Here's an example of a migration configuration file:

```yaml
# Migration Configuration
type: html
siteType: confluence

# Processing options
options:
  recursive: true
  pattern: "*.html"
  
  # Image handling
  images:
    handling: copy
    destDir: "src/assets/images/migrated"
    baseUrl: "/assets/images/migrated"

# Front matter to add to all converted files
frontMatter:
  layout: layouts/base.njk
  eleventyNavigation:
    key: Migrated Content
    parent: Documentation
  tags:
    - migrated
  migrationSource: "Confluence"
  migrationDate: "2025-02-27"
```

## Technical Documentation

For detailed technical documentation on the migration utilities, refer to:

- [HTML to Markdown Converter API](/utils/migration/html-to-md/)
- [XML to Markdown Converter API](/utils/migration/xml-to-md/)
- [Nunjucks to Markdown Converter API](/utils/migration/njk-to-md/)
- [Markdown Formatter API](/utils/migration/md-formatter/)

## Getting Help

If you encounter issues with the migration tools, please reach out to the Documentation Team or file an issue in the repository.