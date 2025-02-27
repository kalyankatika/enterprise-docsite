/**
 * Main JavaScript file for EDS Documentation
 */

document.addEventListener('DOMContentLoaded', function() {
  // Toggle search container
  const searchToggle = document.querySelector('[data-toggle-search]');
  const searchContainer = document.getElementById('search-container');
  
  if (searchToggle && searchContainer) {
    searchToggle.addEventListener('click', function() {
      const isHidden = searchContainer.hidden;
      searchContainer.hidden = !isHidden;
      
      if (!isHidden) {
        // If closing, reset
        const searchInput = searchContainer.querySelector('.search-input');
        if (searchInput) {
          searchInput.value = '';
        }
      } else {
        // If opening, focus on input
        const searchInput = searchContainer.querySelector('.search-input');
        if (searchInput) {
          setTimeout(() => {
            searchInput.focus();
          }, 100);
        }
      }
    });
  }
  
  // Add anchor links to headings
  const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
  headings.forEach(heading => {
    if (heading.id) {
      const anchor = document.createElement('a');
      anchor.setAttribute('href', `#${heading.id}`);
      anchor.classList.add('heading-anchor');
      anchor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';
      heading.appendChild(anchor);
    }
  });
  
  // Handle external links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('http') && !href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add external link icon if it doesn't already have content
      if (!link.querySelector('svg') && !link.querySelector('img') && link.textContent.trim() !== '') {
        const externalIcon = document.createElement('span');
        externalIcon.classList.add('external-link-icon');
        externalIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';
        link.appendChild(externalIcon);
      }
    }
  });
  
  // Handle keyboard navigation
  document.addEventListener('keydown', function(event) {
    // '/' key to focus search
    if (event.key === '/' && searchContainer) {
      event.preventDefault();
      searchContainer.hidden = false;
      const searchInput = searchContainer.querySelector('.search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }
    
    // 'Escape' key to close search
    if (event.key === 'Escape' && searchContainer && !searchContainer.hidden) {
      searchContainer.hidden = true;
    }
  });
  
  // Handle component tabs from URL hash
  const handleComponentTabsFromHash = () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#tab-')) {
      const tabName = hash.replace('#tab-', '');
      const tabButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
      if (tabButton) {
        tabButton.click();
      }
    }
  };
  
  handleComponentTabsFromHash();
  window.addEventListener('hashchange', handleComponentTabsFromHash);
  
  // Make tables responsive
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('table-responsive');
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
});
