# Button - Accessibility

## Aria attributes

When adding `aria-*` attribution to button/anchor implementations, use the `eds-native-anchor-attributes` or `eds-native-button-attributes` to add aria attribution to the native elements within the `eds-button` component.

```html
<eds-button eds-native-button-attributes='{"aria-label":"Call to action"}'
  >Call to action</eds-button
>
```

## Icon-only

For icon-only buttons, use `eds-icon-only` so that the Button's text is visible only to assistive technology.

```html
<eds-button eds-variant="secondary" eds-icon-left="action__chat" eds-icon-only>
  Click to chat
</eds-button>
```

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
