---
layout: page
title: Spacing
description: Standard spacing values used for margins, padding, and layout.
eleventyNavigation:
  key: Spacing
  parent: Foundations
  order: 3
---

# Spacing System

Our spacing system provides a consistent approach to margins, padding, and layout spacing across all products. Using a standardized spacing scale helps create visual rhythm and consistency throughout the interface.

## Spacing Scale

Our spacing scale is built on a base unit of 0.25rem (4px) and follows a progression that provides appropriate options for various design needs.

<div class="spacing-scale">
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 0.25rem; height: 0.25rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">1 (0.25rem)</div>
      <div class="spacing-value">4px</div>
      <div class="spacing-use">Used for very tight spacing and fine details</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 0.5rem; height: 0.5rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">2 (0.5rem)</div>
      <div class="spacing-value">8px</div>
      <div class="spacing-use">Used for tight spacing between related elements</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 0.75rem; height: 0.75rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">3 (0.75rem)</div>
      <div class="spacing-value">12px</div>
      <div class="spacing-use">Used for spacing between closely related elements</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 1rem; height: 1rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">4 (1rem)</div>
      <div class="spacing-value">16px</div>
      <div class="spacing-use">Base spacing unit used for general element spacing</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 1.25rem; height: 1.25rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">5 (1.25rem)</div>
      <div class="spacing-value">20px</div>
      <div class="spacing-use">Used for medium spacing between elements</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 1.5rem; height: 1.5rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">6 (1.5rem)</div>
      <div class="spacing-value">24px</div>
      <div class="spacing-use">Used for standard spacing between component groups</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 2rem; height: 2rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">8 (2rem)</div>
      <div class="spacing-value">32px</div>
      <div class="spacing-use">Used for spacing between distinct sections</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 2.5rem; height: 2.5rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">10 (2.5rem)</div>
      <div class="spacing-value">40px</div>
      <div class="spacing-use">Used for large spacing between major sections</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 3rem; height: 3rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">12 (3rem)</div>
      <div class="spacing-value">48px</div>
      <div class="spacing-use">Used for very large spacing between major sections</div>
    </div>
  </div>
  
  <div class="spacing-item">
    <div class="spacing-visual" style="width: 4rem; height: 4rem;"></div>
    <div class="spacing-details">
      <div class="spacing-name">16 (4rem)</div>
      <div class="spacing-value">64px</div>
      <div class="spacing-use">Used for extra large spacing, typically for page sections</div>
    </div>
  </div>
</div>

## Applying Spacing

Consistent spacing should be applied throughout interfaces to create a cohesive experience. Here are some common applications of our spacing system:

### Component Internal Spacing

<div class="spacing-example">
  <div class="example-label">Button Padding</div>
  <div class="example-preview">
    <button class="example-button">Button Text</button>
  </div>
  <div class="example-code">Padding: 0.5rem 1rem (8px 16px)</div>
</div>

<div class="spacing-example">
  <div class="example-label">Card Padding</div>
  <div class="example-preview">
    <div class="example-card">
      <h3>Card Title</h3>
      <p>Card content goes here. This is an example of consistent padding within a component.</p>
    </div>
  </div>
  <div class="example-code">Padding: 1.5rem (24px)</div>
</div>

### Component External Spacing

<div class="spacing-example">
  <div class="example-label">Form Field Spacing</div>
  <div class="example-preview">
    <div class="example-form">
      <div class="form-field">
        <label>Field Label</label>
        <input type="text" placeholder="Input text">
      </div>
      <div class="form-field">
        <label>Field Label</label>
        <input type="text" placeholder="Input text">
      </div>
    </div>
  </div>
  <div class="example-code">Margin between fields: 1rem (16px)</div>
</div>

<div class="spacing-example">
  <div class="example-label">Section Spacing</div>
  <div class="example-preview">
    <div class="example-sections">
      <section class="example-section">
        <h3>Section Title</h3>
        <p>Section content goes here.</p>
      </section>
      <section class="example-section">
        <h3>Section Title</h3>
        <p>Section content goes here.</p>
      </section>
    </div>
  </div>
  <div class="example-code">Margin between sections: 2rem (32px)</div>
</div>

## Spacing Guidelines

Follow these guidelines to ensure consistent spacing across your interfaces:

1. **Consistency**: Use the spacing scale consistently throughout your designs.
2. **Hierarchy**: Use larger spacing values to separate distinct sections and smaller values within related elements.
3. **Proximity**: Group related elements closer together and separate unrelated elements with more space.
4. **Rhythm**: Create a visual rhythm by using consistent spacing between similar elements.
5. **Responsiveness**: Adjust spacing for different screen sizes while maintaining the overall proportions.

## Implementation

For web implementations, use the CSS variables defined in our design system:

```css
/* Spacing scale */
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-5: 1.25rem;  /* 20px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-10: 2.5rem;  /* 40px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
