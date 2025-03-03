/**
 * Component Tabs Functionality
 * Enhances the component tabs with keyboard navigation support
 */

document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tab-link[role="tab"]');
  if (!tabLinks.length) return;
  
  // Add keyboard navigation support
  tabLinks.forEach(tab => {
    tab.addEventListener('keydown', function(e) {
      // Handle left and right arrow keys
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        
        const tabs = Array.from(tabLinks);
        const currentIndex = tabs.indexOf(this);
        let nextIndex;
        
        if (e.key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else {
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        
        // Navigate to the tab URL
        window.location.href = tabs[nextIndex].href;
      }
      
      // Handle Home and End keys
      if (e.key === 'Home') {
        e.preventDefault();
        window.location.href = tabLinks[0].href;
      }
      
      if (e.key === 'End') {
        e.preventDefault();
        window.location.href = tabLinks[tabLinks.length - 1].href;
      }
    });
  });
  
  // Setup hover effects
  tabLinks.forEach(tab => {
    tab.addEventListener('mouseenter', function() {
      if (!this.classList.contains('text-[var(--color-primary)]')) {
        this.style.borderColor = 'var(--color-primary-light)';
      }
    });
    
    tab.addEventListener('mouseleave', function() {
      if (!this.classList.contains('text-[var(--color-primary)]')) {
        this.style.borderColor = '';
      }
    });
  });
});