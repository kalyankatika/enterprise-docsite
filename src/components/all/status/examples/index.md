---
layout: layouts/component.njk
title: Status Examples
description: Examples of different status variants and use cases
---

# Status Examples

## Basic Example

Basic usage of the status component.

```html
<div class="eds-status">
  <div class="eds-status__content">
    Basic status content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-status">
    <div class="eds-status__content">
      Basic status content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-status eds-status--variation-1">
  <div class="eds-status__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-status eds-status--variation-1">
    <div class="eds-status__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-status eds-status--variation-2">
  <div class="eds-status__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-status eds-status--variation-2">
    <div class="eds-status__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-status" id="interactive-status">
  <div class="eds-status__content">
    Interactive content
  </div>
  <button class="eds-button" id="status-action-button">Interact</button>
</div>

<script>
  document.getElementById('status-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Status interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-status" id="interactive-status">
    <div class="eds-status__content">
      Interactive content
    </div>
    <button class="eds-button" id="status-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the status responds to different screen sizes.

```html
<div class="eds-status eds-status--responsive">
  <div class="eds-status__content">
    This status adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-status eds-status--responsive">
    <div class="eds-status__content">
      This status adapts to different screen sizes
    </div>
  </div>
</div>
