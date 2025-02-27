---
layout: page
title: Typography
description: Typography guidelines and specifications for the Enterprise Design System
---

# Typography

Typography plays a crucial role in creating clear, readable, and hierarchical interfaces. Our typography system provides guidelines for using fonts consistently across all enterprise applications.

## Font Families

The Enterprise Design System uses a combination of sans-serif and monospace fonts to create a professional and readable interface.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
  <div class="eds-card">
    <h3 class="text-xl font-semibold mb-4">Primary Font: Inter</h3>
    <p class="font-eds-sans text-4xl mb-2">Aa Bb Cc Dd Ee</p>
    <p class="font-eds-sans text-xl mb-6">0123456789!@#$%^&*()</p>
    <p class="text-[var(--color-text-muted)]">Inter is used for all primary text, including headings, body text, and UI elements. It provides excellent readability at various sizes and weights.</p>
  </div>
  
  <div class="eds-card">
    <h3 class="text-xl font-semibold mb-4">Monospace: IBM Plex Mono</h3>
    <p class="font-eds-mono text-4xl mb-2">Aa Bb Cc Dd Ee</p>
    <p class="font-eds-mono text-xl mb-6">0123456789!@#$%^&*()</p>
    <p class="text-[var(--color-text-muted)]">IBM Plex Mono is used for code snippets, technical content, and data-focused UI elements where a monospaced font enhances readability.</p>
  </div>
</div>

## Type Scale

Our type scale is designed to create clear hierarchy while maintaining readability across different screen sizes.

<div class="space-y-8 mt-6">
  <div class="border border-[var(--color-border)] rounded-lg overflow-hidden">
    <table class="w-full">
      <thead>
        <tr class="bg-[var(--color-bg-alt)]">
          <th class="py-3 px-4 text-left">Name</th>
          <th class="py-3 px-4 text-left">Size</th>
          <th class="py-3 px-4 text-left">Line Height</th>
          <th class="py-3 px-4 text-left">Weight</th>
          <th class="py-3 px-4 text-left">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Display</td>
          <td class="py-4 px-4">36px (2.25rem)</td>
          <td class="py-4 px-4">1.2</td>
          <td class="py-4 px-4">700</td>
          <td class="py-4 px-4"><span class="text-4xl font-bold">Display</span></td>
        </tr>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Heading 1</td>
          <td class="py-4 px-4">30px (1.875rem)</td>
          <td class="py-4 px-4">1.25</td>
          <td class="py-4 px-4">700</td>
          <td class="py-4 px-4"><span class="text-3xl font-bold">Heading 1</span></td>
        </tr>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Heading 2</td>
          <td class="py-4 px-4">24px (1.5rem)</td>
          <td class="py-4 px-4">1.3</td>
          <td class="py-4 px-4">600</td>
          <td class="py-4 px-4"><span class="text-2xl font-semibold">Heading 2</span></td>
        </tr>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Heading 3</td>
          <td class="py-4 px-4">20px (1.25rem)</td>
          <td class="py-4 px-4">1.4</td>
          <td class="py-4 px-4">600</td>
          <td class="py-4 px-4"><span class="text-xl font-semibold">Heading 3</span></td>
        </tr>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Heading 4</td>
          <td class="py-4 px-4">18px (1.125rem)</td>
          <td class="py-4 px-4">1.4</td>
          <td class="py-4 px-4">600</td>
          <td class="py-4 px-4"><span class="text-lg font-semibold">Heading 4</span></td>
        </tr>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Body</td>
          <td class="py-4 px-4">16px (1rem)</td>
          <td class="py-4 px-4">1.5</td>
          <td class="py-4 px-4">400</td>
          <td class="py-4 px-4"><span class="text-base">Body text</span></td>
        </tr>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Small</td>
          <td class="py-4 px-4">14px (0.875rem)</td>
          <td class="py-4 px-4">1.5</td>
          <td class="py-4 px-4">400</td>
          <td class="py-4 px-4"><span class="text-sm">Small text</span></td>
        </tr>
        <tr class="border-t border-[var(--color-border)]">
          <td class="py-4 px-4">Caption</td>
          <td class="py-4 px-4">12px (0.75rem)</td>
          <td class="py-4 px-4">1.5</td>
          <td class="py-4 px-4">400</td>
          <td class="py-4 px-4"><span class="text-xs">Caption text</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Font Weights

We use a range of font weights to create hierarchy and emphasis in our interfaces.

<div class="space-y-4 mt-6">
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <p class="font-light text-xl mb-1">Font Light (300)</p>
    <p class="text-[var(--color-text-muted)]">Used sparingly for large display text.</p>
  </div>
  
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <p class="font-normal text-xl mb-1">Font Regular (400)</p>
    <p class="text-[var(--color-text-muted)]">Default weight for body text and most UI elements.</p>
  </div>
  
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <p class="font-medium text-xl mb-1">Font Medium (500)</p>
    <p class="text-[var(--color-text-muted)]">Used for emphasis and importance within body text.</p>
  </div>
  
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <p class="font-semibold text-xl mb-1">Font Semibold (600)</p>
    <p class="text-[var(--color-text-muted)]">Used for subheadings and important UI elements.</p>
  </div>
  
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <p class="font-bold text-xl mb-1">Font Bold (700)</p>
    <p class="text-[var(--color-text-muted)]">Used for headings and primary actions.</p>
  </div>
</div>

## Usage Guidelines

### Hierarchy

Create clear hierarchies using a combination of size, weight, and color. Limit the number of type styles on a single screen to maintain visual order.

<div class="eds-card mt-6">
  <h2 class="text-2xl font-semibold mb-2">Page Title</h2>
  <h3 class="text-xl font-medium mb-4 text-[var(--color-text-muted)]">Page subtitle or description</h3>
  
  <h4 class="text-lg font-semibold mt-6 mb-2">Section Heading</h4>
  <p class="mb-4">This is regular body text. It should be used for the main content of your interface. Keep paragraphs concise and focused on a single idea to improve readability.</p>
  
  <h5 class="text-base font-semibold mt-6 mb-2">Subsection Heading</h5>
  <p class="mb-2">Another paragraph of body text showing the hierarchy in action.</p>
  <p class="text-sm text-[var(--color-text-muted)]">This is small text, used for secondary information, captions, or helper text.</p>
</div>

### Responsive Typography

Our typography system is designed to work across all screen sizes. Font sizes automatically adjust for different viewports to maintain readability.

<div class="eds-alert eds-alert-info mt-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Responsive Typography</p>
      <p class="text-sm">Our typography scales down proportionally on mobile devices to maintain readability while preserving hierarchy. No additional code is required to support this behavior.</p>
    </div>
  </div>
</div>

### Accessibility

Follow these guidelines to ensure typography is accessible to all users:

- Maintain a minimum font size of 14px (0.875rem) for body text.
- Ensure sufficient color contrast between text and its background.
- Avoid using font weight as the only visual differentiator.
- Don't use all caps for lengthy text blocks.
- Keep line lengths between 60-80 characters for optimal readability.

## Technical Implementation

### CSS Variables

Our typography system is implemented using CSS variables that can be used across your application:

```css
:root {
  /* Font families */
  --eds-font-sans: 'Inter', system-ui, sans-serif;
  --eds-font-mono: 'IBM Plex Mono', monospace;
  
  /* Font sizes */
  --eds-font-size-xs: 0.75rem;    /* 12px */
  --eds-font-size-sm: 0.875rem;   /* 14px */
  --eds-font-size-base: 1rem;     /* 16px */
  --eds-font-size-lg: 1.125rem;   /* 18px */
  --eds-font-size-xl: 1.25rem;    /* 20px */
  --eds-font-size-2xl: 1.5rem;    /* 24px */
  --eds-font-size-3xl: 1.875rem;  /* 30px */
  --eds-font-size-4xl: 2.25rem;   /* 36px */
  
  /* Line heights */
  --eds-line-height-tight: 1.2;
  --eds-line-height-snug: 1.25;
  --eds-line-height-normal: 1.4;
  --eds-line-height-relaxed: 1.5;
  --eds-line-height-loose: 1.75;
}
```

### Tailwind CSS

When using our design system with Tailwind CSS, the following classes map to our typography system:

- Font families: `font-eds-sans`, `font-eds-mono`
- Font sizes: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`
- Font weights: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- Line heights: `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`

## Related Resources

- [Colors](/design-system/foundations/colors/) - Color guidelines and specifications
- [Spacing](/design-system/foundations/spacing/) - Spacing guidelines and scale
- [Design Tokens](/resources/design-tokens/) - Technical implementation of our design system
- [Accessibility](/design-system/accessibility/) - Accessibility guidelines and best practices