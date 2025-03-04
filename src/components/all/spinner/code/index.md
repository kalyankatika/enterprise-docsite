---
layout: layouts/component.njk
title: Spinner Code
description: Implementation guidelines for the Spinner component
---

# Spinner Implementation

## HTML Structure

```html
<!-- Basic Spinner -->
<div class="eds-spinner">
  <div class="eds-spinner__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-spinner {
  display: block;
  position: relative;
}

.eds-spinner__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeSpinner() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './spinner.css';

const Spinner = ({ children, className, ...props }) => {
  return (
    <div className={`eds-spinner ${className || ''}`} {...props}>
      <div className="eds-spinner__content">
        {children}
      </div>
    </div>
  );
};

export default Spinner;
```

## Usage Examples

### Basic Usage

```jsx
<Spinner>
  Content goes here
</Spinner>
```

### With Options

```jsx
<Spinner 
  className="custom-class"
  data-testid="test-spinner"
>
  Content with options
</Spinner>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
