---
layout: layouts/page.njk
title: Getting Started with EDS
description: Learn how to install and use the Enterprise Design System in your projects
excludeFromSearch: false
contentType: Documentation
eleventyNavigation:
  key: Getting Started
  order: 1
---

# Getting Started with the Enterprise Design System

Welcome to the Enterprise Design System (EDS) documentation! This guide will help you get started with integrating our design system into your projects.

## What is EDS?

The Enterprise Design System is a comprehensive library of UI components, design tokens, and guidelines that ensures consistency and accessibility across all enterprise applications. It provides:

- **Reusable UI Components**: A collection of ready-to-use, accessible components
- **Design Tokens**: Foundational design elements like colors, typography, and spacing
- **Guidelines**: Best practices for creating consistent and accessible interfaces
- **Patterns**: Common UI patterns and solutions for complex design problems

## Installation

You can install the Enterprise Design System via npm:

```bash
npm install @enterprise/design-system
```

Or using yarn:

```bash
yarn add @enterprise/design-system
```

## Basic Usage

### CSS

Import the CSS in your project:

```js
// In your main JS file
import '@enterprise/design-system/dist/styles.css';
```

### React Components

Import and use components in your React application:

```jsx
import { Button, Card, TextField } from '@enterprise/design-system';

function MyComponent() {
  return (
    <Card>
      <h2>Sign In</h2>
      <TextField label="Email" placeholder="Enter your email" />
      <TextField type="password" label="Password" placeholder="Enter your password" />
      <Button variant="primary">Sign In</Button>
    </Card>
  );
}
```

### Vue Components

Import and use components in your Vue application:

```vue
<template>
  <eds-card>
    <h2>Sign In</h2>
    <eds-text-field label="Email" placeholder="Enter your email" />
    <eds-text-field type="password" label="Password" placeholder="Enter your password" />
    <eds-button variant="primary">Sign In</eds-button>
  </eds-card>
</template>

<script>
import { EdsCard, EdsTextField, EdsButton } from '@enterprise/design-system-vue';

export default {
  components: {
    EdsCard,
    EdsTextField,
    EdsButton
  }
}
</script>
```

## Design Tokens

The design system provides design tokens for consistent styling:

```css
/* Using CSS Custom Properties */
.my-element {
  color: var(--eds-color-text-primary);
  background-color: var(--eds-color-background-subtle);
  padding: var(--eds-spacing-4);
  border-radius: var(--eds-border-radius-medium);
  font-family: var(--eds-font-family-sans);
}
```

## Next Steps

Now that you're familiar with the basics, here are some recommendations for next steps:

1. Explore the [Component Library](/components/) to see all available components
2. Learn about our [Design Tokens](/design-tokens/) for consistent styling
3. Read our [Accessibility Guidelines](/guidelines/accessibility/) to ensure your application is inclusive
4. Check out common [UI Patterns](/patterns/) for solving specific design challenges

If you need help or have questions, please contact the design system team at [design-system@example.com](mailto:design-system@example.com).