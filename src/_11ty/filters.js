/**
 * Custom Eleventy filters
 */
const cheerio = require('cheerio');

/**
 * Extract headings from content for table of contents
 * @param {Array} collection - The Eleventy collection to search in
 * @param {string} url - The page URL to get headings for
 * @returns {Array} - List of headings with id and text properties
 */
function getHeadings(collection, url) {
  // Find the page content
  const page = collection.find(item => item.url === url);
  if (!page || !page.templateContent) return [];
  
  // Load content into cheerio for DOM manipulation
  const $ = cheerio.load(page.templateContent);
  const headings = [];
  
  // Find all h2 and h3 headings that have an id
  $('h2[id], h3[id]').each((i, el) => {
    const $el = $(el);
    const id = $el.attr('id');
    const text = $el.text();
    
    if (id && text) {
      headings.push({
        id,
        text,
        level: el.name === 'h2' ? 2 : 3
      });
    }
  });
  
  return headings;
}

/**
 * Format a date as ISO string (YYYY-MM-DD)
 */
function dateToISO(date) {
  if (!date) return '';
  return date.toISOString().split('T')[0];
}

/**
 * Check if a URL starts with a given path
 */
function isActiveLink(currentUrl, navUrl) {
  if (!currentUrl || !navUrl) return false;
  
  // Special case for home page
  if (navUrl === '/' && currentUrl === '/') return true;
  if (navUrl === '/' && currentUrl !== '/') return false;
  
  // Check if currentUrl starts with navUrl and is not the same string
  return currentUrl.startsWith(navUrl);
}

/**
 * Escape HTML characters
 */
function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = {
  getHeadings,
  dateToISO,
  isActiveLink,
  escape
};