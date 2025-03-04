---
layout: layouts/component.njk
title: Form Actions Code
description: Implementation guidelines for the Form Actions component
---

# Form Actions Implementation

## HTML Structure

```html
<!-- Basic Form Actions -->
<div class="eds-form-actions">
  <div class="eds-form-actions__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-form-actions {
  display: block;
  position: relative;
}

.eds-form-actions__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeFormActions() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './form-actions.css';

const FormActions = ({ children, className, ...props }) => {
  return (
    <div className={`eds-form-actions ${className || ''}`} {...props}>
      <div className="eds-form-actions__content">
        {children}
      </div>
    </div>
  );
};

export default FormActions;
```

## Usage Examples

### Basic Usage

```jsx
<FormActions>
  Content goes here
</FormActions>
```

### With Options

```jsx
<FormActions 
  className="custom-class"
  data-testid="test-form-actions"
>
  Content with options
</FormActions>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
