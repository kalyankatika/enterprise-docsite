---
layout: layouts/component.njk
title: Component Name
description: Short description of the component's purpose and use cases.
category: layout
version: 1.0.0
a11yContent: true
---

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Accessibility</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-6">Components should be accessible to all users, including those using assistive technologies such as screen readers. Follow these guidelines to ensure your components meet accessibility standards.</p>
    
    <h3 class="text-lg font-bold mb-4">ARIA Roles and Attributes</h3>
    <ul class="space-y-3 list-disc pl-5 mb-6">
      <li>Use <code>aria-attribute-1</code> to [purpose]</li>
      <li>Include <code>aria-attribute-2</code> that [purpose]</li>
      <li>Apply <code>role="role-name"</code> to [element] with <code>aria-attribute-3</code> [purpose]</li>
      <li>Ensure all interactive elements have appropriate ARIA roles and states</li>
      <li>Use <code>aria-disabled="true"</code> when component is disabled but still visible</li>
    </ul>
    
    <h3 class="text-lg font-bold mb-4">Keyboard Navigation</h3>
    <table class="w-full text-left border-collapse mb-6">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-2 px-4 border border-[var(--color-border)]">Key</th>
          <th class="py-2 px-4 border border-[var(--color-border)]">Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Tab</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Moves focus to the component</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Enter or Space</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Activates the component</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Arrow Keys</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Description of arrow key behavior</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Escape</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Description of escape key behavior</td>
        </tr>
      </tbody>
    </table>
    
    <h3 class="text-lg font-bold mb-4">Implementation</h3>
    <p class="mb-4">Here's how to correctly implement an accessible component:</p>
    
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
      <pre><code class="language-html">&lt;div class="eds-component"&gt;
  &lt;element 
    id="component-id-1" 
    class="eds-component__element" 
    aria-attribute-1="value" 
    aria-attribute-2="value"&gt;
    Component content
    &lt;span class="eds-component__icon" aria-hidden="true"&gt;&lt;/span&gt;
  &lt;/element&gt;
  &lt;div 
    id="component-id-2" 
    class="eds-component__content" 
    role="role-name" 
    aria-attribute-3="component-id-1"&gt;
    Component content goes here.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    
    <div class="bg-[var(--color-warning-light)] p-4 rounded-md mb-6">
      <div class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-warning)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p class="text-[var(--color-text-muted)]">Important accessibility warning or consideration for this component.</p>
      </div>
    </div>
    
    <h3 class="text-lg font-bold mb-4">Testing Criteria</h3>
    <p class="mb-4">Ensure your component passes these accessibility checks:</p>
    
    <ul class="space-y-2 list-disc pl-5">
      <li>Component must be focusable and operable with a keyboard</li>
      <li>State changes must be programmatically announced to screen readers</li>
      <li>Focus must remain in appropriate location after interactions</li>
      <li>Content must be properly associated with its related elements</li>
      <li>Color contrast must meet WCAG AA standards (4.5:1 for normal text)</li>
      <li>Icons must have sufficient contrast and not rely solely on color</li>
      <li>Animations must respect user preferences via the prefers-reduced-motion media query</li>
    </ul>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">WAI-ARIA Compliance</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-6">The component follows the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/" class="text-[var(--color-primary)] underline">WAI-ARIA Design Pattern</a>. This ensures consistency with established accessibility standards and patterns.</p>
    
    <h3 class="text-lg font-bold mb-4">Required ARIA Attributes</h3>
    <table class="w-full text-left border-collapse mb-6">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-2 px-4 border border-[var(--color-border)]">Attribute</th>
          <th class="py-2 px-4 border border-[var(--color-border)]">Applied to</th>
          <th class="py-2 px-4 border border-[var(--color-border)]">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>aria-attribute-1</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Element type</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Purpose description</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>aria-attribute-2</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Element type</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Purpose description</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>aria-attribute-3</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Element type</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Purpose description</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>role="role-name"</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Element type</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Purpose description</td>
        </tr>
      </tbody>
    </table>
    
    <div class="bg-[var(--color-info-light)] p-4 rounded-md">
      <div class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-info)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-[var(--color-text-muted)]">Important accessibility tip for implementing this component correctly.</p>
      </div>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Responsive Considerations</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">For users on mobile or touch devices:</p>
    
    <ul class="space-y-3 list-disc pl-5">
      <li>Ensure touch targets are at least 44×44 pixels</li>
      <li>Provide sufficient spacing between interactive elements to prevent accidental taps</li>
      <li>Consider alternative patterns for hover-dependent interactions</li>
      <li>Ensure text remains readable at smaller viewport sizes</li>
      <li>Adapt padding and margins for comfortable viewing on small screens</li>
    </ul>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Screen Reader Announcements</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-6">When implemented correctly, screen readers should announce the following when interacting with the component:</p>
    
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-2 px-4 border border-[var(--color-border)]">Action</th>
          <th class="py-2 px-4 border border-[var(--color-border)]">Announcement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Focus on component</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Component Name, state, role"</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Action 1</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Component Name, updated state, role"</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Action 2</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Component Name, updated state, role"</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Focus on disabled component</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Component Name, role, disabled"</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="bg-[var(--color-success-light)] p-4 rounded-md">
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <p class="text-[var(--color-text-muted)]">Test your components with real screen readers like NVDA, JAWS, and VoiceOver to ensure they work as expected.</p>
    </div>
  </div>
</section>