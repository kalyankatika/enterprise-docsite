1. Create a custom markdown-it plugin
This plugin will transform specially annotated code blocks into your tabbed interface:
// markdown-it-code-tabs.js
module.exports = function(md) {
  // Store the original fence renderer
  const defaultFenceRenderer = md.renderer.rules.fence;

  // Override the fence renderer
  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const info = token.info.trim();
    
    // Check if this is a tabbed code block
    if (info === 'code-tabs') {
      // Split the content by the separators
      const parts = token.content.split('<!-- tab-separator -->');
      
      // First part is HTML, second part is Web Component
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



2. /* Code block styling */
.code-block {
  margin: 2rem 0;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

.code-block-header {
  display: flex;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  margin: 0;
}

.code-block-tabs {
  display: flex;
  flex-grow: 1;
  margin: 0;
}

.code-block-tab {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-right: 1px solid #e5e7eb;
  margin: 0;
}

.code-block-tab.active {
  background-color: white;
  font-weight: bold;
  border-bottom: 2px solid #368727;
  margin: 0;
}

.code-block-actions {
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}

.copy-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: #1f2937;
}

.copy-button:hover {
  color: #2563eb;
}

.code-block-content {
  position: relative;
}

.code-block-content .language-html,
.code-block-content .language-javascript {
  margin-bottom: 0 !important;
}

.code-block-pane {
  display: none;
}

.code-block-pane.active {
  display: block;
}

pre[class*="language-"] {
  margin: 0 !important;
  border-radius: 0 !important;
  overflow-x: auto;
}

.copy-success {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #368727;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.copy-success.show {
  opacity: 1;
}



3. //eleventy.js
const markdownIt = require('markdown-it');
const markdownItCodeTabs = require('./markdown-it-code-tabs.js');

module.exports = function(eleventyConfig) {
  // Your existing configuration...
  
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
  
  // Return your configuration object
  return {
    dir: {
      input: "src",  // adjust as needed
      output: "_site",  // adjust as needed
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};

4. //main.js
// Code block functionality
document.addEventListener('DOMContentLoaded', function() {
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

5. //markdown
```code-tabs
<div class="example">
  <fds-breadcrumbs
    breadcrumbs-links='[
        {"text":"Home","href":"#1"},
        {"text":"Category","href":"#2"},
        {"text":"Paints","href":"#3"}
    ]'></fds-breadcrumbs>
</div>
<!-- tab-separator -->
import { fdsBreadcrumbs } from '@xyz-ap153177/apex-kit';

// Register the component if needed
if (!customElements.get('fds-breadcrumbs')) {
  customElements.define('fds-breadcrumbs', fdsBreadcrumbs);
}
```
