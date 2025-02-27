---
layout: page.njk
title: Spacing
description: A consistent spacing system to create balanced layouts and establish rhythmic relationships between elements
sidebarType: design-system
---

# Spacing

A consistent spacing system helps create balanced layouts and establish rhythmic relationships between elements. Our spacing scale is based on a 4px grid, providing predictable and harmonious spacing throughout interfaces.

## Spacing Scale

Our spacing scale follows a geometric progression to provide a natural and harmonious spacing rhythm:

<div class="overflow-x-auto">
  <table class="w-full mt-6 mb-8">
    <thead>
      <tr class="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
        <th class="p-3 text-left">Token</th>
        <th class="p-3 text-left">Value</th>
        <th class="p-3 text-left">Pixels</th>
        <th class="p-3 text-left">Rem</th>
        <th class="p-3 text-left">Visual</th>
        <th class="p-3 text-left">Example Usage</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-0</td>
        <td class="p-3">0</td>
        <td class="p-3">0px</td>
        <td class="p-3">0rem</td>
        <td class="p-3"></td>
        <td class="p-3 text-sm">No spacing</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-1</td>
        <td class="p-3">0.25</td>
        <td class="p-3">4px</td>
        <td class="p-3">0.25rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-1"></div>
        </td>
        <td class="p-3 text-sm">Very tight spacing between related elements</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-2</td>
        <td class="p-3">0.5</td>
        <td class="p-3">8px</td>
        <td class="p-3">0.5rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-2"></div>
        </td>
        <td class="p-3 text-sm">Tight spacing between closely related elements</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-3</td>
        <td class="p-3">0.75</td>
        <td class="p-3">12px</td>
        <td class="p-3">0.75rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-3"></div>
        </td>
        <td class="p-3 text-sm">Spacing between related elements</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-4</td>
        <td class="p-3">1</td>
        <td class="p-3">16px</td>
        <td class="p-3">1rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-4"></div>
        </td>
        <td class="p-3 text-sm">Standard spacing between elements (base unit)</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-6</td>
        <td class="p-3">1.5</td>
        <td class="p-3">24px</td>
        <td class="p-3">1.5rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-6"></div>
        </td>
        <td class="p-3 text-sm">Medium spacing between distinct elements</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-8</td>
        <td class="p-3">2</td>
        <td class="p-3">32px</td>
        <td class="p-3">2rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-8"></div>
        </td>
        <td class="p-3 text-sm">Standard section spacing</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-12</td>
        <td class="p-3">3</td>
        <td class="p-3">48px</td>
        <td class="p-3">3rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-12"></div>
        </td>
        <td class="p-3 text-sm">Large section spacing</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-16</td>
        <td class="p-3">4</td>
        <td class="p-3">64px</td>
        <td class="p-3">4rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-16"></div>
        </td>
        <td class="p-3 text-sm">Spacing between major sections</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-20</td>
        <td class="p-3">5</td>
        <td class="p-3">80px</td>
        <td class="p-3">5rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-20"></div>
        </td>
        <td class="p-3 text-sm">Extra large section spacing</td>
      </tr>
      <tr class="border-b border-[var(--color-border)]">
        <td class="p-3 font-mono text-sm font-medium">space-24</td>
        <td class="p-3">6</td>
        <td class="p-3">96px</td>
        <td class="p-3">6rem</td>
        <td class="p-3">
          <div class="bg-[var(--color-primary)] h-4 w-24"></div>
        </td>
        <td class="p-3 text-sm">Very large section spacing</td>
      </tr>
    </tbody>
  </table>
</div>

## Spacing Usage Guidelines

To create consistent and harmonious layouts, follow these guidelines when applying spacing:

### 1. Use the spacing scale consistently

Always use the predefined spacing values instead of arbitrary values. This ensures consistency across all interfaces and maintains the design system's rhythm.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
  <div>
    <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-2">
      <div class="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <div class="font-medium text-green-800 dark:text-green-300">Do</div>
      </div>
      
      <div class="p-4 bg-white dark:bg-gray-800 rounded border border-[var(--color-border)]">
        <div class="mb-4 bg-gray-100 dark:bg-gray-700 rounded p-4">Header</div>
        <div class="mb-4 bg-gray-100 dark:bg-gray-700 rounded p-4">Content</div>
        <div class="bg-gray-100 dark:bg-gray-700 rounded p-4">Footer</div>
      </div>
      
      <div class="mt-2 text-sm text-green-800 dark:text-green-300">Use consistent spacing (space-4 or 16px) between sections</div>
    </div>
  </div>
  
  <div>
    <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg mb-2">
      <div class="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <div class="font-medium text-red-800 dark:text-red-300">Don't</div>
      </div>
      
      <div class="p-4 bg-white dark:bg-gray-800 rounded border border-[var(--color-border)]">
        <div class="mb-3 bg-gray-100 dark:bg-gray-700 rounded p-4">Header</div>
        <div class="mb-5 bg-gray-100 dark:bg-gray-700 rounded p-4">Content</div>
        <div class="bg-gray-100 dark:bg-gray-700 rounded p-4">Footer</div>
      </div>
      
      <div class="mt-2 text-sm text-red-800 dark:text-red-300">Use inconsistent or arbitrary spacing values (12px, 20px)</div>
    </div>
  </div>
</div>

### 2. Apply spacing hierarchically

Use smaller spacing values for related elements and larger values to separate distinct sections. This creates visual grouping that helps users understand the relationship between elements.

<div class="p-6 bg-[var(--color-bg-alt)] rounded-lg border border-[var(--color-border)] mt-6">
  <div class="mb-8">
    <h3 class="text-lg font-medium mb-4">Card Component</h3>
    <div class="bg-[var(--color-bg)] p-4 rounded-lg border border-[var(--color-border)]">
      <div class="mb-4">
        <h4 class="font-medium mb-2">Card Title</h4>
        <p class="text-sm text-[var(--color-text-muted)]">This is an example card with proper spacing hierarchy.</p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-[var(--color-primary)] rounded-full"></div>
          <span class="text-sm">Item 1</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-[var(--color-primary)] rounded-full"></div>
          <span class="text-sm">Item 2</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="text-sm">
    <ul class="list-disc pl-5 space-y-1">
      <li><strong>space-2 (8px):</strong> Between icon and text (closely related elements)</li>
      <li><strong>space-4 (16px):</strong> Between card content sections</li>
      <li><strong>space-8 (32px):</strong> Between cards (distinct elements)</li>
    </ul>
  </div>
</div>

### 3. Consider component density

Adjust spacing based on the desired density of your interface. High-density UIs (like dashboards or data tables) should use smaller spacing values, while marketing pages or content-focused pages can use larger spacing for readability.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
  <div>
    <div class="p-4 rounded-lg border border-[var(--color-border)] mb-2">
      <h4 class="font-medium mb-2">High Density UI</h4>
      <div class="space-y-1">
        <div class="flex justify-between p-2 bg-[var(--color-bg-alt)] rounded text-sm">
          <span>Item 1</span>
          <span>Value</span>
        </div>
        <div class="flex justify-between p-2 bg-[var(--color-bg-alt)] rounded text-sm">
          <span>Item 2</span>
          <span>Value</span>
        </div>
        <div class="flex justify-between p-2 bg-[var(--color-bg-alt)] rounded text-sm">
          <span>Item 3</span>
          <span>Value</span>
        </div>
      </div>
      <div class="mt-2 text-xs text-[var(--color-text-muted)]">Uses smaller spacing values (space-1, space-2)</div>
    </div>
  </div>
  
  <div>
    <div class="p-4 rounded-lg border border-[var(--color-border)] mb-2">
      <h4 class="font-medium mb-3">Content UI</h4>
      <div class="space-y-4">
        <p class="text-sm">This is an example of content-focused UI with more generous spacing.</p>
        <p class="text-sm">The additional whitespace improves readability and reduces cognitive load.</p>
      </div>
      <div class="mt-2 text-xs text-[var(--color-text-muted)]">Uses larger spacing values (space-3, space-4)</div>
    </div>
  </div>
</div>

### 4. Be responsive

Adjust spacing based on screen size. Consider using smaller spacing values on mobile devices and larger values on desktop to optimize for different viewport sizes.

<div class="eds-alert eds-alert-info mt-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Responsive Spacing</p>
      <p class="mt-1">Our design system utilizes Tailwind CSS utility classes for responsive spacing. For example, <code>class="mt-4 md:mt-6 lg:mt-8"</code> applies different spacing at different breakpoints.</p>
    </div>
  </div>
</div>

## Implementation

### CSS Variables

Our spacing scale is implemented using CSS variables:

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;  /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem;    /* 16px */
  --space-6: 1.5rem;  /* 24px */
  --space-8: 2rem;    /* 32px */
  --space-12: 3rem;   /* 48px */
  --space-16: 4rem;   /* 64px */
  --space-20: 5rem;   /* 80px */
  --space-24: 6rem;   /* 96px */
}
```

### Using Spacing in Components

When building components, use the spacing variables to ensure consistency:

```css
.card {
  padding: var(--space-4);
  margin-bottom: var(--space-6);
}

.card-content {
  margin-bottom: var(--space-4);
}

.card-item {
  margin-bottom: var(--space-2);
}
```

### Utility Classes

You can also use our utility classes for margin and padding, which follow the same spacing scale:

- `m-{size}` - Margin on all sides
- `mx-{size}` - Horizontal margin (left and right)
- `my-{size}` - Vertical margin (top and bottom)
- `mt-{size}`, `mr-{size}`, `mb-{size}`, `ml-{size}` - Margin top, right, bottom, left
- `p-{size}` - Padding on all sides
- `px-{size}` - Horizontal padding (left and right)
- `py-{size}` - Vertical padding (top and bottom)
- `pt-{size}`, `pr-{size}`, `pb-{size}`, `pl-{size}` - Padding top, right, bottom, left

Where `{size}` corresponds to the spacing scale values (0, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24).

## Related Resources

For more information on how to use spacing effectively in your designs:

- [Grid System](/design-system/foundations/grid-system/) - Learn how spacing relates to our grid system
- [Layout Components](/components/layout/) - Components that help with layout and spacing
- [Design Tokens](/resources/design-tokens/) - View all available design tokens, including spacing