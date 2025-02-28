---
layout: layouts/page-with-nav.njk
title: Legacy Site Imports
description: Import and migrate content from legacy documentation sites into the Enterprise Design System.
eleventyNavigation:
  key: legacy-site-imports
  parent: resources
  order: 20
breadcrumbs:
  - title: Resources
    url: /resources/
  - title: Legacy Site Imports
---

<div x-data="legacyImports">
  <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">Import Legacy Content</h2>
    <p class="mb-6">This tool allows you to import and migrate content from legacy documentation sites. The migration utilities will convert the content to the proper format for the Enterprise Design System.</p>
    
    <div class="mb-6">
      <label for="sourceType" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Source Type</label>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          class="flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200"
          :class="{'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700': selectedSource === 'confluence', 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50': selectedSource !== 'confluence'}"
          @click="selectedSource = 'confluence'">
          <input type="radio" name="sourceType" id="confluence" value="confluence" x-model="selectedSource" class="h-4 w-4 text-indigo-600">
          <label for="confluence" class="ml-3 block text-sm font-medium cursor-pointer">
            <span class="block font-semibold">Confluence</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">HTML, macro-heavy content</span>
          </label>
        </div>
        
        <div 
          class="flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200"
          :class="{'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700': selectedSource === 'sharepoint', 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50': selectedSource !== 'sharepoint'}"
          @click="selectedSource = 'sharepoint'">
          <input type="radio" name="sourceType" id="sharepoint" value="sharepoint" x-model="selectedSource" class="h-4 w-4 text-indigo-600">
          <label for="sharepoint" class="ml-3 block text-sm font-medium cursor-pointer">
            <span class="block font-semibold">SharePoint</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">HTML, WebParts content</span>
          </label>
        </div>
        
        <div 
          class="flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200"
          :class="{'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700': selectedSource === 'jira', 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50': selectedSource !== 'jira'}"
          @click="selectedSource = 'jira'">
          <input type="radio" name="sourceType" id="jira" value="jira" x-model="selectedSource" class="h-4 w-4 text-indigo-600">
          <label for="jira" class="ml-3 block text-sm font-medium cursor-pointer">
            <span class="block font-semibold">Jira</span>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Issue descriptions, comments</span>
          </label>
        </div>
      </div>
    </div>
    
    <div class="mb-6">
      <label for="importMethod" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Import Method</label>
      <div class="flex space-x-4">
        <div class="flex items-center">
          <input type="radio" name="importMethod" id="api" value="api" x-model="importMethod" class="h-4 w-4 text-indigo-600">
          <label for="api" class="ml-2 block text-sm font-medium">API</label>
        </div>
        <div class="flex items-center">
          <input type="radio" name="importMethod" id="file" value="file" x-model="importMethod" class="h-4 w-4 text-indigo-600">
          <label for="file" class="ml-2 block text-sm font-medium">File Upload</label>
        </div>
        <div class="flex items-center">
          <input type="radio" name="importMethod" id="zip" value="zip" x-model="importMethod" class="h-4 w-4 text-indigo-600">
          <label for="zip" class="ml-2 block text-sm font-medium">ZIP Archive</label>
        </div>
      </div>
    </div>
    
    <div class="mb-6" x-show="importMethod === 'api'" x-transition>
      <label for="apiUrl" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">API URL</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <input type="text" name="apiUrl" id="apiUrl" x-model="apiUrl" class="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md">
      </div>
      <div class="mt-2">
        <label for="apiKey" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">API Key</label>
        <input type="password" name="apiKey" id="apiKey" x-model="apiKey" class="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md">
      </div>
    </div>
    
    <div class="mb-6" x-show="importMethod === 'file' || importMethod === 'zip'" x-transition>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select File</label>
      <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
        <div class="space-y-1 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex text-sm text-gray-600 dark:text-gray-400">
            <label for="file-upload" class="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only">
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            <span x-show="importMethod === 'file'">HTML, XML, or Markdown up to 10MB</span>
            <span x-show="importMethod === 'zip'">ZIP archive containing multiple files up to 50MB</span>
          </p>
        </div>
      </div>
    </div>
    
    <div class="mb-6">
      <label for="options" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Migration Options</label>
      <div class="space-y-2">
        <div class="flex items-center">
          <input type="checkbox" id="preserveFormatting" name="preserveFormatting" x-model="options.preserveFormatting" class="h-4 w-4 text-indigo-600 border-gray-300 rounded">
          <label for="preserveFormatting" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Preserve original formatting where possible</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="extractAssets" name="extractAssets" x-model="options.extractAssets" class="h-4 w-4 text-indigo-600 border-gray-300 rounded">
          <label for="extractAssets" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Extract and include images and other assets</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="preserveTables" name="preserveTables" x-model="options.preserveTables" class="h-4 w-4 text-indigo-600 border-gray-300 rounded">
          <label for="preserveTables" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Preserve tables layout</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="addFrontMatter" name="addFrontMatter" x-model="options.addFrontMatter" class="h-4 w-4 text-indigo-600 border-gray-300 rounded">
          <label for="addFrontMatter" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Generate front matter from metadata</label>
        </div>
      </div>
    </div>
    
    <div class="flex justify-end space-x-3">
      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
        Cancel
      </button>
      <button type="button" @click="startImport" class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
        Start Import
      </button>
    </div>
  </div>
  
  <div x-show="importStarted" x-transition class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">Import Progress</h2>
    
    <div class="mb-4">
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300" x-text="progressPercentage + '%'"></span>
      </div>
      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div class="bg-indigo-600 h-2.5 rounded-full" :style="'width: ' + progressPercentage + '%'"></div>
      </div>
    </div>
    
    <div class="mb-4">
      <h3 class="text-md font-semibold mb-2">Current Activity</h3>
      <p class="text-gray-700 dark:text-gray-300" x-text="currentActivity"></p>
    </div>
    
    <div class="mb-4" x-show="processingLogs.length > 0">
      <h3 class="text-md font-semibold mb-2">Processing Logs</h3>
      <div class="bg-gray-100 dark:bg-gray-900 p-3 rounded-md text-sm font-mono h-32 overflow-y-auto">
        <template x-for="(log, index) in processingLogs" :key="index">
          <div class="mb-1" :class="{'text-green-600 dark:text-green-400': log.type === 'success', 'text-red-600 dark:text-red-400': log.type === 'error', 'text-gray-600 dark:text-gray-400': log.type === 'info'}">
            <span x-text="log.message"></span>
          </div>
        </template>
      </div>
    </div>
    
    <div x-show="importComplete" x-transition class="mb-4">
      <div class="rounded-md bg-green-50 dark:bg-green-900/30 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-green-800 dark:text-green-200">Import Complete</h3>
            <div class="mt-2 text-sm text-green-700 dark:text-green-300">
              <p>Successfully imported and migrated <span x-text="importedCount"></span> files.</p>
            </div>
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <button @click="viewReport" type="button" class="bg-green-50 dark:bg-green-900/30 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900/50">
                  View Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <h2 class="text-2xl font-bold mb-4">Recent Imports</h2>
  
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md mb-8">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <template x-for="(item, index) in recentImports" :key="index">
        <li>
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                  <span x-text="item.source.charAt(0).toUpperCase()" class="text-indigo-600 dark:text-indigo-400 font-bold"></span>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900 dark:text-white" x-text="item.name"></div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    <span x-text="item.source"></span> · <span x-text="item.date"></span>
                  </div>
                </div>
              </div>
              <div class="flex space-x-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="{'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200': item.status === 'completed', 
                              'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200': item.status === 'processing',
                              'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200': item.status === 'failed'}"
                      x-text="item.status">
                </span>
                <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900/30 hover:bg-indigo-200 dark:hover:bg-indigo-900/50">
                  View
                </button>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <div class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                  </svg>
                  <span x-text="item.fileCount + ' files'"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Alpine.js component for Legacy Imports
  window.legacyImports = function() {
    return {
      selectedSource: 'confluence',
      importMethod: 'file',
      apiUrl: '',
      apiKey: '',
      options: {
        preserveFormatting: true,
        extractAssets: true,
        preserveTables: true,
        addFrontMatter: true
      },
      importStarted: false,
      importComplete: false,
      progressPercentage: 0,
      currentActivity: '',
      processingLogs: [],
      importedCount: 0,
      recentImports: [
        {
          name: 'Marketing Documentation Migration',
          source: 'confluence',
          date: 'Feb 26, 2025',
          status: 'completed',
          fileCount: 47
        },
        {
          name: 'Product Team Knowledge Base',
          source: 'sharepoint',
          date: 'Feb 22, 2025',
          status: 'completed',
          fileCount: 124
        },
        {
          name: 'UX Research Findings',
          source: 'jira',
          date: 'Feb 15, 2025',
          status: 'failed',
          fileCount: 18
        },
        {
          name: 'Engineering Wiki',
          source: 'confluence',
          date: 'Jan 30, 2025',
          status: 'completed',
          fileCount: 203
        }
      ],
      
      startImport() {
        this.importStarted = true;
        this.progressPercentage = 0;
        this.currentActivity = 'Initializing import process...';
        this.processingLogs = [];
        this.importComplete = false;
        
        // Simulate the import process
        setTimeout(() => this.updateProgress(5, 'Connecting to ' + this.selectedSource + ' API...'), 800);
        setTimeout(() => this.updateProgress(10, 'Fetching document structure...'), 1800);
        setTimeout(() => this.updateProgress(15, 'Downloading content...'), 2800);
        setTimeout(() => this.updateProgress(30, 'Processing content...'), 4000);
        setTimeout(() => this.updateProgress(45, 'Converting to Markdown...'), 5500);
        setTimeout(() => this.addLog('Successfully converted Home page', 'success'), 6000);
        setTimeout(() => this.addLog('Successfully converted Documentation page', 'success'), 6500);
        setTimeout(() => this.addLog('Error processing Table of Contents - malformed HTML', 'error'), 7000);
        setTimeout(() => this.updateProgress(60, 'Extracting assets...'), 7500);
        setTimeout(() => this.addLog('Extracted 12 images', 'info'), 8000);
        setTimeout(() => this.addLog('Extracted 3 PDF documents', 'info'), 8500);
        setTimeout(() => this.updateProgress(75, 'Applying styles...'), 9000);
        setTimeout(() => this.updateProgress(85, 'Generating front matter...'), 10000);
        setTimeout(() => this.updateProgress(95, 'Finalizing...'), 11000);
        setTimeout(() => {
          this.updateProgress(100, 'Import complete');
          this.importComplete = true;
          this.importedCount = 24;
        }, 12000);
      },
      
      updateProgress(percentage, activity) {
        this.progressPercentage = percentage;
        this.currentActivity = activity;
        this.addLog(activity, 'info');
      },
      
      addLog(message, type = 'info') {
        this.processingLogs.push({ message, type });
      },
      
      viewReport() {
        alert('Migration report would open here in a real implementation');
      }
    };
  };
});
</script>