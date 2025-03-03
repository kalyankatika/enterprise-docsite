---
title: "Button Component"
description: "Standard button component with multiple styles and sizes"
category: "components"
subcategory: "inputs"
---

# Button Component

The button component provides a consistent, accessible way to trigger actions throughout the application.

## Features

- Multiple visual styles (primary, secondary, tertiary)
- Various sizes (small, medium, large)
- Support for icons
- Full accessibility support
- Customizable hover and focus states

## Usage

```html
<button class="eds-button eds-button--primary">
  Click Me
</button>
```

## Variants

### Primary Button

The primary button style should be used for the main call-to-action on a page.

```html
<button class="eds-button eds-button--primary">
  Primary Button
</button>
```

### Secondary Button

Secondary buttons are used for actions that are important but not the primary focus.

```html
<button class="eds-button eds-button--secondary">
  Secondary Button
</button>
```

### Tertiary Button

Tertiary buttons are used for less important actions.

```html
<button class="eds-button eds-button--tertiary">
  Tertiary Button
</button>
```

## Accessibility

All button components support:

- Keyboard navigation
- High contrast modes
- Screen reader announcements
- Focus states

## Best Practices

- Use button text that clearly indicates the action
- Maintain adequate spacing between buttons
- Limit the number of primary buttons on a single page
- Consider using icons to enhance clarity