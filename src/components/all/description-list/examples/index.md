---
layout: layouts/component.njk
title: Description List Examples
description: Examples of different description list variants and use cases
---

# Description List Examples

## Basic Example

Basic usage of the description list component.

```html
<div class="eds-description-list">
  <div class="eds-description-list__content">
    Basic description list content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-description-list">
    <div class="eds-description-list__content">
      Basic description list content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-description-list eds-description-list--variation-1">
  <div class="eds-description-list__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-description-list eds-description-list--variation-1">
    <div class="eds-description-list__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-description-list eds-description-list--variation-2">
  <div class="eds-description-list__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-description-list eds-description-list--variation-2">
    <div class="eds-description-list__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-description-list" id="interactive-description-list">
  <div class="eds-description-list__content">
    Interactive content
  </div>
  <button class="eds-button" id="description-list-action-button">Interact</button>
</div>

<script>
  document.getElementById('description-list-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Description List interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-description-list" id="interactive-description-list">
    <div class="eds-description-list__content">
      Interactive content
    </div>
    <button class="eds-button" id="description-list-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the description list responds to different screen sizes.

```html
<div class="eds-description-list eds-description-list--responsive">
  <div class="eds-description-list__content">
    This description list adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-description-list eds-description-list--responsive">
    <div class="eds-description-list__content">
      This description list adapts to different screen sizes
    </div>
  </div>
</div>
