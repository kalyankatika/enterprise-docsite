---
layout: layouts/component.njk
title: Checkbox Examples
description: Examples of different checkbox variants and use cases
---

# Checkbox Examples

## Basic Checkbox

The simplest form of checkbox with a label.

```html
<div class="checkbox-container">
  <input type="checkbox" id="basic-checkbox" class="eds-checkbox">
  <label for="basic-checkbox">I agree to receive updates</label>
</div>
```

<div class="example-preview">
  <div class="checkbox-container">
    <input type="checkbox" id="basic-checkbox" class="eds-checkbox">
    <label for="basic-checkbox">I agree to receive updates</label>
  </div>
</div>

## Required Checkbox

A checkbox that must be checked to proceed, often used for terms and conditions.

```html
<div class="checkbox-container">
  <input type="checkbox" id="required-checkbox" class="eds-checkbox" required>
  <label for="required-checkbox">I accept the terms and conditions <span class="required-indicator">*</span></label>
</div>
<div class="form-help-text">This field is required</div>
```

<div class="example-preview">
  <div class="checkbox-container">
    <input type="checkbox" id="required-checkbox" class="eds-checkbox" required>
    <label for="required-checkbox">I accept the terms and conditions <span class="required-indicator">*</span></label>
  </div>
  <div class="form-help-text">This field is required</div>
</div>

## Checked by Default

A checkbox that starts in the checked state.

```html
<div class="checkbox-container">
  <input type="checkbox" id="checked-checkbox" class="eds-checkbox" checked>
  <label for="checked-checkbox">Subscribe to newsletter</label>
</div>
```

<div class="example-preview">
  <div class="checkbox-container">
    <input type="checkbox" id="checked-checkbox" class="eds-checkbox" checked>
    <label for="checked-checkbox">Subscribe to newsletter</label>
  </div>
</div>

## Disabled Checkboxes

Checkboxes that cannot be interacted with.

```html
<div class="checkbox-container">
  <input type="checkbox" id="disabled-checkbox" class="eds-checkbox" disabled>
  <label for="disabled-checkbox" class="eds-label-disabled">Option currently unavailable</label>
</div>

<div class="checkbox-container">
  <input type="checkbox" id="disabled-checked-checkbox" class="eds-checkbox" disabled checked>
  <label for="disabled-checked-checkbox" class="eds-label-disabled">Default feature (cannot be disabled)</label>
</div>
```

<div class="example-preview">
  <div class="checkbox-container">
    <input type="checkbox" id="disabled-checkbox" class="eds-checkbox" disabled>
    <label for="disabled-checkbox" class="eds-label-disabled">Option currently unavailable</label>
  </div>
  
  <div class="checkbox-container">
    <input type="checkbox" id="disabled-checked-checkbox" class="eds-checkbox" disabled checked>
    <label for="disabled-checked-checkbox" class="eds-label-disabled">Default feature (cannot be disabled)</label>
  </div>
</div>

## Checkbox Group

A group of related checkboxes.

```html
<fieldset class="checkbox-group">
  <legend>Which features would you like to enable?</legend>
  
  <div class="checkbox-container">
    <input type="checkbox" id="feature-1" name="features" value="auto-save" class="eds-checkbox">
    <label for="feature-1">Auto-save documents</label>
  </div>
  
  <div class="checkbox-container">
    <input type="checkbox" id="feature-2" name="features" value="dark-mode" class="eds-checkbox">
    <label for="feature-2">Dark mode</label>
  </div>
  
  <div class="checkbox-container">
    <input type="checkbox" id="feature-3" name="features" value="notifications" class="eds-checkbox">
    <label for="feature-3">Desktop notifications</label>
  </div>
</fieldset>
```

<div class="example-preview">
  <fieldset class="checkbox-group">
    <legend>Which features would you like to enable?</legend>
    
    <div class="checkbox-container">
      <input type="checkbox" id="feature-1" name="features" value="auto-save" class="eds-checkbox">
      <label for="feature-1">Auto-save documents</label>
    </div>
    
    <div class="checkbox-container">
      <input type="checkbox" id="feature-2" name="features" value="dark-mode" class="eds-checkbox">
      <label for="feature-2">Dark mode</label>
    </div>
    
    <div class="checkbox-container">
      <input type="checkbox" id="feature-3" name="features" value="notifications" class="eds-checkbox">
      <label for="feature-3">Desktop notifications</label>
    </div>
  </fieldset>
</div>

## Indeterminate Checkbox

A checkbox that represents a partial selection of child checkboxes.

```html
<div class="checkbox-container">
  <input type="checkbox" id="select-all" class="eds-checkbox">
  <label for="select-all">Select all options</label>
</div>

<fieldset class="checkbox-group">
  <div class="checkbox-container" style="margin-left: 24px;">
    <input type="checkbox" id="option-1" class="eds-checkbox" name="option">
    <label for="option-1">Option 1</label>
  </div>
  
  <div class="checkbox-container" style="margin-left: 24px;">
    <input type="checkbox" id="option-2" class="eds-checkbox" name="option">
    <label for="option-2">Option 2</label>
  </div>
  
  <div class="checkbox-container" style="margin-left: 24px;">
    <input type="checkbox" id="option-3" class="eds-checkbox" name="option">
    <label for="option-3">Option 3</label>
  </div>
</fieldset>

<script>
  // This script sets up the indeterminate state
  const selectAllCheckbox = document.getElementById('select-all');
  const checkboxes = document.querySelectorAll('input[name="option"]');
  
  selectAllCheckbox.addEventListener('change', function() {
    const isChecked = this.checked;
    checkboxes.forEach(checkbox => checkbox.checked = isChecked);
  });
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checkedCount = document.querySelectorAll('input[name="option"]:checked').length;
      
      if (checkedCount === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
      } else if (checkedCount === checkboxes.length) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
      } else {
        selectAllCheckbox.indeterminate = true;
      }
    });
  });
  
  // Set initial state - make "Select All" indeterminate for demonstration
  selectAllCheckbox.indeterminate = true;
</script>
```

<div class="example-preview">
  <div class="checkbox-container">
    <input type="checkbox" id="select-all" class="eds-checkbox">
    <label for="select-all">Select all options</label>
  </div>
  
  <fieldset class="checkbox-group">
    <div class="checkbox-container" style="margin-left: 24px;">
      <input type="checkbox" id="option-1" class="eds-checkbox" name="option">
      <label for="option-1">Option 1</label>
    </div>
    
    <div class="checkbox-container" style="margin-left: 24px;">
      <input type="checkbox" id="option-2" class="eds-checkbox" name="option" checked>
      <label for="option-2">Option 2</label>
    </div>
    
    <div class="checkbox-container" style="margin-left: 24px;">
      <input type="checkbox" id="option-3" class="eds-checkbox" name="option">
      <label for="option-3">Option 3</label>
    </div>
  </fieldset>
  
  <script>
    // Initialize indeterminate state for the demo
    document.addEventListener('DOMContentLoaded', function() {
      const selectAllCheckbox = document.getElementById('select-all');
      if (selectAllCheckbox) {
        selectAllCheckbox.indeterminate = true;
      }
    });
  </script>
</div>

## Validation States

Checkboxes with validation states.

```html
<!-- Error state -->
<div class="checkbox-container checkbox-error">
  <input type="checkbox" id="error-checkbox" class="eds-checkbox eds-checkbox-error">
  <label for="error-checkbox">I accept the terms</label>
</div>
<div class="form-error-text">You must accept the terms to continue</div>

<!-- Success state -->
<div class="checkbox-container checkbox-success">
  <input type="checkbox" id="success-checkbox" class="eds-checkbox eds-checkbox-success" checked>
  <label for="success-checkbox">Email verification complete</label>
</div>
<div class="form-success-text">Verified successfully</div>
```

<div class="example-preview">
  <!-- Error state -->
  <div class="checkbox-container checkbox-error">
    <input type="checkbox" id="error-checkbox" class="eds-checkbox eds-checkbox-error">
    <label for="error-checkbox">I accept the terms</label>
  </div>
  <div class="form-error-text">You must accept the terms to continue</div>
  
  <!-- Success state -->
  <div class="checkbox-container checkbox-success">
    <input type="checkbox" id="success-checkbox" class="eds-checkbox eds-checkbox-success" checked>
    <label for="success-checkbox">Email verification complete</label>
  </div>
  <div class="form-success-text">Verified successfully</div>
</div>

## With Additional Help Text

Checkbox with additional explanation for the user.

```html
<div class="checkbox-container">
  <input type="checkbox" id="help-checkbox" class="eds-checkbox" aria-describedby="help-text">
  <label for="help-checkbox">Enable data sharing</label>
</div>
<div id="help-text" class="form-help-text">
  Enabling this option allows us to share anonymous usage statistics 
  to improve the product. No personal information will be shared.
</div>
```

<div class="example-preview">
  <div class="checkbox-container">
    <input type="checkbox" id="help-checkbox" class="eds-checkbox" aria-describedby="help-text">
    <label for="help-checkbox">Enable data sharing</label>
  </div>
  <div id="help-text" class="form-help-text">
    Enabling this option allows us to share anonymous usage statistics 
    to improve the product. No personal information will be shared.
  </div>
</div>

## Alignment Variations

Different ways to align checkboxes within layouts.

```html
<div class="checkbox-align-example">
  <h4>Vertical alignment (default)</h4>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div class="checkbox-container">
      <input type="checkbox" id="align-1" class="eds-checkbox">
      <label for="align-1">Option 1</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="align-2" class="eds-checkbox">
      <label for="align-2">Option 2</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="align-3" class="eds-checkbox">
      <label for="align-3">Option 3</label>
    </div>
  </div>
  
  <h4>Horizontal alignment</h4>
  <div style="display: flex; gap: 24px;">
    <div class="checkbox-container">
      <input type="checkbox" id="align-4" class="eds-checkbox">
      <label for="align-4">Option A</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="align-5" class="eds-checkbox">
      <label for="align-5">Option B</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="align-6" class="eds-checkbox">
      <label for="align-6">Option C</label>
    </div>
  </div>
  
  <h4>Grid alignment</h4>
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
    <div class="checkbox-container">
      <input type="checkbox" id="align-7" class="eds-checkbox">
      <label for="align-7">Grid item 1</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="align-8" class="eds-checkbox">
      <label for="align-8">Grid item 2</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="align-9" class="eds-checkbox">
      <label for="align-9">Grid item 3</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" id="align-10" class="eds-checkbox">
      <label for="align-10">Grid item 4</label>
    </div>
  </div>
</div>
```

<div class="example-preview">
  <div class="checkbox-align-example">
    <h4>Vertical alignment (default)</h4>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div class="checkbox-container">
        <input type="checkbox" id="align-1" class="eds-checkbox">
        <label for="align-1">Option 1</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="align-2" class="eds-checkbox">
        <label for="align-2">Option 2</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="align-3" class="eds-checkbox">
        <label for="align-3">Option 3</label>
      </div>
    </div>
    
    <h4>Horizontal alignment</h4>
    <div style="display: flex; gap: 24px;">
      <div class="checkbox-container">
        <input type="checkbox" id="align-4" class="eds-checkbox">
        <label for="align-4">Option A</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="align-5" class="eds-checkbox">
        <label for="align-5">Option B</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="align-6" class="eds-checkbox">
        <label for="align-6">Option C</label>
      </div>
    </div>
    
    <h4>Grid alignment</h4>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
      <div class="checkbox-container">
        <input type="checkbox" id="align-7" class="eds-checkbox">
        <label for="align-7">Grid item 1</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="align-8" class="eds-checkbox">
        <label for="align-8">Grid item 2</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="align-9" class="eds-checkbox">
        <label for="align-9">Grid item 3</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="align-10" class="eds-checkbox">
        <label for="align-10">Grid item 4</label>
      </div>
    </div>
  </div>
</div>

## Real-World Use Case: Privacy Settings Form

A more complex example showing how checkboxes can be used in a real application.

```html
<form class="privacy-settings-form">
  <h3>Privacy Settings</h3>
  <p class="form-description">Manage how your information is used across our services.</p>
  
  <fieldset class="checkbox-group">
    <legend>Communication Preferences</legend>
    
    <div class="checkbox-container">
      <input type="checkbox" id="privacy-all" class="eds-checkbox">
      <label for="privacy-all"><strong>Manage all communication preferences</strong></label>
    </div>
    
    <div style="margin-left: 24px;">
      <div class="checkbox-container">
        <input type="checkbox" id="privacy-updates" name="communication" value="updates" class="eds-checkbox" checked>
        <label for="privacy-updates">Product updates and announcements</label>
      </div>
      
      <div class="checkbox-container">
        <input type="checkbox" id="privacy-marketing" name="communication" value="marketing" class="eds-checkbox">
        <label for="privacy-marketing">Marketing and promotional emails</label>
      </div>
      
      <div class="checkbox-container">
        <input type="checkbox" id="privacy-research" name="communication" value="research" class="eds-checkbox" checked>
        <label for="privacy-research">Research and feedback requests</label>
      </div>
      
      <div class="checkbox-container">
        <input type="checkbox" id="privacy-partners" name="communication" value="partners" class="eds-checkbox">
        <label for="privacy-partners">Partner offers and recommendations</label>
      </div>
    </div>
  </fieldset>
  
  <fieldset class="checkbox-group">
    <legend>Data Usage</legend>
    
    <div class="checkbox-container">
      <input type="checkbox" id="data-personalization" class="eds-checkbox" checked>
      <label for="data-personalization">Personalize my experience based on my usage</label>
    </div>
    
    <div class="checkbox-container">
      <input type="checkbox" id="data-analytics" class="eds-checkbox" checked required>
      <label for="data-analytics">Allow essential analytics <span class="required-indicator">*</span></label>
    </div>
    <div class="form-help-text">Required for service functionality</div>
    
    <div class="checkbox-container">
      <input type="checkbox" id="data-thirdparty" class="eds-checkbox">
      <label for="data-thirdparty">Share anonymous data with trusted third parties</label>
    </div>
  </fieldset>
  
  <div class="form-actions">
    <button type="submit" class="primary-button">Save Preferences</button>
    <button type="reset" class="secondary-button">Reset to Default</button>
  </div>
</form>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const privacyAllCheckbox = document.getElementById('privacy-all');
    const communicationCheckboxes = document.querySelectorAll('input[name="communication"]');
    
    // Set up indeterminate state
    function updatePrivacyAllCheckbox() {
      const checkedCount = document.querySelectorAll('input[name="communication"]:checked').length;
      
      if (checkedCount === 0) {
        privacyAllCheckbox.checked = false;
        privacyAllCheckbox.indeterminate = false;
      } else if (checkedCount === communicationCheckboxes.length) {
        privacyAllCheckbox.checked = true;
        privacyAllCheckbox.indeterminate = false;
      } else {
        privacyAllCheckbox.indeterminate = true;
      }
    }
    
    // Add event listeners
    privacyAllCheckbox.addEventListener('change', function() {
      const isChecked = this.checked;
      
      communicationCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
      });
    });
    
    communicationCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updatePrivacyAllCheckbox);
    });
    
    // Initial state
    updatePrivacyAllCheckbox();
  });
</script>
```

<div class="example-preview">
  <form class="privacy-settings-form">
    <h3>Privacy Settings</h3>
    <p class="form-description">Manage how your information is used across our services.</p>
    
    <fieldset class="checkbox-group">
      <legend>Communication Preferences</legend>
      
      <div class="checkbox-container">
        <input type="checkbox" id="privacy-all" class="eds-checkbox">
        <label for="privacy-all"><strong>Manage all communication preferences</strong></label>
      </div>
      
      <div style="margin-left: 24px;">
        <div class="checkbox-container">
          <input type="checkbox" id="privacy-updates" name="communication" value="updates" class="eds-checkbox" checked>
          <label for="privacy-updates">Product updates and announcements</label>
        </div>
        
        <div class="checkbox-container">
          <input type="checkbox" id="privacy-marketing" name="communication" value="marketing" class="eds-checkbox">
          <label for="privacy-marketing">Marketing and promotional emails</label>
        </div>
        
        <div class="checkbox-container">
          <input type="checkbox" id="privacy-research" name="communication" value="research" class="eds-checkbox" checked>
          <label for="privacy-research">Research and feedback requests</label>
        </div>
        
        <div class="checkbox-container">
          <input type="checkbox" id="privacy-partners" name="communication" value="partners" class="eds-checkbox">
          <label for="privacy-partners">Partner offers and recommendations</label>
        </div>
      </div>
    </fieldset>
    
    <fieldset class="checkbox-group">
      <legend>Data Usage</legend>
      
      <div class="checkbox-container">
        <input type="checkbox" id="data-personalization" class="eds-checkbox" checked>
        <label for="data-personalization">Personalize my experience based on my usage</label>
      </div>
      
      <div class="checkbox-container">
        <input type="checkbox" id="data-analytics" class="eds-checkbox" checked required>
        <label for="data-analytics">Allow essential analytics <span class="required-indicator">*</span></label>
      </div>
      <div class="form-help-text">Required for service functionality</div>
      
      <div class="checkbox-container">
        <input type="checkbox" id="data-thirdparty" class="eds-checkbox">
        <label for="data-thirdparty">Share anonymous data with trusted third parties</label>
      </div>
    </fieldset>
    
    <div class="form-actions">
      <button type="submit" class="primary-button">Save Preferences</button>
      <button type="reset" class="secondary-button">Reset to Default</button>
    </div>
  </form>
</div>

## Additional Styling

Custom CSS to enhance the appearance of examples on this page:

```css
.form-error-text {
  color: var(--color-error);
  font-size: 0.875rem;
  margin-top: 4px;
}

.form-success-text {
  color: var(--color-success);
  font-size: 0.875rem;
  margin-top: 4px;
}

.form-help-text {
  color: var(--color-neutral-70);
  font-size: 0.875rem;
  margin-top: 4px;
}

.eds-checkbox-error {
  border-color: var(--color-error) !important;
}

.eds-checkbox-success {
  border-color: var(--color-success) !important;
}

.checkbox-error label {
  color: var(--color-error);
}

.checkbox-success label {
  color: var(--color-success);
}

.example-preview {
  background-color: var(--color-neutral-5);
  border: 1px solid var(--color-neutral-20);
  border-radius: 4px;
  padding: 20px;
  margin: 16px 0;
}

.privacy-settings-form {
  max-width: 600px;
}

.form-description {
  color: var(--color-neutral-70);
  margin-bottom: 20px;
}

.form-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
}

.primary-button, .secondary-button {
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.primary-button {
  background-color: var(--color-primary);
  color: white;
  border: none;
}

.secondary-button {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.checkbox-align-example h4 {
  margin-top: 24px;
  margin-bottom: 12px;
}
```