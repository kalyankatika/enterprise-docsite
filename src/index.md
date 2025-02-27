---
layout: layouts/home.njk
title: Enterprise Design System
description: A comprehensive design system for creating consistent, accessible, and beautiful enterprise applications
---

<div class="max-w-4xl mx-auto">
  <div class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Enterprise Design System</h1>
    <p class="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">A comprehensive design system for creating consistent, accessible, and beautiful enterprise applications.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    <a href="/get-started/" class="group block p-6 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
      <h2 class="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Get Started</h2>
      <p class="text-[var(--color-text-muted)]">Learn how to set up and use the Enterprise Design System in your projects.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">Get Started →</div>
    </a>
    
    <a href="/design-system/" class="group block p-6 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
      <h2 class="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Design System</h2>
      <p class="text-[var(--color-text-muted)]">Explore our design foundations, principles, and guidelines.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">Explore Design System →</div>
    </a>
    
    <a href="/components/" class="group block p-6 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
      <h2 class="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Components</h2>
      <p class="text-[var(--color-text-muted)]">Browse our collection of UI components with documentation and examples.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Components →</div>
    </a>
    
    <a href="/resources/" class="group block p-6 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
      <h2 class="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Resources</h2>
      <p class="text-[var(--color-text-muted)]">Access design tokens, Figma libraries, and other resources.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Resources →</div>
    </a>
  </div>

  <div class="mb-16">
    <h2 class="text-2xl font-bold mb-6 text-center">Latest Updates</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-[var(--color-bg)] p-5 rounded-lg border border-[var(--color-border)]">
        <div class="text-sm text-[var(--color-text-muted)] mb-2">February 25, 2025</div>
        <h3 class="font-bold mb-2">Design System v4.2.0 Released</h3>
        <p class="text-sm text-[var(--color-text-muted)] mb-4">New components, improved accessibility, and better dark mode support.</p>
        <a href="/releases/4.2.0/" class="text-sm text-[var(--color-primary)] hover:underline">Read more →</a>
      </div>
      
      <div class="bg-[var(--color-bg)] p-5 rounded-lg border border-[var(--color-border)]">
        <div class="text-sm text-[var(--color-text-muted)] mb-2">February 15, 2025</div>
        <h3 class="font-bold mb-2">New Figma Libraries Available</h3>
        <p class="text-sm text-[var(--color-text-muted)] mb-4">Updated Figma libraries with all the latest components and styling.</p>
        <a href="/resources/figma/" class="text-sm text-[var(--color-primary)] hover:underline">Read more →</a>
      </div>
      
      <div class="bg-[var(--color-bg)] p-5 rounded-lg border border-[var(--color-border)]">
        <div class="text-sm text-[var(--color-text-muted)] mb-2">February 10, 2025</div>
        <h3 class="font-bold mb-2">Documentation Improvements</h3>
        <p class="text-sm text-[var(--color-text-muted)] mb-4">Enhanced search functionality and component API documentation.</p>
        <a href="/whats-new/" class="text-sm text-[var(--color-primary)] hover:underline">Read more →</a>
      </div>
    </div>
  </div>

  <div class="mb-16">
    <h2 class="text-2xl font-bold mb-6 text-center">Featured Components</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <a href="/components/layout/card/" class="block bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-colors">
        <div class="p-4 border-b border-[var(--color-border)]">
          <div class="bg-[var(--color-bg-alt)] p-4 rounded">
            <div class="bg-white dark:bg-gray-800 p-4 rounded border border-[var(--color-border)] shadow-sm">
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2 mb-3"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5"></div>
            </div>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-bold">Card</h3>
          <p class="text-sm text-[var(--color-text-muted)] mt-1">Container component for grouping related content</p>
        </div>
      </a>
      
      <a href="/components/inputs/button/" class="block bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-colors">
        <div class="p-4 border-b border-[var(--color-border)]">
          <div class="bg-[var(--color-bg-alt)] p-4 rounded flex justify-center">
            <button class="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-medium py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-bold">Button</h3>
          <p class="text-sm text-[var(--color-text-muted)] mt-1">Interactive element for triggering actions and events</p>
        </div>
      </a>
      
      <a href="/components/navigation/tabs/" class="block bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-colors">
        <div class="p-4 border-b border-[var(--color-border)]">
          <div class="bg-[var(--color-bg-alt)] p-4 rounded">
            <div class="flex border-b border-[var(--color-border)]">
              <div class="px-4 py-2 border-b-2 border-[var(--color-primary)] font-medium text-[var(--color-primary)]">Tab 1</div>
              <div class="px-4 py-2 text-[var(--color-text-muted)]">Tab 2</div>
              <div class="px-4 py-2 text-[var(--color-text-muted)]">Tab 3</div>
            </div>
            <div class="py-4">
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/5"></div>
            </div>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-bold">Tabs</h3>
          <p class="text-sm text-[var(--color-text-muted)] mt-1">Switch between different views or sections of content</p>
        </div>
      </a>
    </div>
  </div>

  <div>
    <h2 class="text-2xl font-bold mb-6 text-center">Get Involved</h2>
    <div class="bg-[var(--color-bg-alt)] rounded-lg border border-[var(--color-border)] p-8 text-center">
      <p class="text-lg mb-6">The Enterprise Design System is a collaborative effort. Have questions, feedback, or want to contribute?</p>
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <a href="/contribute/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]">
          Contribute
        </a>
        <a href="/support/" class="inline-flex items-center justify-center px-5 py-3 border border-[var(--color-border)] text-base font-medium rounded-md bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]">
          Get Support
        </a>
      </div>
    </div>
  </div>
</div>