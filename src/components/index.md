---
layout: layouts/page.njk
title: Components
description: A comprehensive library of reusable UI components for building enterprise applications
excludeFromSearch: false
contentType: Documentation
eleventyNavigation:
  key: Components
  order: 2
---

<div class="max-w-prose" data-motion="fade-in">
  <h1 class="mb-6 text-3xl font-bold">Enterprise Design System Components</h1>
  
  <p class="text-lg mb-8 text-[var(--color-text-muted)]">
    Our component library provides consistent, accessible, and flexible building blocks for creating enterprise applications.
  </p>

  <div class="flex flex-col sm:flex-row gap-4 mb-10">
    <a href="/components/layout/" class="animated-button inline-flex items-center justify-center px-5 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      Browse Layout Components
    </a>
    <a href="/design-system/foundations/" class="animated-button inline-flex items-center justify-center px-5 py-2 border border-[var(--color-border)] rounded-md hover:bg-[var(--color-bg-alt)] transition-colors">
      View Design Foundations
    </a>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-motion="stagger-children">
  <div class="bg-[var(--color-bg-alt)] rounded-lg p-6 border border-[var(--color-border)]">
    <h2 class="text-xl font-bold mb-4">Component Categories</h2>
    <p class="mb-4">Our components are organized into four functional categories:</p>
    <ul class="space-y-2 mb-6">
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </div>
        <div>
          <a href="/components/inputs/" class="font-medium hover:text-[var(--color-primary)]">Input Components</a> - For user input and data manipulation
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
        </div>
        <div>
          <a href="/components/layout/" class="font-medium hover:text-[var(--color-primary)]">Layout Components</a> - For structuring content and UI elements
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <a href="/components/navigation/" class="font-medium hover:text-[var(--color-primary)]">Navigation Components</a> - For user wayfinding and movement
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <a href="/components/feedback/" class="font-medium hover:text-[var(--color-primary)]">Feedback Components</a> - For user notifications and messaging
        </div>
      </li>
    </ul>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] rounded-lg p-6 border border-[var(--color-border)]">
    <h2 class="text-xl font-bold mb-4">Component Structure</h2>
    <p class="mb-4">Each component follows a consistent documentation structure:</p>
    <ul class="space-y-3">
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <span class="font-medium">Overview</span> - Description and use cases
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <span class="font-medium">Code</span> - Implementation details and API
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <span class="font-medium">Usage</span> - Guidelines and best practices
        </div>
      </li>
      <li class="flex items-start">
        <div class="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-[var(--color-primary)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <span class="font-medium">Accessibility</span> - WCAG compliance information
        </div>
      </li>
    </ul>
  </div>
</div>

<h2 class="text-2xl font-bold mb-6" data-motion="fade-in">Featured Components</h2>

<div class="grid md:grid-cols-3 gap-6 mb-10" data-motion="stagger-children">
  {% for component in collections.layoutComponents %}
    <a href="{{ component.url }}" class="animated-card block group border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-primary)] rounded-lg p-6 transition-colors">
      <h3 class="text-xl font-bold mb-2 group-hover:text-[var(--color-primary)]">{{ component.data.title }}</h3>
      <p class="text-[var(--color-text-muted)] mb-4">{{ component.data.description }}</p>
      <span class="text-[var(--color-primary)] font-medium inline-flex items-center">
        View Component
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  {% endfor %}
</div>

<div class="bg-[var(--color-bg-alt)] rounded-lg p-8 border border-[var(--color-border)] mb-12" data-motion="fade-in">
  <h2 class="text-2xl font-bold mb-4">Design Principles</h2>
  <p class="mb-6">All components in the Enterprise Design System follow these core principles:</p>
  
  <div class="grid md:grid-cols-2 gap-6">
    <div>
      <h3 class="font-bold mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
        Consistent
      </h3>
      <p>Visual and behavioral consistency across all interfaces using shared design tokens.</p>
    </div>
    
    <div>
      <h3 class="font-bold mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clip-rule="evenodd" />
        </svg>
        Accessible
      </h3>
      <p>Meeting WCAG 2.1 AA standards, making applications usable by people with disabilities.</p>
    </div>
    
    <div>
      <h3 class="font-bold mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        Responsive
      </h3>
      <p>Adapting to various screen sizes, from desktop to mobile, for a consistent user experience.</p>
    </div>
    
    <div>
      <h3 class="font-bold mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
        </svg>
        Customizable
      </h3>
      <p>Flexible components that can be customized to meet specific design needs and brand guidelines.</p>
    </div>
  </div>
</div>

<div class="text-center" data-motion="fade-in">
  <a href="/getting-started/" class="animated-button inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
    Get Started with Components
  </a>
</div>