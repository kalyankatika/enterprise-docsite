/**
 * Enterprise Documentation System - Framer Motion Integration
 * 
 * This script provides a wrapper around Framer Motion-like animations
 * for use in our documentation site. It's designed to be lightweight and work with
 * Alpine.js to provide smooth transitions and animations throughout the UI.
 */

const FramerMotion = (() => {
  // Helper utility for checking if reduced motion is preferred
  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // Animation variants for common patterns
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } }
    },
    
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    },
    
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    },
    
    staggerChildren: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } }
    },
    
    childVariant: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
    },
    
    accordion: {
      collapsed: { height: 0, overflow: 'hidden' },
      expanded: { height: 'auto', overflow: 'visible' }
    },
    
    rotate: {
      normal: { rotate: 0 },
      rotated: { rotate: 180 }
    }
  };

  // Initialize elements with data-motion attributes
  const initMotionElements = () => {
    if (prefersReducedMotion()) return;
    
    document.querySelectorAll('[data-motion]').forEach(element => {
      const motionType = element.getAttribute('data-motion');
      const delay = element.getAttribute('data-motion-delay') || 0;
      
      if (variants[motionType]) {
        const classes = motionVariantToClasses(motionType);
        
        setTimeout(() => {
          classes.add.forEach(cls => element.classList.add(cls));
          classes.remove.forEach(cls => element.classList.remove(cls));
        }, delay * 1000);
      }
    });
  };
  
  // Convert motion variant to CSS class changes
  const motionVariantToClasses = (variant) => {
    const classMap = {
      fadeIn: { add: ['eds-fade-in'], remove: [] },
      slideUp: { add: ['eds-slide-up'], remove: [] },
      slideLeft: { add: ['eds-slide-left'], remove: [] },
      staggerChildren: { add: ['eds-stagger-list'], remove: [] },
      scale: { add: ['eds-scale-in'], remove: [] }
    };
    
    return classMap[variant] || { add: [], remove: [] };
  };
  
  // Apply animation to an element
  const animate = (element, motionType, options = {}) => {
    if (prefersReducedMotion()) return;
    
    const { delay = 0, duration, onComplete } = options;
    
    if (variants[motionType]) {
      const classes = motionVariantToClasses(motionType);
      
      setTimeout(() => {
        classes.add.forEach(cls => element.classList.add(cls));
        
        if (duration) {
          setTimeout(() => {
            if (onComplete && typeof onComplete === 'function') {
              onComplete();
            }
          }, duration * 1000);
        }
      }, delay * 1000);
    }
  };

  // Initialize when DOM is ready
  const init = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMotionElements);
    } else {
      initMotionElements();
    }
    
    // Initialize intersection observer for scroll-based animations
    if ('IntersectionObserver' in window && !prefersReducedMotion()) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.eds-section-transition').forEach(el => {
        observer.observe(el);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll('.eds-section-transition').forEach(el => {
        el.classList.add('in-view');
      });
    }
  };
  
  // Handle page transitions - for future enhancement with Turbo or similar
  const pageTransition = {
    enter: (element) => {
      animate(element, 'fadeIn');
    },
    exit: (element, done) => {
      element.style.opacity = '0';
      setTimeout(done, 300);
    }
  };
  
  // Register Alpine.js integration when Alpine is available
  const registerAlpine = () => {
    if (window.Alpine) {
      // Register a custom directive
      window.Alpine.directive('motion', (el, { value, modifiers, expression }, { evaluate }) => {
        let motionType = value;
        let options = {};
        
        if (expression) {
          options = evaluate(expression);
        }
        
        if (modifiers.includes('hover')) {
          el.addEventListener('mouseenter', () => {
            animate(el, motionType, options);
          });
        } else if (modifiers.includes('click')) {
          el.addEventListener('click', () => {
            animate(el, motionType, options);
          });
        } else {
          animate(el, motionType, options);
        }
      });
      
      // Register a magic property
      window.Alpine.magic('motion', (el) => {
        return (motionType, options = {}) => {
          animate(el, motionType, options);
        };
      });
    }
  };
  
  // Public API
  return {
    init,
    animate,
    variants,
    registerAlpine,
    pageTransition
  };
})();

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  FramerMotion.init();
  
  // Register with Alpine.js if it's available
  if (window.Alpine) {
    FramerMotion.registerAlpine();
  } else {
    document.addEventListener('alpine:initialized', FramerMotion.registerAlpine);
  }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FramerMotion;
}