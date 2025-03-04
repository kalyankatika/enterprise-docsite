---
layout: layouts/component.njk
title: Spinner Examples
description: Examples of different spinner variants and use cases
---

# Spinner Examples

## Basic Example

Basic usage of the spinner component.

```html
<div class="eds-spinner">
  <div class="eds-spinner__content">
    Basic spinner content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-spinner">
    <div class="eds-spinner__content">
      Basic spinner content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-spinner eds-spinner--variation-1">
  <div class="eds-spinner__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-spinner eds-spinner--variation-1">
    <div class="eds-spinner__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-spinner eds-spinner--variation-2">
  <div class="eds-spinner__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-spinner eds-spinner--variation-2">
    <div class="eds-spinner__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-spinner" id="interactive-spinner">
  <div class="eds-spinner__content">
    Interactive content
  </div>
  <button class="eds-button" id="spinner-action-button">Interact</button>
</div>

<script>
  document.getElementById('spinner-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Spinner interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-spinner" id="interactive-spinner">
    <div class="eds-spinner__content">
      Interactive content
    </div>
    <button class="eds-button" id="spinner-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the spinner responds to different screen sizes.

```html
<div class="eds-spinner eds-spinner--responsive">
  <div class="eds-spinner__content">
    This spinner adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-spinner eds-spinner--responsive">
    <div class="eds-spinner__content">
      This spinner adapts to different screen sizes
    </div>
  </div>
</div>
