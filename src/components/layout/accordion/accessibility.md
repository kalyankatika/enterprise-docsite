---
layout: layouts/page.njk
title: Accordion Accessibility
description: Accessibility guidelines and best practices for implementing the Accordion component
tags: 
  - layoutComponents
  - components
  - accessibility
componentCategory: Layout
---

# Accordion Accessibility Guidelines

This page outlines how to implement the Accordion component to ensure it meets WCAG 2.1 AA standards and provides an optimal experience for all users, including those using assistive technologies.

## ARIA Attributes

The Accordion component uses the following ARIA attributes to ensure proper accessibility:

### Required Attributes

- `aria-expanded`: Applied to the accordion trigger button to indicate whether the section is expanded (`true`) or collapsed (`false`).
- `aria-controls`: Applied to the accordion trigger button to associate it with the content panel it controls. The value should be the ID of the content panel.

### Example Implementation

```html
<div class="eds-accordion">
  <div class="eds-accordion-item">
    <h3 class="eds-accordion-header">
      <button 
        class="eds-accordion-trigger" 
        aria-expanded="false" 
        aria-controls="accordion-content-1"
      >
        Section Title
        <svg class="eds-accordion-icon" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
    </h3>
    <div id="accordion-content-1" class="eds-accordion-content" hidden>
      <div class="eds-accordion-body">
        Content goes here...
      </div>
    </div>
  </div>
</div>
```

## Keyboard Navigation

To ensure keyboard accessibility, the Accordion component supports the following keyboard interactions:

| Key | Function |
|-----|----------|
| <kbd>Tab</kbd> | Moves focus to the next focusable element |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | When focus is on an accordion header, toggles the expansion state |
| <kbd>Down Arrow</kbd> | Moves focus to the next accordion header |
| <kbd>Up Arrow</kbd> | Moves focus to the previous accordion header |
| <kbd>Home</kbd> | Moves focus to the first accordion header |
| <kbd>End</kbd> | Moves focus to the last accordion header |

## Focus Management

- Ensure accordion headers are focusable by using native buttons as trigger elements
- Maintain focus on the header when expanding or collapsing a section
- If content is loaded dynamically into an expanded section, focus should remain on the header
- Use a focus outline that has sufficient contrast against the background (3:1 contrast ratio)

## Screen Reader Considerations

The following considerations should be made for screen reader users:

- Use appropriate heading levels for accordion headers (typically `<h2>` or `<h3>`)
- Ensure the expand/collapse state is properly announced by screen readers
- If icons are used to indicate state, ensure they have appropriate `aria-hidden="true"` attributes and don't convey meaning that isn't also conveyed in text or ARIA attributes
- Avoid using accordion patterns for critical information that should always be visible

## Visual Considerations

For users with visual impairments:

- Ensure sufficient color contrast between text and background (minimum 4.5:1 for normal text, 3:1 for large text)
- Use visual indicators beyond just color to show expanded/collapsed state (e.g., icons, text styling)
- Maintain a touch target size of at least 44x44 pixels for accordion headers on touch devices
- Provide adequate spacing between accordion items to prevent accidental activation

## Implementation Example with All Accessibility Features

```html
<div class="eds-accordion" role="presentation">
  <div class="eds-accordion-item">
    <h3 class="eds-accordion-header">
      <button 
        class="eds-accordion-trigger" 
        id="accordion-header-1"
        aria-expanded="false" 
        aria-controls="accordion-content-1"
      >
        <span class="eds-accordion-title">Section Title</span>
        <span class="eds-visually-hidden">
          (Click to expand or collapse)
        </span>
        <svg 
          class="eds-accordion-icon" 
          viewBox="0 0 24 24" 
          aria-hidden="true"
          focusable="false"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
    </h3>
    <div 
      id="accordion-content-1" 
      class="eds-accordion-content" 
      role="region" 
      aria-labelledby="accordion-header-1" 
      hidden
    >
      <div class="eds-accordion-body">
        Content goes here...
      </div>
    </div>
  </div>
</div>
```

## Testing Checklist

Ensure your accordion implementation meets these accessibility criteria:

- [ ] All accordion headers are implemented as buttons within heading elements
- [ ] Each button has appropriate `aria-expanded` and `aria-controls` attributes
- [ ] Each content panel has a unique ID referenced by `aria-controls`
- [ ] Content panels have `aria-labelledby` referencing their header
- [ ] Keyboard navigation works as expected
- [ ] Focus is visible and meets contrast requirements
- [ ] Icons are properly hidden from screen readers with `aria-hidden="true"`
- [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text)
- [ ] Accordion works with screen readers (test with NVDA, JAWS, and VoiceOver)
- [ ] Touch targets are adequately sized for mobile users

## Related Resources

- [WAI-ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [WCAG 2.1 Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)
- [WCAG 2.1 Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [WCAG 2.1 Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [WCAG 2.1 Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

## Common Mistakes to Avoid

- Using `<div>` or other non-interactive elements for accordion headers
- Not properly managing focus for keyboard users
- Relying solely on color to indicate state
- Nesting interactive elements within accordion headers
- Failing to provide unique IDs for content panels
- Using accordions for critical content that should always be visible
- Not providing enough visual distinction between expanded and collapsed states