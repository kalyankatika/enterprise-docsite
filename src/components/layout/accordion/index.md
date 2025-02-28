---
layout: layouts/page-with-nav.njk
title: Accordion Component
description: Expandable content sections that help organize and declutter interfaces.
breadcrumbs:
  - title: Components
    url: /components/
  - title: Layout
    url: /components/layout/
  - title: Accordion
---

<div class="prose max-w-none">

## Overview

The accordion component is used to toggle between hiding and showing large amounts of content. It consists of a series of vertically stacked sections, each with a header and expandable content panel. Accordions help organize complex information and reduce cognitive load by allowing users to focus on specific content of interest.

## Usage Guidelines

- **Do** use accordions to organize related information into digestible sections
- **Do** ensure accordion headers clearly indicate the content inside
- **Do** consider the accordion's default state (open or closed) based on user needs
- **Don't** nest accordions more than one level deep
- **Don't** hide critical information in accordions that users need immediately

## Examples

<div class="mt-8 border rounded-lg overflow-hidden">
  <div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b">
    <h3 class="font-medium">Basic Accordion</h3>
  </div>
  <div class="p-4 bg-white dark:bg-gray-900">
    <div class="space-y-2">
      <!-- Accordion Item 1 -->
      <div class="border rounded-md" x-data="{ open: true }">
        <button 
          @click="open = !open"
          class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="font-medium">Section 1: Getting Started</span>
          <svg 
            class="h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200"
            :class="{'rotate-180': open}"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div 
          x-show="open" 
          x-transition:enter="transition ease-out duration-200"
          x-transition:enter-start="opacity-0 transform -translate-y-2"
          x-transition:enter-end="opacity-100 transform translate-y-0"
          class="px-4 py-3 bg-white dark:bg-gray-900 rounded-b-md"
        >
          <p>
            This section introduces the fundamental concepts and setup instructions for implementing the component in your project.
          </p>
        </div>
      </div>
      
      <!-- Accordion Item 2 -->
      <div class="border rounded-md" x-data="{ open: false }">
        <button 
          @click="open = !open"
          class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="font-medium">Section 2: Configuration Options</span>
          <svg 
            class="h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200"
            :class="{'rotate-180': open}"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div 
          x-show="open" 
          x-transition:enter="transition ease-out duration-200"
          x-transition:enter-start="opacity-0 transform -translate-y-2"
          x-transition:enter-end="opacity-100 transform translate-y-0"
          class="px-4 py-3 bg-white dark:bg-gray-900 rounded-b-md"
        >
          <p>
            Detailed options for customizing the behavior, appearance, and functionality of the component to suit your specific use case.
          </p>
        </div>
      </div>
      
      <!-- Accordion Item 3 -->
      <div class="border rounded-md" x-data="{ open: false }">
        <button 
          @click="open = !open"
          class="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="font-medium">Section 3: Accessibility Features</span>
          <svg 
            class="h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200"
            :class="{'rotate-180': open}"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div 
          x-show="open" 
          x-transition:enter="transition ease-out duration-200"
          x-transition:enter-start="opacity-0 transform -translate-y-2"
          x-transition:enter-end="opacity-100 transform translate-y-0"
          class="px-4 py-3 bg-white dark:bg-gray-900 rounded-b-md"
        >
          <p>
            Information about how the component meets accessibility standards and best practices for ensuring your implementation is accessible to all users.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

## Implementation

### HTML Structure

```html
<div class="eds-accordion">
  <div class="eds-accordion__item">
    <h3>
      <button class="eds-accordion__trigger" aria-expanded="false">
        <span class="eds-accordion__title">Accordion Item 1</span>
        <span class="eds-accordion__icon"></span>
      </button>
    </h3>
    <div class="eds-accordion__content" hidden>
      <div class="eds-accordion__panel">
        Content for accordion item 1 goes here.
      </div>
    </div>
  </div>
</div>
```

### JavaScript

```javascript
document.querySelectorAll('.eds-accordion__trigger').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    
    // Toggle the expanded state
    button.setAttribute('aria-expanded', !expanded);
    
    // Get the content panel
    const content = button.parentNode.nextElementSibling;
    
    // Toggle the hidden attribute
    if (expanded) {
      content.setAttribute('hidden', '');
    } else {
      content.removeAttribute('hidden');
    }
  });
});
```

## Variants

### Bordered Accordion

A variant with more defined borders and visual separation between items.

### Flush Accordion

A cleaner variant without outer borders, ideal for content within cards or containers.

### Custom Icon Accordion

Allows for custom icons instead of the default chevron indicator.

## Accessibility

The accordion component follows WCAG 2.1 guidelines and includes the following accessibility features:

- Appropriate ARIA attributes (`aria-expanded`, `aria-controls`)
- Keyboard navigation support
- Focus management
- Proper heading structure

For detailed accessibility information, see the [Accordion Accessibility Guidelines](/components/layout/accordion/accessibility/).

## Related Components

- [Tabs](/components/navigation/tabs/)
- [Disclosure](/components/layout/disclosure/)
- [Card](/components/layout/card/)

</div>

<div class="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
  <h2 class="text-2xl font-bold mb-4">Component Pages</h2>
  
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <li>
      <a href="/components/layout/accordion/code/" class="block p-4 border rounded-lg hover:border-indigo-500 transition-colors">
        <h3 class="font-medium text-lg mb-2">Code Examples</h3>
        <p class="text-gray-600 dark:text-gray-300">Detailed code examples in various frameworks</p>
      </a>
    </li>
    <li>
      <a href="/components/layout/accordion/examples/" class="block p-4 border rounded-lg hover:border-indigo-500 transition-colors">
        <h3 class="font-medium text-lg mb-2">Usage Examples</h3>
        <p class="text-gray-600 dark:text-gray-300">Real-world implementation examples</p>
      </a>
    </li>
    <li>
      <a href="/components/layout/accordion/accessibility/" class="block p-4 border rounded-lg hover:border-indigo-500 transition-colors">
        <h3 class="font-medium text-lg mb-2">Accessibility Guidelines</h3>
        <p class="text-gray-600 dark:text-gray-300">Detailed accessibility requirements and guidance</p>
      </a>
    </li>
    <li>
      <a href="/components/layout/accordion/migration/" class="block p-4 border rounded-lg hover:border-indigo-500 transition-colors">
        <h3 class="font-medium text-lg mb-2">Migration Guide</h3>
        <p class="text-gray-600 dark:text-gray-300">Migration from previous versions or legacy components</p>
      </a>
    </li>
  </ul>
</div>