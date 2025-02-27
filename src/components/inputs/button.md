---
layout: layouts/page.njk
title: Button Component
description: A versatile button component supporting various styles, states, and sizes.
showSidebar: true
sidebar:
  title: Input Components
  sections:
    - title: Components
      items:
        - text: Button
          url: /components/inputs/button/
        - text: Input Field
          url: /components/inputs/input-field/
        - text: Checkbox
          url: /components/inputs/checkbox/ 
        - text: Radio Button
          url: /components/inputs/radio/
        - text: Select
          url: /components/inputs/select/
        - text: Toggle Switch
          url: /components/inputs/toggle-switch/
---

## Overview

Buttons are used to trigger actions or events, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Variants

The Enterprise Design System provides several button variants to convey different levels of emphasis:

### Primary Button

Use primary buttons for the main action in a section or page.

```html
<button class="eds-button eds-button--primary">Primary Button</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">Primary Button</button>
</div>

### Secondary Button

Secondary buttons are for alternative actions that aren't as important as the primary action.

```html
<button class="eds-button eds-button--secondary">Secondary Button</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-2 px-4 bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-bg-alt)] transition-colors">Secondary Button</button>
</div>

### Tertiary Button

Tertiary buttons are for less important actions or used within content for inline actions.

```html
<button class="eds-button eds-button--tertiary">Tertiary Button</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-2 px-4 text-[var(--color-primary)] rounded-md hover:bg-[var(--color-bg-alt)] transition-colors">Tertiary Button</button>
</div>

### Destructive Button

Use destructive buttons for actions that might result in data loss or other significant consequences.

```html
<button class="eds-button eds-button--danger">Delete</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-2 px-4 bg-[var(--color-danger)] text-white rounded-md hover:opacity-90 transition-colors">Delete</button>
</div>

## Sizes

Buttons come in three standard sizes:

### Small

```html
<button class="eds-button eds-button--primary eds-button--sm">Small Button</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-1 px-3 text-sm bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">Small Button</button>
</div>

### Medium (Default)

```html
<button class="eds-button eds-button--primary">Medium Button</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">Medium Button</button>
</div>

### Large

```html
<button class="eds-button eds-button--primary eds-button--lg">Large Button</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-3 px-6 text-lg bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">Large Button</button>
</div>

## States

Buttons can appear in several different states:

### Default

The normal state of a button.

### Hover

How a button appears when a user hovers over it.

### Focus

How a button appears when it receives keyboard focus.

### Active

How a button appears when it's being clicked or activated.

### Disabled

Use disabled buttons to indicate that an action is not currently available.

```html
<button class="eds-button eds-button--primary" disabled>Disabled Button</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button disabled class="py-2 px-4 bg-gray-400 text-white rounded-md cursor-not-allowed opacity-60">Disabled Button</button>
</div>

## With Icon

Buttons can include icons to provide additional visual cues about the action.

### Icon Before Text

```html
<button class="eds-button eds-button--primary">
  <svg class="eds-icon" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5z"></path>
  </svg>
  <span>Button with Icon</span>
</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors inline-flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
    <span>Button with Icon</span>
  </button>
</div>

### Icon After Text

```html
<button class="eds-button eds-button--primary">
  <span>Button with Icon</span>
  <svg class="eds-icon" width="16" height="16" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors inline-flex items-center space-x-2">
    <span>Button with Icon</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
</div>

### Icon Only Button

```html
<button class="eds-button eds-button--icon eds-button--primary">
  <svg class="eds-icon" width="16" height="16" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
  <span class="eds-sr-only">Next</span>
</button>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <button class="p-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors inline-flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
    <span class="sr-only">Next</span>
  </button>
</div>

## Button Groups

Button groups allow you to display a set of related actions.

```html
<div class="eds-button-group">
  <button class="eds-button eds-button--secondary">Cancel</button>
  <button class="eds-button eds-button--primary">Submit</button>
</div>
```

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg my-4">
  <div class="inline-flex space-x-3">
    <button class="py-2 px-4 bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] rounded-md hover:bg-[var(--color-bg-alt)] transition-colors">Cancel</button>
    <button class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">Submit</button>
  </div>
</div>

## Usage Guidelines

- Use primary buttons for the main action on a page or in a section
- Limit the number of primary buttons on a page to avoid confusion
- Use secondary buttons for alternative actions that aren't as important
- Use tertiary buttons for less important actions
- Use destructive buttons for actions that might result in data loss
- Always provide a text label for buttons, even those with icons
- Use sentence case for button labels (e.g., "Save changes" not "Save Changes")
- Keep button labels short and clear — use verbs that describe the action

## Accessibility

- Always include text labels for buttons, even for icon-only buttons (use visually hidden text)
- Ensure buttons have sufficient contrast against their background
- Make sure the button's purpose is clear from its label
- Use the correct HTML element: `<button>` for actions and `<a>` for navigation
- Ensure buttons are keyboard accessible and have visible focus states

## Code Examples

### React

```jsx
import React from 'react';
import { Button } from '@enterprise-design-system/react';

function Example() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Primary Button
      </Button>
      
      <Button variant="secondary">
        Secondary Button
      </Button>
      
      <Button variant="tertiary">
        Tertiary Button
      </Button>
      
      <Button variant="danger">
        Delete
      </Button>
      
      <Button variant="primary" size="sm">
        Small Button
      </Button>
      
      <Button variant="primary" disabled>
        Disabled Button
      </Button>
      
      <Button variant="primary" startIcon={<AddIcon />}>
        Button with Icon
      </Button>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <eds-button variant="primary" @click="handleClick">
      Primary Button
    </eds-button>
    
    <eds-button variant="secondary">
      Secondary Button
    </eds-button>
    
    <eds-button variant="tertiary">
      Tertiary Button
    </eds-button>
    
    <eds-button variant="danger">
      Delete
    </eds-button>
    
    <eds-button variant="primary" size="sm">
      Small Button
    </eds-button>
    
    <eds-button variant="primary" disabled>
      Disabled Button
    </eds-button>
    
    <eds-button variant="primary" :start-icon="AddIcon">
      Button with Icon
    </eds-button>
  </div>
</template>

<script>
import { EdsButton } from '@enterprise-design-system/vue';
import { AddIcon } from '@enterprise-design-system/icons';

export default {
  components: {
    EdsButton
  },
  data() {
    return {
      AddIcon
    }
  },
  methods: {
    handleClick() {
      console.log('Clicked!');
    }
  }
}
</script>
```

## Design Tokens

The button component uses the following design tokens:

| Token | Value | Description |
|-------|-------|-------------|
| `--eds-button-primary-bg` | `var(--color-primary)` | Primary button background color |
| `--eds-button-primary-text` | `white` | Primary button text color |
| `--eds-button-primary-hover-bg` | `var(--color-primary-dark)` | Primary button hover background color |
| `--eds-button-border-radius` | `4px` | Button border radius |
| `--eds-button-font-weight` | `500` | Button font weight |
| `--eds-button-disabled-opacity` | `0.6` | Opacity for disabled buttons |