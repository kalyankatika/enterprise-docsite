---
layout: layouts/component.njk
title: Radio Examples
description: Examples of different radio variants and use cases
---

# Radio Examples

## Basic Example

Basic usage of the radio component.

```html
<div class="eds-radio">
  <div class="eds-radio__content">
    Basic radio content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio">
    <div class="eds-radio__content">
      Basic radio content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-radio eds-radio--variation-1">
  <div class="eds-radio__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio eds-radio--variation-1">
    <div class="eds-radio__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-radio eds-radio--variation-2">
  <div class="eds-radio__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio eds-radio--variation-2">
    <div class="eds-radio__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-radio" id="interactive-radio">
  <div class="eds-radio__content">
    Interactive content
  </div>
  <button class="eds-button" id="radio-action-button">Interact</button>
</div>

<script>
  document.getElementById('radio-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Radio interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-radio" id="interactive-radio">
    <div class="eds-radio__content">
      Interactive content
    </div>
    <button class="eds-button" id="radio-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the radio responds to different screen sizes.

```html
<div class="eds-radio eds-radio--responsive">
  <div class="eds-radio__content">
    This radio adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-radio eds-radio--responsive">
    <div class="eds-radio__content">
      This radio adapts to different screen sizes
    </div>
  </div>
</div>
