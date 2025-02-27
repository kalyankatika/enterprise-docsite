---
layout: page.njk
title: Components
description: Reusable UI elements that can be composed to create interfaces
sidebarType: components
---

# Components

Components are reusable UI elements that can be composed to create interfaces. Our component library provides a comprehensive set of UI building blocks to help you create consistent, accessible, and beautiful enterprise applications.

## Component Categories

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
  <a href="/components/layout/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="grid grid-cols-3 gap-2 h-16">
          <div class="bg-[var(--color-primary)] bg-opacity-20 rounded"></div>
          <div class="bg-[var(--color-primary)] bg-opacity-10 rounded col-span-2"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Layout</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Components for structuring and organizing content on the page. Includes Container, Grid, Card, and Divider.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Layout Components →</div>
    </div>
  </a>
  
  <a href="/components/inputs/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="space-y-2">
          <div class="h-10 border border-[var(--color-border)] bg-white dark:bg-gray-800 rounded relative pl-10 flex items-center">
            <div class="absolute left-3 top-2 w-5 h-5 rounded-sm border-2 border-[var(--color-primary)] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-sm">Checkbox label</span>
          </div>
          <div class="h-10 border border-[var(--color-border)] bg-white dark:bg-gray-800 rounded px-3 text-sm flex items-center">
            Text input
          </div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Inputs</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Interactive components for user input. Includes Button, Text Field, Checkbox, Radio, and Select.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Input Components →</div>
    </div>
  </a>
  
  <a href="/components/navigation/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="space-y-2">
          <div class="h-10 bg-[var(--color-primary)] rounded flex items-center px-3">
            <div class="mr-auto text-white text-sm font-medium">Navbar</div>
            <div class="flex space-x-4">
              <div class="h-2 w-6 bg-white rounded-full opacity-60"></div>
              <div class="h-2 w-6 bg-white rounded-full opacity-80"></div>
              <div class="h-2 w-6 bg-white rounded-full"></div>
            </div>
          </div>
          <div class="flex border-b border-[var(--color-border)]">
            <div class="px-4 py-2 border-b-2 border-[var(--color-primary)] font-medium text-[var(--color-primary)] text-sm">Tab 1</div>
            <div class="px-4 py-2 text-[var(--color-text-muted)] text-sm">Tab 2</div>
            <div class="px-4 py-2 text-[var(--color-text-muted)] text-sm">Tab 3</div>
          </div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Navigation</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Components for user navigation. Includes Navbar, Tabs, Breadcrumb, and Pagination.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Navigation Components →</div>
    </div>
  </a>
  
  <a href="/components/feedback/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <div class="font-medium text-sm text-blue-800 dark:text-blue-300">Information Alert</div>
            <div class="text-xs text-blue-700 dark:text-blue-400">This is an example alert message.</div>
          </div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Feedback</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Components that provide feedback to users. Includes Alert, Toast, Modal, and Progress.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Feedback Components →</div>
    </div>
  </a>
</div>

## Component Usage Guidelines

When using components from the Enterprise Design System, follow these guidelines to ensure consistency and accessibility:

<div class="eds-alert eds-alert-info mt-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Component Documentation</p>
      <p class="mt-1">Each component has its own documentation page with examples, props, and usage guidelines. Browse the sidebar to find the component you need.</p>
    </div>
  </div>
</div>

### Composition Over Customization

Our components are designed to be composed together to create complex interfaces. Instead of heavily customizing a single component, consider combining multiple components to achieve your design goals.

### Accessibility First

All components are built with accessibility in mind. They follow WAI-ARIA patterns and are keyboard navigable. Always maintain these accessibility features when implementing components in your application.

### Responsive Behavior

Components are designed to work across all screen sizes. Pay attention to the responsive behavior of each component and how they adapt to different viewports.

### Theme Consistency

Use the provided theme tokens for spacing, colors, and typography to maintain consistency with the design system. Avoid hard-coding values that might not adapt to different themes or color modes.

## Component Status

Components in the Enterprise Design System have different status levels:

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
    <div class="flex items-center mb-2">
      <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
      <div class="font-medium">Stable</div>
    </div>
    <p class="text-sm text-green-800 dark:text-green-300">Ready for production use. APIs are stable and not expected to change significantly.</p>
  </div>
  
  <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
    <div class="flex items-center mb-2">
      <div class="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
      <div class="font-medium">Beta</div>
    </div>
    <p class="text-sm text-amber-800 dark:text-amber-300">Ready for use in non-critical applications. APIs may change based on feedback.</p>
  </div>
  
  <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
    <div class="flex items-center mb-2">
      <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
      <div class="font-medium">Experimental</div>
    </div>
    <p class="text-sm text-red-800 dark:text-red-300">In development and testing. APIs will likely change. Not recommended for production.</p>
  </div>
</div>

The current status of a component is indicated on its documentation page.

## Design and Development Resources

For design and development resources related to components, check out:

- [Design Tokens](/resources/design-tokens/) - Available tokens for theming components
- [Figma Libraries](/resources/figma/) - Component libraries for design tools
- [Implementation Guide](/get-started/implementation/) - Integration guides for developers