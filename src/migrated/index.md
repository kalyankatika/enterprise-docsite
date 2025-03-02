---
layout: layouts/page.njk
title: Migrated Content Directory
description: Content migrated from legacy documentation systems
eleventyNavigation:
  key: Migrated Directory
  parent: Resources
  order: 31
---

# Migrated Content Directory

This page provides access to all migrated content from legacy documentation systems.

## Repository: Test Migration

These files were migrated during our test migration process:

- [Sample Document](/migrated/test-migration/sample-doc/)
- [Sample Component](/migrated/test-migration/sample-component/)
- [Sample Page](/migrated/test-migration/sample-page/)
- [Sample](/migrated/test-migration/sample/)

## Migration Report

The migration report provides details about what files were processed during migration:

<div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
{% if collections.all | eleventyNavigation("Migrated Directory") %}
  <a href="/migrated/migration-report/" class="text-blue-500 hover:underline">View Migration Report</a>
{% else %}
  <p>Migration report not available. Run a migration to generate a report.</p>
{% endif %}
</div>

## How to Run Your Own Migration

To migrate your own content from legacy systems:

1. Edit your repository paths in `scripts/migration-config.js`
2. Run one of the following commands:

```bash
# Interactive CLI tool (recommended)
node scripts/migrate-cli.js

# Quick migration script
./scripts/migrate.sh
```

## Learn More

- [Migration Guide](/resources/legacy-migration/)
- [Migration Tools](/resources/migration-tools/)
- [Migrated Content Overview](/resources/migrated-content/)