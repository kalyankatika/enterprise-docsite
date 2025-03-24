1.//main.js
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

    // Force TOC refresh by removing and re-adding the component
    const tocComponent = document.querySelector('edsd-nav-toc');
    if (tocComponent) {
      const parentNode = tocComponent.parentNode;
      const nextSibling = tocComponent.nextSibling;
      
      // Temporarily remove TOC component
      parentNode.removeChild(tocComponent);
      
      // Re-add the component to force it to rebuild
      setTimeout(() => {
        if (nextSibling) {
          parentNode.insertBefore(tocComponent, nextSibling);
        } else {
          parentNode.appendChild(tocComponent);
        }
      }, 10);
    }
  }

  // Update TOC when tab changes
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Allow time for the tab content to become active
      setTimeout(updateTOCVisibility, 50);
    });
  });

  // Initial setup after page loads
  setTimeout(updateTOCVisibility, 300);
});

2. //edsd-nav-toc-extension.js
// Extension for EdsdNavToc component to respect data-toc-ignored attribute
(function() {
  // Store the original getHeadings method
  const originalGetHeadings = EdsdNavToc.prototype.getHeadings;
  
  // Override the getHeadings method to filter out ignored headings
  EdsdNavToc.prototype.getHeadings = function(l1, l2) {
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
      template += `<div class="eds-stack-layout--half">`;
      group.forEach((child, i) => {
        if (i === 0) {
          template += `<h4 class="eds-text--label-legend">${child.title}</h4>`;
        } else {
          template += `<a href=${child.name} class="eds-link">
                    ${child.title}
                  </a>`;
        }
      });
      template += `</div>`;
    });
    
    return template;
  };
})();

3. //script to html page
<!-- Add this after the EdsdNavToc component definition but before any usage -->
<script src="/path/to/edsd-nav-toc-extension.js"></script>

4. //add to css
/* Ensure the TOC component reinstantiation doesn't cause layout shifts */
.toc-container {
  min-height: 100px; /* Adjust based on your typical TOC height */
}

5. //update doc-component.njk
<aside class="eds-article-layout__aside--sticky">
  <div class="eds-stack-layout--two">
    <!-- Add a container class for our script to target -->
    <div class="toc-container">
      <edsd-nav-toc heading="Overview" l1="h2" l2="h3"></edsd-nav-toc>
    </div>
    <div class="eds-stack-layout--half">
      <h4 class="eds-text--label-legend">Resources</h4>
      {% if resources.figma %}
        <eds-link href="{{ resources.figma }}" target="_blank">
          Figma
        </eds-link>
      {% endif %}
    </div>
  </div>
</aside>
