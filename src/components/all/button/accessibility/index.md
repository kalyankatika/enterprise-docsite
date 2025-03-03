---
layout: layouts/component.njk
title: Button Accessibility
description: Accessibility guidelines for the Button component
---

# Button Accessibility Guidelines

Buttons are one of the most common interactive elements in interfaces, making their accessibility particularly important. This guide outlines how to create accessible button implementations.

## WCAG Compliance

The Button component should comply with the following WCAG 2.1 success criteria:

- **1.4.1 Use of Color** (Level A): Color is not used as the only visual means of conveying information
- **1.4.3 Contrast** (Level AA): Text has sufficient contrast against background (minimum 4.5:1 ratio)
- **2.1.1 Keyboard** (Level A): All functionality is operable through a keyboard interface
- **2.4.7 Focus Visible** (Level AA): Keyboard focus indicator is visible
- **2.5.3 Label in Name** (Level A): Visual label text is included in the accessible name
- **4.1.2 Name, Role, Value** (Level A): Button has appropriate role and state information

## Implementation Requirements

### Proper Semantic Structure

- Use the native HTML `<button>` element for actions within the current page
- Use the native HTML `<a>` element for navigation to other pages
- Always specify a `type` attribute for buttons in forms (e.g., `type="button"`, `type="submit"`)
- Never use non-interactive elements (like `<div>` or `<span>`) styled as buttons

```html
<!-- Correct: Using a button element for an action -->
<button type="button" class="btn btn-primary">Save Changes</button>

<!-- Correct: Using an anchor for navigation -->
<a href="/settings" class="btn btn-primary">Go to Settings</a>

<!-- Incorrect: Using a div as a button -->
<div class="btn btn-primary" onclick="saveChanges()">Save Changes</div>
```

### Accessible Names

- Provide clear, descriptive text for buttons that indicates the action it performs
- For icon-only buttons, include text with `aria-label` or visually hidden text
- Ensure that any visually hidden text is appropriately communicated to screen readers

```html
<!-- Icon-only button with aria-label -->
<button class="btn btn-icon-only" aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false"><!-- icon --></svg>
</button>

<!-- Icon-only button with visually hidden text -->
<button class="btn btn-icon-only">
  <svg aria-hidden="true" focusable="false"><!-- icon --></svg>
  <span class="visually-hidden">Close dialog</span>
</button>
```

### Keyboard Accessibility

- Ensure all buttons are focusable and operable with a keyboard
- Maintain logical tab order
- Provide visible focus styles that meet contrast requirements
- For custom buttons, ensure Enter and Space keys trigger the action

```css
/* Focus styles with sufficient contrast */
.btn:focus {
  outline: 2px solid var(--color-focus); /* High contrast color */
  outline-offset: 2px;
}

/* For Windows High Contrast Mode */
@media (forced-colors: active) {
  .btn:focus {
    outline: 2px solid ButtonText;
  }
}
```

### State Communication

- Clearly indicate different button states (disabled, loading, active)
- Use `aria-disabled="true"` for visually disabled buttons that should remain in the tab order
- Use the `disabled` attribute for buttons that should be removed from the tab order
- For loading states, use `aria-busy="true"` and consider `aria-live` to announce status changes

```html
<!-- Disabled button removed from tab order -->
<button class="btn btn-primary" disabled>Submit</button>

<!-- Visually disabled but focusable button -->
<button class="btn btn-primary" aria-disabled="true">Submit</button>

<!-- Loading button -->
<button class="btn btn-primary btn-loading" aria-busy="true">
  <span class="btn-spinner" aria-hidden="true"></span>
  <span>Loading...</span>
</button>
```

### Touch Targets

- Ensure buttons have adequate touch target size (minimum 44×44 pixels)
- Provide sufficient spacing between buttons to prevent accidental activation
- For small buttons, consider increasing the touch target area using padding

```css
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: 8px 16px;
}

/* For very small icon buttons, extend the touch target */
.btn-icon-small {
  position: relative;
  width: 24px;
  height: 24px;
}

.btn-icon-small::before {
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
}
```

## Color and Contrast

- Ensure text and background color combinations meet WCAG AA contrast ratio of 4.5:1
- Do not use color alone to indicate button types or states
- Include additional indicators for states (icons, text, borders)
- Test buttons in high contrast mode

```html
<!-- Good: Using both color and icon to convey error state -->
<button class="btn btn-danger">
  <svg aria-hidden="true" focusable="false"><!-- warning icon --></svg>
  Delete Account
</button>
```

## Screen Reader Considerations

- Test with popular screen readers (NVDA, JAWS, VoiceOver)
- Ensure icons within buttons have `aria-hidden="true"` and `focusable="false"`
- For toggle buttons, use `aria-pressed` to indicate state
- For buttons that expand/collapse content, use `aria-expanded`

```html
<!-- Toggle button -->
<button class="btn btn-toggle" aria-pressed="false">Dark Mode</button>

<!-- Expand/collapse button -->
<button class="btn btn-expand" aria-expanded="false" aria-controls="content-panel">
  Show Details
</button>
```

## Testing Guidelines

### Keyboard Testing

1. Tab to the button using the keyboard
2. Verify the focus state is clearly visible
3. Press Enter or Space to activate the button
4. Verify the button action is triggered

### Screen Reader Testing

1. Navigate to the button using screen reader commands
2. Verify the button's name is announced correctly
3. Verify the button's role is announced correctly
4. Verify any state information (pressed, expanded, etc.) is announced
5. Activate the button and verify the result is announced appropriately

### Additional Tests

1. Test with browser zoom at 200%
2. Test with high contrast mode
3. Test on mobile devices with screen readers
4. Test with voice recognition software

## Common Accessibility Issues to Avoid

- Using non-semantic elements (`<div>`, `<span>`) as buttons
- Creating buttons with poor color contrast
- Making small buttons that are difficult to target
- Using ambiguous button text like "Click Here" or "Submit"
- Forgetting to include labels for icon-only buttons
- Removing focus styles
- Creating custom buttons that don't support keyboard activation
- Not communicating loading or disabled states to screen readers