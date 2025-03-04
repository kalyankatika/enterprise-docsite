---
layout: layouts/component.njk
title: Status Code
description: Implementation guidelines for the Status component
---

# Status Implementation

## HTML Structure

```html
<!-- Basic Status -->
<div class="eds-status">
  <div class="eds-status__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-status {
  display: block;
  position: relative;
}

.eds-status__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeStatus() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './status.css';

const Status = ({ children, className, ...props }) => {
  return (
    <div className={`eds-status ${className || ''}`} {...props}>
      <div className="eds-status__content">
        {children}
      </div>
    </div>
  );
};

export default Status;
```

## Usage Examples

### Basic Usage

```jsx
<Status>
  Content goes here
</Status>
```

### With Options

```jsx
<Status 
  className="custom-class"
  data-testid="test-status"
>
  Content with options
</Status>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
