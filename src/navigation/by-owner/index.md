---
layout: layouts/base.njk
title: Navigate by Owner
description: Browse components organized by their owners and teams responsible for maintenance
---

<div class="container mx-auto px-4 md:px-6 py-8">
  <div class="flex flex-col lg:flex-row gap-10">
    <!-- Left sidebar navigation -->
    <aside class="lg:w-64 shrink-0">
      <nav class="space-y-6">
        <div class="space-y-2">
          <h3 class="font-medium text-sm uppercase text-[var(--color-text-muted)]">Browse By</h3>
          <ul class="space-y-2">
            <li><a href="/navigation/by-channel/" class="block py-1 hover:text-[var(--color-primary)] transition-colors">Channel</a></li>
            <li><a href="/navigation/by-type/" class="block py-1 hover:text-[var(--color-primary)] transition-colors">Type</a></li>
            <li><a href="/navigation/by-owner/" class="block py-1 text-[var(--color-primary)] font-medium">Owner</a></li>
          </ul>
        </div>
      </nav>
    </aside>
    
    <!-- Main content -->
    <main class="flex-1">
      <div class="mb-10">
        <h1 class="text-3xl font-bold mb-4">Browse by Owner</h1>
        <p class="text-lg text-[var(--color-text-muted)] mb-8">Components organized by the teams responsible for their development and maintenance.</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- UI Core Team -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center text-xl font-bold">UI</div>
              <div class="ml-4">
                <h2 class="text-xl font-bold">UI Core Team</h2>
                <p class="text-sm text-[var(--color-text-muted)]">Core component library maintainers</p>
              </div>
            </div>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/layout/card/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Card</a></li>
              <li><a href="/components/layout/accordion/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Accordion</a></li>
              <li><a href="/components/inputs/button/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Button</a></li>
              <li><a href="/components/navigation/breadcrumb/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Breadcrumb</a></li>
            </ul>
            <a href="/teams/ui-core/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all UI Core components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Frontend Platform Team -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">FP</div>
              <div class="ml-4">
                <h2 class="text-xl font-bold">Frontend Platform</h2>
                <p class="text-sm text-[var(--color-text-muted)]">Advanced components and tools</p>
              </div>
            </div>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/data-display/table/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Table</a></li>
              <li><a href="/components/data-display/chart/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Chart</a></li>
              <li><a href="/components/data-display/tree/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Tree</a></li>
              <li><a href="/components/data-display/visualization/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Visualization</a></li>
            </ul>
            <a href="/teams/frontend-platform/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all Frontend Platform components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Mobile Experience Team -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">ME</div>
              <div class="ml-4">
                <h2 class="text-xl font-bold">Mobile Experience</h2>
                <p class="text-sm text-[var(--color-text-muted)]">Mobile-specific components</p>
              </div>
            </div>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/mobile/swipe-actions/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Swipe Actions</a></li>
              <li><a href="/components/mobile/pull-to-refresh/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Pull to Refresh</a></li>
              <li><a href="/components/mobile/bottom-sheet/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Bottom Sheet</a></li>
              <li><a href="/components/mobile/gesture-handler/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Gesture Handler</a></li>
            </ul>
            <a href="/teams/mobile-experience/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all Mobile Experience components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Design Systems Team -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl font-bold">DS</div>
              <div class="ml-4">
                <h2 class="text-xl font-bold">Design Systems</h2>
                <p class="text-sm text-[var(--color-text-muted)]">Design tokens and foundations</p>
              </div>
            </div>
            <ul class="space-y-2 mb-4">
              <li><a href="/design-system/foundations/colors/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Colors</a></li>
              <li><a href="/design-system/foundations/typography/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Typography</a></li>
              <li><a href="/design-system/foundations/spacing/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Spacing</a></li>
              <li><a href="/design-system/foundations/icons/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Icons</a></li>
            </ul>
            <a href="/teams/design-systems/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all Design Systems resources
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Accessibility Team -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl font-bold">A11y</div>
              <div class="ml-4">
                <h2 class="text-xl font-bold">Accessibility</h2>
                <p class="text-sm text-[var(--color-text-muted)]">Specialized accessible components</p>
              </div>
            </div>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/a11y/screen-reader/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Screen Reader</a></li>
              <li><a href="/components/a11y/focus-trap/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Focus Trap</a></li>
              <li><a href="/components/a11y/skip-link/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Skip Link</a></li>
              <li><a href="/components/a11y/aria-live/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">ARIA Live</a></li>
            </ul>
            <a href="/teams/accessibility/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all Accessibility components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>