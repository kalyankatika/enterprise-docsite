/**
 * Main JavaScript file for EDS Documentation
 * Enhanced with animation and improved navigation features
 */
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for the page to fully load
  setTimeout(() => {
    // Initialize all components
    initMobileMenu();
    initLeftNavigation();
    addAnchorLinks();
    initSectionTransitions();
    initAccordions();
    initCodeCopyButtons();
    initBackToTopButton();
    
    // Add toast container if it doesn't exist
    if (!document.querySelector('.eds-toast-container')) {
      const toastContainer = document.createElement('div');
      toastContainer.className = 'eds-toast-container';
      document.body.appendChild(toastContainer);
    }
  }, 100);
});

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  
  if (!mobileMenuButton || !mobileMenu) return;
  
  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      // Open menu
      mobileMenu.classList.remove('hidden');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('hidden');
      
      // Add fade-in animation
      mobileMenu.classList.add('eds-fade-in');
      if (mobileMenuOverlay) {
        mobileMenuOverlay.style.opacity = '0';
        mobileMenuOverlay.classList.remove('hidden');
        setTimeout(() => {
          mobileMenuOverlay.style.opacity = '1';
        }, 10);
      }
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Close menu
      closeMenu();
    }
  });
  
  // Close menu when clicking overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMenu);
  }
  
  // Close menu when pressing escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
  
  function closeMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.style.opacity = '0';
      setTimeout(() => {
        mobileMenuOverlay.classList.add('hidden');
      }, 300);
    }
    
    mobileMenu.classList.add('eds-fade-out');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('eds-fade-in', 'eds-fade-out');
      document.body.style.overflow = '';
    }, 300);
  }
}

/**
 * Initialize left navigation functionality
 */
function initLeftNavigation() {
  const leftNav = document.querySelector('.eds-left-nav');
  if (!leftNav) return;
  
  // Open the current section
  const currentLink = leftNav.querySelector('.current-page');
  if (currentLink) {
    // Find the parent section and expand it
    const parentSection = currentLink.closest('.eds-left-nav-section');
    if (parentSection) {
      const content = parentSection.querySelector('.eds-left-nav-content');
      const toggle = parentSection.querySelector('.eds-left-nav-toggle');
      
      if (content && toggle) {
        content.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        toggleIcon(toggle, true);
      }
    }
    
    // Scroll to the current item
    setTimeout(() => {
      currentLink.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 300);
  }
  
  // Section toggles
  const toggles = leftNav.querySelectorAll('.eds-left-nav-toggle');
  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const section = toggle.closest('.eds-left-nav-section');
      const content = section.querySelector('.eds-left-nav-content');
      
      // Get the current state
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle the state
      toggle.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('active');
      toggleIcon(toggle, !isExpanded);
    });
  });
  
  function toggleIcon(toggle, isExpanded) {
    const iconOpen = toggle.querySelector('.icon-plus');
    const iconClose = toggle.querySelector('.icon-minus');
    
    if (iconOpen && iconClose) {
      if (isExpanded) {
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
      } else {
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      }
    }
  }
}

/**
 * Add anchor links to headings for deep linking
 */
function addAnchorLinks() {
  // Select all headings in the content that should have anchors
  const headings = document.querySelectorAll('.main-content h2, .main-content h3, .main-content h4');
  
  headings.forEach(heading => {
    // Skip if the heading doesn't have an ID or already has an anchor
    if (!heading.id || heading.querySelector('.anchor-link')) return;
    
    // Create the anchor link
    const anchor = document.createElement('a');
    anchor.className = 'anchor-link';
    anchor.href = `#${heading.id}`;
    anchor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
    anchor.title = `Link to this section: ${heading.textContent}`;
    
    // Initially hidden, only show on heading hover
    anchor.style.opacity = '0';
    anchor.style.marginLeft = '0.5rem';
    anchor.style.transition = 'opacity 0.2s ease';
    
    // Append the anchor to the heading
    heading.appendChild(anchor);
    
    // Add hover effects
    heading.addEventListener('mouseenter', () => {
      anchor.style.opacity = '1';
    });
    
    heading.addEventListener('mouseleave', () => {
      anchor.style.opacity = '0';
    });
  });
}

/**
 * Initialize section transitions for scrolling effects
 */
function initSectionTransitions() {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Find all sections to animate
  const sections = document.querySelectorAll('.eds-section-animate');
  
  // If sections exist, add scroll listener
  if (sections.length > 0) {
    // Check initial positions
    checkSections();
    
    // Listen for scroll events
    window.addEventListener('scroll', checkSections);
  }
  
  // Check each section and animate if in viewport
  function checkSections() {
    sections.forEach(section => {
      if (isInViewport(section) && !section.classList.contains('eds-animated')) {
        section.classList.add('eds-animated', 'eds-fade-in');
      }
    });
  }
}

/**
 * Initialize accordion functionality
 */
function initAccordions() {
  const accordions = document.querySelectorAll('.eds-accordion');
  
  accordions.forEach(accordion => {
    const headers = accordion.querySelectorAll('.eds-accordion-header');
    
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        
        // Update aria attributes
        header.setAttribute('aria-expanded', !isExpanded);
        content.setAttribute('aria-hidden', isExpanded);
        
        // Toggle active class
        content.classList.toggle('active');
        
        // Toggle icon if present
        const icon = header.querySelector('.eds-accordion-icon');
        if (icon) {
          icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      });
    });
    
    // Open the first accordion by default if data-auto-open is set
    if (accordion.getAttribute('data-auto-open') === 'true') {
      const firstHeader = headers[0];
      if (firstHeader && firstHeader.getAttribute('aria-expanded') !== 'true') {
        firstHeader.click();
      }
    }
  });
}

/**
 * Initialize code copy buttons
 */
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    const pre = codeBlock.parentNode;
    
    // Skip if the copy button already exists
    if (pre.querySelector('.eds-code-copy')) return;
    
    // Create code container with header
    const container = document.createElement('div');
    container.className = 'eds-code-block';
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);
    
    // Create header with copy button
    const header = document.createElement('div');
    header.className = 'eds-code-header';
    const language = codeBlock.className.match(/language-([a-z]+)/)?.[1] || 'code';
    header.innerHTML = `<span>${language}</span>`;
    container.insertBefore(header, pre);
    
    // Add copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'eds-code-copy';
    copyButton.innerHTML = 'Copy';
    copyButton.title = 'Copy to clipboard';
    header.appendChild(copyButton);
    
    // Add copy functionality
    copyButton.addEventListener('click', () => {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.innerHTML = 'Copied!';
        showToast('Code copied to clipboard!', 'success');
        
        setTimeout(() => {
          copyButton.innerHTML = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy code', 'error');
      });
    });
  });
}

/**
 * Initialize back to top button
 */
function initBackToTopButton() {
  const backToTopButton = document.getElementById('back-to-top');
  if (!backToTopButton) return;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('opacity-0', 'invisible');
      backToTopButton.classList.add('opacity-100');
    } else {
      backToTopButton.classList.remove('opacity-100');
      backToTopButton.classList.add('opacity-0', 'invisible');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} type - The type of toast (success, error, warning, info)
 * @param {object} options - Additional options
 */
function showToast(message, type = 'info', options = {}) {
  const { title, duration = 3000, closable = true } = options;
  
  // Make sure the container exists
  let container = document.querySelector('.eds-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'eds-toast-container';
    document.body.appendChild(container);
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `eds-toast eds-toast-${type}`;
  
  // Add toast icon based on type
  let iconSvg = '';
  switch (type) {
    case 'success':
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
      break;
    case 'error':
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
      break;
    case 'warning':
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
      break;
    default: // info
      iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  }
  
  // Construct toast content
  toast.innerHTML = `
    <div class="eds-toast-icon">${iconSvg}</div>
    <div class="eds-toast-content">
      ${title ? `<div class="eds-toast-title">${title}</div>` : ''}
      <div class="eds-toast-message">${message}</div>
    </div>
    ${closable ? `<button class="eds-toast-close" aria-label="Close notification">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>` : ''}
    <div class="eds-toast-progress" style="width: 100%"></div>
  `;
  
  // Add the toast to the container
  container.appendChild(toast);
  
  // Set up auto-dismiss with progress bar
  let timeLeft = duration;
  let progressBar = toast.querySelector('.eds-toast-progress');
  
  // Make the toast visible
  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);
  
  // Set up progress bar
  const progressInterval = setInterval(() => {
    timeLeft -= 10;
    const percentLeft = (timeLeft / duration) * 100;
    progressBar.style.width = `${percentLeft}%`;
    
    if (timeLeft <= 0) {
      clearInterval(progressInterval);
      removeToast();
    }
  }, 10);
  
  // Add close button functionality
  if (closable) {
    const closeButton = toast.querySelector('.eds-toast-close');
    closeButton.addEventListener('click', () => {
      clearInterval(progressInterval);
      removeToast();
    });
  }
  
  // Function to remove the toast
  function removeToast() {
    toast.classList.remove('visible');
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(1rem)';
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }
}