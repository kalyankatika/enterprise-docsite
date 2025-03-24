class EdsdNavToc extends HTMLElement {
  constructor() {
    super();

    // the query to pick up headings on the page
    this.l1 = 'h2';
    this.l2 = 'h3';
    this.heading = '';

    this._currentHeading = '';
    this._headings = [];
    this._headings = [];
    this._sections;
    this._offset = 40;

    // Render HTML
  }

  kebab(str, separator = '-') {
    let kebab = str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-_]/g, separator)
      .replace(/--/g, separator)
      .substr(0, 50);

    if (kebab.length > 49) {
      kebab = kebab.substr(0, kebab.lastIndexOf('-'));
    }
    return kebab;
  }

  connectedCallback() {
    if (this.getAttribute('heading')) {
      this.heading = this.getAttribute('heading');
    }
    window.addEventListener('scroll', () => this.onScroll());
    this.innerHTML = `  <nav class="eds-stack-layout--two">
    ${this.getHeadings(this.l1, this.l2)}
  </nav>`;
  }

  onScroll() {
    const section = this.getSectionInView();
    const menuItem = this.getMenuItemBySection(section);

    if (menuItem) {
      this.removeCurrentActive({ignore: menuItem});
      this.setActive(menuItem);
    }
  }

  getMenuItemBySection(section) {
    if (!section) return;
    const sectionId = section.getAttribute('id');
    return this.querySelector(`[href="#${sectionId}"]`);
  }

  getSectionInView() {
    const list = [];
    this._headings.forEach((g) => {
      g.forEach((h) => {
        list.push(h);
      });
    });
    for (let i = 0; i < list.length; i++) {
      const startAt = list[i].el.offsetTop;
      const endAt = list[i + 1] ? list[i + 1].el.offsetTop : '10000000';
      const currentPosition =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        this._offset;

      const isInView = currentPosition > startAt && currentPosition <= endAt;
      if (isInView) return list[i].el;
    }
  }

  setActive(activeItem) {
    const isActive = activeItem.classList.contains('eds-text--strong');
    if (!isActive) {
      activeItem.classList.add('eds-text--strong');
    }
  }

  removeCurrentActive({ignore}) {
    const items = `a.eds-text--strong:not([href="${ignore.getAttribute(
      'href'
    )}"])`;
    const menuItems = this.querySelectorAll(items);
    menuItems.forEach((item) => item.classList.remove('eds-text--strong'));
  }

  getHeadings(l1, l2) {
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
    // let group = 0;

    document.querySelectorAll(l1 + ', ' + l2).forEach((h) => {
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
        console.log(current);
        this._headings.push([
          {
            name: '#' + name,
            title: heading.textContent,
            el: heading,
          },
        ]);
      }
    });

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
  }
}
