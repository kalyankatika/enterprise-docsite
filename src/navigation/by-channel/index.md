---
layout: layouts/page.njk
title: Navigate by Consuming Channel
description: Find components organized by implementation channel or platform.
---

## Components by Consuming Channel

Browse components based on the platform or channel where they are implemented.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
  <!-- Web Channel -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
      <h3 class="text-xl font-bold">Web Components</h3>
    </div>
    <p class="mb-4">Components built for web applications with HTML, CSS, and JavaScript.</p>
    
    <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Available Components:</h4>
    <ul class="space-y-1 mb-5">
      <li><a href="/components/inputs/button/" class="text-[var(--color-primary)]">Button</a></li>
      <li><a href="/components/inputs/checkbox/" class="text-[var(--color-primary)]">Checkbox</a></li>
      <li><a href="/components/layout/card/" class="text-[var(--color-primary)]">Card</a></li>
      <li><a href="/components/navigation/breadcrumb/" class="text-[var(--color-primary)]">Breadcrumb</a></li>
      <li><a href="/components/feedback/alert/" class="text-[var(--color-primary)]">Alert</a></li>
    </ul>
    
    <a href="/components/web/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      View All Web Components
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
  
  <!-- Mobile Channel -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <h3 class="text-xl font-bold">Mobile Components</h3>
    </div>
    <p class="mb-4">Components designed for iOS and Android mobile applications.</p>
    
    <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Available Components:</h4>
    <ul class="space-y-1 mb-5">
      <li><a href="/components/inputs/button/" class="text-[var(--color-primary)]">Button</a></li>
      <li><a href="/components/inputs/toggle-switch/" class="text-[var(--color-primary)]">Toggle Switch</a></li>
      <li><a href="/components/layout/card/" class="text-[var(--color-primary)]">Card</a></li>
      <li><a href="/components/navigation/tab-bar/" class="text-[var(--color-primary)]">Tab Bar</a></li>
      <li><a href="/components/feedback/toast/" class="text-[var(--color-primary)]">Toast</a></li>
    </ul>
    
    <a href="/components/mobile/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      View All Mobile Components
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
  
  <!-- Email Channel -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <h3 class="text-xl font-bold">Email Components</h3>
    </div>
    <p class="mb-4">Components designed for email templates and communications.</p>
    
    <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Available Components:</h4>
    <ul class="space-y-1 mb-5">
      <li><a href="/components/inputs/button/" class="text-[var(--color-primary)]">Button</a></li>
      <li><a href="/components/layout/section/" class="text-[var(--color-primary)]">Section</a></li>
      <li><a href="/components/layout/spacer/" class="text-[var(--color-primary)]">Spacer</a></li>
      <li><a href="/components/content/heading/" class="text-[var(--color-primary)]">Heading</a></li>
      <li><a href="/components/content/divider/" class="text-[var(--color-primary)]">Divider</a></li>
    </ul>
    
    <a href="/components/email/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      View All Email Components
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
  
  <!-- Print Channel -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      <h3 class="text-xl font-bold">Print Components</h3>
    </div>
    <p class="mb-4">Components designed for print materials and documents.</p>
    
    <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Available Components:</h4>
    <ul class="space-y-1 mb-5">
      <li><a href="/components/layout/grid/" class="text-[var(--color-primary)]">Grid</a></li>
      <li><a href="/components/content/typography/" class="text-[var(--color-primary)]">Typography</a></li>
      <li><a href="/components/content/table/" class="text-[var(--color-primary)]">Table</a></li>
      <li><a href="/components/content/image/" class="text-[var(--color-primary)]">Image</a></li>
      <li><a href="/components/content/footer/" class="text-[var(--color-primary)]">Footer</a></li>
    </ul>
    
    <a href="/components/print/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      View All Print Components
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>

## Implementing Across Channels

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mt-8">
  <h3 class="text-xl font-bold mb-4">Cross-Channel Components</h3>
  <p>Some components are designed to work across multiple channels with adaptations for each context. Our design system provides guidelines for maintaining consistency across implementations.</p>
  
  <div class="mt-6">
    <a href="/design-system/cross-channel/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      Learn About Cross-Channel Design
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>