---
layout: layouts/component.njk
title: Breadcrumbs Code
description: Implementation guidelines for the Breadcrumbs component
---

# Breadcrumbs Implementation

## HTML Structure

```html
<!-- Basic Breadcrumbs -->
<div class="eds-breadcrumbs">
  <div class="eds-breadcrumbs__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-breadcrumbs {
  display: block;
  position: relative;
}

.eds-breadcrumbs__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeBreadcrumbs() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './breadcrumbs.css';

const Breadcrumbs = ({ children, className, ...props }) => {
  return (
    <div className={`eds-breadcrumbs ${className || ''}`} {...props}>
      <div className="eds-breadcrumbs__content">
        {children}
      </div>
    </div>
  );
};

export default Breadcrumbs;
```

## Usage Examples

### Basic Usage

```jsx
<Breadcrumbs>
  Content goes here
</Breadcrumbs>
```

### With Options

```jsx
<Breadcrumbs 
  className="custom-class"
  data-testid="test-breadcrumbs"
>
  Content with options
</Breadcrumbs>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
