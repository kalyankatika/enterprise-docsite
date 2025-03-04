---
layout: layouts/component.njk
title: Breadcrumbs Examples
description: Examples of different breadcrumbs variants and use cases
---

# Breadcrumbs Examples

## Basic Example

Basic usage of the breadcrumbs component.

```html
<div class="eds-breadcrumbs">
  <div class="eds-breadcrumbs__content">
    Basic breadcrumbs content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-breadcrumbs">
    <div class="eds-breadcrumbs__content">
      Basic breadcrumbs content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-breadcrumbs eds-breadcrumbs--variation-1">
  <div class="eds-breadcrumbs__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-breadcrumbs eds-breadcrumbs--variation-1">
    <div class="eds-breadcrumbs__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-breadcrumbs eds-breadcrumbs--variation-2">
  <div class="eds-breadcrumbs__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-breadcrumbs eds-breadcrumbs--variation-2">
    <div class="eds-breadcrumbs__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-breadcrumbs" id="interactive-breadcrumbs">
  <div class="eds-breadcrumbs__content">
    Interactive content
  </div>
  <button class="eds-button" id="breadcrumbs-action-button">Interact</button>
</div>

<script>
  document.getElementById('breadcrumbs-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Breadcrumbs interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-breadcrumbs" id="interactive-breadcrumbs">
    <div class="eds-breadcrumbs__content">
      Interactive content
    </div>
    <button class="eds-button" id="breadcrumbs-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the breadcrumbs responds to different screen sizes.

```html
<div class="eds-breadcrumbs eds-breadcrumbs--responsive">
  <div class="eds-breadcrumbs__content">
    This breadcrumbs adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-breadcrumbs eds-breadcrumbs--responsive">
    <div class="eds-breadcrumbs__content">
      This breadcrumbs adapts to different screen sizes
    </div>
  </div>
</div>
