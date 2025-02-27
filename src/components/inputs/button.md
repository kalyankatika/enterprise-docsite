---
layout: layouts/component.njk
title: Button
description: Buttons allow users to take actions and make choices with a single tap
excludeFromSearch: false
contentType: Component
status: Stable
version: 1.0.0
lastUpdated: 2023-10-15
eleventyNavigation:
  key: Button
  parent: Inputs
  order: 1
tabs:
  - name: usage
    label: Usage
  - name: code
    label: Code
  - name: accessibility
    label: Accessibility
  - name: specs
    label: Specs
---

{% set overviewContent %}
# Button

Buttons allow users to take actions, make choices, and move through a workflow with a single tap. They communicate actions that users can take and are typically placed throughout your UI (in dialogs, forms, toolbars, etc.).

## When to use

Use buttons to help users perform common actions quickly and easily. Buttons are appropriate when the user needs to:

- Submit a form
- Begin a new task
- Trigger a new UI element to appear on the page
- Specify a new or next step in a process

## Types

The Enterprise Design System provides several button types to help communicate the hierarchy of actions available to users:

- **Primary**: For the main action in a section or page
- **Secondary**: For alternative actions
- **Tertiary**: For less prominent actions
- **Danger**: For destructive actions that might result in data loss
- **Link**: For actions that navigate to another page or external site
- **Icon**: For actions that can be represented by a clear icon

{% endset %}

{% set usageContent %}
## Usage Guidelines

### Button hierarchy

Establish a hierarchy of actions to guide users through your interface:

- Use **primary buttons** for the most important action on a page (typically only one per screen)
- Use **secondary buttons** for alternative actions of equal importance
- Use **tertiary buttons** for less important actions

![Button Hierarchy Example](/assets/images/components/button-hierarchy.png)

### Button placement

- Position primary buttons where users expect to find them (usually at the bottom of a form or dialog)
- Place the primary button on the right (in left-to-right languages) when paired with a secondary button
- Maintain consistent button placement throughout your application

### Button states

Buttons have the following states:

- **Default**: The normal state of the button
- **Hover**: When the user hovers over the button
- **Focus**: When the button receives keyboard focus
- **Active**: When the button is being clicked or tapped
- **Disabled**: When the button is not available for interaction

### Best practices

- Use clear, concise, and action-oriented text (start with a verb)
- Avoid generic terms like "Submit" or "OK" when possible
- Be specific about the action the button performs
- Limit button text to 1-3 words when possible
- Use sentence case for button text
- Include an icon only if it adds meaning to the button
- Ensure adequate spacing around and between buttons

### Things to avoid

- Using too many buttons in one section
- Using primary buttons for multiple actions of equal importance
- Using buttons when links would be more appropriate (for navigation)
- Changing button positions between similar screens
- Using button styles for navigation or content

{% endset %}

{% set codeContent %}
## Implementation

### HTML

```html
<button class="eds-button eds-button--primary">Primary Button</button>
<button class="eds-button eds-button--secondary">Secondary Button</button>
<button class="eds-button eds-button--tertiary">Tertiary Button</button>
<button class="eds-button eds-button--danger">Danger Button</button>
<button class="eds-button eds-button--link">Link Button</button>
<button class="eds-button eds-button--icon">
  <span class="eds-icon">★</span>
</button>
```

### React

```jsx
import { Button } from '@enterprise/design-system';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="icon" icon="star" />
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <eds-button variant="primary">Primary Button</eds-button>
    <eds-button variant="secondary">Secondary Button</eds-button>
    <eds-button variant="tertiary">Tertiary Button</eds-button>
    <eds-button variant="danger">Danger Button</eds-button>
    <eds-button variant="link">Link Button</eds-button>
    <eds-button variant="icon" icon="star" />
  </div>
</template>

<script>
import { EdsButton } from '@enterprise/design-system-vue';

export default {
  components: {
    EdsButton
  }
}
</script>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `'primary'` | Button style: `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'link'`, or `'icon'` |
| `size` | `string` | `'medium'` | Button size: `'small'`, `'medium'`, or `'large'` |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `fullWidth` | `boolean` | `false` | Whether the button should take the full width of its container |
| `type` | `string` | `'button'` | The HTML button type: `'button'`, `'submit'`, or `'reset'` |
| `icon` | `string` | `undefined` | Icon name to display (only for `variant="icon"` or to add an icon to text buttons) |
| `iconPosition` | `string` | `'start'` | Position of the icon: `'start'` or `'end'` (only for text buttons with icons) |
| `href` | `string` | `undefined` | If provided, the button will render as an anchor tag |
| `target` | `string` | `undefined` | Target attribute for the anchor tag (only applies when `href` is provided) |

### Events

| Event | Description |
|-------|-------------|
| `onClick` | Triggered when the button is clicked |
| `onFocus` | Triggered when the button receives focus |
| `onBlur` | Triggered when the button loses focus |

### CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--eds-button-primary-bg` | `var(--eds-color-primary-500)` | Primary button background color |
| `--eds-button-primary-text` | `var(--eds-color-neutral-white)` | Primary button text color |
| `--eds-button-primary-hover-bg` | `var(--eds-color-primary-600)` | Primary button hover background color |
| `--eds-button-border-radius` | `var(--eds-border-radius-medium)` | Button border radius |
| `--eds-button-padding-x` | `var(--eds-spacing-4)` | Horizontal padding |
| `--eds-button-padding-y` | `var(--eds-spacing-2)` | Vertical padding |

{% endset %}

{% set accessibilityContent %}
## Accessibility Considerations

### Keyboard interaction

| Key | Function |
|-----|----------|
| `Tab` | Moves focus to the button |
| `Enter` or `Space` | Activates the button |

### ARIA attributes

- Use `aria-label` when a button has no text (icon-only buttons)
- Use `aria-disabled="true"` to indicate a disabled button
- Use `aria-expanded` for buttons that expand or collapse content
- Use `aria-pressed` for toggle buttons to indicate their state

### Focus management

- Ensure buttons have a visible focus state
- Maintain a logical tab order, especially when multiple buttons are present
- After a button action, focus should be placed in a logical location

### Best practices

- Use the native `<button>` element instead of styling non-button elements to look like buttons
- Ensure adequate color contrast between button text and background
- Make sure icon-only buttons have descriptive labels
- Provide descriptive text for buttons that makes sense when read out of context
- Avoid using disabled buttons when possible, as their purpose can be unclear to assistive technology users

### Example

```html
<!-- Icon-only button with aria-label -->
<button class="eds-button eds-button--icon" aria-label="Add to favorites">
  <span class="eds-icon">★</span>
</button>

<!-- Toggle button with aria-pressed -->
<button class="eds-button eds-button--secondary" aria-pressed="false">
  Show details
</button>

<!-- Expandable button with aria-expanded -->
<button class="eds-button eds-button--primary" aria-expanded="false" aria-controls="panel-1">
  Open panel
</button>
```

## Testing Recommendations

- Verify buttons are keyboard accessible and clickable with keyboard (Enter/Space)
- Ensure screen readers announce button text and state correctly
- Test color contrast for all button states (including hover, focus, and disabled)
- Verify icon-only buttons have appropriate aria-labels
- Check focus indication is visible and clear
- Test with Windows High Contrast mode and other contrast settings

{% endset %}

{% set specsContent %}
## Design Specifications

### Sizing

| Size | Height | Padding X | Padding Y | Font Size |
|------|--------|-----------|-----------|-----------|
| Small | 32px | 16px | 6px | 14px |
| Medium | 40px | 16px | 10px | 16px |
| Large | 48px | 24px | 14px | 16px |

### Typography

- Font Family: var(--eds-font-family-sans)
- Font Weight: var(--eds-font-weight-semibold)
- Text Case: Sentence case
- Line Height: 1.5

### Border Radius

- Small: 4px (var(--eds-border-radius-small))
- Medium: 6px (var(--eds-border-radius-medium))
- Large: 8px (var(--eds-border-radius-large))

### Colors

#### Primary Button

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | Primary-500 | Neutral-White | None |
| Hover | Primary-600 | Neutral-White | None |
| Focus | Primary-500 | Neutral-White | Primary-300 (focus ring) |
| Active | Primary-700 | Neutral-White | None |
| Disabled | Neutral-200 | Neutral-400 | None |

#### Secondary Button

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | Neutral-White | Primary-500 | Primary-500 |
| Hover | Primary-50 | Primary-600 | Primary-600 |
| Focus | Neutral-White | Primary-500 | Primary-300 (focus ring) |
| Active | Primary-100 | Primary-700 | Primary-700 |
| Disabled | Neutral-White | Neutral-400 | Neutral-200 |

### Spacing

- Spacing between buttons in a group: 12px (var(--eds-spacing-3))
- Spacing between icon and text: 8px (var(--eds-spacing-2))

### Anatomy

![Button Anatomy](/assets/images/components/button-anatomy.png)

1. Container
2. Label
3. Icon (optional)
4. Focus Ring (visible on focus state only)

### States

![Button States](/assets/images/components/button-states.png)

{% endset %}

<div class="eds-component-page">
  <section class="eds-component-overview">
    {{ overviewContent | safe }}
  </section>
  
  <div class="eds-component-tabs">
    <div class="eds-tabs" x-data="{ activeTab: 'usage' }">
      <div class="eds-tabs__list" role="tablist">
        <button class="eds-tabs__button" id="usage-tab" role="tab" aria-selected="true" aria-controls="usage-panel" x-on:click="activeTab = 'usage'" x-bind:aria-selected="activeTab === 'usage'">Usage</button>
        <button class="eds-tabs__button" id="code-tab" role="tab" aria-selected="false" aria-controls="code-panel" x-on:click="activeTab = 'code'" x-bind:aria-selected="activeTab === 'code'">Code</button>
        <button class="eds-tabs__button" id="accessibility-tab" role="tab" aria-selected="false" aria-controls="accessibility-panel" x-on:click="activeTab = 'accessibility'" x-bind:aria-selected="activeTab === 'accessibility'">Accessibility</button>
        <button class="eds-tabs__button" id="specs-tab" role="tab" aria-selected="false" aria-controls="specs-panel" x-on:click="activeTab = 'specs'" x-bind:aria-selected="activeTab === 'specs'">Specs</button>
      </div>
      
      <div class="eds-tabs__panels">
        <div class="eds-tabs__panel" id="usage-panel" role="tabpanel" aria-labelledby="usage-tab" x-show="activeTab === 'usage'">
          {{ usageContent | safe }}
        </div>
        <div class="eds-tabs__panel" id="code-panel" role="tabpanel" aria-labelledby="code-tab" x-show="activeTab === 'code'" x-cloak>
          {{ codeContent | safe }}
        </div>
        <div class="eds-tabs__panel" id="accessibility-panel" role="tabpanel" aria-labelledby="accessibility-tab" x-show="activeTab === 'accessibility'" x-cloak>
          {{ accessibilityContent | safe }}
        </div>
        <div class="eds-tabs__panel" id="specs-panel" role="tabpanel" aria-labelledby="specs-tab" x-show="activeTab === 'specs'" x-cloak>
          {{ specsContent | safe }}
        </div>
      </div>
    </div>
  </div>
</div>