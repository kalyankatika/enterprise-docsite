# Alert - Accessibility

## Attributes

- The default `eds-disable-a11y-attributes` boolean will cause any alerts on the page to automatically announce once the page loads. This may be necessary for single, critical, show-stopper errors that need immediate attention, but may be overkill for most other scenarios. Furthermore having these attributes present imposes critical accessibility bugs in certain combinations of browsers and screen readers. Use with caution. **It's best to disable these attributes unless absolutely necessary.**
- If you use a critical alert variant, applications should force focus directy when it's rendered onto the page. For all other page alert viariants, we do not recommend you set focus to it.

## Semantics

- When `eds-disable-a11y-attributes` is "true" ...
  - Critical alerts use `role="alert" aria-live="assertive"`.
  - Warning, informational, and success alerts use `role="status" aria-live="polite"`.
- When using `eds-dismissible` ...
  - Critical alerts use `role="alertdialog"`.
  - All other alerts use `role="complementary"`.

## Implementation

### Consistency best practices

- Always use a `button` element for buttons, as this provides the most correct semantics, keyboard, and mobile support by default.
- Always use an `a` element for links, as this provides the most correct semantics, keyboard, and mobile support by default.
- Always clearly communicate focus to keyboard users by making sure focus is visually distinct from hover.
- Always make clickable elements look clickable.
- Always verify touch targets are large enough (a minimum of 44 × 44 pixels).
- Always order DOM elements to match visual display.
- Always use CSS for layout, positioning, and visual styling.
- Always avoid using CSS to convey meaning or functionally.
- Always verify content and design elements change predictably based on viewport (responsive design).
- Always ensure color isn't the only means to convey information.
- Always use native semantic HTML elements when possible to communicate an interface element's purpose.
- Always use ARIA when supported HTML is unavailable.
- Always ensure proper contrast ratios are met.
- Always use consistent UI patterns.
- Always test at various zoom levels, viewport sizes, and orientations using actual devices or simulators when possible.
