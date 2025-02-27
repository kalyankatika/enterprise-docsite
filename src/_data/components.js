/**
 * Component metadata for the EDS Documentation
 */
module.exports = {
  // List of component categories
  categories: [
    {
      id: "layout",
      title: "Layout",
      description: "Components for layout and structure"
    },
    {
      id: "navigation",
      title: "Navigation",
      description: "Components for site navigation and wayfinding"
    },
    {
      id: "feedback",
      title: "Feedback",
      description: "Components for providing user feedback and information"
    },
    {
      id: "inputs",
      title: "Inputs",
      description: "Form controls and input components"
    },
    {
      id: "data",
      title: "Data",
      description: "Components for displaying and managing data"
    },
    {
      id: "content",
      title: "Content",
      description: "Components for displaying content"
    }
  ],
  
  // Status definitions
  statuses: {
    stable: {
      name: "Stable",
      description: "This component is stable and ready for production use"
    },
    beta: {
      name: "Beta",
      description: "This component is in beta and may undergo changes"
    },
    experimental: {
      name: "Experimental",
      description: "This component is experimental and subject to major changes"
    },
    deprecated: {
      name: "Deprecated",
      description: "This component is deprecated and will be removed in a future release"
    }
  }
};