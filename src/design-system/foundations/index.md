---
layout: layouts/page.njk
title: Design Foundations
description: Core design elements that form the building blocks of our interface
sidebarType: design-system
---

# Design Foundations

Design foundations are the core visual elements that establish our design language and ensure consistency across all enterprise applications. These building blocks form the foundation of our entire user interface and help create a cohesive user experience.

## Foundation Elements

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
  <a href="/design-system/foundations/color/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="flex space-x-2 mb-3">
          <div class="w-8 h-8 rounded-full bg-[var(--color-primary)]"></div>
          <div class="w-8 h-8 rounded-full bg-[var(--color-secondary)]"></div>
          <div class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-200"></div>
          <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Color</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our color system provides a flexible, cohesive palette optimized for digital interfaces. Learn about our color usage principles and guidelines.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Color System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/typography/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="space-y-2">
          <div class="h-4 bg-gray-800 dark:bg-gray-200 rounded w-16"></div>
          <div class="h-8 bg-gray-800 dark:bg-gray-200 rounded w-48"></div>
          <div class="h-3 bg-gray-400 dark:bg-gray-600 rounded w-56"></div>
          <div class="h-3 bg-gray-400 dark:bg-gray-600 rounded w-40"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Typography</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our typography system is designed for optimal readability and hierarchy, with a carefully selected set of fonts and text styles.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Typography System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/spacing/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="flex items-end space-x-1">
          <div class="h-4 w-4 bg-[var(--color-primary)]"></div>
          <div class="h-8 w-8 bg-[var(--color-primary)]"></div>
          <div class="h-12 w-12 bg-[var(--color-primary)]"></div>
          <div class="h-16 w-16 bg-[var(--color-primary)]"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Spacing</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">A consistent spacing system helps create balanced layouts and establish rhythmic relationships between elements.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Spacing System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/grid-system/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="grid grid-cols-4 gap-2 h-16">
          <div class="bg-[var(--color-primary)] bg-opacity-20 rounded"></div>
          <div class="bg-[var(--color-primary)] bg-opacity-20 rounded"></div>
          <div class="bg-[var(--color-primary)] bg-opacity-20 rounded"></div>
          <div class="bg-[var(--color-primary)] bg-opacity-20 rounded"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Grid System</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our responsive grid system provides a flexible framework for creating consistent layouts across different screen sizes.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Grid System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/iconography/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4">
        <div class="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Iconography</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our icon system provides a consistent visual language to enhance usability and reinforce meaning in interfaces.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Icon System →</div>
    </div>
  </a>
  
  <a href="/design-system/foundations/motion/" class="block group">
    <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
      <div class="mb-4 overflow-hidden">
        <div class="w-full h-1 bg-[var(--color-bg-alt)] rounded-full overflow-hidden">
          <div class="h-full w-1/2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
        </div>
      </div>
      <h3 class="text-xl font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">Motion</h3>
      <p class="text-[var(--color-text-muted)] flex-grow">Our motion principles guide how to use animation to enhance user experience and provide meaningful feedback.</p>
      <div class="mt-4 text-[var(--color-primary)] font-medium">View Motion System →</div>
    </div>
  </a>
</div>

## Using Design Foundations

These foundations establish the visual language of our design system and ensure consistency across all interfaces. They should be applied thoughtfully and in combination to create cohesive user experiences.

<div class="mt-8 eds-alert eds-alert-info">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Design tokens available</p>
      <p class="mt-1">All foundational elements are available as design tokens that can be integrated into your development workflow. See the <a href="/resources/design-tokens/" class="text-[var(--color-primary)] hover:underline">Design Tokens</a> page for implementation details.</p>
    </div>
  </div>
</div>

## Design Foundation Resources

<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-semibold mb-2">Figma Libraries</h3>
    <p class="mb-4 text-[var(--color-text-muted)]">Access our Figma libraries that contain all design foundation elements ready for use in your designs.</p>
    <a href="/resources/downloads/" class="text-[var(--color-primary)] font-medium hover:underline">View Figma Resources →</a>
  </div>
  
  <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-semibold mb-2">Implementation Guide</h3>
    <p class="mb-4 text-[var(--color-text-muted)]">Learn how to implement our design foundations in your code to create consistent enterprise applications.</p>
    <a href="/get-started/implementation/" class="text-[var(--color-primary)] font-medium hover:underline">View Implementation Guide →</a>
  </div>
</div>