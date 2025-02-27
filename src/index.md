---
layout: base.njk
title: Enterprise Design System
description: A comprehensive design system for creating consistent, accessible, and beautiful enterprise applications
---

<div class="max-w-7xl mx-auto">
  <!-- Hero Section -->
  <section class="py-12 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Enterprise Design System</h1>
    <p class="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto mb-8">
      A comprehensive design system for creating consistent, accessible, and beautiful enterprise applications.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="/get-started/" class="eds-button-primary">Get Started</a>
      <a href="/components/" class="eds-button-secondary">Browse Components</a>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-center mb-12">Why use our Design System?</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
        <div class="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Consistent UI</h3>
        <p class="text-[var(--color-text-muted)]">Maintain consistency across all your enterprise applications with our pre-designed, reusable components.</p>
      </div>
      
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
        <div class="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Developer Friendly</h3>
        <p class="text-[var(--color-text-muted)]">Built with the developer experience in mind, our components are easy to implement and customize to fit your needs.</p>
      </div>
      
      <div class="bg-[var(--color-bg)] p-6 rounded-lg border border-[var(--color-border)] shadow-sm">
        <div class="w-12 h-12 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Accessibility First</h3>
        <p class="text-[var(--color-text-muted)]">All components meet WCAG 2.1 AA standards, ensuring your applications are accessible to everyone.</p>
      </div>
    </div>
  </section>

  <!-- Components Preview Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-alt)] rounded-xl my-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Explore Our Components</h2>
      <p class="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
        Browse our extensive library of UI components, each designed for maximum usability and flexibility.
      </p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <a href="/components/layout/container/" class="block group">
        <div class="aspect-square bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-all group-hover:border-[var(--color-primary)] group-hover:shadow-md overflow-hidden">
          <div class="w-2/3 h-2/3 border-2 border-dashed border-[var(--color-text-muted)] rounded flex items-center justify-center text-[var(--color-text-muted)] group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]">
            Container
          </div>
        </div>
        <p class="mt-2 text-center font-medium">Container</p>
      </a>
      
      <a href="/components/inputs/button/" class="block group">
        <div class="aspect-square bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-all group-hover:border-[var(--color-primary)] group-hover:shadow-md">
          <button class="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md shadow-sm">Button</button>
        </div>
        <p class="mt-2 text-center font-medium">Button</p>
      </a>
      
      <a href="/components/navigation/tabs/" class="block group">
        <div class="aspect-square bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-all group-hover:border-[var(--color-primary)] group-hover:shadow-md">
          <div class="flex border-b border-[var(--color-border)] w-4/5">
            <div class="px-3 py-2 border-b-2 border-[var(--color-primary)] text-[var(--color-primary)] text-sm">Tab 1</div>
            <div class="px-3 py-2 text-[var(--color-text-muted)] text-sm">Tab 2</div>
          </div>
        </div>
        <p class="mt-2 text-center font-medium">Tabs</p>
      </a>
      
      <a href="/components/feedback/alert/" class="block group">
        <div class="aspect-square bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-all group-hover:border-[var(--color-primary)] group-hover:shadow-md">
          <div class="w-4/5 p-3 bg-[var(--color-success-light)] text-[var(--color-success-dark)] rounded-lg text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Success alert
          </div>
        </div>
        <p class="mt-2 text-center font-medium">Alert</p>
      </a>
    </div>
    
    <div class="text-center mt-10">
      <a href="/components/" class="eds-button-primary">View All Components</a>
    </div>
  </section>

  <!-- Getting Started Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">Getting Started</h2>
      
      <div class="prose dark:prose-invert max-w-none">
        <p>Add the Enterprise Design System to your project in just a few steps:</p>
        
        <h3>1. Install the package</h3>
        <pre class="bg-[var(--color-code-bg)] p-4 rounded-lg"><code>npm install @enterprise/design-system</code></pre>
        
        <h3>2. Import the styles</h3>
        <pre class="bg-[var(--color-code-bg)] p-4 rounded-lg"><code>import '@enterprise/design-system/dist/styles.css';</code></pre>
        
        <h3>3. Use the components</h3>
        <pre class="bg-[var(--color-code-bg)] p-4 rounded-lg"><code>import { Button, Container } from '@enterprise/design-system';

function App() {
  return (
    &lt;Container&gt;
      &lt;Button variant="primary"&gt;Get Started&lt;/Button&gt;
    &lt;/Container&gt;
  );
}</code></pre>
        
        <p>Check out our <a href="/get-started/" class="text-[var(--color-primary)] hover:underline">comprehensive guide</a> for detailed instructions on getting started with the Enterprise Design System.</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary)] text-white rounded-xl my-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p class="text-xl opacity-90 mb-8">
        Join the hundreds of developers already building beautiful, accessible enterprise applications with our design system.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/get-started/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[var(--color-primary)] bg-white hover:bg-gray-100">
          Get Started
        </a>
        <a href="https://github.com/enterprise/design-system" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-[var(--color-primary-dark)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </section>
</div>