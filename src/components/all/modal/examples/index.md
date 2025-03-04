---
layout: layouts/component.njk
title: Modal Examples
description: Examples of different modal variants and use cases
---

# Modal Examples

## Basic Example

Basic usage of the modal component.

```html
<div class="eds-modal">
  <div class="eds-modal__content">
    Basic modal content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-modal">
    <div class="eds-modal__content">
      Basic modal content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-modal eds-modal--variation-1">
  <div class="eds-modal__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-modal eds-modal--variation-1">
    <div class="eds-modal__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-modal eds-modal--variation-2">
  <div class="eds-modal__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-modal eds-modal--variation-2">
    <div class="eds-modal__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-modal" id="interactive-modal">
  <div class="eds-modal__content">
    Interactive content
  </div>
  <button class="eds-button" id="modal-action-button">Interact</button>
</div>

<script>
  document.getElementById('modal-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Modal interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-modal" id="interactive-modal">
    <div class="eds-modal__content">
      Interactive content
    </div>
    <button class="eds-button" id="modal-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the modal responds to different screen sizes.

```html
<div class="eds-modal eds-modal--responsive">
  <div class="eds-modal__content">
    This modal adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-modal eds-modal--responsive">
    <div class="eds-modal__content">
      This modal adapts to different screen sizes
    </div>
  </div>
</div>
