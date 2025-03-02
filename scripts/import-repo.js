/**
 * Repository Import Tool
 * 
 * This script helps you quickly import a Git repository for migration
 * without needing to clone it manually.
 */

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const { migrate } = require('./quick-migrate');

// Get command line arguments
const repoUrl = process.argv[2];
const repoName = process.argv[3] || getRepoNameFromUrl(repoUrl);

if (!repoUrl) {
  console.error('Please provide a repository URL:');
  console.error('  node scripts/import-repo.js https://github.com/username/repo.git [repo-name]');
  process.exit(1);
}

/**
 * Extract repository name from URL
 */
function getRepoNameFromUrl(url) {
  const parts = url.split('/');
  let name = parts[parts.length - 1];
  
  // Remove .git extension if present
  if (name.endsWith('.git')) {
    name = name.substring(0, name.length - 4);
  }
  
  return name;
}

/**
 * Import and migrate the repository
 */
async function importAndMigrate() {
  console.log(`Importing repository: ${repoUrl}`);
  console.log(`Repository name: ${repoName}`);
  
  // Create temp directory for the repository
  const tempDir = path.join(__dirname, '..', 'temp');
  const repoDir = path.join(tempDir, repoName);
  
  try {
    // Create temp directory if it doesn't exist
    await fs.ensureDir(tempDir);
    
    // Check if repo directory already exists
    if (await fs.pathExists(repoDir)) {
      console.log('Repository directory already exists. Updating...');
      execSync(`cd "${repoDir}" && git pull`, { stdio: 'inherit' });
    } else {
      // Clone the repository
      console.log(`Cloning repository to ${repoDir}...`);
      execSync(`git clone "${repoUrl}" "${repoDir}"`, { stdio: 'inherit' });
    }
    
    // Create migration config
    const config = {
      sources: [
        {
          path: repoDir,
          name: repoName
        }
      ],
      destRoot: path.join(__dirname, '..', 'src', 'migrated'),
      layoutMap: {
        'legacy_component': 'layouts/component.njk',
        'legacy_doc': 'layouts/page.njk',
        'default': 'layouts/page.njk'
      },
      addTags: ['migrated', 'imported', repoName]
    };
    
    // Run migration
    console.log('\nStarting migration process...');
    await migrate(config);
    
    console.log(`\nRepository ${repoName} has been imported and migrated successfully!`);
    console.log(`Migrated content is available in: src/migrated/${repoName}`);
    
  } catch (error) {
    console.error('Error during import/migration:', error.message || error);
    process.exit(1);
  }
}

// Run the import and migration
importAndMigrate().catch(err => {
  console.error('Import failed:', err);
  process.exit(1);
});