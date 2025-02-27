---
layout: page
title: Typography
description: Font families, sizes, weights, and styles used across our products.
eleventyNavigation:
  key: Typography
  parent: Foundations
  order: 2
---

# Typography

Typography is a fundamental element of our design system that helps establish hierarchy, improve readability, and create a consistent experience across all our products.

## Font Family

We use a system font stack to ensure optimal performance and a native look and feel across different platforms:

<div class="font-family-sample">
  <div class="font-sample">
    <p class="font-name">Sans Serif (Primary)</p>
    <p class="font-stack">-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif</p>
    <p class="font-preview">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="font-sample monospace">
    <p class="font-name">Monospace</p>
    <p class="font-stack">SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace</p>
    <p class="font-preview">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>

## Font Sizes

Our type scale is designed to create clear hierarchy and consistent rhythm across interfaces. Font sizes are defined in rems to support user preferences and accessibility.

<div class="type-scale">
  <div class="type-sample">
    <p class="size-label">xs - 0.75rem (12px)</p>
    <p class="size-preview" style="font-size: 0.75rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="type-sample">
    <p class="size-label">sm - 0.875rem (14px)</p>
    <p class="size-preview" style="font-size: 0.875rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="type-sample">
    <p class="size-label">md - 1rem (16px) - Base</p>
    <p class="size-preview" style="font-size: 1rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="type-sample">
    <p class="size-label">lg - 1.125rem (18px)</p>
    <p class="size-preview" style="font-size: 1.125rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="type-sample">
    <p class="size-label">xl - 1.25rem (20px)</p>
    <p class="size-preview" style="font-size: 1.25rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="type-sample">
    <p class="size-label">2xl - 1.5rem (24px)</p>
    <p class="size-preview" style="font-size: 1.5rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="type-sample">
    <p class="size-label">3xl - 1.875rem (30px)</p>
    <p class="size-preview" style="font-size: 1.875rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="type-sample">
    <p class="size-label">4xl - 2.25rem (36px)</p>
    <p class="size-preview" style="font-size: 2.25rem;">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>

## Font Weights

Font weights help establish hierarchy and emphasis in our interfaces.

<div class="font-weights">
  <div class="weight-sample">
    <p class="weight-label">Regular (400)</p>
    <p class="weight-preview" style="font-weight: 400;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="weight-sample">
    <p class="weight-label">Medium (500)</p>
    <p class="weight-preview" style="font-weight: 500;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="weight-sample">
    <p class="weight-label">Semi-Bold (600)</p>
    <p class="weight-preview" style="font-weight: 600;">The quick brown fox jumps over the lazy dog.</p>
  </div>
  
  <div class="weight-sample">
    <p class="weight-label">Bold (700)</p>
    <p class="weight-preview" style="font-weight: 700;">The quick brown fox jumps over the lazy dog.</p>
  </div>
</div>

## Heading Styles

Headings create structure and hierarchy in our content. They should be used in sequential order to maintain proper document structure.

<div class="heading-styles">
  <div class="heading-sample">
    <h1 class="preview-heading">Heading 1 (2.25rem)</h1>
    <p class="heading-description">Used for main page titles</p>
    <code class="heading-code">font-size: 2.25rem; font-weight: 600; line-height: 1.25;</code>
  </div>
  
  <div class="heading-sample">
    <h2 class="preview-heading">Heading 2 (1.5rem)</h2>
    <p class="heading-description">Used for section titles</p>
    <code class="heading-code">font-size: 1.5rem; font-weight: 600; line-height: 1.25;</code>
  </div>
  
  <div class="heading-sample">
    <h3 class="preview-heading">Heading 3 (1.25rem)</h3>
    <p class="heading-description">Used for subsection titles</p>
    <code class="heading-code">font-size: 1.25rem; font-weight: 600; line-height: 1.25;</code>
  </div>
  
  <div class="heading-sample">
    <h4 class="preview-heading">Heading 4 (1.125rem)</h4>
    <p class="heading-description">Used for card or component titles</p>
    <code class="heading-code">font-size: 1.125rem; font-weight: 600; line-height: 1.25;</code>
  </div>
  
  <div class="heading-sample">
    <h5 class="preview-heading">Heading 5 (1rem)</h5>
    <p class="heading-description">Used for smaller component titles</p>
    <code class="heading-code">font-size: 1rem; font-weight: 600; line-height: 1.25;</code>
  </div>
  
  <div class="heading-sample">
    <h6 class="preview-heading">Heading 6 (0.875rem)</h6>
    <p class="heading-description">Used for minor section titles</p>
    <code class="heading-code">font-size: 0.875rem; font-weight: 600; line-height: 1.25; text-transform: uppercase;</code>
  </div>
</div>

## Body Text

Body text is used for the main content of our interfaces. It should be highly readable and accessible.

<div class="body-text-sample">
  <p class="body-preview">
    Body text uses a size of 1rem (16px) with a line height of 1.5. This provides optimal readability for longer passages of text. Proper spacing between paragraphs helps to create a comfortable reading experience and allows users to distinguish between different thoughts or sections of content.
  </p>
  <p class="body-preview">
    Good typography is not just about choosing the right font, but also about proper spacing, line length, and contrast. We recommend keeping line lengths between 45-75 characters for optimal readability on web interfaces.
  </p>
  <code class="body-code">font-size: 1rem; line-height: 1.5; margin-bottom: 1rem;</code>
</div>

## Utility Text

Utility text is used for labels, captions, and other supporting content.

<div class="utility-text">
  <div class="utility-sample">
    <p class="utility-label">Small Text (0.875rem)</p>
    <p class="utility-preview small">Used for secondary information, captions, and supporting text.</p>
    <code class="utility-code">font-size: 0.875rem; line-height: 1.4;</code>
  </div>
  
  <div class="utility-sample">
    <p class="utility-label">Caption Text (0.75rem)</p>
    <p class="utility-preview caption">Used for captions, footnotes, and less important information.</p>
    <code class="utility-code">font-size: 0.75rem; line-height: 1.4; color: var(--color-text-muted);</code>
  </div>
  
  <div class="utility-sample">
    <p class="utility-label">Helper Text (0.875rem)</p>
    <p class="utility-preview helper">Provides additional context or guidance for form fields or interactive elements.</p>
    <code class="utility-code">font-size: 0.875rem; line-height: 1.4; color: var(--color-text-muted);</code>
  </div>
</div>

## Typography Guidelines

Follow these guidelines to ensure consistent and accessible typography:

1. **Hierarchy**: Use font size, weight, and color to establish clear visual hierarchy.
2. **Readability**: Maintain adequate contrast and spacing for optimal readability.
3. **Consistency**: Use consistent typography patterns throughout your interfaces.
4. **Responsiveness**: Adjust typography for different screen sizes to maintain readability.
5. **Accessibility**: Ensure text meets WCAG 2.1 AA contrast requirements (4.5:1 for normal text).

## Implementation

For web implementations, use the CSS variables defined in our design system:

```css
/* Font families */
--font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

/* Font sizes */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-md: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
