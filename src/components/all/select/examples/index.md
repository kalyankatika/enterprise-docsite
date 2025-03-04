---
layout: layouts/component.njk
title: Select Examples
description: Examples of different select variants and use cases
---

# Select Examples

## Basic Example

Basic usage of the select component.

```html
<div class="eds-select">
  <div class="eds-select__content">
    Basic select content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-select">
    <div class="eds-select__content">
      Basic select content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-select eds-select--variation-1">
  <div class="eds-select__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-select eds-select--variation-1">
    <div class="eds-select__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-select eds-select--variation-2">
  <div class="eds-select__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-select eds-select--variation-2">
    <div class="eds-select__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-select" id="interactive-select">
  <div class="eds-select__content">
    Interactive content
  </div>
  <button class="eds-button" id="select-action-button">Interact</button>
</div>

<script>
  document.getElementById('select-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Select interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-select" id="interactive-select">
    <div class="eds-select__content">
      Interactive content
    </div>
    <button class="eds-button" id="select-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the select responds to different screen sizes.

```html
<div class="eds-select eds-select--responsive">
  <div class="eds-select__content">
    This select adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-select eds-select--responsive">
    <div class="eds-select__content">
      This select adapts to different screen sizes
    </div>
  </div>
</div>
