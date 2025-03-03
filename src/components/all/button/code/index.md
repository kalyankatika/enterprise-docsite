---
layout: layouts/component.njk
title: Button Code
description: Implementation guidelines for the Button component
---

# Button Code Implementation

The Button component is available in various frameworks and can be implemented using the code examples below.

## HTML Implementation

```html
<!-- Primary Button -->
<button class="btn btn-primary">Primary Button</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Secondary Button</button>

<!-- Tertiary Button -->
<button class="btn btn-tertiary">Tertiary Button</button>

<!-- Danger Button -->
<button class="btn btn-danger">Danger Button</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">Ghost Button</button>

<!-- Button with Left Icon -->
<button class="btn btn-primary">
  <svg class="btn-icon btn-icon-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
  </svg>
  Button with Icon
</button>

<!-- Button with Right Icon -->
<button class="btn btn-primary">
  Next
  <svg class="btn-icon btn-icon-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</button>

<!-- Icon-only Button -->
<button class="btn btn-icon-only" aria-label="Settings">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
  </svg>
</button>

<!-- Disabled Button -->
<button class="btn btn-primary" disabled>Disabled Button</button>

<!-- Full-width Button -->
<button class="btn btn-primary btn-full-width">Full-width Button</button>

<!-- Small Button -->
<button class="btn btn-primary btn-sm">Small Button</button>

<!-- Large Button -->
<button class="btn btn-primary btn-lg">Large Button</button>

<!-- Extra Large Button -->
<button class="btn btn-primary btn-xl">Extra Large Button</button>

<!-- Loading Button -->
<button class="btn btn-primary btn-loading" disabled>
  <span class="btn-spinner"></span>
  <span class="btn-text">Loading...</span>
</button>
```

## CSS

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, 
              border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(var(--color-primary-rgb), 0.25);
}

.btn:disabled,
.btn.disabled {
  opacity: 0.65;
  pointer-events: none;
}

/* Button Variants */
.btn-primary {
  color: var(--color-white);
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-primary:hover {
  color: var(--color-white);
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.btn-secondary {
  color: var(--color-primary);
  background-color: var(--color-white);
  border-color: var(--color-primary);
}

.btn-secondary:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  border-color: var(--color-primary);
}

.btn-tertiary {
  color: var(--color-primary);
  background-color: transparent;
  border-color: transparent;
}

.btn-tertiary:hover {
  color: var(--color-primary-dark);
  background-color: var(--color-primary-light);
}

.btn-danger {
  color: var(--color-white);
  background-color: var(--color-error);
  border-color: var(--color-error);
}

.btn-danger:hover {
  color: var(--color-white);
  background-color: var(--color-error-dark);
  border-color: var(--color-error-dark);
}

.btn-ghost {
  color: var(--color-text);
  background-color: transparent;
  border-color: transparent;
}

.btn-ghost:hover {
  color: var(--color-text-dark);
  background-color: var(--color-gray-100);
}

/* Button Sizes */
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 0.2rem;
  height: 2rem;
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  height: 3rem;
}

.btn-xl {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  border-radius: 0.3rem;
  height: 3.5rem;
}

/* Full-width Button */
.btn-full-width {
  display: block;
  width: 100%;
}

/* Icon Button */
.btn-icon {
  display: inline-flex;
  fill: currentColor;
  width: 1rem;
  height: 1rem;
}

.btn-icon-left {
  margin-right: 0.5rem;
}

.btn-icon-right {
  margin-left: 0.5rem;
}

.btn-icon-only {
  padding: 0.5rem;
  border-radius: 50%;
  line-height: 1;
}

/* Loading Button */
.btn-loading {
  position: relative;
}

.btn-spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  vertical-align: text-bottom;
  border: 0.2em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border .75s linear infinite;
}

@keyframes spinner-border {
  to { transform: rotate(360deg); }
}
```

## JavaScript

```javascript
// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(event) {
    if (this.classList.contains('btn-loading')) {
      // Prevent multiple clicks on loading buttons
      event.preventDefault();
      return;
    }
    
    // For buttons that trigger loading states
    if (this.dataset.loading === 'true') {
      this.classList.add('btn-loading');
      this.disabled = true;
      
      const originalText = this.innerHTML;
      this.innerHTML = `
        <span class="btn-spinner"></span>
        <span class="btn-text">Loading...</span>
      `;
      
      // Simulate async operation
      setTimeout(() => {
        this.classList.remove('btn-loading');
        this.disabled = false;
        this.innerHTML = originalText;
      }, 2000);
    }
  });
});
```

## React Implementation

```jsx
import React, { useState } from 'react';
import './Button.css';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon = null,
  iconPosition = 'left',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const handleClick = (event) => {
    if (disabled || isLoading) return;
    if (onClick) onClick(event);
  };

  const getButtonClasses = () => {
    const classes = ['btn', `btn-${variant}`];
    
    if (size === 'small') classes.push('btn-sm');
    if (size === 'large') classes.push('btn-lg');
    if (size === 'xlarge') classes.push('btn-xl');
    if (fullWidth) classes.push('btn-full-width');
    if (isLoading) classes.push('btn-loading');
    if (icon && !children) classes.push('btn-icon-only');
    
    return classes.join(' ');
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <span className={`btn-icon ${children ? `btn-icon-${iconPosition}` : ''}`}>
        {icon}
      </span>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <span className="btn-spinner"></span>
          <span className="btn-text">Loading...</span>
        </>
      );
    }

    return (
      <>
        {icon && iconPosition === 'left' && renderIcon()}
        {children && <span className="btn-text">{children}</span>}
        {icon && iconPosition === 'right' && renderIcon()}
      </>
    );
  };

  return (
    <button
      type={type}
      className={getButtonClasses()}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
```

## Usage

```jsx
// Primary Button
<Button variant="primary">Primary Button</Button>

// Secondary Button
<Button variant="secondary">Secondary Button</Button>

// Button with Icon
<Button 
  variant="primary" 
  icon={<ArrowRightIcon />} 
  iconPosition="right"
>
  Next
</Button>

// Icon-only Button
<Button 
  variant="ghost" 
  icon={<SettingsIcon />} 
  aria-label="Settings" 
/>

// Loading Button
<Button isLoading={true}>Submit</Button>

// Full-width Button
<Button variant="primary" fullWidth={true}>
  Save Changes
</Button>
```

## Accessibility Considerations in Code

1. Always use the appropriate semantic element:
   - Use `<button>` for actions on the same page
   - Use `<a>` for navigation to a new page
   - Never use a `<div>` or `<span>` styled as a button

2. Include proper ARIA attributes when necessary:
   - Add `aria-label` for icon-only buttons
   - Use `aria-pressed` for toggle buttons
   - Set `aria-busy="true"` and `aria-live="polite"` for loading buttons

3. Ensure keyboard accessibility:
   - Buttons should be focusable and operable with the keyboard
   - Test keyboard functionality for custom button implementations

4. Make loading states perceivable:
   - Include both visual and textual indicators for loading states
   - Use `aria-live` regions to announce state changes

## Customization Options

The Button component can be customized with the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Button variant: 'primary', 'secondary', 'tertiary', 'danger', 'ghost' |
| size | string | 'medium' | Button size: 'small', 'medium', 'large', 'xlarge' |
| icon | node | null | Icon element to display within the button |
| iconPosition | string | 'left' | Position of the icon: 'left' or 'right' |
| fullWidth | boolean | false | Whether the button should take up the full width of its container |
| isLoading | boolean | false | Whether to show a loading spinner |
| disabled | boolean | false | Whether the button is disabled |