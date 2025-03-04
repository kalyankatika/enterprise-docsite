---
layout: layouts/component.njk
title: Tooltip Code
description: Implementation guidelines for the Tooltip component
---

# Tooltip Implementation

## HTML Structure

```html
<!-- Basic Tooltip -->
<div class="eds-tooltip">
  <div class="eds-tooltip__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-tooltip {
  display: block;
  position: relative;
}

.eds-tooltip__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeTooltip() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './tooltip.css';

const Tooltip = ({ children, className, ...props }) => {
  return (
    <div className={`eds-tooltip ${className || ''}`} {...props}>
      <div className="eds-tooltip__content">
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
```

## Usage Examples

### Basic Usage

```jsx
<Tooltip>
  Content goes here
</Tooltip>
```

### With Options

```jsx
<Tooltip 
  className="custom-class"
  data-testid="test-tooltip"
>
  Content with options
</Tooltip>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
