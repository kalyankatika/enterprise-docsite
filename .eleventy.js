/**
 * Eleventy Configuration
 */
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const navigationPlugin = require("@11ty/eleventy-navigation");
const filters = require("./src/_11ty/filters");

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(navigationPlugin);

  // Copy static assets directly to output
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  // Add support for YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

  // Configure Markdown with anchors for headings
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "header-anchor",
      symbol: "#",
      level: [1, 2, 3, 4]
    }),
    slugify: str => {
      return str
        .toLowerCase()
        .replace(/[^\\w\\s-]/g, "")
        .replace(/[\\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Add date formatting filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL dd, yyyy");
  });

  // Add active link filter
  eleventyConfig.addFilter("isActive", filters.isActiveLink);

  // Get the first 'n' elements of a collection
  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));
  
  // Add custom filters
  eleventyConfig.addFilter("getHeadings", filters.getHeadings);
  eleventyConfig.addFilter("dateToISO", filters.dateToISO);
  eleventyConfig.addFilter("escape", filters.escape);

  // Allow components to be organized in sub-directories 
  eleventyConfig.addLayoutAlias("component", "layouts/component.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");

  // Create a collection for all components
  eleventyConfig.addCollection("components", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/components/**/*.md");
  });

  // Create component category collections
  eleventyConfig.addCollection("inputComponents", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/components/inputs/**/*.md");
  });

  eleventyConfig.addCollection("layoutComponents", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/components/layout/**/*.md");
  });

  eleventyConfig.addCollection("navigationComponents", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/components/navigation/**/*.md");
  });

  eleventyConfig.addCollection("feedbackComponents", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/components/feedback/**/*.md");
  });

  // Copy alpinejs from node_modules for client-side JavaScript enhancement
  eleventyConfig.addPassthroughCopy({
    "node_modules/alpinejs/dist/cdn.min.js": "assets/js/alpine.min.js",
  });

  // Watch for changes to CSS files
  eleventyConfig.addWatchTarget("src/assets/css/**/*.css");

  // Configure BrowserSync for development server
  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    ghostMode: false,
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content = "<html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1><p>Sorry, the page you are looking for does not exist.</p><p><a href='/'>Return to home</a></p></body></html>";
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(content);
          res.end();
        });
      }
    }
  });

  // Override default template engine to use Nunjucks
  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    pathPrefix: "/"
  };
};