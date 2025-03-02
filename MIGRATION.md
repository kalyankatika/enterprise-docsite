# Quick Migration Guide

This guide provides simple instructions for migrating legacy documentation to the new Enterprise Documentation System (EDS).

## Prerequisites

- Node.js 14+ installed
- Access to your legacy documentation repositories
- Basic familiarity with the command line

## Migration Options

### Option 1: Interactive CLI Tool (Recommended)

We've created an interactive CLI tool that walks you through the migration process:

```bash
# Make the script executable
chmod +x scripts/migrate-cli.js

# Run the migration tool
node scripts/migrate-cli.js
```

The CLI tool will:
1. Ask you which migration mode you want to use
2. Guide you through setting up your repositories
3. Run the migration process
4. Offer to build and serve the site

### Option 2: Configuration File

1. Edit `scripts/migration-config.js` to specify your source repositories:

```javascript
module.exports = {
  sources: [
    { 
      path: "/absolute/path/to/first-repo", 
      name: "product-docs" 
    },
    // Add more repos as needed
  ],
  // Other configuration options...
};
```

2. Run using the shell script:

```bash
# Make the script executable
chmod +x scripts/migrate.sh

# Run the migration
./scripts/migrate.sh
```

This will:
- Run the migration process
- Build the site
- Provide instructions for viewing the results

### Option 3: Git Repository Import

To directly import and migrate a Git repository:

```bash
# Run the import tool
node scripts/import-repo.js https://github.com/username/repo.git [repo-name]
```

### Option 4: Test Migration

To test the migration process with sample files:

```bash
# Run the test migration
node scripts/run-migration-test.js
```

## Review the Results

1. Check the migration report at `src/migrated/migration-report.md`
2. Browse the migrated content in your browser at http://localhost:5000/migrated/
3. Verify navigation and links are working correctly

## What Gets Migrated

- **Markdown (.md) files**: Copied and formatted with proper headings and EDS styles
- **Nunjucks (.njk) files**: Converted to Markdown with proper layout mappings
- **HTML (.html) files**: Converted to basic Markdown (may need manual review)
- **Other files**: Copied as-is (images, PDFs, etc.)

## Troubleshooting

If you encounter issues:

1. Check the migration report for specific errors
2. Ensure your configuration paths are correct
3. Verify you have read access to all source repositories
4. Make sure your 11ty installation is working correctly

## Post-Migration Tasks

After migration, you may need to:

1. Update internal links that reference old paths
2. Review and improve the converted Markdown formatting
3. Add additional front matter for better navigation
4. Add the migrated content to the main navigation structure

## Advanced Configuration

For advanced options, refer to the comments in:
- `scripts/quick-migrate.js`
- `scripts/migration-config.js`