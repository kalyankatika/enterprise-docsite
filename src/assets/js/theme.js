/**
 * Theme toggle functionality for EDS Documentation
 */

function initializeThemeToggle() {
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

document.addEventListener('DOMContentLoaded', () => {
  initializeThemeToggle();
});