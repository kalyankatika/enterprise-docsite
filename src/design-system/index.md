---
layout: page
title: Design System
description: Explore the foundations of our design system including colors, typography, spacing, and more.
eleventyNavigation:
  key: Design System
  order: 1
---

# Enterprise Design System

The Enterprise Design System (EDS) provides a comprehensive set of guidelines, principles, and components to create consistent, accessible, and user-friendly experiences across all our products.

## Core Principles

Our design system is built on the following core principles:

<div class="principles-grid">
  <div class="principle-card">
    <h3>Consistency</h3>
    <p>Create predictable patterns that users can easily recognize and understand across all touchpoints.</p>
  </div>
  
  <div class="principle-card">
    <h3>Accessibility</h3>
    <p>Design inclusive experiences that work for everyone, regardless of abilities or context of use.</p>
  </div>
  
  <div class="principle-card">
    <h3>Efficiency</h3>
    <p>Help users accomplish their tasks with minimal effort through intuitive interactions and clear feedback.</p>
  </div>
  
  <div class="principle-card">
    <h3>Flexibility</h3>
    <p>Support various use cases and contexts while maintaining a cohesive experience.</p>
  </div>
</div>

## Design System Sections

<div class="sections-grid">
  <a href="/design-system/foundations/" class="section-card">
    <h3>Foundations</h3>
    <p>The basic building blocks of our design system including color, typography, spacing, and grid.</p>
    <span class="section-link">Explore Foundations →</span>
  </a>
  
  <a href="/design-system/brand/" class="section-card">
    <h3>Brand</h3>
    <p>Our brand values, voice and tone, logo usage guidelines, and brand assets.</p>
    <span class="section-link">Explore Brand →</span>
  </a>
  
  <a href="/components/" class="section-card">
    <h3>Components</h3>
    <p>Reusable UI elements that can be assembled to create interfaces across platforms.</p>
    <span class="section-link">Explore Components →</span>
  </a>
  
  <a href="/resources/templates/" class="section-card">
    <h3>Templates</h3>
    <p>Pre-built page layouts and patterns for common use cases and screens.</p>
    <span class="section-link">Explore Templates →</span>
  </a>
</div>

## Getting Started

If you're new to the Enterprise Design System, we recommend starting with the following resources:

1. [Design System Overview](/design-system/overview/) - Learn about the purpose and structure of our design system
2. [Using the Design System](/design-system/using-the-design-system/) - Practical guidance for implementing the design system
3. [Foundations](/design-system/foundations/) - Explore the core visual elements of our design system
4. [Component Library](/components/) - Browse our extensive collection of UI components

For designers and developers who want to contribute to the design system, please check our [Contribution Guidelines](/support/contribute/).

<style>
  .principles-grid,
  .sections-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .principle-card {
    padding: 1.5rem;
    background-color: var(--color-bg-alt);
    border-radius: 8px;
  }
  
  .principle-card h3 {
    margin-top: 0;
    color: var(--color-primary);
  }
  
  .section-card {
    padding: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: block;
    color: var(--color-text);
  }
  
  .section-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
  
  .section-card h3 {
    margin-top: 0;
    color: var(--color-primary);
  }
  
  .section-link {
    display: block;
    margin-top: 1rem;
    color: var(--color-primary);
    font-weight: 500;
  }
</style>
