---
layout: layouts/component.njk
title: Field Group Examples
description: Examples of different field group variants and use cases
---

# Field Group Examples

## Basic Example

Basic usage of the field group component.

```html
<div class="eds-field-group">
  <div class="eds-field-group__content">
    Basic field group content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-group">
    <div class="eds-field-group__content">
      Basic field group content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-field-group eds-field-group--variation-1">
  <div class="eds-field-group__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-group eds-field-group--variation-1">
    <div class="eds-field-group__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-field-group eds-field-group--variation-2">
  <div class="eds-field-group__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-group eds-field-group--variation-2">
    <div class="eds-field-group__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-field-group" id="interactive-field-group">
  <div class="eds-field-group__content">
    Interactive content
  </div>
  <button class="eds-button" id="field-group-action-button">Interact</button>
</div>

<script>
  document.getElementById('field-group-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Field Group interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-field-group" id="interactive-field-group">
    <div class="eds-field-group__content">
      Interactive content
    </div>
    <button class="eds-button" id="field-group-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the field group responds to different screen sizes.

```html
<div class="eds-field-group eds-field-group--responsive">
  <div class="eds-field-group__content">
    This field group adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-group eds-field-group--responsive">
    <div class="eds-field-group__content">
      This field group adapts to different screen sizes
    </div>
  </div>
</div>
