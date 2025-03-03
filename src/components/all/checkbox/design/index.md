---
layout: layouts/component.njk
title: Checkbox Design
description: Design guidelines for the Checkbox component
---

# Checkbox Design Guidelines

## Anatomy

The checkbox component consists of several key elements:

1. **Checkbox input**: The actual control that toggles between checked and unchecked states
2. **Label**: Text that describes the purpose of the checkbox
3. **Focus state**: Visual indicator when the checkbox has keyboard focus
4. **Checkbox group container** (optional): For grouping related checkboxes

## Visual Design

### Colors

| State | Background Color | Border Color | Check Mark Color |
|------------|------------------|--------------|------------|
| Default | var(--color-white) | var(--color-neutral-60) | var(--color-primary) |
| Hover | var(--color-neutral-10) | var(--color-neutral-70) | var(--color-primary) |
| Focus | var(--color-white) | var(--color-primary) | var(--color-primary) |
| Checked | var(--color-primary) | var(--color-primary) | var(--color-white) |
| Disabled Unchecked | var(--color-neutral-20) | var(--color-neutral-30) | N/A |
| Disabled Checked | var(--color-neutral-30) | var(--color-neutral-30) | var(--color-neutral-50) |
| Indeterminate | var(--color-primary) | var(--color-primary) | var(--color-white) |

### Typography

- **Label**: 16px/1rem, font-weight: 400
- **Label for required field**: Include an asterisk (*) indicator
- **Group label**: 16px/1rem, font-weight: 600

### Sizing and Spacing

- **Checkbox size**: 18px × 18px (1.125rem)
- **Border radius**: 2px (0.125rem)
- **Border width**: 1px
- **Space between checkbox and label**: 8px (0.5rem)
- **Space between checkboxes in a group**: 16px (1rem)
- **Check mark icon size**: 12px (0.75rem)

## States

- **Default**: Unchecked state
- **Hover**: Visual feedback when pointer is over the checkbox
- **Focus**: Visual indicator when the checkbox receives keyboard focus
- **Checked**: Selected state
- **Indeterminate**: Neither checked nor unchecked, typically used for "select all" checkboxes
- **Disabled**: Non-interactive state
- **Error**: Indicates validation issues (with appropriate messaging)

## Variations

### Standard Checkbox

A single checkbox for toggling an option on or off.

### Required Checkbox

Includes an asterisk to indicate the selection is required.

### Checkbox Group

A collection of related checkboxes grouped together.

### Nested Checkbox Group

Parent-child relationship between checkboxes, with indentation to show hierarchy.

## Design Do's and Don'ts

### Do's

- Clearly label each checkbox with a descriptive text
- Group related checkboxes together
- Use consistent spacing between checkboxes in a group
- Consider keyboard accessibility in the visual design
- Use the indeterminate state for parent checkboxes in hierarchical selections

### Don'ts

- Create custom checkbox designs that don't match platform expectations
- Place checkboxes too close together, making them difficult to select
- Use checkbox labels that are ambiguous or unclear
- Omit visual feedback for various states (hover, focus, etc.)
- Create oversized or undersized checkboxes that don't match your design system