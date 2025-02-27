---
layout: page
title: Spacing
description: Spacing guidelines and scale for the Enterprise Design System
---

# Spacing

Consistent spacing is essential for creating balanced, harmonious interfaces. Our spacing system provides a standardized scale that helps maintain visual rhythm and relationship between elements.

## Spacing Scale

Our spacing scale is built on a base unit of 4px (0.25rem), which allows for flexibility while ensuring consistent increments. This creates a harmonious visual rhythm throughout the interface.

<div class="border border-[var(--color-border)] rounded-lg overflow-hidden mt-6">
  <table class="w-full">
    <thead>
      <tr class="bg-[var(--color-bg-alt)]">
        <th class="py-3 px-4 text-left">Token</th>
        <th class="py-3 px-4 text-left">Value</th>
        <th class="py-3 px-4 text-left">Pixels</th>
        <th class="py-3 px-4 text-left">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-0</td>
        <td class="py-4 px-4">0</td>
        <td class="py-4 px-4">0px</td>
        <td class="py-4 px-4">
          <div class="w-0 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-1</td>
        <td class="py-4 px-4">0.25rem</td>
        <td class="py-4 px-4">4px</td>
        <td class="py-4 px-4">
          <div class="w-4 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-2</td>
        <td class="py-4 px-4">0.5rem</td>
        <td class="py-4 px-4">8px</td>
        <td class="py-4 px-4">
          <div class="w-8 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-3</td>
        <td class="py-4 px-4">0.75rem</td>
        <td class="py-4 px-4">12px</td>
        <td class="py-4 px-4">
          <div class="w-12 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-4</td>
        <td class="py-4 px-4">1rem</td>
        <td class="py-4 px-4">16px</td>
        <td class="py-4 px-4">
          <div class="w-16 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-6</td>
        <td class="py-4 px-4">1.5rem</td>
        <td class="py-4 px-4">24px</td>
        <td class="py-4 px-4">
          <div class="w-24 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-8</td>
        <td class="py-4 px-4">2rem</td>
        <td class="py-4 px-4">32px</td>
        <td class="py-4 px-4">
          <div class="w-32 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-12</td>
        <td class="py-4 px-4">3rem</td>
        <td class="py-4 px-4">48px</td>
        <td class="py-4 px-4">
          <div class="w-48 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-16</td>
        <td class="py-4 px-4">4rem</td>
        <td class="py-4 px-4">64px</td>
        <td class="py-4 px-4">
          <div class="w-64 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
      <tr class="border-t border-[var(--color-border)]">
        <td class="py-4 px-4 font-mono text-sm">--eds-spacing-24</td>
        <td class="py-4 px-4">6rem</td>
        <td class="py-4 px-4">96px</td>
        <td class="py-4 px-4">
          <div class="w-96 h-4 bg-[var(--color-primary)] rounded"></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Usage Guidelines

### Component Spacing

When designing components, use consistent spacing to create visual relationships between elements. Here's a guide for common spacing applications:

<div class="space-y-8 mt-6">
  <div class="eds-card">
    <h3 class="text-xl font-semibold mb-4">Internal Component Spacing</h3>
    
    <div class="border border-[var(--color-border)] p-6 rounded-lg bg-[var(--color-bg-alt)] mb-4">
      <div class="flex flex-col space-y-2 max-w-md mx-auto">
        <div class="flex items-center p-2 border border-dashed border-[var(--color-primary)] rounded">
          <div class="w-8 h-8 bg-[var(--color-primary)] rounded flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="ml-3">Icon and Label</span>
          <span class="text-xs text-[var(--color-primary)] ml-2">(--eds-spacing-3 or 12px)</span>
        </div>
        
        <div class="flex items-center justify-between p-2 border border-dashed border-[var(--color-primary)] rounded">
          <span>Label</span>
          <div class="w-10 h-5 bg-[var(--color-primary)] rounded-full"></div>
          <span class="text-xs text-[var(--color-primary)]">(--eds-spacing-4 or 16px)</span>
        </div>
        
        <div class="p-2 border border-dashed border-[var(--color-primary)] rounded">
          <div class="mb-2">Form Label</div>
          <div class="h-10 bg-[var(--color-bg)] rounded border border-[var(--color-border)]"></div>
          <div class="mt-1 text-xs text-[var(--color-text-muted)]">Helper text</div>
          <span class="text-xs text-[var(--color-primary)] mt-2 block">(--eds-spacing-2 or 8px between label and input)</span>
          <span class="text-xs text-[var(--color-primary)] block">(--eds-spacing-1 or 4px between input and helper)</span>
        </div>
      </div>
    </div>
    
    <div class="text-[var(--color-text-muted)]">
      <p>For internal component spacing, use smaller spacing values to create cohesion between related elements:</p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>Tight relationships (icon to label): 4-8px (--eds-spacing-1 to --eds-spacing-2)</li>
        <li>Medium relationships (label to input): 8-12px (--eds-spacing-2 to --eds-spacing-3)</li>
        <li>Content grouping: 16px (--eds-spacing-4)</li>
      </ul>
    </div>
  </div>
  
  <div class="eds-card">
    <h3 class="text-xl font-semibold mb-4">Layout Spacing</h3>
    
    <div class="border border-[var(--color-border)] p-6 rounded-lg bg-[var(--color-bg-alt)] mb-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-[var(--color-bg)] p-4 rounded border border-[var(--color-border)]">
          <div class="h-24 bg-[var(--color-primary)] bg-opacity-20 rounded flex items-center justify-center">
            Card Content
          </div>
        </div>
        <div class="bg-[var(--color-bg)] p-4 rounded border border-[var(--color-border)]">
          <div class="h-24 bg-[var(--color-primary)] bg-opacity-20 rounded flex items-center justify-center">
            Card Content
          </div>
        </div>
      </div>
      <div class="mt-4 text-center text-sm text-[var(--color-primary)]">
        Grid gap: --eds-spacing-4 or 16px
      </div>
    </div>
    
    <div class="text-[var(--color-text-muted)]">
      <p>For layout spacing, use larger spacing values to create clear separation between unrelated elements:</p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>Adjacent card components: 16-24px (--eds-spacing-4 to --eds-spacing-6)</li>
        <li>Section margins: 32-48px (--eds-spacing-8 to --eds-spacing-12)</li>
        <li>Page padding: 24-32px (--eds-spacing-6 to --eds-spacing-8)</li>
        <li>Major section dividers: 64-96px (--eds-spacing-16 to --eds-spacing-24)</li>
      </ul>
    </div>
  </div>
</div>

### Consistent Spacing Patterns

Use consistent spacing patterns based on the following guidelines:

<div class="eds-alert eds-alert-info mt-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Spacing Guidelines</p>
      <ul class="text-sm mt-2 space-y-1">
        <li>Use smaller spacing for related elements (--eds-spacing-1 to --eds-spacing-4)</li>
        <li>Use larger spacing for unrelated elements (--eds-spacing-6 to --eds-spacing-16)</li>
        <li>Be consistent with spacing choices for similar UI patterns</li>
        <li>Spacing should increase proportionally with the size of the elements</li>
        <li>Use the spacing scale values rather than arbitrary values</li>
      </ul>
    </div>
  </div>
</div>

## Responsive Spacing

Our spacing system adjusts automatically for different screen sizes to maintain proper proportions and usability.

<div class="eds-card mt-6">
  <h3 class="text-xl font-semibold mb-4">Responsive Scaling</h3>
  
  <div class="space-y-4">
    <div class="p-4 border border-[var(--color-border)] rounded-lg">
      <p class="font-medium">Desktop (Large Screens)</p>
      <p class="text-[var(--color-text-muted)] mt-1">Use the standard spacing scale as defined.</p>
    </div>
    
    <div class="p-4 border border-[var(--color-border)] rounded-lg">
      <p class="font-medium">Tablet (Medium Screens)</p>
      <p class="text-[var(--color-text-muted)] mt-1">Reduce larger spacings by 1 scale step (e.g., --eds-spacing-16 becomes --eds-spacing-12).</p>
    </div>
    
    <div class="p-4 border border-[var(--color-border)] rounded-lg">
      <p class="font-medium">Mobile (Small Screens)</p>
      <p class="text-[var(--color-text-muted)] mt-1">Reduce larger spacings by 2 scale steps (e.g., --eds-spacing-16 becomes --eds-spacing-8).</p>
      <p class="text-[var(--color-text-muted)] mt-1">Maintain smaller spacings (--eds-spacing-1 to --eds-spacing-3) to preserve readability and touch targets.</p>
    </div>
  </div>
</div>

## Technical Implementation

### CSS Variables

Our spacing system is implemented using CSS variables that can be used across your application:

```css
:root {
  /* Spacing scale */
  --eds-spacing-0: 0;
  --eds-spacing-1: 0.25rem;  /* 4px */
  --eds-spacing-2: 0.5rem;   /* 8px */
  --eds-spacing-3: 0.75rem;  /* 12px */
  --eds-spacing-4: 1rem;     /* 16px */
  --eds-spacing-6: 1.5rem;   /* 24px */
  --eds-spacing-8: 2rem;     /* 32px */
  --eds-spacing-12: 3rem;    /* 48px */
  --eds-spacing-16: 4rem;    /* 64px */
  --eds-spacing-24: 6rem;    /* 96px */
}
```

### Tailwind CSS

When using our design system with Tailwind CSS, the following classes map to our spacing system:

- Padding: `p-0`, `p-1`, `p-2`, `p-3`, `p-4`, `p-6`, `p-8`, `p-12`, `p-16`, `p-24`
- Margin: `m-0`, `m-1`, `m-2`, `m-3`, `m-4`, `m-6`, `m-8`, `m-12`, `m-16`, `m-24`
- Gap: `gap-0`, `gap-1`, `gap-2`, `gap-3`, `gap-4`, `gap-6`, `gap-8`, `gap-12`, `gap-16`, `gap-24`

You can also use directional variants like `pt-` (padding-top), `mr-` (margin-right), etc.

## Related Resources

- [Typography](/design-system/foundations/typography/) - Typography guidelines and specifications
- [Grid System](/design-system/foundations/grid-system/) - Grid and layout guidelines
- [Design Tokens](/resources/design-tokens/) - Technical implementation of our design system