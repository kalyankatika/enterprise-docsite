---
layout: layouts/component.njk
title: Radio Code
description: Implementation guidelines for the Radio component
---

# Radio Implementation

## HTML Structure

```html
<!-- Basic Radio -->
<div class="eds-radio">
  <div class="eds-radio__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-radio {
  display: block;
  position: relative;
}

.eds-radio__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeRadio() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './radio.css';

const Radio = ({ children, className, ...props }) => {
  return (
    <div className={`eds-radio ${className || ''}`} {...props}>
      <div className="eds-radio__content">
        {children}
      </div>
    </div>
  );
};

export default Radio;
```

## Usage Examples

### Basic Usage

```jsx
<Radio>
  Content goes here
</Radio>
```

### With Options

```jsx
<Radio 
  className="custom-class"
  data-testid="test-radio"
>
  Content with options
</Radio>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
