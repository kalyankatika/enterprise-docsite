---
layout: layouts/page.njk
title: Layout Components
description: Layout components help structure content and define the visual hierarchy of pages
sidebarType: components
---

# Layout Components

Layout components help structure content and define the visual hierarchy of pages. They provide consistent spacing, alignment, and organization of UI elements.

## Available Components

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <a href="/components/layout/container/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Container</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Containers center content horizontally and add responsive padding</p>
    <div class="w-full h-24 border border-dashed border-[var(--color-border)] flex items-center justify-center bg-[var(--color-background-alt)]">
      <div class="w-3/4 h-16 border border-solid border-[var(--color-primary)] bg-[var(--color-primary-light)] flex items-center justify-center">
        <span class="text-sm">Container</span>
      </div>
    </div>
  </a>
  
  <a href="/components/layout/grid/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Grid</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Grids create flexible, responsive layouts with rows and columns</p>
    <div class="w-full grid grid-cols-3 gap-2 h-24">
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">1</div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">2</div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">3</div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">4</div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">5</div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] flex items-center justify-center">6</div>
    </div>
  </a>
  
  <a href="/components/layout/box/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Box</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Boxes provide padding, borders, and background colors for content</p>
    <div class="p-4 border border-[var(--color-border)] rounded-lg bg-[var(--color-background-alt)]">
      <p class="text-sm">Box content</p>
    </div>
  </a>
  
  <a href="/components/layout/divider/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Divider</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Dividers create visual separation between content sections</p>
    <div class="space-y-4">
      <p class="text-sm">Section above</p>
      <hr class="border-t border-[var(--color-border)]">
      <p class="text-sm">Section below</p>
    </div>
  </a>
  
  <a href="/components/layout/stack/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Stack</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Stacks add consistent spacing between items vertically or horizontally</p>
    <div class="flex flex-col space-y-2">
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] h-6 w-full"></div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] h-6 w-full"></div>
      <div class="bg-[var(--color-primary-light)] border border-[var(--color-primary)] h-6 w-full"></div>
    </div>
  </a>
  
  <a href="/components/layout/card/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Card</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Cards group related content and actions in a container with visual prominence</p>
    <div class="rounded-lg border border-[var(--color-border)] overflow-hidden">
      <div class="h-20 bg-[var(--color-primary-light)] border-b border-[var(--color-border)]"></div>
      <div class="p-3 space-y-2">
        <h3 class="text-sm font-medium">Card Title</h3>
        <p class="text-xs text-[var(--color-text-muted)]">Card description text</p>
      </div>
    </div>
  </a>
</div>

## Usage Guidelines

When working with layout components, consider the following best practices:

- Use consistent spacing and alignment throughout your application
- Choose the appropriate layout component based on the content type and hierarchy
- Ensure layouts are responsive and adapt well to different screen sizes
- Use nested layout components to create complex page structures
- Pay attention to the visual hierarchy and reading flow

For component-specific guidelines, refer to the individual component documentation pages.