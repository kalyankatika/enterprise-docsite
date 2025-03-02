/**
 * Migration Configuration
 * 
 * This file defines the configuration for migrating legacy documentation.
 * Edit this file to specify your source repositories and destination paths.
 */

module.exports = {
  // Source repositories to migrate
  sources: [
    { 
      path: "/path/to/first-repo", 
      name: "product-docs" 
    },
    { 
      path: "/path/to/second-repo", 
      name: "api-docs" 
    },
    { 
      path: "/path/to/third-repo", 
      name: "user-guides" 
    }
  ],
  
  // Destination directory (relative to EDS root)
  destRoot: "./src/migrated",
  
  // Layout mappings - maps legacy layouts to new layouts
  layoutMap: {
    // Common legacy layouts
    "legacy_component": "layouts/component.njk",
    "legacy_doc": "layouts/page.njk",
    "legacy_api": "layouts/api.njk",
    "legacy_guide": "layouts/page.njk",
    
    // Default fallback layout
    "default": "layouts/page.njk"
  },
  
  // Tags to add to all migrated content
  addTags: ["migrated", "legacy-content"],
  
  // Custom front matter to add to all migrated content
  additionalFrontMatter: {
    migrated: true,
    migration_date: new Date().toISOString().split('T')[0] // Today's date
  }
};