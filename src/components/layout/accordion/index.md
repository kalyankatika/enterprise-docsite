---
layout: layouts/page.njk
title: Accordion
description: A vertically collapsible content container that helps organize and declutter interfaces
tags: 
  - layoutComponents
  - components
componentCategory: Layout
---

# Accordion

The Accordion component allows users to expand and collapse sections of content, helping to organize information and reduce visual clutter in interfaces. It's particularly useful for FAQ sections, settings panels, and detail views where users can progressively disclose information.

## Features

- **Accessible implementation** with proper ARIA attributes
- **Keyboard navigation** support for improved accessibility
- **Multiple styles** including bordered, borderless, and filled variants
- **Single or multi-expand** modes to control user interaction
- **Customizable icons** for the expand/collapse indicators
- **Animated transitions** with customizable duration
- **Event hooks** for expand/collapse state changes

## Basic Usage

```html
<div class="eds-accordion">
  <div class="eds-accordion-item">
    <h3 class="eds-accordion-header">
      <button class="eds-accordion-trigger" aria-expanded="false">
        Section Title
        <svg class="eds-accordion-icon" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
    </h3>
    <div class="eds-accordion-content" hidden>
      <div class="eds-accordion-body">
        Content goes here...
      </div>
    </div>
  </div>
</div>
```

## Variants

### Default (Bordered)

The standard accordion with borders separating each item:

<div class="bg-white p-4 rounded border my-6">
  <div class="eds-accordion">
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">First Section</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        This is the content for the first section of the accordion. It can contain any HTML content including text, images, lists, or other components.
      </div>
    </div>
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">Second Section</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        This is the content for the second section of the accordion.
      </div>
    </div>
  </div>
</div>

### Borderless

A cleaner variant with no borders between items:

<div class="bg-white p-4 rounded border my-6">
  <div class="eds-accordion eds-accordion-borderless">
    <div class="mb-2 bg-gray-50 rounded">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center">
        <h3 class="font-medium">First Section</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3">
        This is the content for the first section of the accordion.
      </div>
    </div>
    <div class="mb-2 bg-gray-50 rounded">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center">
        <h3 class="font-medium">Second Section</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3">
        This is the content for the second section of the accordion.
      </div>
    </div>
  </div>
</div>

### Filled

A variant with colored backgrounds for the headers:

<div class="bg-white p-4 rounded border my-6">
  <div class="eds-accordion eds-accordion-filled">
    <div class="mb-2 border rounded overflow-hidden">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-green-600 text-white">
        <h3 class="font-medium">First Section</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3">
        This is the content for the first section of the accordion.
      </div>
    </div>
    <div class="mb-2 border rounded overflow-hidden">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-green-600 text-white">
        <h3 class="font-medium">Second Section</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3">
        This is the content for the second section of the accordion.
      </div>
    </div>
  </div>
</div>

## Properties

| Property            | Type      | Default     | Description                                       |
|---------------------|-----------|-------------|---------------------------------------------------|
| `multiExpand`       | Boolean   | `false`     | Allow multiple sections to be expanded at once    |
| `defaultExpanded`   | Number[]  | `[]`        | Indices of sections to expand by default          |
| `animationDuration` | Number    | `300`       | Duration of expand/collapse animation in ms       |
| `iconPosition`      | String    | `"end"`     | Position of the indicator icon: `"start"` or `"end"` |
| `variant`           | String    | `"default"` | Visual variant: `"default"`, `"borderless"`, or `"filled"` |
| `expandIcon`        | Component | `ChevronDown` | Custom icon for the expanded state             |
| `collapseIcon`      | Component | `ChevronUp` | Custom icon for the collapsed state              |

## Events

| Event Name          | Description                                       | Event Detail              |
|---------------------|---------------------------------------------------|---------------------------|
| `expand`            | Fired when a section is expanded                  | `{ index, content }`      |
| `collapse`          | Fired when a section is collapsed                 | `{ index, content }`      |
| `change`            | Fired when any section's state changes            | `{ expanded, index }`     |

## Accessibility

The accordion component follows the [WAI-ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) for maximum accessibility:

- Accordion headers use `<button>` elements for native keyboard support
- Proper `aria-expanded` and `aria-controls` attributes
- Support for keyboard navigation:
  - <kbd>Enter</kbd> or <kbd>Space</kbd>: Toggle the focused accordion section
  - <kbd>Down Arrow</kbd>: Move focus to the next accordion header
  - <kbd>Up Arrow</kbd>: Move focus to the previous accordion header
  - <kbd>Home</kbd>: Move focus to the first accordion header
  - <kbd>End</kbd>: Move focus to the last accordion header

For a complete accessibility guide, visit the [Accordion Accessibility](/components/layout/accordion/accessibility) page.

## Code Examples

### Basic Example

```jsx
// React example
import { Accordion, AccordionItem } from '@eds/react';

function MyComponent() {
  return (
    <Accordion>
      <AccordionItem title="Section 1">
        Content for the first section
      </AccordionItem>
      <AccordionItem title="Section 2">
        Content for the second section
      </AccordionItem>
      <AccordionItem title="Section 3">
        Content for the third section
      </AccordionItem>
    </Accordion>
  );
}
```

### Multiple Expanded Sections

```jsx
// React example with multiple expanded sections
import { Accordion, AccordionItem } from '@eds/react';

function MyComponent() {
  return (
    <Accordion multiExpand defaultExpanded={[0, 2]}>
      <AccordionItem title="Section 1">
        This section is expanded by default
      </AccordionItem>
      <AccordionItem title="Section 2">
        This section is collapsed by default
      </AccordionItem>
      <AccordionItem title="Section 3">
        This section is expanded by default
      </AccordionItem>
    </Accordion>
  );
}
```

### Custom Icons

```jsx
// React example with custom icons
import { Accordion, AccordionItem } from '@eds/react';
import { PlusIcon, MinusIcon } from '@eds/icons';

function MyComponent() {
  return (
    <Accordion 
      expandIcon={<PlusIcon />}
      collapseIcon={<MinusIcon />}
      iconPosition="start"
    >
      <AccordionItem title="Section 1">
        Content with custom icons
      </AccordionItem>
      <AccordionItem title="Section 2">
        More content with custom icons
      </AccordionItem>
    </Accordion>
  );
}
```

## Best Practices

- Use accordions to organize related information into digestible sections
- Keep headers short and descriptive, focusing on the key content
- Avoid nesting accordions more than one level deep
- For mobile views, consider using accordions to conserve vertical space
- Ensure the expand/collapse affordance is clear to users
- Consider defaulting to at least one expanded section when the accordion first renders

## Related Components

- [Card](/components/layout/card) - Static container for content grouping
- [Tabs](/components/navigation/tabs) - Horizontal organization of content
- [Disclosure](/components/layout/disclosure) - Simple show/hide content toggle

## Learn More

- [Accordion Accessibility](/components/layout/accordion/accessibility)
- [Accordion Code Examples](/components/layout/accordion/code)
- [Accordion Usage Examples](/components/layout/accordion/examples)