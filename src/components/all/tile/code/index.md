---
layout: layouts/component.njk
title: Tile Code
description: Implementation guidelines for the Tile component
---

# Tile Implementation

## HTML Structure

```html
<!-- Basic Tile -->
<div class="eds-tile">
  <div class="eds-tile__content">
    <!-- Component content goes here -->
  </div>
</div>
```

## CSS Implementation

```css
.eds-tile {
  display: block;
  position: relative;
}

.eds-tile__content {
  padding: var(--spacing-4);
}
```

## JavaScript

```javascript
// Optional JavaScript for enhanced functionality
function initializeTile() {
  // Implementation details
}
```

## React Implementation

```jsx
import React from 'react';
import './tile.css';

const Tile = ({ children, className, ...props }) => {
  return (
    <div className={`eds-tile ${className || ''}`} {...props}>
      <div className="eds-tile__content">
        {children}
      </div>
    </div>
  );
};

export default Tile;
```

## Usage Examples

### Basic Usage

```jsx
<Tile>
  Content goes here
</Tile>
```

### With Options

```jsx
<Tile 
  className="custom-class"
  data-testid="test-tile"
>
  Content with options
</Tile>
```

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
