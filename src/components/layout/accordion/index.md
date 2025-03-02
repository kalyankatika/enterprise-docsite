---
layout: layouts/page.njk
title: Accordion
description: Accordions are lightweight containers that can be used independently or integrated into a larger surface, interacting with the expansion controls and other content on the same page section or container to show or hide information.
category: layout
version: 1.0.0
showSidebar: true
---

<section id="anatomy" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Anatomy</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="md:w-1/2">
        <div class="border border-[var(--color-border)] rounded-md overflow-hidden">
          <div class="bg-white p-4 flex items-center justify-between cursor-pointer">
            <div class="font-medium">Accordion heading</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div class="border-t border-[var(--color-border)] bg-white p-4">
            <p class="text-[var(--color-text-muted)]">Accordion content goes here. This area can contain text, images, and other components.</p>
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <h3 class="font-medium mb-3">Key Elements</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mr-3">1</span>
            <div>
              <span class="font-medium">Header</span> - Contains the accordion title and expansion control
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mr-3">2</span>
            <div>
              <span class="font-medium">Icon</span> - Indicates the current state (expanded or collapsed)
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mr-3">3</span>
            <div>
              <span class="font-medium">Content Area</span> - Contains the information revealed when the accordion is expanded
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <p class="text-[var(--color-text-muted)]">Structured breakdown and detailed description of the components and their relationships within a user interface.</p>
</section>

<section id="considerations" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Considerations</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-lg font-bold mb-4">When to use the accordion component</h3>
      <ul class="space-y-3 list-disc list-inside">
        <li>If you have a large amount of content to display within a page</li>
        <li>When users need to focus on specific sections of information</li>
        <li>To reduce scrolling and make content more scannable</li>
        <li>When content can be logically divided into discrete sections</li>
        <li>For FAQ sections or hierarchical information</li>
      </ul>
    </div>
    
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-lg font-bold mb-4">When to use something else</h3>
      <ul class="space-y-3 list-disc list-inside">
        <li>If users need to see all content at once for comparison</li>
        <li>If there's not enough content to warrant progressive disclosure</li>
        <li>When the content hierarchy is less important</li>
        <li>If users will frequently need to switch between multiple sections</li>
        <li>For critical information that should always be visible</li>
      </ul>
    </div>
  </div>
  
  <p class="text-[var(--color-text-muted)]">Key factors and criteria that influence design decisions regarding component choice for alignment with user needs and design system guidelines.</p>
</section>

<section id="usage" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Usage</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <h3 class="text-lg font-bold mb-4">General Usage Guidelines</h3>
    
    <ul class="space-y-4">
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Group related content</p>
          <p class="text-[var(--color-text-muted)]">Organize information into logical sections with descriptive headers.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Clear heading content</p>
          <p class="text-[var(--color-text-muted)]">Use concise, descriptive headings to help users understand the hidden content.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Consider default states</p>
          <p class="text-[var(--color-text-muted)]">Determine whether accordions should be collapsed or expanded by default based on user needs.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Consistent interaction pattern</p>
          <p class="text-[var(--color-text-muted)]">Ensure the entire header area is clickable, not just the icon or text.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Support keyboard navigation</p>
          <p class="text-[var(--color-text-muted)]">Ensure accordions can be operated with keyboard controls for accessibility.</p>
        </div>
      </li>
    </ul>
  </div>
  
  <p class="text-[var(--color-text-muted)]">Guidelines and best practices for the implementation of design components, ensuring they are used consistently and appropriately when applied.</p>
</section>

<section id="behavior" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Behavior</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <h3 class="text-lg font-bold mb-4">Expanding</h3>
    <p class="mb-4">When a user clicks or focuses and presses Enter on the accordion header, the content area expands. The icon rotates 180 degrees to indicate the expanded state.</p>
    
    <div class="bg-[var(--color-info-light)] p-4 rounded-md mb-6">
      <div class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-info)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-[var(--color-text-muted)]">By default, multiple accordion sections can be open simultaneously, but this behavior can be configured to allow only one open section at a time.</p>
      </div>
    </div>
    
    <h3 class="text-lg font-bold mb-4">Collapsing</h3>
    <p class="mb-4">When a user clicks an expanded accordion header, the content area collapses and is hidden from view. The icon rotates back to its original position.</p>
    
    <h3 class="text-lg font-bold mb-4">Focus States</h3>
    <p>When users tab through the page, the accordion headers receive a visible focus indicator to support keyboard navigation.</p>
  </div>
  
  <p class="text-[var(--color-text-muted)]">Highlights interactive and dynamic aspects of design components, detailing how they respond to user actions and changes in state in relation to the user experience.</p>
</section>

<section id="best-practices" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Best Practices</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
    <div>
      <h3 class="text-lg font-bold mb-4 text-[var(--color-success)]">Do</h3>
      <ul class="space-y-4">
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>Keep accordion headings short, clear, and descriptive</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>Prioritize content within accordions based on user needs</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>Ensure consistent spacing between accordion items</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>Consider expandable and collapsible animations for smooth transitions</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <p>Use appropriate ARIA attributes to enhance accessibility</p>
        </li>
      </ul>
    </div>
    
    <div>
      <h3 class="text-lg font-bold mb-4 text-[var(--color-error)]">Don't</h3>
      <ul class="space-y-4">
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-error)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p>Nest accordions within accordions (avoid excessive nesting)</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-error)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p>Hide critical information that users need immediately</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-error)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p>Include too many accordions on a single page (cognitive overload)</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-error)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p>Use non-descriptive headings that don't clearly indicate content</p>
        </li>
        <li class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-error)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p>Rely solely on color to indicate the accordion state</p>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-lg font-bold mb-4">Content</h3>
    <ul class="space-y-3 list-disc pl-5">
      <li>Ensure accordion headings are descriptive and self-sufficient</li>
      <li>Avoid repetitive or redundant information across accordion sections</li>
      <li>Place most important content in the first few accordions</li>
      <li>Keep content within each accordion section focused and concise</li>
      <li>Consider using icons or visual cues to improve scannability</li>
      <li>Ensure content hierarchy makes sense in the context of the page</li>
    </ul>
  </div>
  
  <p class="mt-6 text-[var(--color-text-muted)]">The recommended methods and strategies for designing and implementing components, ensuring efficiency and consistent use.</p>
</section>

<section id="specifications" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Specifications</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img src="/assets/images/accordion-specs-closed.svg" alt="Accordion specifications (closed state)" class="border border-[var(--color-border)] rounded-md p-2 bg-white w-full">
        <p class="text-center text-sm text-[var(--color-text-muted)] mt-2">Accordion (closed state)</p>
      </div>
      <div>
        <img src="/assets/images/accordion-specs-open.svg" alt="Accordion specifications (open state)" class="border border-[var(--color-border)] rounded-md p-2 bg-white w-full">
        <p class="text-center text-sm text-[var(--color-text-muted)] mt-2">Accordion (open state)</p>
      </div>
    </div>
    
    <div class="mt-8">
      <h3 class="text-lg font-bold mb-4">Dimensions</h3>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-[var(--color-bg)]">
            <th class="border border-[var(--color-border)] py-2 px-4 text-left">Property</th>
            <th class="border border-[var(--color-border)] py-2 px-4 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-[var(--color-border)] py-2 px-4">Header height</td>
            <td class="border border-[var(--color-border)] py-2 px-4">48px (minimum)</td>
          </tr>
          <tr>
            <td class="border border-[var(--color-border)] py-2 px-4">Content padding</td>
            <td class="border border-[var(--color-border)] py-2 px-4">16px</td>
          </tr>
          <tr>
            <td class="border border-[var(--color-border)] py-2 px-4">Icon size</td>
            <td class="border border-[var(--color-border)] py-2 px-4">20px × 20px</td>
          </tr>
          <tr>
            <td class="border border-[var(--color-border)] py-2 px-4">Border radius</td>
            <td class="border border-[var(--color-border)] py-2 px-4">4px</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="mt-8">
      <h3 class="text-lg font-bold mb-4">Typography</h3>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-[var(--color-bg)]">
            <th class="border border-[var(--color-border)] py-2 px-4 text-left">Element</th>
            <th class="border border-[var(--color-border)] py-2 px-4 text-left">Font</th>
            <th class="border border-[var(--color-border)] py-2 px-4 text-left">Weight</th>
            <th class="border border-[var(--color-border)] py-2 px-4 text-left">Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-[var(--color-border)] py-2 px-4">Header</td>
            <td class="border border-[var(--color-border)] py-2 px-4">System font</td>
            <td class="border border-[var(--color-border)] py-2 px-4">Medium (500)</td>
            <td class="border border-[var(--color-border)] py-2 px-4">16px</td>
          </tr>
          <tr>
            <td class="border border-[var(--color-border)] py-2 px-4">Content</td>
            <td class="border border-[var(--color-border)] py-2 px-4">System font</td>
            <td class="border border-[var(--color-border)] py-2 px-4">Regular (400)</td>
            <td class="border border-[var(--color-border)] py-2 px-4">14px</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <p class="text-[var(--color-text-muted)]">The detailed technical aspects, definitions and requirements for design components, typically addressing spacing, padding, and heights in relationship to the component.</p>
</section>