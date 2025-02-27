/**
 * Custom Eleventy filters
 */
const { DateTime } = require('luxon');
const cheerio = require('cheerio');

/**
 * Extract headings from content for table of contents
 * @param {Array} collection - The Eleventy collection to search in
 * @param {string} url - The page URL to get headings for
 * @returns {Array} - List of headings with id and text properties
 */
function getHeadings(collection, url) {
  if (!collection || !url) return [];
  
  const page = collection.find(item => item.url === url);
  if (!page || !page.templateContent) return [];
  
  const $ = cheerio.load(page.templateContent);
  const headings = [];
  
  $('h2, h3').each((index, element) => {
    const $heading = $(element);
    const id = $heading.attr('id');
    
    if (id) {
      headings.push({
        id,
        text: $heading.text().trim(),
        level: element.name === 'h2' ? 2 : 3
      });
    }
  });
  
  return headings;
}

/**
 * Format a date as ISO string (YYYY-MM-DD)
 */
function dateToISO(dateObj) {
  return DateTime.fromJSDate(dateObj).toISODate();
}

/**
 * Format a date as a year (YYYY)
 */
function dateToYear(dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat('yyyy');
}

/**
 * Check if a URL starts with a given path
 */
function isActiveLink(currentUrl, navUrl) {
  if (!currentUrl || !navUrl) return false;
  if (navUrl === '/' && currentUrl === '/') return true;
  if (navUrl === '/') return false;
  return currentUrl.startsWith(navUrl);
}

/**
 * Escape HTML characters
 */
function escape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Converts a string to a slug
 */
function slug(str) {
  if (!str) return '';
  return str.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

/**
 * Format a date in a readable format
 */
function readableDate(dateObj) {
  return DateTime.fromJSDate(dateObj).toFormat('LLLL d, yyyy');
}

/**
 * Get a slice of an array with given start and end
 */
function slice(array, start, end) {
  if (!Array.isArray(array)) return [];
  return array.slice(start, end);
}

/**
 * Group items by a property
 */
function groupBy(array, key) {
  if (!Array.isArray(array) || !key) return {};
  
  return array.reduce((result, item) => {
    const value = item[key];
    if (!result[value]) {
      result[value] = [];
    }
    result[value].push(item);
    return result;
  }, {});
}

module.exports = {
  getHeadings,
  dateToISO,
  dateToYear,
  isActiveLink,
  escape,
  slug,
  readableDate,
  slice,
  groupBy
};