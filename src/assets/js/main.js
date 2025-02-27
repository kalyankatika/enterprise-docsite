/**
 * Main JavaScript file for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeComponents();
  setupSearchFunctionality();
  setupThemeToggle();
});

function initializeComponents() {
  // Initialize tabs
  const tabGroups = document.querySelectorAll('.eds-tabs');
  tabGroups.forEach(group => {
    const tabButtons = group.querySelectorAll('.eds-tab');
    const tabPanels = document.querySelectorAll('.eds-tab-panel[data-tab-group="' + group.dataset.tabGroup + '"]');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.dataset.tabId;
        setActiveTab(tabButtons, tabPanels, tabId);
      });
    });
    
    // Set first tab as active by default if none is active
    if (!Array.from(tabButtons).some(button => button.classList.contains('active'))) {
      const firstTabId = tabButtons[0]?.dataset.tabId;
      if (firstTabId) {
        setActiveTab(tabButtons, tabPanels, firstTabId);
      }
    }
  });
  
  // Initialize mobile menu
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    const closeMenu = document.getElementById('close-mobile-menu');
    if (closeMenu) {
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    }
  }
  
  // Initialize copy code buttons
  const copyButtons = document.querySelectorAll('.copy-code-button');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const codeBlock = button.closest('.component-preview').querySelector('pre code');
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent)
          .then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
              button.textContent = 'Copy';
            }, 2000);
          })
          .catch(err => {
            console.error('Could not copy text: ', err);
          });
      }
    });
  });
}

function setActiveTab(buttons, panels, activeTabId) {
  buttons.forEach(button => {
    if (button.dataset.tabId === activeTabId) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  
  panels.forEach(panel => {
    if (panel.dataset.tabId === activeTabId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

function setupSearchFunctionality() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput && searchResults) {
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
    let debounceTimeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
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
      }, 300);
    });
  }
}

function performSearch(query, searchData) {
  const results = [];
  
  for (const key in searchData) {
    const item = searchData[key];
    const titleScore = scoreMatch(item.title.toLowerCase(), query);
    const contentScore = scoreMatch(item.content.toLowerCase(), query);
    
    const totalScore = titleScore * 2 + contentScore;
    
    if (totalScore > 0) {
      results.push({
        title: item.title,
        url: item.url,
        snippet: getResultSnippet(item.content, query),
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

function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      
      // Save preference to localStorage
      const isDarkMode = document.documentElement.classList.contains('dark');
      localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    });
    
    // Set initial theme based on localStorage or system preference
    const savedPreference = localStorage.getItem('darkMode');
    
    if (savedPreference === 'true') {
      document.documentElement.classList.add('dark');
    } else if (savedPreference === 'false') {
      document.documentElement.classList.remove('dark');
    } else {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  }
}