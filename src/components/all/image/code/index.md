---
layout: layouts/component.njk
title: Image Code
description: Implementation guidelines for the Image component
---

# Image Implementation

## HTML Structure

```html
<!-- Basic Image -->
<div class="eds-image">
  <div class="eds-image__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-image {
  display: block;
  position: relative;
}

.eds-image__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeImage() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './image.css';

const Image = ({ children, className, ...props }) => {
  return (
    <div className={`eds-image ${className || ''}`} {...props}>
      <div className="eds-image__content">
        {children}
      </div>
    </div>
  );
};

export default Image;
```

## Usage Examples

### Basic Usage

```jsx
<Image>
  Content goes here
</Image>
```

### With Options

```jsx
<Image 
  className="custom-class"
  data-testid="test-image"
>
  Content with options
</Image>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
