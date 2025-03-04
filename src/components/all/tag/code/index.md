---
layout: layouts/component.njk
title: Tag Code
description: Implementation guidelines for the Tag component
---

# Tag Implementation

## HTML Structure

```html
<!-- Basic Tag -->
<div class="eds-tag">
  <div class="eds-tag__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-tag {
  display: block;
  position: relative;
}

.eds-tag__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeTag() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './tag.css';

const Tag = ({ children, className, ...props }) => {
  return (
    <div className={`eds-tag ${className || ''}`} {...props}>
      <div className="eds-tag__content">
        {children}
      </div>
    </div>
  );
};

export default Tag;
```

## Usage Examples

### Basic Usage

```jsx
<Tag>
  Content goes here
</Tag>
```

### With Options

```jsx
<Tag 
  className="custom-class"
  data-testid="test-tag"
>
  Content with options
</Tag>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
