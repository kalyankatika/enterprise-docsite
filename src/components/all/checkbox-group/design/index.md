---
layout: layouts/component.njk
title: Checkbox Group Design
description: Design guidelines for the Checkbox Group component
---

# Checkbox Group Design Guidelines

## Anatomy

The checkbox group component consists of several key elements:

1. **Container**: A wrapper that contains all checkboxes
2. **Checkbox Items**: Individual checkbox components
3. **Group Label**: Describes the entire group of checkboxes
4. **Item Labels**: Describes each individual checkbox
5. **Optional Helper Text**: Additional information about the group

## Visual Design

### Colors

| State | Property | Value |
|-------|----------|-------|
| Default | Background | var(--color-neutral-10) |
| Default | Border | var(--color-neutral-40) |
| Hover | Background | var(--color-neutral-20) |
| Hover | Border | var(--color-primary) |
| Selected | Background | var(--color-primary-light) |
| Selected | Border | var(--color-primary) |

### Typography

- **Group Label**: 16px/1rem, font-weight: 600
- **Item Labels**: 14px/0.875rem, font-weight: 400
- **Helper Text**: 12px/0.75rem, font-weight: 400, font-style: italic

### Sizing and Spacing

- **Padding between items**: 12px (0.75rem)
- **Margin around group**: 16px (1rem)
- **Minimum clickable area**: 44px × 44px (2.75rem × 2.75rem)

## States

- **Default**: Normal appearance of checkboxes
- **Hover**: Visual indicator when user hovers over a checkbox
- **Selected**: Visual indicator for selected checkboxes
- **Focus**: Visual indicator when a checkbox has keyboard focus
- **Disabled**: Visual indicator for unavailable checkboxes
- **Error**: Visual indicator when there's an error with the selection

## Variations

### Vertical Layout (Default)

The standard layout where checkboxes are stacked vertically, making each option distinct and easy to read.

### Horizontal Layout

Checkboxes arranged side by side, suitable for short labels and limited options.

### Nested Checkboxes

Hierarchical structure where selecting a parent checkbox affects child checkboxes.

### Card-Style Checkboxes

Each checkbox and its label are contained within a card-like container.

## Design Do's and Don'ts

### Do's

- Clearly indicate which checkboxes are selected
- Use consistent spacing between checkboxes
- Use fieldset and legend for proper grouping
- Provide clear group and individual labels
- Maintain sufficient contrast for accessibility

### Don'ts

- Don't place checkboxes too close together
- Don't use long labels that wrap to multiple lines if avoidable
- Don't use checkbox groups when only one selection is allowed (use radio buttons instead)
- Don't use custom checkbox designs that don't clearly indicate their state
- Don't position checkboxes inconsistently within a group