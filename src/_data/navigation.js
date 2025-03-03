/**
 * Navigation structure for EDS Documentation
 */
module.exports = {
  // Main navigation in the header
  main: [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "Components",
      url: "/components/"
    },
    {
      title: "Design Tokens",
      url: "/design-tokens/"
    },
    {
      title: "Patterns",
      url: "/patterns/"
    },
    {
      title: "Guidelines",
      url: "/guidelines/"
    },
    {
      title: "Resources",
      url: "/resources/"
    },
    {
      title: "Updates",
      url: "/updates/"
    }
  ],
  
  // Footer navigation
  footer: [
    {
      title: "GitHub",
      url: "https://github.com/enterprise/design-system"
    },
    {
      title: "Privacy",
      url: "/privacy-policy/"
    },
    {
      title: "Terms",
      url: "/terms-of-service/"
    },
    {
      title: "Accessibility",
      url: "/accessibility/"
    },
    {
      title: "Contact",
      url: "/contact/"
    }
  ],
  
  // Component categories in the sidebar
  components: [
    {
      title: "Layout",
      items: [
        {
          title: "Accordion",
          url: "/components/layout/accordion/",
          status: "stable"
        },
        {
          title: "Card",
          url: "/components/layout/card/",
          status: "stable"
        },
        {
          title: "Grid",
          url: "/components/layout/grid/",
          status: "stable"
        },
        {
          title: "Container",
          url: "/components/layout/container/",
          status: "stable"
        },
        {
          title: "Divider",
          url: "/components/layout/divider/",
          status: "stable"
        }
      ]
    },
    {
      title: "Navigation",
      items: [
        {
          title: "Breadcrumb",
          url: "/components/navigation/breadcrumb/",
          status: "stable"
        },
        {
          title: "Menu",
          url: "/components/navigation/menu/",
          status: "stable"
        },
        {
          title: "Tabs",
          url: "/components/navigation/tabs/",
          status: "stable"
        },
        {
          title: "Pagination",
          url: "/components/navigation/pagination/",
          status: "stable"
        }
      ]
    },
    {
      title: "Feedback",
      items: [
        {
          title: "Alert",
          url: "/components/feedback/alert/",
          status: "stable"
        },
        {
          title: "Progress",
          url: "/components/feedback/progress/",
          status: "stable"
        },
        {
          title: "Toast",
          url: "/components/feedback/toast/",
          status: "stable"
        },
        {
          title: "Skeleton",
          url: "/components/feedback/skeleton/",
          status: "experimental"
        }
      ]
    },
    {
      title: "Forms",
      items: [
        {
          title: "Button",
          url: "/components/forms/button/",
          status: "stable"
        },
        {
          title: "Input",
          url: "/components/forms/input/",
          status: "stable"
        },
        {
          title: "Checkbox",
          url: "/components/forms/checkbox/",
          status: "stable"
        },
        {
          title: "Radio",
          url: "/components/forms/radio/",
          status: "stable"
        },
        {
          title: "Select",
          url: "/components/forms/select/",
          status: "stable"
        },
        {
          title: "Textarea",
          url: "/components/forms/textarea/",
          status: "stable"
        }
      ]
    }
  ]
};