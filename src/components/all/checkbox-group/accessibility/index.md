---
layout: layouts/component.njk
title: Checkbox Group Accessibility
description: Accessibility guidelines for the Checkbox Group component
---

# Checkbox Group Accessibility Guidelines

## Overview

Ensuring checkbox groups are accessible is essential for users with disabilities. This component must be operable by keyboard and properly exposed to assistive technologies.

## WCAG Compliance

This component should meet the following WCAG 2.1 success criteria:

- **1.3.1 Info and Relationships** (Level A): Use proper HTML elements like `<fieldset>` and `<legend>` to group related checkboxes.
- **1.4.3 Contrast** (Level AA): Maintain sufficient color contrast (4.5:1) for text and visual indicators.
- **2.1.1 Keyboard** (Level A): Ensure all checkboxes are navigable and operable using only a keyboard.
- **2.4.3 Focus Order** (Level A): Implement a logical keyboard focus sequence.
- **2.4.7 Focus Visible** (Level AA): Ensure a visible focus indicator is available when users navigate with a keyboard.
- **4.1.2 Name, Role, Value** (Level A): Ensure all form elements have appropriate names, roles, and values.

## Keyboard Accessibility

| Key | Function |
| --- | --- |
| Tab | Moves focus to the next checkbox in the group |
| Shift + Tab | Moves focus to the previous checkbox in the group |
| Space | Toggles the focused checkbox selection |

## Screen Reader Support

- Use `<fieldset>` and `<legend>` to provide context for the entire group of checkboxes
- Ensure each checkbox has a properly associated label
- Maintain a logical structure for screen reader navigation
- Provide appropriate ARIA attributes when needed

## Implementation Checklist

### Semantic Structure

```html
<fieldset class="eds-checkbox-group">
  <legend class="eds-checkbox-group__label">Group Label</legend>
  <div class="eds-checkbox-group__helper">Optional helper text</div>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="checkbox1" name="checkboxGroup" value="option1" class="eds-checkbox">
      <label for="checkbox1" class="eds-checkbox__label">Option 1</label>
    </div>
    <!-- Additional checkboxes -->
  </div>
</fieldset>
```

### Focus Management

- Ensure focus is visible on all checkboxes
- Focus indicators should have sufficient contrast
- Focus should follow a logical order through the checkbox group

### State Communication

- Selected state should be communicated both visually and to assistive technology
- Error states should be clearly indicated and associated with the appropriate checkbox

### Required Selections

- If selections are required, clearly communicate this requirement
- Error messages should be associated with the fieldset using `aria-describedby`

```html
<fieldset class="eds-checkbox-group eds-checkbox-group--error" aria-describedby="checkbox-group-error">
  <legend class="eds-checkbox-group__label">Required Selections</legend>
  <!-- Checkboxes -->
  <div id="checkbox-group-error" class="eds-checkbox-group__error">
    Please select at least one option
  </div>
</fieldset>
```

## Testing Recommendations

### Automated Testing

- Validate HTML to ensure proper structure
- Use accessibility testing tools to catch common issues
- Run automated contrast checks on all visual elements

### Manual Testing

#### Keyboard Testing
1. Navigate to the checkbox group using Tab
2. Ensure each checkbox can be focused individually
3. Verify Space toggles the checkbox state
4. Check that focus indication is clearly visible

#### Screen Reader Testing
1. Verify the group label is announced when entering the group
2. Ensure individual checkboxes are announced with their labels and states
3. Confirm state changes are announced when toggling checkboxes
4. Verify error messages are properly announced

## Accessible Examples

### Standard Checkbox Group

```html
<fieldset class="eds-checkbox-group">
  <legend class="eds-checkbox-group__label">Notification Preferences</legend>
  <div class="eds-checkbox-group__helper">Select all that apply</div>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="email" name="notifications" value="email" class="eds-checkbox">
      <label for="email" class="eds-checkbox__label">Email notifications</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="sms" name="notifications" value="sms" class="eds-checkbox">
      <label for="sms" class="eds-checkbox__label">SMS notifications</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="push" name="notifications" value="push" class="eds-checkbox">
      <label for="push" class="eds-checkbox__label">Push notifications</label>
    </div>
  </div>
</fieldset>
```

### With Error State

```html
<fieldset class="eds-checkbox-group eds-checkbox-group--error" aria-describedby="privacy-error">
  <legend class="eds-checkbox-group__label">Privacy Settings</legend>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="privacy-terms" name="privacy" value="terms" class="eds-checkbox" required>
      <label for="privacy-terms" class="eds-checkbox__label">I agree to the Terms and Conditions</label>
    </div>
  </div>
  <div id="privacy-error" class="eds-checkbox-group__error" role="alert">
    You must agree to the Terms and Conditions to continue
  </div>
</fieldset>
```