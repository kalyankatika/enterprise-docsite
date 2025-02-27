/**
 * Theme toggle functionality for EDS Documentation
 */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-header');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('eds-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    htmlElement.setAttribute('data-theme', 'dark');
  }
  
  // Toggle theme function
  const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('eds-theme', newTheme);
  };
  
  // Add click event to theme toggles
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
  });
  
  // Handle mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuContent = mobileMenu?.querySelector('div');
  
  if (mobileMenuToggle && mobileMenu && mobileMenuContent) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      // Animate menu in
      setTimeout(() => {
        mobileMenuContent.style.transform = 'translateX(0)';
      }, 10);
    });
    
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        // Animate menu out
        mobileMenuContent.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      });
    }
    
    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenuContent.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      }
    });
  }
});