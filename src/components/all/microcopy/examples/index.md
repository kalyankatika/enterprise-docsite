---
layout: layouts/component.njk
title: Microcopy Examples
description: Examples of different microcopy variants and use cases
---

# Microcopy Examples

## Basic Example

Basic usage of the microcopy component.

```html
<div class="eds-microcopy">
  <div class="eds-microcopy__content">
    Basic microcopy content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-microcopy">
    <div class="eds-microcopy__content">
      Basic microcopy content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-microcopy eds-microcopy--variation-1">
  <div class="eds-microcopy__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-microcopy eds-microcopy--variation-1">
    <div class="eds-microcopy__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-microcopy eds-microcopy--variation-2">
  <div class="eds-microcopy__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-microcopy eds-microcopy--variation-2">
    <div class="eds-microcopy__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-microcopy" id="interactive-microcopy">
  <div class="eds-microcopy__content">
    Interactive content
  </div>
  <button class="eds-button" id="microcopy-action-button">Interact</button>
</div>

<script>
  document.getElementById('microcopy-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Microcopy interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-microcopy" id="interactive-microcopy">
    <div class="eds-microcopy__content">
      Interactive content
    </div>
    <button class="eds-button" id="microcopy-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the microcopy responds to different screen sizes.

```html
<div class="eds-microcopy eds-microcopy--responsive">
  <div class="eds-microcopy__content">
    This microcopy adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-microcopy eds-microcopy--responsive">
    <div class="eds-microcopy__content">
      This microcopy adapts to different screen sizes
    </div>
  </div>
</div>
