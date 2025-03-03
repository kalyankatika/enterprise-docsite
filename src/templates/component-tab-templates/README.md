# Component Documentation Templates

These templates help you create standardized documentation for Enterprise Design System components. Each component should be documented using four tabs: Design, Code, Accessibility, and Examples.

## Quick Start

1. Create a new directory for your component: `src/components/[category]/[component-name]/`
2. Copy these templates and rename them for your component:
   - `design.md` → `index.md` (main component page)
   - `code.md` → `code.md`
   - `accessibility.md` → `accessibility.md`
   - `examples.md` → `examples.md`
3. Fill in the content for each template, replacing placeholder text with your component's details

## Template Structure

Each template follows a standard structure:

### Design Template
- Anatomy and key elements
- Usage considerations
- Behavior specifications
- Best practices
- Visual specifications

### Code Template
- Installation instructions
- Attributes and properties
- Events
- Helper classes
- Implementation examples

### Accessibility Template
- ARIA roles and attributes
- Keyboard navigation
- Screen reader support
- WAI-ARIA compliance

### Examples Template
- Basic implementation
- Variants and states
- Complex integration examples
- Responsive behavior

## Front Matter

Don't forget to update the front matter in each template with your component's details:

```yaml
---
layout: layouts/component.njk
title: Your Component Name
description: Short description of your component's purpose
category: layout  # or navigation, feedback, inputs
version: 1.0.0
---
```

## Complete Guide

For more detailed instructions, refer to the [Component Documentation Guide](/resources/component-documentation-guide/).