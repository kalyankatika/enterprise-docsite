/**
 * Main JavaScript file for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  // Setup mobile menu toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Add anchor links to headings
  const headings = document.querySelectorAll('main h2, main h3, main h4, main h5, main h6');
  
  headings.forEach(function(heading) {
    if (heading.id && !heading.querySelector('.anchor')) {
      const anchor = document.createElement('a');
      anchor.className = 'anchor';
      anchor.href = `#${heading.id}`;
      anchor.textContent = '#';
      anchor.setAttribute('aria-hidden', 'true');
      heading.appendChild(anchor);
    }
  });
});