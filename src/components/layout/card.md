---
layout: layouts/component.njk
title: Card
description: Cards organize content and actions about a single subject
status: stable
since: 1.0.0
githubUrl: https://github.com/enterprise/design-system/tree/main/components/card
lastUpdated: 2025-02-10
contributors:
  - John Doe
  - Alex Johnson
---

## Overview

The Card component is a flexible container for displaying related content and actions about a single subject.

## When to use

Use cards to:
- Display content and actions related to a single topic or object
- Group related information in a visually distinct container
- Create a consistent layout for multiple similar items
- Emphasize sections of content on a page

## Variants

### Basic Card

The basic card provides a simple container for content with minimal styling.

### Media Card

The media card includes an image or other media at the top of the card.

### Action Card

The action card includes a clear call-to-action button or link.

### Interactive Card

The interactive card is fully clickable and acts as a navigation element.

## Accessibility

- Ensure sufficient color contrast between card background and content
- Use appropriate heading hierarchy within cards
- Make interactive cards fully keyboard accessible
- Ensure card content is properly structured for screen readers

## Code Guidelines

- Use the `eds-card` class for the container
- Include appropriate semantic HTML within cards
- Use modifier classes for different variants (e.g., `eds-card--media`, `eds-card--action`)
- Maintain proper spacing and alignment of card content

## Design Guidelines

- Keep card content concise and focused on a single topic
- Maintain consistent spacing and alignment across multiple cards
- Use clear visual hierarchy within cards
- Ensure card actions are clearly distinguishable and user-friendly