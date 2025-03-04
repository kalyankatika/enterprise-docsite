---
layout: layouts/component.njk
title: List Group Examples
description: Examples of different list group variants and use cases
---

# List Group Examples

## Basic Example

Basic usage of the list group component.

```html
<div class="eds-list-group">
  <div class="eds-list-group__content">
    Basic list group content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-list-group">
    <div class="eds-list-group__content">
      Basic list group content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-list-group eds-list-group--variation-1">
  <div class="eds-list-group__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-list-group eds-list-group--variation-1">
    <div class="eds-list-group__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-list-group eds-list-group--variation-2">
  <div class="eds-list-group__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-list-group eds-list-group--variation-2">
    <div class="eds-list-group__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-list-group" id="interactive-list-group">
  <div class="eds-list-group__content">
    Interactive content
  </div>
  <button class="eds-button" id="list-group-action-button">Interact</button>
</div>

<script>
  document.getElementById('list-group-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('List Group interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-list-group" id="interactive-list-group">
    <div class="eds-list-group__content">
      Interactive content
    </div>
    <button class="eds-button" id="list-group-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the list group responds to different screen sizes.

```html
<div class="eds-list-group eds-list-group--responsive">
  <div class="eds-list-group__content">
    This list group adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-list-group eds-list-group--responsive">
    <div class="eds-list-group__content">
      This list group adapts to different screen sizes
    </div>
  </div>
</div>
