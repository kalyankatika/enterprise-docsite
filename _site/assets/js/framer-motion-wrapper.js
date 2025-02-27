/**
 * Enterprise Design System
 * Framer Motion Wrapper for Animations
 * 
 * This file provides a lightweight wrapper around our CSS animations
 * that mimics some of the Framer Motion API for use in our documentation site.
 */

(function() {
  // Define the FramerMotion namespace
  window.FramerMotion = window.FramerMotion || {};
  
  // Animation variants - predefined animation configurations
  window.FramerMotion.variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    },
    stagger: {
      hidden: { opacity: 0, y: 20 },
      visible: item => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: item * 0.1
        }
      })
    }
  };
  
  // Apply animation to an element based on variant name
  window.FramerMotion.animate = function(element, variant, options = {}) {
    if (!element) return;
    
    // Default options
    const defaults = {
      delay: 0,
      duration: 0.5,
      ease: 'ease',
      initialState: 'hidden',
      finalState: 'visible',
      onComplete: null,
      threshold: 0.1
    };
    
    const config = { ...defaults, ...options };
    
    // Get the animation variant
    const animVariant = typeof variant === 'string' 
      ? window.FramerMotion.variants[variant] 
      : variant;
      
    if (!animVariant) {
      console.error('Animation variant not found:', variant);
      return;
    }
    
    // Apply initial state
    const initial = animVariant[config.initialState];
    if (initial) {
      if (initial.opacity !== undefined) element.style.opacity = initial.opacity;
      if (initial.y !== undefined) element.style.transform = `translateY(${initial.y}px)`;
      if (initial.x !== undefined) element.style.transform = `translateX(${initial.x}px)`;
      if (initial.scale !== undefined) element.style.transform = `scale(${initial.scale})`;
    }
    
    // Prepare transition
    element.style.transition = `
      opacity ${config.duration}s ${config.ease} ${config.delay}s,
      transform ${config.duration}s ${config.ease} ${config.delay}s
    `;
    
    // Set up intersection observer to trigger the animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply final state
          const final = animVariant[config.finalState];
          if (final) {
            if (typeof final === 'function') {
              // Handle function variants (like stagger)
              const customFinal = final(options.item || 0);
              if (customFinal.opacity !== undefined) element.style.opacity = customFinal.opacity;
              if (customFinal.y !== undefined) element.style.transform = customFinal.y === 0 
                ? (customFinal.scale ? `scale(${customFinal.scale})` : 'none') 
                : `translateY(${customFinal.y}px)`;
              if (customFinal.x !== undefined) element.style.transform = customFinal.x === 0
                ? (customFinal.scale ? `scale(${customFinal.scale})` : 'none')
                : `translateX(${customFinal.x}px)`;
              if (customFinal.scale !== undefined && !customFinal.x && !customFinal.y) 
                element.style.transform = `scale(${customFinal.scale})`;
              
              // Apply custom delay if provided
              if (customFinal.transition && customFinal.transition.delay !== undefined) {
                element.style.transition = `
                  opacity ${config.duration}s ${config.ease} ${customFinal.transition.delay}s,
                  transform ${config.duration}s ${config.ease} ${customFinal.transition.delay}s
                `;
              }
            } else {
              // Standard variant
              if (final.opacity !== undefined) element.style.opacity = final.opacity;
              if (final.y !== undefined) element.style.transform = final.y === 0 
                ? (final.scale ? `scale(${final.scale})` : 'none') 
                : `translateY(${final.y}px)`;
              if (final.x !== undefined) element.style.transform = final.x === 0
                ? (final.scale ? `scale(${final.scale})` : 'none')
                : `translateX(${final.x}px)`;
              if (final.scale !== undefined && !final.x && !final.y) 
                element.style.transform = `scale(${final.scale})`;
            }
          }
          
          // Cleanup
          observer.disconnect();
          
          // Call onComplete callback if provided
          if (config.onComplete && typeof config.onComplete === 'function') {
            setTimeout(() => {
              config.onComplete();
            }, config.duration * 1000 + config.delay * 1000);
          }
        }
      });
    }, { threshold: config.threshold });
    
    observer.observe(element);
    
    return {
      stop: () => {
        observer.disconnect();
      }
    };
  };
  
  // Animate a collection of elements with staggered delay
  window.FramerMotion.stagger = function(elements, variant, options = {}) {
    if (!elements || !elements.length) return;
    
    Array.from(elements).forEach((element, index) => {
      window.FramerMotion.animate(element, variant, {
        ...options,
        delay: options.delay || 0 + (options.staggerDelay || 0.1) * index,
        item: index
      });
    });
  };
  
  // Animation presets that apply common CSS classes
  window.FramerMotion.applyPreset = function(element, preset) {
    if (!element) return;
    
    switch (preset) {
      case 'fadeIn':
        element.classList.add('eds-fade-in');
        break;
      case 'slideUp':
        element.classList.add('eds-slide-up');
        break;
      case 'slideDown':
        element.classList.add('eds-slide-down');
        break;
      case 'slideLeft':
        element.classList.add('eds-slide-left');
        break;
      case 'slideRight':
        element.classList.add('eds-slide-right');
        break;
      case 'scale':
        element.classList.add('eds-scale');
        break;
      case 'pulse':
        element.classList.add('eds-pulse');
        break;
      case 'shimmer':
        element.classList.add('eds-shimmer');
        break;
      default:
        element.classList.add('eds-animate');
    }
  };
  
  // Apply animation to all elements with data-animate attribute
  window.FramerMotion.initAll = function() {
    // Set up intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Find all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '[data-animate], .eds-animate, .eds-stagger-list, .eds-fade-in, .eds-scale, ' +
      '.eds-slide-up, .eds-slide-down, .eds-slide-left, .eds-slide-right, ' +
      '.eds-hero-title, .eds-hero-description, .eds-hero-cta'
    );
    
    // Apply staggered animation to lists
    document.querySelectorAll('.eds-stagger-list').forEach(list => {
      const children = Array.from(list.children);
      children.forEach((child, index) => {
        child.style.transitionDelay = `${0.1 * index}s`;
      });
    });
    
    // Apply data-animate attributes
    document.querySelectorAll('[data-animate]').forEach(element => {
      const preset = element.getAttribute('data-animate');
      window.FramerMotion.applyPreset(element, preset);
    });
    
    // Observe all animated elements
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  };
  
  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    window.FramerMotion.initAll();
  });
})();