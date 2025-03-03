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
      title: "Browse",
      url: "/navigation/"
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
      title: "Legacy Content",
      items: [
        {
          title: "Converted Legacy Components",
          url: "/legacy-docs/converted/legacy-component/",
          status: "migrated"
        },
        {
          title: "Converted Legacy Pages",
          url: "/legacy-docs/converted/legacy-page/",
          status: "migrated"
        },
        {
          title: "Preserved Legacy Components",
          url: "/legacy-docs/njk/legacy-component/",
          status: "preserved"
        },
        {
          title: "Preserved Legacy Pages",
          url: "/legacy-docs/njk/legacy-page/",
          status: "preserved"
        }
      ]
    },
    {
      title: "Migration Examples",
      items: [
        {
          title: "Legacy Component Preserved",
          url: "/components/shared/migration-examples/legacy-component-preserved/",
          status: "example"
        },
        {
          title: "Legacy Page Converted",
          url: "/components/shared/migration-examples/legacy-page-converted/",
          status: "example"
        }
      ]
    },
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
          title: "Test Migration Sample Page",
          url: "/migrated/test-migration/sample-page/",
          status: "migrated"
        },
        {
          title: "Test Migration Sample Component",
          url: "/migrated/test-migration/sample-component/",
          status: "migrated"
        },
        {
          title: "Test Migration Sample Doc",
          url: "/migrated/test-migration/sample-doc/",
          status: "migrated"
        }
      ]
    }
  ],
  
  // Navigation categories
  navigation: [
    {
      title: "Browse Categories",
      items: [
        {
          title: "By Channel",
          url: "/navigation/by-channel/",
          status: "stable"
        },
        {
          title: "By Type",
          url: "/navigation/by-type/",
          status: "stable"
        },
        {
          title: "By Owner",
          url: "/navigation/by-owner/",
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
          title: "Legacy Migration",
          url: "/resources/legacy-migration/",
          status: "stable"
        },
        {
          title: "Migrated Content",
          url: "/resources/migrated-content/",
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