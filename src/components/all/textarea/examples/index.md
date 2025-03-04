---
layout: layouts/component.njk
title: Textarea Examples
description: Examples of different textarea variants and use cases
---

# Textarea Examples

## Basic Example

Basic usage of the textarea component.

```html
<div class="eds-textarea">
  <div class="eds-textarea__content">
    Basic textarea content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-textarea">
    <div class="eds-textarea__content">
      Basic textarea content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-textarea eds-textarea--variation-1">
  <div class="eds-textarea__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-textarea eds-textarea--variation-1">
    <div class="eds-textarea__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-textarea eds-textarea--variation-2">
  <div class="eds-textarea__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-textarea eds-textarea--variation-2">
    <div class="eds-textarea__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-textarea" id="interactive-textarea">
  <div class="eds-textarea__content">
    Interactive content
  </div>
  <button class="eds-button" id="textarea-action-button">Interact</button>
</div>

<script>
  document.getElementById('textarea-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Textarea interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-textarea" id="interactive-textarea">
    <div class="eds-textarea__content">
      Interactive content
    </div>
    <button class="eds-button" id="textarea-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the textarea responds to different screen sizes.

```html
<div class="eds-textarea eds-textarea--responsive">
  <div class="eds-textarea__content">
    This textarea adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-textarea eds-textarea--responsive">
    <div class="eds-textarea__content">
      This textarea adapts to different screen sizes
    </div>
  </div>
</div>
