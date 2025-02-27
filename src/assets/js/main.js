/**
 * Main JavaScript file for EDS Documentation
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  initializeComponents();
  
  // Setup theme toggle
  setupThemeToggle();
  
  // Setup search functionality
  setupSearchFunctionality();
  
  // Setup mobile menu toggle
  setupMobileMenu();
});

/**
 * Initialize interactive components on the page
 */
function initializeComponents() {
  // Handle tab components (for non-Alpine.js fallback)
  const tabContainers = document.querySelectorAll('.eds-tabs');
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.eds-tabs__button');
    const panels = container.querySelectorAll('.eds-tabs__panel');
    
    // Set initial active tab
    const activeTabId = container.getAttribute('data-active-tab') || buttons[0]?.id;
    setActiveTab(buttons, panels, activeTabId);
    
    // Add click event listeners
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        setActiveTab(buttons, panels, button.id);
      });
    });
  });
}

/**
 * Set the active tab in a tab component
 */
function setActiveTab(buttons, panels, activeTabId) {
  buttons.forEach(button => {
    const isActive = button.id === activeTabId;
    button.setAttribute('aria-selected', isActive);
    button.classList.toggle('eds-tabs__button--active', isActive);
  });
  
  panels.forEach(panel => {
    const isActive = panel.getAttribute('aria-labelledby') === activeTabId;
    panel.classList.toggle('hidden', !isActive);
  });
}

/**
 * Setup dark mode toggle functionality
 */
function setupThemeToggle() {
  const themeToggle = document.getElementById('dark-mode-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      document.documentElement.classList.toggle('dark', !isDarkMode);
      localStorage.setItem('darkMode', !isDarkMode);
    });
  }
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden', isExpanded);
    });
  }
}

/**
 * Setup search functionality
 */
function setupSearchFunctionality() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput && searchResults) {
    // Load search index
    fetch('/search-index.json')
      .then(response => response.json())
      .then(searchData => {
        // Setup debounced search
        const debouncedSearch = debounce(() => {
          const query = searchInput.value.trim();
          
          if (query.length < 2) {
            searchResults.innerHTML = '<p class="text-gray-500 dark:text-gray-400 text-sm">Enter at least 2 characters to search</p>';
            return;
          }
          
          const results = performSearch(query, searchData);
          
          if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-gray-500 dark:text-gray-400 text-sm">No results found</p>';
          } else {
            searchResults.innerHTML = results.map(result => `
              <a href="${result.url}" class="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <h4 class="text-sm font-medium text-gray-900 dark:text-white">${result.title}</h4>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${result.snippet}</p>
              </a>
            `).join('');
          }
        }, 300);
        
        searchInput.addEventListener('input', debouncedSearch);
      })
      .catch(error => {
        console.error('Error loading search index:', error);
        searchResults.innerHTML = '<p class="text-red-500 dark:text-red-400 text-sm">Error loading search index</p>';
      });
  }
}

/**
 * Perform search on the data
 */
function performSearch(query, searchData) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  for (const item of searchData) {
    // Search in title, content, and description
    const titleScore = scoreMatch(item.title, lowerQuery);
    const contentScore = scoreMatch(item.content, lowerQuery);
    const descriptionScore = scoreMatch(item.description, lowerQuery);
    
    const totalScore = titleScore * 3 + contentScore + descriptionScore * 2;
    
    if (totalScore > 0) {
      // Get a snippet from the content
      const snippet = getResultSnippet(item.content, lowerQuery) || item.description;
      
      results.push({
        title: highlightMatches(item.title, lowerQuery),
        url: item.url,
        snippet: highlightMatches(snippet, lowerQuery),
        score: totalScore
      });
    }
  }
  
  // Sort by score (highest first)
  results.sort((a, b) => b.score - a.score);
  
  // Return top 5 results
  return results.slice(0, 5);
}

/**
 * Score a match in text
 */
function scoreMatch(text, query) {
  if (!text) return 0;
  
  const lowerText = text.toLowerCase();
  
  // Exact match
  if (lowerText.includes(query)) {
    return 10;
  }
  
  // Word match
  const words = query.split(' ');
  let wordMatches = 0;
  
  for (const word of words) {
    if (word.length > 2 && lowerText.includes(word)) {
      wordMatches++;
    }
  }
  
  return wordMatches;
}

/**
 * Get a snippet from content containing the query
 */
function getResultSnippet(content, query) {
  if (!content) return '';
  
  const lowerContent = content.toLowerCase();
  const index = lowerContent.indexOf(query);
  
  if (index === -1) return '';
  
  // Get a snippet around the match
  const start = Math.max(0, index - 40);
  const end = Math.min(content.length, index + query.length + 40);
  let snippet = content.substring(start, end);
  
  // Add ellipsis if we're not at the start/end
  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';
  
  return snippet;
}

/**
 * Highlight matches in text
 */
function highlightMatches(text, query) {
  if (!text) return '';
  
  const escapedQuery = escapeRegExp(query);
  const regex = new RegExp(escapedQuery, 'gi');
  
  return text.replace(regex, match => `<mark class="bg-yellow-200 dark:bg-yellow-900">${match}</mark>`);
}

/**
 * Escape RegExp special characters
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Debounce function
 */
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