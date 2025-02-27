---
layout: layouts/home.njk
title: Enterprise Design System Documentation
description: Comprehensive documentation for our unified design system
---

# Enterprise Design System

Welcome to the unified documentation for our Enterprise Design System. This site consolidates component documentation, design guidelines, and implementation resources from multiple legacy sites into a single, comprehensive resource.

## Getting Started

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  <a href="/getting-started/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Introduction</h2>
    <p class="text-[var(--color-text-muted)]">Learn about our design system's principles, goals, and how to get started with implementation.</p>
  </a>
  
  <a href="/components/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Components</h2>
    <p class="text-[var(--color-text-muted)]">Explore our library of reusable UI components with examples, code snippets, and best practices.</p>
  </a>
  
  <a href="/design-tokens/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Design Tokens</h2>
    <p class="text-[var(--color-text-muted)]">Access our design variables for colors, typography, spacing, and other visual properties.</p>
  </a>
  
  <a href="/patterns/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Design Patterns</h2>
    <p class="text-[var(--color-text-muted)]">Discover common UI patterns and solutions for complex interaction challenges.</p>
  </a>
  
  <a href="/resources/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Resources</h2>
    <p class="text-[var(--color-text-muted)]">Download design files, code templates, and other useful resources for implementation.</p>
  </a>
  
  <a href="/guidelines/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Guidelines</h2>
    <p class="text-[var(--color-text-muted)]">Follow our recommendations for accessibility, usability, and consistent implementation.</p>
  </a>
</div>

## Featured Components

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
  <a href="/components/inputs/button/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h3 class="text-lg font-semibold mb-2">Buttons</h3>
    <div class="flex flex-col gap-2">
      <button class="eds-button-primary">Primary</button>
      <button class="eds-button-secondary">Secondary</button>
    </div>
  </a>
  
  <a href="/components/feedback/alert/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h3 class="text-lg font-semibold mb-2">Alerts</h3>
    <div class="p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
      Information alert
    </div>
  </a>
  
  <a href="/components/inputs/text-field/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h3 class="text-lg font-semibold mb-2">Form Inputs</h3>
    <div class="flex flex-col gap-2">
      <input type="text" class="eds-input" placeholder="Text input">
      <select class="eds-input">
        <option>Select option</option>
      </select>
    </div>
  </a>
  
  <a href="/components/navigation/tabs/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h3 class="text-lg font-semibold mb-2">Tabs</h3>
    <div class="border-b border-[var(--color-border)]">
      <div class="flex text-sm">
        <button class="py-2 px-3 border-b-2 border-[var(--color-primary)] font-medium">Tab 1</button>
        <button class="py-2 px-3 text-[var(--color-text-muted)]">Tab 2</button>
        <button class="py-2 px-3 text-[var(--color-text-muted)]">Tab 3</button>
      </div>
    </div>
  </a>
</div>

## Latest Updates

<div class="mt-8 space-y-4">
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="font-semibold">New Component: Data Tables</h3>
        <p class="text-sm text-[var(--color-text-muted)]">We've added comprehensive documentation for Data Tables, including sorting, filtering, and pagination examples.</p>
        <a href="/components/data/table/" class="text-sm text-[var(--color-primary)] font-medium mt-2 inline-block">View Component →</a>
      </div>
      <span class="text-xs text-[var(--color-text-muted)]">June 15, 2023</span>
    </div>
  </div>
  
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="font-semibold">Updated: Accessibility Guidelines</h3>
        <p class="text-sm text-[var(--color-text-muted)]">Our accessibility guidelines have been updated with new examples and WCAG 2.1 AA compliance information.</p>
        <a href="/guidelines/accessibility/" class="text-sm text-[var(--color-primary)] font-medium mt-2 inline-block">View Guidelines →</a>
      </div>
      <span class="text-xs text-[var(--color-text-muted)]">May 28, 2023</span>
    </div>
  </div>
  
  <div class="p-4 border border-[var(--color-border)] rounded-lg">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="font-semibold">Design Token Updates</h3>
        <p class="text-sm text-[var(--color-text-muted)]">We've expanded our design token documentation with new examples and implementation guides for multiple platforms.</p>
        <a href="/design-tokens/usage/" class="text-sm text-[var(--color-primary)] font-medium mt-2 inline-block">View Updates →</a>
      </div>
      <span class="text-xs text-[var(--color-text-muted)]">May 12, 2023</span>
    </div>
  </div>
</div>

## Get Involved

<div class="mt-8 p-6 bg-[var(--color-background-alt)] rounded-lg border border-[var(--color-border)]">
  <h2 class="text-xl font-semibold mb-3">Contribute to the Design System</h2>
  <p class="mb-4">Our design system is a collaborative effort. We welcome feedback, bug reports, and contribution requests from all teams using the system.</p>
  
  <div class="grid md:grid-cols-3 gap-4">
    <a href="/contribute/report-issue/" class="p-4 bg-white rounded border border-[var(--color-border)] hover:shadow-md transition-shadow duration-200">
      <h3 class="font-semibold mb-2">Report an Issue</h3>
      <p class="text-sm text-[var(--color-text-muted)]">Found a bug or inconsistency? Let us know so we can fix it.</p>
    </a>
    
    <a href="/contribute/request-feature/" class="p-4 bg-white rounded border border-[var(--color-border)] hover:shadow-md transition-shadow duration-200">
      <h3 class="font-semibold mb-2">Request a Feature</h3>
      <p class="text-sm text-[var(--color-text-muted)]">Suggest a new component or improvement to the system.</p>
    </a>
    
    <a href="/contribute/guidelines/" class="p-4 bg-white rounded border border-[var(--color-border)] hover:shadow-md transition-shadow duration-200">
      <h3 class="font-semibold mb-2">Contribution Guidelines</h3>
      <p class="text-sm text-[var(--color-text-muted)]">Learn how to contribute code or design to the system.</p>
    </a>
  </div>
</div>