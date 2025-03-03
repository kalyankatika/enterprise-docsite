---
layout: layouts/page.njk
title: Content Migration System
description: Documentation on using the simplified content migration system
---

# Content Migration System

The Enterprise Documentation System includes a simplified, automated system for migrating legacy content. This guide explains how to use the system to quickly bring content from various legacy documentation sources into the unified platform.

## Migration Overview

The migration system works by:

1. **Monitoring special "watch directories"** for new content files
2. **Automatically processing** files based on their type
3. **Placing content** in the appropriate location within the documentation system
4. **Adding the content** to the navigation structure
5. **Preserving original files** in a "processed" directory to avoid duplicate processing

## How to Migrate Content

### Step 1: Prepare Your Content Files

Format your legacy content as one of the supported file types:

- **Markdown (.md)** - For text-based content
- **Nunjucks (.njk)** - For template-based content
- **HTML (.html)** - For HTML documents
- **XML (.xml)** - For structured content (like DITA or DocBook)

Add front matter to the top of each file:

```yaml
---
title: "Page Title"
description: "Brief description of the content"
category: components | design-system | resources | legacy
subcategory: layout | navigation | feedback | inputs  # Optional
legacy_source: confluence | sharepoint | wordpress | jira  # Optional
---
```

### Step 2: Place in Watch Directory

Copy your prepared files to the corresponding directory:

- For Markdown: `/src/incoming/markdown/`
- For Nunjucks: `/src/incoming/nunjucks/`
- For HTML: `/src/incoming/html/`
- For XML: `/src/incoming/xml/`

### Step 3: Automatic Processing

The system will automatically:

1. Detect the new file
2. Process it based on its file extension and front matter
3. Convert the content to the appropriate format if needed
4. Place it in the correct location within the site structure
5. Update the navigation to include the new content
6. Move the original file to a "processed" folder

### Step 4: Verify the Results

Check the website to ensure your content appears correctly and is accessible through the navigation.

## Front Matter Reference

| Field | Required | Description | Example Values |
|-------|----------|-------------|----------------|
| title | Yes | The title of the page | "Button Component" |
| description | Yes | Brief description | "Standard button component with variants" |
| category | Yes | Primary category | components, design-system, resources, legacy |
| subcategory | No | Secondary category | layout, navigation, feedback, inputs |
| legacy_source | No | Source system | confluence, sharepoint, wordpress, jira |
| status | No | Component status | stable, experimental, deprecated |

## Special Cases

### Layout Files

If your Nunjucks file is a layout file (contains layout-related code), it will be automatically detected and copied to the `_includes/layouts` directory.

### Legacy Components

For complex legacy components that should be preserved as-is (not converted to Markdown):

```yaml
---
title: "Legacy Widget"
description: "Complex widget from legacy system"
category: "legacy"
legacy_source: "confluence"
---
```

### Missing Front Matter

If your file doesn't have front matter, the system will try to extract a title from:
- The `<title>` tag (HTML)
- The first `<h1>` heading
- The filename

Other metadata will be set to default values.

## Running the Migration System

The migration system runs as a background watcher service:

```bash
# Start the migration watcher
npm run watch:incoming

# Or use both the watcher and the development server
npm run dev
```

## Troubleshooting

### Common Issues

1. **File not processed**: Make sure the file has the correct extension and is placed in the correct directory.
2. **Content placed in wrong location**: Check the front matter for correct category and subcategory values.
3. **Conversion errors**: For complex content, you may need to manually format the source content before migration.

### Logging

The migration system logs all actions to the console, including:
- When files are detected
- Where they are placed
- Any errors that occur during processing

## Examples

### Markdown Example

```markdown
---
title: "Button Component"
description: "Standard button component with multiple styles and sizes"
category: "components"
subcategory: "inputs"
---

# Button Component

The button component provides a consistent way to trigger actions.

## Features

- Multiple visual styles
- Various sizes
- Support for icons
```

### HTML Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Legacy Alert Component</title>
</head>
<body>
    <h1>Alert Component</h1>
    <p>The alert component is used to display important messages.</p>
    
    <div class="example">
        <div class="alert alert-info">
            This is an example alert
        </div>
    </div>
</body>
</html>
```

## Need Help?

If you encounter any issues with the migration process, check the logs in the terminal where the watcher is running, or contact the documentation team for assistance.