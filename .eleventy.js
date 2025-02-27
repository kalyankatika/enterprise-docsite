/**
 * Eleventy Configuration
 */
const { DateTime } = require('luxon');
const navigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const filters = require('./src/_11ty/filters.js');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(rssPlugin);
  
  // Passthrough file copy
  eleventyConfig.addPassthroughCopy({
    'src/assets/css': 'assets/css',
    'src/assets/js': 'assets/js',
    'src/assets/images': 'assets/images',
    'src/assets/fonts': 'assets/fonts'
  });

  // Create asset shortcode
  eleventyConfig.addShortcode("asset", function(path) {
    return `/assets/${path}`;
  });
  
  // Watch targets
  eleventyConfig.addWatchTarget('src/assets/css/');
  eleventyConfig.addWatchTarget('src/assets/js/');
  eleventyConfig.addWatchTarget('tailwind.config.js');
  eleventyConfig.addWatchTarget('postcss.config.js');
  
  // Custom collections
  eleventyConfig.addCollection('inputComponents', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/components/inputs/*.md');
  });
  
  eleventyConfig.addCollection('layoutComponents', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/components/layout/*.md');
  });
  
  eleventyConfig.addCollection('navigationComponents', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/components/navigation/*.md');
  });
  
  eleventyConfig.addCollection('feedbackComponents', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/components/feedback/*.md');
  });
  
  // Add updates collection for latest updates
  eleventyConfig.addCollection('updates', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/updates/*.md')
      .sort((a, b) => b.date - a.date);
  });

  // Add components collection for all components
  eleventyConfig.addCollection('allComponents', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/components/**/*.md');
  });
  
  // Add custom filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });
  
  // Add limit filter for limiting collection items
  eleventyConfig.addFilter('limit', function(arr, limit) {
    if (!Array.isArray(arr)) return arr;
    return arr.slice(0, limit);
  });

  // Add a slice filter
  eleventyConfig.addFilter('slice', function(arr, start, end) {
    if (!Array.isArray(arr)) return arr;
    return arr.slice(start, end);
  });
  
  // Add a JSON stringify filter for search index
  eleventyConfig.addFilter('json', function(obj) {
    return JSON.stringify(obj);
  });
  
  // Simple text escape filter as a backup
  eleventyConfig.addFilter('escape', function(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  });

  // Format date filter
  eleventyConfig.addFilter('formatDate', function(date) {
    return DateTime.fromJSDate(date).toFormat('LLLL d, yyyy');
  });

  // Format ISO date filter
  eleventyConfig.addFilter('formatISODate', function(date) {
    return DateTime.fromJSDate(date).toISO();
  });
  
  // Custom Markdown setup
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'anchor',
      symbol: '#',
      level: [2, 3, 4]
    }),
    slugify: s => s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
  });
  
  eleventyConfig.setLibrary('md', markdownLibrary);

  // BrowserSync configuration
  eleventyConfig.setBrowserSyncConfig({
    server: {
      baseDir: './_site'
    },
    port: 5000,
    ui: false,
    ghostMode: false,
    open: true
  });
  
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};