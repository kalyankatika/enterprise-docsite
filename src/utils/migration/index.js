/**
 * Migration Utilities Index
 * 
 * This file exports all the migration utilities for use in the content migration scripts.
 */

const njkMigration = require('../njk-to-md');

// Import other migration utilities as they're created
let htmlMigration, xmlMigration, legacyParser, mdFormatter;

try {
  htmlMigration = require('./html-to-md');
} catch (error) {
  htmlMigration = null;
  console.warn('HTML migration utility not available yet');
}

try {
  xmlMigration = require('./xml-to-md');
} catch (error) {
  xmlMigration = null;
  console.warn('XML migration utility not available yet');
}

try {
  legacyParser = require('./legacy-parser');
} catch (error) {
  legacyParser = null;
  console.warn('Legacy parser utility not available yet');
}

try {
  mdFormatter = require('./md-formatter');
} catch (error) {
  mdFormatter = null;
  console.warn('Markdown formatter utility not available yet');
}

module.exports = {
  htmlMigration,
  njkMigration,
  xmlMigration,
  legacyParser,
  mdFormatter
};