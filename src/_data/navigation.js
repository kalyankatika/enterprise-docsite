/**
 * Navigation structure for EDS Documentation
 */
module.exports = {
  main: [
    {
      label: "Get Started",
      url: "/get-started/"
    },
    {
      label: "Design System",
      url: "/design-system/"
    },
    {
      label: "Components",
      url: "/components/"
    },
    {
      label: "Resources",
      url: "/resources/"
    }
  ],
  getStarted: [
    {
      label: "Introduction",
      url: "/get-started/"
    },
    {
      label: "Installation",
      url: "/get-started/installation/"
    },
    {
      label: "Usage",
      url: "/get-started/usage/"
    },
    {
      label: "Customization",
      url: "/get-started/customization/"
    },
    {
      label: "Theming",
      url: "/get-started/theming/"
    },
    {
      label: "Accessibility",
      url: "/get-started/accessibility/"
    }
  ],
  designSystem: [
    {
      label: "Overview",
      url: "/design-system/"
    },
    {
      label: "Foundations",
      url: "/design-system/foundations/",
      children: [
        {
          label: "Color",
          url: "/design-system/foundations/color/"
        },
        {
          label: "Typography",
          url: "/design-system/foundations/typography/"
        },
        {
          label: "Spacing",
          url: "/design-system/foundations/spacing/"
        },
        {
          label: "Grid System",
          url: "/design-system/foundations/grid-system/"
        },
        {
          label: "Iconography",
          url: "/design-system/foundations/iconography/"
        },
        {
          label: "Motion",
          url: "/design-system/foundations/motion/"
        }
      ]
    },
    {
      label: "Guidelines",
      url: "/design-system/guidelines/",
      children: [
        {
          label: "Accessibility",
          url: "/design-system/guidelines/accessibility/"
        },
        {
          label: "Content",
          url: "/design-system/guidelines/content/"
        },
        {
          label: "Voice & Tone",
          url: "/design-system/guidelines/voice-and-tone/"
        }
      ]
    }
  ],
  components: [
    {
      label: "Overview",
      url: "/components/"
    },
    {
      label: "Layout",
      url: "/components/layout/",
      children: [
        {
          label: "Container",
          url: "/components/layout/container/"
        },
        {
          label: "Grid",
          url: "/components/layout/grid/"
        },
        {
          label: "Card",
          url: "/components/layout/card/"
        },
        {
          label: "Divider",
          url: "/components/layout/divider/"
        }
      ]
    },
    {
      label: "Inputs",
      url: "/components/inputs/",
      children: [
        {
          label: "Button",
          url: "/components/inputs/button/"
        },
        {
          label: "Text Field",
          url: "/components/inputs/text-field/"
        },
        {
          label: "Checkbox",
          url: "/components/inputs/checkbox/"
        },
        {
          label: "Radio",
          url: "/components/inputs/radio/"
        },
        {
          label: "Select",
          url: "/components/inputs/select/"
        }
      ]
    },
    {
      label: "Navigation",
      url: "/components/navigation/",
      children: [
        {
          label: "Navbar",
          url: "/components/navigation/navbar/"
        },
        {
          label: "Tabs",
          url: "/components/navigation/tabs/"
        },
        {
          label: "Breadcrumb",
          url: "/components/navigation/breadcrumb/"
        },
        {
          label: "Pagination",
          url: "/components/navigation/pagination/"
        }
      ]
    },
    {
      label: "Feedback",
      url: "/components/feedback/",
      children: [
        {
          label: "Alert",
          url: "/components/feedback/alert/"
        },
        {
          label: "Toast",
          url: "/components/feedback/toast/"
        },
        {
          label: "Modal",
          url: "/components/feedback/modal/"
        },
        {
          label: "Progress",
          url: "/components/feedback/progress/"
        }
      ]
    }
  ],
  resources: [
    {
      label: "Overview",
      url: "/resources/"
    },
    {
      label: "Design Tokens",
      url: "/resources/design-tokens/"
    },
    {
      label: "Templates",
      url: "/resources/templates/"
    },
    {
      label: "Downloads",
      url: "/resources/downloads/"
    },
    {
      label: "Figma Libraries",
      url: "/resources/figma/"
    },
    {
      label: "Examples",
      url: "/resources/examples/"
    }
  ]
};