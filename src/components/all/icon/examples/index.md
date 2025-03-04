---
layout: layouts/component.njk
title: Icon Examples
description: Examples of different icon variants and use cases
---

# Icon Examples

## Basic Example

Basic usage of the icon component.

```html
<div class="eds-icon">
  <div class="eds-icon__content">
    Basic icon content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-icon">
    <div class="eds-icon__content">
      Basic icon content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-icon eds-icon--variation-1">
  <div class="eds-icon__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-icon eds-icon--variation-1">
    <div class="eds-icon__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-icon eds-icon--variation-2">
  <div class="eds-icon__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-icon eds-icon--variation-2">
    <div class="eds-icon__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-icon" id="interactive-icon">
  <div class="eds-icon__content">
    Interactive content
  </div>
  <button class="eds-button" id="icon-action-button">Interact</button>
</div>

<script>
  document.getElementById('icon-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Icon interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-icon" id="interactive-icon">
    <div class="eds-icon__content">
      Interactive content
    </div>
    <button class="eds-button" id="icon-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the icon responds to different screen sizes.

```html
<div class="eds-icon eds-icon--responsive">
  <div class="eds-icon__content">
    This icon adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-icon eds-icon--responsive">
    <div class="eds-icon__content">
      This icon adapts to different screen sizes
    </div>
  </div>
</div>
