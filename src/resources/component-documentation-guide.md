---
layout: layouts/page.njk
title: Component Documentation Guide
description: Standardized guidelines for documenting Enterprise Design System components
---

# Component Documentation Guide

This guide provides an overview of our standardized component documentation structure and templates. Following these guidelines ensures all components are documented consistently and comprehensively.

## Standard Component Structure

Each component in the Enterprise Design System follows a four-tab documentation structure:

1. **Design** - Visual appearance, usage guidance and specifications
2. **Code** - Technical implementation details
3. **Accessibility** - ARIA roles, keyboard navigation, and best practices
4. **Examples** - Working examples showing various implementations

## Directory Structure

Components should be organized using this directory structure:

```
src/
└── components/
    └── [category]/
        └── [component-name]/
            ├── index.md         # Design tab (main component page)
            ├── code.md          # Code tab
            ├── accessibility.md # Accessibility tab
            └── examples.md      # Examples tab
```

Where `[category]` is one of:
- `layout` - Components that structure content (accordion, card, etc.)
- `navigation` - Components that help users move through the interface
- `feedback` - Components that provide user feedback (alerts, notifications)
- `inputs` - Interactive components for user input (buttons, forms, etc.)

## Using the Templates

We've created standardized templates for each tab type to make documentation easier:

1. Start by creating a new component directory with the structure shown above
2. Copy the content from the templates in `src/templates/component-tab-templates/`
3. Fill in the content for each of the four tabs
4. Customize each section to reflect your component's specific details

### Template Locations

The templates are available at:
- Design: `/templates/component-tab-templates/design/`
- Code: `/templates/component-tab-templates/code/`
- Accessibility: `/templates/component-tab-templates/accessibility/`
- Examples: `/templates/component-tab-templates/examples/`

## Front Matter Guidelines

Each component page requires front matter at the top of the markdown file. Here's an example:

```yaml
---
layout: layouts/component.njk
title: Component Name
description: Short description of component purpose and use cases
category: layout
version: 1.0.0
---
```

For specific tabs, add these properties:

- Code tab: Add `codeContent: true`
- Accessibility tab: Add `a11yContent: true`
- Examples tab: Add `examplesContent: true`

## Sample Component Reference

For a complete example, see the Accordion component:
- [Design tab](/components/layout/accordion/)
- [Code tab](/components/layout/accordion/code/)
- [Accessibility tab](/components/layout/accordion/accessibility/)
- [Examples tab](/components/layout/accordion/examples/)

## Migration Tips

When migrating documentation from legacy systems:

1. **Identify content types** - Sort your original content into our four tab categories
2. **Copy corresponding sections** - Move content into the appropriate template sections
3. **Standardize formatting** - Adjust content to match the template structure
4. **Check for missing information** - Add any missing sections required by our templates
5. **Remove duplicate information** - Avoid repeating information across tabs

## Best Practices

- Each tab should focus on its specific purpose and avoid content overlap
- Use the provided CSS classes and formatting to maintain visual consistency
- Include visual examples in the Design tab
- Provide real code examples in the Code tab
- Include interactive examples in the Examples tab
- Document all accessibility considerations in the Accessibility tab

By following this guide, you'll create consistent, comprehensive documentation that helps both designers and developers understand and implement components correctly.