---
layout: layouts/page.njk
title: Accordion Usage Examples
description: Real-world examples and patterns for implementing the Accordion component
tags: 
  - layoutComponents
  - components
  - examples
componentCategory: Layout
---

# Accordion Usage Examples

This page demonstrates various real-world examples of the Accordion component in common UI patterns.

## FAQ Example

Accordions are perfect for FAQ (Frequently Asked Questions) sections where users can expand only the questions they're interested in.

<div class="bg-white p-6 rounded border my-6">
  <h2 class="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
  
  <div class="eds-accordion">
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">How do I reset my password?</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        <p>To reset your password, click on the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password.</p>
      </div>
    </div>
    
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">Can I change my username?</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        <p>Yes, you can change your username in the account settings. Go to Settings > Profile > Edit Username.</p>
      </div>
    </div>
    
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">How do I export my data?</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        <p>To export your data:</p>
        <ol class="list-decimal ml-5 mt-2">
          <li>Go to Account Settings</li>
          <li>Select "Privacy & Data"</li>
          <li>Click "Export Data"</li>
          <li>Choose your preferred format (CSV, JSON, or PDF)</li>
          <li>Click "Export" and follow the prompts</li>
        </ol>
      </div>
    </div>
  </div>
</div>

```html
<div class="faq-section">
  <h2>Frequently Asked Questions</h2>
  
  <div class="eds-accordion">
    <div class="eds-accordion-item">
      <h3 class="eds-accordion-header">
        <button class="eds-accordion-trigger" aria-expanded="false" aria-controls="faq-1">
          How do I reset my password?
          <svg class="eds-accordion-icon" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </button>
      </h3>
      <div id="faq-1" class="eds-accordion-content" hidden>
        <div class="eds-accordion-body">
          <p>To reset your password, click on the "Forgot Password" link on the login page. 
          You'll receive an email with instructions to create a new password.</p>
        </div>
      </div>
    </div>
    
    <!-- Additional FAQ items -->
  </div>
</div>
```

## Product Details Example

Use accordions to display detailed product information in e-commerce or product catalog pages.

<div class="bg-white p-6 rounded border my-6">
  <div class="flex flex-col md:flex-row gap-6">
    <div class="md:w-1/3">
      <div class="bg-gray-100 h-48 w-full rounded-lg flex items-center justify-center text-gray-400">
        [Product Image]
      </div>
    </div>
    
    <div class="md:w-2/3">
      <h2 class="text-xl font-semibold">Enterprise Laptop Pro</h2>
      <p class="text-green-700 font-bold mt-2">$1,299.99</p>
      <p class="mt-2 text-gray-600">High-performance laptop for enterprise applications</p>
      
      <div class="mt-6">
        <div class="eds-accordion">
          <div class="border rounded mb-2">
            <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
              <h3 class="font-medium">Technical Specifications</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="px-4 py-3 border-t">
              <ul class="list-disc ml-5">
                <li>Intel Core i7-12700H Processor</li>
                <li>16GB DDR5 RAM</li>
                <li>512GB NVMe SSD</li>
                <li>14" 4K Display (3840 x 2160)</li>
                <li>NVIDIA RTX 3050 Ti (4GB GDDR6)</li>
                <li>Thunderbolt 4, USB-C, HDMI 2.1</li>
              </ul>
            </div>
          </div>
          
          <div class="border rounded mb-2">
            <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
              <h3 class="font-medium">Warranty Information</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="px-4 py-3 border-t">
              <p>3-year limited hardware warranty with next-business-day on-site service after remote diagnosis.</p>
              <p class="mt-2">Optional warranty extensions available for up to 5 years.</p>
            </div>
          </div>
          
          <div class="border rounded mb-2">
            <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
              <h3 class="font-medium">Shipping & Returns</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="px-4 py-3 border-t">
              <p>Free shipping on all orders over $1,000. Standard delivery in 3-5 business days.</p>
              <p class="mt-2">30-day return policy. Item must be in original condition and packaging.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Settings Panel Example

Use accordions to organize multiple settings sections in a dashboard or profile page.

<div class="bg-white p-6 rounded border my-6">
  <h2 class="text-xl font-semibold mb-4">User Settings</h2>
  
  <div class="eds-accordion eds-accordion-filled">
    <div class="mb-3 border rounded overflow-hidden">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-blue-600 text-white">
        <h3 class="font-medium">Account Settings</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="p-4">
        <div class="grid gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" value="user@example.com">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <button class="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm">Change Password</button>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Two-Factor Authentication</label>
            <div class="flex items-center">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="twoFactorSwitch">
                <label class="form-check-label" for="twoFactorSwitch">Enable</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mb-3 border rounded overflow-hidden">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-blue-600 text-white">
        <h3 class="font-medium">Notification Preferences</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="p-4">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Email Notifications</h4>
              <p class="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="emailSwitch" checked>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Push Notifications</h4>
              <p class="text-sm text-gray-500">Receive notifications on your device</p>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="pushSwitch" checked>
            </div>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">SMS Notifications</h4>
              <p class="text-sm text-gray-500">Receive text message alerts</p>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="smsSwitch">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mb-3 border rounded overflow-hidden">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-blue-600 text-white">
        <h3 class="font-medium">Privacy Settings</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="p-4">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Profile Visibility</h4>
              <p class="text-sm text-gray-500">Control who can see your profile</p>
            </div>
            <select class="form-select px-3 py-1.5 text-sm border border-gray-300 rounded-md">
              <option value="public">Public</option>
              <option value="contacts">Contacts Only</option>
              <option value="private">Private</option>
            </select>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium">Data Sharing</h4>
              <p class="text-sm text-gray-500">Share usage data to improve services</p>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="dataSwitch" checked>
            </div>
          </div>
          
          <button class="mt-2 text-red-600 hover:text-red-800 text-sm font-medium">Delete Account</button>
        </div>
      </div>
    </div>
  </div>
</div>

## Borderless Accordion in a Sidebar

This example shows how to use the borderless accordion variant in a sidebar navigation.

<div class="bg-white p-6 rounded border my-6">
  <div class="w-full max-w-xs bg-gray-100 p-4 rounded-lg">
    <h2 class="text-lg font-semibold mb-3">Documentation</h2>
    
    <div class="eds-accordion eds-accordion-borderless">
      <div class="mb-1 bg-gray-100 rounded">
        <div class="eds-accordion-header px-3 py-2 flex justify-between items-center">
          <h3 class="font-medium text-sm">Getting Started</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div class="px-3 py-1">
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="text-blue-600 hover:underline">Installation</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Quick Start</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Configuration</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mb-1 bg-gray-100 rounded">
        <div class="eds-accordion-header px-3 py-2 flex justify-between items-center">
          <h3 class="font-medium text-sm">Components</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div class="px-3 py-1">
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="text-blue-600 hover:underline">Buttons</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Forms</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Modals</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Tables</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Cards</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mb-1 bg-gray-100 rounded">
        <div class="eds-accordion-header px-3 py-2 flex justify-between items-center">
          <h3 class="font-medium text-sm">API Reference</h3>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div class="px-3 py-1">
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="text-blue-600 hover:underline">Authentication</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Users</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Products</a></li>
            <li><a href="#" class="text-blue-600 hover:underline">Orders</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Accordion with Custom Icons

This example demonstrates using custom icons instead of the default chevron.

<div class="bg-white p-6 rounded border my-6">
  <h2 class="text-xl font-semibold mb-4">Project Timeline</h2>
  
  <div class="eds-accordion">
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">Phase 1: Planning</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        <p class="mb-2">Timeline: January 1 - February 15</p>
        <ul class="list-disc ml-5">
          <li>Requirements gathering</li>
          <li>Stakeholder interviews</li>
          <li>Project scope definition</li>
          <li>Resource allocation</li>
        </ul>
      </div>
    </div>
    
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">Phase 2: Design</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        <p class="mb-2">Timeline: February 16 - March 31</p>
        <ul class="list-disc ml-5">
          <li>UI/UX design</li>
          <li>Wireframing</li>
          <li>Prototyping</li>
          <li>Design reviews</li>
        </ul>
      </div>
    </div>
  </div>
</div>

```jsx
// React example with custom icons
function ProjectTimeline() {
  return (
    <div>
      <h2>Project Timeline</h2>
      
      <Accordion 
        expandIcon={<PlusIcon />}
        collapseIcon={<MinusIcon />}
      >
        <AccordionItem title="Phase 1: Planning">
          <p>Timeline: January 1 - February 15</p>
          <ul>
            <li>Requirements gathering</li>
            <li>Stakeholder interviews</li>
            <li>Project scope definition</li>
            <li>Resource allocation</li>
          </ul>
        </AccordionItem>
        
        <AccordionItem title="Phase 2: Design">
          <p>Timeline: February 16 - March 31</p>
          <ul>
            <li>UI/UX design</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Design reviews</li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
```

## Nested Accordions

While generally not recommended for usability reasons, there are some cases where nested accordions make sense, such as complex hierarchical data.

<div class="bg-white p-6 rounded border my-6">
  <h2 class="text-xl font-semibold mb-4">Company Organizational Structure</h2>
  
  <div class="eds-accordion">
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">Executive Leadership</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        <p class="mb-2">Executive leadership team oversees all company operations.</p>
        
        <div class="eds-accordion mt-3">
          <div class="border rounded mb-2">
            <div class="eds-accordion-header px-3 py-2 flex justify-between items-center bg-gray-100">
              <h4 class="font-medium text-sm">CEO Office</h4>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="px-3 py-2 border-t">
              <ul class="list-disc ml-5 text-sm">
                <li>Chief Executive Officer</li>
                <li>Executive Assistant</li>
                <li>Chief of Staff</li>
              </ul>
            </div>
          </div>
          
          <div class="border rounded mb-2">
            <div class="eds-accordion-header px-3 py-2 flex justify-between items-center bg-gray-100">
              <h4 class="font-medium text-sm">Finance Department</h4>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="px-3 py-2 border-t">
              <ul class="list-disc ml-5 text-sm">
                <li>Chief Financial Officer</li>
                <li>Financial Controller</li>
                <li>Financial Analysts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="border rounded mb-2">
      <div class="eds-accordion-header px-4 py-3 flex justify-between items-center bg-gray-50">
        <h3 class="font-medium">Product Development</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div class="px-4 py-3 border-t">
        <p class="mb-2">The product development team builds and maintains all company products.</p>
        
        <div class="eds-accordion mt-3">
          <div class="border rounded mb-2">
            <div class="eds-accordion-header px-3 py-2 flex justify-between items-center bg-gray-100">
              <h4 class="font-medium text-sm">Engineering</h4>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="px-3 py-2 border-t">
              <ul class="list-disc ml-5 text-sm">
                <li>VP of Engineering</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>QA Engineering</li>
              </ul>
            </div>
          </div>
          
          <div class="border rounded mb-2">
            <div class="eds-accordion-header px-3 py-2 flex justify-between items-center bg-gray-100">
              <h4 class="font-medium text-sm">Product Management</h4>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="px-3 py-2 border-t">
              <ul class="list-disc ml-5 text-sm">
                <li>VP of Product</li>
                <li>Product Managers</li>
                <li>UX Researchers</li>
                <li>Technical Writers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Best Practices for These Examples

1. **FAQ Sections**: Use clear, concise questions as headers. Make sure each answer is focused and helpful.

2. **Product Details**: Group related information into logical sections. Use consistent styling for all similar products.

3. **Settings Panels**: Organize settings by function. Consider pre-expanding the most commonly used section.

4. **Sidebar Navigation**: Keep text short. Consider showing the active section expanded by default.

5. **Custom Icons**: Ensure icons clearly communicate the expand/collapse action. Maintain consistency across all accordions within the same interface.

6. **Nested Accordions**: Use with caution! Maintain visual distinction between parent and child accordions. Limit nesting to at most one level deep.