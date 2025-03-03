---
layout: layouts/component.njk
title: Accordion
description: Accordions are lightweight containers that can be used independently or integrated into a larger surface, interacting with the expansion controls and other content on the same page section or container to show or hide information.
category: layout
version: 1.0.0
a11yContent: true
subTabs:
  - label: Guidelines
    url: /components/layout/accordion/accessibility/
  - label: Technical Requirements
    url: /components/layout/accordion/accessibility/#wai-aria-compliance
  - label: Testing
    url: /components/layout/accordion/accessibility/#screen-reader-announcements
---

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Accessibility</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-6">Accordions should be accessible to all users, including those using assistive technologies such as screen readers. Follow these guidelines to ensure your accordions meet accessibility standards.</p>
    
    <h3 class="text-lg font-bold mb-4">ARIA Roles and Attributes</h3>
    <ul class="space-y-3 list-disc pl-5 mb-6">
      <li>Use <code>aria-expanded</code> on the header button to indicate the expanded/collapsed state</li>
      <li>Include <code>aria-controls</code> on the header button that points to the ID of the content panel</li>
      <li>Apply <code>role="region"</code> to the content panel with <code>aria-labelledby</code> pointing to the header ID</li>
      <li>Ensure all interactive elements have appropriate ARIA roles and states</li>
      <li>Use <code>aria-disabled="true"</code> when an accordion is disabled but still visible</li>
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
          <td class="py-2 px-4 border border-[var(--color-border)]">Moves focus to the accordion header</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Enter or Space</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Toggles the accordion panel between expanded and collapsed states</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Arrow Down</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">When focus is on an accordion header, moves focus to the next accordion header</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Arrow Up</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">When focus is on an accordion header, moves focus to the previous accordion header</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Home</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">When focus is on an accordion header, moves focus to the first accordion header</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">End</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">When focus is on an accordion header, moves focus to the last accordion header</td>
        </tr>
      </tbody>
    </table>
    
    <h3 class="text-lg font-bold mb-4">Implementation</h3>
    <p class="mb-4">Here's how to correctly implement an accessible accordion:</p>
    
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
      <pre><code class="language-html">&lt;div class="eds-accordion"&gt;
  &lt;h3&gt;
    &lt;button 
      id="accordion-header-1" 
      class="eds-accordion__header" 
      aria-expanded="false" 
      aria-controls="accordion-panel-1"&gt;
      Accordion Heading
      &lt;span class="eds-accordion__icon" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;/button&gt;
  &lt;/h3&gt;
  &lt;div 
    id="accordion-panel-1" 
    class="eds-accordion__content" 
    role="region" 
    aria-labelledby="accordion-header-1" 
    hidden&gt;
    Accordion content goes here.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    
    <div class="bg-[var(--color-warning-light)] p-4 rounded-md mb-6">
      <div class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-warning)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p class="text-[var(--color-text-muted)]">Don't use role="button" on elements that aren't naturally focused in the tab order. Instead, use a semantic button element to ensure proper keyboard interaction.</p>
      </div>
    </div>
    
    <h3 class="text-lg font-bold mb-4">Testing Criteria</h3>
    <p class="mb-4">Ensure your accordion passes these accessibility checks:</p>
    
    <ul class="space-y-2 list-disc pl-5">
      <li>Accordion headers must be focusable and operable with a keyboard</li>
      <li>State changes must be programmatically announced to screen readers</li>
      <li>Focus must remain on the header after expanding/collapsing</li>
      <li>Content must be properly associated with its header</li>
      <li>Color contrast must meet WCAG AA standards (4.5:1 for normal text)</li>
      <li>Icons must have sufficient contrast and not rely solely on color</li>
      <li>Animations must respect user preferences via the prefers-reduced-motion media query</li>
    </ul>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">WAI-ARIA Compliance</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-6">The accordion component follows the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" class="text-[var(--color-primary)] underline">WAI-ARIA Accordion Pattern</a>. This ensures consistency with established accessibility standards and patterns.</p>
    
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
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>aria-expanded</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Accordion header button</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Indicates whether the accordion panel is expanded or collapsed</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>aria-controls</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Accordion header button</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">References the ID of the controlled panel</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>aria-labelledby</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Accordion panel</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">References the ID of the header for labeling</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]"><code>role="region"</code></td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Accordion panel</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">Identifies the element as a region when expanded</td>
        </tr>
      </tbody>
    </table>
    
    <div class="bg-[var(--color-info-light)] p-4 rounded-md">
      <div class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-info)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-[var(--color-text-muted)]">When using <code>role="region"</code>, it's important to ensure the region has an accessible name using <code>aria-labelledby</code> to avoid ARIA validation errors.</p>
      </div>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Responsive Considerations</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">For users on mobile or touch devices:</p>
    
    <ul class="space-y-3 list-disc pl-5">
      <li>Ensure touch targets (accordion headers) are at least 44×44 pixels</li>
      <li>Provide sufficient spacing between adjacent accordion headers to prevent accidental taps</li>
      <li>Consider starting with all accordions collapsed on mobile to minimize initial scrolling</li>
      <li>Ensure text remains readable at smaller viewport sizes</li>
      <li>Adapt padding and margins for comfortable viewing on small screens</li>
    </ul>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Screen Reader Announcements</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-6">When implemented correctly, screen readers should announce the following when interacting with an accordion:</p>
    
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-2 px-4 border border-[var(--color-border)]">Action</th>
          <th class="py-2 px-4 border border-[var(--color-border)]">Announcement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Focus on collapsed header</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Accordion Heading, collapsed, button"</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Expand accordion</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Accordion Heading, expanded, button"</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Collapse accordion</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Accordion Heading, collapsed, button"</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-[var(--color-border)]">Focus on disabled header</td>
          <td class="py-2 px-4 border border-[var(--color-border)]">"Accordion Heading, button, disabled"</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="bg-[var(--color-success-light)] p-4 rounded-md">
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <p class="text-[var(--color-text-muted)]">Test your accordions with real screen readers like NVDA, JAWS, and VoiceOver to ensure they work as expected.</p>
    </div>
  </div>
</section>