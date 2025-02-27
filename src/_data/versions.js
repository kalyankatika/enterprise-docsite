/**
 * Version information for EDS Documentation
 */
module.exports = {
  // Current version
  current: "2.0.0",
  
  // Version history
  history: [
    {
      version: "2.0.0",
      releaseDate: "2025-02-15",
      changelog: "/updates/2025-02-15-version-2-release/",
      highlights: [
        "Added new components (Data Table, Accordion, Slider, Stepper)",
        "Improved accessibility across all components",
        "Redesigned documentation site",
        "Performance optimizations"
      ]
    },
    {
      version: "1.5.2",
      releaseDate: "2024-12-10",
      changelog: "/updates/2024-12-10-version-1-5-2-release/",
      highlights: [
        "Bug fixes for form components",
        "Improved dark mode support",
        "Added new icon set"
      ]
    },
    {
      version: "1.5.0",
      releaseDate: "2024-10-05",
      changelog: "/updates/2024-10-05-version-1-5-0-release/",
      highlights: [
        "Added modal component",
        "Added toast notification system",
        "Improved responsive behavior for all components"
      ]
    },
    {
      version: "1.0.0",
      releaseDate: "2024-05-15",
      changelog: "/updates/2024-05-15-version-1-0-release/",
      highlights: [
        "Initial public release",
        "Core component library",
        "Documentation site launch"
      ]
    }
  ],
  
  // Supported versions (affecting documentation)
  supported: ["2.0", "1.5", "1.0"],
  
  // Version that is being sunset
  deprecating: "1.0",
  
  // End of life information
  eol: {
    "1.0": "2025-05-15",
    "1.5": "2026-01-01"
  }
};