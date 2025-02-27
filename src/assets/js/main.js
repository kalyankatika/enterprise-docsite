/**
 * Main JavaScript file for EDS Documentation
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Initialize components
  initializeComponents();
});

function initializeComponents() {
  // Code sample copy functionality
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(block => {
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'absolute top-2 right-2 p-1 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] transition-colors';
    copyButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    `;
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    
    // Style the code block container for button positioning
    const preBlock = block.parentElement;
    if (preBlock) {
      preBlock.style.position = 'relative';
      preBlock.appendChild(copyButton);
      
      // Add copy functionality
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(block.textContent).then(() => {
          // Visual feedback on copy
          copyButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          `;
          setTimeout(() => {
            copyButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            `;
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy code: ', err);
        });
      });
    }
  });
  
  // Initialize any tab components that aren't using custom JavaScript
  const tabGroups = document.querySelectorAll('[data-tabs]');
  tabGroups.forEach(tabGroup => {
    if (!tabGroup.hasAttribute('data-custom-tabs')) {
      const tabButtons = tabGroup.querySelectorAll('[data-tab-button]');
      const tabPanels = tabGroup.querySelectorAll('[data-tab-panel]');
      
      // Set up initial state
      const initialTabId = tabButtons.length > 0 ? tabButtons[0].getAttribute('data-tab-button') : null;
      if (initialTabId) {
        setActiveTab(tabButtons, tabPanels, initialTabId);
      }
      
      // Set up click handlers
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab-button');
          setActiveTab(tabButtons, tabPanels, tabId);
        });
      });
    }
  });
}

function setActiveTab(buttons, panels, activeTabId) {
  // Deactivate all tabs
  buttons.forEach(button => {
    const buttonTabId = button.getAttribute('data-tab-button');
    if (buttonTabId === activeTabId) {
      button.classList.add('active', 'border-[var(--color-primary)]', 'text-[var(--color-primary)]');
      button.classList.remove('border-transparent', 'text-[var(--color-text-muted)]');
      button.setAttribute('aria-selected', 'true');
    } else {
      button.classList.remove('active', 'border-[var(--color-primary)]', 'text-[var(--color-primary)]');
      button.classList.add('border-transparent', 'text-[var(--color-text-muted)]');
      button.setAttribute('aria-selected', 'false');
    }
  });
  
  // Show/hide panels
  panels.forEach(panel => {
    const panelTabId = panel.getAttribute('data-tab-panel');
    if (panelTabId === activeTabId) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}