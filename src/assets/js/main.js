/**
 * Main JavaScript file for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeComponents();
});

/**
 * Initialize interactive components on the page
 */
function initializeComponents() {
  // Setup tab components
  const tabComponents = document.querySelectorAll('[data-tabs]');
  tabComponents.forEach(tabComponent => {
    const buttons = tabComponent.querySelectorAll('[role="tab"]');
    const panels = tabComponent.querySelectorAll('[role="tabpanel"]');
    
    if (buttons.length === 0 || panels.length === 0) return;
    
    // Get initial active tab from URL hash or use the first tab
    let activeTabId = window.location.hash.substring(1);
    const hasMatchingTab = Array.from(buttons).some(button => button.id === activeTabId);
    
    if (!activeTabId || !hasMatchingTab) {
      activeTabId = buttons[0].id;
    }
    
    // Initialize tabs
    setActiveTab(buttons, panels, activeTabId);
    
    // Add click event listeners
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.id;
        setActiveTab(buttons, panels, tabId);
        history.pushState(null, null, `#${tabId}`);
      });
    });
  });
  
  // Setup mobile menu
  setupMobileMenu();
  
  // Setup search
  setupSearchFunctionality();
  
  // Setup code copying
  setupCodeCopy();
  
  // Add anchor links to headings
  addHeadingAnchors();
}

/**
 * Set the active tab in a tab component
 */
function setActiveTab(buttons, panels, activeTabId) {
  buttons.forEach(button => {
    const isActive = button.id === activeTabId;
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    button.classList.toggle('bg-[var(--color-primary-light)]', isActive);
    button.classList.toggle('text-[var(--color-primary)]', isActive);
    button.classList.toggle('border-[var(--color-primary)]', isActive);
    button.classList.toggle('border-transparent', !isActive);
    
    if (isActive) {
      button.focus();
    }
  });
  
  panels.forEach(panel => {
    const controls = panel.getAttribute('aria-labelledby');
    panel.classList.toggle('hidden', controls !== activeTabId);
  });
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }
}

/**
 * Setup search functionality
 */
function setupSearchFunctionality() {
  const searchForms = document.querySelectorAll('form[role="search"]');
  
  searchForms.forEach(form => {
    const input = form.querySelector('input[type="search"]');
    if (input) {
      // Clear input when form is reset
      form.addEventListener('reset', () => {
        setTimeout(() => {
          input.focus();
        }, 10);
      });
      
      // Add autofocus for larger screens
      if (window.innerWidth >= 768) {
        form.addEventListener('click', () => {
          input.focus();
        });
      }
    }
  });
}

/**
 * Add copy button to code blocks
 */
function setupCodeCopy() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    const container = codeBlock.parentNode;
    const copyButton = document.createElement('button');
    copyButton.className = 'absolute top-2 right-2 p-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]';
    copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
    copyButton.title = 'Copy to clipboard';
    
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.textContent)
        .then(() => {
          copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
          setTimeout(() => {
            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
    
    // Make pre position relative to position the button
    container.style.position = 'relative';
    container.appendChild(copyButton);
  });
}

/**
 * Add anchor links to headings
 */
function addHeadingAnchors() {
  const headings = document.querySelectorAll('main h2, main h3, main h4, main h5, main h6');
  
  headings.forEach(heading => {
    if (heading.id && !heading.querySelector('.anchor')) {
      const anchor = document.createElement('a');
      anchor.className = 'anchor';
      anchor.href = `#${heading.id}`;
      anchor.textContent = '#';
      anchor.setAttribute('aria-hidden', 'true');
      heading.appendChild(anchor);
    }
  });
}