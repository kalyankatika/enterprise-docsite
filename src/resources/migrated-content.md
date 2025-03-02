---
layout: layouts/page.njk
title: Migrated Content
description: Content migrated from legacy documentation systems
eleventyNavigation:
  key: Migrated Content
  parent: Resources
  order: 30
---

# Migrated Content

This page provides access to documentation content that has been migrated from legacy systems using our migration tools.

## Recent Migrations

{% if collections.test %}
### Test Migration

These files were migrated during our test migration process:

<ul>
{% for page in collections.test %}
  <li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
{% endfor %}
</ul>
{% else %}
<div class="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-md">
  <p>No test migration has been run yet. Use one of the following commands to perform a test migration:</p>
  <pre class="mt-2 bg-gray-100 dark:bg-gray-800 p-2 rounded"><code>node scripts/run-migration-test.js</code></pre>
  <p class="mt-2">Or use the interactive CLI tool:</p>
  <pre class="mt-2 bg-gray-100 dark:bg-gray-800 p-2 rounded"><code>node scripts/migrate-cli.js</code></pre>
  <p class="mt-2">And select option 3 for test migration.</p>
</div>
{% endif %}

{% if collections.migrated %}
### Production Migrations

These files have been migrated from production legacy systems:

<ul>
{% for page in collections.migrated %}
  <li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
{% endfor %}
</ul>
{% else %}
<div class="p-4 bg-blue-100 dark:bg-blue-900 rounded-md">
  <p>No production content has been migrated yet. To migrate content from your legacy systems:</p>
  
  <ol class="list-decimal list-inside mt-2">
    <li>Edit <code>scripts/migration-config.js</code> with your repository paths</li>
    <li>Run <code>./scripts/migrate.sh</code> to perform the migration</li>
    <li>Or use the interactive CLI: <code>node scripts/migrate-cli.js</code></li>
  </ol>
</div>
{% endif %}

## How to Access Migrated Files

After running a migration:

1. Migrated files are saved to the `src/migrated` directory by default
2. They are organized by repository name in subdirectories
3. A migration report is generated at `src/migrated/migration-report.md`
4. A navigation file is created at `src/migrated/migrated-nav.json`

## Manual Access

To browse the migrated files directly:

- Check the file system at `example-files/migrated` for test migrations
- Check the file system at `src/migrated` for production migrations

## Migration Report

If you've run a migration, you can [view the migration report](/migrated/migration-report/) to see what files were processed.

## Learn More

- [Migration Guide](/resources/legacy-migration/)
- [Migration Tools](/resources/migration-tools/)