---
layout: layouts/component.njk
title: Checkbox Group Code
description: Implementation guidelines for the Checkbox Group component
---

# Checkbox Group Implementation

## HTML Structure

```html
<!-- Basic Checkbox Group -->
<fieldset class="eds-checkbox-group">
  <legend class="eds-checkbox-group__label">Group Label</legend>
  <div class="eds-checkbox-group__helper">Optional helper text</div>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="checkbox1" name="checkboxGroup" value="option1" class="eds-checkbox">
      <label for="checkbox1" class="eds-checkbox__label">Option 1</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="checkbox2" name="checkboxGroup" value="option2" class="eds-checkbox">
      <label for="checkbox2" class="eds-checkbox__label">Option 2</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="checkbox3" name="checkboxGroup" value="option3" class="eds-checkbox">
      <label for="checkbox3" class="eds-checkbox__label">Option 3</label>
    </div>
  </div>
</fieldset>
```

## CSS Implementation

```css
.eds-checkbox-group {
  display: block;
  margin: var(--spacing-4) 0;
  border: none;
  padding: 0;
}

.eds-checkbox-group__label {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-2);
}

.eds-checkbox-group__helper {
  display: block;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--color-neutral-70);
  margin-bottom: var(--spacing-2);
}

.eds-checkbox-group__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.eds-checkbox-group--horizontal .eds-checkbox-group__items {
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-4);
}

.eds-checkbox-group__item {
  display: flex;
  align-items: center;
}

.eds-checkbox {
  margin-right: var(--spacing-2);
}

.eds-checkbox-group--error .eds-checkbox-group__label {
  color: var(--color-error);
}
```

## JavaScript

```javascript
// Checkbox Group with "Select All" functionality
function initializeCheckboxGroup(groupId) {
  const container = document.getElementById(groupId);
  const selectAllCheckbox = container.querySelector('.eds-checkbox-group__select-all');
  const checkboxes = container.querySelectorAll('.eds-checkbox-group__item .eds-checkbox');
  
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', function() {
      const isChecked = this.checked;
      checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
      });
    });
    
    // Update select all checkbox when individual checkboxes change
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        const someChecked = Array.from(checkboxes).some(cb => cb.checked);
        
        selectAllCheckbox.checked = allChecked;
        selectAllCheckbox.indeterminate = someChecked && !allChecked;
      });
    });
  }
}
```

## React Implementation

```jsx
import React, { useState } from 'react';
import './checkbox-group.css';

const CheckboxGroup = ({ 
  label, 
  helperText, 
  options, 
  name, 
  onChange, 
  horizontal = false,
  error = false,
  ...props 
}) => {
  const [selectedValues, setSelectedValues] = useState([]);
  
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    
    const newValues = isChecked 
      ? [...selectedValues, value]
      : selectedValues.filter(val => val !== value);
    
    setSelectedValues(newValues);
    
    if (onChange) {
      onChange(newValues);
    }
  };
  
  const groupClasses = [
    'eds-checkbox-group',
    horizontal ? 'eds-checkbox-group--horizontal' : '',
    error ? 'eds-checkbox-group--error' : '',
  ].filter(Boolean).join(' ');
  
  return (
    <fieldset className={groupClasses} {...props}>
      {label && <legend className="eds-checkbox-group__label">{label}</legend>}
      {helperText && <div className="eds-checkbox-group__helper">{helperText}</div>}
      <div className="eds-checkbox-group__items">
        {options.map((option, index) => (
          <div key={index} className="eds-checkbox-group__item">
            <input
              type="checkbox"
              id={`${name}-${index}`}
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={handleChange}
              className="eds-checkbox"
              disabled={option.disabled}
            />
            <label htmlFor={`${name}-${index}`} className="eds-checkbox__label">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckboxGroup;
```

## Usage Examples

### Basic Usage

```jsx
<CheckboxGroup
  label="Notification Preferences"
  helperText="Select all that apply"
  name="notifications"
  options={[
    { label: "Email", value: "email" },
    { label: "SMS", value: "sms" },
    { label: "Push Notifications", value: "push" }
  ]}
  onChange={(values) => console.log('Selected:', values)}
/>
```

### Horizontal Layout

```jsx
<CheckboxGroup
  label="Available Days"
  name="days"
  options={[
    { label: "Mon", value: "monday" },
    { label: "Tue", value: "tuesday" },
    { label: "Wed", value: "wednesday" },
    { label: "Thu", value: "thursday" },
    { label: "Fri", value: "friday" }
  ]}
  horizontal={true}
/>
```

## Accessibility Considerations

- Use `<fieldset>` and `<legend>` to properly group related checkboxes
- Ensure proper label association with each checkbox using matching `for` and `id` attributes
- Maintain adequate spacing for touch targets (at least 44x44 pixels)
- Support keyboard navigation and focus management