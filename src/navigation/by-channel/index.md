---
layout: layouts/base.njk
title: Navigate by Channel
description: Browse components organized by their target channels or environments
---

<div class="container mx-auto px-4 md:px-6 py-8">
  <div class="flex flex-col lg:flex-row gap-10">
    <!-- Left sidebar navigation -->
    <aside class="lg:w-64 shrink-0">
      <nav class="space-y-6">
        <div class="space-y-2">
          <h3 class="font-medium text-sm uppercase text-[var(--color-text-muted)]">Browse By</h3>
          <ul class="space-y-2">
            <li><a href="/navigation/by-channel/" class="block py-1 text-[var(--color-primary)] font-medium">Channel</a></li>
            <li><a href="/navigation/by-type/" class="block py-1 hover:text-[var(--color-primary)] transition-colors">Type</a></li>
            <li><a href="/navigation/by-owner/" class="block py-1 hover:text-[var(--color-primary)] transition-colors">Owner</a></li>
          </ul>
        </div>
      </nav>
    </aside>
    
    <!-- Main content -->
    <main class="flex-1">
      <div class="mb-10">
        <h1 class="text-3xl font-bold mb-4">Browse by Channel</h1>
        <p class="text-lg text-[var(--color-text-muted)] mb-8">Components organized by their target channels or environments.</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Web Channel -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Web
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/layout/card/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Card</a></li>
              <li><a href="/components/layout/accordion/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Accordion</a></li>
              <li><a href="/components/inputs/button/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Button</a></li>
              <li><a href="/components/navigation/breadcrumb/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Breadcrumb</a></li>
            </ul>
            <a href="/navigation/by-channel/web/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all web components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Mobile Channel -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/layout/card/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Card</a></li>
              <li><a href="/components/inputs/button/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Button</a></li>
              <li><a href="/components/feedback/toast/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Toast</a></li>
              <li><a href="/components/inputs/toggle/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Toggle</a></li>
            </ul>
            <a href="/navigation/by-channel/mobile/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all mobile components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Desktop Channel -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Desktop
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/layout/modal/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Modal</a></li>
              <li><a href="/components/layout/grid/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Grid</a></li>
              <li><a href="/components/navigation/tabs/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Tabs</a></li>
              <li><a href="/components/feedback/spinner/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Spinner</a></li>
            </ul>
            <a href="/navigation/by-channel/desktop/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all desktop components
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