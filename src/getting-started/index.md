---
layout: layouts/base.njk
title: Getting Started
description: Getting started with the Enterprise Design System
eleventyNavigation:
  key: Getting Started
  order: 2
---

<div class="eds-container">
  <header class="eds-page-header">
    <h1 class="eds-page-header__title">Getting Started</h1>
    <p class="eds-page-header__description">Learn how to use the Enterprise Design System (EDS) in your projects</p>
  </header>

  <div class="eds-content-layout">
    <div class="eds-toc">
      <div class="eds-toc__inner">
        <h2 class="eds-toc__title">On this page</h2>
        <ul class="eds-toc__list">
          <li class="eds-toc__item">
            <a href="#introduction" class="eds-toc__link">Introduction</a>
          </li>
          <li class="eds-toc__item">
            <a href="#installation" class="eds-toc__link">Installation</a>
          </li>
          <li class="eds-toc__item">
            <a href="#usage" class="eds-toc__link">Usage</a>
          </li>
          <li class="eds-toc__item">
            <a href="#key-concepts" class="eds-toc__link">Key Concepts</a>
          </li>
          <li class="eds-toc__item">
            <a href="#browser-support" class="eds-toc__link">Browser Support</a>
          </li>
          <li class="eds-toc__item">
            <a href="#next-steps" class="eds-toc__link">Next Steps</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="eds-content">
      <section id="introduction" class="eds-section">
        <h2>Introduction</h2>
        <p>The Enterprise Design System (EDS) is a comprehensive set of design guidelines, components, and resources to help create consistent, accessible, and high-quality enterprise applications. This guide will help you get started with implementing EDS in your projects.</p>
        
        <div class="eds-info-box">
          <h3 class="eds-info-box__title">Who is this for?</h3>
          <p>This guide is intended for developers and designers who are implementing the Enterprise Design System in their projects. Familiarity with HTML, CSS, and JavaScript is recommended.</p>
        </div>
      </section>

      <section id="installation" class="eds-section">
        <h2>Installation</h2>
        
        <h3>Using npm</h3>
        <p>Install the EDS package from npm:</p>
        
        <pre><code class="language-bash">npm install @enterprise/design-system</code></pre>
        
        <h3>Using a CDN</h3>
        <p>You can also include EDS directly from a CDN:</p>
        
        <pre><code class="language-html">&lt;link rel="stylesheet" href="https://cdn.enterprise.com/design-system/2.0.0/eds.min.css"&gt;
&lt;script src="https://cdn.enterprise.com/design-system/2.0.0/eds.min.js" defer&gt;&lt;/script&gt;</code></pre>
      </section>

      <section id="usage" class="eds-section">
        <h2>Usage</h2>
        
        <h3>Basic Setup</h3>
        <p>Include the CSS and JavaScript files in your HTML:</p>
        
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Enterprise App&lt;/title&gt;
  &lt;link rel="stylesheet" href="path/to/eds.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- Your content here --&gt;
  
  &lt;script src="path/to/eds.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        
        <h3>Using Components</h3>
        <p>Once the EDS is set up, you can use components by following the HTML structure and CSS classes documented in the <a href="/components/">Components section</a>.</p>
        
        <p>Here's a simple example using a button component:</p>
        
        <pre><code class="language-html">&lt;button class="eds-button eds-button--primary"&gt;Primary Button&lt;/button&gt;</code></pre>
      </section>

      <section id="key-concepts" class="eds-section">
        <h2>Key Concepts</h2>
        
        <h3>BEM Methodology</h3>
        <p>The EDS uses the BEM (Block, Element, Modifier) naming convention with an 'eds-' prefix for all CSS classes. This helps to create a consistent and predictable class naming structure.</p>
        
        <ul>
          <li><strong>Block:</strong> A standalone entity that is meaningful on its own (e.g., <code>eds-button</code>)</li>
          <li><strong>Element:</strong> A part of a block that has no standalone meaning (e.g., <code>eds-card__title</code>)</li>
          <li><strong>Modifier:</strong> A flag on a block or element that changes appearance or behavior (e.g., <code>eds-button--primary</code>)</li>
        </ul>
        
        <h3>Design Tokens</h3>
        <p>Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. The EDS uses design tokens for colors, typography, spacing, and more.</p>
        
        <p>You can access these tokens through CSS variables:</p>
        
        <pre><code class="language-css">.custom-element {
  color: var(--eds-color-primary);
  padding: var(--eds-spacing-md);
  font-size: var(--eds-font-size-lg);
}</code></pre>
      </section>

      <section id="browser-support" class="eds-section">
        <h2>Browser Support</h2>
        <p>The Enterprise Design System supports the following browsers:</p>
        
        <ul>
          <li>Chrome (latest 2 versions)</li>
          <li>Firefox (latest 2 versions)</li>
          <li>Safari (latest 2 versions)</li>
          <li>Edge (latest 2 versions)</li>
          <li>Internet Explorer 11 (with polyfills)</li>
        </ul>
      </section>

      <section id="next-steps" class="eds-section">
        <h2>Next Steps</h2>
        
        <div class="eds-card-grid">
          <div class="eds-card">
            <h3 class="eds-card__title">Explore Components</h3>
            <p class="eds-card__description">Browse our library of UI components and learn how to use them in your project.</p>
            <a href="/components/" class="eds-card__link">View Components</a>
          </div>
          
          <div class="eds-card">
            <h3 class="eds-card__title">Design Tokens</h3>
            <p class="eds-card__description">Learn about our design tokens and how to use them for consistent styling.</p>
            <a href="/design-tokens/" class="eds-card__link">View Design Tokens</a>
          </div>
          
          <div class="eds-card">
            <h3 class="eds-card__title">Patterns</h3>
            <p class="eds-card__description">Explore common UI patterns and best practices for enterprise applications.</p>
            <a href="/patterns/" class="eds-card__link">View Patterns</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>