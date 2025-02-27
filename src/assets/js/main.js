/**
 * Main JavaScript file for EDS Documentation
 */
document.addEventListener('DOMContentLoaded', () => {
  // Copy code button functionality
  const codeBlocks = document.querySelectorAll('pre code');
  
  if (codeBlocks.length > 0) {
    codeBlocks.forEach(block => {
      const pre = block.parentNode;
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-code-button absolute top-3 right-3 p-2 rounded bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 opacity-0 group-hover:opacity-100';
      copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      `;
      
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(block.textContent.trim())
          .then(() => {
            // Show success state
            copyButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            `;
            
            // Reset after 2 seconds
            setTimeout(() => {
              copyButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              `;
            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy code: ', err);
            // Show error state
            copyButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-error)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            `;
            
            // Reset after 2 seconds
            setTimeout(() => {
              copyButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              `;
            }, 2000);
          });
      });
      
      // Add positioning context to pre element
      pre.classList.add('relative', 'group');
      pre.appendChild(copyButton);
    });
  }
  
  // Handle version selector change
  const versionSelector = document.getElementById('version-selector');
  if (versionSelector) {
    versionSelector.addEventListener('change', (e) => {
      const version = e.target.value;
      // Redirect to the selected version
      if (version) {
        window.location.href = `/versions/${version}/`;
      }
    });
  }
  
  // Initialize components with dynamic behavior
  initializeComponents();
  
  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's an empty anchor or has a non-id href
      if (targetId === '#' || targetId.startsWith('#/')) return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL
        history.pushState(null, null, targetId);
      }
    });
  });
});

// Initialize interactive components
function initializeComponents() {
  // Tabs component
  document.querySelectorAll('[data-tabs]').forEach(tabsContainer => {
    const tabButtons = tabsContainer.querySelectorAll('[data-tab-button]');
    const tabPanels = tabsContainer.querySelectorAll('[data-tab-panel]');
    
    // Set initial active tab
    const initialTab = tabsContainer.dataset.initialTab || tabButtons[0]?.dataset.tabButton;
    
    setActiveTab(tabButtons, tabPanels, initialTab);
    
    // Add click event to tab buttons
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.dataset.tabButton;
        setActiveTab(tabButtons, tabPanels, tabId);
      });
    });
  });
  
  // Accordion component
  document.querySelectorAll('[data-accordion]').forEach(accordion => {
    const headers = accordion.querySelectorAll('[data-accordion-header]');
    
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const section = header.closest('[data-accordion-section]');
        const content = section.querySelector('[data-accordion-content]');
        const isExpanded = section.classList.contains('expanded');
        
        // Toggle current section
        section.classList.toggle('expanded');
        content.style.maxHeight = isExpanded ? '0' : `${content.scrollHeight}px`;
        header.setAttribute('aria-expanded', !isExpanded);
        
        // If it's a single-expand accordion, collapse others
        if (accordion.dataset.accordion === 'single') {
          accordion.querySelectorAll('[data-accordion-section]').forEach(otherSection => {
            if (otherSection !== section && otherSection.classList.contains('expanded')) {
              otherSection.classList.remove('expanded');
              otherSection.querySelector('[data-accordion-content]').style.maxHeight = '0';
              otherSection.querySelector('[data-accordion-header]').setAttribute('aria-expanded', false);
            }
          });
        }
      });
    });
  });
}

// Helper function to set active tab
function setActiveTab(buttons, panels, activeTabId) {
  // Update button states
  buttons.forEach(button => {
    if (button.dataset.tabButton === activeTabId) {
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
    } else {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    }
  });
  
  // Update panel visibility
  panels.forEach(panel => {
    if (panel.dataset.tabPanel === activeTabId) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}