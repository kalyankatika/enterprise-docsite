---
layout: layouts/component.njk
title: Label Accessibility
description: Accessibility guidelines for the Label component
---

# Label Accessibility Guidelines

## Overview

Ensuring the label component is accessible to all users, including those using assistive technologies.

## WCAG Compliance

This component should meet the following WCAG 2.1 success criteria:

- **1.3.1 Info and Relationships** (Level A): Information, structure, and relationships conveyed through presentation can be programmatically determined.
- **1.4.3 Contrast** (Level AA): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.
- **2.1.1 Keyboard** (Level A): All functionality is operable through a keyboard interface.
- **2.4.7 Focus Visible** (Level AA): Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

## Keyboard Accessibility

| Key | Function |
| --- | --- |
| Tab | Moves focus to the component |
| Enter/Space | Activates the component |
| Arrow keys | Navigates within the component (if applicable) |

## Screen Reader Support

- Use appropriate ARIA roles and attributes
- Ensure proper labeling of interactive elements
- Provide context for screen reader users

## Implementation Checklist

### Semantic HTML
- Use native HTML elements when possible
- Use appropriate heading levels
- Maintain a logical DOM structure

### Focus Management
- Ensure visible focus indication
- Implement logical tab order
- Trap focus when needed (e.g., in modals)

### Color and Contrast
- Maintain sufficient color contrast
- Don't rely solely on color to convey information
- Test with grayscale to verify information is still understandable

### States and Properties
- Properly communicate component state using ARIA when needed
- Use ARIA live regions for dynamic content when appropriate

## Testing Recommendations

### Automated Testing
- Use accessibility tools to check for common issues
- Verify HTML validity

### Manual Testing
- Test with keyboard navigation
- Test with screen readers
- Verify proper focus management

## Code Example with Accessibility Features

```html
<div class="eds-label" role="region" aria-labelledby="label-title">
  <h2 id="label-title">Accessible Label</h2>
  <div class="eds-label__content">
    <!-- Accessible content goes here -->
  </div>
</div>
```
