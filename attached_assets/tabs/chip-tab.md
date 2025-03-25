---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Chip
  key: web-chip
  parent: web-components
  order: 1
  channel: web
description: Chips help users make selections, filter content, or trigger actions.
aliases: Toggle chip, Filter chip, Selection pill
tags: web
name: FDSChip
status: Production
tokens: chip
useTabs: true
---

<!-- SECTION: examples -->
## Default

- Clicking anywhere on the chip will select/unselect the option.
- _Chip is only available in the FDS theme._

<div class="example">
  <eds-chip>Option A</eds-chip>
</div>

```html
<eds-chip>Option A</eds-chip>
```

## States

### Unchecked States

<div class="example">
  <eds-chip>Option A</eds-chip>
</div>

<div class="example">
  <eds-chip data-state="hover">Option A</eds-chip>
</div>

<div class="example">
  <eds-chip data-state="active">Option A</eds-chip>
</div>

<div class="example">
  <eds-chip data-state="focus">Option A</eds-chip>
</div>

```html
<!-- Unchecked -->
<eds-chip>Option A</eds-chip>

<!-- Unchecked Hover -->
<eds-chip data-state="hover">Option A</eds-chip>

<!-- Unchecked Focus -->
<eds-chip data-state="focus">Option A</eds-chip>

<!-- Unchecked Active -->
<eds-chip data-state="active">Option A</eds-chip>
```

### Checked States

<div class="example">
  <eds-chip eds-checked>Option A</eds-chip>
</div>

<div class="example">
  <eds-chip eds-checked data-state="hover-checked">Option A</eds-chip>
</div>

<div class="example">
  <eds-chip eds-checked data-state="active-checked">Option A</eds-chip>
</div>

<div class="example">
  <eds-chip eds-checked data-state="focus-checked">Option A</eds-chip>
</div>

```html
<!-- Checked -->
<eds-chip eds-checked>Option A</eds-chip>

<!-- Hover Checked -->
<eds-chip eds-checked data-state="hover-checked">Option A</eds-chip>

<!-- Active Checked -->
<eds-chip eds-checked data-state="active-checked">Option A</eds-chip>

<!-- Focus Checked-->
<eds-chip eds-checked data-state="focus-checked">Option A</eds-chip>
```
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/data-entry/chip/#visual-design-specifications) for this component.

## Interaction guidelines

Clicking anywhere on the chip will select/unselect the option.

### Usage guidelines
| Do | Don't |
| -- | ----- |
| Use in a group to achieve a certain purpose, e.g., data filtering or user selection.   | Use a toggle chip by itself. |
| Label the group of associated chips. | Change the label text when the state changes. |
| Provide information on how users should make selections, e.g., single or multiple selections. |  |

## Content guidance

### Usage
Chips are used to enable or disable a feature or setting on a website or tool, such as:
- Settings panels
- Preference toggles
- Feature enable/disable options

### Format
- Chip labels should be clear, concise, and sentence case.
- The chip should have a clear "on" and "off" state, represented alongside the selected option.
  - The current state of the chip should be clearly recognizable.

### Resources
[Basis Pill Indicator](https://basis.xyz.com/docs/explore/components/indicators/pill-indicator/)
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Attributes
    
| Attribute              | Type    | Validation | Default | Description |
| ---------------------- | ------- | ---------- | ------- | ----------- |
| `eds-aria-describedby` | string  | --         | --      | A string of `id`'s separated by spaces that will be set as the `aria-describedby` attribute on the native `<input>` element. |
| `eds-checked`          | boolean | --         | `false` | Indicates whether the Chip component should be checked. The value of `eds-checked` will be reflected to the native checked attribute of the native `<input>` element. |
| `eds-name`             | string  | --         | --      | Field name of the native `<input>` for your form data |
| `eds-value`            | string  | --         | --      | Sets the value of the `<input>` element. |

### Slots

| Name        | Default content | Description |
| ----------- | --------------- | ----------- |
| `default`   | --              | The text to be used for the label. |

### Events

Listen for the "eds-clicked" event to handle your app business. The "eds-clicked" emits a detail object with the alert ID, text, and value.

### Methods

The Chip component does not implement any public methods.

### CSS modifier classes

The Chip component does not expose any CSS modifier classes.

### Namespacing

#### Web Component
```html
<eds3-chip>Option A</eds3-chip>
```

#### HTML/CSS
```html
<div class="eds3-chip-root">...</div>
```

### Import Reference

| Import                                                                      | Required |
| --------------------------------------------------------------------------- | --- |
| `import { edsChip } from '@xyz-ap153177/apex-kit';`                     | Yes |
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Accessibility Considerations

- A group of chips should be considered like a group of form controls and should be placed in a parent with the role of group, using a visible label for the group. Otherwise, each chip's input will need to be programmatically associated with the label/heading through the described-by property attribute.
- Content changes that are tied to a chip or filter row should occur following the chip itself. Depending on the desired experience, a live region announcement might be needed to convey page changes to users in real time.

### ARIA Attributes

The Chip component uses the following ARIA attributes:
- `role="checkbox"`: Identifies the element as a checkbox
- `aria-checked`: Indicates whether the chip is currently checked
- `aria-describedby`: Connects the chip to its description when provided

### Keyboard Navigation

| Key | Function |
| --- | -------- |
| `Tab` | Moves focus to the chip |
| `Space` | Toggles the chip's checked state |
| `Enter` | Toggles the chip's checked state |

### Screen Reader Announcements

When properly implemented, screen readers will announce:
- The chip's text content
- Its role as a checkbox
- Whether it is checked or unchecked
- Any associated description text
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Chip

Chips help users make selections, filter content, or trigger actions.
