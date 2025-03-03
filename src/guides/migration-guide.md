---
layout: layouts/base.njk
title: Content Migration Guide
description: Guidelines for migrating legacy documentation to the Enterprise Design System documentation platform
---

# Content Migration Guide

This guide provides a comprehensive approach to migrating legacy documentation from various sources into the unified Enterprise Design System (EDS) documentation platform.

## Migration Overview

The migration process involves transferring documentation from multiple legacy sources into a standardized 11ty-based documentation system. Each piece of content needs to be converted to Markdown format, organized according to the established structure, and enhanced with proper metadata.

## Migration Process

### Step 1: Identify Source Material

1. **Catalog existing documentation**:
   - Document the URLs/locations of all legacy documentation
   - Note the content type (component, guide, pattern, etc.)
   - Identify the format (HTML, PDF, Nunjucks, etc.)
   - Document any dependencies or related content

2. **Prioritize content for migration**:
   - Start with frequently used components
   - Prioritize critical documentation
   - Group related content to migrate together

### Step 2: Prepare for Migration

1. **Create destination structure**:
   - Set up appropriate directory structure in the 11ty platform
   - Establish clear naming conventions
   - Prepare any required templates
  
2. **Set up migration tools**:
   - Configure the migration utilities in `/scripts/migration`
   - Update any configuration in `scripts/migration-config.js`
   - Test the migration pipeline with sample content

### Step 3: Perform Content Migration

#### For Component Documentation

Follow the [Component Documentation Guide](/guides/component-documentation/) and ensure all components have:

1. Main index page with general information
2. Four standardized tabs:
   - Design
   - Code
   - Accessibility
   - Examples

Use this directory structure:

```
src/
└── components/
    └── all/
        └── [component-name]/
            ├── index.md
            ├── design/
            │   └── index.md
            ├── code/
            │   └── index.md
            ├── accessibility/
            │   └── index.md
            └── examples/
                └── index.md
```

#### For Guide/Article Documentation

1. Convert to Markdown format
2. Add proper frontmatter metadata
3. Place in appropriate directory structure
4. Update internal links
5. Optimize and migrate any associated assets

### Step 4: Content Enhancement

During migration, enhance the documentation by:

1. **Improving structure**:
   - Add clear headings and subheadings
   - Use consistent section organization
   - Ensure logical content flow
   
2. **Enhancing metadata**:
   - Add descriptive titles and descriptions
   - Include proper tagging for search
   - Add related content links
   
3. **Updating examples**:
   - Ensure code examples follow current best practices
   - Add interactive examples where possible
   - Include accessible examples

### Step 5: Quality Assurance

After migration, perform these quality checks:

1. **Content review**:
   - Verify all content has been migrated
   - Check for any missing sections
   - Review for outdated information
   
2. **Technical validation**:
   - Test all internal links
   - Ensure all code examples work
   - Verify images and assets load properly
   
3. **Accessibility check**:
   - Ensure content follows accessibility guidelines
   - Check contrast and readability
   - Verify proper heading structure

## Migration Tools

The EDS documentation platform includes several tools to assist with migration:

### HTML to Markdown Converter

Located at `src/utils/migration/html-to-md.js`, this utility converts HTML documentation to Markdown format.

```javascript
// Example usage
const { convertHtmlToMd } = require('../utils/migration/html-to-md');

// Convert an HTML file to Markdown
await convertHtmlToMd('path/to/source.html', 'path/to/destination.md', {
  siteType: 'confluence', // or 'sharepoint', 'jira', 'wordpress', etc.
  preserveHeadingLevels: true,
  includeTableOfContents: true
});
```

### Nunjucks to Markdown Converter

Located at `src/utils/njk-to-md.js`, this utility converts Nunjucks templates to Markdown.

```javascript
// Example usage
const { convertNjkToMd } = require('../utils/njk-to-md');

// Convert a Nunjucks file to Markdown
await convertNjkToMd('path/to/source.njk', 'path/to/destination.md', {
  data: {}, // Optional data to pass to the template
  preserveComponents: true
});
```

### XML to Markdown Converter

Located at `src/utils/migration/xml-to-md.js`, this utility converts XML-based documentation (like DITA or DocBook) to Markdown.

```javascript
// Example usage
const { convertXmlToMd } = require('../utils/migration/xml-to-md');

// Convert an XML file to Markdown
await convertXmlToMd('path/to/source.xml', 'path/to/destination.md', {
  xmlType: 'dita', // or 'docbook', 'generic'
  preserveStructure: true
});
```

### Markdown Formatter

Located at `src/utils/migration/md-formatter.js`, this utility formats and normalizes Markdown content.

```javascript
// Example usage
const { formatMarkdown } = require('../utils/migration/md-formatter');

// Format a Markdown file
await formatMarkdown('path/to/source.md', 'path/to/destination.md', {
  fixHeadingLevels: true,
  applyEdsStyles: true
});
```

### Quick Migration Script

For bulk migration, use the Quick Migration script located at `scripts/quick-migrate.js`.

```bash
# Run from project root
node scripts/quick-migrate.js --source=/path/to/source --dest=/path/to/destination
```

## Common Migration Challenges

### Content Structure Differences

**Challenge**: Legacy documentation may have inconsistent or different structure than the new system.

**Solution**:
- Map legacy document sections to new structure
- Create templates for common content types
- Use migration utilities with custom transformations

### Formatting and Styling Conversion

**Challenge**: Legacy formatting may not convert cleanly to Markdown.

**Solution**:
- Use the Markdown formatter to clean up converted content
- Create custom transformations for special cases
- Manual review and touch-up for complex formatting

### Media and Asset Management

**Challenge**: Images, videos, and other assets need to be migrated and referenced correctly.

**Solution**:
- Copy all assets to the appropriate `src/assets` directory
- Update references in Markdown content
- Optimize images during migration
- Consider using asset processors for automated handling

### Code Examples Update

**Challenge**: Code examples may be outdated or use deprecated patterns.

**Solution**:
- Review and update code examples during migration
- Use linters to check code quality
- Standardize code formatting

## Best Practices for Migration

1. **Migrate in batches**: Group related content and migrate together
2. **Test thoroughly**: Verify each piece of content after migration
3. **Update links**: Ensure all internal links are updated to new paths
4. **Preserve IDs**: Maintain important IDs for bookmarking and linking
5. **Track progress**: Maintain a migration log to track status
6. **Document decisions**: Keep a record of migration decisions for reference

## Post-Migration Activities

1. **Create redirects**: Set up redirects from old URLs to new locations
2. **Update search indexes**: Ensure new content is indexed for search
3. **Gather feedback**: Get user feedback on migrated content
4. **Continuous improvement**: Iteratively enhance migrated content

## Support and Resources

For support with the migration process:

- Check the [migration utilities documentation](/utils/migration/)
- Use the example migrations in `/example-files`
- Run test migrations with `npm run migrate:test`
- Contact the documentation team for assistance