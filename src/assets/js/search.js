/**
 * Search functionality for EDS Documentation
 */
document.addEventListener('DOMContentLoaded', () => {
  const searchInputs = document.querySelectorAll('.search-input');
  let searchIndex = null;
  let searchData = null;

  // Initialize search functionality if search inputs exist
  if (searchInputs.length > 0) {
    // Fetch the search index
    fetch('/search-index.json')
      .then(response => response.json())
      .then(data => {
        searchData = data;
        
        // Initialize lunr.js search index
        searchIndex = lunr(function() {
          this.ref('id');
          this.field('title', { boost: 10 });
          this.field('content');
          this.field('tags', { boost: 5 });
          this.field('category', { boost: 5 });
          
          // Add documents to the index
          data.forEach(doc => {
            this.add(doc);
          });
        });
        
        // Enable search inputs once the index is loaded
        searchInputs.forEach(input => {
          input.disabled = false;
          input.placeholder = 'Search documentation...';
        });
      })
      .catch(error => {
        console.error('Error loading search index:', error);
        searchInputs.forEach(input => {
          input.placeholder = 'Search unavailable';
        });
      });
    
    // Create search results container if it doesn't exist
    if (!document.querySelector('.search-results')) {
      const searchResultsContainer = document.createElement('div');
      searchResultsContainer.className = 'search-results absolute z-10 mt-1 w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg shadow-lg overflow-hidden hidden';
      
      // Append it after each search input
      searchInputs.forEach(input => {
        const container = input.closest('.search-container');
        if (container) {
          const resultsContainer = searchResultsContainer.cloneNode(true);
          container.appendChild(resultsContainer);
          
          // Add event listeners
          input.addEventListener('input', debounce(e => performSearch(e.target, resultsContainer), 300));
          input.addEventListener('focus', () => {
            if (input.value.length > 0) {
              resultsContainer.classList.remove('hidden');
            }
          });
          
          // Close search when clicking outside
          document.addEventListener('click', e => {
            if (!container.contains(e.target)) {
              resultsContainer.classList.add('hidden');
            }
          });
        }
      });
    }
  }
  
  // Perform the search
  function performSearch(input, resultsContainer) {
    const query = input.value.trim();
    
    if (!searchIndex || !searchData || query.length < 2) {
      resultsContainer.classList.add('hidden');
      return;
    }
    
    try {
      // Search the index
      const results = searchIndex.search(query);
      
      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div class="py-4 px-6 text-[var(--color-text-muted)]">
            No results found for "${query}"
          </div>
        `;
      } else {
        // Format and display results
        const formattedResults = results.slice(0, 10).map(result => {
          const item = searchData.find(doc => doc.id === result.ref);
          return `
            <a href="${item.url}" class="block py-3 px-6 hover:bg-[var(--color-bg-hover)]">
              <div class="font-medium text-[var(--color-primary)]">${item.title}</div>
              <div class="text-sm text-[var(--color-text-muted)] mt-1">${item.excerpt || ''}</div>
            </a>
          `;
        }).join('');
        
        resultsContainer.innerHTML = formattedResults;
      }
      
      resultsContainer.classList.remove('hidden');
    } catch (e) {
      console.error('Search error:', e);
      resultsContainer.innerHTML = `
        <div class="py-4 px-6 text-[var(--color-text-muted)]">
          An error occurred while searching
        </div>
      `;
      resultsContainer.classList.remove('hidden');
    }
  }
  
  // Debounce function to limit how often the search runs
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
});