---
layout: layouts/component.njk
title: Accordion
description: Accordions are lightweight containers that can function independently or be integrated into a single-page section, interacting with the expansion controls and other adjacent content.
category: layout
version: 1.0.0
---

<section id="anatomy" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Anatomy</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="md:w-1/2">
        <img src="https://via.placeholder.com/600x200/e0e0e0/333333?text=Accordion+Anatomy+Diagram" alt="Accordion anatomy" class="w-full rounded-lg border border-[var(--color-border)]">
      </div>
      <div class="md:w-1/2">
        <h3 class="font-medium mb-3">Key Elements</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mr-3">1</span>
            <div>
              <span class="font-medium">Accordion container</span> - Wrapper that groups all accordion items
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mr-3">2</span>
            <div>
              <span class="font-medium">Header button</span> - Interactive element that toggles the visibility of its panel
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mr-3">3</span>
            <div>
              <span class="font-medium">Expansion indicator</span> - Icon that visually indicates whether a panel is expanded or collapsed
            </div>
          </li>
          <li class="flex items-start">
            <span class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mr-3">4</span>
            <div>
              <span class="font-medium">Panel</span> - Content container that can be shown or hidden
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="considerations" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Considerations</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-lg font-bold mb-4">When to use the accordion component</h3>
      <ul class="space-y-3 list-disc list-inside">
        <li>If you need to break down complex content into manageable sections</li>
        <li>When screen space is limited and you need to prioritize information</li>
        <li>For FAQ sections where users want to quickly scan questions</li>
        <li>When information should be revealed progressively to avoid overwhelming users</li>
      </ul>
    </div>
    
    <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
      <h3 class="text-lg font-bold mb-4">When to use something else</h3>
      <ul class="space-y-3 list-disc list-inside">
        <li>If users need to see all content at once for comparison</li>
        <li>When content is brief enough to display without hiding</li>
        <li>If most users will need all the information rather than just specific sections</li>
        <li>When hiding content will significantly disrupt the user's workflow</li>
      </ul>
    </div>
  </div>
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
          <p class="font-medium">Use clear, descriptive headers</p>
          <p class="text-[var(--color-text-muted)]">Headers should clearly communicate the panel content.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Keep content concise</p>
          <p class="text-[var(--color-text-muted)]">Don't overload accordion sections with too much information.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Consider icon usage</p>
          <p class="text-[var(--color-text-muted)]">Icons alongside text in headers can improve visual communication.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Group related information</p>
          <p class="text-[var(--color-text-muted)]">Keep related content together within each panel.</p>
        </div>
      </li>
      <li class="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-medium">Limit nesting</p>
          <p class="text-[var(--color-text-muted)]">Avoid nesting accordions to prevent complexity.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section id="behavior" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Behavior</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <h3 class="text-lg font-bold mb-4">Expanding</h3>
    <p class="mb-4">When a user clicks or taps the accordion header, the panel toggles between expanded and collapsed states. All other components in the accordion remain in their current state.</p>
    
    <div class="mb-6">
      <h4 class="font-medium mb-2">When clicking on a collapsed header:</h4>
      <ul class="list-disc list-inside ml-4 space-y-1 text-[var(--color-text-muted)]">
        <li>The panel expands to reveal its content</li>
        <li>The expansion indicator rotates to indicate the expanded state</li>
        <li>The <code>aria-expanded</code> attribute changes to <code>true</code></li>
        <li>The panel's <code>hidden</code> attribute is removed</li>
      </ul>
    </div>
    
    <div>
      <h4 class="font-medium mb-2">When clicking on an expanded header:</h4>
      <ul class="list-disc list-inside ml-4 space-y-1 text-[var(--color-text-muted)]">
        <li>The panel collapses to hide its content</li>
        <li>The expansion indicator rotates back to indicate the collapsed state</li>
        <li>The <code>aria-expanded</code> attribute changes to <code>false</code></li>
        <li>The panel receives the <code>hidden</code> attribute</li>
      </ul>
    </div>
  </div>
</section>

<section id="best-practices" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Best Practices</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <h3 class="text-lg font-bold mb-4">Content</h3>
    <ul class="space-y-3 list-disc pl-5">
      <li>Keep header text short, descriptive, and clearly indicating the content</li>
      <li>Avoid long content that would create excessive scrolling</li>
      <li>Structure content with headings where appropriate</li>
      <li>Use consistent content patterns across accordion items</li>
      <li>Consider progressive disclosure of complex information</li>
      <li>Include visual indicators or previews when helpful</li>
      <li>Ensure proper content hierarchy within panels</li>
      <li>Limit embedded interactive elements to avoid confusion</li>
    </ul>
  </div>
</section>

<section id="specifications" class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Specifications</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-lg font-bold mb-4">Typography</h3>
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--color-border)]">
              <th class="text-left py-2 font-medium">Element</th>
              <th class="text-left py-2 font-medium">Spec</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-[var(--color-border)]">
              <td class="py-2">Accordion title</td>
              <td class="py-2">
                System UI bold<br>
                16px font size<br>
                24px line height
              </td>
            </tr>
            <tr class="border-b border-[var(--color-border)]">
              <td class="py-2">Accordion content</td>
              <td class="py-2">
                System UI regular<br>
                14px font size<br>
                20px line height
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div>
        <h3 class="text-lg font-bold mb-4">Layout</h3>
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--color-border)]">
              <th class="text-left py-2 font-medium">Property</th>
              <th class="text-left py-2 font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-[var(--color-border)]">
              <td class="py-2">Padding (Header)</td>
              <td class="py-2">16px</td>
            </tr>
            <tr class="border-b border-[var(--color-border)]">
              <td class="py-2">Padding (Content)</td>
              <td class="py-2">0 16px 16px</td>
            </tr>
            <tr class="border-b border-[var(--color-border)]">
              <td class="py-2">Border</td>
              <td class="py-2">1px solid (#E0E0E0)</td>
            </tr>
            <tr class="border-b border-[var(--color-border)]">
              <td class="py-2">Border radius</td>
              <td class="py-2">4px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="mt-8">
      <h3 class="text-lg font-bold mb-4">Colors</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-white border border-[#E0E0E0] rounded-md">
          <div class="h-12 bg-white mb-2 rounded border border-[#E0E0E0]"></div>
          <p class="text-xs font-medium">Background</p>
          <p class="text-xs text-[var(--color-text-muted)]">White</p>
        </div>
        <div class="p-4 bg-white border border-[#E0E0E0] rounded-md">
          <div class="h-12 bg-[#E0E0E0] mb-2 rounded"></div>
          <p class="text-xs font-medium">Border</p>
          <p class="text-xs text-[var(--color-text-muted)]">#E0E0E0</p>
        </div>
        <div class="p-4 bg-white border border-[#E0E0E0] rounded-md">
          <div class="h-12 bg-[#333333] mb-2 rounded"></div>
          <p class="text-xs font-medium">Header text</p>
          <p class="text-xs text-[var(--color-text-muted)]">#333333</p>
        </div>
        <div class="p-4 bg-white border border-[#E0E0E0] rounded-md">
          <div class="h-12 bg-[#666666] mb-2 rounded"></div>
          <p class="text-xs font-medium">Content text</p>
          <p class="text-xs text-[var(--color-text-muted)]">#666666</p>
        </div>
      </div>
    </div>
  </div>
</section>
