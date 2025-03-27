// FDS-Kalyan Katika - Extend FdsdNavToc to filter headings based on data-toc-ignored attribute
(function() {
  // Store the original getHeadings method
  const originalGetHeadings = FdsdNavToc.prototype.getHeadings;
  
  // Override the getHeadings method to filter out ignored headings
  FdsdNavToc.prototype.getHeadings = function(l1, l2) {
    let template = ``;
    this._headings = [
      [
        {
          name: '#' + this.heading,
          title: this.heading,
          el: '',
        },
      ],
    ];
    let current = 0;
    
    // Only select headings that don't have data-toc-ignored attribute
    document.querySelectorAll(`${l1}:not([data-toc-ignored]), ${l2}:not([data-toc-ignored])`).forEach((h) => {
      const heading = h;
      let name = this.kebab(heading.textContent);
      if (!heading.id) {
        heading.setAttribute('id', name);
      } else {
        name = heading.id;
      }
      
      if (heading.tagName.toLowerCase() === l2) {
        this._headings[current].push({
          name: '#' + name,
          title: heading.textContent,
          el: heading,
        });
      } else {
        current += 1;
        this._headings.push([
          {
            name: '#' + name,
            title: heading.textContent,
            el: heading,
          },
        ]);
      }
    });
    
    // Generate template same as original
    this._headings.forEach((group) => {
      template += `<div class="fds-stack-layout--half">`;
      group.forEach((child, i) => {
        if (i === 0) {
          template += `<h4 class="fds-text--label-legend">${child.title}</h4>`;
        } else {
          template += `<a href=${child.name} class="fds-link">
                    ${child.title}
                  </a>`;
        }
      });
      template += `</div>`;
    });
    
    return template;
  };
})();

// Filter headings based on active tab for TOC
document.addEventListener('DOMContentLoaded', function() {
  // Function to update which headings are visible to the TOC
  function updateTOCVisibility() {
    // First, mark all headings to be ignored by TOC
    document.querySelectorAll('h2, h3').forEach(heading => {
      heading.setAttribute('data-toc-ignored', 'true');
    });

    // Then, make headings in the active tab visible to TOC
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
      activeTab.querySelectorAll('h2, h3').forEach(heading => {
        heading.removeAttribute('data-toc-ignored');
      });
    }

    // Force TOC refresh by rebuilding it
    document.querySelectorAll('fdsd-nav-toc').forEach(toc => {
      // Clear content and trigger rebuild
      toc.innerHTML = '';
      toc.connectedCallback();
    });
  }

  // Update TOC when tab changes
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      // Allow time for the tab content to become active
      setTimeout(updateTOCVisibility, 50);
    });
  });

  // Initial setup after page loads
  setTimeout(updateTOCVisibility, 500);
});

// Add a small amount of CSS for TOC stability
const style = document.createElement('style');
style.textContent = `
  fdsd-nav-toc {
    display: block;
    min-height: 100px; /* Adjust based on your typical TOC height */
  }
`;
document.head.appendChild(style);



layout: assets/layouts/docs-component-tabs.njk
