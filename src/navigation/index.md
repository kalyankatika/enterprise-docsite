---
layout: layouts/base.njk
title: Component Navigation Hub
description: Multiple ways to browse and discover components in our design system
---

<div class="container mx-auto px-4 md:px-6 py-8">
  <div class="mb-12">
    <h1 class="text-3xl font-bold mb-4">Component Navigation Hub</h1>
    <p class="text-lg text-[var(--color-text-muted)] mb-8">Discover the right components using multiple navigation perspectives.</p>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- By Channel -->
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
        <h2 class="text-xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          Navigate by Channel
        </h2>
        <p class="text-[var(--color-text-muted)] mb-4">Find components organized by the channels or environments they're designed for.</p>
        <ul class="space-y-1 mb-6">
          <li class="text-[var(--color-text-muted)]">• Web Components</li>
          <li class="text-[var(--color-text-muted)]">• Mobile Components</li>
          <li class="text-[var(--color-text-muted)]">• Desktop Components</li>
        </ul>
        <a href="/navigation/by-channel/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
          Browse by Channel
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <!-- By Type -->
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
        <h2 class="text-xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Navigate by Type
        </h2>
        <p class="text-[var(--color-text-muted)] mb-4">Explore components categorized by their functional types and purposes.</p>
        <ul class="space-y-1 mb-6">
          <li class="text-[var(--color-text-muted)]">• Input Components</li>
          <li class="text-[var(--color-text-muted)]">• Layout Components</li>
          <li class="text-[var(--color-text-muted)]">• Navigation Components</li>
          <li class="text-[var(--color-text-muted)]">• Feedback Components</li>
        </ul>
        <a href="/navigation/by-type/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
          Browse by Type
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <!-- By Owner -->
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
        <h2 class="text-xl font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Navigate by Owner
        </h2>
        <p class="text-[var(--color-text-muted)] mb-4">Find components based on the teams responsible for their development and maintenance.</p>
        <ul class="space-y-1 mb-6">
          <li class="text-[var(--color-text-muted)]">• UI Core Team</li>
          <li class="text-[var(--color-text-muted)]">• Frontend Platform Team</li>
          <li class="text-[var(--color-text-muted)]">• Mobile Experience Team</li>
          <li class="text-[var(--color-text-muted)]">• Design Systems Team</li>
        </ul>
        <a href="/navigation/by-owner/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
          Browse by Owner
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-lg p-8 mb-12">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold mb-4 text-center">Search Components</h2>
      <p class="text-[var(--color-text-muted)] text-center mb-6">Looking for something specific? Search our component library.</p>
      
      <form action="/search/" method="get" role="search" class="relative max-w-2xl mx-auto">
        <input type="search" name="q" placeholder="Search components, patterns, or guidelines..." class="w-full py-3 pl-12 pr-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-lg">
        <div class="absolute left-4 top-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </form>
    </div>
  </div>
  
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-6">Recently Updated Components</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-4">
          Updated 2 days ago
        </span>
        <h3 class="text-xl font-bold mb-2">Accordion</h3>
        <p class="text-[var(--color-text-muted)] mb-4">Expandable content sections that help organize and declutter interfaces.</p>
        <a href="/components/layout/accordion/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
          View Component
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-4">
          Updated 5 days ago
        </span>
        <h3 class="text-xl font-bold mb-2">Button</h3>
        <p class="text-[var(--color-text-muted)] mb-4">Versatile interactive elements for user actions in various states and sizes.</p>
        <a href="/components/inputs/button/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
          View Component
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-4">
          Updated 1 week ago
        </span>
        <h3 class="text-xl font-bold mb-2">Card</h3>
        <p class="text-[var(--color-text-muted)] mb-4">Flexible container components for displaying related content and actions.</p>
        <a href="/components/layout/card/" class="text-[var(--color-primary)] font-medium inline-flex items-center hover:underline">
          View Component
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>