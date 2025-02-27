---
layout: layouts/page.njk
title: Accordion Code Examples
description: Implementation examples for the Accordion component across various frameworks
tags: 
  - layoutComponents
  - components
  - code
componentCategory: Layout
---

# Accordion Code Examples

This page provides implementation examples for the Accordion component in various frameworks and technologies.

## HTML/CSS Implementation

### Basic HTML Structure

```html
<div class="eds-accordion">
  <div class="eds-accordion-item">
    <h3 class="eds-accordion-header">
      <button 
        class="eds-accordion-trigger" 
        aria-expanded="false" 
        aria-controls="accordion-content-1"
      >
        Section Title
        <svg class="eds-accordion-icon" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
    </h3>
    <div 
      id="accordion-content-1" 
      class="eds-accordion-content" 
      hidden
    >
      <div class="eds-accordion-body">
        Content goes here...
      </div>
    </div>
  </div>
  
  <!-- Additional accordion items -->
  <div class="eds-accordion-item">
    <h3 class="eds-accordion-header">
      <button 
        class="eds-accordion-trigger" 
        aria-expanded="false" 
        aria-controls="accordion-content-2"
      >
        Another Section
        <svg class="eds-accordion-icon" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
    </h3>
    <div 
      id="accordion-content-2" 
      class="eds-accordion-content" 
      hidden
    >
      <div class="eds-accordion-body">
        More content here...
      </div>
    </div>
  </div>
</div>
```

### Vanilla JavaScript Implementation

```javascript
// Select all accordion headers
const accordionTriggers = document.querySelectorAll('.eds-accordion-trigger');

// Add click event listeners
accordionTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    // Get the current state
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    
    // Toggle the state
    trigger.setAttribute('aria-expanded', !isExpanded);
    
    // Get the content panel
    const contentId = trigger.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    
    // Toggle the hidden attribute
    if (isExpanded) {
      content.setAttribute('hidden', '');
    } else {
      content.removeAttribute('hidden');
    }
  });
});

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
  const trigger = event.target.closest('.eds-accordion-trigger');
  if (!trigger) return;
  
  const accordionItem = trigger.closest('.eds-accordion-item');
  const accordion = accordionItem.closest('.eds-accordion');
  const allTriggers = Array.from(accordion.querySelectorAll('.eds-accordion-trigger'));
  const currentIndex = allTriggers.indexOf(trigger);
  
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      if (currentIndex < allTriggers.length - 1) {
        allTriggers[currentIndex + 1].focus();
      }
      break;
    case 'ArrowUp':
      event.preventDefault();
      if (currentIndex > 0) {
        allTriggers[currentIndex - 1].focus();
      }
      break;
    case 'Home':
      event.preventDefault();
      allTriggers[0].focus();
      break;
    case 'End':
      event.preventDefault();
      allTriggers[allTriggers.length - 1].focus();
      break;
  }
});
```

### CSS Styling

```css
/* Base accordion styles */
.eds-accordion {
  width: 100%;
}

.eds-accordion-item {
  margin-bottom: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  overflow: hidden;
}

.eds-accordion-header {
  margin: 0;
}

.eds-accordion-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #f8fafc;
  color: #1e293b;
  font-weight: 500;
  text-align: left;
  border: none;
  cursor: pointer;
}

.eds-accordion-trigger:hover {
  background-color: #f1f5f9;
}

.eds-accordion-trigger:focus {
  outline: 2px solid #3b82f6;
  outline-offset: -2px;
}

.eds-accordion-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.eds-accordion-trigger[aria-expanded="true"] .eds-accordion-icon {
  transform: rotate(180deg);
}

.eds-accordion-content {
  border-top: 1px solid #e2e8f0;
}

.eds-accordion-body {
  padding: 1rem;
}

/* Animation for the content panel */
.eds-accordion-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.eds-accordion-content:not([hidden]) {
  max-height: 1000px; /* Arbitrary large value */
}

/* Variant: Borderless */
.eds-accordion-borderless .eds-accordion-item {
  border: none;
  margin-bottom: 0.75rem;
}

.eds-accordion-borderless .eds-accordion-trigger {
  background-color: #f1f5f9;
  border-radius: 0.375rem;
}

.eds-accordion-borderless .eds-accordion-content {
  border-top: none;
  padding: 0.5rem 1rem;
}

/* Variant: Filled */
.eds-accordion-filled .eds-accordion-trigger {
  background-color: #10b981;
  color: white;
}

.eds-accordion-filled .eds-accordion-trigger:hover {
  background-color: #059669;
}

.eds-accordion-filled .eds-accordion-trigger:focus {
  outline-color: white;
}
```

## React Implementation

### React Component

```jsx
import React, { useState } from 'react';
import './accordion.css';

// Accordion Item Component
function AccordionItem({ title, children, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentId = `accordion-content-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="eds-accordion-item">
      <h3 className="eds-accordion-header">
        <button 
          className="eds-accordion-trigger"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="eds-accordion-title">{title}</span>
          <svg 
            className="eds-accordion-icon" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </button>
      </h3>
      <div 
        id={contentId}
        className="eds-accordion-content"
        hidden={!isExpanded}
      >
        <div className="eds-accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
}

// Main Accordion Component
function Accordion({ children, variant = 'default', multiExpand = false }) {
  let variantClass = '';
  
  if (variant === 'borderless') {
    variantClass = 'eds-accordion-borderless';
  } else if (variant === 'filled') {
    variantClass = 'eds-accordion-filled';
  }
  
  return (
    <div className={`eds-accordion ${variantClass}`}>
      {React.Children.map(children, child => {
        // If multiExpand is false, we need to handle expanding/collapsing logic
        if (!multiExpand) {
          return React.cloneElement(child, {
            // Additional props for managing single expansion
          });
        }
        return child;
      })}
    </div>
  );
}

export { Accordion, AccordionItem };
```

### Usage Example

```jsx
import { Accordion, AccordionItem } from './Accordion';

function MyComponent() {
  return (
    <div>
      <h2>Accordion Example</h2>
      
      <Accordion>
        <AccordionItem title="First Section" defaultExpanded={true}>
          <p>This is the content for the first section.</p>
          <p>You can add any content here.</p>
        </AccordionItem>
        
        <AccordionItem title="Second Section">
          <p>Content for the second section.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </AccordionItem>
        
        <AccordionItem title="Third Section">
          <p>Content for the third section.</p>
        </AccordionItem>
      </Accordion>
      
      <h2>Borderless Variant</h2>
      <Accordion variant="borderless" multiExpand={true}>
        <AccordionItem title="Section A">
          Content for Section A
        </AccordionItem>
        <AccordionItem title="Section B">
          Content for Section B
        </AccordionItem>
      </Accordion>
    </div>
  );
}
```

## Vue Implementation

```vue
<template>
  <div class="eds-accordion" :class="variantClass">
    <div 
      v-for="(item, index) in items"
      :key="index"
      class="eds-accordion-item"
    >
      <h3 class="eds-accordion-header">
        <button 
          class="eds-accordion-trigger"
          :aria-expanded="expandedItems.includes(index)"
          :aria-controls="`accordion-content-${index}`"
          @click="toggleItem(index)"
        >
          <span class="eds-accordion-title">{{ item.title }}</span>
          <svg 
            class="eds-accordion-icon" 
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </button>
      </h3>
      <div 
        :id="`accordion-content-${index}`"
        class="eds-accordion-content"
        :hidden="!expandedItems.includes(index)"
      >
        <div class="eds-accordion-body">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EdsAccordion',
  props: {
    items: {
      type: Array,
      required: true
    },
    variant: {
      type: String,
      default: 'default',
      validator: value => ['default', 'borderless', 'filled'].includes(value)
    },
    multiExpand: {
      type: Boolean,
      default: false
    },
    defaultExpanded: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      expandedItems: [...this.defaultExpanded]
    };
  },
  computed: {
    variantClass() {
      return {
        'eds-accordion-borderless': this.variant === 'borderless',
        'eds-accordion-filled': this.variant === 'filled'
      };
    }
  },
  methods: {
    toggleItem(index) {
      if (this.expandedItems.includes(index)) {
        // Collapse the item
        this.expandedItems = this.expandedItems.filter(i => i !== index);
        this.$emit('collapse', { index, content: this.items[index] });
      } else {
        // Expand the item
        if (!this.multiExpand) {
          // If multiExpand is false, collapse all other items
          this.expandedItems = [];
        }
        this.expandedItems.push(index);
        this.$emit('expand', { index, content: this.items[index] });
      }
      this.$emit('change', { expanded: this.expandedItems.includes(index), index });
    }
  }
};
</script>

<style>
/* Include the CSS styles from the CSS section above */
</style>
```

## Angular Implementation

```typescript
// accordion.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface AccordionItem {
  title: string;
  content: string;
  expanded?: boolean;
}

@Component({
  selector: 'eds-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  @Input() variant: 'default' | 'borderless' | 'filled' = 'default';
  @Input() multiExpand: boolean = false;
  
  @Output() expand = new EventEmitter<{index: number, item: AccordionItem}>();
  @Output() collapse = new EventEmitter<{index: number, item: AccordionItem}>();
  @Output() change = new EventEmitter<{expanded: boolean, index: number, item: AccordionItem}>();
  
  toggleItem(index: number): void {
    const item = this.items[index];
    
    if (item.expanded) {
      // Collapse the item
      item.expanded = false;
      this.collapse.emit({ index, item });
    } else {
      // Expand the item
      if (!this.multiExpand) {
        // If multiExpand is false, collapse all other items
        this.items.forEach((otherItem, i) => {
          if (i !== index && otherItem.expanded) {
            otherItem.expanded = false;
            this.collapse.emit({ index: i, item: otherItem });
          }
        });
      }
      
      item.expanded = true;
      this.expand.emit({ index, item });
    }
    
    this.change.emit({ expanded: item.expanded, index, item });
  }
  
  getVariantClass(): string {
    switch (this.variant) {
      case 'borderless':
        return 'eds-accordion-borderless';
      case 'filled':
        return 'eds-accordion-filled';
      default:
        return '';
    }
  }
}
```

```html
<!-- accordion.component.html -->
<div class="eds-accordion" [ngClass]="getVariantClass()">
  <div 
    *ngFor="let item of items; let i = index" 
    class="eds-accordion-item"
  >
    <h3 class="eds-accordion-header">
      <button 
        class="eds-accordion-trigger"
        [attr.aria-expanded]="item.expanded"
        [attr.aria-controls]="'accordion-content-' + i"
        (click)="toggleItem(i)"
      >
        <span class="eds-accordion-title">{{ item.title }}</span>
        <svg 
          class="eds-accordion-icon" 
          viewBox="0 0 24 24" 
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
    </h3>
    <div 
      [id]="'accordion-content-' + i"
      class="eds-accordion-content"
      [hidden]="!item.expanded"
    >
      <div class="eds-accordion-body">
        <ng-container *ngIf="!item.contentTemplate">
          {{ item.content }}
        </ng-container>
        <ng-container *ngIf="item.contentTemplate">
          <ng-container *ngTemplateOutlet="item.contentTemplate"></ng-container>
        </ng-container>
      </div>
    </div>
  </div>
</div>
```

## Additional Resources

- [Complete accordion.css file](/components/layout/accordion/assets/accordion.css)
- [Accordion TypeScript definitions](/components/layout/accordion/assets/accordion.d.ts)
- [Accordion test examples](/components/layout/accordion/assets/accordion.test.js)