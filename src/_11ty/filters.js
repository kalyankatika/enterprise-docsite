/**
 * Custom Eleventy filters
 */
const { DateTime } = require('luxon');

/**
 * Extract headings from content for table of contents
 * @param {Array} collection - The Eleventy collection to search in
 * @param {string} url - The page URL to get headings for
 * @returns {Array} - List of headings with id and text properties
 */
function getHeadings(collection, url) {
  const headings = [];
  const page = collection.find(item => item.url === url);
  
  if (page && page.templateContent) {
    const content = page.templateContent;
    const headingRegex = /<h([2-3])\s+id="([^"]+)"[^>]*>([^<]+)<\/h\1>/g;
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        level: match[1],
        id: match[2],
        text: match[3]
      });
    }
  }
  
  return headings;
}

/**
 * Format a date as ISO string (YYYY-MM-DD)
 */
function dateToISO(dateObj) {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISODate();
}

/**
 * Format a date as a year (YYYY)
 */
function dateToYear(dateObj) {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
}

/**
 * Check if a URL starts with a given path
 */
function isActiveLink(currentUrl, navUrl) {
  return currentUrl.startsWith(navUrl);
}

/**
 * Escape HTML characters
 */
function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = {
  getHeadings,
  dateToISO,
  dateToYear,
  isActiveLink,
  escape
};