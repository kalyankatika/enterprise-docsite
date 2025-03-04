---
layout: layouts/component.njk
title: Textarea Code
description: Implementation guidelines for the Textarea component
---

# Textarea Implementation

## HTML Structure

```html
<!-- Basic Textarea -->
<div class="eds-textarea">
  <div class="eds-textarea__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-textarea {
  display: block;
  position: relative;
}

.eds-textarea__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeTextarea() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './textarea.css';

const Textarea = ({ children, className, ...props }) => {
  return (
    <div className={`eds-textarea ${className || ''}`} {...props}>
      <div className="eds-textarea__content">
        {children}
      </div>
    </div>
  );
};

export default Textarea;
```

## Usage Examples

### Basic Usage

```jsx
<Textarea>
  Content goes here
</Textarea>
```

### With Options

```jsx
<Textarea 
  className="custom-class"
  data-testid="test-textarea"
>
  Content with options
</Textarea>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
