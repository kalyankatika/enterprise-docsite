---
layout: layouts/component.njk
title: Stepper Examples
description: Examples of different stepper variants and use cases
---

# Stepper Examples

## Basic Example

Basic usage of the stepper component.

```html
<div class="eds-stepper">
  <div class="eds-stepper__content">
    Basic stepper content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-stepper">
    <div class="eds-stepper__content">
      Basic stepper content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-stepper eds-stepper--variation-1">
  <div class="eds-stepper__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-stepper eds-stepper--variation-1">
    <div class="eds-stepper__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-stepper eds-stepper--variation-2">
  <div class="eds-stepper__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-stepper eds-stepper--variation-2">
    <div class="eds-stepper__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-stepper" id="interactive-stepper">
  <div class="eds-stepper__content">
    Interactive content
  </div>
  <button class="eds-button" id="stepper-action-button">Interact</button>
</div>

<script>
  document.getElementById('stepper-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Stepper interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-stepper" id="interactive-stepper">
    <div class="eds-stepper__content">
      Interactive content
    </div>
    <button class="eds-button" id="stepper-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the stepper responds to different screen sizes.

```html
<div class="eds-stepper eds-stepper--responsive">
  <div class="eds-stepper__content">
    This stepper adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-stepper eds-stepper--responsive">
    <div class="eds-stepper__content">
      This stepper adapts to different screen sizes
    </div>
  </div>
</div>
