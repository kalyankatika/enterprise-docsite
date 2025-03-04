---
layout: layouts/component.njk
title: Icon Code
description: Implementation guidelines for the Icon component
---

# Icon Implementation

## HTML Structure

```html
<!-- Basic Icon -->
<div class="eds-icon">
  <div class="eds-icon__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-icon {
  display: block;
  position: relative;
}

.eds-icon__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeIcon() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './icon.css';

const Icon = ({ children, className, ...props }) => {
  return (
    <div className={`eds-icon ${className || ''}`} {...props}>
      <div className="eds-icon__content">
        {children}
      </div>
    </div>
  );
};

export default Icon;
```

## Usage Examples

### Basic Usage

```jsx
<Icon>
  Content goes here
</Icon>
```

### With Options

```jsx
<Icon 
  className="custom-class"
  data-testid="test-icon"
>
  Content with options
</Icon>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
