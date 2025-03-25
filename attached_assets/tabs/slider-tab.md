---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Slider
  key: web-slider
  parent: web-components
  order: 1
  channel: web
description: A slider allows a user to make selections from a preset range of values.
aliases: Range slider, Input range, Slider control
tags: web
name: FDSSlider
status: Production
tokens: slider
useTabs: true
---

<!-- SECTION: examples -->
## Default

<div class="example">
  <eds-slider eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby">
  </eds-slider>
</div>

```html
<eds-slider eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby"></eds-slider>
```

## States

<div class="example">
  <eds-slider eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby">
  </eds-slider>
</div>

<div class="example">
  <eds-slider eds-disabled eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby">
  </eds-slider>
</div>

<div class="example">
  <eds-slider eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby">
  </eds-slider>
</div>

```html
<!-- Default -->
<eds-slider eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby"></eds-slider>

<!-- Disabled -->
<eds-slider eds-disabled eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby"></eds-slider>

<!-- Focus (simulate with CSS for display purposes) -->
<eds-slider eds-text="My Slider" eds-min="0" eds-max="200" eds-value="39" eds-step="1" eds-aria-describedby="describedby"></eds-slider>
```

## Range Labels

<div class="example">
  <eds-slider eds-range-labels="" eds-text="My Slider" eds-min="0" eds-max="200" eds-value="100" eds-step="1" eds-aria-describedby="describedby"></eds-slider>
</div>

```html
<eds-slider eds-range-labels="" eds-text="My Slider" eds-min="0" eds-max="200" eds-value="100" eds-step="1" eds-aria-describedby="describedby"></eds-slider>
```

## Tick Marks

<div class="example">
  <eds-slider eds-text="My Slider" eds-min="0" eds-max="100" eds-value="50" eds-step="25" eds-aria-describedby="describedby" eds-ticks="[0,25,50,75,100]"></eds-slider>
</div>

```html
<eds-slider eds-text="My Slider" eds-min="0" eds-max="100" eds-value="50" eds-step="25" eds-aria-describedby="describedby" eds-ticks="[0,25,50,75,100]"></eds-slider>
```

## Tick Marks with Labels

<div class="example">
  <eds-slider eds-tick-label="" eds-text="My Slider" eds-min="0" eds-max="100" eds-value="50" eds-step="25" eds-aria-describedby="describedby" eds-ticks="[0,25,50,75,100]"></eds-slider>
</div>

```html
<eds-slider eds-tick-label="" eds-text="My Slider" eds-min="0" eds-max="100" eds-value="50" eds-step="25" eds-aria-describedby="describedby" eds-ticks="[0,25,50,75,100]"></eds-slider>
```
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/data-entry/slider/#visual-design-specifications) for this component.

## Interaction guidelines

Sliders allow users to view and select a numeric value (or range) along a track. They're ideal for adjusting settings such as volume and brightness, applying image filters, or adjusting values in a graph of data.

### Immediate effects
- Changes made with sliders are immediate, allowing the user to make slider adjustments while determining a selection.
- Sliders shouldn't be used to adjust settings with any delay in providing user feedback.

### Current state
- Sliders reflect the current state of the settings they control.
- Sliders can be controlled by:
  - Select and drag
  - Select any part of the track
  - Select and arrow keys

### Usage guidelines
| Do | Don't |
| -- | ----- |
| Present the full range of choices that are available. | Use a slider for progress indication. Use the progress indicator component instead. |
| Immediately reflect any input made by a user | Use a slider to indicate a limited range of choices. |
| Use when an exact number isn't important to the user. If the exact number is important, consider using a component that allows the user to enter a precise value. |  Use a slider to indicate progress. |
| Use the slider when you can provide immediate visual feedback on the results of user interaction. Manipulating the thumb control on the slider should asynchronously update displayed values. |  Use if you do not have value feedback. |

## Content guidance

### Usage
- Sliders allow users to select a value (or range of values) along a track. They use icons or labels to represent a numeric or relative scale.
- Use when user needs to select something within a range (e.g., price or risk level).
- Generally, include the smallest value on the left and the largest value on the right for a horizontal slider (even though not every language is read left to left).
- For a vertical slider, the smallest value should be at the bottom and largest value at the top.
- Changes made with sliders are immediate, allowing the user to make slider adjustments while determining a selection.

### Format
- Label the two ends of the slider range.
- Labels are sentence case with no punctuation.
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Attributes

| Attribute              | Type     | Validation                                                                                 | Default | Description                                                                                                                     |
|------------------------|----------|------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `eds-aria-describedby` | string   | --                                                                                         | --      | Sets the `aria-describedby` attribute for the "paragraph" text reflecting the current value.                                    |
| `eds-disabled`	     | boolean	| Anything other than an empty string, `true`, or `eds-disabled` will be treated as `false`. | `false` | Disables the Stepper when true. The value will be reflected on the native disabled attribute of the native `<input>` element.   |
| `eds-max`              | number   | --                                                                                         | --      | Maximum value for the slider set on the composed input.                                                                                                                            |
| `eds-min`              | number   | --                                                                                         | --      | Minimum value for the slider set on the composed input.                                                                                                                            |
| `eds-name`             | string   | --                                                                                         | --      | Field name of the native `<input>` for your form data.                                                                                                                            |
| `eds-ticks`            | string[] | --                                                                                         | --      | Array of numbers to be used as the ticks.                                                                                                                            |
| `eds-tick-label`       | boolean  | Anything other than an empty string, `true`, or `eds-disabled` will be treated as `false`. | `false` | Displays labels for the ticks if set to true.                                                                                                                            |
| `eds-range-labels`     | boolean  | Anything other than an empty string, `true`, or `eds-disabled` will be treated as `false`. | `false` | Displays for min and max range values.                                                                                                                            |
| `eds-text`             | string   | --                                                                                         | --      | Text to display in the slider.                                                                                                                            |
| `eds-value`            | number   | --                                                                                         | --      | Current value for the slider.                                                                                                                            |
| `eds-step`             | number   | --                                                                                         | --      | Step value for the slider set on the composed input.                                                                                                                            |

### Slots

The Slider component does not use slots.

### Events

Listen for the "eds-slider-changed" event to handle your app business. The "eds-clicked" event emits a detail object with the slider's ID.

### Methods

The Slider component does not implement any public methods.

### CSS modifier classes

The Slider component does not implement any CSS modifier classes.

### Namespacing

#### Web Component
```html
<eds3-slider>Option A</eds3-slider>
```

#### HTML/CSS
```html
<div class="eds3-slider-root">...</div>
```

### Import Reference

| Import                                                                      | Required |
| --------------------------------------------------------------------------- | --- |
| `import { edsSlider } from '@xyz-ap153177/apex-kit';`                       | Yes |
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Accessibility Considerations

- Always provide a visible label through the text property.
- While the slider can be used by keyboard entry alone, it can be cumbersome to move through the range of values. Keep this in mind when choosing your minimum and maximum.    

### ARIA Attributes

The Slider component uses the following ARIA attributes:
- `aria-valuemin`: Represents the minimum allowed value
- `aria-valuemax`: Represents the maximum allowed value
- `aria-valuenow`: Represents the current value of the slider
- `aria-disabled`: Indicates whether the slider is currently disabled
- `aria-describedby`: Associates the slider with descriptive text

### Keyboard Navigation

| Key | Function |
| --- | -------- |
| `Tab` | Moves focus to the slider |
| `Left/Down Arrow` | Decreases the value by one step |
| `Right/Up Arrow` | Increases the value by one step |
| `Home` | Sets the slider to its minimum value |
| `End` | Sets the slider to its maximum value |
| `Page Down` | Decreases the value by a larger step |
| `Page Up` | Increases the value by a larger step |
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Slider

A slider allows a user to make selections from a preset range of values.
