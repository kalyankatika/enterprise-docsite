---
layout: layouts/component.njk
title: Alert
description: Alerts provide contextual feedback messages for user actions and system states
status: stable
since: 1.0.0
githubUrl: https://github.com/enterprise/design-system/tree/main/components/alert
lastUpdated: 2025-02-15
contributors:
  - Sarah Johnson
  - David Chen
---

## Overview

The Alert component provides contextual feedback messages for user actions and system states. Alerts are used to communicate important information, warnings, errors, or success messages to users.

## When to use

Use alerts when:
- Providing feedback about a user action (success, error, etc.)
- Communicating important system status information
- Warning users about potential issues
- Highlighting important information that requires attention

## Variants

### Information Alert

Used for general information and neutral messages that don't require immediate action.

### Success Alert

Used to confirm successful completion of an action or process.

### Warning Alert

Used to warn users about potential issues that may require attention.

### Error Alert

Used to communicate critical errors or problems that need immediate attention.

### Toast Alert

Temporary, auto-dismissing alerts that appear briefly to provide feedback.

## Accessibility

- Use appropriate ARIA roles and attributes
- Include proper focus management for dismissible alerts
- Ensure proper color contrast for all alert variants
- Use clear, concise language in alert messages
- Provide programmatic ways to dismiss alerts

## Code Guidelines

- Use the `eds-alert` class for the container
- Add variant modifiers like `eds-alert--info`, `eds-alert--success`, etc.
- Include appropriate icons to reinforce the alert type
- Use semantic HTML within alert content
- Implement proper focus management for interactive alerts

## Design Guidelines

- Use consistent color coding for different alert types
- Include appropriate icons to reinforce the alert message
- Keep alert messages clear, concise, and actionable
- Position alerts in a consistent location within the interface
- Provide clear dismissal options when appropriate