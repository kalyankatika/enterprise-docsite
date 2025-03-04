---
layout: layouts/component.njk
title: Stepper Code
description: Implementation guidelines for the Stepper component
---

# Stepper Implementation

## HTML Structure

```html
<!-- Basic Stepper -->
<div class="eds-stepper">
  <div class="eds-stepper__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-stepper {
  display: block;
  position: relative;
}

.eds-stepper__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeStepper() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './stepper.css';

const Stepper = ({ children, className, ...props }) => {
  return (
    <div className={`eds-stepper ${className || ''}`} {...props}>
      <div className="eds-stepper__content">
        {children}
      </div>
    </div>
  );
};

export default Stepper;
```

## Usage Examples

### Basic Usage

```jsx
<Stepper>
  Content goes here
</Stepper>
```

### With Options

```jsx
<Stepper 
  className="custom-class"
  data-testid="test-stepper"
>
  Content with options
</Stepper>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
