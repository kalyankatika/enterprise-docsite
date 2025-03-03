---
layout: layouts/component.njk
title: Component Name
description: Short description of the component's purpose and use cases.
category: layout
version: 1.0.0
examplesContent: true
---

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Examples</h2>
  
  <div class="space-y-12">
    <!-- Basic Example -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Basic Example</h3>
      <p class="mb-6">A standard implementation with default styling.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="eds-component">
          <!-- Replace with your component's example code -->
          <div class="bg-white p-4">
            <p>Basic component example goes here</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-html">&lt;div class="eds-component"&gt;
  &lt;div class="bg-white p-4"&gt;
    &lt;p&gt;Basic component example goes here&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    
    <!-- Example Variant 1 -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Variant 1</h3>
      <p class="mb-6">Description of this variant and when to use it.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="eds-component eds-component--variant-1">
          <!-- Replace with your component's example code -->
          <div class="bg-white p-4">
            <p>Variant 1 example</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-html">&lt;div class="eds-component eds-component--variant-1"&gt;
  &lt;div class="bg-white p-4"&gt;
    &lt;p&gt;Variant 1 example&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    
    <!-- Example Variant 2 -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Variant 2</h3>
      <p class="mb-6">Description of this variant and when to use it.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="eds-component eds-component--variant-2">
          <!-- Replace with your component's example code -->
          <div class="bg-white p-4">
            <p>Variant 2 example</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Different State Example -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">State Example</h3>
      <p class="mb-6">Example showing the component in different states.</p>
      
      <div class="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-[var(--color-border)] rounded-md overflow-hidden">
          <div class="bg-white p-4">
            <h4 class="text-lg font-medium mb-2">Default State</h4>
            <div class="eds-component">
              <!-- Replace with default state example -->
              <p>Default state</p>
            </div>
          </div>
        </div>
        <div class="border border-[var(--color-border)] rounded-md overflow-hidden">
          <div class="bg-white p-4">
            <h4 class="text-lg font-medium mb-2">Active State</h4>
            <div class="eds-component eds-component--active">
              <!-- Replace with active state example -->
              <p>Active state</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Complex Example -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Complex Integration Example</h3>
      <p class="mb-6">A more complex example showing how this component can be integrated with other components or in a specific context.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="bg-white p-6">
          <!-- Replace with a complex integration example -->
          <div class="eds-component">
            <div class="p-4 border-b border-[var(--color-border)]">
              <p>Complex example that shows this component being used in a practical context with other components</p>
            </div>
            <div class="p-4">
              <p>Additional content to demonstrate integration</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-html">&lt;div class="bg-white p-6"&gt;
  &lt;div class="eds-component"&gt;
    &lt;div class="p-4 border-b border-[var(--color-border)]"&gt;
      &lt;p&gt;Complex example that shows this component being used in a practical context&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="p-4"&gt;
      &lt;p&gt;Additional content to demonstrate integration&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    
    <!-- Responsive Example -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Responsive Behavior</h3>
      <p class="mb-6">Example demonstrating how the component responds to different screen sizes.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="bg-white p-4">
          <div class="eds-component">
            <!-- Replace with responsive example -->
            <p>Resize the browser window to see how this component responds to different screen sizes</p>
          </div>
        </div>
      </div>
      
      <div class="bg-[var(--color-info-light)] p-4 rounded-md mb-6">
        <div class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-info)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-[var(--color-text-muted)]">The component should maintain usability across all viewport sizes, from mobile to desktop.</p>
        </div>
      </div>
    </div>
    
    <!-- Accessibility Example -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Fully Accessible Example</h3>
      <p class="mb-6">An example with all required accessibility attributes for screen reader support.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="bg-white p-4">
          <!-- Replace with accessible example -->
          <div class="eds-component" role="role-name" aria-label="Accessible component example">
            <p>This example includes all necessary ARIA attributes for accessibility</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-html">&lt;div class="eds-component" 
  role="role-name" 
  aria-label="Accessible component example"&gt;
  &lt;p&gt;This example includes all necessary ARIA attributes for accessibility&lt;/p&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </div>
</section>