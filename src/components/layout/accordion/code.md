---
layout: layouts/component.njk
title: Accordion
description: Accordions are lightweight containers that can be used independently or integrated into a larger surface, interacting with the expansion controls and other content on the same page section or container to show or hide information.
category: layout
version: 1.0.0
codeContent: true
---

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Installation</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">Make sure the necessary specific libraries are installed (no information or elements of these sites if you are integrating them into other components).</p>
    
    <div class="mb-6">
      <h3 class="text-lg font-bold mb-2">HTML & CSS</h3>
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-bash">npm install @enterprise-design-system/accordion</code></pre>
      </div>
    </div>
    
    <div>
      <h3 class="text-lg font-bold mb-2">React</h3>
      <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <pre><code class="language-bash">npm install @enterprise-design-system/react-accordion</code></pre>
      </div>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Attributes</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">When using properties in JavaScript, use camelCase versions of the attribute names listed below.</p>
    
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-[var(--color-bg)]">
            <th class="py-3 px-4 border border-[var(--color-border)]">Attribute</th>
            <th class="py-3 px-4 border border-[var(--color-border)]">Type</th>
            <th class="py-3 px-4 border border-[var(--color-border)]">Default</th>
            <th class="py-3 px-4 border border-[var(--color-border)]">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-3 px-4 border border-[var(--color-border)]"><code>expanded</code></td>
            <td class="py-3 px-4 border border-[var(--color-border)]">boolean</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">false</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">Expands the accordion panel when set to true.</td>
          </tr>
          <tr>
            <td class="py-3 px-4 border border-[var(--color-border)]"><code>disabled</code></td>
            <td class="py-3 px-4 border border-[var(--color-border)]">boolean</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">false</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">Disables the accordion when set to true.</td>
          </tr>
          <tr>
            <td class="py-3 px-4 border border-[var(--color-border)]"><code>icon-position</code></td>
            <td class="py-3 px-4 border border-[var(--color-border)]">string</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">right</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">Position of the indicator icon. Options: 'left', 'right', 'none'.</td>
          </tr>
          <tr>
            <td class="py-3 px-4 border border-[var(--color-border)]"><code>aria-labelledby</code></td>
            <td class="py-3 px-4 border border-[var(--color-border)]">string</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">undefined</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">ID reference to the element that labels the accordion.</td>
          </tr>
          <tr>
            <td class="py-3 px-4 border border-[var(--color-border)]"><code>aria-controls</code></td>
            <td class="py-3 px-4 border border-[var(--color-border)]">string</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">undefined</td>
            <td class="py-3 px-4 border border-[var(--color-border)]">ID reference to the controlled content section.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Events</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-3 px-4 border border-[var(--color-border)]">Name</th>
          <th class="py-3 px-4 border border-[var(--color-border)]">Event content</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">expand</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Fires when the accordion section is expanded</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">collapse</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Fires when the accordion section is collapsed</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">States</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-3 px-4 border border-[var(--color-border)]">Name</th>
          <th class="py-3 px-4 border border-[var(--color-border)]">Default variant</th>
          <th class="py-3 px-4 border border-[var(--color-border)]">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">Default</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">false</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">The normal, collapsed state of the accordion</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">Expanded</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">false</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">When the accordion panel is open and content is visible</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">Focused</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">false</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">When the accordion header has keyboard focus</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">Disabled</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">false</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">When the accordion is not interactive</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">CSS Helper classes</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-3 px-4 border border-[var(--color-border)]">CSS class</th>
          <th class="py-3 px-4 border border-[var(--color-border)]">Applies to</th>
          <th class="py-3 px-4 border border-[var(--color-border)]">Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Main container class</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion__header</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Header element</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Styles for the clickable header</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion__content</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Content container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Styles for the expandable content</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion__icon</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Icon element</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Styles for the indicator icon</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion--expanded</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Applied when accordion is expanded</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion--disabled</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Applied when accordion is disabled</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">CSS modifier classes</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-[var(--color-bg)]">
          <th class="py-3 px-4 border border-[var(--color-border)]">CSS class</th>
          <th class="py-3 px-4 border border-[var(--color-border)]">Applies to</th>
          <th class="py-3 px-4 border border-[var(--color-border)]">Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion--bordered</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Adds a border around the accordion</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion--compact</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Reduces padding for a more compact appearance</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion--icon-left</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Positions the icon on the left side</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion--no-icon</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Removes the indicator icon</td>
        </tr>
        <tr>
          <td class="py-3 px-4 border border-[var(--color-border)]">eds-accordion--with-bg</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Container</td>
          <td class="py-3 px-4 border border-[var(--color-border)]">Adds a background color to the header</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Namespaceing</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">If your architecture currently conflicts with Enterprise UI or any other external libraries, it may be that there are conflicting styles (i.e. you are targeting specific selectors in your own code).</p>
    
    <p>All components in Enterprise Design System are prefixed with 'eds-' to help reduce the possibility of selector conflicts.</p>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Import reference</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">The following two references are used to load libraries and should be referenced from Enterprise Design libraries. These references can be used at any component level.</p>
    
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
      <pre><code class="language-javascript">import { Accordion } from '@enterprise-design-system/react-components';</code></pre>
    </div>
    
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
      <pre><code class="language-html">&lt;link rel="stylesheet" href="https://cdn.enterprise-design.com/libs/accordion.css"&gt;</code></pre>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Javascript</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-6">The following JS code samples can be used to interact with Enterprise Design accordion component:</p>
    
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
      <pre><code class="language-javascript">// Initialize an accordion
const accordion = new EnterpriseAccordion(document.querySelector('.eds-accordion'));

// Expand an accordion
accordion.expand();

// Collapse an accordion
accordion.collapse();

// Toggle an accordion
accordion.toggle();

// Listen for events
accordion.addEventListener('expand', (event) => {
  console.log('Accordion expanded');
});

accordion.addEventListener('collapse', (event) => {
  console.log('Accordion collapsed');
});

// Disable an accordion
accordion.disabled = true;

// Enable an accordion
accordion.disabled = false;</code></pre>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">SCSS</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">The following SCSS variables are used by Enterprise Design's accordion when creating/implementing component:</p>
    
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
      <pre><code class="language-scss">// Accordion variables
$eds-accordion-header-bg: var(--color-bg-alt);
$eds-accordion-header-color: var(--color-text);
$eds-accordion-header-font-weight: 500;
$eds-accordion-header-padding: 1rem;
$eds-accordion-content-padding: 1rem;
$eds-accordion-border-color: var(--color-border);
$eds-accordion-border-radius: 0.25rem;
$eds-accordion-icon-size: 1.25rem;
$eds-accordion-icon-color: var(--color-text-muted);
$eds-accordion-icon-transition: transform 0.2s ease-in-out;
$eds-accordion-focus-ring-color: var(--color-primary);
$eds-accordion-focus-ring-width: 2px;
$eds-accordion-transition-duration: 0.2s;

// In your custom implementation
@import '@enterprise-design-system/scss/components/accordion';

// Override variables if needed
$eds-accordion-header-bg: #f5f5f5;

// Use the accordion mixins
.custom-accordion {
  @include eds-accordion();
  
  // Customizations
  .eds-accordion__header {
    border-bottom: 2px solid $eds-accordion-border-color;
  }
}</code></pre>
    </div>
  </div>
</section>

<section class="mb-12">
  <h2 class="text-2xl font-bold mb-6">Storybook Example</h2>
  
  <div class="bg-[var(--color-bg-alt)] p-6 rounded-lg border border-[var(--color-border)] mb-6">
    <p class="mb-4">The following is an interactive Storybook example of the ShadowBox CTA component that shows usage options and properties:</p>
    
    <div class="w-full overflow-hidden mb-6">
      <iframe
        src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        style="border: 1px solid var(--color-border); border-radius: 0.375rem;"
        loading="lazy"
      ></iframe>
    </div>
    
    <p class="text-sm text-[var(--color-text-muted)] mb-2">Embed URL:</p>
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-6">
      <pre><code class="language-html">https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true</code></pre>
    </div>
    
    <p class="text-sm text-[var(--color-text-muted)] mb-2">Iframe embed code:</p>
    <div class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
      <pre><code class="language-html">&lt;iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="800"
  height="400"
&gt;&lt;/iframe&gt;</code></pre>
    </div>
  </div>
</section>