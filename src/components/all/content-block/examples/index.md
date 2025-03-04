---
layout: layouts/component.njk
title: Content Block Examples
description: Examples of different content block variants and use cases
---

# Content Block Examples

## Basic Example

Basic usage of the content block component.

```html
<div class="eds-content-block">
  <div class="eds-content-block__content">
    Basic content block content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-content-block">
    <div class="eds-content-block__content">
      Basic content block content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-content-block eds-content-block--variation-1">
  <div class="eds-content-block__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-content-block eds-content-block--variation-1">
    <div class="eds-content-block__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-content-block eds-content-block--variation-2">
  <div class="eds-content-block__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-content-block eds-content-block--variation-2">
    <div class="eds-content-block__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-content-block" id="interactive-content-block">
  <div class="eds-content-block__content">
    Interactive content
  </div>
  <button class="eds-button" id="content-block-action-button">Interact</button>
</div>

<script>
  document.getElementById('content-block-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Content Block interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-content-block" id="interactive-content-block">
    <div class="eds-content-block__content">
      Interactive content
    </div>
    <button class="eds-button" id="content-block-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the content block responds to different screen sizes.

```html
<div class="eds-content-block eds-content-block--responsive">
  <div class="eds-content-block__content">
    This content block adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-content-block eds-content-block--responsive">
    <div class="eds-content-block__content">
      This content block adapts to different screen sizes
    </div>
  </div>
</div>
