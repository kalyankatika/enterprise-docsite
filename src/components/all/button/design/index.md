---
layout: layouts/component.njk
title: Button Design
description: Design specifications and guidelines for the Button component
---

# Button Design Guidelines

## Anatomy

The button component consists of several key elements:

1. **Container**: The visible boundary of the button that provides the interactive area
2. **Label**: Text that describes the action the button performs
3. **Icon** (optional): Visual symbol that reinforces the action or provides additional context
4. **Focus state**: Visual indicator when the button receives keyboard focus

## Visual Design

### Colors

| Button Type | Background Color | Text Color | Border | Hover State |
|-------------|------------------|------------|--------|-------------|
| Primary     | var(--color-primary) | var(--color-white) | none | var(--color-primary-dark) |
| Secondary   | var(--color-white) | var(--color-primary) | 1px solid var(--color-primary) | var(--color-primary-light) background |
| Tertiary    | transparent | var(--color-primary) | none | var(--color-primary-light) background |
| Danger      | var(--color-error) | var(--color-white) | none | var(--color-error-dark) |
| Ghost       | transparent | var(--color-text) | none | var(--color-gray-100) background |

### Typography

- Font: System font stack (same as body text)
- Font weight: 500 (medium) or 600 (semibold)
- Font size: 14px (0.875rem) or 16px (1rem)
- Text case: Sentence case (capitalize first word only)
- Text alignment: Center-aligned

### Sizing and Spacing

| Size    | Height  | Padding (Left/Right) | Font Size | Icon Size |
|---------|---------|----------------------|-----------|-----------|
| Small   | 32px    | 12px                 | 14px      | 16px      |
| Medium  | 40px    | 16px                 | 14px      | 18px      |
| Large   | 48px    | 20px                 | 16px      | 20px      |
| XLarge  | 56px    | 24px                 | 16px      | 22px      |

- Border radius: 4px (0.25rem) for standard buttons, 8px (0.5rem) for rounded buttons
- Spacing between buttons: 16px (1rem) for horizontal layout, 12px (0.75rem) for vertical layout
- Icon spacing: 8px (0.5rem) between icon and text

## States

### Interactive States

1. **Default**: The button's normal appearance
2. **Hover**: Visual feedback when a pointer is positioned over the button
3. **Focus**: Visual indication when the button receives keyboard focus
4. **Active/Pressed**: Visual feedback when the button is being clicked/tapped
5. **Disabled**: Visual indication that the button is not interactive

### State Styling

| State     | Visual Changes |
|-----------|----------------|
| Hover     | Darken background color by 10%, cursor: pointer |
| Focus     | 2px outline in var(--color-focus), offset by 2px |
| Active    | Darken background color by 15%, "pressed" effect (slight scale/shadow change) |
| Disabled  | 60% opacity, cursor: not-allowed |

## Variations

### Button with Icon

Icons can be positioned either to the left or right of the button text:

- **Left-aligned icon**: Used for actions or to categorize the button
- **Right-aligned icon**: Typically indicates direction (e.g., forward/next actions)

### Icon-only Button

- Always include a tooltip or aria-label for accessibility
- Maintain adequate touch target size (minimum 44px × 44px)
- Use familiar, recognizable icons

### Full-width Button

- Occupies 100% of the container width
- Typically used in mobile layouts or for main actions in forms

### Loading State

- Include a spinner animation to indicate processing
- Maintain the same button width to prevent layout shifts
- Disable the button during loading to prevent multiple submissions

## Design Do's and Don'ts

### Do's

- Use a primary button for the main action on a page
- Keep button labels concise and action-oriented
- Maintain consistent button styling throughout the application
- Ensure sufficient contrast between button text and background
- Group related buttons together

### Don'ts

- Use too many primary buttons on a single page
- Place multiple buttons with equal visual weight next to each other
- Use overly generic labels like "Click Here" or "Submit"
- Create custom button styles that don't match the design system
- Put too much text on a button