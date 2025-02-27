---
layout: layouts/page.njk
title: Navigate by Widget Owner
description: Find components based on the teams that maintain them.
---

## Components by Owner

Browse components based on the team or department responsible for maintaining them.

<div class="space-y-12 mt-8">
  <!-- UX Team Components -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <h3 class="text-xl font-bold">UX Design Team</h3>
    </div>
    
    <div class="flex flex-col md:flex-row md:items-start mb-6">
      <div class="mb-4 md:mb-0 md:mr-8 md:flex-shrink-0">
        <div class="bg-[var(--color-primary)] text-white rounded-md py-2 px-4 inline-block">
          <span class="font-medium">Primary Contact:</span> Sarah Johnson
        </div>
      </div>
      <div>
        <p class="mb-2">The UX Design team is responsible for creating and maintaining components that enhance user experience and interface design.</p>
        <p>These components follow core usability principles and accessibility guidelines to ensure a consistent user experience across products.</p>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Core UI Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/inputs/button/" class="text-[var(--color-primary)]">Button</a></li>
          <li><a href="/components/inputs/input-field/" class="text-[var(--color-primary)]">Input Field</a></li>
          <li><a href="/components/inputs/checkbox/" class="text-[var(--color-primary)]">Checkbox</a></li>
          <li><a href="/components/inputs/radio/" class="text-[var(--color-primary)]">Radio Button</a></li>
          <li><a href="/components/inputs/select/" class="text-[var(--color-primary)]">Select</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Layout Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/layout/card/" class="text-[var(--color-primary)]">Card</a></li>
          <li><a href="/components/layout/modal/" class="text-[var(--color-primary)]">Modal</a></li>
          <li><a href="/components/layout/grid/" class="text-[var(--color-primary)]">Grid</a></li>
          <li><a href="/components/layout/divider/" class="text-[var(--color-primary)]">Divider</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Navigation Elements</h4>
        <ul class="space-y-1">
          <li><a href="/components/navigation/tabs/" class="text-[var(--color-primary)]">Tabs</a></li>
          <li><a href="/components/navigation/pagination/" class="text-[var(--color-primary)]">Pagination</a></li>
          <li><a href="/components/navigation/breadcrumb/" class="text-[var(--color-primary)]">Breadcrumb</a></li>
          <li><a href="/components/navigation/menu/" class="text-[var(--color-primary)]">Menu</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-6">
      <a href="/teams/ux-design/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
        View UX Design Team Resources
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
  
  <!-- Frontend Team Components -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
      <h3 class="text-xl font-bold">Frontend Engineering Team</h3>
    </div>
    
    <div class="flex flex-col md:flex-row md:items-start mb-6">
      <div class="mb-4 md:mb-0 md:mr-8 md:flex-shrink-0">
        <div class="bg-[var(--color-primary)] text-white rounded-md py-2 px-4 inline-block">
          <span class="font-medium">Primary Contact:</span> Michael Chen
        </div>
      </div>
      <div>
        <p class="mb-2">The Frontend Engineering team develops and maintains components that require complex interactions and state management.</p>
        <p>These components are built with a focus on performance, accessibility, and cross-browser compatibility.</p>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Interactive Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/feedback/dialog/" class="text-[var(--color-primary)]">Dialog</a></li>
          <li><a href="/components/feedback/alert/" class="text-[var(--color-primary)]">Alert</a></li>
          <li><a href="/components/inputs/date-picker/" class="text-[var(--color-primary)]">Date Picker</a></li>
          <li><a href="/components/inputs/autocomplete/" class="text-[var(--color-primary)]">Autocomplete</a></li>
          <li><a href="/components/inputs/slider/" class="text-[var(--color-primary)]">Slider</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Data Visualization</h4>
        <ul class="space-y-1">
          <li><a href="/components/data/chart/" class="text-[var(--color-primary)]">Chart</a></li>
          <li><a href="/components/data/table/" class="text-[var(--color-primary)]">Table</a></li>
          <li><a href="/components/data/progress/" class="text-[var(--color-primary)]">Progress Indicator</a></li>
          <li><a href="/components/data/metric/" class="text-[var(--color-primary)]">Metric</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Advanced Patterns</h4>
        <ul class="space-y-1">
          <li><a href="/components/patterns/drag-drop/" class="text-[var(--color-primary)]">Drag and Drop</a></li>
          <li><a href="/components/patterns/infinite-scroll/" class="text-[var(--color-primary)]">Infinite Scroll</a></li>
          <li><a href="/components/patterns/virtualized-list/" class="text-[var(--color-primary)]">Virtualized List</a></li>
          <li><a href="/components/patterns/form-validation/" class="text-[var(--color-primary)]">Form Validation</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-6">
      <a href="/teams/frontend-engineering/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
        View Frontend Engineering Resources
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
  
  <!-- Accessibility Team Components -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <h3 class="text-xl font-bold">Accessibility Team</h3>
    </div>
    
    <div class="flex flex-col md:flex-row md:items-start mb-6">
      <div class="mb-4 md:mb-0 md:mr-8 md:flex-shrink-0">
        <div class="bg-[var(--color-primary)] text-white rounded-md py-2 px-4 inline-block">
          <span class="font-medium">Primary Contact:</span> Alex Rivera
        </div>
      </div>
      <div>
        <p class="mb-2">The Accessibility team ensures all components meet WCAG standards and provides specialized accessible components.</p>
        <p>These components are designed with inclusivity in mind, supporting screen readers, keyboard navigation, and other assistive technologies.</p>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Specialized Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/accessibility/skip-link/" class="text-[var(--color-primary)]">Skip Link</a></li>
          <li><a href="/components/accessibility/focus-indicator/" class="text-[var(--color-primary)]">Focus Indicator</a></li>
          <li><a href="/components/accessibility/screen-reader-text/" class="text-[var(--color-primary)]">Screen Reader Text</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Enhanced Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/accessibility/accessible-table/" class="text-[var(--color-primary)]">Accessible Table</a></li>
          <li><a href="/components/accessibility/accessible-form/" class="text-[var(--color-primary)]">Accessible Form</a></li>
          <li><a href="/components/accessibility/accessible-modal/" class="text-[var(--color-primary)]">Accessible Modal</a></li>
          <li><a href="/components/accessibility/accessible-tabs/" class="text-[var(--color-primary)]">Accessible Tabs</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Resources</h4>
        <ul class="space-y-1">
          <li><a href="/accessibility/guidelines/" class="text-[var(--color-primary)]">Accessibility Guidelines</a></li>
          <li><a href="/accessibility/testing/" class="text-[var(--color-primary)]">Testing Procedures</a></li>
          <li><a href="/accessibility/checklist/" class="text-[var(--color-primary)]">Accessibility Checklist</a></li>
          <li><a href="/accessibility/tools/" class="text-[var(--color-primary)]">Tools &amp; Resources</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-6">
      <a href="/teams/accessibility/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
        View Accessibility Team Resources
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
  
  <!-- Mobile Team Components -->
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)]">
    <div class="flex items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <h3 class="text-xl font-bold">Mobile Development Team</h3>
    </div>
    
    <div class="flex flex-col md:flex-row md:items-start mb-6">
      <div class="mb-4 md:mb-0 md:mr-8 md:flex-shrink-0">
        <div class="bg-[var(--color-primary)] text-white rounded-md py-2 px-4 inline-block">
          <span class="font-medium">Primary Contact:</span> Priya Mehta
        </div>
      </div>
      <div>
        <p class="mb-2">The Mobile Development team creates and maintains components optimized for mobile experiences.</p>
        <p>These components follow platform-specific guidelines while maintaining the core design system principles.</p>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">iOS Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/mobile/ios/action-sheet/" class="text-[var(--color-primary)]">Action Sheet</a></li>
          <li><a href="/components/mobile/ios/navigation-bar/" class="text-[var(--color-primary)]">Navigation Bar</a></li>
          <li><a href="/components/mobile/ios/tab-bar/" class="text-[var(--color-primary)]">Tab Bar</a></li>
          <li><a href="/components/mobile/ios/list-item/" class="text-[var(--color-primary)]">List Item</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Android Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/mobile/android/app-bar/" class="text-[var(--color-primary)]">App Bar</a></li>
          <li><a href="/components/mobile/android/bottom-navigation/" class="text-[var(--color-primary)]">Bottom Navigation</a></li>
          <li><a href="/components/mobile/android/card/" class="text-[var(--color-primary)]">Card</a></li>
          <li><a href="/components/mobile/android/fab/" class="text-[var(--color-primary)]">Floating Action Button</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="font-medium mb-2 text-[var(--color-text-muted)]">Cross-Platform Components</h4>
        <ul class="space-y-1">
          <li><a href="/components/mobile/cross-platform/button/" class="text-[var(--color-primary)]">Button</a></li>
          <li><a href="/components/mobile/cross-platform/form-field/" class="text-[var(--color-primary)]">Form Field</a></li>
          <li><a href="/components/mobile/cross-platform/alert/" class="text-[var(--color-primary)]">Alert</a></li>
          <li><a href="/components/mobile/cross-platform/toast/" class="text-[var(--color-primary)]">Toast</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-6">
      <a href="/teams/mobile-development/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
        View Mobile Development Resources
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</div>

## Cross-team Collaboration

<div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mt-8">
  <h3 class="text-xl font-bold mb-4">Component Governance</h3>
  <p class="mb-4">Many components are developed and maintained through cross-team collaboration. Our governance model ensures consistent quality and experience across all components.</p>
  
  <div class="mt-6">
    <a href="/governance/" class="inline-flex items-center py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors">
      Learn About Our Governance Model
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>