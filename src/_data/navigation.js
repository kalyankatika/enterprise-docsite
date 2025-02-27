/**
 * Navigation structure for EDS Documentation
 */
module.exports = {
  // Top navigation
  main: [
    {
      title: "Getting Started",
      url: "/getting-started/"
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
    }
  ],
  
  // Footer links
  footer: [
    {
      title: "GitHub Repository",
      url: "https://github.com/example/enterprise-design-system",
      external: true
    },
    {
      title: "Design System Support",
      url: "mailto:design-system@example.com",
      external: true
    },
    {
      title: "Accessibility Statement",
      url: "/accessibility/"
    },
    {
      title: "Code of Conduct",
      url: "/code-of-conduct/"
    }
  ],
  
  // Sidebar navigation
  sidebar: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          url: "/getting-started/"
        },
        {
          title: "Installation",
          url: "/getting-started/installation/"
        },
        {
          title: "Usage",
          url: "/getting-started/usage/"
        },
        {
          title: "Contribution",
          url: "/getting-started/contribution/"
        }
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Overview",
          url: "/components/"
        },
        {
          title: "Inputs",
          url: "/components/inputs/",
          children: [
            {
              title: "Button",
              url: "/components/inputs/button/"
            },
            {
              title: "Checkbox",
              url: "/components/inputs/checkbox/"
            },
            {
              title: "Form",
              url: "/components/inputs/form/"
            },
            {
              title: "Radio Button",
              url: "/components/inputs/radio/"
            },
            {
              title: "Select",
              url: "/components/inputs/select/"
            },
            {
              title: "Text Field",
              url: "/components/inputs/text-field/"
            },
            {
              title: "Toggle",
              url: "/components/inputs/toggle/"
            }
          ]
        },
        {
          title: "Layout",
          url: "/components/layout/",
          children: [
            {
              title: "Card",
              url: "/components/layout/card/"
            },
            {
              title: "Container",
              url: "/components/layout/container/"
            },
            {
              title: "Divider",
              url: "/components/layout/divider/"
            },
            {
              title: "Grid",
              url: "/components/layout/grid/"
            },
            {
              title: "Stack",
              url: "/components/layout/stack/"
            }
          ]
        },
        {
          title: "Navigation",
          url: "/components/navigation/",
          children: [
            {
              title: "Breadcrumbs",
              url: "/components/navigation/breadcrumbs/"
            },
            {
              title: "Drawer",
              url: "/components/navigation/drawer/"
            },
            {
              title: "Navbar",
              url: "/components/navigation/navbar/"
            },
            {
              title: "Pagination",
              url: "/components/navigation/pagination/"
            },
            {
              title: "Tabs",
              url: "/components/navigation/tabs/"
            }
          ]
        },
        {
          title: "Feedback",
          url: "/components/feedback/",
          children: [
            {
              title: "Alert",
              url: "/components/feedback/alert/"
            },
            {
              title: "Dialog",
              url: "/components/feedback/dialog/"
            },
            {
              title: "Progress",
              url: "/components/feedback/progress/"
            },
            {
              title: "Skeleton",
              url: "/components/feedback/skeleton/"
            },
            {
              title: "Toast",
              url: "/components/feedback/toast/"
            },
            {
              title: "Tooltip",
              url: "/components/feedback/tooltip/"
            }
          ]
        }
      ]
    },
    {
      title: "Design Tokens",
      items: [
        {
          title: "Overview",
          url: "/design-tokens/"
        },
        {
          title: "Color",
          url: "/design-tokens/color/"
        },
        {
          title: "Typography",
          url: "/design-tokens/typography/"
        },
        {
          title: "Spacing",
          url: "/design-tokens/spacing/"
        },
        {
          title: "Elevation",
          url: "/design-tokens/elevation/"
        },
        {
          title: "Borders & Radius",
          url: "/design-tokens/borders/"
        }
      ]
    },
    {
      title: "Patterns",
      items: [
        {
          title: "Overview",
          url: "/patterns/"
        },
        {
          title: "Authentication",
          url: "/patterns/authentication/"
        },
        {
          title: "Data Tables",
          url: "/patterns/data-tables/"
        },
        {
          title: "Forms",
          url: "/patterns/forms/"
        },
        {
          title: "Loading",
          url: "/patterns/loading/"
        },
        {
          title: "Search",
          url: "/patterns/search/"
        }
      ]
    },
    {
      title: "Guidelines",
      items: [
        {
          title: "Overview",
          url: "/guidelines/"
        },
        {
          title: "Accessibility",
          url: "/guidelines/accessibility/"
        },
        {
          title: "Content",
          url: "/guidelines/content/"
        },
        {
          title: "Responsive Design",
          url: "/guidelines/responsive/"
        },
        {
          title: "Internationalization",
          url: "/guidelines/internationalization/"
        }
      ]
    },
    {
      title: "Resources",
      items: [
        {
          title: "Overview",
          url: "/resources/"
        },
        {
          title: "Design Assets",
          url: "/resources/design-assets/"
        },
        {
          title: "Tools",
          url: "/resources/tools/"
        },
        {
          title: "Tutorials",
          url: "/resources/tutorials/"
        },
        {
          title: "FAQ",
          url: "/resources/faq/"
        }
      ]
    }
  ]
};