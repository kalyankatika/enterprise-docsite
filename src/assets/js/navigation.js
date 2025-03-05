/**
 * Navigation functionality for the EDS Documentation site
 * Handles the expand/collapse behavior of the left navigation menu
 */

// Use a polling approach to ensure DOM is fully loaded and processed
document.addEventListener('DOMContentLoaded', function() {
  // Try immediately
  initializeNavigation();
  
  // And then poll a few times to make sure
  let attempts = 0;
  const maxAttempts = 5;
  const interval = setInterval(function() {
    if (attempts >= maxAttempts) {
      clearInterval(interval);
      console.log('Maximum navigation initialization attempts reached');
      return;
    }
    
    const buttons = document.querySelectorAll('button.nav-toggle');
    if (buttons.length > 0) {
      clearInterval(interval);
      console.log(`Found ${buttons.length} nav-toggle buttons on attempt ${attempts + 1}`);
      setupNavigation(buttons);
    } else {
      attempts++;
      console.log(`Navigation initialization attempt ${attempts} - no buttons found yet`);
      initializeNavigation();
    }
  }, 500);
});

// Also try initializing on window load as a final fallback
window.addEventListener('load', function() {
  initializeNavigation();
});

function initializeNavigation() {
  console.log('Initializing navigation...');
  const toggleButtons = document.querySelectorAll('button.nav-toggle');
  
  if (toggleButtons.length === 0) {
    console.warn('No navigation toggle buttons found');
    
    // Log the DOM structure to help debug
    const navMain = document.querySelector('.nav-main');
    if (navMain) {
      console.log('Navigation container found - checking for buttons...');
      const buttons = navMain.querySelectorAll('button');
      if (buttons.length > 0) {
        console.log(`Found ${buttons.length} buttons in nav-main`);
        setupNavigation(buttons);
        return;
      }
    }
    return;
  }
  
  console.log(`Found ${toggleButtons.length} navigation toggle buttons`);
  setupNavigation(toggleButtons);
}

function setupNavigation(buttons) {
  // Set up toggle functionality for all navigation items
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default button action
      
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const targetId = this.getAttribute('aria-controls');
      const targetMenu = document.getElementById(targetId);
      
      console.log(`Toggle clicked: ${targetId}, current state: ${isExpanded ? 'expanded' : 'collapsed'}`);
      
      // Toggle the expanded state
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle the submenu visibility
      if (targetMenu) {
        if (isExpanded) {
          targetMenu.classList.add('hidden');
          
          // Rotate chevron down
          const chevron = this.querySelector('.chevron-icon svg');
          if (chevron) {
            chevron.innerHTML = '<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />';
          }
        } else {
          targetMenu.classList.remove('hidden');
          
          // Rotate chevron up
          const chevron = this.querySelector('.chevron-icon svg');
          if (chevron) {
            chevron.innerHTML = '<path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />';
          }
        }
      }
    });
  });
  
  // Initialize chevron directions based on expanded state
  buttons.forEach(button => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const chevron = button.querySelector('.chevron-icon svg');
    
    if (chevron) {
      if (isExpanded) {
        chevron.innerHTML = '<path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />';
      } else {
        chevron.innerHTML = '<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />';
      }
    }
  });
}