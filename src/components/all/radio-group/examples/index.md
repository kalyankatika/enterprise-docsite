---
layout: layouts/component.njk
title: Radio Group Examples
description: Examples of different radio group variants and use cases
---

# Radio Group Examples

## Basic Example

Basic usage of the radio group component.

```html
<div class="eds-radio-group">
  <div class="eds-radio-group__content">
    Basic radio group content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio-group">
    <div class="eds-radio-group__content">
      Basic radio group content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-radio-group eds-radio-group--variation-1">
  <div class="eds-radio-group__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio-group eds-radio-group--variation-1">
    <div class="eds-radio-group__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-radio-group eds-radio-group--variation-2">
  <div class="eds-radio-group__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio-group eds-radio-group--variation-2">
    <div class="eds-radio-group__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-radio-group" id="interactive-radio-group">
  <div class="eds-radio-group__content">
    Interactive content
  </div>
  <button class="eds-button" id="radio-group-action-button">Interact</button>
</div>

<script>
  document.getElementById('radio-group-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Radio Group interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-radio-group" id="interactive-radio-group">
    <div class="eds-radio-group__content">
      Interactive content
    </div>
    <button class="eds-button" id="radio-group-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the radio group responds to different screen sizes.

```html
<div class="eds-radio-group eds-radio-group--responsive">
  <div class="eds-radio-group__content">
    This radio group adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio-group eds-radio-group--responsive">
    <div class="eds-radio-group__content">
      This radio group adapts to different screen sizes
    </div>
  </div>
</div>
