---
layout: layouts/component.njk
title: Segment Examples
description: Examples of different segment variants and use cases
---

# Segment Examples

## Basic Example

Basic usage of the segment component.

```html
<div class="eds-segment">
  <div class="eds-segment__content">
    Basic segment content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segment">
    <div class="eds-segment__content">
      Basic segment content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-segment eds-segment--variation-1">
  <div class="eds-segment__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segment eds-segment--variation-1">
    <div class="eds-segment__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-segment eds-segment--variation-2">
  <div class="eds-segment__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segment eds-segment--variation-2">
    <div class="eds-segment__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-segment" id="interactive-segment">
  <div class="eds-segment__content">
    Interactive content
  </div>
  <button class="eds-button" id="segment-action-button">Interact</button>
</div>

<script>
  document.getElementById('segment-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Segment interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-segment" id="interactive-segment">
    <div class="eds-segment__content">
      Interactive content
    </div>
    <button class="eds-button" id="segment-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the segment responds to different screen sizes.

```html
<div class="eds-segment eds-segment--responsive">
  <div class="eds-segment__content">
    This segment adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-segment eds-segment--responsive">
    <div class="eds-segment__content">
      This segment adapts to different screen sizes
    </div>
  </div>
</div>
