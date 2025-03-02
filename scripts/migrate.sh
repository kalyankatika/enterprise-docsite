#!/bin/bash
# Quick Migration Script
# This script runs the migration process and rebuilds the site

# Install required packages
npm install glob fs-extra --save-dev

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run the migration script
echo "Starting migration process..."
node scripts/quick-migrate.js scripts/migration-config.js

# Check if migration was successful
if [ $? -eq 0 ]; then
  echo "Migration completed successfully!"
  
  # Rebuild the site
  echo "Building the site..."
  npx @11ty/eleventy
  
  # Check if build was successful
  if [ $? -eq 0 ]; then
    echo "Site built successfully!"
    echo "To view the site, run: npx @11ty/eleventy --serve"
    echo "Then open http://localhost:8080 in your browser"
  else
    echo "Site build failed. Check the errors above."
    exit 1
  fi
else
  echo "Migration failed. Check the errors above."
  exit 1
fi