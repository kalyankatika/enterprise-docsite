---
layout: layouts/page.njk
title: Feedback
description: Feedback components communicate system status and provide information to users
sidebarType: components
---

# Feedback

Feedback components communicate system status and provide information to users. They help create a responsive and informative user experience by notifying users about events, errors, and processes.

## Available Components

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <a href="/components/feedback/alert/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Alert</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Alerts display important information, warnings, or error messages</p>
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-blue-700">Information message goes here</p>
        </div>
      </div>
    </div>
  </a>
  
  <a href="/components/feedback/toast/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Toast</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Toast notifications provide non-disruptive feedback about completed actions</p>
    <div class="bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg shadow-lg p-4 flex items-start max-w-sm">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3 w-0 flex-1 pt-0.5">
        <p class="text-sm font-medium">Successfully saved!</p>
        <p class="mt-1 text-xs text-[var(--color-text-muted)]">Your changes have been saved successfully.</p>
      </div>
      <div class="ml-4 flex-shrink-0 flex">
        <button class="inline-flex text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </a>
  
  <a href="/components/feedback/progress/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Progress</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Progress indicators show the completion status of a task or process</p>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-[var(--color-primary)] h-2.5 rounded-full" style="width: 65%"></div>
    </div>
    <p class="text-sm text-[var(--color-text-muted)] mt-2">65% complete</p>
  </a>
  
  <a href="/components/feedback/skeleton/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Skeleton</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Skeleton loaders provide a visual placeholder while content is loading</p>
    <div class="space-y-3 animate-pulse">
      <div class="h-2.5 bg-gray-200 rounded-full w-3/4"></div>
      <div class="h-2.5 bg-gray-200 rounded-full"></div>
      <div class="h-2.5 bg-gray-200 rounded-full w-5/6"></div>
      <div class="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
    </div>
  </a>
  
  <a href="/components/feedback/modal/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Modal</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Modals focus user attention on important content or actions</p>
    <div class="bg-[var(--color-background)] shadow-lg rounded-lg border border-[var(--color-border)] overflow-hidden">
      <div class="px-4 py-3 border-b border-[var(--color-border)] flex justify-between items-center">
        <h3 class="text-sm font-semibold">Modal Title</h3>
        <button class="text-[var(--color-text-muted)]">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="p-4">
        <p class="text-xs">Modal content goes here.</p>
      </div>
      <div class="px-4 py-3 border-t border-[var(--color-border)] flex justify-end space-x-2">
        <button class="text-xs py-1 px-2 border border-[var(--color-border)] rounded">Cancel</button>
        <button class="text-xs py-1 px-2 bg-[var(--color-primary)] text-white rounded">Confirm</button>
      </div>
    </div>
  </a>
  
  <a href="/components/feedback/tooltip/" class="eds-card hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-semibold mb-2">Tooltip</h2>
    <p class="text-[var(--color-text-muted)] mb-4">Tooltips provide additional context when users hover over or focus on elements</p>
    <div class="relative flex justify-center">
      <button class="bg-[var(--color-primary)] text-white py-1 px-3 rounded text-sm">Hover me</button>
      <div class="absolute -top-9 bg-gray-800 text-white text-xs rounded py-1 px-2">
        This is a tooltip
        <svg class="absolute text-gray-800 h-2 w-full left-0 top-full" viewBox="0 0 255 255" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 127.5,127.5 255,0" fill="currentColor" />
        </svg>
      </div>
    </div>
  </a>
</div>

## Usage Guidelines

When working with feedback components, consider the following best practices:

- Use appropriate colors and icons to convey the nature of the feedback
- Place feedback components in consistent locations throughout your application
- Ensure feedback is timely and relevant to user actions
- Provide clear, concise messages that explain what happened and what action to take
- Make feedback accessible to all users, including those using screen readers
- Use progressive loading indicators for operations that take longer than a second
- Allow users to dismiss non-critical feedback when appropriate

For component-specific guidelines, refer to the individual component documentation pages.