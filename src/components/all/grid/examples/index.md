---
layout: layouts/component.njk
title: Grid Examples
description: Examples of different grid variants and use cases
---

# Grid Examples

## Basic Example

Basic usage of the grid component.

```html
<div class="eds-grid">
  <div class="eds-grid__content">
    Basic grid content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-grid">
    <div class="eds-grid__content">
      Basic grid content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-grid eds-grid--variation-1">
  <div class="eds-grid__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-grid eds-grid--variation-1">
    <div class="eds-grid__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-grid eds-grid--variation-2">
  <div class="eds-grid__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-grid eds-grid--variation-2">
    <div class="eds-grid__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-grid" id="interactive-grid">
  <div class="eds-grid__content">
    Interactive content
  </div>
  <button class="eds-button" id="grid-action-button">Interact</button>
</div>

<script>
  document.getElementById('grid-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Grid interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-grid" id="interactive-grid">
    <div class="eds-grid__content">
      Interactive content
    </div>
    <button class="eds-button" id="grid-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the grid responds to different screen sizes.

```html
<div class="eds-grid eds-grid--responsive">
  <div class="eds-grid__content">
    This grid adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-grid eds-grid--responsive">
    <div class="eds-grid__content">
      This grid adapts to different screen sizes
    </div>
  </div>
</div>
