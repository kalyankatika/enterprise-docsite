---
layout: layouts/page.njk
title: Input Components
description: Input components allow users to enter data, make selections, and trigger actions
sidebarType: components
---

# Input Components

Input components allow users to enter data, make selections, and trigger actions. They form the foundation of interactive interfaces in your application.

## Available Components

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <a href="/components/inputs/button/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Button</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Buttons allow users to take actions and make choices with a single tap</p>
    <div class="flex gap-2">
      <button class="eds-button-primary">Primary</button>
      <button class="eds-button-secondary">Secondary</button>
    </div>
  </a>
  
  <a href="/components/inputs/text-field/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Text Field</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Text fields allow users to enter and edit text</p>
    <input type="text" class="eds-input" placeholder="Enter text..." />
  </a>
  
  <a href="/components/inputs/checkbox/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Checkbox</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Checkboxes allow users to select one or more items from a set</p>
    <div class="flex items-center">
      <input type="checkbox" id="checkbox-example" class="h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]" checked />
      <label for="checkbox-example" class="ml-2">Option label</label>
    </div>
  </a>
  
  <a href="/components/inputs/radio/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Radio</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Radio buttons allow users to select one option from a set</p>
    <div class="flex items-center">
      <input type="radio" id="radio-example" name="radio-group" class="h-4 w-4 border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]" checked />
      <label for="radio-example" class="ml-2">Option label</label>
    </div>
  </a>
  
  <a href="/components/inputs/select/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Select</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Select components allow users to select a value from a list of options</p>
    <select class="eds-input">
      <option>Select an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </a>
  
  <a href="/components/inputs/toggle/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Toggle</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Toggle switches allow users to turn an option on or off</p>
    <div class="relative inline-block w-10 mr-2 align-middle select-none">
      <input type="checkbox" id="toggle-example" class="sr-only peer" checked />
      <div class="h-6 bg-[var(--color-secondary)] rounded-full peer peer-checked:bg-[var(--color-primary)] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
    </div>
  </a>
</div>

## Usage Guidelines

When working with input components, consider the following best practices:

- Use clear, descriptive labels for all input components
- Group related inputs together using appropriate layout components
- Provide validation and feedback for user inputs
- Ensure all inputs are accessible by using appropriate ARIA attributes
- Use consistent styling for similar input types throughout your application

For component-specific guidelines, refer to the individual component documentation pages.