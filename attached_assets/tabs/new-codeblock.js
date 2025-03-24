1. Create a custom markdown-it plugin
This plugin will transform specially annotated code blocks into your tabbed interface:
javascriptCopy// markdown-it-code-tabs.js
module.exports = function(md) {
  // Store the original fence renderer
  const defaultFenceRenderer = md.renderer.rules.fence;

  // Override the fence renderer
  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const info = token.info.trim();
    
    // Check if this is a tabbed code block
    if (info.startsWith('html-web')) {
      // Split the content by a separator (e.g., '<!-- web-component -->')
      const parts = token.content.split('<!-- web-component -->');
      
      const htmlContent = parts[0].trim();
      const webComponentContent = parts.length > 1 ? parts[1].trim() : '';
      
      // Generate the HTML for the tabbed code block
      return `
        <div class="code-block">
          <div class="code-block-header">
            <div class="code-block-tabs">
              <div class="code-block-tab active" data-target="html-pane">HTML</div>
              <div class="code-block-tab" data-target="web-component-pane">Web Component</div>
            </div>
            <div class="code-block-actions">
              <button class="copy-button" title="Copy code">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="code-block-content">
            <div class="code-block-pane active" id="html-pane">
              <pre class="language-html"><code class="language-html">${md.utils.escapeHtml(htmlContent)}</code></pre>
            </div>
            <div class="code-block-pane" id="web-component-pane">
              <pre class="language-javascript"><code class="language-javascript">${md.utils.escapeHtml(webComponentContent)}</code></pre>
            </div>
            <div class="copy-success">Copied!</div>
          </div>
        </div>
      `;
    }
    
    // Not a tabbed code block, use the default renderer
    return defaultFenceRenderer(tokens, idx, options, env, self);
  };
};
2. Add the plugin to your Eleventy config
javascriptCopy// In your .eleventy.js file
const markdownIt = require('markdown-it');
const markdownItCodeTabs = require('./markdown-it-code-tabs.js');

module.exports = function(eleventyConfig) {
  // Create a markdown library with the custom plugin
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItCodeTabs);
  
  // Set the library for .md files
  eleventyConfig.setLibrary("md", markdownLibrary);
  
  // Rest of your config
  // ...
};
3. Use in your markdown files
Now in your markdown files, you can use this much cleaner syntax:
markdownCopy```html-web
<div class="example">
  <eds-breadcrumbs
    breadcrumbs-links='[
        {"text":"Home","href":"#1"},
        {"text":"Category","href":"#2"},
        {"text":"Paints","href":"#3"}
    ]'></eds-breadcrumbs>
</div>

<!-- web-component -->
import { edsBreadcrumbs } from '@xyz-ap153177/apex-kit';

// Register the component if needed
if (!customElements.get('eds-breadcrumbs')) {
  customElements.define('eds-breadcrumbs', edsBreadcrumbs);
}
```
This approach has several advantages:

Uses standard markdown fenced code blocks
Supports multi-line code properly
Easy to read and edit in markdown
Uses syntax highlighting in most markdown editors
The separator (<!-- web-component -->) is clear and visible
No need to escape special characters

4. Update your JavaScript for tab switching and copy functionality
The JavaScript you're currently using should work fine with this new approach, just make sure it's targeting the right elements:
javascriptCopydocument.addEventListener('DOMContentLoaded', function() {
  // Tab switching
  document.querySelectorAll('.code-block-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const codeBlock = tab.closest('.code-block');
      const targetId = tab.getAttribute('data-target');
      
      // Update active tab
      codeBlock.querySelectorAll('.code-block-tab').forEach(t => {
        t.classList.remove('active');
      });
      tab.classList.add('active');
      
      // Update active pane
      codeBlock.querySelectorAll('.code-block-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      codeBlock.querySelector(`#${targetId}`).classList.add('active');
    });
  });
  
  // Copy functionality
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
      const codeBlock = button.closest('.code-block');
      const activePane = codeBlock.querySelector('.code-block-pane.active');
      const code = activePane.querySelector('code').textContent;
      
      navigator.clipboard.writeText(code).then(() => {
        const successMsg = codeBlock.querySelector('.copy-success');
        successMsg.classList.add('show');
        setTimeout(() => {
          successMsg.classList.remove('show');
        }, 2000);
      });
    });
  });
});
