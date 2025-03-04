---
layout: layouts/component.njk
title: Title Code
description: Implementation guidelines for the Title component
---

# Title Implementation

## HTML Structure

```html
<!-- Basic Title -->
<div class="eds-title">
  <div class="eds-title__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-title {
  display: block;
  position: relative;
}

.eds-title__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeTitle() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './title.css';

const Title = ({ children, className, ...props }) => {
  return (
    <div className={`eds-title ${className || ''}`} {...props}>
      <div className="eds-title__content">
        {children}
      </div>
    </div>
  );
};

export default Title;
```

## Usage Examples

### Basic Usage

```jsx
<Title>
  Content goes here
</Title>
```

### With Options

```jsx
<Title 
  className="custom-class"
  data-testid="test-title"
>
  Content with options
</Title>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
