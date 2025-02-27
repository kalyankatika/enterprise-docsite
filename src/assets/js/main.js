/**
 * Main JavaScript file for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize components on page load
  initializeComponents();
  
  // Setup search functionality
  setupSearchFunctionality();
  
  // Setup theme toggle
  setupThemeToggle();
});

function initializeComponents() {
  // Handle tabs component
  const tabsElements = document.querySelectorAll('[data-tabs]');
  
  tabsElements.forEach(tabs => {
    const buttons = tabs.querySelectorAll('[data-tab-button]');
    const panels = tabs.querySelectorAll('[data-tab-panel]');
    
    // Set initial active tab
    const initialActiveTabId = tabs.getAttribute('data-active-tab') || buttons[0]?.getAttribute('data-tab-button');
    setActiveTab(buttons, panels, initialActiveTabId);
    
    // Add click event listeners to tab buttons
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab-button');
        setActiveTab(buttons, panels, tabId);
      });
    });
  });
}

function setActiveTab(buttons, panels, activeTabId) {
  // Deactivate all buttons and panels
  buttons.forEach(button => {
    const tabId = button.getAttribute('data-tab-button');
    if (tabId === activeTabId) {
      button.setAttribute('aria-selected', 'true');
      button.classList.add('border-[var(--color-primary)]', 'text-[var(--color-primary)]');
      button.classList.remove('border-transparent', 'text-[var(--color-text-muted)]');
    } else {
      button.setAttribute('aria-selected', 'false');
      button.classList.remove('border-[var(--color-primary)]', 'text-[var(--color-primary)]');
      button.classList.add('border-transparent', 'text-[var(--color-text-muted)]');
    }
  });
  
  // Show active panel and hide others
  panels.forEach(panel => {
    const panelId = panel.getAttribute('data-tab-panel');
    if (panelId === activeTabId) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}

function setupSearchFunctionality() {
  const searchInput = document.querySelector('[data-search-input]');
  const searchResults = document.querySelector('[data-search-results]');
  
  if (!searchInput || !searchResults) return;
  
  let searchData = [];
  
  // Fetch search index
  fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
      searchData = data;
      
      // Add event listener for search input
      searchInput.addEventListener('input', event => {
        const query = event.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
          searchResults.innerHTML = '';
          return;
        }
        
        performSearch(query, searchData);
      });
    })
    .catch(error => {
      console.error('Error loading search index:', error);
    });
}

function performSearch(query, searchData) {
  const searchResults = document.querySelector('[data-search-results]');
  
  if (!searchResults) return;
  
  // Filter search data by query
  const results = searchData
    .filter(item => {
      const titleScore = scoreMatch(item.title, query);
      const contentScore = scoreMatch(item.content, query);
      item.score = titleScore * 2 + contentScore;
      return item.score > 0;
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
  
  if (results.length === 0) {
    searchResults.innerHTML = `<p class="text-center py-4 text-[var(--color-text-muted)]">No results found for "${query}"</p>`;
    return;
  }
  
  searchResults.innerHTML = results
    .map(item => {
      const snippet = getResultSnippet(item.content, query);
      
      return `
        <a href="${item.url}" class="block p-4 hover:bg-[var(--color-bg-alt)]">
          <h3 class="text-lg font-medium">${highlightMatches(item.title, query)}</h3>
          ${snippet ? `<p class="mt-1 text-sm text-[var(--color-text-muted)]">${snippet}</p>` : ''}
        </a>
      `;
    })
    .join('<div class="border-b border-[var(--color-border)]"></div>');
}

function scoreMatch(text, query) {
  if (!text) return 0;
  
  text = text.toLowerCase();
  
  // Exact match gives highest score
  if (text.includes(query)) {
    return 10;
  }
  
  // Check for partial matches
  const words = query.split(' ');
  let score = 0;
  
  for (const word of words) {
    if (word.length > 1 && text.includes(word)) {
      score += 5;
    }
  }
  
  return score;
}

function getResultSnippet(content, query) {
  if (!content) return '';
  
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  // Find the position of the query in the content
  const position = lowerContent.indexOf(lowerQuery);
  
  if (position === -1) {
    // Try to find any word from the query
    const words = query.split(' ');
    for (const word of words) {
      if (word.length > 1) {
        const wordPosition = lowerContent.indexOf(word.toLowerCase());
        if (wordPosition !== -1) {
          // Extract a snippet around the found word
          const start = Math.max(0, wordPosition - 40);
          const end = Math.min(content.length, wordPosition + word.length + 40);
          return '...' + highlightMatches(content.substring(start, end), query) + '...';
        }
      }
    }
    
    // If no match is found, return the beginning of the content
    return content.substring(0, 100) + '...';
  }
  
  // Extract a snippet around the query
  const start = Math.max(0, position - 40);
  const end = Math.min(content.length, position + query.length + 40);
  return '...' + highlightMatches(content.substring(start, end), query) + '...';
}

function highlightMatches(text, query) {
  if (!query) return text;
  
  const words = query.split(' ').filter(word => word.length > 1).map(escapeRegExp);
  
  if (words.length === 0) return text;
  
  const regex = new RegExp(`(${words.join('|')})`, 'gi');
  return text.replace(regex, '<mark class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-1 rounded">$1</mark>');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}