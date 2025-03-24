// Hide headings in inactive tabs from TOC
function updateTabHeadingsVisibility() {
  // First, ensure all headings are visible in the DOM
  document.querySelectorAll('.component-tabs h2, .component-tabs h3').forEach(heading => {
    heading.style.display = '';
  });
  
  // Then hide headings in inactive tabs for TOC scanning
  document.querySelectorAll('.tab-content:not(.active) h2, .tab-content:not(.active) h3').forEach(heading => {
    // This makes the heading still visible to users but "invisible" to TOC scanners
    // We use a custom attribute that won't affect visual display
    heading.setAttribute('aria-hidden', 'true');
    
    // As a backup, we can also add a special class
    heading.classList.add('toc-ignore');
  });
  
  // Make headings in active tab visible to TOC
  document.querySelectorAll('.tab-content.active h2, .tab-content.active h3').forEach(heading => {
    heading.removeAttribute('aria-hidden');
    heading.classList.remove('toc-ignore');
  });
  
  // Force TOC refresh by triggering a small DOM change
  const toc = document.querySelector('edsd-nav-toc');
  if (toc) {
    // Create a temporary element to trigger DOM observers
    const tempNode = document.createElement('span');
    tempNode.style.display = 'none';
    toc.appendChild(tempNode);
    
    // Remove it after a small delay
    setTimeout(() => {
      if (toc.contains(tempNode)) {
        toc.removeChild(tempNode);
      }
    }, 10);
  }
}

// Modify your existing tab button click handlers
document.addEventListener('DOMContentLoaded', function() {
  // This should be integrated with your existing tab code
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      const tabsContainer = button.closest('.component-tabs');
      
      // Update active tab button
      tabsContainer.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active');
      });
      button.classList.add('active');
      
      // Update active content
      tabsContainer.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      tabsContainer.querySelector(`#${tabName}`).classList.add('active');
      
      // Add this line to update heading visibility for TOC
      updateTabHeadingsVisibility();
    });
  });
  
  // Initialize heading visibility on page load
  // This needs to run after the page has fully loaded
  setTimeout(updateTabHeadingsVisibility, 100);
});
