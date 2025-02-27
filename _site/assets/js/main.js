/**
 * Main JavaScript file for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initializeComponents();
  setupThemeToggle();
  setupMobileMenu();
  setupSearchFunctionality();
});

/**
 * Initialize interactive components on the page
 */
function initializeComponents() {
  // Setup tabs
  document.querySelectorAll('[data-tabs]').forEach(tabsContainer => {
    const buttons = tabsContainer.querySelectorAll('[role="tab"]');
    const panels = tabsContainer.querySelectorAll('[role="tabpanel"]');
    
    // Set the first tab as active by default
    const activeTabId = buttons.length > 0 ? buttons[0].getAttribute('aria-controls') : null;
    setActiveTab(buttons, panels, activeTabId);
    
    // Add click event listeners to tab buttons
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('aria-controls');
        setActiveTab(buttons, panels, tabId);
      });
    });
  });
}

/**
 * Set the active tab in a tab component
 */
function setActiveTab(buttons, panels, activeTabId) {
  if (!activeTabId) return;
  
  // Update tab buttons
  buttons.forEach(button => {
    const isActive = button.getAttribute('aria-controls') === activeTabId;
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    if (isActive) {
      button.classList.add('eds-tabs__tab--active');
    } else {
      button.classList.remove('eds-tabs__tab--active');
    }
  });
  
  // Update tab panels
  panels.forEach(panel => {
    if (panel.id === activeTabId) {
      panel.classList.add('eds-tabs__panel--active');
      panel.removeAttribute('hidden');
    } else {
      panel.classList.remove('eds-tabs__panel--active');
      panel.setAttribute('hidden', '');
    }
  });
}

/**
 * Setup dark mode toggle functionality
 */
function setupThemeToggle() {
  const themeToggle = document.querySelector('.eds-theme-toggle');
  
  if (!themeToggle) return;
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('eds-theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    document.documentElement.classList.add('eds-theme-dark');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('eds-theme-dark');
    localStorage.setItem('eds-theme', isDarkMode ? 'dark' : 'light');
  });
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
  const menuToggle = document.querySelector('.eds-nav__toggle');
  const menu = document.querySelector('.eds-nav__menu');
  
  if (!menuToggle || !menu) return;
  
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    if (isExpanded) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });
  
  // Adjust menu display on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.style.display = '';
    } else if (menuToggle.getAttribute('aria-expanded') === 'false') {
      menu.style.display = 'none';
    }
  });
}

/**
 * Setup search functionality
 */
function setupSearchFunctionality() {
  const searchToggle = document.querySelector('.eds-search__toggle');
  const searchForm = document.querySelector('.eds-search__form');
  const searchInput = document.querySelector('.eds-search__input');
  
  if (!searchToggle || !searchForm || !searchInput) return;
  
  // Toggle search form on button click
  searchToggle.addEventListener('click', () => {
    const isExpanded = searchToggle.getAttribute('aria-expanded') === 'true';
    searchToggle.setAttribute('aria-expanded', !isExpanded);
    
    if (isExpanded) {
      searchForm.classList.remove('eds-search__form--open');
    } else {
      searchForm.classList.add('eds-search__form--open');
      searchInput.focus();
    }
  });
  
  // Close search form on click outside
  document.addEventListener('click', event => {
    if (!searchForm.contains(event.target) && !searchToggle.contains(event.target)) {
      searchForm.classList.remove('eds-search__form--open');
      searchToggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Handle search submission
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = searchInput.value.trim();
    
    if (query) {
      window.location.href = `/search/?q=${encodeURIComponent(query)}`;
    }
  });
}