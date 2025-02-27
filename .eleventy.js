/**
 * Eleventy Configuration
 */
const { DateTime } = require('luxon');
const navigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  
  // Passthrough file copy
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  
  // Watch targets
  eleventyConfig.addWatchTarget('src/assets/css/');
  eleventyConfig.addWatchTarget('src/assets/js/');
  
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
  
  // Custom filters
  eleventyConfig.addFilter('dateToISO', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISODate();
  });
  
  eleventyConfig.addFilter('dateToYear', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
  });
  
  eleventyConfig.addFilter('isActiveLink', (currentUrl, navUrl) => {
    return currentUrl.startsWith(navUrl);
  });
  
  eleventyConfig.addFilter('escape', (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  });
  
  // Get headings from content for table of contents
  eleventyConfig.addFilter('getHeadings', (collection, url) => {
    const headings = [];
    const page = collection.find(item => item.url === url);
    
    if (page && page.templateContent) {
      const content = page.templateContent;
      const headingRegex = /<h([2-3])\s+id="([^"]+)"[^>]*>([^<]+)<\/h\1>/g;
      let match;
      
      while ((match = headingRegex.exec(content)) !== null) {
        headings.push({
          level: match[1],
          id: match[2],
          text: match[3]
        });
      }
    }
    
    return headings;
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