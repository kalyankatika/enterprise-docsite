/**
 * Framer Motion Wrapper for 11ty
 * This file provides a simplified API for using Framer Motion animations in our templates
 */

// Enhanced Framer Motion-like animations using CSS
document.addEventListener('DOMContentLoaded', function() {
  // Define animation types
  const animationTypes = {
    'fade-in': 'motion-fade-in',
    'fade-in-up': 'motion-fade-in-up',
    'scale-in': 'motion-scale-in',
    'slide-in-right': 'motion-slide-in-right',
    'slide-in-left': 'motion-slide-in-left',
    'stagger-children': 'motion-stagger'
  };

  // Apply animations to elements with specific data attributes
  const animateElements = () => {
    // Handle single animations
    Object.entries(animationTypes).forEach(([motionType, cssClass]) => {
      if (motionType !== 'stagger-children') {
        document.querySelectorAll(`[data-motion="${motionType}"]`).forEach(element => {
          if (!element.classList.contains('animated')) {
            if (isInViewport(element)) {
              element.classList.add(cssClass, 'animated');
              
              // Apply delay if specified
              const delay = element.getAttribute('data-delay');
              if (delay) {
                element.style.animationDelay = `${delay}s`;
              }
            }
          }
        });
      }
    });

    // Handle stagger animations
    document.querySelectorAll('[data-motion="stagger-children"]').forEach(parentElement => {
      if (!parentElement.classList.contains('animated')) {
        if (isInViewport(parentElement)) {
          parentElement.classList.add('motion-stagger', 'animated');
          
          // Get stagger effect type for children
          const childEffect = parentElement.getAttribute('data-children-effect') || 'fade-in-up';
          const staggerDelay = parseFloat(parentElement.getAttribute('data-stagger-delay') || 0.1);
          
          // Add animation to children
          Array.from(parentElement.children).forEach((child, index) => {
            child.style.transitionDelay = `${index * staggerDelay}s`;
            child.classList.add(animationTypes[childEffect] || 'motion-fade-in-up');
          });
        }
      }
    });

    // Handle hero section animations
    document.querySelectorAll('.hero-title, .hero-description, .hero-cta, .hero-image').forEach(element => {
      if (!element.classList.contains('animated') && isInViewport(element)) {
        element.classList.add('animated');
      }
    });
  };

  // Apply specific animations for accordions
  const initAccordions = () => {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isOpen = this.classList.contains('open');
        
        // Toggle accordion state
        this.classList.toggle('open');
        
        if (isOpen) {
          content.style.maxHeight = '0';
          setTimeout(() => {
            content.classList.remove('open');
          }, 300);
        } else {
          content.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  };

  // Apply card animations
  const initCardAnimations = () => {
    document.querySelectorAll('.feature-card, .component-card, .eds-card').forEach(card => {
      if (!card.classList.contains('animated-card')) {
        card.classList.add('animated-card');
      }
    });
  };

  // Apply button animations
  const initButtonAnimations = () => {
    document.querySelectorAll('.eds-button').forEach(button => {
      if (!button.classList.contains('animated-button')) {
        button.classList.add('animated-button');
      }
    });
  };

  // Animate elements when they enter/leave the viewport
  const createIntersectionObserver = () => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!entry.target.classList.contains('animated')) {
              const motionType = entry.target.getAttribute('data-motion');
              if (motionType && animationTypes[motionType]) {
                entry.target.classList.add(animationTypes[motionType], 'animated');
              }
            }
          }
        });
      }, { threshold: 0.1 });

      // Observe all elements with data-motion attribute
      document.querySelectorAll('[data-motion]').forEach(element => {
        observer.observe(element);
      });

      return observer;
    }
    
    return null;
  };

  // Helper function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 1.1 &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  };

  // Initialize additional animations on page load
  const initAnimations = () => {
    // Run animation check
    animateElements();
    
    // Initialize component-specific animations
    initAccordions();
    initCardAnimations();
    initButtonAnimations();
    
    // Try to use IntersectionObserver for better performance
    const observer = createIntersectionObserver();
    
    // Fallback to scroll event if IntersectionObserver is not available
    if (!observer) {
      window.addEventListener('scroll', animateElements, { passive: true });
    }
    
    // Also check animations on resize (for responsive layouts)
    window.addEventListener('resize', animateElements, { passive: true });
  };

  // Initialize Framer Motion implementation
  const initFramerMotion = () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Apply all animations instantly without transitions
      document.querySelectorAll('[data-motion]').forEach(element => {
        element.classList.add('animated');
      });
      return;
    }
    
    // Run all initializations
    initAnimations();
    
    // Add classes to body when everything is loaded
    document.body.classList.add('js-animation-loaded');
  };

  // Run all animations
  initFramerMotion();
  
  // Add a small delay to ensure all elements are properly rendered
  setTimeout(animateElements, 100);
});