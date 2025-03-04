---
layout: layouts/component.njk
title: Progress Indicator Examples
description: Examples of different progress indicator variants and use cases
---

# Progress Indicator Examples

## Basic Example

Basic usage of the progress indicator component.

```html
<div class="eds-progress-indicator">
  <div class="eds-progress-indicator__content">
    Basic progress indicator content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-progress-indicator">
    <div class="eds-progress-indicator__content">
      Basic progress indicator content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-progress-indicator eds-progress-indicator--variation-1">
  <div class="eds-progress-indicator__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-progress-indicator eds-progress-indicator--variation-1">
    <div class="eds-progress-indicator__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-progress-indicator eds-progress-indicator--variation-2">
  <div class="eds-progress-indicator__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-progress-indicator eds-progress-indicator--variation-2">
    <div class="eds-progress-indicator__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-progress-indicator" id="interactive-progress-indicator">
  <div class="eds-progress-indicator__content">
    Interactive content
  </div>
  <button class="eds-button" id="progress-indicator-action-button">Interact</button>
</div>

<script>
  document.getElementById('progress-indicator-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Progress Indicator interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-progress-indicator" id="interactive-progress-indicator">
    <div class="eds-progress-indicator__content">
      Interactive content
    </div>
    <button class="eds-button" id="progress-indicator-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the progress indicator responds to different screen sizes.

```html
<div class="eds-progress-indicator eds-progress-indicator--responsive">
  <div class="eds-progress-indicator__content">
    This progress indicator adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-progress-indicator eds-progress-indicator--responsive">
    <div class="eds-progress-indicator__content">
      This progress indicator adapts to different screen sizes
    </div>
  </div>
</div>
