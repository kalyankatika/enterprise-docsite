// Component Tabs JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Get all tab buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  
  // Add click event listeners to each tab button
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
    });
  });
});
