---
layout: page.njk
title: Design System
description: Comprehensive guidelines and principles for creating consistent enterprise applications
sidebarType: design-system
---

# Enterprise Design System

The Enterprise Design System (EDS) provides a comprehensive set of guidelines, components, and resources to help teams create cohesive, accessible, and visually consistent enterprise applications.

## Core Principles

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="w-12 h-12 bg-[var(--color-primary)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-2">Consistency</h3>
    <p>Create seamless user experiences through consistent patterns, behaviors, and visual elements across all enterprise applications.</p>
  </div>
  
  <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="w-12 h-12 bg-[var(--color-primary)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-2">Modularity</h3>
    <p>Use modular components that can be combined in different ways to create flexible and adaptable user interfaces.</p>
  </div>
  
  <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="w-12 h-12 bg-[var(--color-primary)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-2">Efficiency</h3>
    <p>Optimize workflows and reduce cognitive load through intuitive interfaces and consistent interaction patterns.</p>
  </div>
  
  <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="w-12 h-12 bg-[var(--color-primary)] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
    <h3 class="text-xl font-semibold mb-2">Inclusivity</h3>
    <p>Design for all users with strong accessibility standards and support for diverse user needs and preferences.</p>
  </div>
</div>

## Design System Structure

The Enterprise Design System is organized into several key sections:

<div class="mt-8 space-y-6">
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-semibold mb-2">Foundations</h3>
    <p class="mb-4">Core design elements that form the building blocks of our interface.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <a href="/design-system/foundations/color/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Color</div>
      </a>
      <a href="/design-system/foundations/typography/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Typography</div>
      </a>
      <a href="/design-system/foundations/spacing/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Spacing</div>
      </a>
      <a href="/design-system/foundations/grid-system/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Grid System</div>
      </a>
    </div>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-semibold mb-2">Components</h3>
    <p class="mb-4">Reusable UI elements that can be composed to create interfaces.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <a href="/components/layout/container/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Layout Components</div>
      </a>
      <a href="/components/inputs/button/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Input Components</div>
      </a>
      <a href="/components/navigation/navbar/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Navigation Components</div>
      </a>
    </div>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-semibold mb-2">Guidelines</h3>
    <p class="mb-4">Best practices and standards for creating effective interfaces.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a href="/design-system/guidelines/accessibility/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Accessibility</div>
      </a>
      <a href="/design-system/guidelines/content/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Content</div>
      </a>
    </div>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-semibold mb-2">Resources</h3>
    <p class="mb-4">Tools and assets to help implement the design system.</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <a href="/resources/design-tokens/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Design Tokens</div>
      </a>
      <a href="/resources/templates/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Templates</div>
      </a>
      <a href="/resources/downloads/" class="block p-3 bg-[var(--color-bg)] rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <div class="font-medium">Downloads</div>
      </a>
    </div>
  </div>
</div>

## Getting Started

If you're new to the Enterprise Design System, we recommend starting with the following resources:

1. [Introduction to the Design System](/get-started/) - Learn about the core concepts and principles.
2. [Design Foundations](/design-system/foundations/) - Explore the fundamental elements that make up our visual language.
3. [Component Library](/components/) - Browse our collection of UI components and learn how to use them.
4. [Design Tokens](/resources/design-tokens/) - Understand how to implement the design system in your projects.