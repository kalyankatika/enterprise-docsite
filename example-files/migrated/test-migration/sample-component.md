---
layout: "layouts/component.njk"
title: "Sample Component"
converted_from: "/home/runner/workspace/example-files/legacy-examples/sample-component.njk"
conversion_date: "2025-03-03"
---

<html><head></head><body>{% extends "layouts/base.njk" %}

<p>{% block content %}</p>
<h1>{{ title }}</h1>
<p>This is a sample component template that will be migrated.</p>
<h2>Usage</h2>
<pre><code class="language-html"><div class=&quot;component&quot;>
  <h2>{{ title }}</h2>
  <p>Component content</p>
</div>
</code></pre>
<p>{% endblock %}</body></html></p>
