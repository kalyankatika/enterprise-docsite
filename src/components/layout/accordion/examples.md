---
layout: layouts/component.njk
title: Accordion
description: Accordions are lightweight containers that can be used independently or integrated into a larger surface, interacting with the expansion controls and other content on the same page section or container to show or hide information.
category: layout
version: 1.0.0
examplesContent: true
---

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Examples</h2>
  
  <div class="space-y-12">
    <!-- Basic Accordion -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Basic Accordion</h3>
      <p class="mb-6">A standard accordion with default styling.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="eds-accordion">
          <div class="bg-white">
            <button class="w-full p-4 flex items-center justify-between text-left font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
              <span>Section 1: Introduction</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="p-4 border-t border-[var(--color-border)]">
              <p>This is the content for section 1. It can include any type of content including text, images, and other components.</p>
            </div>
          </div>
          
          <div class="border-t border-[var(--color-border)] bg-white">
            <button class="w-full p-4 flex items-center justify-between text-left font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
              <span>Section 2: Features</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div class="border-t border-[var(--color-border)] bg-white">
            <button class="w-full p-4 flex items-center justify-between text-left font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
              <span>Section 3: Specifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-html">&lt;div class="eds-accordion"&gt;
  &lt;div&gt;
    &lt;button class="w-full p-4 flex items-center justify-between text-left font-medium"&gt;
      &lt;span&gt;Section 1: Introduction&lt;/span&gt;
      &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
    &lt;div class="p-4 border-t"&gt;
      &lt;p&gt;This is the content for section 1.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class="border-t"&gt;
    &lt;button class="w-full p-4 flex items-center justify-between text-left font-medium"&gt;
      &lt;span&gt;Section 2: Features&lt;/span&gt;
      &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  
  &lt;div class="border-t"&gt;
    &lt;button class="w-full p-4 flex items-center justify-between text-left font-medium"&gt;
      &lt;span&gt;Section 3: Specifications&lt;/span&gt;
      &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
        &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    
    <!-- Icon Left Accordion -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Icon Left Accordion</h3>
      <p class="mb-6">An accordion with the expand/collapse icon positioned on the left.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="eds-accordion">
          <div class="bg-white">
            <button class="w-full p-4 flex items-center text-left font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span>Payment Methods</span>
            </button>
            <div class="p-4 pl-11 border-t border-[var(--color-border)]">
              <p>Configure your payment methods and preferences.</p>
            </div>
          </div>
          
          <div class="border-t border-[var(--color-border)] bg-white">
            <button class="w-full p-4 flex items-center text-left font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span>Shipping Address</span>
            </button>
          </div>
          
          <div class="border-t border-[var(--color-border)] bg-white">
            <button class="w-full p-4 flex items-center text-left font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span>Order History</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- FAQ Accordion -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">FAQ Accordion</h3>
      <p class="mb-6">A common implementation pattern for FAQs with multiple sections that can be open simultaneously.</p>
      
      <div class="mb-8 space-y-3">
        <div class="border border-[var(--color-border)] rounded-md overflow-hidden bg-white">
          <button class="w-full p-4 flex items-center justify-between text-left font-medium bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
            <span>How do I reset my password?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="p-4">
            <p>To reset your password, click on the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password.</p>
          </div>
        </div>
        
        <div class="border border-[var(--color-border)] rounded-md overflow-hidden bg-white">
          <button class="w-full p-4 flex items-center justify-between text-left font-medium bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
            <span>How do I update my account information?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div class="border border-[var(--color-border)] rounded-md overflow-hidden bg-white">
          <button class="w-full p-4 flex items-center justify-between text-left font-medium bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset">
            <span>Can I change my subscription plan?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Accessible Accordion -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Fully Accessible Accordion</h3>
      <p class="mb-6">An example with all required accessibility attributes for screen reader support.</p>
      
      <div class="mb-8 border border-[var(--color-border)] rounded-md overflow-hidden">
        <div class="eds-accordion">
          <h3>
            <button 
              id="acc-panel1-header" 
              class="w-full p-4 flex items-center justify-between text-left font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset"
              aria-expanded="true"
              aria-controls="acc-panel1-content">
              <span>Getting Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)] transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h3>
          <div 
            id="acc-panel1-content" 
            role="region" 
            aria-labelledby="acc-panel1-header"
            class="p-4 border-t border-[var(--color-border)] bg-white">
            <p>This panel includes all the necessary ARIA attributes for accessible accordions. Notice how the expanded state is clearly indicated both visually and programmatically.</p>
          </div>
          
          <h3>
            <button 
              id="acc-panel2-header" 
              class="w-full p-4 flex items-center justify-between text-left font-medium bg-white border-t border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset"
              aria-expanded="false"
              aria-controls="acc-panel2-content">
              <span>Advanced Configuration</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h3>
          <div 
            id="acc-panel2-content" 
            role="region" 
            aria-labelledby="acc-panel2-header"
            class="hidden p-4 border-t border-[var(--color-border)] bg-white">
            <p>This content is hidden by default.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-html">&lt;div class="eds-accordion"&gt;
  &lt;h3&gt;
    &lt;button 
      id="acc-panel1-header" 
      class="w-full p-4 flex items-center justify-between text-left font-medium"
      aria-expanded="true"
      aria-controls="acc-panel1-content"&gt;
      &lt;span&gt;Getting Started&lt;/span&gt;
      &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
        &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/h3&gt;
  &lt;div 
    id="acc-panel1-content" 
    role="region" 
    aria-labelledby="acc-panel1-header"
    class="p-4 border-t"&gt;
    &lt;p&gt;Panel content with accessibility features.&lt;/p&gt;
  &lt;/div&gt;
  
  &lt;h3&gt;
    &lt;button 
      id="acc-panel2-header" 
      class="w-full p-4 flex items-center justify-between text-left font-medium border-t"
      aria-expanded="false"
      aria-controls="acc-panel2-content"&gt;
      &lt;span&gt;Advanced Configuration&lt;/span&gt;
      &lt;svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"&gt;
        &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /&gt;
      &lt;/svg&gt;
    &lt;/button&gt;
  &lt;/h3&gt;
  &lt;div 
    id="acc-panel2-content" 
    role="region" 
    aria-labelledby="acc-panel2-header"
    class="hidden p-4 border-t"&gt;
    &lt;p&gt;This content is hidden by default.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
    
    <!-- Custom Styled Accordion -->
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-xl font-bold mb-4">Custom Styled Accordion</h3>
      <p class="mb-6">An example with custom styling applied to demonstrate flexibility.</p>
      
      <div class="mb-8 space-y-4">
        <div class="rounded-md overflow-hidden bg-[var(--color-primary-light)]">
          <button class="w-full p-4 flex items-center justify-between text-left font-medium text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset rounded-t-md">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Performance Optimization
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div class="p-4 bg-white border border-[var(--color-primary-light)] border-t-0 rounded-b-md">
            <p>This accordion uses custom colors and icons to match a specific visual style. You can adapt the styling to fit your application's design system.</p>
          </div>
        </div>
        
        <div class="rounded-md overflow-hidden bg-[var(--color-primary-light)]">
          <button class="w-full p-4 flex items-center justify-between text-left font-medium text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset rounded-t-md">
            <span class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Security Best Practices
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Simple accordion functionality for the examples
    const accordionButtons = document.querySelectorAll('.eds-accordion button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const controlsId = button.getAttribute('aria-controls');
        const content = controlsId ? document.getElementById(controlsId) : button.nextElementSibling;
        const icon = button.querySelector('svg');
        
        if (isExpanded) {
          button.setAttribute('aria-expanded', 'false');
          if (content) content.classList.add('hidden');
          if (icon) icon.classList.remove('rotate-180');
        } else {
          button.setAttribute('aria-expanded', 'true');
          if (content) content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });
  });
</script>