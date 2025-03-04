---
layout: layouts/component.njk
title: Text Input Code
description: Implementation guidelines for the Text Input component
---

# Text Input Implementation

## HTML Structure

```html
<!-- Basic Text Input -->
<div class="eds-text-input">
  <div class="eds-text-input__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-text-input {
  display: block;
  position: relative;
}

.eds-text-input__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeTextInput() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './text-input.css';

const TextInput = ({ children, className, ...props }) => {
  return (
    <div className={`eds-text-input ${className || ''}`} {...props}>
      <div className="eds-text-input__content">
        {children}
      </div>
    </div>
  );
};

export default TextInput;
```

## Usage Examples

### Basic Usage

```jsx
<TextInput>
  Content goes here
</TextInput>
```

### With Options

```jsx
<TextInput 
  className="custom-class"
  data-testid="test-text-input"
>
  Content with options
</TextInput>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
