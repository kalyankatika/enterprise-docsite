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
  
  // Setup navigation item toggles
  const navToggleItems = document.querySelectorAll('.nav-toggle-item');
  
  navToggleItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      // Only toggle when clicking the item itself or the arrow, not the link
      if (e.target === item || e.target.classList.contains('nav-arrow') || e.target.closest('.nav-arrow')) {
        e.preventDefault();
        // Find the associated submenu
        const parentLi = e.target.closest('li');
        if (!parentLi) return;
        
        const submenu = parentLi.querySelector('ul');
        if (!submenu) return;
        
        // Toggle the display of the submenu
        if (submenu.style.display === 'none' || !submenu.style.display) {
          submenu.style.display = 'block';
          // Rotate the arrow icon
          const arrow = parentLi.querySelector('.arrow-icon');
          if (arrow) {
            arrow.classList.add('rotate-180');
          }
        } else {
          submenu.style.display = 'none';
          // Rotate back the arrow icon
          const arrow = parentLi.querySelector('.arrow-icon');
          if (arrow) {
            arrow.classList.remove('rotate-180');
          }
        }
      }
    });
  });
  
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