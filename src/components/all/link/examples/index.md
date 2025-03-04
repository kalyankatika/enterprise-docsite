---
layout: layouts/component.njk
title: Link Examples
description: Examples of different link variants and use cases
---

# Link Examples

## Basic Example

Basic usage of the link component.

```html
<div class="eds-link">
  <div class="eds-link__content">
    Basic link content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-link">
    <div class="eds-link__content">
      Basic link content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-link eds-link--variation-1">
  <div class="eds-link__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-link eds-link--variation-1">
    <div class="eds-link__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-link eds-link--variation-2">
  <div class="eds-link__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-link eds-link--variation-2">
    <div class="eds-link__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-link" id="interactive-link">
  <div class="eds-link__content">
    Interactive content
  </div>
  <button class="eds-button" id="link-action-button">Interact</button>
</div>

<script>
  document.getElementById('link-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Link interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-link" id="interactive-link">
    <div class="eds-link__content">
      Interactive content
    </div>
    <button class="eds-button" id="link-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the link responds to different screen sizes.

```html
<div class="eds-link eds-link--responsive">
  <div class="eds-link__content">
    This link adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-link eds-link--responsive">
    <div class="eds-link__content">
      This link adapts to different screen sizes
    </div>
  </div>
</div>
