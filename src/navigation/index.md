---
layout: layouts/page.njk
title: Navigation
description: Access the Enterprise Design System content from multiple perspectives.
---

## Multiple Ways to Navigate

The Enterprise Design System documentation can be navigated from different perspectives to help you find exactly what you need based on your role and requirements.

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-bold mb-3">By Consuming Channel</h3>
    <p class="mb-4">Find components and resources organized by implementation platform or channel.</p>
    <a href="/navigation/by-channel/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      View Channels
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-bold mb-3">By Widget Type</h3>
    <p class="mb-4">Browse components organized by their functionality and purpose.</p>
    <a href="/navigation/by-type/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      View Types
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-bold mb-3">By Widget Owner</h3>
    <p class="mb-4">Find components based on the team or department that maintains them.</p>
    <a href="/navigation/by-owner/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      View Owners
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>

## Search Options

You can also search for specific components and resources:

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-bold mb-3">Search by Channel</h3>
    <p class="mb-4">Find components specific to a platform or implementation channel.</p>
    <form action="/search/" method="get" class="mt-4">
      <input type="hidden" name="filter" value="channel">
      <div class="flex">
        <input type="search" name="q" placeholder="e.g., web" class="flex-1 py-2 px-4 rounded-l-md border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]">
        <button type="submit" class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-r-md hover:bg-[var(--color-primary-dark)] transition-colors">
          Search
        </button>
      </div>
    </form>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-bold mb-3">Search by Type</h3>
    <p class="mb-4">Search for components by their type or functionality.</p>
    <form action="/search/" method="get" class="mt-4">
      <input type="hidden" name="filter" value="type">
      <div class="flex">
        <input type="search" name="q" placeholder="e.g., button" class="flex-1 py-2 px-4 rounded-l-md border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]">
        <button type="submit" class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-r-md hover:bg-[var(--color-primary-dark)] transition-colors">
          Search
        </button>
      </div>
    </form>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-xl font-bold mb-3">Search by Owner</h3>
    <p class="mb-4">Find components maintained by specific teams or departments.</p>
    <form action="/search/" method="get" class="mt-4">
      <input type="hidden" name="filter" value="owner">
      <div class="flex">
        <input type="search" name="q" placeholder="e.g., UX Team" class="flex-1 py-2 px-4 rounded-l-md border border-[var(--color-border)] bg-[var(--color-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]">
        <button type="submit" class="py-2 px-4 bg-[var(--color-primary)] text-white rounded-r-md hover:bg-[var(--color-primary-dark)] transition-colors">
          Search
        </button>
      </div>
    </form>
  </div>
</div>