---
layout: layouts/component.njk
title: Input Examples
description: Examples of different input variants and use cases
---

# Input Examples

## Basic Example

Basic usage of the input component.

```html
<div class="eds-input">
  <div class="eds-input__content">
    Basic input content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-input">
    <div class="eds-input__content">
      Basic input content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-input eds-input--variation-1">
  <div class="eds-input__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-input eds-input--variation-1">
    <div class="eds-input__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-input eds-input--variation-2">
  <div class="eds-input__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-input eds-input--variation-2">
    <div class="eds-input__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-input" id="interactive-input">
  <div class="eds-input__content">
    Interactive content
  </div>
  <button class="eds-button" id="input-action-button">Interact</button>
</div>

<script>
  document.getElementById('input-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Input interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-input" id="interactive-input">
    <div class="eds-input__content">
      Interactive content
    </div>
    <button class="eds-button" id="input-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the input responds to different screen sizes.

```html
<div class="eds-input eds-input--responsive">
  <div class="eds-input__content">
    This input adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-input eds-input--responsive">
    <div class="eds-input__content">
      This input adapts to different screen sizes
    </div>
  </div>
</div>
