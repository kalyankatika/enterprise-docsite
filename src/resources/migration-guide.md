---
layout: layouts/page.njk
title: Content Migration Guide
description: Simple guide for migrating legacy content into the Enterprise Documentation System
---

# Content Migration Guide

This guide explains the simplified process for migrating legacy content into the Enterprise Documentation System.

## Quick Migration Steps

1. **Prepare your content files**
   Format your legacy content as one of the supported file types:
   - Markdown (.md)
   - Nunjucks templates (.njk)
   - HTML (.html)
   - XML (.xml) - including DITA or DocBook

2. **Add front matter**
   Ensure each file has proper front matter at the top of the file:
   ```yaml
   ---
   title: "Page Title"
   description: "Brief description of the content"
   category: components | design-system | resources | legacy
   subcategory: layout | navigation | feedback | inputs
   legacy_source: confluence | sharepoint | wordpress | jira | dita
   ---
   ```

3. **Place in watch directory**
   Copy your prepared files to the appropriate incoming directory:
   - For Markdown: `/src/incoming/markdown/`
   - For Nunjucks: `/src/incoming/nunjucks/`
   - For HTML: `/src/incoming/html/`
   - For XML: `/src/incoming/xml/`

4. **Automatic processing**
   The system will automatically:
   - Convert the content to the appropriate format
   - Place it in the correct location based on the front matter
   - Update the navigation to include the new content
   - Move the original file to a "processed" folder to avoid reprocessing

5. **Verify the result**
   Check the documentation site to ensure your content appears correctly

## Front Matter Options

| Field | Required | Description | Example Values |
|-------|----------|-------------|----------------|
| title | Yes | The title of the page | "Button Component" |
| description | Yes | Brief description | "Standard button component with variants" |
| category | Yes | Primary category | components, design-system, resources, legacy |
| subcategory | No | Secondary category | layout, navigation, feedback, inputs |
| legacy_source | No | Source system | confluence, sharepoint, wordpress, jira, dita |
| status | No | Component status | stable, experimental, deprecated |
| tags | No | Additional tags | ["ui", "interactive"] |

## Directory Structure

```
/src/
  /incoming/         # Watch directory for new files
    /markdown/       # For .md files
    /nunjucks/       # For .njk files
    /html/           # For .html files
    /xml/            # For structured XML content
  /legacy/           # All legacy content (consolidated)
    /confluence/     # Content from Confluence
    /sharepoint/     # Content from SharePoint
    /wordpress/      # Content from WordPress
    /jira/           # Content from Jira
    /dita/           # Content from DITA sources
  /components/       # Modern component documentation
    /layout/         # Layout components
    /navigation/     # Navigation components
    /feedback/       # Feedback components
    /inputs/         # Input components
  /design-system/    # Design system documentation
  /resources/        # Additional resources
```

## How It Works

1. The system continuously monitors the `/src/incoming/` directories for new files
2. When a file is added, it's processed based on its file extension
3. Front matter is extracted or created based on the content
4. Files are converted to Markdown where appropriate, preserving as much formatting as possible
5. Legacy content is maintained separately but integrated into the navigation
6. The original file is moved to a "processed" folder to prevent duplicate processing

## Handling Special Cases

### Layout Files
If your Nunjucks file is a layout file (contains Nunjucks extend tags or block content tags), it will be automatically copied to the `_includes/layouts` directory instead.

### Legacy Components
For complex legacy components that should be preserved as-is, set the category to "legacy" and specify the legacy_source. These files will be copied rather than converted.

### Missing Front Matter
If your file doesn't have front matter, the system will try to extract a title from the content (from `<title>`, `<h1>`, or first heading). Other metadata will be set to default values.

## Need Help?

If you encounter any issues with the migration process, please contact the documentation team for assistance.