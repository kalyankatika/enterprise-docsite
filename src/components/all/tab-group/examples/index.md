---
layout: layouts/component.njk
title: Tab Group Examples
description: Examples of different tab group variants and use cases
---

# Tab Group Examples

## Basic Example

Basic usage of the tab group component.

```html
<div class="eds-tab-group">
  <div class="eds-tab-group__content">
    Basic tab group content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tab-group">
    <div class="eds-tab-group__content">
      Basic tab group content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-tab-group eds-tab-group--variation-1">
  <div class="eds-tab-group__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tab-group eds-tab-group--variation-1">
    <div class="eds-tab-group__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-tab-group eds-tab-group--variation-2">
  <div class="eds-tab-group__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tab-group eds-tab-group--variation-2">
    <div class="eds-tab-group__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-tab-group" id="interactive-tab-group">
  <div class="eds-tab-group__content">
    Interactive content
  </div>
  <button class="eds-button" id="tab-group-action-button">Interact</button>
</div>

<script>
  document.getElementById('tab-group-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Tab Group interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-tab-group" id="interactive-tab-group">
    <div class="eds-tab-group__content">
      Interactive content
    </div>
    <button class="eds-button" id="tab-group-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the tab group responds to different screen sizes.

```html
<div class="eds-tab-group eds-tab-group--responsive">
  <div class="eds-tab-group__content">
    This tab group adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-tab-group eds-tab-group--responsive">
    <div class="eds-tab-group__content">
      This tab group adapts to different screen sizes
    </div>
  </div>
</div>
