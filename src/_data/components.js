/**
 * Component metadata for the EDS Documentation
 */
module.exports = {
  // INPUTS
  button: {
    displayName: "Button",
    category: "inputs",
    description: "Buttons allow users to perform actions and make choices.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A456",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must have sufficient color contrast",
        "Should have visual focus indicator",
        "Should have appropriate text labels for screen readers"
      ]
    }
  },
  checkbox: {
    displayName: "Checkbox",
    category: "inputs",
    description: "Checkboxes allow users to select one or more items from a list, or toggle a single option on or off.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A457",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must be keyboard navigable",
        "Must include proper label association",
        "Should maintain visible focus state"
      ]
    }
  },
  form: {
    displayName: "Form",
    category: "inputs",
    description: "Forms allow users to enter data for submission.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A459",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "All form controls must have labels",
        "Error messages must be clearly associated with form fields",
        "Required fields should be clearly indicated"
      ]
    }
  },
  radio: {
    displayName: "Radio Button",
    category: "inputs",
    description: "Radio buttons allow users to select a single option from a list of choices.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A460",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must be keyboard navigable",
        "Must include proper label association",
        "Radio buttons in a group must share the same name attribute"
      ]
    }
  },
  select: {
    displayName: "Select",
    category: "inputs",
    description: "Select components allow users to choose a single option from a dropdown menu.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A461",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must be keyboard operable",
        "Must have proper label association",
        "Should provide visual indication when focused"
      ]
    }
  },
  textField: {
    displayName: "Text Field",
    category: "inputs",
    description: "Text fields allow users to enter and edit text.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A462",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must have visible label associated with the input",
        "Should have visible focus state",
        "Error messages must be programmatically associated with the field"
      ]
    }
  },
  toggle: {
    displayName: "Toggle",
    category: "inputs",
    description: "Toggles allow users to switch between two states, usually on and off.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A463",
    status: "stable",
    versions: ["1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must be keyboard operable",
        "Must have proper label that describes the state",
        "Must communicate current state to assistive technologies"
      ]
    }
  },

  // LAYOUT
  card: {
    displayName: "Card",
    category: "layout",
    description: "Cards are containers that organize related content and actions.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A464",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Interactive elements within cards must be keyboard accessible",
        "Should use proper heading hierarchy if applicable",
        "Should have sufficient color contrast"
      ]
    }
  },
  container: {
    displayName: "Container",
    category: "layout",
    description: "Containers provide a centered, max-width wrapper for page content.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A465",
    status: "stable",
    versions: ["0.9.0", "1.0.0"]
  },
  divider: {
    displayName: "Divider",
    category: "layout",
    description: "Dividers are thin lines that group content in lists and layouts.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A466",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Should have sufficient color contrast",
        "Should be used for visual separation only, not structural separation"
      ]
    }
  },
  grid: {
    displayName: "Grid",
    category: "layout",
    description: "Grids help organize content into consistent columns and rows.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A467",
    status: "stable",
    versions: ["0.9.0", "1.0.0"]
  },
  stack: {
    displayName: "Stack",
    category: "layout",
    description: "Stacks provide a way to handle spacing between elements in vertical or horizontal arrangements.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A468",
    status: "stable",
    versions: ["1.0.0"]
  },

  // NAVIGATION
  breadcrumbs: {
    displayName: "Breadcrumbs",
    category: "navigation",
    description: "Breadcrumbs indicate the current page's location within a navigational hierarchy.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A469",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Should use an ordered list structure",
        "Should use proper separators between links",
        "Current page should be indicated programmatically"
      ]
    }
  },
  drawer: {
    displayName: "Drawer",
    category: "navigation",
    description: "Drawers provide side navigation or supplementary content that slides in from the edge of the screen.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A470",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must be keyboard accessible",
        "Should trap focus when open",
        "Must have proper ARIA roles and states",
        "Should be dismissible via Escape key"
      ]
    }
  },
  navbar: {
    displayName: "Navbar",
    category: "navigation",
    description: "Navbars provide consistent navigation across different pages.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A471",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Should use proper semantic markup (nav element)",
        "Should indicate current page programmatically",
        "Must be keyboard navigable",
        "Mobile menu toggle must be accessible"
      ]
    }
  },
  pagination: {
    displayName: "Pagination",
    category: "navigation",
    description: "Pagination controls allow users to navigate between pages of content.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A472",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Should use proper list structure",
        "Current page should be programmatically indicated",
        "Must be keyboard navigable",
        "Should have sufficiently sized click targets"
      ]
    }
  },
  tabs: {
    displayName: "Tabs",
    category: "navigation",
    description: "Tabs organize content into separate views which can be accessed without leaving the page.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A473",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must implement proper ARIA roles (tablist, tab, tabpanel)",
        "Must be keyboard navigable with arrow keys",
        "Must programmatically indicate active tab",
        "Tab panels must have proper association with their tabs"
      ]
    }
  },

  // FEEDBACK
  alert: {
    displayName: "Alert",
    category: "feedback",
    description: "Alerts display short, important messages attracting the user's attention without interrupting their task.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A474",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Should use proper role attribute",
        "Must have sufficient color contrast",
        "Should use more than just color to indicate meaning",
        "Dismissible alerts must be keyboard accessible"
      ]
    }
  },
  dialog: {
    displayName: "Dialog",
    category: "feedback",
    description: "Dialogs provide information that requires acknowledgment or gather information from users.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A475",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must trap focus within when opened",
        "Should close on Escape key press",
        "Must use proper ARIA roles and attributes",
        "Should return focus to triggering element when closed",
        "Should have descriptive title"
      ]
    }
  },
  progress: {
    displayName: "Progress",
    category: "feedback",
    description: "Progress indicators show the completion status of a task or process.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A476",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must use appropriate ARIA roles",
        "Should provide text alternative for screen readers",
        "Must have sufficient color contrast",
        "Should not rely solely on color to convey information"
      ]
    }
  },
  skeleton: {
    displayName: "Skeleton",
    category: "feedback",
    description: "Skeleton screens provide a low-fidelity representation of content before it's loaded.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A477",
    status: "stable",
    versions: ["1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Should have appropriate ARIA live regions or status",
        "Should have sufficient color contrast",
        "Should be announced appropriately to screen readers"
      ]
    }
  },
  toast: {
    displayName: "Toast",
    category: "feedback",
    description: "Toasts provide brief messages about app processes at the bottom or top of the screen.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A478",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Should use ARIA live regions",
        "Must have sufficient color contrast",
        "Dismissible toasts must be keyboard accessible",
        "Should have appropriate timeout for reading content"
      ]
    }
  },
  tooltip: {
    displayName: "Tooltip",
    category: "feedback",
    description: "Tooltips display informative text when users hover over or focus on an element.",
    figmaUrl: "https://www.figma.com/file/example/design-system?node-id=123%3A479",
    status: "stable",
    versions: ["0.9.0", "1.0.0"],
    a11y: {
      wcag: "AA",
      requirements: [
        "Must be available on focus as well as hover",
        "Should use proper ARIA attributes",
        "Should have sufficient color contrast",
        "Should be dismissible via Escape key"
      ]
    }
  }
};