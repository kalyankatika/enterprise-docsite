---
layout: layouts/component.njk
title: Page Footer Examples
description: Examples of different page footer variants and use cases
---

# Page Footer Examples

## Basic Example

Basic usage of the page footer component.

```html
<div class="eds-page-footer">
  <div class="eds-page-footer__content">
    Basic page footer content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-footer">
    <div class="eds-page-footer__content">
      Basic page footer content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-page-footer eds-page-footer--variation-1">
  <div class="eds-page-footer__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-footer eds-page-footer--variation-1">
    <div class="eds-page-footer__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-page-footer eds-page-footer--variation-2">
  <div class="eds-page-footer__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-footer eds-page-footer--variation-2">
    <div class="eds-page-footer__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-page-footer" id="interactive-page-footer">
  <div class="eds-page-footer__content">
    Interactive content
  </div>
  <button class="eds-button" id="page-footer-action-button">Interact</button>
</div>

<script>
  document.getElementById('page-footer-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Page Footer interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-page-footer" id="interactive-page-footer">
    <div class="eds-page-footer__content">
      Interactive content
    </div>
    <button class="eds-button" id="page-footer-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the page footer responds to different screen sizes.

```html
<div class="eds-page-footer eds-page-footer--responsive">
  <div class="eds-page-footer__content">
    This page footer adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-footer eds-page-footer--responsive">
    <div class="eds-page-footer__content">
      This page footer adapts to different screen sizes
    </div>
  </div>
</div>
