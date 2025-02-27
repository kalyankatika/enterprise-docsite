/**
 * Search functionality for EDS Documentation
 */
document.addEventListener('DOMContentLoaded', function() {
  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  // Toggle search panel visibility
  searchToggle.addEventListener('click', function() {
    searchPanel.classList.toggle('hidden');
    if (!searchPanel.classList.contains('hidden')) {
      searchInput.focus();
    }
  });
  
  // Close search panel when clicking outside
  document.addEventListener('click', function(event) {
    if (!searchPanel.classList.contains('hidden') && 
        !searchPanel.contains(event.target) && 
        !searchToggle.contains(event.target)) {
      searchPanel.classList.add('hidden');
    }
  });
  
  // Search functionality
  let searchIndex;
  let searchData;
  
  // Fetch the search index
  fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
      searchData = data;
      // Initialize search index (simplified for now)
      searchIndex = Object.keys(data).map(key => ({
        id: key,
        title: data[key].title,
        content: data[key].content,
        url: data[key].url
      }));
    })
    .catch(error => {
      console.error('Error fetching search index:', error);
    });
  
  // Search function
  function performSearch(input, resultsContainer) {
    if (!searchIndex || !input.trim()) {
      resultsContainer.innerHTML = '';
      return;
    }
    
    const query = input.trim().toLowerCase();
    const results = searchIndex.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results
    
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p class="p-2 text-[var(--color-text-muted)]">No results found.</p>';
      return;
    }
    
    resultsContainer.innerHTML = results.map(result => `
      <a href="${result.url}" class="block p-2 hover:bg-[var(--color-bg-alt)] rounded">
        <div class="font-medium text-[var(--color-text)]">${result.title}</div>
        <div class="text-sm text-[var(--color-text-muted)]">${getResultSnippet(result.content, query)}</div>
      </a>
    `).join('');
  }
  
  // Get a snippet of content around the search term
  function getResultSnippet(content, query) {
    const maxLength = 100;
    const position = content.toLowerCase().indexOf(query);
    
    if (position === -1) return content.substring(0, maxLength) + '...';
    
    const start = Math.max(0, position - 40);
    const end = Math.min(content.length, position + 60);
    
    let snippet = content.substring(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    
    return snippet;
  }
  
  // Debounce function to limit search frequency
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  // Search input event listener with debounce
  const debouncedSearch = debounce((value) => {
    performSearch(value, searchResults);
  }, 300);
  
  searchInput.addEventListener('input', function() {
    debouncedSearch(this.value);
  });
});