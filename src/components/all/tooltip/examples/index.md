---
layout: layouts/component.njk
title: Tooltip Examples
description: Examples of different tooltip variants and use cases
---

# Tooltip Examples

## Basic Example

Basic usage of the tooltip component.

```html
<div class="eds-tooltip">
  <div class="eds-tooltip__content">
    Basic tooltip content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tooltip">
    <div class="eds-tooltip__content">
      Basic tooltip content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-tooltip eds-tooltip--variation-1">
  <div class="eds-tooltip__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tooltip eds-tooltip--variation-1">
    <div class="eds-tooltip__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-tooltip eds-tooltip--variation-2">
  <div class="eds-tooltip__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tooltip eds-tooltip--variation-2">
    <div class="eds-tooltip__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-tooltip" id="interactive-tooltip">
  <div class="eds-tooltip__content">
    Interactive content
  </div>
  <button class="eds-button" id="tooltip-action-button">Interact</button>
</div>

<script>
  document.getElementById('tooltip-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Tooltip interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-tooltip" id="interactive-tooltip">
    <div class="eds-tooltip__content">
      Interactive content
    </div>
    <button class="eds-button" id="tooltip-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the tooltip responds to different screen sizes.

```html
<div class="eds-tooltip eds-tooltip--responsive">
  <div class="eds-tooltip__content">
    This tooltip adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tooltip eds-tooltip--responsive">
    <div class="eds-tooltip__content">
      This tooltip adapts to different screen sizes
    </div>
  </div>
</div>
