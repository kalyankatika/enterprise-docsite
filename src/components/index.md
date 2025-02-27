---
layout: layouts/page.njk
title: Components
description: Browse our library of reusable UI components
sidebarType: components
---

# Component Library

Our Enterprise Design System provides a comprehensive library of reusable UI components to help you build consistent, accessible, and visually appealing interfaces. All components follow our design principles and are thoroughly tested across different browsers and devices.

## Component Categories

<div class="grid md:grid-cols-2 gap-6 mt-8">
  <a href="/components/inputs/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Input Components</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Components that allow users to enter data, make selections, and trigger actions</p>
    <div class="flex gap-2">
      <button class="eds-button-primary">Button</button>
      <input type="text" class="eds-input" placeholder="Text input">
    </div>
  </a>
  
  <a href="/components/layout/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Layout Components</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Components that help structure content and define visual hierarchy</p>
    <div class="w-full grid grid-cols-3 gap-2 h-16">
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">1</div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">2</div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">3</div>
    </div>
  </a>
  
  <a href="/components/navigation/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Navigation Components</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Components that help users move through and find content</p>
    <div class="w-full border-b border-[var(--color-border)]">
      <div class="flex">
        <button class="py-2 px-4 border-b-2 border-[var(--color-primary)] font-medium">Tab 1</button>
        <button class="py-2 px-4 text-[var(--color-text-muted)]">Tab 2</button>
        <button class="py-2 px-4 text-[var(--color-text-muted)]">Tab 3</button>
      </div>
    </div>
  </a>
  
  <a href="/components/feedback/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Feedback Components</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Components that communicate system status and provide information</p>
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-blue-700">Information message goes here</p>
        </div>
      </div>
    </div>
  </a>
</div>

## Using Components

All components in our design system follow consistent patterns for implementation, customization, and usage. Here are some guidelines to help you use them effectively:

### Implementation 

- Each component includes HTML markup, CSS classes (with the 'eds-' prefix following BEM methodology), and, where applicable, JavaScript functionality
- Components can be used with various frameworks or as standalone HTML/CSS/JS
- CSS variables (custom properties) can be used to customize component appearance

### Customization

- Components offer various options and variants through props/attributes
- Design tokens control the visual appearance and can be customized globally
- Many components support content composition through slots or template areas

### Accessibility

- All components follow WAI-ARIA guidelines
- Proper keyboard navigation and focus management is implemented
- Appropriate ARIA roles, states, and properties are included
- Components are thoroughly tested with screen readers

### Responsive Behavior

- Components are designed to work across various screen sizes
- Responsive breakpoints are consistent throughout the system
- Mobile-first approach ensures functionality on all devices

### Browser Support

Components are tested and supported in:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Component Status Indicators

Throughout the documentation, you'll notice status indicators on components:

- <span class="eds-badge eds-badge-stable">Stable</span> - Well-tested, unlikely to change significantly
- <span class="eds-badge eds-badge-beta">Beta</span> - Usable, but may undergo refinement based on feedback
- <span class="eds-badge eds-badge-experimental">Experimental</span> - Early stage, likely to change
- <span class="eds-badge eds-badge-deprecated">Deprecated</span> - Still functional but planned for removal