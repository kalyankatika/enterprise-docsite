---
layout: layouts/component.njk
title: Checkbox Accessibility
description: Accessibility guidelines for the Checkbox component
---

# Checkbox Accessibility Guidelines

## Overview

Checkboxes are a fundamental form control that must be accessible to all users, including those using assistive technologies. The following guidelines ensure that checkbox components meet accessibility standards.

## WCAG Compliance

Checkbox components should meet the following WCAG 2.1 success criteria:

- **1.3.1 Info and Relationships** (Level A): Information, structure, and relationships conveyed through presentation can be programmatically determined.
- **1.4.3 Contrast** (Level AA): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.
- **2.1.1 Keyboard** (Level A): All functionality is operable through a keyboard interface.
- **2.4.7 Focus Visible** (Level AA): Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
- **3.2.4 Consistent Identification** (Level AA): Components that have the same functionality are identified consistently.
- **4.1.2 Name, Role, Value** (Level A): For all user interface components, the name and role can be programmatically determined.

## Keyboard Accessibility

| Key | Function |
| --- | --- |
| Tab | Moves focus to the checkbox |
| Space | Toggles the checkbox state between checked and unchecked |

## Screen Reader Support

- Associate each checkbox with a label using the `for` attribute that matches the checkbox's `id` attribute
- For checkbox groups, use `fieldset` and `legend` elements to provide context
- For the indeterminate state, add `aria-checked="mixed"` when applicable

## Implementation Checklist

### Semantic HTML
- Use native `<input type="checkbox">` elements
- Associate labels with checkboxes using the `for` attribute
- Group related checkboxes with `<fieldset>` and `<legend>`
- Use the `required` attribute for mandatory fields

### Focus Management
- Ensure visible focus indication for keyboard navigation
- Maintain the default focus order
- Do not remove focus styles; they are essential for keyboard users

### Color and Contrast
- Maintain a minimum contrast ratio of 4.5:1 for the checkbox border against the background
- Ensure the check mark has sufficient contrast against the checkbox background
- Do not rely solely on color to indicate state changes

### States and Properties
- For custom checkboxes, maintain proper ARIA roles and states:
  - `role="checkbox"` (if not using a native checkbox)
  - `aria-checked="true|false|mixed"` (for indeterminate state)
  - `aria-disabled="true"` for disabled checkboxes
  - `aria-labelledby` or `aria-label` if not using visible labels

## Testing Recommendations

### Automated Testing
- Run automated accessibility validators
- Check for proper HTML semantics
- Verify color contrast ratios

### Manual Testing
- Test with keyboard navigation only
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify that state changes are announced

### Testing Scenarios
1. Navigate to and operate checkboxes using only the keyboard
2. Check that screen readers announce:
   - Checkbox label
   - Current state (checked/unchecked/mixed)
   - Required status (if applicable)
3. Verify that focus states are clearly visible
4. Confirm that disabled checkboxes are properly announced
5. Test checkbox groups to ensure the relationship is clear

## Best Practices

- Provide descriptive labels that clearly indicate the purpose of the checkbox
- Avoid using only "Yes" or "No" as checkbox labels
- Place related checkboxes in logical groups
- Include error messages that are programmatically associated with the relevant checkboxes
- Consider adding help text for complex options
- For "Select All" checkboxes with an indeterminate state, ensure this state is properly communicated to screen readers

## Code Example with Accessibility Features

```html
<fieldset class="checkbox-group">
  <legend>Notification preferences (select all that apply):</legend>
  
  <!-- Select All with indeterminate support -->
  <div class="checkbox-container">
    <input 
      type="checkbox" 
      id="select-all" 
      class="eds-checkbox"
      aria-checked="mixed" <!-- When in indeterminate state -->
    >
    <label for="select-all">Select all notification types</label>
  </div>
  
  <!-- Individual options -->
  <div class="checkbox-container">
    <input 
      type="checkbox" 
      id="notify-email" 
      name="notification" 
      value="email" 
      class="eds-checkbox"
      required
      aria-describedby="notification-help"
    >
    <label for="notify-email">
      Email notifications <span class="required-indicator">*</span>
    </label>
  </div>
  
  <div class="checkbox-container">
    <input 
      type="checkbox" 
      id="notify-sms" 
      name="notification" 
      value="sms" 
      class="eds-checkbox"
    >
    <label for="notify-sms">SMS notifications</label>
  </div>
  
  <div class="checkbox-container">
    <input 
      type="checkbox" 
      id="notify-app" 
      name="notification" 
      value="app" 
      class="eds-checkbox"
      disabled
      aria-disabled="true"
    >
    <label for="notify-app" class="eds-label-disabled">
      In-app notifications (currently unavailable)
    </label>
  </div>
  
  <div id="notification-help" class="form-help-text">
    At least one notification type is required for account security.
  </div>
</fieldset>
```