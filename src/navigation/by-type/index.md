---
layout: layouts/base.njk
title: Navigate by Type
description: Browse components organized by their functional types and categories
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
            <li><a href="/navigation/by-type/" class="block py-1 text-[var(--color-primary)] font-medium">Type</a></li>
            <li><a href="/navigation/by-owner/" class="block py-1 hover:text-[var(--color-primary)] transition-colors">Owner</a></li>
          </ul>
        </div>
      </nav>
    </aside>
    
    <!-- Main content -->
    <main class="flex-1">
      <div class="mb-10">
        <h1 class="text-3xl font-bold mb-4">Browse by Type</h1>
        <p class="text-lg text-[var(--color-text-muted)] mb-8">Components organized by their functional categories and types.</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Input Types -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Input Components
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/inputs/button/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Button</a></li>
              <li><a href="/components/inputs/checkbox/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Checkbox</a></li>
              <li><a href="/components/inputs/radio/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Radio</a></li>
              <li><a href="/components/inputs/select/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Select</a></li>
            </ul>
            <a href="/components/inputs/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all input components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Layout Types -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Layout Components
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/layout/card/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Card</a></li>
              <li><a href="/components/layout/accordion/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Accordion</a></li>
              <li><a href="/components/layout/modal/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Modal</a></li>
              <li><a href="/components/layout/grid/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Grid</a></li>
            </ul>
            <a href="/components/layout/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all layout components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Navigation Types -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              Navigation Components
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/navigation/breadcrumb/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Breadcrumb</a></li>
              <li><a href="/components/navigation/tabs/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Tabs</a></li>
              <li><a href="/components/navigation/pagination/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Pagination</a></li>
              <li><a href="/components/navigation/menu/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Menu</a></li>
            </ul>
            <a href="/components/navigation/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all navigation components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Feedback Types -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Feedback Components
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/feedback/alert/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Alert</a></li>
              <li><a href="/components/feedback/toast/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Toast</a></li>
              <li><a href="/components/feedback/progress/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Progress</a></li>
              <li><a href="/components/feedback/spinner/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Spinner</a></li>
            </ul>
            <a href="/components/feedback/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all feedback components
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <!-- Data Display Types -->
          <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
            <h2 class="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Data Display Components
            </h2>
            <ul class="space-y-2 mb-4">
              <li><a href="/components/data-display/table/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Table</a></li>
              <li><a href="/components/data-display/list/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">List</a></li>
              <li><a href="/components/data-display/badge/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Badge</a></li>
              <li><a href="/components/data-display/tag/" class="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Tag</a></li>
            </ul>
            <a href="/components/data-display/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
              View all data display components
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