/**
 * Theme toggle functionality for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeThemeToggle();
});

function initializeThemeToggle() {
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