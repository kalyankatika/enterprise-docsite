/**
 * Framer Motion Wrapper for EDS Documentation
 * 
 * A lightweight wrapper that initializes simple animations using data attributes
 * This provides graceful degradation when JS is disabled while enhancing the 
 * user experience when JS is available.
 */

(function() {
  // Animation options with default settings
  const defaultOptions = {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1.0],
    staggerChildren: 0.05,
    delayChildren: 0.1
  };

  // Initialize animations when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    handleThemeToggle();
  });

  // Main animation initialization function
  function initializeAnimations() {
    // Find all elements with data-motion attribute
    const animatedElements = document.querySelectorAll('[data-motion]');
    
    if (animatedElements.length === 0) return;
    
    // Set up observer to trigger animations when elements enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.getAttribute('data-motion');
          
          // Apply appropriate animation based on data-motion value
          switch (animationType) {
            case 'fade-in':
              fadeIn(element);
              break;
            case 'slide-up':
              slideUp(element);
              break;
            case 'slide-down':
              slideDown(element);
              break;
            case 'slide-left':
              slideLeft(element);
              break;
            case 'slide-right':
              slideRight(element);
              break;
            case 'zoom-in':
              zoomIn(element);
              break;
            case 'stagger-children':
              staggerChildren(element);
              break;
            default:
              // Default to fade in if no recognized animation type
              fadeIn(element);
          }
          
          // Unobserve after animating
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });
    
    // Start observing all animated elements
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Animation implementations
  function fadeIn(element) {
    element.style.opacity = 1;
    element.style.transition = `opacity ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}`;
  }
  
  function slideUp(element) {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
    element.style.transition = `opacity ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}, 
                               transform ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}`;
  }
  
  function slideDown(element) {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
    element.style.transition = `opacity ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}, 
                               transform ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}`;
  }
  
  function slideLeft(element) {
    element.style.opacity = 1;
    element.style.transform = 'translateX(0)';
    element.style.transition = `opacity ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}, 
                               transform ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}`;
  }
  
  function slideRight(element) {
    element.style.opacity = 1;
    element.style.transform = 'translateX(0)';
    element.style.transition = `opacity ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}, 
                               transform ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}`;
  }
  
  function zoomIn(element) {
    element.style.opacity = 1;
    element.style.transform = 'scale(1)';
    element.style.transition = `opacity ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}, 
                               transform ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}`;
  }
  
  function staggerChildren(element) {
    const children = Array.from(element.children);
    children.forEach((child, index) => {
      child.style.opacity = 0;
      child.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        child.style.opacity = 1;
        child.style.transform = 'translateY(0)';
        child.style.transition = `opacity ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}, 
                                 transform ${defaultOptions.duration}s ${cssEasing(defaultOptions.ease)}`;
      }, index * (defaultOptions.staggerChildren * 1000));
    });
  }
  
  // Helper to convert Framer Motion easing array to CSS cubic-bezier
  function cssEasing(ease) {
    if (Array.isArray(ease) && ease.length === 4) {
      return `cubic-bezier(${ease[0]}, ${ease[1]}, ${ease[2]}, ${ease[3]})`;
    }
    return 'ease';
  }
  
  // Handle theme toggle
  function handleThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', () => {
      const root = document.documentElement;
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Add transition class for smooth theme change
      root.classList.add('theme-transition');
      
      // Set the new theme
      root.setAttribute('data-theme', newTheme);
      
      // Store preference in localStorage
      localStorage.setItem('theme', newTheme);
      
      // Remove transition class after animation completes
      setTimeout(() => {
        root.classList.remove('theme-transition');
      }, 300);
    });
  }
})();