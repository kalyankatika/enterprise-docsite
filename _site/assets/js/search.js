/**
 * Search functionality for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeSearch();
});

function initializeSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchCount = document.getElementById('search-count');
  
  if (!searchInput || !searchResults) return;
  
  let searchIndex = [];
  let isLoading = false;

  // Fetch the search index
  fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
      searchIndex = data;
      
      // Check if there's a query parameter
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('q');
      
      if (query) {
        searchInput.value = query;
        performSearch(query, searchResults);
      }
    })
    .catch(error => {
      console.error('Error loading search index:', error);
    });

  // Set up search input event
  const debouncedSearch = debounce(function(event) {
    const query = event.target.value.trim();
    
    if (query.length < 2) {
      searchResults.innerHTML = '<p class="py-4 text-center text-[var(--color-text-muted)]">Please enter at least 2 characters to search</p>';
      if (searchCount) searchCount.textContent = '0';
      return;
    }
    
    performSearch(query, searchResults);
  }, 300);

  searchInput.addEventListener('input', debouncedSearch);

  /**
   * Perform the search against the index
   */
  function performSearch(query, resultsContainer) {
    if (isLoading || !searchIndex.length) {
      resultsContainer.innerHTML = '<p class="py-4 text-center text-[var(--color-text-muted)]">Loading...</p>';
      return;
    }
    
    isLoading = true;
    resultsContainer.innerHTML = '<p class="py-4 text-center text-[var(--color-text-muted)]">Searching...</p>';
    
    // Allow the UI to update before searching
    setTimeout(() => {
      const results = searchIndex
        .filter(item => {
          const titleScore = scoreMatch(item.title, query);
          const contentScore = scoreMatch(item.content, query);
          const urlScore = scoreMatch(item.url, query);
          
          item.score = titleScore * 3 + contentScore + urlScore * 0.5;
          return item.score > 0;
        })
        .sort((a, b) => b.score - a.score);
      
      if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="py-4 text-center text-[var(--color-text-muted)]">No results found for "' + escapeRegExp(query) + '"</p>';
        if (searchCount) searchCount.textContent = '0';
      } else {
        if (searchCount) searchCount.textContent = results.length.toString();
        
        const resultItems = results.map(item => {
          const snippet = getResultSnippet(item.content, query);
          
          return `
            <li class="mb-6 pb-6 border-b border-[var(--color-border)] last:border-0">
              <h3 class="text-xl font-medium mb-2">
                <a href="${item.url}" class="text-[var(--color-primary)] hover:underline">
                  ${highlightMatches(item.title, query)}
                </a>
              </h3>
              <p class="text-sm text-[var(--color-text-muted)] mb-1">${item.url}</p>
              <p class="text-[var(--color-text)]">${snippet}</p>
            </li>
          `;
        }).join('');
        
        resultsContainer.innerHTML = `<ul class="divide-y divide-[var(--color-border)]">${resultItems}</ul>`;
      }
      
      isLoading = false;
    }, 10);
  }

  /**
   * Score a text match with the query
   */
  function scoreMatch(text, query) {
    if (!text) return 0;
    
    text = text.toLowerCase();
    query = query.toLowerCase();
    
    // Exact match is highest score
    if (text.includes(query)) {
      return 10;
    }
    
    // Check if all words in query are in the text
    const queryWords = query.split(/\s+/);
    const allWordsMatch = queryWords.every(word => text.includes(word));
    
    if (allWordsMatch) {
      return 5;
    }
    
    // Check individual words
    let score = 0;
    queryWords.forEach(word => {
      if (word.length > 1 && text.includes(word)) {
        score += 1;
      }
    });
    
    return score;
  }

  /**
   * Get a relevant snippet from the content that includes the query
   */
  function getResultSnippet(content, query) {
    if (!content) return '';
    
    // Remove HTML tags for snippet
    content = content.replace(/<[^>]*>/g, '');
    
    const queryLower = query.toLowerCase();
    const contentLower = content.toLowerCase();
    const snippetLength = 160;
    
    let startIndex = contentLower.indexOf(queryLower);
    
    // If direct match not found, look for individual words
    if (startIndex === -1) {
      const words = query.toLowerCase().split(/\s+/);
      for (const word of words) {
        if (word.length > 1) {
          startIndex = contentLower.indexOf(word);
          if (startIndex !== -1) break;
        }
      }
    }
    
    // If still no match, just use the beginning
    if (startIndex === -1) startIndex = 0;
    
    // Adjust start index to include some context before the match
    startIndex = Math.max(0, startIndex - 40);
    
    // Find a word boundary to start from if possible
    const precedingSpace = content.lastIndexOf(' ', startIndex);
    if (precedingSpace !== -1 && startIndex - precedingSpace < 20) {
      startIndex = precedingSpace + 1;
    }
    
    let snippet = content.substring(startIndex, startIndex + snippetLength);
    
    // Add ellipsis if we're not starting from the beginning
    if (startIndex > 0) {
      snippet = '...' + snippet;
    }
    
    // Add ellipsis if the snippet is cut off
    if (startIndex + snippetLength < content.length) {
      snippet = snippet + '...';
    }
    
    return highlightMatches(snippet, query);
  }

  /**
   * Highlight matched text in results
   */
  function highlightMatches(text, query) {
    if (!text) return '';
    
    const words = query.split(/\s+/)
      .filter(word => word.length > 1)
      .map(word => escapeRegExp(word))
      .sort((a, b) => b.length - a.length); // Longer words first
    
    if (words.length === 0) return text;
    
    const regex = new RegExp(`(${words.join('|')})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">$1</mark>');
  }

  /**
   * Escape special regex characters
   */
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Debounce function to limit execution frequency
   */
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
}