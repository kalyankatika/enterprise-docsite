/**
 * Search functionality for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeSearch();
});

function initializeSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput && searchResults) {
    // Toggle search results visibility
    searchInput.addEventListener('focus', () => {
      searchResults.classList.remove('hidden');
    });
    
    // Close search when clicking outside
    document.addEventListener('click', (event) => {
      if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.classList.add('hidden');
      }
    });
    
    // Search functionality
    let searchData = null;
    
    // Load search data
    fetch('/search-index.json')
      .then(response => response.json())
      .then(data => {
        searchData = data;
      })
      .catch(error => {
        console.error('Error loading search data:', error);
      });
    
    // Perform search when typing
    searchInput.addEventListener('input', debounce(function() {
      const query = searchInput.value.trim().toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '<div class="p-4 text-[var(--color-text-muted)]">Please enter at least 2 characters to search</div>';
        return;
      }
      
      if (!searchData) {
        searchResults.innerHTML = '<div class="p-4 text-[var(--color-text-muted)]">Search data is loading...</div>';
        return;
      }
      
      const results = performSearch(query, searchData);
      
      if (results.length === 0) {
        searchResults.innerHTML = '<div class="p-4 text-[var(--color-text-muted)]">No results found</div>';
      } else {
        const resultsHTML = results.map(result => `
          <a href="${result.url}" class="search-result">
            <div class="search-result-title">${highlightMatches(result.title, query)}</div>
            <div class="search-result-path">${result.url}</div>
            <div class="search-result-snippet">${result.snippet}</div>
          </a>
        `).join('');
        
        searchResults.innerHTML = resultsHTML;
      }
    }, 300));
  }
  
  function performSearch(input, resultsContainer) {
    const results = [];
    
    for (const key in searchData) {
      const item = searchData[key];
      const titleScore = scoreMatch(item.title.toLowerCase(), input);
      const contentScore = scoreMatch(item.content.toLowerCase(), input);
      
      const totalScore = titleScore * 2 + contentScore;
      
      if (totalScore > 0) {
        results.push({
          title: item.title,
          url: item.url,
          snippet: getResultSnippet(item.content, input),
          score: totalScore
        });
      }
    }
    
    // Sort by score (highest first)
    results.sort((a, b) => b.score - a.score);
    
    // Return top results
    return results.slice(0, 8);
  }
  
  function scoreMatch(text, query) {
    // Direct match
    if (text.includes(query)) {
      return 10;
    }
    
    // Partial word matches
    const words = text.split(/\s+/);
    for (const word of words) {
      if (word.startsWith(query)) {
        return 5;
      }
      if (word.includes(query)) {
        return 3;
      }
    }
    
    return 0;
  }
  
  function getResultSnippet(content, query) {
    const maxLength = 150;
    const lowerContent = content.toLowerCase();
    const index = lowerContent.indexOf(query);
    
    if (index === -1) {
      // If query not found exactly, return beginning of content
      return content.substring(0, maxLength) + '...';
    }
    
    // Calculate snippet start and end positions
    let start = Math.max(0, index - 60);
    let end = Math.min(content.length, index + query.length + 60);
    
    // Adjust to not cut words
    while (start > 0 && content[start] !== ' ') {
      start--;
    }
    
    while (end < content.length && content[end] !== ' ') {
      end++;
    }
    
    // Create snippet
    let snippet = content.substring(start, end);
    
    // Add ellipsis if needed
    if (start > 0) {
      snippet = '...' + snippet;
    }
    
    if (end < content.length) {
      snippet = snippet + '...';
    }
    
    return highlightMatches(snippet, query);
  }
  
  function highlightMatches(text, query) {
    const regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
}