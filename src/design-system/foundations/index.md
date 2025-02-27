---
layout: page.njk
title: Foundations
description: The core design elements that form the building blocks of our design system
sidebarType: design-system
---

# Foundations

Foundations are the core design elements that form the building blocks of our design system. They establish the visual language of our products and ensure consistency across all interfaces.

## Core Foundation Elements

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
  <a href="/design-system/foundations/color/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="grid grid-cols-6 gap-2">
          <div class="h-8 bg-blue-600 rounded-md"></div>
          <div class="h-8 bg-blue-500 rounded-md"></div>
          <div class="h-8 bg-blue-400 rounded-md"></div>
          <div class="h-8 bg-green-500 rounded-md"></div>
          <div class="h-8 bg-yellow-500 rounded-md"></div>
          <div class="h-8 bg-red-500 rounded-md"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Color</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our color palette system, including primary and secondary colors, semantic colors, neutrals, and usage guidelines.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Color System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/typography/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="space-y-1">
          <div class="h-8 font-bold text-xl truncate">Typography Example</div>
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Typography</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our typefaces, font weights, sizes, and styles for headings, body text, and UI elements.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Typography System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/spacing/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="flex items-end space-x-1">
          <div class="w-4 h-4 bg-[var(--color-primary)] rounded"></div>
          <div class="w-6 h-6 bg-[var(--color-primary)] rounded"></div>
          <div class="w-8 h-8 bg-[var(--color-primary)] rounded"></div>
          <div class="w-10 h-10 bg-[var(--color-primary)] rounded"></div>
          <div class="w-12 h-12 bg-[var(--color-primary)] rounded"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Spacing</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our spacing scale and system for consistent layout, padding, and margins across all interfaces.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Spacing System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/iconography/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="grid grid-cols-5 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Iconography</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our icon system, including usage guidelines, sizing, and available icon sets.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Icon System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/grid-system/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="grid grid-cols-12 gap-1 h-10">
          <div class="bg-[var(--color-primary)] opacity-40 rounded col-span-2"></div>
          <div class="bg-[var(--color-primary)] opacity-40 rounded col-span-2"></div>
          <div class="bg-[var(--color-primary)] opacity-40 rounded col-span-4"></div>
          <div class="bg-[var(--color-primary)] opacity-40 rounded col-span-4"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Grid System</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our responsive grid system for consistent layouts across all screen sizes.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Grid System →</div>
    </div>
  </a>
  
  <a href="/design-system/guidelines/accessibility/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Accessibility</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our accessibility guidelines and best practices for creating inclusive interfaces.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Accessibility Guidelines →</div>
    </div>
  </a>
</div>

## Purpose of Foundations

<div class="eds-alert eds-alert-info mt-8">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Foundation elements should be used consistently</p>
      <p class="mt-1">Foundations provide the basic building blocks for all design work. Use them consistently to create cohesive and harmonious interfaces.</p>
    </div>
  </div>
</div>

Foundations serve several critical purposes in our design system:

### 1. Establish a Consistent Visual Language

Foundations set the visual tone for all our products. By using consistent colors, typography, spacing, and other foundational elements, we create a cohesive look and feel across all interfaces.

### 2. Improve Design Efficiency

With pre-defined foundation elements, designers can make decisions more quickly and focus on solving user problems rather than debating basic visual choices.

### 3. Ensure Accessibility and Usability

Our foundations are designed with accessibility in mind. The color system includes contrast checking, typography ensures readability, and spacing creates clear visual hierarchies.

### 4. Support Theming and Customization

While consistency is important, our foundations also support theming and customization through design tokens that can be adjusted to meet specific brand needs.

### 5. Create a Shared Design Vocabulary

Foundations create a shared language for designers and developers to communicate efficiently about interface elements.

## How to Use Foundations

When working on designs or implementations, always start with the foundation elements. They provide the basic building blocks for all other components and patterns.

<div class="rounded-lg border border-[var(--color-border)] overflow-hidden mt-8">
  <div class="bg-[var(--color-bg-alt)] px-4 py-3 border-b border-[var(--color-border)]">
    <div class="font-medium">Example: Building a Card Component</div>
  </div>
  <div class="p-4">
    <div class="mb-4">
      <p class="mb-2 text-sm text-[var(--color-text-muted)]">When designing or implementing a card component, use foundation elements:</p>
      <ul class="list-disc pl-5 space-y-1 text-sm text-[var(--color-text-muted)]">
        <li><strong>Colors:</strong> Use the defined background, border, and text colors</li>
        <li><strong>Typography:</strong> Follow heading and body text guidelines</li>
        <li><strong>Spacing:</strong> Apply consistent padding and margins using the spacing scale</li>
        <li><strong>Elevation:</strong> Use the appropriate shadow for the card's visual hierarchy</li>
      </ul>
    </div>
    
    <div class="bg-white dark:bg-gray-800 border border-[var(--color-border)] rounded-lg p-4 shadow-sm">
      <h3 class="text-lg font-medium mb-2">Card Title</h3>
      <p class="text-sm text-[var(--color-text-muted)] mb-4">This is an example card that uses our foundation elements consistently, including color, typography, and spacing.</p>
      <button class="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md text-sm font-medium">Primary Action</button>
    </div>
  </div>
</div>

## Implementation Principles

When implementing foundation elements in your designs and code, follow these principles:

### Use Design Tokens

Design tokens are named entities that store visual design attributes. Use design tokens rather than hard-coded values to ensure consistency and support theming.

```css
/* Don't use hard-coded values */
.button {
  background-color: #0056b3;
  padding: 12px 16px;
}

/* Do use design tokens */
.button {
  background-color: var(--color-primary);
  padding: var(--space-3) var(--space-4);
}
```

### Follow Documentation Closely

Each foundation element has specific usage guidelines. Follow these guidelines closely to ensure proper implementation and avoid inconsistencies.

### Use Foundation Elements as Building Blocks

Foundations should be the building blocks for all other components and patterns. Start with foundations, then build more complex elements on top of them.

## Related Resources

- [Design Tokens](/resources/design-tokens/) - View all available design tokens
- [Figma Libraries](/resources/figma/) - Access foundation styles in our Figma libraries
- [Implementation Guide](/get-started/implementation/) - Technical guidance for implementing foundation elements