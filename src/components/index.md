---
layout: layouts/page.njk
title: Components
description: A comprehensive library of reusable UI components for building enterprise applications
excludeFromSearch: false
contentType: Documentation
eleventyNavigation:
  key: Components
  order: 2
---

# Enterprise Design System Components

The Enterprise Design System (EDS) provides a comprehensive library of UI components that help build consistent and accessible interfaces. All components follow our core design principles and are built with accessibility, usability, and flexibility in mind.

## Finding Components

Our documentation offers multiple ways to find the components you need:

- **Left Navigation**: Use the sidebar to browse components by category
- **Category View**: Browse components organized by functional categories below
- **Search**: Use the search function in the top navigation to quickly find a specific component

## Component Categories

Our components are organized into the following functional categories:

### Input Components

Components that enable users to input or manipulate data.

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
  {% for component in collections.inputComponents %}
    <a href="{{ component.url }}" class="eds-component-card">
      <h3 class="text-xl font-medium mb-2">{{ component.data.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ component.data.description }}</p>
      <span class="eds-link">View Component →</span>
    </a>
  {% endfor %}
</div>

### Layout Components

Components that help structure content and UI elements on the page.

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
  {% for component in collections.layoutComponents %}
    <a href="{{ component.url }}" class="eds-component-card">
      <h3 class="text-xl font-medium mb-2">{{ component.data.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ component.data.description }}</p>
      <span class="eds-link">View Component →</span>
    </a>
  {% endfor %}
</div>

### Navigation Components

Components that help users navigate within the application.

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
  {% for component in collections.navigationComponents %}
    <a href="{{ component.url }}" class="eds-component-card">
      <h3 class="text-xl font-medium mb-2">{{ component.data.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ component.data.description }}</p>
      <span class="eds-link">View Component →</span>
    </a>
  {% endfor %}
</div>

### Feedback Components

Components that provide feedback or display notifications to users.

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
  {% for component in collections.feedbackComponents %}
    <a href="{{ component.url }}" class="eds-component-card">
      <h3 class="text-xl font-medium mb-2">{{ component.data.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ component.data.description }}</p>
      <span class="eds-link">View Component →</span>
    </a>
  {% endfor %}
</div>

## Component Structure

Each component in our design system follows a consistent structure in its documentation:

1. **Overview**: A description of the component and its use cases
2. **Usage**: Guidelines on how and when to use the component
3. **Code**: Implementation details including props, methods, and events
4. **Accessibility**: Information on how the component meets accessibility standards

## Design Principles

All components in the Enterprise Design System follow these core principles:

### Consistent

Components maintain visual and behavioral consistency across the interface. They use the same design tokens for spacing, colors, and typography.

### Accessible

Components meet WCAG 2.1 AA standards, ensuring that applications built with our design system are usable by people with disabilities.

### Responsive

Components are designed to work across various screen sizes, from desktop to mobile, providing a good user experience regardless of device.

### Customizable

While maintaining consistency, components can be customized to meet specific design needs and brand guidelines.

## Implementation

Components are implemented using clean, semantic HTML and CSS, with JavaScript used only when necessary for enhanced functionality. They are framework-agnostic but offer specific implementations for React and Vue.js.

For installation and basic usage, please refer to our [Getting Started](/getting-started/) guide.