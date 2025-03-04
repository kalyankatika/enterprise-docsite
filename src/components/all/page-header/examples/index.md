---
layout: layouts/component.njk
title: Page Header Examples
description: Examples of different page header variants and use cases
---

# Page Header Examples

## Basic Example

Basic usage of the page header component.

```html
<div class="eds-page-header">
  <div class="eds-page-header__content">
    Basic page header content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-header">
    <div class="eds-page-header__content">
      Basic page header content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-page-header eds-page-header--variation-1">
  <div class="eds-page-header__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-header eds-page-header--variation-1">
    <div class="eds-page-header__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-page-header eds-page-header--variation-2">
  <div class="eds-page-header__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-header eds-page-header--variation-2">
    <div class="eds-page-header__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-page-header" id="interactive-page-header">
  <div class="eds-page-header__content">
    Interactive content
  </div>
  <button class="eds-button" id="page-header-action-button">Interact</button>
</div>

<script>
  document.getElementById('page-header-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Page Header interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-page-header" id="interactive-page-header">
    <div class="eds-page-header__content">
      Interactive content
    </div>
    <button class="eds-button" id="page-header-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the page header responds to different screen sizes.

```html
<div class="eds-page-header eds-page-header--responsive">
  <div class="eds-page-header__content">
    This page header adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-page-header eds-page-header--responsive">
    <div class="eds-page-header__content">
      This page header adapts to different screen sizes
    </div>
  </div>
</div>
