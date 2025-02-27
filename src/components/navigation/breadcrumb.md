---
layout: layouts/component.njk
title: Breadcrumb
description: Breadcrumbs show the navigational path within a site hierarchy
status: stable
since: 1.0.0
githubUrl: https://github.com/enterprise/design-system/tree/main/components/breadcrumb
lastUpdated: 2025-02-12
contributors:
  - Jane Smith
  - Michael Brown
---

## Overview

The Breadcrumb component displays a navigational path showing the user their current location within the site's hierarchy.

## When to use

Use breadcrumbs when:
- The application has multiple hierarchical levels of navigation
- Users need to understand their current location within the site structure
- You want to provide a way for users to navigate up to parent pages
- The content is organized in a clear hierarchy

## Variants

### Standard Breadcrumb

The standard breadcrumb shows the full path from the home page to the current page.

### Collapsed Breadcrumb

The collapsed breadcrumb shows the first and last few items in the path, with intermediate items collapsed to prevent excessive breadcrumb length.

### Interactive Breadcrumb

Interactive breadcrumbs include dropdown menus for each level, allowing users to navigate to sibling pages at each level.

## Accessibility

- Use proper HTML structure with ordered list (`<ol>`) elements
- Include proper ARIA attributes to identify the breadcrumb as a navigation landmark
- Ensure proper color contrast for breadcrumb text and separators
- Make breadcrumb links keyboard accessible and properly focusable

## Code Guidelines

- Use the `eds-breadcrumb` class for the container
- Use `<ol>` and `<li>` elements for the breadcrumb structure
- Include appropriate ARIA roles and attributes
- Use clear, concise text for each breadcrumb item

## Design Guidelines

- Keep breadcrumb labels short and descriptive
- Use consistent visual separators between items
- Ensure breadcrumbs are appropriately sized for mobile devices
- Current page should be visually distinct but not a clickable link