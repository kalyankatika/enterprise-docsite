---
layout: layouts/component.njk
title: Table Examples
description: Examples of different table variants and use cases
---

# Table Examples

## Basic Example

Basic usage of the table component.

```html
<div class="eds-table">
  <div class="eds-table__content">
    Basic table content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-table">
    <div class="eds-table__content">
      Basic table content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-table eds-table--variation-1">
  <div class="eds-table__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-table eds-table--variation-1">
    <div class="eds-table__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-table eds-table--variation-2">
  <div class="eds-table__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-table eds-table--variation-2">
    <div class="eds-table__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-table" id="interactive-table">
  <div class="eds-table__content">
    Interactive content
  </div>
  <button class="eds-button" id="table-action-button">Interact</button>
</div>

<script>
  document.getElementById('table-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Table interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-table" id="interactive-table">
    <div class="eds-table__content">
      Interactive content
    </div>
    <button class="eds-button" id="table-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the table responds to different screen sizes.

```html
<div class="eds-table eds-table--responsive">
  <div class="eds-table__content">
    This table adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-table eds-table--responsive">
    <div class="eds-table__content">
      This table adapts to different screen sizes
    </div>
  </div>
</div>
