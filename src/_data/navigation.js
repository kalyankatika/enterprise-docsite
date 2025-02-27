/**
 * Navigation structure for EDS Documentation
 */
module.exports = {
  // Main navigation shown in the header
  main: [
    {
      title: "Get Started",
      url: "/get-started/"
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
  
  // Design System subnavigation
  designSystem: [
    {
      title: "Foundations",
      items: [
        {
          title: "Color",
          url: "/design-system/foundations/color/"
        },
        {
          title: "Typography",
          url: "/design-system/foundations/typography/"
        },
        {
          title: "Spacing",
          url: "/design-system/foundations/spacing/"
        },
        {
          title: "Grid System",
          url: "/design-system/foundations/grid-system/"
        },
        {
          title: "Iconography",
          url: "/design-system/foundations/iconography/"
        }
      ]
    },
    {
      title: "Guidelines",
      items: [
        {
          title: "Accessibility",
          url: "/design-system/guidelines/accessibility/"
        },
        {
          title: "Content",
          url: "/design-system/guidelines/content/"
        },
        {
          title: "Responsiveness",
          url: "/design-system/guidelines/responsiveness/"
        },
        {
          title: "Internationalization",
          url: "/design-system/guidelines/internationalization/"
        }
      ]
    }
  ],
  
  // Component categories
  components: [
    {
      title: "Layout",
      items: [
        {
          title: "Container",
          url: "/components/layout/container/"
        },
        {
          title: "Grid",
          url: "/components/layout/grid/"
        },
        {
          title: "Stack",
          url: "/components/layout/stack/"
        },
        {
          title: "Divider",
          url: "/components/layout/divider/"
        }
      ]
    },
    {
      title: "Navigation",
      items: [
        {
          title: "Navbar",
          url: "/components/navigation/navbar/"
        },
        {
          title: "Sidebar",
          url: "/components/navigation/sidebar/"
        },
        {
          title: "Tabs",
          url: "/components/navigation/tabs/"
        },
        {
          title: "Breadcrumbs",
          url: "/components/navigation/breadcrumbs/"
        }
      ]
    },
    {
      title: "Inputs",
      items: [
        {
          title: "Button",
          url: "/components/inputs/button/"
        },
        {
          title: "Text Input",
          url: "/components/inputs/text-input/"
        },
        {
          title: "Checkbox",
          url: "/components/inputs/checkbox/"
        },
        {
          title: "Radio Button",
          url: "/components/inputs/radio-button/"
        },
        {
          title: "Select",
          url: "/components/inputs/select/"
        },
        {
          title: "Date Picker",
          url: "/components/inputs/date-picker/"
        }
      ]
    },
    {
      title: "Data Display",
      items: [
        {
          title: "Table",
          url: "/components/data-display/table/"
        },
        {
          title: "Card",
          url: "/components/data-display/card/"
        },
        {
          title: "List",
          url: "/components/data-display/list/"
        },
        {
          title: "Badge",
          url: "/components/data-display/badge/"
        }
      ]
    },
    {
      title: "Feedback",
      items: [
        {
          title: "Alert",
          url: "/components/feedback/alert/"
        },
        {
          title: "Toast",
          url: "/components/feedback/toast/"
        },
        {
          title: "Progress",
          url: "/components/feedback/progress/"
        },
        {
          title: "Spinner",
          url: "/components/feedback/spinner/"
        }
      ]
    }
  ],
  
  // Footer navigation
  footer: {
    docs: [
      {
        title: "Getting Started",
        url: "/get-started/"
      },
      {
        title: "Design Foundations",
        url: "/design-system/foundations/"
      },
      {
        title: "Component Library",
        url: "/components/"
      },
      {
        title: "Guidelines",
        url: "/design-system/guidelines/"
      }
    ],
    resources: [
      {
        title: "Design Tokens",
        url: "/resources/design-tokens/"
      },
      {
        title: "Templates",
        url: "/resources/templates/"
      },
      {
        title: "Downloads",
        url: "/resources/downloads/"
      },
      {
        title: "Release Notes",
        url: "/resources/release-notes/"
      }
    ],
    community: [
      {
        title: "Slack Channel",
        url: "https://slack.example.com/channel/design-system"
      },
      {
        title: "GitHub",
        url: "https://github.com/example/eds"
      },
      {
        title: "Report an Issue",
        url: "/support/report-issue/"
      },
      {
        title: "Request a Feature",
        url: "/support/feature-request/"
      }
    ]
  }
};