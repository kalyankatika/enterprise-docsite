/**
 * Enterprise Design System Theme Switcher
 * 
 * Handles theme preferences (light/dark) with system preference detection
 * and persistent storage via localStorage.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  
  // Theme state indicators
  const lightModeIcons = document.querySelectorAll('.light-mode-icon');
  const darkModeIcons = document.querySelectorAll('.dark-mode-icon');
  const lightModeText = document.querySelectorAll('.light-mode-text');
  const darkModeText = document.querySelectorAll('.dark-mode-text');

  // System preference media query
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  /**
   * Set the theme based on preference or system settings
   */
  function setInitialTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // If saved preference exists, use it
    if (savedTheme) {
      applyTheme(savedTheme);
      return;
    }
    
    // Otherwise use system preference
    if (prefersDarkScheme.matches) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  }
  
  /**
   * Apply the specified theme to the document
   * @param {string} theme - 'light' or 'dark'
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update UI indicators based on theme
    if (theme === 'dark') {
      lightModeIcons.forEach(icon => icon.classList.add('hidden'));
      darkModeIcons.forEach(icon => icon.classList.remove('hidden'));
      lightModeText.forEach(text => text.classList.add('hidden'));
      darkModeText.forEach(text => text.classList.remove('hidden'));
    } else {
      lightModeIcons.forEach(icon => icon.classList.remove('hidden'));
      darkModeIcons.forEach(icon => icon.classList.add('hidden'));
      lightModeText.forEach(text => text.classList.remove('hidden'));
      darkModeText.forEach(text => text.classList.add('hidden'));
    }
    
    // Store preference
    localStorage.setItem('theme', theme);
  }
  
  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }
  
  // Initialize theme
  setInitialTheme();
  
  // Add event listeners for theme toggle buttons
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }
  
  // Listen for system preference changes
  prefersDarkScheme.addEventListener('change', function(e) {
    // Only auto-change if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // Add CSS transition class after initial load
  // This prevents transitions during page load
  setTimeout(() => {
    document.body.classList.add('eds-theme-transition');
  }, 100);
});