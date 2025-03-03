# Enterprise Documentation System API Reference

This document provides a comprehensive reference of the APIs, utilities, and interfaces available to developers working with the Enterprise Documentation System. It covers the core functionality that can be used to extend and customize the system.

## Table of Contents

1. [Migration API](#migration-api)
2. [Template API](#template-api)
3. [Data API](#data-api)
4. [Search API](#search-api)
5. [Theme API](#theme-api)
6. [Navigation API](#navigation-api)
7. [Component API](#component-api)
8. [Plugin API](#plugin-api)
9. [Configuration API](#configuration-api)
10. [Utility Functions](#utility-functions)

## Migration API

The Migration API provides programmatic access to the content migration functionality.

### Core Migration Function

```javascript
const { migrate } = require('./scripts/quick-migrate');

/**
 * Migrate content from source repositories to the EDS format
 * @param {Object} config - Migration configuration
 * @param {Array} config.sources - Source repositories to migrate
 * @param {string} config.destRoot - Destination directory for migrated content
 * @param {Object} config.options - Additional migration options
 * @returns {Promise<Object>} - Migration results
 */
migrate(config).then(results => {
  console.log(`${results.totalFiles} files migrated`);
});
```

### Migration Configuration Options

```javascript
const config = {
  // Source repositories to migrate
  sources: [
    { 
      path: "/path/to/repo", 
      name: "docs-repository",
      options: {
        include: ["**/*.md", "**/*.html"],
        exclude: ["**/node_modules/**", "**/draft/**"]
      }
    }
  ],
  
  // Destination directory for migrated content
  destRoot: "./src/migrated",
  
  // Global migration options
  options: {
    // Format options
    preserveHeadingLevels: false,
    topHeadingLevel: 1,
    
    // Layout mapping
    layoutMap: {
      "legacy-layout.html": "layouts/page.njk",
      "api-docs.html": "layouts/api.njk"
    },
    
    // Front matter defaults
    frontMatterDefaults: {
      layout: "layouts/migrated.njk",
      migrated: true
    },
    
    // Asset handling
    assets: {
      copyAssets: true,
      assetDir: "assets",
      updatePaths: true
    }
  },
  
  // Reporting options
  reporting: {
    generateReport: true,
    reportPath: "migration-report.md",
    detailedStats: true
  }
};
```

### Format-Specific Converters

```javascript
const { htmlToMd } = require('./src/utils/migration/html-to-md');
const { njkToMd } = require('./src/utils/migration/njk-to-md');
const { xmlToMd } = require('./src/utils/migration/xml-to-md');
const { parseLegacy } = require('./src/utils/migration/legacy-parser');
const { formatMd } = require('./src/utils/migration/md-formatter');

// Convert HTML to Markdown
htmlToMd.convertHtmlToMd(source, dest, options);

// Convert Nunjucks to Markdown
njkToMd.convertNjkToMd(source, dest, options);

// Convert XML to Markdown
xmlToMd.convertXmlToMd(source, dest, options);

// Parse legacy format
parseLegacy.parseLegacyToMd(source, dest, options);

// Format Markdown
formatMd.formatMarkdown(source, dest, options);
```

## Template API

The Template API includes Nunjucks filters, shortcodes, and utilities for working with templates.

### Custom Filters

```javascript
/**
 * Format a date in ISO format (YYYY-MM-DD)
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
dateToISO(date);

/**
 * Extract headings from content for table of contents
 * @param {Array} collection - The Eleventy collection
 * @param {string} url - The page URL
 * @returns {Array} - List of headings with id and text
 */
getHeadings(collection, url);

/**
 * Check if a URL is active in the current navigation
 * @param {string} currentUrl - The current page URL
 * @param {string} navUrl - The navigation item URL
 * @returns {boolean} - Whether the URL is active
 */
isActiveLink(currentUrl, navUrl);

/**
 * Convert a string to a slug
 * @param {string} str - The string to convert
 * @returns {string} - URL-friendly slug
 */
slug(str);
```

### Custom Shortcodes

```njk
{# Example shortcode #}
{% example "Title" %}
<div>Example content</div>
{% endexample %}

{# Component shortcode #}
{% component "button", { text: "Click me", variant: "primary" } %}

{# Code block shortcode #}
{% codeblock "javascript" %}
function example() {
  return "Hello world";
}
{% endcodeblock %}

{# Include with context #}
{% includeWith "components/card.njk", { title: "Card Title", content: "Card content" } %}
```

### Macros

```njk
{# Import macros #}
{% from "components/button.njk" import button %}
{% from "components/card.njk" import card %}
{% from "components/alert.njk" import alert %}

{# Use macros #}
{{ button({ text: "Submit", variant: "primary" }) }}
{{ card({ title: "Card Title", content: "Content" }) }}
{{ alert({ type: "warning", message: "Warning message" }) }}
```

## Data API

The Data API provides access to global and page-specific data.

### Accessing Global Data

```javascript
// In JavaScript
const site = require('./src/_data/site.js');
const navigation = require('./src/_data/navigation.js');
const components = require('./src/_data/components.js');
const versions = require('./src/_data/versions.js');
```

```njk
{# In Nunjucks templates #}
{{ site.title }}
{{ site.description }}
{{ site.baseUrl }}
```

### Data Structure

```javascript
// Site data structure
module.exports = {
  title: "Enterprise Documentation System",
  description: "Unified documentation platform",
  baseUrl: "https://docs.example.com",
  repo: "https://github.com/example/docs",
  env: process.env.ELEVENTY_ENV || "development",
  buildTime: new Date(),
  analytics: {
    enabled: true,
    trackingId: "UA-XXXXXXXX-X"
  },
  search: {
    enabled: true,
    indexPath: "/search-index.json"
  }
};

// Navigation data structure
module.exports = {
  main: [
    {
      title: "Getting Started",
      url: "/getting-started/",
      children: [
        { title: "Installation", url: "/getting-started/installation/" },
        { title: "Configuration", url: "/getting-started/configuration/" }
      ]
    },
    // Additional navigation items
  ],
  // Additional navigation sections
};

// Components data structure
module.exports = {
  categories: [
    {
      name: "Layout",
      components: ["accordion", "card", "grid", "container"]
    },
    {
      name: "Navigation",
      components: ["breadcrumb", "menu", "pagination", "tabs"]
    }
  ],
  components: {
    accordion: {
      name: "Accordion",
      description: "Collapsible content sections",
      status: "stable",
      version: "1.0.0"
    },
    // Additional component definitions
  }
};
```

### Front Matter Data

```yaml
---
title: Component Name
description: Component description
layout: layouts/component.njk
eleventyNavigation:
  key: ComponentName
  parent: Components
  order: 100
tags:
  - component
  - UI
status: stable
version: 1.0.0
lastUpdated: 2023-01-01
---
```

## Search API

The Search API provides functionality for implementing and customizing search.

### Search Initialization

```javascript
/**
 * Initialize search functionality
 * @param {Object} options - Search options
 * @param {string} options.searchIndex - Path to search index
 * @param {string} options.searchInput - Selector for search input
 * @param {string} options.resultsContainer - Selector for results container
 * @param {number} options.maxResults - Maximum number of results to display
 */
function initializeSearch(options) {
  // Implementation details
}

// Usage
initializeSearch({
  searchIndex: '/search-index.json',
  searchInput: '#search-input',
  resultsContainer: '#search-results',
  maxResults: 10
});
```

### Search Query Function

```javascript
/**
 * Perform a search against the index
 * @param {string} query - Search query
 * @param {Element} resultsContainer - Element to contain results
 * @returns {Array} - Search results
 */
function performSearch(query, resultsContainer) {
  // Implementation details
}
```

### Search Result Formatting

```javascript
/**
 * Format a search result item
 * @param {Object} result - Search result item
 * @returns {string} - HTML for result item
 */
function formatSearchResult(result) {
  return `
    <div class="search-result">
      <h3><a href="${result.url}">${result.title}</a></h3>
      <p>${result.snippet}</p>
    </div>
  `;
}
```

## Theme API

The Theme API provides functionality for theme management.

### Theme Management

```javascript
/**
 * Initialize theme from saved preference or system preference
 */
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  } else if (systemPrefersDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.classList.remove(currentTheme);
  document.documentElement.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}
```

### Theme CSS Variables

```css
:root {
  /* Base colors */
  --eds-color-primary: #0055FF;
  --eds-color-secondary: #17C3B2;
  --eds-color-accent: #FFC857;
  --eds-color-neutral: #2D3047;
  
  /* Text colors */
  --eds-color-text: #333333;
  --eds-color-text-light: #666666;
  
  /* Background colors */
  --eds-color-background: #FFFFFF;
  --eds-color-background-alt: #F5F7FA;
  
  /* Feedback colors */
  --eds-color-success: #06D6A0;
  --eds-color-warning: #FFD166;
  --eds-color-error: #EF476F;
  --eds-color-info: #118AB2;
}

.dark {
  /* Base colors */
  --eds-color-primary: #5C9AFF;
  --eds-color-secondary: #2FDED8;
  --eds-color-accent: #FFD176;
  --eds-color-neutral: #9DA3CC;
  
  /* Text colors */
  --eds-color-text: #E5E5E5;
  --eds-color-text-light: #BBBBBB;
  
  /* Background colors */
  --eds-color-background: #1A1A1A;
  --eds-color-background-alt: #2A2A2A;
  
  /* Feedback colors */
  --eds-color-success: #0AE6AD;
  --eds-color-warning: #FFD880;
  --eds-color-error: #FF6B8B;
  --eds-color-info: #30A8CC;
}
```

## Navigation API

The Navigation API provides functionality for working with site navigation.

### Navigation Structure

```javascript
// Navigation data structure
const navigation = {
  main: [
    {
      title: "Components",
      url: "/components/",
      children: [
        { title: "Accordion", url: "/components/accordion/" },
        { title: "Button", url: "/components/button/" },
        // Additional navigation items
      ]
    },
    // Additional navigation sections
  ],
  footer: [
    { title: "GitHub", url: "https://github.com/example/docs" },
    { title: "Twitter", url: "https://twitter.com/example" }
  ]
};
```

### Eleventy Navigation Plugin

```javascript
// In .eleventy.js
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

// In Markdown front matter
---
eleventyNavigation:
  key: ComponentName
  parent: Components
  order: 100
---

// In Nunjucks templates
{% set navPages = collections.all | eleventyNavigation %}
<ul>
{%- for entry in navPages %}
  <li{% if entry.url == page.url %} class="active"{% endif %}>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
    {% if entry.children.length %}
    <ul>
      {%- for child in entry.children %}
      <li{% if child.url == page.url %} class="active"{% endif %}>
        <a href="{{ child.url }}">{{ child.title }}</a>
      </li>
      {%- endfor %}
    </ul>
    {% endif %}
  </li>
{%- endfor %}
</ul>
```

### Custom Navigation Views

```javascript
/**
 * Generate a custom navigation view based on specific criteria
 * @param {Array} collection - The Eleventy collection
 * @param {Function} filterFn - Filter function to select pages
 * @returns {Array} - Filtered and organized navigation items
 */
function customNavigationView(collection, filterFn) {
  return collection
    .filter(filterFn)
    .sort((a, b) => a.data.order - b.data.order);
}

// Usage: By Channel
const byChannel = customNavigationView(
  collection.all,
  item => item.data.channel === "api"
);

// Usage: By Type
const byType = customNavigationView(
  collection.all,
  item => item.data.type === "component"
);

// Usage: By Owner
const byOwner = customNavigationView(
  collection.all,
  item => item.data.owner === "design-team"
);
```

## Component API

The Component API provides functionality for creating and using UI components.

### Component Definition

```javascript
// src/_data/components.js
module.exports = {
  button: {
    name: "Button",
    description: "Interactive button element",
    status: "stable",
    variants: ["primary", "secondary", "tertiary"],
    sizes: ["sm", "md", "lg"],
    props: {
      text: {
        type: "string",
        description: "Button text",
        required: true
      },
      variant: {
        type: "string",
        description: "Button variant",
        default: "primary",
        options: ["primary", "secondary", "tertiary"]
      },
      size: {
        type: "string",
        description: "Button size",
        default: "md",
        options: ["sm", "md", "lg"]
      },
      disabled: {
        type: "boolean",
        description: "Disabled state",
        default: false
      },
      onClick: {
        type: "function",
        description: "Click handler"
      }
    }
  },
  // Additional component definitions
};
```

### Component Template

```njk
{# src/_includes/components/button.njk #}
{% macro button(props) %}
  {% set variant = props.variant | default("primary") %}
  {% set size = props.size | default("md") %}
  {% set disabled = props.disabled | default(false) %}
  
  <button
    class="eds-button eds-button--{{ variant }} eds-button--{{ size }}"
    {% if disabled %}disabled{% endif %}
    {% if props.id %}id="{{ props.id }}"{% endif %}
    {% if props.attributes %}
      {% for attr, value in props.attributes %}
        {{ attr }}="{{ value }}"
      {% endfor %}
    {% endif %}
  >
    {{ props.text }}
  </button>
{% endmacro %}
```

### Component Usage

```njk
{% from "components/button.njk" import button %}

{{ button({
  text: "Click Me",
  variant: "primary",
  size: "md",
  disabled: false,
  id: "submit-button",
  attributes: {
    "data-tracking": "submit-form",
    "aria-label": "Submit Form"
  }
}) }}
```

## Plugin API

The Plugin API covers how to extend the functionality of the documentation system.

### Eleventy Plugin Structure

```javascript
/**
 * Custom Eleventy plugin
 * @param {Object} eleventyConfig - Eleventy configuration
 * @param {Object} options - Plugin options
 */
module.exports = function(eleventyConfig, options = {}) {
  // Add a filter
  eleventyConfig.addFilter("myFilter", function(value) {
    // Filter implementation
    return transformedValue;
  });
  
  // Add a shortcode
  eleventyConfig.addShortcode("myShortcode", function(content) {
    // Shortcode implementation
    return `<div class="custom-wrapper">${content}</div>`;
  });
  
  // Add a transform
  eleventyConfig.addTransform("myTransform", function(content, outputPath) {
    // Transform implementation
    return transformedContent;
  });
  
  // Add a collection
  eleventyConfig.addCollection("myCollection", function(collectionApi) {
    // Collection implementation
    return collectionApi.getFilteredByGlob("src/mycontent/**/*.md");
  });
};
```

### Plugin Usage

```javascript
// In .eleventy.js
const myPlugin = require("./src/_11ty/plugins/my-plugin.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(myPlugin, {
    // Plugin options
    option1: "value1",
    option2: "value2"
  });
};
```

## Configuration API

The Configuration API covers configuration options for the documentation system.

### Eleventy Configuration

```javascript
// .eleventy.js
module.exports = function(eleventyConfig) {
  // Configure templates
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  
  // Configure directories
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Configure data cascade
  eleventyConfig.setDataDeepMerge(true);
  
  // Configure markdown processing
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownOptions = {
    html: true,
    breaks: false,
    linkify: true
  };
  
  const markdownLibrary = markdownIt(markdownOptions).use(
    markdownItAnchor, {
      permalink: true,
      permalinkClass: "heading-anchor",
      permalinkSymbol: "#"
    }
  );
  
  eleventyConfig.setLibrary("md", markdownLibrary);
  
  // Return configuration object
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}",
    "./.eleventy.js"
  ],
  theme: {
    extend: {
      colors: {
        'eds-primary': 'var(--eds-color-primary)',
        'eds-secondary': 'var(--eds-color-secondary)',
        'eds-accent': 'var(--eds-color-accent)',
        'eds-neutral': 'var(--eds-color-neutral)',
        'eds-text': 'var(--eds-color-text)',
        'eds-text-light': 'var(--eds-color-text-light)',
        'eds-background': 'var(--eds-color-background)',
        'eds-background-alt': 'var(--eds-color-background-alt)',
        'eds-success': 'var(--eds-color-success)',
        'eds-warning': 'var(--eds-color-warning)',
        'eds-error': 'var(--eds-color-error)',
        'eds-info': 'var(--eds-color-info)'
      },
      fontFamily: {
        'eds-heading': ['var(--eds-font-heading)', 'sans-serif'],
        'eds-body': ['var(--eds-font-body)', 'sans-serif'],
        'eds-code': ['var(--eds-font-code)', 'monospace']
      },
      spacing: {
        // Additional spacing values
      },
      fontSize: {
        // Additional font size values
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class'
};
```

### Package.json Scripts

```json
{
  "scripts": {
    "start": "npx @11ty/eleventy --serve",
    "build": "npx @11ty/eleventy",
    "build:prod": "NODE_ENV=production npx @11ty/eleventy",
    "dev": "npx @11ty/eleventy --serve --watch",
    "debug": "DEBUG=* npx @11ty/eleventy",
    "migrate": "./scripts/migrate.sh",
    "migrate:cli": "node scripts/migrate-cli.js",
    "migrate:test": "node scripts/run-migration-test.js",
    "import": "node scripts/import-repo.js"
  }
}
```

## Utility Functions

The Utility Functions cover helper functions used throughout the codebase.

### String Utilities

```javascript
/**
 * Convert a string to a slug (URL-friendly string)
 * @param {string} str - The string to convert
 * @returns {string} - URL-friendly slug
 */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate a string to a maximum length
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add when truncated
 * @returns {string} - Truncated string
 */
function truncate(str, maxLength, suffix = '...') {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength).trim() + suffix;
}

/**
 * Convert Markdown to HTML
 * @param {string} markdown - Markdown content
 * @returns {string} - HTML content
 */
function markdownToHtml(markdown) {
  const markdownIt = require('markdown-it')();
  return markdownIt.render(markdown);
}
```

### Date Utilities

```javascript
/**
 * Format a date
 * @param {Date|string} date - The date to format
 * @param {string} format - Format string
 * @returns {string} - Formatted date string
 */
function formatDate(date, format = 'YYYY-MM-DD') {
  const { DateTime } = require('luxon');
  return DateTime.fromJSDate(new Date(date)).toFormat(format);
}

/**
 * Check if a date is in the future
 * @param {Date|string} date - The date to check
 * @returns {boolean} - Whether the date is in the future
 */
function isFutureDate(date) {
  return new Date(date) > new Date();
}

/**
 * Get relative time from now
 * @param {Date|string} date - The date
 * @returns {string} - Relative time string
 */
function relativeTime(date) {
  const { DateTime } = require('luxon');
  return DateTime.fromJSDate(new Date(date)).toRelative();
}
```

### File Utilities

```javascript
/**
 * Get file extension
 * @param {string} filePath - Path to the file
 * @returns {string} - File extension
 */
function getFileExtension(filePath) {
  return filePath.split('.').pop();
}

/**
 * Check if a file exists
 * @param {string} filePath - Path to the file
 * @returns {boolean} - Whether the file exists
 */
function fileExists(filePath) {
  const fs = require('fs');
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Read file contents
 * @param {string} filePath - Path to the file
 * @returns {string} - File contents
 */
function readFile(filePath) {
  const fs = require('fs');
  return fs.readFileSync(filePath, 'utf8');
}
```

### DOM Utilities

```javascript
/**
 * Get element by selector
 * @param {string} selector - CSS selector
 * @returns {Element} - DOM element
 */
function getElement(selector) {
  return document.querySelector(selector);
}

/**
 * Get elements by selector
 * @param {string} selector - CSS selector
 * @returns {NodeList} - DOM elements
 */
function getElements(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Add event listener
 * @param {Element} element - DOM element
 * @param {string} event - Event name
 * @param {Function} callback - Event handler
 */
function addEvent(element, event, callback) {
  element.addEventListener(event, callback);
}
```

### Object Utilities

```javascript
/**
 * Deep merge objects
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} - Merged object
 */
function deepMerge(target, source) {
  const output = { ...target };
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key];
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        output[key] = source[key];
      }
    });
  }
  
  return output;
}

/**
 * Check if value is an object
 * @param {any} item - Value to check
 * @returns {boolean} - Whether the value is an object
 */
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Pick properties from an object
 * @param {Object} obj - Source object
 * @param {Array} keys - Keys to pick
 * @returns {Object} - Object with picked properties
 */
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
```