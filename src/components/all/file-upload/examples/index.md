---
layout: layouts/component.njk
title: File Upload Examples
description: Examples of different file upload variants and use cases
---

# File Upload Examples

## Basic Example

Basic usage of the file upload component.

```html
<div class="eds-file-upload">
  <div class="eds-file-upload__content">
    Basic file upload content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-file-upload">
    <div class="eds-file-upload__content">
      Basic file upload content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

```html
<div class="eds-file-upload eds-file-upload--variation-1">
  <div class="eds-file-upload__content">
    Variation 1 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-file-upload eds-file-upload--variation-1">
    <div class="eds-file-upload__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

```html
<div class="eds-file-upload eds-file-upload--variation-2">
  <div class="eds-file-upload__content">
    Variation 2 content
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-file-upload eds-file-upload--variation-2">
    <div class="eds-file-upload__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

```html
<div class="eds-file-upload" id="interactive-file-upload">
  <div class="eds-file-upload__content">
    Interactive content
  </div>
  <button class="eds-button" id="file-upload-action-button">Interact</button>
</div>

<script>
  document.getElementById('file-upload-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('File Upload interaction triggered');
  });
</script>
```

<div class="example-preview">
  <div class="eds-file-upload" id="interactive-file-upload">
    <div class="eds-file-upload__content">
      Interactive content
    </div>
    <button class="eds-button" id="file-upload-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the file upload responds to different screen sizes.

```html
<div class="eds-file-upload eds-file-upload--responsive">
  <div class="eds-file-upload__content">
    This file upload adapts to different screen sizes
  </div>
</div>
```

<div class="example-preview">
  <div class="eds-file-upload eds-file-upload--responsive">
    <div class="eds-file-upload__content">
      This file upload adapts to different screen sizes
    </div>
  </div>
</div>
