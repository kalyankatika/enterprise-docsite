/**
 * Navigation functionality for the EDS Documentation
 */

// Function to initialize navigation
function initializeNavigation() {
  console.log("Initializing navigation...");
  
  // Only proceed if navigation is present on the page
  const navigation = document.querySelector('.left-navigation');
  if (!navigation) {
    console.log("No left navigation found on this page");
    return;
  }
  
  console.log("Left navigation found on page");
  
  // First, manually create the submenus for all toggle items
  ensureSubmenuStructure();
  
  // Then set up the toggle functionality
  setupMenuToggle();
  
  // Hide all submenus initially
  hideAllSubmenus();
  
  // Show active menus based on current URL
  showActiveMenus();
}

// Make sure all submenu structures are properly set up
function ensureSubmenuStructure() {
  const menuItems = document.querySelectorAll('.left-navigation li');
  let submenuCount = 0;
  
  menuItems.forEach(item => {
    const toggle = item.querySelector('[data-toggle="menu"]');
    if (toggle) {
      // Find the submenu or create one if it doesn't exist
      let submenu = item.querySelector(':scope > ul');
      if (!submenu) {
        submenu = document.createElement('ul');
        submenu.className = 'ml-4 space-y-1 border-l border-[var(--color-border)] pl-2 mt-1 hidden';
        item.appendChild(submenu);
      } else {
        // Make sure the submenu has the right classes
        if (!submenu.classList.contains('hidden')) {
          submenu.classList.add('hidden');
        }
      }
      submenuCount++;
      
      // Ensure the chevron icon exists
      let chevronIcon = toggle.querySelector('.chevron-icon');
      if (!chevronIcon) {
        chevronIcon = document.createElement('span');
        chevronIcon.className = 'text-xs chevron-icon';
        chevronIcon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        `;
        toggle.appendChild(chevronIcon);
      }
    }
  });
  
  console.log(`Set up ${submenuCount} submenus`);
}

// Toggle functionality for menu dropdowns
function setupMenuToggle() {
  const toggleItems = document.querySelectorAll('[data-toggle="menu"]');
  console.log(`Found ${toggleItems.length} toggle menu items`);
  
  toggleItems.forEach(item => {
    // First, remove existing click event to avoid duplicates
    const clone = item.cloneNode(true);
    if (item.parentNode) {
      item.parentNode.replaceChild(clone, item);
    }
    
    // Then add our new click event
    clone.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Find the related elements
      const parentLi = this.closest('li');
      if (!parentLi) return;
      
      const submenu = parentLi.querySelector(':scope > ul');
      const chevronIcon = this.querySelector('.chevron-icon');
      
      if (!submenu) return;
      
      // Toggle submenu visibility
      const isHidden = submenu.classList.contains('hidden');
      if (isHidden) {
        submenu.classList.remove('hidden');
        console.log(`Opened submenu for ${this.textContent.trim()}`);
      } else {
        submenu.classList.add('hidden');
        console.log(`Closed submenu for ${this.textContent.trim()}`);
      }
      
      // Update chevron icon if it exists
      if (chevronIcon) {
        updateChevronIcon(chevronIcon, !isHidden);
      }
    });
  });
}

// Helper function to update chevron icons
function updateChevronIcon(chevronIcon, isCollapsed) {
  if (isCollapsed) {
    // Down arrow for collapsed state
    chevronIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    `;
  } else {
    // Up arrow for expanded state
    chevronIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
    `;
  }
}

// Hide all submenus initially
function hideAllSubmenus() {
  const allSubmenus = document.querySelectorAll('.left-navigation li > ul');
  console.log(`Found ${allSubmenus.length} submenus to hide`);
  
  allSubmenus.forEach(submenu => {
    submenu.classList.add('hidden');
    
    // Also update the parent toggle's chevron
    const parentLi = submenu.parentElement;
    if (parentLi) {
      const toggle = parentLi.querySelector('[data-toggle="menu"]');
      if (toggle) {
        const chevronIcon = toggle.querySelector('.chevron-icon');
        if (chevronIcon) {
          updateChevronIcon(chevronIcon, true);
        }
      }
    }
  });
}

// Show active menus based on the current URL
function showActiveMenus() {
  const currentUrl = window.location.pathname;
  console.log(`Current URL: ${currentUrl}`);
  
  // Default paths to expand on homepage
  if (currentUrl === '/' || currentUrl === '/index.html') {
    expandDefaultMenus();
    return;
  }
  
  // Find all links and check which ones match the current URL
  const allLinks = document.querySelectorAll('.left-navigation a');
  let activePathFound = false;
  
  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '/') return;
    
    // If current URL contains the href, this is part of the active path
    if (currentUrl.includes(href)) {
      console.log(`Active link found: ${href}`);
      activePathFound = true;
      
      // Find all parent menus and expand them
      let parent = link.parentElement;
      while (parent && !parent.classList.contains('left-navigation')) {
        // If this is a list item with a submenu, expand it
        if (parent.tagName === 'LI') {
          const submenu = parent.querySelector(':scope > ul');
          const toggle = parent.querySelector('[data-toggle="menu"]');
          
          if (submenu && toggle) {
            submenu.classList.remove('hidden');
            const chevronIcon = toggle.querySelector('.chevron-icon');
            if (chevronIcon) {
              updateChevronIcon(chevronIcon, false);
            }
          }
        }
        
        parent = parent.parentElement;
      }
      
      // Add active class to the current link
      link.classList.add('text-[var(--color-primary)]', 'font-medium');
    }
  });
  
  // If no active path was found, expand default menus
  if (!activePathFound) {
    expandDefaultMenus();
  }
}

// Expand default menus (like on homepage)
function expandDefaultMenus() {
  // Expand the Components menu by default
  const componentsLink = document.querySelector('.left-navigation a[href="/components/"]');
  if (componentsLink) {
    const parentLi = componentsLink.parentElement;
    if (parentLi) {
      const submenu = parentLi.querySelector(':scope > ul');
      const toggle = parentLi.querySelector('[data-toggle="menu"]');
      
      if (submenu && toggle) {
        submenu.classList.remove('hidden');
        const chevronIcon = toggle.querySelector('.chevron-icon');
        if (chevronIcon) {
          updateChevronIcon(chevronIcon, false);
        }
      }
    }
  }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);

// Also initialize on full page load to catch any dynamic changes
window.addEventListener('load', () => {
  // Add a slight delay to ensure all elements are fully rendered
  setTimeout(initializeNavigation, 300);
});

// Re-initialize when needed for dynamic content
function reinitializeNavigation() {
  console.log("Reinitializing navigation...");
  initializeNavigation();
}