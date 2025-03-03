# Adding New Components to EDS Documentation

This guide explains how to correctly add a new component to the Enterprise Documentation System (EDS) to ensure it appears in the navigation and follows the proper structure.

## Step 1: Create the Component Files

For a new component, you'll need to create several files following this structure:

```
src/components/[category]/[component-name]/
├── index.md           # Main documentation (Design tab)
├── code.md            # Code documentation 
├── accessibility.md   # Accessibility documentation
└── examples.md        # Examples of component usage
```

For example, for a new "tooltip" component in the "feedback" category:

```
src/components/feedback/tooltip/
├── index.md
├── code.md
├── accessibility.md
└── examples.md
```

## Step 2: Add to Navigation Configuration

Add your component to the navigation configuration file at `src/_data/navigation.js`. This is a crucial step - **components will not appear in the left navigation unless they are added to this file**.

Find the appropriate category for your component and add an entry to the corresponding `items` array:

```javascript
// Example: Adding a tooltip component to the Feedback category
{
  title: "Feedback",
  items: [
    // Existing components...
    {
      title: "Alert",
      url: "/components/feedback/alert/",
      status: "stable"
    },
    // Add your new component here
    {
      title: "Tooltip",
      url: "/components/feedback/tooltip/",
      status: "stable" // Or "experimental" if it's a new component
    }
  ]
}
```

Status options:
- `stable`: For production-ready components
- `experimental`: For components in development/testing
- `deprecated`: For components being phased out

## Step 3: Component File Structure

Each component file should include the following frontmatter:

```yaml
---
layout: layouts/component.njk
title: Component Name
description: A brief description of the component
category: feedback  # Match the folder structure
version: 1.0.0
---
```

## Step 4: Browse Implementation

The browse functionality across each component's documentation (Design, Code, Accessibility, Examples) is implemented in the `layouts/component.njk` file and uses URL-based navigation rather than in-page tabs.

## Step 5: Verify Component Appearance

After adding your component and modifying the navigation configuration:

1. Restart the 11ty server (if needed)
2. Navigate to your component URL (e.g., `/components/feedback/tooltip/`)
3. Verify it appears in the left navigation under the correct category
4. Test the tabs navigation to ensure all sections are accessible

## Troubleshooting

If your component doesn't appear in the navigation:

1. Check the `src/_data/navigation.js` file to ensure you've correctly added your component
2. Verify the URL path matches the actual file structure
3. Make sure your component files have the correct frontmatter
4. Check for any errors in the server logs
5. Restart the server if necessary

## Example Component Frontmatter

```yaml
---
layout: layouts/component.njk
title: Tooltip
description: Tooltips provide additional context or information about an element when users hover over or focus on it.
category: feedback
version: 1.0.0
---
```

**Note:** Components should always include all four documentation files (index.md, code.md, accessibility.md, examples.md) even if some sections are minimal or under development.