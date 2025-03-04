---
layout: layouts/component.njk
title: Slider Examples
description: Examples of different slider variants and use cases
---

# Slider Examples

## Basic Example

Basic usage of the slider component.

```html
<div class="eds-slider">
  <div class="eds-slider__content">
    Basic slider content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-slider">
    <div class="eds-slider__content">
      Basic slider content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-slider eds-slider--variation-1">
  <div class="eds-slider__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-slider eds-slider--variation-1">
    <div class="eds-slider__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-slider eds-slider--variation-2">
  <div class="eds-slider__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-slider eds-slider--variation-2">
    <div class="eds-slider__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-slider" id="interactive-slider">
  <div class="eds-slider__content">
    Interactive content
  </div>
  <button class="eds-button" id="slider-action-button">Interact</button>
</div>

<script>
  document.getElementById('slider-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Slider interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-slider" id="interactive-slider">
    <div class="eds-slider__content">
      Interactive content
    </div>
    <button class="eds-button" id="slider-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the slider responds to different screen sizes.

```html
<div class="eds-slider eds-slider--responsive">
  <div class="eds-slider__content">
    This slider adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-slider eds-slider--responsive">
    <div class="eds-slider__content">
      This slider adapts to different screen sizes
    </div>
  </div>
</div>
