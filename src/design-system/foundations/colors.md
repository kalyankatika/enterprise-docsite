---
layout: layouts/page.njk
title: Colors
description: Our color palette, including primary, secondary, and semantic colors, along with usage guidelines.
eleventyNavigation:
  key: Colors
  parent: Foundations
  order: 1
---

# Color System

Our color system is designed to create accessible, consistent, and visually appealing interfaces across all platforms. The color palette is intentionally crafted to align with our brand identity while providing flexibility for various use cases.

## Primary Colors

The primary color of our design system is green (#368727), which represents growth, sustainability, and stability. This color is used for primary actions, navigation elements, and branding.

<div class="color-palette">
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #368727;"></div>
    <div class="color-details">
      <div class="color-name">Primary</div>
      <div class="color-value">#368727</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #286d1c;"></div>
    <div class="color-details">
      <div class="color-name">Primary Dark</div>
      <div class="color-value">#286d1c</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #4ba238;"></div>
    <div class="color-details">
      <div class="color-name">Primary Light</div>
      <div class="color-value">#4ba238</div>
    </div>
  </div>
</div>

## Text Colors

Text colors are designed to provide optimal readability and accessibility. They should be used consistently across all interfaces.

<div class="color-palette">
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #333333;"></div>
    <div class="color-details">
      <div class="color-name">Text</div>
      <div class="color-value">#333333</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #666666;"></div>
    <div class="color-details">
      <div class="color-name">Text Muted</div>
      <div class="color-value">#666666</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #888888;"></div>
    <div class="color-details">
      <div class="color-name">Text Light</div>
      <div class="color-value">#888888</div>
    </div>
  </div>
</div>

## Background Colors

Background colors provide context and hierarchy to our interfaces, helping users understand the structure and functionality of our products.

<div class="color-palette">
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #ffffff; border: 1px solid #e0e0e0;"></div>
    <div class="color-details">
      <div class="color-name">Background</div>
      <div class="color-value">#ffffff</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #f5f7f9;"></div>
    <div class="color-details">
      <div class="color-name">Background Alt</div>
      <div class="color-value">#f5f7f9</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #f0f2f5;"></div>
    <div class="color-details">
      <div class="color-name">Background Hover</div>
      <div class="color-value">#f0f2f5</div>
    </div>
  </div>
</div>

## Semantic Colors

Semantic colors convey specific meanings and are used to communicate status, feedback, and alerts to users.

<div class="color-palette">
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #38a169;"></div>
    <div class="color-details">
      <div class="color-name">Success</div>
      <div class="color-value">#38a169</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #e9b949;"></div>
    <div class="color-details">
      <div class="color-name">Warning</div>
      <div class="color-value">#e9b949</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #e53e3e;"></div>
    <div class="color-details">
      <div class="color-name">Error</div>
      <div class="color-value">#e53e3e</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #3182ce;"></div>
    <div class="color-details">
      <div class="color-name">Info</div>
      <div class="color-value">#3182ce</div>
    </div>
  </div>
</div>

## Dark Theme Colors

Our design system supports a dark theme, which uses a different color palette optimized for low-light environments and user preference.

<div class="color-palette dark">
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #4ba238;"></div>
    <div class="color-details">
      <div class="color-name">Primary</div>
      <div class="color-value">#4ba238</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #e2e8f0;"></div>
    <div class="color-details">
      <div class="color-name">Text</div>
      <div class="color-value">#e2e8f0</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #1a202c;"></div>
    <div class="color-details">
      <div class="color-name">Background</div>
      <div class="color-value">#1a202c</div>
    </div>
  </div>
  
  <div class="color-swatch">
    <div class="color-sample" style="background-color: #2d3748;"></div>
    <div class="color-details">
      <div class="color-name">Background Alt</div>
      <div class="color-value">#2d3748</div>
    </div>
  </div>
</div>

## Accessibility Guidelines

All color combinations used in our interfaces must meet WCAG 2.1 AA standards for contrast ratio:

- Text and interactive elements: minimum contrast ratio of 4.5:1
- Large text (18pt and above): minimum contrast ratio of 3:1
- UI components and graphical objects: minimum contrast ratio of 3:1

<div class="accessibility-examples">
  <div class="accessibility-example">
    <div class="example-label">Good contrast</div>
    <div class="example-content good">
      <div style="background-color: #368727; color: #ffffff; padding: 12px; border-radius: 4px;">
        Text on primary color (4.6:1)
      </div>
    </div>
  </div>
  
  <div class="accessibility-example">
    <div class="example-label">Poor contrast</div>
    <div class="example-content bad">
      <div style="background-color: #4ba238; color: #ffffff; padding: 12px; border-radius: 4px;">
        Text on light primary color (3.2:1)
      </div>
    </div>
  </div>
</div>

## Using Colors in Design

When applying colors to your designs, keep these principles in mind:

1. **Consistency**: Use colors consistently to reinforce meaning and functionality.
2. **Hierarchy**: Use color to establish visual hierarchy and guide user attention.
3. **Accessibility**: Ensure sufficient contrast between text and background colors.
4. **Purpose**: Use semantic colors for their intended purpose only.
5. **Restraint**: Limit the use of colors to avoid overwhelming users.

## Implementation

For web implementations, use the CSS variables defined in our design system:

```css
/* Primary colors */
--color-primary: #368727;
--color-primary-dark: #286d1c;
--color-primary-light: #4ba238;

/* Text colors */
--color-text: #333333;
--color-text-muted: #666666;
--color-text-light: #888888;

/* Background colors */
--color-bg: #ffffff;
--color-bg-alt: #f5f7f9;
--color-bg-hover: #f0f2f5;

/* Semantic colors */
--color-success: #38a169;
--color-warning: #e9b949;
--color-error: #e53e3e;
--color-info: #3182ce;
