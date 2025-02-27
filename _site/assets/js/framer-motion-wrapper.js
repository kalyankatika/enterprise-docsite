/**
 * Framer Motion animation wrapper for the Enterprise Documentation System
 * 
 * This script provides simple animation capabilities using Framer Motion principles
 * It can be used without the full Framer Motion library for basic animation needs
 */

document.addEventListener('DOMContentLoaded', function() {
  // Utility function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Utility function to add animation class when element is in viewport
  function animateOnScroll() {
    // Handle fade animations
    document.querySelectorAll('.framer-fade').forEach(element => {
      if (isInViewport(element)) {
        element.style.opacity = '1';
        element.style.transition = 'opacity 0.6s ease-out';
      }
    });

    // Handle slide from left animations
    document.querySelectorAll('.framer-slide-left').forEach(element => {
      if (isInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }
    });

    // Handle slide from right animations
    document.querySelectorAll('.framer-slide-right').forEach(element => {
      if (isInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }
    });

    // Handle slide up animations
    document.querySelectorAll('.framer-slide-up').forEach(element => {
      if (isInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }
    });

    // Handle slide down animations
    document.querySelectorAll('.framer-slide-down').forEach(element => {
      if (isInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }
    });
  }

  // Run animation check on page load
  animateOnScroll();

  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);

  // Staggered animation for cards or list items
  function animateStaggered() {
    const staggeredElements = document.querySelectorAll('[data-stagger]');
    staggeredElements.forEach((element, index) => {
      const delay = index * 0.1; // 100ms between each element
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      }, delay * 1000);
    });
  }

  // Run staggered animations
  animateStaggered();

  // Handle hover animations
  document.querySelectorAll('[data-hover-scale]').forEach(element => {
    element.addEventListener('mouseenter', () => {
      const scale = element.getAttribute('data-hover-scale') || '1.05';
      element.style.transform = `scale(${scale})`;
      element.style.transition = 'transform 0.2s ease-out';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
      element.style.transition = 'transform 0.2s ease-out';
    });
  });
  
  // Add theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  
  if (themeToggle && moonIcon && sunIcon) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Set initial icon state
    if (isDarkMode) {
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    } else {
      moonIcon.classList.remove('hidden');
      sunIcon.classList.add('hidden');
    }
    
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      
      // Toggle icons
      moonIcon.classList.toggle('hidden');
      sunIcon.classList.toggle('hidden');
      
      // Save preference
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});