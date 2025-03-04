---
layout: layouts/component.njk
title: Chip Code
description: Implementation guidelines for the Chip component
---

# Chip Implementation

## HTML Structure

```html
<!-- Basic Chip -->
<div class="eds-chip">
  <div class="eds-chip__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-chip {
  display: block;
  position: relative;
}

.eds-chip__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeChip() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './chip.css';

const Chip = ({ children, className, ...props }) => {
  return (
    <div className={`eds-chip ${className || ''}`} {...props}>
      <div className="eds-chip__content">
        {children}
      </div>
    </div>
  );
};

export default Chip;
```

## Usage Examples

### Basic Usage

```jsx
<Chip>
  Content goes here
</Chip>
```

### With Options

```jsx
<Chip 
  className="custom-class"
  data-testid="test-chip"
>
  Content with options
</Chip>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
