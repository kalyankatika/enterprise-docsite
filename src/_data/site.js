/**
 * Site-wide configuration values
 */
module.exports = {
  name: "Enterprise Design System",
  shortName: "EDS",
  description: "Comprehensive documentation for the Enterprise Design System",
  url: "https://eds.example.com",
  buildYear: new Date().getFullYear(),
  copyright: "Enterprise Co.",
  author: {
    name: "Enterprise Design Team",
    email: "design@example.com"
  },
  environment: process.env.ELEVENTY_ENV || "development",
  version: "1.0.0" 
};