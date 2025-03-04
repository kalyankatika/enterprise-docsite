---
layout: layouts/component.njk
title: Popover Examples
description: Examples of different popover variants and use cases
---

# Popover Examples

## Basic Example

Basic usage of the popover component.

```html
<div class="eds-popover">
  <div class="eds-popover__content">
    Basic popover content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-popover">
    <div class="eds-popover__content">
      Basic popover content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-popover eds-popover--variation-1">
  <div class="eds-popover__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-popover eds-popover--variation-1">
    <div class="eds-popover__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-popover eds-popover--variation-2">
  <div class="eds-popover__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-popover eds-popover--variation-2">
    <div class="eds-popover__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-popover" id="interactive-popover">
  <div class="eds-popover__content">
    Interactive content
  </div>
  <button class="eds-button" id="popover-action-button">Interact</button>
</div>

<script>
  document.getElementById('popover-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Popover interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-popover" id="interactive-popover">
    <div class="eds-popover__content">
      Interactive content
    </div>
    <button class="eds-button" id="popover-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the popover responds to different screen sizes.

```html
<div class="eds-popover eds-popover--responsive">
  <div class="eds-popover__content">
    This popover adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-popover eds-popover--responsive">
    <div class="eds-popover__content">
      This popover adapts to different screen sizes
    </div>
  </div>
</div>
