/**
 * Search functionality for EDS Documentation
 */

function initializeSearch() {
  const searchForm = document.querySelector('.eds-search-form');
  const searchInput = document.querySelector('.eds-search-input');
  const searchResults = document.querySelector('.eds-search-results');
  const searchToggle = document.querySelector('.eds-search-toggle');
  
  if (!searchForm || !searchInput || !searchResults) return;
  
  // Toggle search form visibility
  if (searchToggle) {
    searchToggle.addEventListener('click', () => {
      const isExpanded = searchToggle.getAttribute('aria-expanded') === 'true';
      searchToggle.setAttribute('aria-expanded', !isExpanded);
      
      if (isExpanded) {
        searchForm.classList.remove('eds-search-form--open');
      } else {
        searchForm.classList.add('eds-search-form--open');
        searchInput.focus();
      }
    });
    
    // Close search form on click outside
    document.addEventListener('click', event => {
      if (!searchForm.contains(event.target) && !searchToggle.contains(event.target)) {
        searchForm.classList.remove('eds-search-form--open');
        searchToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Get search data from the global window object or fetch it
  let searchData = window.edsSearchData || [];
  
  // If search data is not available in the global object, fetch it
  if (!searchData.length) {
    fetch('/search-data.json')
      .then(response => response.json())
      .then(data => {
        searchData = data;
        window.edsSearchData = data;
      })
      .catch(error => {
        console.error('Error loading search data:', error);
      });
  }
  
  // Handle search input
  searchInput.addEventListener('input', debounce(() => {
    const query = searchInput.value.trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    
    performSearch(query, searchResults);
  }, 300));
  
  // Handle search form submission
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = searchInput.value.trim();
    
    if (query.length < 2) return;
    
    performSearch(query, searchResults);
  });
  
  // Perform search on the data
  function performSearch(query, resultsContainer) {
    if (!searchData.length) {
      resultsContainer.innerHTML = '<p>Search data is not available.</p>';
      return;
    }
    
    // Filter and score results
    const results = searchData
      .map(item => {
        const titleScore = scoreMatch(item.title, query) * 3;
        const contentScore = scoreMatch(item.content, query);
        const tagsScore = item.tags ? scoreMatch(item.tags.join(' '), query) * 2 : 0;
        
        return {
          ...item,
          score: titleScore + contentScore + tagsScore
        };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p class="eds-search-no-results">No results found. Try different keywords.</p>';
      return;
    }
    
    // Render results
    const resultsHtml = results.map(item => {
      const snippet = getResultSnippet(item.content, query);
      
      return `
        <a href="${item.url}" class="eds-search-result">
          <h3 class="eds-search-result__title">${highlightMatches(item.title, query)}</h3>
          <p class="eds-search-result__snippet">${snippet}</p>
          ${item.tags && item.tags.length > 0 ? 
            `<div class="eds-search-result__tags">
              ${item.tags.map(tag => `<span class="eds-search-result__tag">${tag}</span>`).join('')}
            </div>` : 
            ''}
        </a>
      `;
    }).join('');
    
    resultsContainer.innerHTML = resultsHtml;
  }
  
  // Score a match in text
  function scoreMatch(text, query) {
    if (!text) return 0;
    
    const normalizedText = text.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    
    // Exact match
    if (normalizedText.includes(normalizedQuery)) {
      return 2;
    }
    
    // Word match
    const words = normalizedQuery.split(/\s+/);
    let score = 0;
    
    words.forEach(word => {
      if (word.length < 2) return;
      if (normalizedText.includes(word)) {
        score += 1;
      }
    });
    
    return score;
  }
  
  // Get a snippet from content containing the query
  function getResultSnippet(content, query) {
    if (!content) return '';
    
    const normalizedContent = content.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    const contentLength = content.length;
    
    const index = normalizedContent.indexOf(normalizedQuery);
    if (index === -1) {
      // If exact query not found, try to find any of the words
      const words = normalizedQuery.split(/\s+/);
      for (const word of words) {
        if (word.length < 3) continue;
        const wordIndex = normalizedContent.indexOf(word);
        if (wordIndex !== -1) {
          // Found a word, extract snippet around it
          const start = Math.max(0, wordIndex - 50);
          const end = Math.min(contentLength, wordIndex + word.length + 50);
          return highlightMatches(
            (start > 0 ? '...' : '') + 
            content.substring(start, end) + 
            (end < contentLength ? '...' : ''), 
            query
          );
        }
      }
      
      // If still nothing found, return the beginning of the content
      return content.substring(0, 100) + (contentLength > 100 ? '...' : '');
    }
    
    // Extract snippet around the query
    const start = Math.max(0, index - 50);
    const end = Math.min(contentLength, index + normalizedQuery.length + 50);
    
    return highlightMatches(
      (start > 0 ? '...' : '') + 
      content.substring(start, end) + 
      (end < contentLength ? '...' : ''), 
      query
    );
  }
  
  // Highlight matches in text
  function highlightMatches(text, query) {
    if (!text || !query) return text;
    
    const normalizedQuery = query.toLowerCase();
    const words = normalizedQuery
      .split(/\s+/)
      .filter(word => word.length > 1)
      .map(escapeRegExp);
    
    if (words.length === 0) return text;
    
    const regex = new RegExp(`(${words.join('|')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  // Escape RegExp special characters
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // Debounce function
  function debounce(func, wait) {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSearch();
});