---
layout: layouts/component.njk
title: Button Examples
description: Examples of the Button component in various contexts
---

# Button Examples

Below are various examples of the Button component in different contexts and configurations.

## Button Variants

### Primary Button

```html
<button class="btn btn-primary">Primary Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;">Primary Button</button>
</div>

### Secondary Button

```html
<button class="btn btn-secondary">Secondary Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid #3b82f6; padding: 0.5rem 1rem; border-radius: 0.25rem; color: #3b82f6; background-color: white;">Secondary Button</button>
</div>

### Tertiary Button

```html
<button class="btn btn-tertiary">Tertiary Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; color: #3b82f6; background-color: transparent;">Tertiary Button</button>
</div>

### Danger Button

```html
<button class="btn btn-danger">Danger Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #ef4444; border-color: #ef4444;">Danger Button</button>
</div>

### Ghost Button

```html
<button class="btn btn-ghost">Ghost Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; color: #4b5563; background-color: transparent;">Ghost Button</button>
</div>

## Button Sizes

### Small Button

```html
<button class="btn btn-primary btn-sm">Small Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; font-size: 0.75rem; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.25rem 0.5rem; border-radius: 0.2rem; color: white; background-color: #3b82f6; border-color: #3b82f6; height: 2rem;">Small Button</button>
</div>

### Medium Button (Default)

```html
<button class="btn btn-primary">Medium Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; font-size: 0.875rem; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6; height: 2.5rem;">Medium Button</button>
</div>

### Large Button

```html
<button class="btn btn-primary btn-lg">Large Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; font-size: 1rem; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.75rem 1.5rem; border-radius: 0.3rem; color: white; background-color: #3b82f6; border-color: #3b82f6; height: 3rem;">Large Button</button>
</div>

### Extra Large Button

```html
<button class="btn btn-primary btn-xl">Extra Large Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; font-size: 1.125rem; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 1rem 2rem; border-radius: 0.3rem; color: white; background-color: #3b82f6; border-color: #3b82f6; height: 3.5rem;">Extra Large Button</button>
</div>

## Button with Icons

### Button with Left Icon

```html
<button class="btn btn-primary">
  <svg class="btn-icon btn-icon-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
  </svg>
  Button with Icon
</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;">
    <svg style="margin-right: 0.5rem; width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
    </svg>
    Button with Icon
  </button>
</div>

### Button with Right Icon

```html
<button class="btn btn-primary">
  Next
  <svg class="btn-icon btn-icon-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;">
    Next
    <svg style="margin-left: 0.5rem; width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  </button>
</div>

### Icon-only Button

```html
<button class="btn btn-icon-only" aria-label="Settings">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
  </svg>
</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid #e5e7eb; padding: 0.5rem; border-radius: 50%; color: #4b5563; background-color: white;" aria-label="Settings">
    <svg style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg>
  </button>
</div>

## Button States

### Disabled Button

```html
<button class="btn btn-primary" disabled>Disabled Button</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: not-allowed; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6; opacity: 0.65;" disabled>Disabled Button</button>
</div>

### Loading Button

```html
<button class="btn btn-primary btn-loading" disabled>
  <span class="btn-spinner"></span>
  <span class="btn-text">Loading...</span>
</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: not-allowed; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;" disabled>
    <span style="display: inline-block; width: 1rem; height: 1rem; margin-right: 0.5rem; vertical-align: text-bottom; border: 0.2em solid currentColor; border-right-color: transparent; border-radius: 50%; animation: spinner-border .75s linear infinite;"></span>
    <span>Loading...</span>
  </button>
</div>

## Button Width Variations

### Full-width Button

```html
<button class="btn btn-primary btn-full-width">Full-width Button</button>
```

<div class="component-example">
  <button style="display: block; width: 100%; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;">Full-width Button</button>
</div>

## Button Groups

### Horizontal Button Group

```html
<div class="btn-group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-primary">Middle</button>
  <button class="btn btn-primary">Right</button>
</div>
```

<div class="component-example">
  <div style="display: inline-flex;">
    <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem 0 0 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6; margin-right: -1px;">Left</button>
    <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0; color: white; background-color: #3b82f6; border-color: #3b82f6; margin-right: -1px;">Middle</button>
    <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0 0.25rem 0.25rem 0; color: white; background-color: #3b82f6; border-color: #3b82f6;">Right</button>
  </div>
</div>

### Vertical Button Group

```html
<div class="btn-group-vertical">
  <button class="btn btn-primary">Top</button>
  <button class="btn btn-primary">Middle</button>
  <button class="btn btn-primary">Bottom</button>
</div>
```

<div class="component-example">
  <div style="display: inline-flex; flex-direction: column;">
    <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem 0.25rem 0 0; color: white; background-color: #3b82f6; border-color: #3b82f6; margin-bottom: -1px;">Top</button>
    <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0; color: white; background-color: #3b82f6; border-color: #3b82f6; margin-bottom: -1px;">Middle</button>
    <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0 0 0.25rem 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;">Bottom</button>
  </div>
</div>

## Common Use Cases

### Form Submit Button

```html
<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" required />
  </div>
  <button type="submit" class="btn btn-primary">Sign In</button>
</form>
```

<div class="component-example">
  <form style="max-width: 400px;">
    <div style="margin-bottom: 1rem;">
      <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
      <input type="email" id="email" style="display: block; width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem;" />
    </div>
    <div style="margin-bottom: 1rem;">
      <label for="password" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Password</label>
      <input type="password" id="password" style="display: block; width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem;" />
    </div>
    <button type="button" style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;">Sign In</button>
  </form>
</div>

### Button with Modal Trigger

```html
<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Open Modal
</button>

<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal content goes here...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;">Open Modal</button>
</div>

### Toggle Button

```html
<button class="btn btn-primary" aria-pressed="false" id="darkModeToggle">
  <svg class="btn-icon btn-icon-left" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>
  Light Mode
</button>
```

<div class="component-example">
  <button style="display: inline-flex; align-items: center; justify-content: center; font-weight: 500; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 0.5rem 1rem; border-radius: 0.25rem; color: white; background-color: #3b82f6; border-color: #3b82f6;" aria-pressed="false">
    <svg style="margin-right: 0.5rem; width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg>
    Light Mode
  </button>
</div>