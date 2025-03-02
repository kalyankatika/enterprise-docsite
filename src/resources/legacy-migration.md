---
layout: layouts/page.njk
title: Legacy Documentation Migration
description: How to migrate legacy documentation from Nunjucks templates to the new markdown format
---

# Legacy Documentation Migration

This guide explains how to use our migration tools to convert legacy documentation from Nunjucks (.njk) templates to the modern Markdown format used in the Enterprise Design System.

## Overview

The migration tools provide two main approaches:

1. **Convert to Markdown** - Transform .njk files to .md format for integration into the modern documentation system
2. **Preserve as Nunjucks** - Keep certain files in .njk format when they contain complex templates that should be rendered directly

## Migration Process

### Step 1: Identify Legacy Content

First, identify the legacy .njk files you want to migrate. These are typically located in legacy documentation repositories or systems.

### Step 2: Use the Migration Utility

Our migration utilities are available in the `src/utils/njk-to-md.js` module. You can use them programmatically or through our conversion scripts.

```javascript
const { processDirectory } = require('./src/utils/njk-to-md');

// Convert a directory of .njk files to .md
const results = await processDirectory(
  './legacy-content',
  './converted-content',
  {
    // Options for controlling the conversion
    convertToMarkdown: true,
    preserveLayout: false
  }
);
```

### Step 3: Review Conversion Results

After conversion, review the generated Markdown files to ensure:

- Content is properly formatted
- Code blocks retain their language hints
- Tables are correctly structured
- Links work as expected

## Migration Examples

Below are examples of legacy documentation files and their converted versions.

### Example 1: Legacy Component Documentation

<div class="code-example">
  <div class="code-example-preview">
    <h3>Legacy Component (Original .njk)</h3>
    <p>This shows a component as documented in the legacy system. The original was a Nunjucks template with HTML markup.</p>
    
    <div class="note">
      This component was migrated from the legacy documentation system.
    </div>
    
    <h4>Key Properties</h4>
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>The component title</td>
        </tr>
        <tr>
          <td>isCollapsible</td>
          <td>boolean</td>
          <td>Whether the component can collapse</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="code-example-code">
    <pre><code>---
title: "Legacy Component"
layout: "legacy_component"
description: "A sample legacy component from the previous documentation system"
created_at: "2023-06-15"
author: "Previous Team"
---
&lt;div class="legacy-component"&gt;
  &lt;h1&gt;{{ title }}&lt;/h1&gt;
  
  &lt;div class="note"&gt;
    This component was migrated from the legacy documentation system.
  &lt;/div&gt;
  
  &lt;h2&gt;Usage&lt;/h2&gt;
  &lt;p&gt;This is an example of how a component was documented in the previous system.&lt;/p&gt;
  
  &lt;h3&gt;Properties&lt;/h3&gt;
  &lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Property&lt;/th&gt;
        &lt;th&gt;Type&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;title&lt;/td&gt;
        &lt;td&gt;string&lt;/td&gt;
        &lt;td&gt;The component title&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
  </div>
</div>

### Example 2: Converted Markdown

<div class="code-example">
  <div class="code-example-preview">
    <h3>Converted to Markdown</h3>
    <p>After conversion, the same content is represented as clean Markdown, making it easier to maintain and render.</p>

    > **Note**: This component was migrated from the legacy documentation system.

    #### Key Properties

    | Property | Type | Description |
    | --- | --- | --- |
    | title | string | The component title |
    | isCollapsible | boolean | Whether the component can collapse |
  </div>
  
  <div class="code-example-code">
    <pre><code>---
title: "Legacy Component"
layout: "layouts/component.njk"
description: "A sample legacy component from the previous documentation system"
created_at: "2023-06-15"
author: "Previous Team"
converted_from: "src/legacy-docs/legacy-component.njk"
conversion_date: "2025-03-02"
---

# Legacy Component

> This component was migrated from the legacy documentation system.

## Usage

This is an example of how a component was documented in the previous system.

### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| title | string | The component title |
| isCollapsible | boolean | Whether the component can collapse |</code></pre>
  </div>
</div>

## Conversion Options

The migration utilities support several options to control the conversion process:

| Option | Type | Description |
| --- | --- | --- |
| `convertToMarkdown` | boolean | Whether to convert to .md (true) or preserve as .njk (false) |
| `recursive` | boolean | Process subdirectories recursively |
| `preserveLayout` | boolean | Keep original layout or map to new layouts |
| `layoutMap` | object | Mapping from legacy layouts to new layouts |
| `fileMap` | object | Custom filename mapping for specific files |

## Handling Special Cases

### Nunjucks Templates with Variables

Some legacy templates may contain Nunjucks variables (`{{ variable }}`) that need special handling. Our converter attempts to render these variables using the front matter data. If rendering fails, it falls back to using the original template content.

### Complex HTML Elements

The converter handles special HTML structures like:

- Notes, warnings, and info boxes (converted to blockquotes)
- Code blocks with language hints
- Tables with proper structure
- Lists with proper formatting

## Migration Report

After running a conversion, the tool can generate a detailed report of the process:

```markdown
# Legacy Documentation Conversion Report

Report generated on: 2025-03-02T16:30:45.123Z

## Summary

- Total files converted to Markdown: 10
- Total files preserved as Nunjucks: 2
- Total errors: 0

## Converted Files

- src/legacy-docs/njk/page1.njk → src/legacy-docs/converted/page1.md
- src/legacy-docs/njk/page2.njk → src/legacy-docs/converted/page2.md
...

## Preserved Files

- src/legacy-docs/njk/template1.njk → src/components/shared/migration-examples/template1.njk
- src/legacy-docs/njk/template2.njk → src/components/shared/migration-examples/template2.njk
```

## Viewing Examples

You can view real examples of converted legacy documentation by running the legacy conversion script:

```bash
node scripts/legacy-converter.js
```

This will create sample legacy content and process it using different conversion options, demonstrating the capabilities of the migration tools.