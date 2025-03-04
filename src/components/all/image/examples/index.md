---
layout: layouts/component.njk
title: Image Examples
description: Examples of different image variants and use cases
---

# Image Examples

## Basic Example

Basic usage of the image component.

```html
<div class="eds-image">
  <div class="eds-image__content">
    Basic image content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-image">
    <div class="eds-image__content">
      Basic image content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-image eds-image--variation-1">
  <div class="eds-image__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-image eds-image--variation-1">
    <div class="eds-image__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-image eds-image--variation-2">
  <div class="eds-image__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-image eds-image--variation-2">
    <div class="eds-image__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-image" id="interactive-image">
  <div class="eds-image__content">
    Interactive content
  </div>
  <button class="eds-button" id="image-action-button">Interact</button>
</div>

<script>
  document.getElementById('image-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Image interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-image" id="interactive-image">
    <div class="eds-image__content">
      Interactive content
    </div>
    <button class="eds-button" id="image-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the image responds to different screen sizes.

```html
<div class="eds-image eds-image--responsive">
  <div class="eds-image__content">
    This image adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-image eds-image--responsive">
    <div class="eds-image__content">
      This image adapts to different screen sizes
    </div>
  </div>
</div>
