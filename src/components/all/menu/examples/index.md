---
layout: layouts/component.njk
title: Menu Examples
description: Examples of different menu variants and use cases
---

# Menu Examples

## Basic Example

Basic usage of the menu component.

```html
<div class="eds-menu">
  <div class="eds-menu__content">
    Basic menu content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-menu">
    <div class="eds-menu__content">
      Basic menu content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-menu eds-menu--variation-1">
  <div class="eds-menu__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-menu eds-menu--variation-1">
    <div class="eds-menu__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-menu eds-menu--variation-2">
  <div class="eds-menu__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-menu eds-menu--variation-2">
    <div class="eds-menu__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-menu" id="interactive-menu">
  <div class="eds-menu__content">
    Interactive content
  </div>
  <button class="eds-button" id="menu-action-button">Interact</button>
</div>

<script>
  document.getElementById('menu-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Menu interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-menu" id="interactive-menu">
    <div class="eds-menu__content">
      Interactive content
    </div>
    <button class="eds-button" id="menu-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the menu responds to different screen sizes.

```html
<div class="eds-menu eds-menu--responsive">
  <div class="eds-menu__content">
    This menu adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-menu eds-menu--responsive">
    <div class="eds-menu__content">
      This menu adapts to different screen sizes
    </div>
  </div>
</div>
