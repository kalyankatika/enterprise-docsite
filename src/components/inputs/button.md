---
layout: layouts/component.njk
title: Button
description: Buttons communicate actions that users can take
status: stable
since: 1.0.0
githubUrl: https://github.com/enterprise/design-system/tree/main/components/button
lastUpdated: 2025-02-15
contributors:
  - John Doe
  - Jane Smith
---

## Overview

The Button component allows users to take actions with a single click. Buttons communicate what action will occur when users click or tap them.

## When to use

Use buttons to enable users to perform actions such as:
- Submitting a form
- Starting a new task
- Triggering a specific function
- Moving to the next step in a multi-step process

## Variants

### Primary Button

The primary button is used for the main action in a container or form. In most cases, there should only be one primary button per screen.

### Secondary Button 

The secondary button is used for actions that are important but not the primary action on the page.

### Text Button

Text buttons have less visual prominence and are typically used for less important actions or in areas where space is limited.

### Icon Button

Icon buttons use symbols instead of text to communicate the action they perform. They're useful in interfaces with limited space.

## Accessibility

- Ensure buttons have meaningful text that clearly describes the action they perform
- Use the `aria-label` attribute when a button contains only an icon
- Maintain a minimum touch target size of 44x44 pixels for touch devices
- Ensure buttons have sufficient color contrast (at least 4.5:1)
- Use the appropriate HTML element (`<button>` for actions, `<a>` for navigation)

## Code Guidelines

- Use the `eds-button` class for basic styling
- Add modifier classes for different variants (e.g., `eds-button--primary`, `eds-button--secondary`)
- Avoid using `<div>` or `<span>` elements as buttons
- Include hover, focus, and active states for all buttons

## Design Guidelines

- Place primary buttons where users expect to find them (typically aligned with the content they affect)
- Maintain consistent button ordering across the interface
- Use color to differentiate between button types
- Size buttons appropriately for their importance and usage context