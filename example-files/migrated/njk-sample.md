---
layout: "layouts/component.njk"
title: "Legacy Nunjucks Template"
description: "A sample Nunjucks template for testing conversion"
created_at: "2023-10-17"
author: "Template Team"
converted_from: "/home/runner/workspace/example-files/legacy-examples/sample.njk"
conversion_date: "2025-03-02"
---

<html><head></head><body><div class="legacy-template">
  <h1>Legacy Nunjucks Template</h1>
  
  <div class="description">
    A sample Nunjucks template for testing conversion
  </div>
  
  <h2>Template Features</h2>
  <ul>
    <li>Variable interpolation: {{ variable }}</li>
    <li>Conditional blocks</li>
    <li>Loops and iterations</li>
  </ul>
  
  <div class="code-example">
    
<pre><code><pre><code>
{% if condition %}
  <p>This content is conditional</p>
{% endif %}

{% for item in items %}
  <li>{{ item.name }}</li>
{% endfor %}
</code></pre>
</code></pre>
  </div>
  
  <p class="note">This template will be converted to Markdown while preserving the front matter.</p>
</div></body></html>