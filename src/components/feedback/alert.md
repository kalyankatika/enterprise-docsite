---
layout: layouts/component.njk
title: Alert
description: Informational messages that communicate status or feedback
tags: 
  - components
  - feedback
status: Stable
props:
  - name: variant
    type: string
    default: "info"
    description: "Type of alert (info, success, warning, error)"
  - name: dismissible
    type: boolean
    default: "false"
    description: "Whether the alert can be dismissed"
  - name: title
    type: string
    default: ""
    description: "Optional title for the alert"
toc: true
---

<h2 id="overview">Overview</h2>

Alerts are used to communicate status, feedback, or other important information to users. They can be used to show success messages, errors, warnings, or general information.

<h2 id="usage">Usage</h2>

Alerts should be used to provide important information to users that requires their attention. They should be concise and clearly communicate their purpose.

### When to use

- To confirm a successful action
- To warn about a potential issue
- To display an error message
- To provide important contextual information

### When not to use

- For promotional content or marketing messages
- For complex interactions that require user input
- For persistent page elements that should always be visible

<h2 id="examples">Examples</h2>

### Variants

The Alert component comes in four variants: info, success, warning, and error.

<div class="space-y-4 mb-8">
  <!-- Info Alert -->
  <div class="p-4 rounded-md bg-[var(--color-info-light)] border border-l-4 border-[var(--color-info)] border-l-[var(--color-info)]">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-[var(--color-info)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-[var(--color-info-dark)]">Information</h3>
        <div class="mt-2 text-sm text-[var(--color-info-dark)]">
          <p>This is an informational message for the user.</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Success Alert -->
  <div class="p-4 rounded-md bg-[var(--color-success-light)] border border-l-4 border-[var(--color-success)] border-l-[var(--color-success)]">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-[var(--color-success)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-[var(--color-success-dark)]">Success</h3>
        <div class="mt-2 text-sm text-[var(--color-success-dark)]">
          <p>Your changes have been saved successfully.</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Warning Alert -->
  <div class="p-4 rounded-md bg-[var(--color-warning-light)] border border-l-4 border-[var(--color-warning)] border-l-[var(--color-warning)]">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-[var(--color-warning)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-[var(--color-warning-dark)]">Warning</h3>
        <div class="mt-2 text-sm text-[var(--color-warning-dark)]">
          <p>Your account subscription will expire in 3 days.</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Error Alert -->
  <div class="p-4 rounded-md bg-[var(--color-error-light)] border border-l-4 border-[var(--color-error)] border-l-[var(--color-error)]">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-[var(--color-error)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-[var(--color-error-dark)]">Error</h3>
        <div class="mt-2 text-sm text-[var(--color-error-dark)]">
          <p>There was an error processing your request. Please try again.</p>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<!-- Info Alert -->
<div class="p-4 rounded-md bg-[var(--color-info-light)] border border-l-4 border-[var(--color-info)] border-l-[var(--color-info)]">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Info icon -->
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-[var(--color-info-dark)]">Information</h3>
      <div class="mt-2 text-sm text-[var(--color-info-dark)]">
        <p>This is an informational message for the user.</p>
      </div>
    </div>
  </div>
</div>

<!-- Structure is similar for Success, Warning, and Error variants -->
```

### Dismissible Alert

Alerts can include a dismiss button for temporary notifications.

<div class="p-4 rounded-md bg-[var(--color-info-light)] border border-[var(--color-info)] mb-8">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-[var(--color-info)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3 flex-1">
      <div class="text-sm text-[var(--color-info-dark)]">
        <p>A new software update is available. See what's new in version 2.0.4.</p>
      </div>
    </div>
    <div class="ml-auto pl-3">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="inline-flex rounded-md p-1.5 text-[var(--color-info-dark)] hover:bg-[var(--color-info)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-info)]">
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

```html
<div class="p-4 rounded-md bg-[var(--color-info-light)] border border-[var(--color-info)]">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Info icon -->
    </div>
    <div class="ml-3 flex-1">
      <div class="text-sm text-[var(--color-info-dark)]">
        <p>A new software update is available. See what's new in version 2.0.4.</p>
      </div>
    </div>
    <div class="ml-auto pl-3">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="inline-flex rounded-md p-1.5 text-[var(--color-info-dark)] hover:bg-[var(--color-info)] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-info)]">
          <span class="sr-only">Dismiss</span>
          <!-- X icon -->
        </button>
      </div>
    </div>
  </div>
</div>
```

## Accessibility

Alerts should be accessible to all users, including those using screen readers or keyboard navigation:

- For important alerts that appear dynamically, use `role="alert"` to announce them to screen readers
- For static alerts that are present when the page loads, use `role="status"` instead
- Make sure alert text has sufficient color contrast
- Include visually hidden text for icons if they convey meaning
- For dismissible alerts, ensure the dismiss button is accessible with keyboard navigation

```html
<!-- Dynamic Alert with role="alert" -->
<div role="alert" class="p-4 rounded-md bg-[var(--color-error-light)] border border-[var(--color-error)]">
  <div class="flex">
    <div class="flex-shrink-0">
      <!-- Icon -->
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-[var(--color-error-dark)]">Error</h3>
      <div class="mt-2 text-sm text-[var(--color-error-dark)]">
        <p>There was a problem with your submission. Please correct the errors and try again.</p>
      </div>
    </div>
  </div>
</div>
```