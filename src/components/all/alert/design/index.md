---
layout: layouts/component.njk
title: Alert Design
description: Design guidelines for the Alert component
---

# Alert Design Guidelines

## Anatomy

The alert component consists of several key elements:

1. **Container**: Wraps the entire alert with distinctive background colors based on alert type
2. **Icon**: Visual indicator of the alert type (success, warning, error, info)
3. **Title** (optional): Bold text summarizing the alert message
4. **Message**: Primary content of the alert
5. **Close button** (optional): Allows users to dismiss the alert

## Visual Design

### Colors

| Alert Type | Background Color | Border Color | Icon Color |
|------------|------------------|--------------|------------|
| Success    | var(--color-success-light) | var(--color-success) | var(--color-success) |
| Warning    | var(--color-warning-light) | var(--color-warning) | var(--color-warning) |
| Error      | var(--color-error-light) | var(--color-error) | var(--color-error) |
| Info       | var(--color-info-light) | var(--color-info) | var(--color-info) |

### Typography

- **Title**: 16px/1rem, font-weight: 600
- **Message**: 14px/0.875rem, font-weight: 400

### Sizing and Spacing

- **Padding**: 16px (1rem)
- **Border radius**: 4px (0.25rem)
- **Border width**: 1px
- **Icon size**: 20px (1.25rem)
- **Space between icon and text**: 12px (0.75rem)

## States

- **Default**: Shown with full opacity
- **Dismissing**: Fade-out animation when being dismissed
- **Dismissed**: Hidden from view

## Variations

### Simple Alert

A basic alert with an icon and message.

### Alert with Title

Includes a bold title above the message for added emphasis.

### Dismissible Alert

Includes a close button that allows users to dismiss the alert.

### Alert with Actions

Includes action buttons or links to help users respond to the alert.

## Design Do's and Don'ts

### Do's

- Keep messages concise and actionable
- Use appropriate colors for each alert type
- Include an icon to reinforce the alert type
- Position alerts where they are easily visible

### Don'ts

- Use too many alerts on a single page
- Include complex or lengthy content in alerts
- Use custom colors that don't meet accessibility standards
- Create alerts that completely block content unless absolutely necessary