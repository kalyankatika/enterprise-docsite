/**
 * Theme toggle functionality for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the theme toggle button
  const themeToggle = document.querySelector('.eds-theme-toggle');
  
  if (!themeToggle) return;
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('eds-theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply the initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    document.documentElement.classList.add('eds-theme-dark');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const isDarkMode = document.documentElement.classList.toggle('eds-theme-dark');
    localStorage.setItem('eds-theme', isDarkMode ? 'dark' : 'light');
  });
});