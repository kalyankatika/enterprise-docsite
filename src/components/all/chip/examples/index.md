---
layout: layouts/component.njk
title: Chip Examples
description: Examples of different chip variants and use cases
---

# Chip Examples

## Basic Example

Basic usage of the chip component.

```html
<div class="eds-chip">
  <div class="eds-chip__content">
    Basic chip content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-chip">
    <div class="eds-chip__content">
      Basic chip content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-chip eds-chip--variation-1">
  <div class="eds-chip__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-chip eds-chip--variation-1">
    <div class="eds-chip__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-chip eds-chip--variation-2">
  <div class="eds-chip__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-chip eds-chip--variation-2">
    <div class="eds-chip__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-chip" id="interactive-chip">
  <div class="eds-chip__content">
    Interactive content
  </div>
  <button class="eds-button" id="chip-action-button">Interact</button>
</div>

<script>
  document.getElementById('chip-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Chip interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-chip" id="interactive-chip">
    <div class="eds-chip__content">
      Interactive content
    </div>
    <button class="eds-button" id="chip-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the chip responds to different screen sizes.

```html
<div class="eds-chip eds-chip--responsive">
  <div class="eds-chip__content">
    This chip adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-chip eds-chip--responsive">
    <div class="eds-chip__content">
      This chip adapts to different screen sizes
    </div>
  </div>
</div>
