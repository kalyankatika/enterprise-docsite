---
layout: layouts/component.njk
title: Checkbox Code
description: Implementation guidelines for the Checkbox component
---

# Checkbox Implementation

## HTML Structure

```html
<!-- Basic Checkbox -->
<div class="checkbox-container">
  <input type="checkbox" id="checkbox1" name="checkbox1" class="eds-checkbox">
  <label for="checkbox1">Checkbox label</label>
</div>

<!-- Checkbox with Required State -->
<div class="checkbox-container">
  <input type="checkbox" id="checkbox2" name="checkbox2" class="eds-checkbox" required>
  <label for="checkbox2">Required checkbox <span class="required-indicator">*</span></label>
</div>

<!-- Disabled Checkbox -->
<div class="checkbox-container">
  <input type="checkbox" id="checkbox3" name="checkbox3" class="eds-checkbox" disabled>
  <label for="checkbox3" class="eds-label-disabled">Disabled checkbox</label>
</div>

<!-- Checkbox Group -->
<fieldset class="checkbox-group">
  <legend>Select preferred contact methods:</legend>
  <div class="checkbox-container">
    <input type="checkbox" id="contact-email" name="contact" value="email" class="eds-checkbox">
    <label for="contact-email">Email</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="contact-phone" name="contact" value="phone" class="eds-checkbox">
    <label for="contact-phone">Phone</label>
  </div>
  <div class="checkbox-container">
    <input type="checkbox" id="contact-mail" name="contact" value="mail" class="eds-checkbox">
    <label for="contact-mail">Mail</label>
  </div>
</fieldset>

<!-- Indeterminate Checkbox -->
<div class="checkbox-container">
  <input type="checkbox" id="select-all" name="select-all" class="eds-checkbox">
  <label for="select-all">Select all</label>
</div>
```

## CSS Implementation

```css
.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-3);
}

.eds-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid var(--color-neutral-60);
  border-radius: 2px;
  margin: 0;
  background-color: var(--color-white);
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.eds-checkbox:hover {
  background-color: var(--color-neutral-10);
  border-color: var(--color-neutral-70);
}

.eds-checkbox:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-color: var(--color-primary);
}

.eds-checkbox:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.eds-checkbox:checked::after {
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.eds-checkbox:disabled {
  background-color: var(--color-neutral-20);
  border-color: var(--color-neutral-30);
  cursor: not-allowed;
}

.eds-checkbox:disabled:checked {
  background-color: var(--color-neutral-30);
}

.eds-checkbox:disabled:checked::after {
  border-color: var(--color-neutral-50);
}

.eds-label-disabled {
  color: var(--color-neutral-60);
  cursor: not-allowed;
}

.checkbox-container label {
  margin-left: 8px;
  cursor: pointer;
}

.checkbox-container input:disabled + label {
  cursor: not-allowed;
}

.required-indicator {
  color: var(--color-error);
  margin-left: 2px;
}

.checkbox-group {
  border: none;
  padding: 0;
  margin: 0 0 var(--spacing-4) 0;
}

.checkbox-group legend {
  font-weight: 600;
  margin-bottom: var(--spacing-2);
}
```

## JavaScript for Indeterminate State

```javascript
// Set indeterminate state for "Select All" checkbox
const selectAllCheckbox = document.getElementById('select-all');
const checkboxes = document.querySelectorAll('input[name="contact"]');

// Initialize the "Select All" checkbox state
function updateSelectAllCheckbox() {
  const checkedCount = document.querySelectorAll('input[name="contact"]:checked').length;
  
  if (checkedCount === 0) {
    selectAllCheckbox.checked = false;
    selectAllCheckbox.indeterminate = false;
  } else if (checkedCount === checkboxes.length) {
    selectAllCheckbox.checked = true;
    selectAllCheckbox.indeterminate = false;
  } else {
    selectAllCheckbox.indeterminate = true;
  }
}

// Add event listeners
selectAllCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  
  checkboxes.forEach(checkbox => {
    checkbox.checked = isChecked;
  });
  
  updateSelectAllCheckbox();
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateSelectAllCheckbox);
});

// Initial state check
updateSelectAllCheckbox();
```

## React Implementation

```jsx
import React, { useState, useEffect } from 'react';
import './Checkbox.css';

// Single Checkbox Component
const Checkbox = ({ id, label, disabled, required, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input 
        type="checkbox" 
        id={id} 
        name={id} 
        className="eds-checkbox"
        disabled={disabled}
        required={required}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        {label}
        {required && <span className="required-indicator">*</span>}
      </label>
    </div>
  );
};

// Checkbox Group Component
const CheckboxGroup = ({ legend, options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAllState, setSelectAllState] = useState({
    checked: false,
    indeterminate: false
  });

  useEffect(() => {
    // Update select all state based on selected options
    if (selectedOptions.length === 0) {
      setSelectAllState({ checked: false, indeterminate: false });
    } else if (selectedOptions.length === options.length) {
      setSelectAllState({ checked: true, indeterminate: false });
    } else {
      setSelectAllState({ checked: false, indeterminate: true });
    }
  }, [selectedOptions, options.length]);

  useEffect(() => {
    // Update the indeterminate property using a ref (cannot be set via React props)
    const selectAllCheckbox = document.getElementById('select-all');
    if (selectAllCheckbox) {
      selectAllCheckbox.indeterminate = selectAllState.indeterminate;
    }
  }, [selectAllState]);

  const handleCheckboxChange = (value) => {
    setSelectedOptions(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedOptions(options.map(option => option.value));
    } else {
      setSelectedOptions([]);
    }
  };

  return (
    <>
      <div className="checkbox-container">
        <input 
          type="checkbox" 
          id="select-all" 
          className="eds-checkbox"
          checked={selectAllState.checked}
          onChange={handleSelectAllChange}
        />
        <label htmlFor="select-all">Select All</label>
      </div>
      
      <fieldset className="checkbox-group">
        <legend>{legend}</legend>
        {options.map((option) => (
          <Checkbox 
            key={option.id}
            id={option.id}
            label={option.label}
            disabled={option.disabled}
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
        ))}
      </fieldset>
    </>
  );
};

export { Checkbox, CheckboxGroup };
```

## Usage Examples

### Basic Checkbox

```jsx
<Checkbox
  id="terms"
  label="I accept the terms and conditions"
  onChange={(e) => console.log(e.target.checked)}
/>
```

### Required Checkbox

```jsx
<Checkbox
  id="privacy"
  label="I acknowledge the privacy policy"
  required={true}
  onChange={(e) => console.log(e.target.checked)}
/>
```

### Checkbox Group

```jsx
const contactOptions = [
  { id: 'contact-email', value: 'email', label: 'Email' },
  { id: 'contact-phone', value: 'phone', label: 'Phone' },
  { id: 'contact-mail', value: 'mail', label: 'Mail' }
];

<CheckboxGroup
  legend="Select preferred contact methods:"
  options={contactOptions}
  onChange={(selected) => console.log(selected)}
/>
```

## Accessibility Considerations

- Ensure all checkbox inputs have associated labels
- Use `fieldset` and `legend` for checkbox groups
- Maintain sufficient color contrast for all states
- Support keyboard navigation and focus states
- Include ARIA attributes when necessary
- For custom checkboxes, ensure they work with screen readers