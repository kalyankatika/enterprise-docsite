/**
 * Framer Motion Wrapper for 11ty
 * This file provides a simplified API for using Framer Motion animations in our templates
 */

// We're using the pre-installed framer-motion library in the project
document.addEventListener('DOMContentLoaded', function() {
  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Apply animations to elements with specific data attributes
  const animateElements = () => {
    // For fade in animations
    document.querySelectorAll('[data-motion="fade-in"]').forEach(element => {
      if (!element.classList.contains('animated')) {
        if (isInViewport(element)) {
          element.classList.add('motion-fade-in', 'animated');
        }
      }
    });

    // For fade in up animations
    document.querySelectorAll('[data-motion="fade-in-up"]').forEach(element => {
      if (!element.classList.contains('animated')) {
        if (isInViewport(element)) {
          element.classList.add('motion-fade-in-up', 'animated');
        }
      }
    });

    // For stagger children animations
    document.querySelectorAll('[data-motion="stagger-children"]').forEach(parentElement => {
      if (!parentElement.classList.contains('animated')) {
        if (isInViewport(parentElement)) {
          parentElement.classList.add('motion-stagger', 'animated');
          
          // Add animation to children
          Array.from(parentElement.children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
            child.classList.add('motion-fade-in-up');
          });
        }
      }
    });

    // For scale in animations
    document.querySelectorAll('[data-motion="scale-in"]').forEach(element => {
      if (!element.classList.contains('animated')) {
        if (isInViewport(element)) {
          element.classList.add('motion-scale-in', 'animated');
        }
      }
    });

    // For slide in right animations
    document.querySelectorAll('[data-motion="slide-in-right"]').forEach(element => {
      if (!element.classList.contains('animated')) {
        if (isInViewport(element)) {
          element.classList.add('motion-slide-in-right', 'animated');
        }
      }
    });
  };

  // Helper function to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  };

  // Run animation check on load
  animateElements();

  // Run animation check on scroll
  window.addEventListener('scroll', animateElements);
});