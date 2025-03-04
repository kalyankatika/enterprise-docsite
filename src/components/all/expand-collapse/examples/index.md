---
layout: layouts/component.njk
title: Expand Collapse Examples
description: Examples of different expand collapse variants and use cases
---

# Expand Collapse Examples

## Basic Example

Basic usage of the expand collapse component.

```html
<div class="eds-expand-collapse">
  <div class="eds-expand-collapse__content">
    Basic expand collapse content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-expand-collapse">
    <div class="eds-expand-collapse__content">
      Basic expand collapse content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-expand-collapse eds-expand-collapse--variation-1">
  <div class="eds-expand-collapse__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-expand-collapse eds-expand-collapse--variation-1">
    <div class="eds-expand-collapse__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-expand-collapse eds-expand-collapse--variation-2">
  <div class="eds-expand-collapse__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-expand-collapse eds-expand-collapse--variation-2">
    <div class="eds-expand-collapse__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-expand-collapse" id="interactive-expand-collapse">
  <div class="eds-expand-collapse__content">
    Interactive content
  </div>
  <button class="eds-button" id="expand-collapse-action-button">Interact</button>
</div>

<script>
  document.getElementById('expand-collapse-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Expand Collapse interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-expand-collapse" id="interactive-expand-collapse">
    <div class="eds-expand-collapse__content">
      Interactive content
    </div>
    <button class="eds-button" id="expand-collapse-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the expand collapse responds to different screen sizes.

```html
<div class="eds-expand-collapse eds-expand-collapse--responsive">
  <div class="eds-expand-collapse__content">
    This expand collapse adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-expand-collapse eds-expand-collapse--responsive">
    <div class="eds-expand-collapse__content">
      This expand collapse adapts to different screen sizes
    </div>
  </div>
</div>
