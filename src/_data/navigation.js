/**
 * Navigation structure for EDS Documentation
 */
module.exports = {
  // Main navigation items shown in header
  main: [
    {
      label: "Getting Started",
      url: "/getting-started/"
    },
    {
      label: "Components",
      url: "/components/"
    },
    {
      label: "Design Tokens",
      url: "/design-tokens/"
    },
    {
      label: "Guidelines",
      url: "/guidelines/"
    },
    {
      label: "Resources",
      url: "/resources/"
    }
  ],
  
  // Footer navigation columns
  footer: {
    resources: [
      {
        label: "Getting Started",
        url: "/getting-started/"
      },
      {
        label: "Components",
        url: "/components/"
      },
      {
        label: "Design Tokens",
        url: "/design-tokens/"
      },
      {
        label: "Guidelines",
        url: "/guidelines/"
      }
    ],
    support: [
      {
        label: "FAQ",
        url: "/resources/faq/"
      },
      {
        label: "Changelog",
        url: "/resources/changelog/"
      },
      {
        label: "Report Issue",
        url: "https://github.com/enterprise/design-system/issues/new"
      }
    ],
    legal: [
      {
        label: "Privacy Policy",
        url: "/privacy-policy/"
      },
      {
        label: "Terms of Service",
        url: "/terms-of-service/"
      }
    ]
  }
};