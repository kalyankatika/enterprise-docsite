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
      title: "Design System",
      url: "/design-system/"
    },
    {
      title: "Components",
      url: "/components/"
    },
    {
      title: "Resources",
      url: "/resources/"
    },
    {
      title: "Support",
      url: "/support/"
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
  
  // Legacy and migrated content
  legacy: [
    {
      title: "Migrated Content",
      items: [
        {
          title: "Migrated Content Overview",
          url: "/migrated/",
          status: "stable"
        },
        {
          title: "Test Migration Sample",
          url: "/migrated/test-migration/sample/",
          status: "migrated"
        },
        {
          title: "Test Migration Sample Component",
          url: "/migrated/test-migration/sample-component/",
          status: "migrated"
        }
      ]
    }
  ],
  
  // Navigation categories for components
  navigation: [
    {
      title: "Component Categories",
      items: [
        {
          title: "Layout",
          url: "/components/layout/",
          status: "stable"
        },
        {
          title: "Navigation",
          url: "/components/navigation/",
          status: "stable"
        },
        {
          title: "Feedback",
          url: "/components/feedback/",
          status: "stable"
        },
        {
          title: "Inputs",
          url: "/components/inputs/",
          status: "stable"
        }
      ]
    }
  ],
  
  // Design system categories
  designSystem: [
    {
      title: "Design System",
      items: [
        {
          title: "Overview",
          url: "/design-system/",
          status: "stable"
        },
        {
          title: "Foundations",
          url: "/design-system/foundations/",
          status: "stable",
          items: [
            {
              title: "Colors",
              url: "/design-system/foundations/colors/",
              status: "stable"
            },
            {
              title: "Typography",
              url: "/design-system/foundations/typography/",
              status: "stable"
            },
            {
              title: "Spacing",
              url: "/design-system/foundations/spacing/",
              status: "stable"
            }
          ]
        }
      ]
    }
  ],
  
  // Resource categories
  resources: [
    {
      title: "Resources",
      items: [
        {
          title: "Overview",
          url: "/resources/",
          status: "stable"
        },
        {
          title: "Content Migration System",
          url: "/resources/content-migration/",
          status: "stable"
        },
        {
          title: "Migration Guide",
          url: "/resources/migration-guide/",
          status: "stable"
        },
        {
          title: "Migration Tools",
          url: "/resources/migration-tools/",
          status: "stable"
        }
      ]
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
      title: "Inputs",
      items: [
        {
          title: "Button",
          url: "/components/inputs/button/",
          status: "stable"
        },
        {
          title: "Input",
          url: "/components/inputs/input/",
          status: "stable"
        },
        {
          title: "Checkbox",
          url: "/components/inputs/checkbox/",
          status: "stable"
        },
        {
          title: "Radio",
          url: "/components/inputs/radio/",
          status: "stable"
        },
        {
          title: "Select",
          url: "/components/inputs/select/",
          status: "stable"
        },
        {
          title: "Textarea",
          url: "/components/inputs/textarea/",
          status: "stable"
        }
      ]
    }
  ]
};