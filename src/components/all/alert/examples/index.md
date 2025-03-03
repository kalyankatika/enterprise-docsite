---
layout: layouts/component.njk
title: Alert Examples
description: Examples of the Alert component in various contexts
---

# Alert Examples

Below are various examples of the Alert component in different contexts and configurations.

## Basic Alert Types

### Success Alert

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
</div>
```

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #10b981; background-color: #d1fae5; color: #065f46; margin-bottom: 1rem;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <p style="margin: 0;">Your changes have been successfully saved.</p>
    </div>
  </div>
</div>

### Warning Alert

```html
<div class="alert alert-warning" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="alert-content">
    <p class="alert-message">Please review your information before continuing.</p>
  </div>
</div>
```

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #f59e0b; background-color: #fef3c7; color: #b45309; margin-bottom: 1rem;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <p style="margin: 0;">Please review your information before continuing.</p>
    </div>
  </div>
</div>

### Error Alert

```html
<div class="alert alert-error" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="alert-content">
    <p class="alert-message">An error occurred while submitting the form.</p>
  </div>
</div>
```

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #ef4444; background-color: #fee2e2; color: #b91c1c; margin-bottom: 1rem;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <p style="margin: 0;">An error occurred while submitting the form.</p>
    </div>
  </div>
</div>

### Info Alert

```html
<div class="alert alert-info" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="alert-content">
    <p class="alert-message">Your session will expire in 5 minutes.</p>
  </div>
</div>
```

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #3b82f6; background-color: #dbeafe; color: #1e40af; margin-bottom: 1rem;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <p style="margin: 0;">Your session will expire in 5 minutes.</p>
    </div>
  </div>
</div>

## Alert with Title

```html
<div class="alert alert-info" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="alert-content">
    <h4 class="alert-title">Information</h4>
    <p class="alert-message">Your session will expire in 5 minutes. Please save your work.</p>
  </div>
</div>
```

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #3b82f6; background-color: #dbeafe; color: #1e40af; margin-bottom: 1rem;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <h4 style="font-weight: 600; margin-top: 0; margin-bottom: 0.25rem;">Information</h4>
      <p style="margin: 0;">Your session will expire in 5 minutes. Please save your work.</p>
    </div>
  </div>
</div>

## Dismissible Alert

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

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #10b981; background-color: #d1fae5; color: #065f46; margin-bottom: 1rem;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <p style="margin: 0;">Your changes have been successfully saved.</p>
    </div>
    <button style="background: none; border: none; cursor: pointer; padding: 0.25rem; color: currentColor; opacity: 0.7;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
</div>

## Alert with Actions

```html
<div class="alert alert-warning" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="alert-content">
    <h4 class="alert-title">Unsaved Changes</h4>
    <p class="alert-message">You have unsaved changes that will be lost if you navigate away from this page.</p>
    <div class="alert-actions">
      <button class="btn btn-warning">Save Changes</button>
      <button class="btn btn-outline">Discard</button>
    </div>
  </div>
</div>
```

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #f59e0b; background-color: #fef3c7; color: #b45309; margin-bottom: 1rem;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <h4 style="font-weight: 600; margin-top: 0; margin-bottom: 0.25rem;">Unsaved Changes</h4>
      <p style="margin-top: 0; margin-bottom: 0.75rem;">You have unsaved changes that will be lost if you navigate away from this page.</p>
      <div style="display: flex; gap: 0.5rem;">
        <button style="background-color: #f59e0b; color: white; border: none; padding: 0.5rem 0.75rem; border-radius: 0.25rem; font-weight: 500; cursor: pointer;">Save Changes</button>
        <button style="background-color: transparent; color: #b45309; border: 1px solid #f59e0b; padding: 0.5rem 0.75rem; border-radius: 0.25rem; font-weight: 500; cursor: pointer;">Discard</button>
      </div>
    </div>
  </div>
</div>

## Form Validation Alert

```html
<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="is-invalid" />
    <div class="alert alert-error" role="alert">
      <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </div>
      <div class="alert-content">
        <p class="alert-message">Please enter a valid email address.</p>
      </div>
    </div>
  </div>
  <button type="submit">Submit</button>
</form>
```

<div class="component-example">
  <form style="margin-bottom: 1rem;">
    <div style="margin-bottom: 1rem;">
      <label for="email" style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Email</label>
      <input type="email" id="email" style="display: block; width: 100%; padding: 0.5rem; border: 1px solid #ef4444; border-radius: 0.25rem; margin-bottom: 0.5rem;" value="invalid-email" />
      <div style="display: flex; align-items: flex-start; padding: 0.5rem; border-radius: 0.25rem; background-color: #fee2e2; color: #b91c1c;">
        <div style="flex-shrink: 0; margin-right: 0.5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </div>
        <div style="flex-grow: 1;">
          <p style="margin: 0; font-size: 0.875rem;">Please enter a valid email address.</p>
        </div>
      </div>
    </div>
    <button type="submit" style="background-color: #3b82f6; color: white; border: none; padding: 0.5rem 0.75rem; border-radius: 0.25rem; font-weight: 500; cursor: pointer;">Submit</button>
  </form>
</div>

## System Status Alert

```html
<div class="alert alert-warning alert-system" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  </div>
  <div class="alert-content">
    <h4 class="alert-title">System Maintenance</h4>
    <p class="alert-message">The system will be undergoing maintenance on March 15th from 2:00 AM to 4:00 AM EST. Please save your work before this time.</p>
  </div>
</div>
```

<div class="component-example">
  <div style="display: flex; align-items: flex-start; padding: 1rem; border-radius: 0.25rem; border: 1px solid #f59e0b; background-color: #fef3c7; color: #b45309; margin-bottom: 1rem; border-left: 4px solid #f59e0b;">
    <div style="flex-shrink: 0; margin-right: 0.75rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div style="flex-grow: 1;">
      <h4 style="font-weight: 600; margin-top: 0; margin-bottom: 0.25rem;">System Maintenance</h4>
      <p style="margin: 0;">The system will be undergoing maintenance on March 15th from 2:00 AM to 4:00 AM EST. Please save your work before this time.</p>
    </div>
  </div>
</div>

## Global Banner Alert

```html
<div class="alert alert-info alert-banner" role="alert">
  <div class="container">
    <div class="alert-content">
      <p class="alert-message">We've updated our privacy policy. <a href="#">Learn more</a></p>
    </div>
    <button class="alert-close" aria-label="Close alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
</div>
```

<div class="component-example">
  <div style="background-color: #dbeafe; color: #1e40af; padding: 0.75rem 0; width: 100%; border-bottom: 1px solid #3b82f6;">
    <div style="display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
      <p style="margin: 0;">We've updated our privacy policy. <a href="#" style="color: #1e40af; text-decoration: underline;">Learn more</a></p>
      <button style="background: none; border: none; cursor: pointer; padding: 0.25rem; color: currentColor; opacity: 0.7;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>
  </div>
</div>