---
layout: page
title: Components
description: Browse our library of reusable components for web, iOS, and Android platforms.
eleventyNavigation:
  key: Components
  order: 2
---

# Component Library

Our component library provides a collection of reusable UI elements that follow the Enterprise Design System guidelines. These components are designed to be accessible, responsive, and consistent across different platforms.

## Browse Components by Platform

<div class="component-grid">
  <div class="component-category">
    <h3>Web Components</h3>
    <ul class="component-list">
      {% for component in components %}
        {% if component.platform == "web" %}
          <li class="component-item">
            <a href="/components/{{ component.name }}/" class="component-link">
              <span class="component-title">{{ component.title }}</span>
              <span class="component-version">v{{ component.version }}</span>
              <span class="component-status status-{{ component.status }}">{{ component.status }}</span>
            </a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>
  
  <div class="component-category">
    <h3>iOS Components</h3>
    <ul class="component-list">
      {% for component in components %}
        {% if component.platform == "ios" %}
          <li class="component-item">
            <a href="/components/{{ component.name }}/" class="component-link">
              <span class="component-title">{{ component.title }}</span>
              <span class="component-version">v{{ component.version }}</span>
              <span class="component-status status-{{ component.status }}">{{ component.status }}</span>
            </a>
          </li>
        {% endif %}
      {% endfor %}
      {% if components | filterByTag("ios") | length === 0 %}
        <li class="component-item empty">No iOS components available yet</li>
      {% endif %}
    </ul>
  </div>
  
  <div class="component-category">
    <h3>Android Components</h3>
    <ul class="component-list">
      {% for component in components %}
        {% if component.platform == "android" %}
          <li class="component-item">
            <a href="/components/{{ component.name }}/" class="component-link">
              <span class="component-title">{{ component.title }}</span>
              <span class="component-version">v{{ component.version }}</span>
              <span class="component-status status-{{ component.status }}">{{ component.status }}</span>
            </a>
          </li>
        {% endif %}
      {% endfor %}
      {% if components | filterByTag("android") | length === 0 %}
        <li class="component-item empty">No Android components available yet</li>
      {% endif %}
    </ul>
  </div>
</div>

## Component Status

Components in our library have different statuses that indicate their level of readiness:

<div class="status-legend">
  <div class="status-item">
    <span class="status-badge status-stable">Stable</span>
    <p>Component is production-ready and fully supported.</p>
  </div>
  <div class="status-item">
    <span class="status-badge status-beta">Beta</span>
    <p>Component is in testing and may undergo changes.</p>
  </div>
  <div class="status-item">
    <span class="status-badge status-deprecated">Deprecated</span>
    <p>Component is being phased out and should not be used in new projects.</p>
  </div>
</div>

## Contributing

If you'd like to contribute to our component library, please refer to our [contribution guidelines](/support/contribute/).

<style>
  .component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }
  
  .component-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .component-item {
    margin-bottom: 0.5rem;
  }
  
  .component-link {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }
  
  .component-link:hover {
    background-color: var(--color-bg-hover);
    text-decoration: none;
  }
  
  .component-title {
    flex: 1;
  }
  
  .component-version {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    margin-right: 0.5rem;
  }
  
  .component-item.empty {
    padding: 0.75rem;
    color: var(--color-text-muted);
    font-style: italic;
    border: 1px dashed var(--color-border);
    border-radius: 4px;
  }
  
  .status-legend {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .status-item {
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
  }
  
  .status-badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .status-stable {
    background-color: var(--color-success);
    color: white;
  }
  
  .status-beta {
    background-color: var(--color-warning);
    color: white;
  }
  
  .status-deprecated {
    background-color: var(--color-error);
    color: white;
  }
</style>
