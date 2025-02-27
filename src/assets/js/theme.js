/**
 * Enterprise Design System Theme Switcher
 * 
 * Manages theme preferences (light/dark) with system preference detection
 * and persistent storage via localStorage.
 */

(function() {
  // Check for saved theme preference or use system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('eds-theme');
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('eds-theme-dark');
  }
  
  // Toggle theme function
  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('eds-theme-dark');
    
    if (isDark) {
      document.documentElement.classList.remove('eds-theme-dark');
      localStorage.setItem('eds-theme', 'light');
    } else {
      document.documentElement.classList.add('eds-theme-dark');
      localStorage.setItem('eds-theme', 'dark');
    }
  }

  // Initialize theme toggle buttons when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Find all theme toggle buttons
    const themeToggles = document.querySelectorAll('.eds-theme-toggle');
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Add click event listener to all toggle buttons
    themeToggles.forEach(button => {
      button.addEventListener('click', toggleTheme);
    });
    
    // Add click event listener to the main theme toggle button
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', toggleTheme);
    }
    
    // Handle system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('eds-theme')) {
        if (e.matches) {
          document.documentElement.classList.add('eds-theme-dark');
        } else {
          document.documentElement.classList.remove('eds-theme-dark');
        }
      }
    });
    
    // Initialize mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
})();