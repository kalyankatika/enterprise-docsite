---
layout: layouts/component.njk
title: Expand Collapse Code
description: Implementation guidelines for the Expand Collapse component
---

# Expand Collapse Implementation

## HTML Structure

```html
<!-- Basic Expand Collapse -->
<div class="eds-expand-collapse">
  <div class="eds-expand-collapse__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-expand-collapse {
  display: block;
  position: relative;
}

.eds-expand-collapse__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeExpandCollapse() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './expand-collapse.css';

const ExpandCollapse = ({ children, className, ...props }) => {
  return (
    <div className={`eds-expand-collapse ${className || ''}`} {...props}>
      <div className="eds-expand-collapse__content">
        {children}
      </div>
    </div>
  );
};

export default ExpandCollapse;
```

## Usage Examples

### Basic Usage

```jsx
<ExpandCollapse>
  Content goes here
</ExpandCollapse>
```

### With Options

```jsx
<ExpandCollapse 
  className="custom-class"
  data-testid="test-expand-collapse"
>
  Content with options
</ExpandCollapse>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
