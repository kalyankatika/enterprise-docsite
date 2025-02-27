---
layout: page
title: Foundations
description: The basic building blocks of our design system including color, typography, spacing, and grid.
eleventyNavigation:
  key: Foundations
  parent: Design System
  order: 1
---

# Design Foundations

Design foundations form the fundamental building blocks of our design system. They ensure visual consistency and accessibility across all products and platforms while providing the flexibility needed for a range of applications.

## Foundation Elements

<div class="foundation-grid">
  <a href="/design-system/foundations/colors/" class="foundation-card">
    <div class="foundation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    </div>
    <h3>Colors</h3>
    <p>Our color palette, including primary, secondary, and semantic colors, along with usage guidelines.</p>
  </a>
  
  <a href="/design-system/foundations/typography/" class="foundation-card">
    <div class="foundation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type">
        <polyline points="4 7 4 4 20 4 20 7"></polyline>
        <line x1="9" y1="20" x2="15" y2="20"></line>
        <line x1="12" y1="4" x2="12" y2="20"></line>
      </svg>
    </div>
    <h3>Typography</h3>
    <p>Font families, sizes, weights, and styles used across our products.</p>
  </a>
  
  <a href="/design-system/foundations/spacing/" class="foundation-card">
    <div class="foundation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2">
        <polyline points="15 3 21 3 21 9"></polyline>
        <polyline points="9 21 3 21 3 15"></polyline>
        <line x1="21" y1="3" x2="14" y2="10"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      </svg>
    </div>
    <h3>Spacing</h3>
    <p>Standard spacing values used for margins, padding, and layout.</p>
  </a>
  
  <a href="/design-system/foundations/grid/" class="foundation-card">
    <div class="foundation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    </div>
    <h3>Grid</h3>
    <p>Grid system and layout guidelines for responsive designs.</p>
  </a>
  
  <a href="/design-system/foundations/elevation/" class="foundation-card">
    <div class="foundation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    </div>
    <h3>Elevation</h3>
    <p>Shadow and depth guidelines to create hierarchy and focus.</p>
  </a>
  
  <a href="/design-system/foundations/iconography/" class="foundation-card">
    <div class="foundation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </div>
    <h3>Iconography</h3>
    <p>Standard icons and icon usage guidelines for consistent visual communication.</p>
  </a>
</div>

## Applying Design Foundations

Our design foundations serve as the basis for all our components, templates, and patterns. Consistently applying these foundations ensures a unified and recognizable experience across all touchpoints.

When working on a new design or implementation:

1. **Start with foundations**: Before diving into components, ensure you're familiar with the core foundations.
2. **Maintain consistency**: Use the established foundations rather than creating custom values.
3. **Consider accessibility**: Our foundations are designed with accessibility in mind. Deviating from them may impact accessibility.
4. **Cross-platform adaptation**: Understand how foundations translate across different platforms while maintaining a consistent experience.

For more detailed guidance on implementing these foundations, check out our [Implementation Guidelines](/design-system/implementation-guidelines/).

<style>
  .foundation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .foundation-card {
    padding: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: block;
    color: var(--color-text);
  }
  
  .foundation-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
  
  .foundation-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .foundation-card h3 {
    margin-top: 0;
    color: var(--color-primary);
  }
</style>
