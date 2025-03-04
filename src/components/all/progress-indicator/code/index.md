---
layout: layouts/component.njk
title: Progress Indicator Code
description: Implementation guidelines for the Progress Indicator component
---

# Progress Indicator Implementation

## HTML Structure

```html
<!-- Basic Progress Indicator -->
<div class="eds-progress-indicator">
  <div class="eds-progress-indicator__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-progress-indicator {
  display: block;
  position: relative;
}

.eds-progress-indicator__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeProgressIndicator() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './progress-indicator.css';

const ProgressIndicator = ({ children, className, ...props }) => {
  return (
    <div className={`eds-progress-indicator ${className || ''}`} {...props}>
      <div className="eds-progress-indicator__content">
        {children}
      </div>
    </div>
  );
};

export default ProgressIndicator;
```

## Usage Examples

### Basic Usage

```jsx
<ProgressIndicator>
  Content goes here
</ProgressIndicator>
```

### With Options

```jsx
<ProgressIndicator 
  className="custom-class"
  data-testid="test-progress-indicator"
>
  Content with options
</ProgressIndicator>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
