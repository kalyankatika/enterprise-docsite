---
layout: layouts/component.njk
title: Text Input Examples
description: Examples of different text input variants and use cases
---

# Text Input Examples

## Basic Example

Basic usage of the text input component.

```html
<div class="eds-text-input">
  <div class="eds-text-input__content">
    Basic text input content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-text-input">
    <div class="eds-text-input__content">
      Basic text input content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-text-input eds-text-input--variation-1">
  <div class="eds-text-input__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-text-input eds-text-input--variation-1">
    <div class="eds-text-input__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-text-input eds-text-input--variation-2">
  <div class="eds-text-input__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-text-input eds-text-input--variation-2">
    <div class="eds-text-input__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-text-input" id="interactive-text-input">
  <div class="eds-text-input__content">
    Interactive content
  </div>
  <button class="eds-button" id="text-input-action-button">Interact</button>
</div>

<script>
  document.getElementById('text-input-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Text Input interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-text-input" id="interactive-text-input">
    <div class="eds-text-input__content">
      Interactive content
    </div>
    <button class="eds-button" id="text-input-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the text input responds to different screen sizes.

```html
<div class="eds-text-input eds-text-input--responsive">
  <div class="eds-text-input__content">
    This text input adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-text-input eds-text-input--responsive">
    <div class="eds-text-input__content">
      This text input adapts to different screen sizes
    </div>
  </div>
</div>
