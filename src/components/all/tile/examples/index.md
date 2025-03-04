---
layout: layouts/component.njk
title: Tile Examples
description: Examples of different tile variants and use cases
---

# Tile Examples

## Basic Example

Basic usage of the tile component.

```html
<div class="eds-tile">
  <div class="eds-tile__content">
    Basic tile content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tile">
    <div class="eds-tile__content">
      Basic tile content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-tile eds-tile--variation-1">
  <div class="eds-tile__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tile eds-tile--variation-1">
    <div class="eds-tile__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-tile eds-tile--variation-2">
  <div class="eds-tile__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tile eds-tile--variation-2">
    <div class="eds-tile__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-tile" id="interactive-tile">
  <div class="eds-tile__content">
    Interactive content
  </div>
  <button class="eds-button" id="tile-action-button">Interact</button>
</div>

<script>
  document.getElementById('tile-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Tile interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-tile" id="interactive-tile">
    <div class="eds-tile__content">
      Interactive content
    </div>
    <button class="eds-button" id="tile-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the tile responds to different screen sizes.

```html
<div class="eds-tile eds-tile--responsive">
  <div class="eds-tile__content">
    This tile adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tile eds-tile--responsive">
    <div class="eds-tile__content">
      This tile adapts to different screen sizes
    </div>
  </div>
</div>
