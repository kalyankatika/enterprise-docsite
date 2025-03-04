---
layout: layouts/component.njk
title: Form Actions Examples
description: Examples of different form actions variants and use cases
---

# Form Actions Examples

## Basic Example

Basic usage of the form actions component.

```html
<div class="eds-form-actions">
  <div class="eds-form-actions__content">
    Basic form actions content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-form-actions">
    <div class="eds-form-actions__content">
      Basic form actions content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-form-actions eds-form-actions--variation-1">
  <div class="eds-form-actions__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-form-actions eds-form-actions--variation-1">
    <div class="eds-form-actions__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-form-actions eds-form-actions--variation-2">
  <div class="eds-form-actions__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-form-actions eds-form-actions--variation-2">
    <div class="eds-form-actions__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-form-actions" id="interactive-form-actions">
  <div class="eds-form-actions__content">
    Interactive content
  </div>
  <button class="eds-button" id="form-actions-action-button">Interact</button>
</div>

<script>
  document.getElementById('form-actions-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Form Actions interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-form-actions" id="interactive-form-actions">
    <div class="eds-form-actions__content">
      Interactive content
    </div>
    <button class="eds-button" id="form-actions-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the form actions responds to different screen sizes.

```html
<div class="eds-form-actions eds-form-actions--responsive">
  <div class="eds-form-actions__content">
    This form actions adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-form-actions eds-form-actions--responsive">
    <div class="eds-form-actions__content">
      This form actions adapts to different screen sizes
    </div>
  </div>
</div>
