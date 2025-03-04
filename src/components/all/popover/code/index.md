---
layout: layouts/component.njk
title: Popover Code
description: Implementation guidelines for the Popover component
---

# Popover Implementation

## HTML Structure

```html
<!-- Basic Popover -->
<div class="eds-popover">
  <div class="eds-popover__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-popover {
  display: block;
  position: relative;
}

.eds-popover__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializePopover() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './popover.css';

const Popover = ({ children, className, ...props }) => {
  return (
    <div className={`eds-popover ${className || ''}`} {...props}>
      <div className="eds-popover__content">
        {children}
      </div>
    </div>
  );
};

export default Popover;
```

## Usage Examples

### Basic Usage

```jsx
<Popover>
  Content goes here
</Popover>
```

### With Options

```jsx
<Popover 
  className="custom-class"
  data-testid="test-popover"
>
  Content with options
</Popover>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
