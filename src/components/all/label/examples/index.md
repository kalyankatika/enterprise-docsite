---
layout: layouts/component.njk
title: Label Examples
description: Examples of different label variants and use cases
---

# Label Examples

## Basic Example

Basic usage of the label component.

```html
<div class="eds-label">
  <div class="eds-label__content">
    Basic label content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-label">
    <div class="eds-label__content">
      Basic label content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-label eds-label--variation-1">
  <div class="eds-label__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-label eds-label--variation-1">
    <div class="eds-label__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-label eds-label--variation-2">
  <div class="eds-label__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-label eds-label--variation-2">
    <div class="eds-label__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-label" id="interactive-label">
  <div class="eds-label__content">
    Interactive content
  </div>
  <button class="eds-button" id="label-action-button">Interact</button>
</div>

<script>
  document.getElementById('label-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Label interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-label" id="interactive-label">
    <div class="eds-label__content">
      Interactive content
    </div>
    <button class="eds-button" id="label-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the label responds to different screen sizes.

```html
<div class="eds-label eds-label--responsive">
  <div class="eds-label__content">
    This label adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-label eds-label--responsive">
    <div class="eds-label__content">
      This label adapts to different screen sizes
    </div>
  </div>
</div>
