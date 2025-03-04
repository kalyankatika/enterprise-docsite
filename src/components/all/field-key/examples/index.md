---
layout: layouts/component.njk
title: Field Key Examples
description: Examples of different field key variants and use cases
---

# Field Key Examples

## Basic Example

Basic usage of the field key component.

```html
<div class="eds-field-key">
  <div class="eds-field-key__content">
    Basic field key content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-key">
    <div class="eds-field-key__content">
      Basic field key content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-field-key eds-field-key--variation-1">
  <div class="eds-field-key__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-key eds-field-key--variation-1">
    <div class="eds-field-key__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-field-key eds-field-key--variation-2">
  <div class="eds-field-key__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-key eds-field-key--variation-2">
    <div class="eds-field-key__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-field-key" id="interactive-field-key">
  <div class="eds-field-key__content">
    Interactive content
  </div>
  <button class="eds-button" id="field-key-action-button">Interact</button>
</div>

<script>
  document.getElementById('field-key-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Field Key interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-field-key" id="interactive-field-key">
    <div class="eds-field-key__content">
      Interactive content
    </div>
    <button class="eds-button" id="field-key-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the field key responds to different screen sizes.

```html
<div class="eds-field-key eds-field-key--responsive">
  <div class="eds-field-key__content">
    This field key adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-field-key eds-field-key--responsive">
    <div class="eds-field-key__content">
      This field key adapts to different screen sizes
    </div>
  </div>
</div>
