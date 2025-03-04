---
layout: layouts/component.njk
title: Modal Code
description: Implementation guidelines for the Modal component
---

# Modal Implementation

## HTML Structure

```html
<!-- Basic Modal -->
<div class="eds-modal">
  <div class="eds-modal__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-modal {
  display: block;
  position: relative;
}

.eds-modal__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeModal() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './modal.css';

const Modal = ({ children, className, ...props }) => {
  return (
    <div className={`eds-modal ${className || ''}`} {...props}>
      <div className="eds-modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

## Usage Examples

### Basic Usage

```jsx
<Modal>
  Content goes here
</Modal>
```

### With Options

```jsx
<Modal 
  className="custom-class"
  data-testid="test-modal"
>
  Content with options
</Modal>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
