---
layout: layouts/component.njk
title: Checkbox Group Examples
description: Examples of different checkbox group variants and use cases
---

# Checkbox Group Examples

## Basic Example

Basic usage of the checkbox group component with vertical alignment (default).

```html
<fieldset class="eds-checkbox-group">
  <legend class="eds-checkbox-group__label">Select Features</legend>
  <div class="eds-checkbox-group__helper">Choose all that apply</div>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="feature1" name="features" value="feature1" class="eds-checkbox">
      <label for="feature1" class="eds-checkbox__label">Automated Reports</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="feature2" name="features" value="feature2" class="eds-checkbox">
      <label for="feature2" class="eds-checkbox__label">Data Analytics</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="feature3" name="features" value="feature3" class="eds-checkbox">
      <label for="feature3" class="eds-checkbox__label">Custom Dashboards</label>
    </div>
  </div>
</fieldset>
```

<div class="example-preview">
  <fieldset class="eds-checkbox-group">
    <legend class="eds-checkbox-group__label">Select Features</legend>
    <div class="eds-checkbox-group__helper">Choose all that apply</div>
    <div class="eds-checkbox-group__items">
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="feature1" name="features" value="feature1" class="eds-checkbox">
        <label for="feature1" class="eds-checkbox__label">Automated Reports</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="feature2" name="features" value="feature2" class="eds-checkbox">
        <label for="feature2" class="eds-checkbox__label">Data Analytics</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="feature3" name="features" value="feature3" class="eds-checkbox">
        <label for="feature3" class="eds-checkbox__label">Custom Dashboards</label>
      </div>
    </div>
  </fieldset>
</div>

## Horizontal Layout

Checkboxes arranged horizontally, suitable for limited options with short labels.

```html
<fieldset class="eds-checkbox-group eds-checkbox-group--horizontal">
  <legend class="eds-checkbox-group__label">Select Days</legend>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="day1" name="days" value="mon" class="eds-checkbox">
      <label for="day1" class="eds-checkbox__label">Mon</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="day2" name="days" value="tue" class="eds-checkbox">
      <label for="day2" class="eds-checkbox__label">Tue</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="day3" name="days" value="wed" class="eds-checkbox">
      <label for="day3" class="eds-checkbox__label">Wed</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="day4" name="days" value="thu" class="eds-checkbox">
      <label for="day4" class="eds-checkbox__label">Thu</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="day5" name="days" value="fri" class="eds-checkbox">
      <label for="day5" class="eds-checkbox__label">Fri</label>
    </div>
  </div>
</fieldset>
```

<div class="example-preview">
  <fieldset class="eds-checkbox-group eds-checkbox-group--horizontal">
    <legend class="eds-checkbox-group__label">Select Days</legend>
    <div class="eds-checkbox-group__items">
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="day1" name="days" value="mon" class="eds-checkbox">
        <label for="day1" class="eds-checkbox__label">Mon</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="day2" name="days" value="tue" class="eds-checkbox">
        <label for="day2" class="eds-checkbox__label">Tue</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="day3" name="days" value="wed" class="eds-checkbox">
        <label for="day3" class="eds-checkbox__label">Wed</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="day4" name="days" value="thu" class="eds-checkbox">
        <label for="day4" class="eds-checkbox__label">Thu</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="day5" name="days" value="fri" class="eds-checkbox">
        <label for="day5" class="eds-checkbox__label">Fri</label>
      </div>
    </div>
  </fieldset>
</div>

## With "Select All" Option

Adds a "Select All" checkbox that toggles all options.

```html
<fieldset class="eds-checkbox-group" id="topics-group">
  <legend class="eds-checkbox-group__label">Topic Subscriptions</legend>
  <div class="eds-checkbox-group__select-all-container">
    <input type="checkbox" id="select-all-topics" class="eds-checkbox eds-checkbox-group__select-all">
    <label for="select-all-topics" class="eds-checkbox__label">Select All</label>
  </div>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="topic1" name="topics" value="news" class="eds-checkbox">
      <label for="topic1" class="eds-checkbox__label">News Updates</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="topic2" name="topics" value="product" class="eds-checkbox">
      <label for="topic2" class="eds-checkbox__label">Product Announcements</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="topic3" name="topics" value="events" class="eds-checkbox">
      <label for="topic3" class="eds-checkbox__label">Upcoming Events</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="topic4" name="topics" value="tips" class="eds-checkbox">
      <label for="topic4" class="eds-checkbox__label">Tips & Tutorials</label>
    </div>
  </div>
</fieldset>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    initializeCheckboxGroup('topics-group');
  });
  
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
</script>
```

<div class="example-preview">
  <fieldset class="eds-checkbox-group" id="topics-group">
    <legend class="eds-checkbox-group__label">Topic Subscriptions</legend>
    <div class="eds-checkbox-group__select-all-container">
      <input type="checkbox" id="select-all-topics" class="eds-checkbox eds-checkbox-group__select-all">
      <label for="select-all-topics" class="eds-checkbox__label">Select All</label>
    </div>
    <div class="eds-checkbox-group__items">
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="topic1" name="topics" value="news" class="eds-checkbox">
        <label for="topic1" class="eds-checkbox__label">News Updates</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="topic2" name="topics" value="product" class="eds-checkbox">
        <label for="topic2" class="eds-checkbox__label">Product Announcements</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="topic3" name="topics" value="events" class="eds-checkbox">
        <label for="topic3" class="eds-checkbox__label">Upcoming Events</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="topic4" name="topics" value="tips" class="eds-checkbox">
        <label for="topic4" class="eds-checkbox__label">Tips & Tutorials</label>
      </div>
    </div>
  </fieldset>
</div>

## Error State

Example of a checkbox group with validation error.

```html
<fieldset class="eds-checkbox-group eds-checkbox-group--error" aria-describedby="terms-error">
  <legend class="eds-checkbox-group__label">Terms and Conditions</legend>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="terms" name="terms" value="accepted" class="eds-checkbox" required>
      <label for="terms" class="eds-checkbox__label">I agree to the Terms of Service and Privacy Policy</label>
    </div>
  </div>
  <div id="terms-error" class="eds-checkbox-group__error" role="alert">
    You must accept the terms and conditions to continue
  </div>
</fieldset>
```

<div class="example-preview">
  <fieldset class="eds-checkbox-group eds-checkbox-group--error" aria-describedby="terms-error">
    <legend class="eds-checkbox-group__label">Terms and Conditions</legend>
    <div class="eds-checkbox-group__items">
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="terms" name="terms" value="accepted" class="eds-checkbox" required>
        <label for="terms" class="eds-checkbox__label">I agree to the Terms of Service and Privacy Policy</label>
      </div>
    </div>
    <div id="terms-error" class="eds-checkbox-group__error" role="alert">
      You must accept the terms and conditions to continue
    </div>
  </fieldset>
</div>

## Disabled State

Example of a checkbox group with disabled options.

```html
<fieldset class="eds-checkbox-group">
  <legend class="eds-checkbox-group__label">Plan Options</legend>
  <div class="eds-checkbox-group__helper">Some options may not be available</div>
  <div class="eds-checkbox-group__items">
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="plan1" name="plans" value="basic" class="eds-checkbox">
      <label for="plan1" class="eds-checkbox__label">Basic Plan</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="plan2" name="plans" value="pro" class="eds-checkbox">
      <label for="plan2" class="eds-checkbox__label">Professional Plan</label>
    </div>
    <div class="eds-checkbox-group__item">
      <input type="checkbox" id="plan3" name="plans" value="enterprise" class="eds-checkbox" disabled>
      <label for="plan3" class="eds-checkbox__label eds-checkbox__label--disabled">Enterprise Plan (Currently Unavailable)</label>
    </div>
  </div>
</fieldset>
```

<div class="example-preview">
  <fieldset class="eds-checkbox-group">
    <legend class="eds-checkbox-group__label">Plan Options</legend>
    <div class="eds-checkbox-group__helper">Some options may not be available</div>
    <div class="eds-checkbox-group__items">
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="plan1" name="plans" value="basic" class="eds-checkbox">
        <label for="plan1" class="eds-checkbox__label">Basic Plan</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="plan2" name="plans" value="pro" class="eds-checkbox">
        <label for="plan2" class="eds-checkbox__label">Professional Plan</label>
      </div>
      <div class="eds-checkbox-group__item">
        <input type="checkbox" id="plan3" name="plans" value="enterprise" class="eds-checkbox" disabled>
        <label for="plan3" class="eds-checkbox__label eds-checkbox__label--disabled">Enterprise Plan (Currently Unavailable)</label>
      </div>
    </div>
  </fieldset>
</div>