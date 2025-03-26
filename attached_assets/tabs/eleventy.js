const util = require('util');
const fs = require('fs');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const sass = require('eleventy-sass');
const path = require('path');
const collections = require('./scripts/eleventy-collections');
const shortcodes = require('./scripts/eleventy-shortcodes');
const eleventyNavigationExtensions = require('./scripts/eleventy-navigation-extensions');
const markdownIt = require('markdown-it');
const markdownItCodeTabs = require('./scripts/markdown-it-code-tabs.js');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItPrism = require("markdown-it-prism");

const webComponentDistPath =
  path.dirname(
    require.resolve('@xyz-pr178318/eds-web-components/package.json')
  ) + '/dist';
const tokensDistPath =
  path.dirname(require.resolve('@xyz-pr178318/eds-tokens/package.json')) +
  '/dist';

module.exports = async function (eleventyConfig) {
  const {RenderPlugin} = await import('@11ty/eleventy');
  const {eleventyImageTransformPlugin} = await import('@11ty/eleventy-img');

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: 'html',
    formats: ['webp', 'svg'],
    svgShortCircuit: true,
    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
    filenameFormat: function (id, src, width, format, options) {
      // use original filename
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
  });

  eleventyConfig.addFilter('console', function (value) {
    const str = util.inspect(value);
    return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`;
  });

  // shortcodes
  eleventyConfig.addShortcode('listTokens', (path) =>
    shortcodes.listTokens(path)
  );
  eleventyConfig.addShortcode('webApi', (component) =>
    shortcodes.webApi(component)
  );

  // shortcodes for brand content
  eleventyConfig.addShortcode('brandYear', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode(
    'brandColorCircle',
    (name, hexColor, shouldReverse, hasBorder, sizeMultiplier = 1) =>
      `<div class="brand-color-circle ${
        hasBorder === true ? 'brand-color-circle--with-border' : ''
      } ${
        shouldReverse === true ? 'brand-color-circle--reverse' : ''
      }" style="background-color: ${hexColor};width: calc(8em * ${sizeMultiplier}); height: calc(8em * ${sizeMultiplier})"><span><b>${name}</b><br>${hexColor}</span></div>`
  );
  eleventyConfig.addPairedShortcode(
    'brandColorRow',
    (content) => `<div class="brand-color-row">${content}</div>`
  );
  eleventyConfig.addShortcode(
    'brandLogoRow',
    (img1, img1AltText, img2, img2AltText) =>
      `<div class="brand-logo-row"><img src="${img1}" alt="${img1AltText}"><img src="${img2}" alt="${img2AltText}"></div>`
  );
  eleventyConfig.addPairedShortcode(
    'brandColorBackgroundBlock',
    (content, hexColor) =>
      `<div class="brand-color-background-block" style="background-color: ${hexColor}">${content}</div>`
  );
  eleventyConfig.addShortcode(
    'brandTextContrastBlock',
    (name, hexColor, standard) =>
      `<div class="brand-text-contrast-block" style="color: ${hexColor}"><span><b>${name}</b><br>${hexColor}</span><span>${standard}</span></div>`
  );

  
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(sass, {
    sass: {
      includes: '',
      loadPaths: ['../../node_modules/'],
    },
  });

  eleventyConfig.addFilter('console', function (value) {
    return util.inspect(value);
  });

  // Filters
  eleventyConfig.addFilter(
    'navSectionSort',
    eleventyNavigationExtensions.navSectionSort
  );
  eleventyConfig.addFilter(
    'navSectionPages',
    eleventyNavigationExtensions.navSectionPages
  );

  // Section extraction filter
  eleventyConfig.addFilter('extractSections', function(content, sectionNames) {
    if (!content) return {};
    
    const sections = {};
    
    // Initialize all requested sections with null
    sectionNames.forEach(name => {
      sections[name] = null;
    });
    
    // Regular expression to find sections
    // Using non-greedy matching to prevent overlapping sections
    const sectionRegex = /<!-- SECTION: (\w+) -->([\s\S]*?)<!-- ENDSECTION -->/g;
    
    let match;
    while ((match = sectionRegex.exec(content)) !== null) {
      const sectionName = match[1].toLowerCase();
      const sectionContent = match[2].trim();
      
      // Only store sections that were requested
      if (sectionNames.includes(sectionName)) {
        sections[sectionName] = sectionContent;
      }
    }
    
    return sections;
  });

  // collections
  eleventyConfig.addCollection('allComponents', function (collectionApi) {
    return collections.allComponents(collectionApi);
  });

  // COPY WEB COMPONENTS AND ASSOCIATED ARTIFACTS
  // COPY JS FILES
  eleventyConfig.addPassthroughCopy({
    [path.relative(
      process.cwd(),
      `${webComponentDistPath}/eds-entry.bundle.js`
    )]: 'assets/js/eds-entry.bundle.js',
    [path.relative(process.cwd(), `${webComponentDistPath}/eds.bundle.js`)]:
      'assets/js/eds.bundle.js',
  });
  eleventyConfig.addPassthroughCopy('src/**/*.js');
  eleventyConfig.addPassthroughCopy('src/**/*.json');

  //COPY CUSTOM ELEMENT MANAFEST FOR WEB COMPONENT API DOCS
  eleventyConfig.addPassthroughCopy({
    [path.relative(
      process.cwd(),
      `${webComponentDistPath}/custom-elements.json`
    )]: 'assets/data/custom-elements.json',
  });

  //COPY IMAGES
  eleventyConfig.addPassthroughCopy('src/**/*.webp');
  eleventyConfig.addPassthroughCopy('src/**/*.png');
  eleventyConfig.addPassthroughCopy('src/**/*.svg');
  eleventyConfig.addPassthroughCopy('src/**/*.ico');
  eleventyConfig.addPassthroughCopy('src/**/*.webmanifest');

  //COPY VIDEOS
  eleventyConfig.addPassthroughCopy('src/**/*.mp4');

  //COPY ZIP FILES (USED FOR DOWNLOADABLE ASSETS)
  eleventyConfig.addPassthroughCopy('src/**/*.zip');

  eleventyConfig.ignores.add('**/code.md');
  eleventyConfig.ignores.add('**/design.md');


  // Custom Markdown setup
  // const markdownLibrary = markdownIt({
  //   html: true,
  //   breaks: true,
  //   linkify: true
  // }).use(markdownItAnchor, {
  //   permalink: markdownItAnchor.permalink.ariaHidden({
  //     placement: 'after',
  //     class: 'anchor',
  //     symbol: '',
  //     level: [2, 3, 4]
  //   }),
  //   slugify: s => s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
  // });

  // Add the section extraction filter
  eleventyConfig.addFilter('extractSections', function(content, sectionNames) {
    if (!content) return {};
    
    const sections = {};
    
    // Initialize all requested sections with null
    sectionNames.forEach(name => {
      sections[name] = null;
    });
    
    // Regular expression to find sections
    // Using non-greedy matching to prevent overlapping sections
    const sectionRegex = /<!-- SECTION: (\w+) -->([\s\S]*?)<!-- ENDSECTION -->/g;
    
    let match;
    while ((match = sectionRegex.exec(content)) !== null) {
      const sectionName = match[1].toLowerCase();
      const sectionContent = match[2].trim();
      
      // Only store sections that were requested
      if (sectionNames.includes(sectionName)) {
        sections[sectionName] = sectionContent;
      }
    }
    
    return sections;
  });

  // Create a markdown library with the custom plugin
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItCodeTabs);

  // Set the library for .md files
  eleventyConfig.setLibrary("md", markdownLibrary);


  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  
  return {
    dir: {
      input: 'src',
      output: 'dist/site',
      includes: 'assets/includes',
      layouts: '',
    },
  };
};


ERROR:
Eleventy CLI Fatal Error: (more in DEBUG output)
[11ty] 1. Error in your Eleventy config file '.eleventy.js'. (via EleventyConfigError)
[11ty] 2. Error in your Eleventy config file '.eleventy.js': Returning a promise is not yet supported. (via EleventyConfigError)
[11ty] 
[11ty] Original error stack trace: EleventyConfigError: Error in your Eleventy config file '.eleventy.js': Returning a promise is not yet supported.
[11ty]     at TemplateConfig.requireLocalConfigFile (/Users/a439299/Documents/www/GitHub/pr178318_fidelity-design-system/node_modules/@11ty/eleventy/src/TemplateConfig.js:294:19)
[11ty]     at TemplateConfig.mergeConfig (/Users/a439299/Documents/www/GitHub/pr178318_fidelity-design-system/node_modules/@11ty/eleventy/src/TemplateConfig.js:334:28)
[11ty]     at TemplateConfig.getConfig (/Users/a439299/Documents/www/GitHub/pr178318_fidelity-design-system/node_modules/@11ty/eleventy/src/TemplateConfig.js:159:26)
[11ty]     at new Eleventy (/Users/a439299/Documents/www/GitHub/pr178318_fidelity-design-system/node_modules/@11ty/eleventy/src/Eleventy.js:109:39)
[11ty]     at Object.<anonymous> (/Users/a439299/Documents/www/GitHub/pr178318_fidelity-design-system/node_modules/@11ty/eleventy/cmd.js:60:16)
[11ty]     at Module._compile (node:internal/modules/cjs/loader:1554:14)
[11ty]     at Object..js (node:internal/modules/cjs/loader:1706:10)
[11ty]     at Module.load (node:internal/modules/cjs/loader:1289:32)
[11ty]     at Function._load (node:internal/modules/cjs/loader:1108:12)
[11ty]     at TracingChannel.traceSync (node:diagnostics_channel:322:14)

