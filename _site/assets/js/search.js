/**
 * Search functionality for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the search index
  let searchIndex = [];
  
  // Fetch the search index JSON file
  const fetchSearchIndex = async () => {
    try {
      const response = await fetch('/search.json');
      if (!response.ok) {
        throw new Error('Failed to fetch search index');
      }
      searchIndex = await response.json();
    } catch (error) {
      console.error('Error fetching search index:', error);
    }
  };
  
  fetchSearchIndex();

  // Get DOM elements
  const searchForms = document.querySelectorAll('.search-form');
  
  // Process search query and display results
  const processSearch = (query, resultsContainer, noResultsContainer) => {
    if (!query || query.length < 2) {
      // Clear results if query is too short
      while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
      }
      
      // Hide the no results message
      if (noResultsContainer) {
        noResultsContainer.style.display = 'none';
      }
      
      return;
    }
    
    // Clear previous results
    while (resultsContainer.firstChild) {
      resultsContainer.removeChild(resultsContainer.firstChild);
    }
    
    // Filter the search index based on the query
    const queryLower = query.toLowerCase();
    const results = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(queryLower);
      const contentMatch = item.content.toLowerCase().includes(queryLower);
      const tagsMatch = item.tags && item.tags.some(tag => tag.toLowerCase().includes(queryLower));
      return titleMatch || contentMatch || tagsMatch;
    });
    
    // Display results or no results message
    if (results.length === 0) {
      if (noResultsContainer) {
        noResultsContainer.style.display = 'block';
        noResultsContainer.innerHTML = `<p>No results found for "${query}"</p>`;
      }
    } else {
      // Create results list
      const list = document.createElement('ul');
      list.className = 'search-results-list';
      
      // Limit results to 10 items for dropdown
      const limitedResults = results.slice(0, 10);
      
      // Add each result to the list
      limitedResults.forEach(result => {
        const item = document.createElement('li');
        item.className = 'search-result-item';
        
        const link = document.createElement('a');
        link.className = 'search-result-link';
        link.href = result.url;
        
        const title = document.createElement('h3');
        title.className = 'search-result-title';
        title.textContent = result.title;
        
        link.appendChild(title);
        
        // Add excerpt if available
        if (result.excerpt) {
          const excerpt = document.createElement('p');
          excerpt.className = 'search-result-excerpt';
          excerpt.textContent = result.excerpt;
          link.appendChild(excerpt);
        }
        
        // Add metadata
        const meta = document.createElement('div');
        meta.className = 'search-result-meta';
        
        if (result.breadcrumb) {
          const breadcrumb = document.createElement('span');
          breadcrumb.className = 'search-result-breadcrumb';
          breadcrumb.textContent = result.breadcrumb;
          meta.appendChild(breadcrumb);
        }
        
        if (result.tags && result.tags.length > 0) {
          const tags = document.createElement('span');
          tags.className = 'search-result-tags';
          tags.textContent = result.tags.join(', ');
          meta.appendChild(tags);
        }
        
        link.appendChild(meta);
        item.appendChild(link);
        list.appendChild(item);
      });
      
      resultsContainer.appendChild(list);
      
      // Add view all link if on a search dropdown
      if (window.location.pathname !== '/search/') {
        const footer = document.createElement('div');
        footer.className = 'search-footer';
        
        const viewAllLink = document.createElement('a');
        viewAllLink.className = 'search-view-all';
        viewAllLink.href = `/search/?q=${encodeURIComponent(query)}`;
        viewAllLink.textContent = 'View all results';
        
        footer.appendChild(viewAllLink);
        resultsContainer.appendChild(footer);
      }
    }
  };
  
  // Handle each search form
  searchForms.forEach(form => {
    const input = form.querySelector('.search-input');
    const button = form.querySelector('.search-button');
    const results = form.querySelector('.search-results');
    const noResults = form.querySelector('.search-no-results');
    
    // Handle input events
    if (input) {
      let debounceTimeout;
      
      input.addEventListener('input', function() {
        // Clear any existing timeout
        clearTimeout(debounceTimeout);
        
        // Set a new timeout to debounce the search
        debounceTimeout = setTimeout(() => {
          processSearch(input.value, results, noResults);
        }, 300);
      });
      
      // Handle enter key
      input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && input.value.length >= 2) {
          event.preventDefault();
          
          // If on search page, perform search
          if (window.location.pathname === '/search/') {
            processSearch(input.value, results, noResults);
          } else {
            // Otherwise, redirect to search page
            window.location.href = `/search/?q=${encodeURIComponent(input.value)}`;
          }
        }
      });
    }
    
    // Handle button click
    if (button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (input && input.value.length >= 2) {
          // If on search page, perform search
          if (window.location.pathname === '/search/') {
            processSearch(input.value, results, noResults);
          } else {
            // Otherwise, redirect to search page
            window.location.href = `/search/?q=${encodeURIComponent(input.value)}`;
          }
        }
      });
    }
  });
  
  // Handle search from URL query parameter on search page
  if (window.location.pathname === '/search/') {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    if (query) {
      const searchInput = document.querySelector('.search-input');
      const searchResults = document.querySelector('.search-results');
      const noResults = document.querySelector('.search-no-results');
      
      if (searchInput) {
        searchInput.value = query;
      }
      
      if (searchResults) {
        // Wait for search index to be loaded
        setTimeout(() => {
          processSearch(query, searchResults, noResults);
        }, 500);
      }
    }
  }
});
