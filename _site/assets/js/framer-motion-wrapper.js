/**
 * Framer Motion Wrapper for EDS Documentation
 * 
 * This file provides a simple implementation of Framer Motion-like animations
 * using CSS and vanilla JavaScript for the Enterprise Documentation System.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if not already initialized
  if (window.edsFramerMotion) return;
  
  // Animation helper class
  const AnimationHelper = {
    init() {
      // Find all elements with animation classes
      const animationElements = document.querySelectorAll([
        '.animate-fade-in',
        '.animate-slide-up',
        '.animate-slide-up-delay',
        '.animate-fade-in-delay',
        '.animate-scale',
        '.animate-rotate',
        '.stagger-container > *'
      ].join(','));
      
      // Set up intersection observer for animations
      this.setupIntersectionObserver(animationElements);
      
      // Initialize staggered containers
      this.initStaggeredContainers();
      
      // Add event listeners for tab animations
      this.initTabAnimations();
      
      // Initialize any animations that are already on screen
      this.initializeVisibleAnimations();
    },
    
    setupIntersectionObserver(elements) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add .visible class to trigger animations
            entry.target.classList.add('visible');
            
            // If element is in a staggered container, handle parent
            if (entry.target.parentElement?.classList.contains('stagger-container')) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
            
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      // Observe all animation elements
      elements.forEach(el => {
        observer.observe(el);
      });
    },
    
    initStaggeredContainers() {
      const staggerContainers = document.querySelectorAll('.stagger-container');
      
      staggerContainers.forEach(container => {
        // Set initial state
        Array.from(container.children).forEach((child, index) => {
          child.style.opacity = '0';
          child.style.transform = 'translateY(10px)';
        });
        
        // Create observer for the container
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Animate children with staggered delay
              Array.from(container.children).forEach((child, index) => {
                setTimeout(() => {
                  child.style.opacity = '1';
                  child.style.transform = 'translateY(0)';
                }, 100 * index);
              });
              
              // Stop observing
              observer.unobserve(container);
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(container);
      });
    },
    
    initTabAnimations() {
      const tabButtons = document.querySelectorAll('.eds-tabs__tab');
      const tabContents = document.querySelectorAll('.eds-tabs__content');
      
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');
          
          // Remove active class from all tabs and content
          tabButtons.forEach(tab => tab.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Add active class to clicked tab and its content
          button.classList.add('active');
          
          if (targetId) {
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
              targetContent.classList.add('active');
            }
          }
        });
      });
    },
    
    initializeVisibleAnimations() {
      // Initialize any animations that are already on screen
      document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-up-delay, .animate-fade-in-delay')
        .forEach(element => {
          element.style.opacity = '1';
          
          if (element.classList.contains('animate-slide-up') || 
              element.classList.contains('animate-slide-up-delay')) {
            element.style.transform = 'translateY(0)';
          }
        });
    }
  };
  
  // Initialize animations
  AnimationHelper.init();
  
  // Make globally available
  window.edsFramerMotion = AnimationHelper;
});