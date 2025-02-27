/**
 * Site-wide configuration values
 */
module.exports = {
  // Basic site information
  name: "Enterprise Design System",
  shortName: "EDS",
  description: "The unified design system and component library for building enterprise applications",
  url: "https://designsystem.example.com",
  
  // Branding
  primaryColor: "#368727", // Green
  
  // Organization information
  companyName: "Enterprise Corporation",
  copyrightYear: new Date().getFullYear(),
  
  // Current version
  version: "1.0.0",
  
  // Available versions (for version selector)
  versions: [
    {
      label: "v1.0.0 (Current)",
      url: "#",
      current: true
    },
    {
      label: "v0.9.0",
      url: "/archive/v0.9.0/"
    }
  ],
  
  // Social media profiles
  socialmedia: [
    {
      name: "GitHub",
      url: "https://github.com/example/enterprise-design-system"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/exampledesign"
    }
  ],
  
  // Feature flags
  features: {
    darkMode: true,
    search: true,
    versionSelector: true
  }
};