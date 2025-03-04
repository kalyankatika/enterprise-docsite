---
layout: layouts/component.njk
title: Segmented Control Examples
description: Examples of different segmented control variants and use cases
---

# Segmented Control Examples

## Basic Example

Basic usage of the segmented control component.

```html
<div class="eds-segmented-control">
  <div class="eds-segmented-control__content">
    Basic segmented control content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segmented-control">
    <div class="eds-segmented-control__content">
      Basic segmented control content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-segmented-control eds-segmented-control--variation-1">
  <div class="eds-segmented-control__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segmented-control eds-segmented-control--variation-1">
    <div class="eds-segmented-control__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-segmented-control eds-segmented-control--variation-2">
  <div class="eds-segmented-control__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segmented-control eds-segmented-control--variation-2">
    <div class="eds-segmented-control__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-segmented-control" id="interactive-segmented-control">
  <div class="eds-segmented-control__content">
    Interactive content
  </div>
  <button class="eds-button" id="segmented-control-action-button">Interact</button>
</div>

<script>
  document.getElementById('segmented-control-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Segmented Control interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-segmented-control" id="interactive-segmented-control">
    <div class="eds-segmented-control__content">
      Interactive content
    </div>
    <button class="eds-button" id="segmented-control-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the segmented control responds to different screen sizes.

```html
<div class="eds-segmented-control eds-segmented-control--responsive">
  <div class="eds-segmented-control__content">
    This segmented control adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segmented-control eds-segmented-control--responsive">
    <div class="eds-segmented-control__content">
      This segmented control adapts to different screen sizes
    </div>
  </div>
</div>
