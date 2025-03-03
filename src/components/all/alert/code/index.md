---
layout: layouts/component.njk
title: Alert Code
description: Implementation guidelines for the Alert component
---

# Alert Code Implementation

The Alert component is available in various frameworks and can be implemented using the code examples below.

## HTML Implementation

```html
<div class="alert alert-success" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="alert-content">
    <p class="alert-message">Your changes have been successfully saved.</p>
  </div>
  <button class="alert-close" aria-label="Close alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  </button>
</div>
```

## CSS

```css
.alert {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid;
  margin-bottom: 1rem;
}

.alert-success {
  background-color: var(--color-success-light);
  border-color: var(--color-success);
  color: var(--color-success-dark);
}

.alert-warning {
  background-color: var(--color-warning-light);
  border-color: var(--color-warning);
  color: var(--color-warning-dark);
}

.alert-error {
  background-color: var(--color-error-light);
  border-color: var(--color-error);
  color: var(--color-error-dark);
}

.alert-info {
  background-color: var(--color-info-light);
  border-color: var(--color-info);
  color: var(--color-info-dark);
}

.alert-icon {
  flex-shrink: 0;
  margin-right: 0.75rem;
  display: flex;
}

.alert-content {
  flex-grow: 1;
}

.alert-title {
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.25rem;
}

.alert-message {
  margin: 0;
}

.alert-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: currentColor;
  opacity: 0.7;
}

.alert-close:hover {
  opacity: 1;
}
```

## JavaScript

```javascript
// Close alert functionality
document.querySelectorAll('.alert-close').forEach(button => {
  button.addEventListener('click', () => {
    const alert = button.closest('.alert');
    
    // Add fade-out animation
    alert.style.opacity = '0';
    alert.style.transition = 'opacity 0.3s ease-out';
    
    // Remove alert after animation completes
    setTimeout(() => {
      alert.remove();
    }, 300);
  });
});
```

## React Implementation

```jsx
import React, { useState } from 'react';
import './Alert.css';

const icons = {
  success: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  ),
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  )
};

const Alert = ({ type = 'info', title, children, dismissible = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`alert alert-${type}`} role="alert">
      <div className="alert-icon">
        {icons[type]}
      </div>
      <div className="alert-content">
        {title && <h4 className="alert-title">{title}</h4>}
        <p className="alert-message">{children}</p>
      </div>
      {dismissible && (
        <button className="alert-close" onClick={() => setIsVisible(false)} aria-label="Close alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
```

## Usage

```jsx
<Alert type="success" title="Success!">
  Your changes have been successfully saved.
</Alert>

<Alert type="warning">
  Please review your information before continuing.
</Alert>

<Alert type="error" dismissible>
  An error occurred while submitting the form.
</Alert>

<Alert type="info" title="Note" dismissible>
  Your session will expire in 5 minutes.
</Alert>
```

## Customization Options

The Alert component can be customized with the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | string | 'info' | One of: 'success', 'warning', 'error', 'info' |
| title | string | null | Optional title text for the alert |
| children | node | - | Main content of the alert |
| dismissible | boolean | false | Whether the alert can be dismissed |
| onClose | function | - | Function to call when alert is dismissed |