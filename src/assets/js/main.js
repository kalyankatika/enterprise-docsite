/**
 * Main JavaScript file for EDS Documentation
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components when the DOM is ready
  initializeComponents();
  
  // Set up search functionality
  setupSearchFunctionality();
  
  // Set up theme toggle
  setupThemeToggle();
});

function initializeComponents() {
  // Tab component functionality
  const tabGroups = document.querySelectorAll('[role="tablist"]');
  tabGroups.forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('[role="tab"]');
    const panels = Array.from(tabs).map(tab => {
      const panelId = tab.getAttribute('aria-controls');
      return document.getElementById(panelId);
    });
    
    // Initialize first tab as active if none are active
    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('aria-selected') === 'true');
    if (!activeTab && tabs.length > 0) {
      setActiveTab(tabs, panels, tabs[0].id);
    }
    
    // Add click event listeners to tabs
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        setActiveTab(tabs, panels, tab.id);
      });
      
      // Add keyboard navigation for accessibility
      tab.addEventListener('keydown', (e) => {
        // Left/Right arrow keys to navigate between tabs
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const tabList = Array.from(tabs);
          const currentIndex = tabList.indexOf(tab);
          const direction = e.key === 'ArrowLeft' ? -1 : 1;
          const targetIndex = (currentIndex + direction + tabList.length) % tabList.length;
          
          // Focus and activate the target tab
          tabList[targetIndex].focus();
          setActiveTab(tabs, panels, tabList[targetIndex].id);
        }
        
        // Home/End keys to navigate to first/last tabs
        if (e.key === 'Home' || e.key === 'End') {
          e.preventDefault();
          const tabList = Array.from(tabs);
          const targetIndex = e.key === 'Home' ? 0 : tabList.length - 1;
          
          // Focus and activate the target tab
          tabList[targetIndex].focus();
          setActiveTab(tabs, panels, tabList[targetIndex].id);
        }
      });
    });
  });
  
  // Code copy functionality
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(codeBlock => {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-code-button absolute top-2 right-2 p-1 rounded-md bg-gray-700 dark:bg-gray-600 text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
    
    // Wrap code block in a div to position the copy button
    const wrapper = document.createElement('div');
    wrapper.className = 'group relative';
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);
    wrapper.appendChild(copyButton);
    
    // Add click event to copy code
    copyButton.addEventListener('click', () => {
      const code = codeBlock.querySelector('code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        // Show success state
        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
        setTimeout(() => {
          copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
        }, 2000);
      });
    });
  });
}

function setActiveTab(buttons, panels, activeTabId) {
  buttons.forEach(button => {
    const isActive = button.id === activeTabId;
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    button.setAttribute('tabindex', isActive ? '0' : '-1');
  });
  
  panels.forEach(panel => {
    const isActive = panel && panel.getAttribute('aria-labelledby') === activeTabId;
    if (panel) {
      panel.setAttribute('hidden', isActive ? null : '');
    }
  });
}

function setupSearchFunctionality() {
  // We'll use Alpine.js stores for search state
  if (window.Alpine) {
    window.Alpine.store('search', {
      open: false,
      query: '',
      results: [],
      loading: false,
      
      // Search index data will be loaded when needed
      searchData: null,
      
      // Initialize search data
      async init() {
        try {
          const response = await fetch('/search-index.json');
          this.searchData = await response.json();
        } catch (error) {
          console.error('Failed to load search index:', error);
        }
      },
      
      // Perform search whenever query changes
      async doSearch() {
        this.loading = true;
        
        // Load search data if not already loaded
        if (!this.searchData) {
          await this.init();
        }
        
        // Clear results if query is empty
        if (!this.query.trim()) {
          this.results = [];
          this.loading = false;
          return;
        }
        
        // Perform search (with debounce)
        this.results = performSearch(this.query, this.searchData || []);
        this.loading = false;
      }
    });
    
    // Watch for query changes to trigger search
    window.Alpine.effect(() => {
      const query = window.Alpine.store('search').query;
      debounce(() => {
        window.Alpine.store('search').doSearch();
      }, 300)();
    });
  }
  
  // Add keyboard shortcut (Ctrl+K or Command+K) to open search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (window.Alpine) {
        window.Alpine.store('search').open = true;
      }
    }
  });
}

function performSearch(query, searchData) {
  if (!query || !searchData) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const results = [];
  
  // Search through each item
  searchData.forEach(item => {
    // Calculate score based on various factors
    const titleScore = scoreMatch(item.title, normalizedQuery);
    const contentScore = scoreMatch(item.content, normalizedQuery);
    const pathScore = scoreMatch(item.url, normalizedQuery);
    
    // Weigh title matches more heavily
    const totalScore = titleScore * 3 + contentScore + pathScore * 0.5;
    
    // Only include results with meaningful matches
    if (totalScore > 0) {
      results.push({
        ...item,
        score: totalScore,
        snippet: getResultSnippet(item.content, normalizedQuery)
      });
    }
  });
  
  // Sort results by score (highest first)
  return results.sort((a, b) => b.score - a.score);
}

function scoreMatch(text, query) {
  if (!text) return 0;
  
  const normalizedText = text.toLowerCase();
  
  // Exact matches are scored highest
  if (normalizedText === query) return 10;
  
  // Title starts with query
  if (normalizedText.startsWith(query)) return 8;
  
  // Direct substring match
  if (normalizedText.includes(query)) return 5;
  
  // Check for word matches
  const words = query.split(/\s+/);
  let wordScore = 0;
  
  words.forEach(word => {
    if (word.length > 2 && normalizedText.includes(word)) {
      wordScore += 3;
    }
  });
  
  return wordScore;
}

function getResultSnippet(content, query) {
  if (!content) return '';
  
  // Find position of query in content
  const normalizedContent = content.toLowerCase();
  const queryPosition = normalizedContent.indexOf(query);
  
  if (queryPosition === -1) {
    // If query not found directly, find position of first query word
    const words = query.split(/\s+/);
    for (const word of words) {
      if (word.length > 2) {
        const wordPosition = normalizedContent.indexOf(word);
        if (wordPosition !== -1) {
          // Extract snippet around the word
          const start = Math.max(0, wordPosition - 40);
          const end = Math.min(content.length, wordPosition + word.length + 80);
          return highlightMatches(
            (start > 0 ? '...' : '') +
            content.substring(start, end) +
            (end < content.length ? '...' : ''),
            query
          );
        }
      }
    }
    
    // If no match found, return the beginning of the content
    return content.substring(0, 120) + (content.length > 120 ? '...' : '');
  }
  
  // Extract snippet around the query match
  const start = Math.max(0, queryPosition - 40);
  const end = Math.min(content.length, queryPosition + query.length + 80);
  
  return highlightMatches(
    (start > 0 ? '...' : '') +
    content.substring(start, end) +
    (end < content.length ? '...' : ''),
    query
  );
}

function highlightMatches(text, query) {
  if (!query) return text;
  
  // Escape special regex characters in the query
  const safeQuery = escapeRegExp(query);
  
  // Create regex that matches the whole query or individual words
  const words = safeQuery.split(/\s+/).filter(word => word.length > 2);
  const regex = new RegExp(`(${[safeQuery, ...words].join('|')})`, 'gi');
  
  // Replace matches with highlighted version
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-900 px-0.5 rounded">$1</mark>');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

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

function setupThemeToggle() {
  // Theme toggle is handled through Alpine.js in the UI components
  // This function is mainly for initialization and verification
  
  // Check if user has a saved preference
  const userPreference = localStorage.getItem('theme');
  
  // Check if system preference is dark
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme based on user preference or system preference
  if (userPreference === 'dark' || (!userPreference && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Watch for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });
}