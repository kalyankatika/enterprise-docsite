 // Code block
  eleventyConfig.addPairedShortcode(
    'codeBlock', 
    (content, type, language) =>
      `<div class="code-block">
        <div class="code-block-header">
          <div class="code-block-tabs">
            <div class="code-block-tab active" data-target="web-component-pane">Web Component</div>
            <div class="code-block-tab" data-target="html-pane">HTML</div>
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
          <div class="code-block-pane active" id="web-component-pane">
            <pre class="language-javascript"><code class="language-javascript">${type}</code></pre>
          </div>
          <div class="code-block-pane" id="html-pane">
            <pre class="language-html"><code class="language-html">${language}</code></pre>
          </div>
          <div class="copy-success">Copied!</div>
        </div>
      </div>`
  );

/*_code-block.scss*/
$color_1: #368727;
$color_2: #e2e8f0;
$color_3: white;
$color_4: #1f2937;
$color_5: #2563eb;
$font-family_1: 'Fira Code', 'Roboto Mono', monospace;
$font-family_2: inherit;
$background-color_1: #f8fafc;
$background-color_2: #f1f5f9;
$background-color_3: #fff;
$background-color_4: #e2e8f0;
$background-color_5: #1e293b;
$background-color_6: #334155;
$background-color_7: transparent;
$background-color_8: #368727;
$background-color_9: #f3f4f6;
$background-color_10: white;

/* css/code-block.css */
/* Code Tabs Container */
/* Tab Navigation */
/* Tab Content */
/* Code Block Container */
/* Code Header */
/* Copy Button */
/* Code styles - assumes you're using PrismJS or similar */
/* Success animation for copy */
/* Code block styling */
/* Code block component styles */
/* Ensure code blocks look nice */
/* Make code blocks responsive */
/* Success message for copy */
.code-tabs-container {
	margin: 2rem 0;
	border-radius: 0.5rem;
	overflow: hidden;
	border: 1px solid #e2e8f0;
	background-color: $background-color_1;
}
.tab-button {
	padding: 0.75rem 1.25rem;
	border: none;
	background-color: $background-color_2;
	cursor: pointer;
	font-weight: 500;
	font-size: 0.875rem;
	border-bottom: 2px solid transparent;
	transition: all 0.3s ease;
	&:hover {
		&:not(.active) {
			background-color: $background-color_4;
		}
	}
}
.tab-button.active {
	background-color: $background-color_3;
	border-bottom: 2px solid #368727;
	color: $color_1;
}
.tab-content {
	display: none;
	padding: 0;
	margin: 0;
}
.tab-content.active {
	display: block;
}
.code-block-container {
	position: relative;
	margin: 0;
	font-family: $font-family_1;
	font-size: 0.875rem;
	line-height: 1.5;
	background-color: $background-color_5;
	border-radius: 0 0 0.5rem 0.5rem;
	overflow: hidden;
}
.code-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: $background-color_6;
	color: $color_2;
	font-size: 0.75rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}
.code-language {
	opacity: 0.8;
}
.copy-button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.25rem;
	border: none;
	background-color: $background-color_7;
	cursor: pointer;
	opacity: 0.6;
	transition: opacity 0.2s ease;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	color: $color_4;
	&:hover {
		opacity: 1;
		color: $color_5;
	}
	svg {
		width: 16px;
		height: 16px;
	}
}
pre {
	margin: 0;
	padding: 1.25rem;
	overflow-x: auto;
}
code {
	font-family: $font-family_2;
}
.copy-feedback {
	position: absolute;
	top: 0.5rem;
	right: 2.5rem;
	background-color: $background-color_8;
	color: $color_3;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	font-size: 0.75rem;
	opacity: 0;
	transform: translateY(-10px);
	transition: all 0.3s ease;
}
.copy-feedback.show {
	opacity: 1;
	transform: translateY(0);
}
.code-block {
	margin: 2rem 0;
	border: 1px solid #e5e7eb;
	border-radius: 0.5rem;
	overflow: hidden;
}

.code-block .code-block-header, .code-block .code-block-tabs, .code-block .code-block-tab.active, .code-block .code-block-tab{
	margin: 0;
}

.code-block-header {
	display: flex;
	background-color: $background-color_9;
	border-bottom: 1px solid #e5e7eb;
}
.code-block-tabs {
	display: flex;
	flex-grow: 1;
	
}
.code-block-tab {
	padding: 0.5rem 1rem;
	cursor: pointer;
	border-right: 1px solid #e5e7eb;
}
.code-block-tab.active {
	background-color: $background-color_10;
	font-weight: bold;
	border-bottom: 2px solid #368727;
}
.code-block-actions {
	display: flex;
	align-items: center;
	padding: 0 0.5rem;
}
.code-block-content {
	position: relative;
	.language-html {
		margin-bottom: 0rem !important;
	}
	.language-javascript {
		margin-bottom: 0rem !important;
	}
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
	background-color: $background-color_8;
	color: $color_3;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	font-size: 0.875rem;
	opacity: 0;
	transition: opacity 0.3s;
}
.copy-success.show {
	opacity: 1;
}


// Within markdoown component
{% codeBlock 
'<div class="example">Hello World</div>','html' %}
{% endcodeBlock %}
