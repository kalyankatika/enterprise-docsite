module.exports = {
  title: "Enterprise Design System Documentation",
  description: "Comprehensive documentation for the Enterprise Design System",
  url: "https://design.firm.com",
  author: "EDS Team",
  buildTime: new Date(),
  primaryColor: "#368727",
  defaultVersion: "latest",
  environment: process.env.ELEVENTY_ENV || "development",
  searchEnabled: true,
  themeEnabled: true,
  versioningEnabled: true,
  navigation: {
    top: [
      { label: "Home", url: "/" },
      { label: "Design System", url: "/design-system/" },
      { label: "Components", url: "/components/" },
      { label: "Resources", url: "/resources/" },
      { label: "Support", url: "/support/" }
    ]
  },
  footer: {
    links: [
      { label: "GitHub", url: "https://github.com/enterprise-design-system" },
      { label: "Contact Us", url: "/support/contact/" },
      { label: "Legal", url: "/legal/" }
    ],
    copyright: `© ${new Date().getFullYear()} Enterprise Design System. All rights reserved.`
  }
};
