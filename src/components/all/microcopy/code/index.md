---
layout: layouts/component.njk
title: Microcopy Code
description: Implementation guidelines for the Microcopy component
---

# Microcopy Implementation

## HTML Structure

```html
<!-- Basic Microcopy -->
<div class="eds-microcopy">
  <div class="eds-microcopy__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-microcopy {
  display: block;
  position: relative;
}

.eds-microcopy__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeMicrocopy() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './microcopy.css';

const Microcopy = ({ children, className, ...props }) => {
  return (
    <div className={`eds-microcopy ${className || ''}`} {...props}>
      <div className="eds-microcopy__content">
        {children}
      </div>
    </div>
  );
};

export default Microcopy;
```

## Usage Examples

### Basic Usage

```jsx
<Microcopy>
  Content goes here
</Microcopy>
```

### With Options

```jsx
<Microcopy 
  className="custom-class"
  data-testid="test-microcopy"
>
  Content with options
</Microcopy>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
