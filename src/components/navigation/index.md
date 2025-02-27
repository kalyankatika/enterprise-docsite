---
layout: layouts/page.njk
title: Navigation Components
description: Navigation components help users move through and find content in your application
sidebarType: components
---

# Navigation Components

Navigation components help users move through and find content in your application. They provide intuitive ways to explore, search, and discover content.

## Available Components

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <a href="/components/navigation/navbar/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Navbar</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Navigation bars provide consistent access to primary navigation options</p>
    <div class="w-full h-10 bg-[var(--color-primary)] rounded flex items-center px-3 text-white justify-between">
      <span class="font-medium">Logo</span>
      <div class="flex space-x-4">
        <span>Link 1</span>
        <span>Link 2</span>
        <span>Link 3</span>
      </div>
    </div>
  </a>
  
  <a href="/components/navigation/sidebar/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Sidebar</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Sidebars provide secondary navigation options in a vertical layout</p>
    <div class="flex h-36">
      <div class="w-1/3 bg-[var(--color-background-alt)] border-r border-[var(--color-border)] py-2 px-3 space-y-2">
        <div class="text-sm font-medium">Group 1</div>
        <div class="text-sm pl-2 text-[var(--color-text-muted)]">Item 1</div>
        <div class="text-sm pl-2 text-[var(--color-text-muted)]">Item 2</div>
        <div class="text-sm font-medium mt-4">Group 2</div>
        <div class="text-sm pl-2 text-[var(--color-text-muted)]">Item 1</div>
      </div>
      <div class="w-2/3 p-3 bg-white">
        <div class="text-sm">Content area</div>
      </div>
    </div>
  </a>
  
  <a href="/components/navigation/tabs/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Tabs</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Tabs allow users to switch between different views within the same context</p>
    <div class="border-b border-[var(--color-border)]">
      <div class="flex">
        <button class="py-2 px-4 border-b-2 border-[var(--color-primary)] font-medium">Tab 1</button>
        <button class="py-2 px-4 text-[var(--color-text-muted)]">Tab 2</button>
        <button class="py-2 px-4 text-[var(--color-text-muted)]">Tab 3</button>
      </div>
    </div>
    <div class="p-3 text-sm">Tab 1 content area</div>
  </a>
  
  <a href="/components/navigation/breadcrumbs/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Breadcrumbs</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Breadcrumbs show the hierarchical path to the current page</p>
    <div class="flex items-center text-sm">
      <a href="#" class="text-[var(--color-primary)]">Home</a>
      <span class="mx-2 text-[var(--color-text-muted)]">/</span>
      <a href="#" class="text-[var(--color-primary)]">Section</a>
      <span class="mx-2 text-[var(--color-text-muted)]">/</span>
      <span class="text-[var(--color-text-muted)]">Current Page</span>
    </div>
  </a>
  
  <a href="/components/navigation/pagination/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Pagination</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Pagination helps users navigate through multiple pages of content</p>
    <div class="flex items-center space-x-1">
      <button class="h-8 w-8 rounded-full flex items-center justify-center border border-[var(--color-border)]">
        <span>&laquo;</span>
      </button>
      <button class="h-8 w-8 rounded-full flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-primary)] text-white">1</button>
      <button class="h-8 w-8 rounded-full flex items-center justify-center border border-[var(--color-border)]">2</button>
      <button class="h-8 w-8 rounded-full flex items-center justify-center border border-[var(--color-border)]">3</button>
      <span class="px-1">...</span>
      <button class="h-8 w-8 rounded-full flex items-center justify-center border border-[var(--color-border)]">10</button>
      <button class="h-8 w-8 rounded-full flex items-center justify-center border border-[var(--color-border)]">
        <span>&raquo;</span>
      </button>
    </div>
  </a>
  
  <a href="/components/navigation/menu/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Menu</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Menus display a list of options or actions in a dropdown or popover</p>
    <div class="relative">
      <button class="eds-button-secondary flex items-center">
        Menu
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="absolute mt-1 w-48 bg-white border border-[var(--color-border)] rounded-md shadow-lg z-10">
        <div class="py-1">
          <a href="#" class="block px-4 py-2 text-sm hover:bg-[var(--color-background-alt)]">Option 1</a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-[var(--color-background-alt)]">Option 2</a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-[var(--color-background-alt)]">Option 3</a>
        </div>
      </div>
    </div>
  </a>
</div>

## Usage Guidelines

When working with navigation components, consider the following best practices:

- Provide clear visual indicators for the current location
- Use consistent navigation patterns throughout your application
- Ensure navigation is accessible via keyboard and screen readers
- Adapt navigation components for different screen sizes
- Use appropriate icons and labels to improve clarity
- Keep navigation structure simple and intuitive

For component-specific guidelines, refer to the individual component documentation pages.