---
layout: layouts/component.njk
title: Switch Examples
description: Examples of different switch variants and use cases
---

# Switch Examples

## Basic Example

Basic usage of the switch component.

```html
<div class="eds-switch">
  <div class="eds-switch__content">
    Basic switch content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-switch">
    <div class="eds-switch__content">
      Basic switch content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-switch eds-switch--variation-1">
  <div class="eds-switch__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-switch eds-switch--variation-1">
    <div class="eds-switch__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-switch eds-switch--variation-2">
  <div class="eds-switch__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-switch eds-switch--variation-2">
    <div class="eds-switch__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-switch" id="interactive-switch">
  <div class="eds-switch__content">
    Interactive content
  </div>
  <button class="eds-button" id="switch-action-button">Interact</button>
</div>

<script>
  document.getElementById('switch-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('Switch interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-switch" id="interactive-switch">
    <div class="eds-switch__content">
      Interactive content
    </div>
    <button class="eds-button" id="switch-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the switch responds to different screen sizes.

```html
<div class="eds-switch eds-switch--responsive">
  <div class="eds-switch__content">
    This switch adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-switch eds-switch--responsive">
    <div class="eds-switch__content">
      This switch adapts to different screen sizes
    </div>
  </div>
</div>
