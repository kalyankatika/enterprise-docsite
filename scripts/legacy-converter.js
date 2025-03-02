/**
 * Legacy Content Converter Script
 * 
 * This script creates sample legacy content and converts it to the modern format.
 * It demonstrates the capabilities of the njk-to-md utility.
 */

const path = require('path');
const { 
  createSampleLegacyContent, 
  processDirectory, 
  generateConversionReport 
} = require('../src/utils/njk-to-md');

// Configuration
const LEGACY_NJK_DIR = path.join(__dirname, '../src/legacy-docs/njk');
const CONVERTED_MD_DIR = path.join(__dirname, '../src/legacy-docs/converted');
const MIGRATION_EXAMPLES_DIR = path.join(__dirname, '../src/components/shared/migration-examples');
const REPORT_PATH = path.join(__dirname, '../src/legacy-docs/conversion-report.md');

// Create sample legacy content for demonstration
console.log('Creating sample legacy content...');
createSampleLegacyContent(LEGACY_NJK_DIR);

// Process directories with different options to demonstrate capabilities
async function runConversion() {
  console.log('\nConverting legacy content...');

  // Convert to markdown
  const mdResults = await processDirectory(
    LEGACY_NJK_DIR,
    CONVERTED_MD_DIR,
    {
      convertToMarkdown: true,
      layoutMap: {
        'legacy_component': 'layouts/component.njk',
        'legacy_doc': 'layouts/page.njk'
      }
    }
  );

  // Copy to migration examples (some as md, some preserved as njk)
  const examplesResults = await processDirectory(
    LEGACY_NJK_DIR,
    MIGRATION_EXAMPLES_DIR,
    {
      // This will determine conversion based on the file
      convertToMarkdown: file => file.includes('page'),
      preserveLayout: true,
      fileMap: {
        'legacy-component.njk': 'legacy-component-preserved.njk',
        'legacy-page.njk': 'legacy-page-converted.md'
      }
    }
  );

  // Combine results for reporting
  const combinedResults = {
    converted: [...mdResults.converted, ...examplesResults.converted],
    preserved: [...mdResults.preserved, ...examplesResults.preserved],
    errors: [...mdResults.errors, ...examplesResults.errors]
  };

  // Generate a report
  generateConversionReport(combinedResults, REPORT_PATH);
  
  console.log('\nConversion complete! See report at:', REPORT_PATH);
}

// Run the conversion
runConversion().catch(err => {
  console.error('Error running conversion:', err);
  process.exit(1);
});