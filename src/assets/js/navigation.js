/**
 * Navigation functionality for the EDS Documentation
 */

// Function to initialize navigation (will be called from main.js)
function initializeNavigation() {
  setupMenuToggle();
  hideInactiveMenus();
  showActiveMenus();
}

// Toggle functionality for menu dropdowns
function setupMenuToggle() {
  const toggleItems = document.querySelectorAll('[data-toggle="menu"]');
  
  toggleItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Find the chevron icon (only select the direct child with chevron-icon class)
      const chevronIcon = this.querySelector(':scope > .chevron-icon');
      
      // Find the submenu (next sibling or child ul element)
      const submenu = this.parentElement.querySelector(':scope > ul');
      
      if (submenu) {
        // Toggle the submenu visibility
        if (submenu.classList.contains('hidden')) {
          submenu.classList.remove('hidden');
          // Update chevron to point up if it exists
          if (chevronIcon) {
            chevronIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            `;
          }
        } else {
          submenu.classList.add('hidden');
          // Update chevron to point down if it exists
          if (chevronIcon) {
            chevronIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            `;
          }
        }
      }
    });
  });
}

// Initially hide all submenus except the active ones
function hideInactiveMenus() {
  // First, hide all submenus
  const allSubmenus = document.querySelectorAll('.left-navigation li > ul');
  allSubmenus.forEach(submenu => {
    submenu.classList.add('hidden');
  });
}

// Show active sections and parent sections 
function showActiveMenus() {
  const currentUrl = window.location.pathname;
  
  // Find all links in the navigation
  const navLinks = document.querySelectorAll('.left-navigation a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // If this is a current or parent link, make sure its parent menus are visible
    if (currentUrl.includes(href) && href !== '/') {
      // Find parent toggle elements
      let parent = link.parentElement;
      
      while (parent) {
        const parentToggle = parent.querySelector('[data-toggle="menu"]');
        const parentSubmenu = parent.querySelector(':scope > ul');
        
        if (parentToggle && parentSubmenu) {
          // Make sure this submenu is visible
          parentSubmenu.classList.remove('hidden');
          
          // Update the chevron icon to point up
          const chevronIcon = parentToggle.querySelector('.chevron-icon');
          if (chevronIcon) {
            chevronIcon.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            `;
          }
        }
        
        // Move up to the next potential parent
        parent = parent.parentElement;
      }
    }
  });
}

// Initialize navigation when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);