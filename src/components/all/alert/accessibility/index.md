---
layout: layouts/component.njk
title: Alert Accessibility
description: Accessibility guidelines for the Alert component
---

# Alert Accessibility Guidelines

Alerts are important UI elements for communicating information to users, and must be designed to be accessible to all users, including those with disabilities.

## WCAG Compliance

The Alert component should comply with the following WCAG 2.1 success criteria:

- **1.4.1 Use of Color** (Level A): Color alone is not used to convey information
- **1.4.3 Contrast** (Level AA): Text has sufficient contrast against background
- **2.4.2 Page Titled** (Level A): Alert content has descriptive heading when appropriate
- **4.1.2 Name, Role, Value** (Level A): Alert has appropriate ARIA roles and properties

## Implementation Requirements

### Proper Semantic Structure

- Use the `role="alert"` attribute to ensure screen readers announce the alert content immediately
- For non-critical alerts, use `role="status"` instead
- Include descriptive and concise text that clearly explains the purpose of the alert

```html
<div role="alert">
  <p>Your changes have been successfully saved.</p>
</div>
```

### Focus Management

- For critical alerts, consider moving focus to the alert
- Ensure dismissible alerts return focus to the previously focused element when closed
- For alerts that appear as a result of user action, ensure they are in a logical position in the reading order

### Keyboard Accessibility

For dismissible alerts:

- Ensure the close button is keyboard focusable (tabbable)
- Provide clear visual indication of focus state
- Implement proper key handlers (Enter/Space) to activate the close button

```html
<button class="alert-close" aria-label="Close alert">
  <svg aria-hidden="true" focusable="false"><!-- icon --></svg>
</button>
```

### Screen Reader Considerations

- Use ARIA live regions appropriately:
  - `aria-live="assertive"` for critical alerts
  - `aria-live="polite"` for non-critical alerts
- Provide context about the type of alert using `aria-label` or other text

```html
<div class="alert alert-success" role="alert" aria-labelledby="alert-heading">
  <h2 id="alert-heading" class="alert-title">Success</h2>
  <p>Your changes have been successfully saved.</p>
</div>
```

## Color and Contrast

- Ensure the alert has sufficient color contrast (minimum 4.5:1 ratio for text)
- Don't rely solely on color to convey the type of alert (use icons and text)
- Provide visual boundaries (borders) to help define the alert area

## Icon Usage

- Include descriptive icons that reinforce the alert type
- Make icons decorative with `aria-hidden="true"` and `focusable="false"`
- Ensure icons have sufficient contrast against their background

```html
<div class="alert-icon">
  <svg aria-hidden="true" focusable="false"><!-- icon --></svg>
</div>
```

## Motion and Animation

- Avoid excessive animation that could trigger vestibular disorders
- If animations are used (such as when dismissing alerts):
  - Keep them brief (under 5 seconds)
  - Ensure they respect the user's reduced motion preferences
  
```css
@media (prefers-reduced-motion: reduce) {
  .alert {
    transition: none;
  }
}
```

## Testing Guidelines

Test alerts with:

1. **Screen readers** (NVDA, JAWS, VoiceOver) to ensure content is announced appropriately
2. **Keyboard only** navigation to verify all interactive elements are accessible
3. **High contrast mode** to check visibility in Windows High Contrast settings
4. **Zoom levels** of up to 200% to ensure content remains readable

## Common Accessibility Issues to Avoid

- Missing `role="alert"` or appropriate ARIA live region attributes
- Low color contrast between text and background
- Relying solely on color to convey alert type
- Missing text alternatives for icons
- Auto-dismissing alerts without sufficient time to read
- Animations that can't be disabled
- Lack of keyboard accessibility for interactive alerts