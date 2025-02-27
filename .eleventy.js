const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Copy the `assets` folder to the output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  // Alias `layout: post` to `layout: layouts/post.njk`
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  eleventyConfig.addLayoutAlias("component", "layouts/component.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy-MM-dd");
  });

  // Get the first `n` elements of a collection
  eleventyConfig.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Return all the tags used in a collection
  eleventyConfig.addFilter("getAllTags", collection => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  // Return all the components
  eleventyConfig.addFilter("filterComponentsByCategory", (components, category) => {
    return components.filter(component => component.category === category);
  });

  // Get component by name
  eleventyConfig.addFilter("getComponentByName", (components, name) => {
    return components.find(component => component.name === name);
  });

  // Filter by tag
  eleventyConfig.addFilter("filterByTag", (collection, tag) => {
    return collection.filter(item => (item.data.tags || []).includes(tag));
  });

  // Create an array of all component categories
  eleventyConfig.addFilter("componentCategories", components => {
    let categories = new Set();
    components.forEach(component => {
      if (component.category) {
        categories.add(component.category);
      }
    });
    return Array.from(categories);
  });

  // Convert markdown
  eleventyConfig.addFilter("markdown", function(value) {
    const md = new markdownIt();
    return md.render(value);
  });

  // Get component data
  eleventyConfig.addShortcode("componentData", function(name, components) {
    const component = components.find(c => c.name === name);
    return JSON.stringify(component || {});
  });

  // Enhanced markdown
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });
  
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    // Control which files Eleventy will process
    templateFormats: ["md", "njk", "html"],

    // Pre-process *.md files with Nunjucks
    markdownTemplateEngine: "njk",
    
    // Pre-process *.html files with Nunjucks
    htmlTemplateEngine: "njk",
    
    // These are all optional:
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
