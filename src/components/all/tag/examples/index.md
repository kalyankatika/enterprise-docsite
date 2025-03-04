---
layout: layouts/component.njk
title: Tag Examples
description: Examples of different tag variants and use cases
---

# Tag Examples

## Basic Example

Basic usage of the tag component.

```html
<div class="eds-tag">
  <div class="eds-tag__content">
    Basic tag content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tag">
    <div class="eds-tag__content">
      Basic tag content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-tag eds-tag--variation-1">
  <div class="eds-tag__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tag eds-tag--variation-1">
    <div class="eds-tag__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-tag eds-tag--variation-2">
  <div class="eds-tag__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tag eds-tag--variation-2">
    <div class="eds-tag__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-tag" id="interactive-tag">
  <div class="eds-tag__content">
    Interactive content
  </div>
  <button class="eds-button" id="tag-action-button">Interact</button>
</div>

<script>
  document.getElementById('tag-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Tag interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-tag" id="interactive-tag">
    <div class="eds-tag__content">
      Interactive content
    </div>
    <button class="eds-button" id="tag-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the tag responds to different screen sizes.

```html
<div class="eds-tag eds-tag--responsive">
  <div class="eds-tag__content">
    This tag adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tag eds-tag--responsive">
    <div class="eds-tag__content">
      This tag adapts to different screen sizes
    </div>
  </div>
</div>
