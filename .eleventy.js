const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  // Copy assets directly to output
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  
  // Create assets/images directory in output even if source doesn't exist yet
  eleventyConfig.on('eleventy.before', async () => {
    const fs = require('fs');
    const path = require('path');
    
    // Ensure output directories exist
    ['_site/assets', '_site/assets/images', '_site/assets/css'].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    // Create a favicon if it doesn't exist
    const faviconPath = 'src/assets/images/favicon.svg';
    const faviconDir = path.dirname(faviconPath);
    
    if (!fs.existsSync(faviconDir)) {
      fs.mkdirSync(faviconDir, { recursive: true });
    }
    
    if (!fs.existsSync(faviconPath)) {
      const faviconContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="14" fill="#0056b3" opacity="0.2"/>
  <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm-1 18h-2v-8h2v8zm5 0h-3V12h3v10z" fill="#0056b3"/>
</svg>`;
      fs.writeFileSync(faviconPath, faviconContent);
    }
  });
  
  // Create search-index.json
  eleventyConfig.addCollection('searchIndex', function(collection) {
    return collection.getAll().map(item => {
      return {
        url: item.url,
        title: item.data.title || '',
        content: item.template?.frontMatter?.content || item.templateContent || ''
      };
    });
  });
  
  // Configure Markdown library
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'anchor',
    permalinkSymbol: '#',
    permalinkSpace: false,
    level: [1, 2, 3, 4],
    slugify: function(s) {
      return String(s)
        .trim()
        .toLowerCase()
        .replace(/[\s+~\/]/g, '-')
        .replace(/[().`,%·'"!?¿:@*]/g, '');
    }
  });
  
  eleventyConfig.setLibrary('md', markdownLibrary);
  
  // Check if URLs include trailing slash
  eleventyConfig.addFilter('isCurrentPage', function(currentUrl, pageUrl) {
    return currentUrl === pageUrl;
  });
  
  // Format dates
  eleventyConfig.addFilter('readableDate', function(dateObj) {
    if (!(dateObj instanceof Date)) {
      dateObj = new Date(dateObj);
    }
    return dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });
  
  // Add a debug filter
  eleventyConfig.addFilter('debug', function(value) {
    return JSON.stringify(value, null, 2);
  });
  
  // Create a search-index.json file
  eleventyConfig.addGlobalData('eleventyComputed.permalink', function() {
    return (data) => {
      // Special case for search-index.json
      if (data.page.inputPath.endsWith('search-index.njk')) {
        return '/search-index.json';
      }
      return data.permalink;
    };
  });
  
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_includes/layouts',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};