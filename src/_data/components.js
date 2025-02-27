/**
 * Component metadata for the EDS Documentation
 */
module.exports = {
  layout: {
    container: {
      title: "Container",
      description: "A container centers your content horizontally and applies consistent padding",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "maxWidth",
          type: "string",
          default: "lg",
          description: "Maximum width of the container. Options: sm, md, lg, xl, full"
        },
        {
          name: "padding",
          type: "boolean",
          default: "true",
          description: "Whether to apply horizontal padding"
        },
        {
          name: "center",
          type: "boolean",
          default: "true",
          description: "Whether to center the container horizontally"
        }
      ]
    },
    grid: {
      title: "Grid",
      description: "A responsive grid system for creating flexible layouts",
      status: "stable",
      version: "4.2.0",
      props: [
        {
          name: "columns",
          type: "number",
          default: "12",
          description: "Number of columns in the grid"
        },
        {
          name: "gap",
          type: "string",
          default: "4",
          description: "Size of the gap between grid items. Uses spacing scale."
        },
        {
          name: "responsive",
          type: "boolean",
          default: "true",
          description: "Whether the grid should adapt to different screen sizes"
        }
      ]
    },
    card: {
      title: "Card",
      description: "A container for related content and actions",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "default",
          description: "Visual style of the card. Options: default, outlined, elevated"
        },
        {
          name: "padding",
          type: "string",
          default: "medium",
          description: "Amount of padding inside the card. Options: none, small, medium, large"
        },
        {
          name: "interactive",
          type: "boolean",
          default: "false",
          description: "Whether the card should have hover/focus styles"
        }
      ]
    },
    divider: {
      title: "Divider",
      description: "A horizontal or vertical line to separate content",
      status: "stable",
      version: "2.0.0",
      props: [
        {
          name: "orientation",
          type: "string",
          default: "horizontal",
          description: "Direction of the divider. Options: horizontal, vertical"
        },
        {
          name: "variant",
          type: "string",
          default: "solid",
          description: "Visual style of the divider. Options: solid, dashed, dotted"
        },
        {
          name: "spacing",
          type: "string",
          default: "medium",
          description: "Margin around the divider. Options: none, small, medium, large"
        }
      ]
    }
  },
  inputs: {
    button: {
      title: "Button",
      description: "Buttons allow users to take actions and make choices with a single tap",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "primary",
          description: "Visual style of the button. Options: primary, secondary, tertiary, danger, ghost"
        },
        {
          name: "size",
          type: "string",
          default: "medium",
          description: "Size of the button. Options: small, medium, large"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the button is disabled"
        },
        {
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Whether to show a loading indicator"
        }
      ]
    },
    textField: {
      title: "Text Field",
      description: "Text fields allow users to enter text into a UI",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "outlined",
          description: "Visual style of the field. Options: outlined, filled, underlined"
        },
        {
          name: "size",
          type: "string",
          default: "medium",
          description: "Size of the field. Options: small, medium, large"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the field is disabled"
        },
        {
          name: "error",
          type: "boolean",
          default: "false",
          description: "Whether to show an error state"
        },
        {
          name: "helperText",
          type: "string",
          description: "Helper text displayed below the field"
        }
      ]
    },
    checkbox: {
      title: "Checkbox",
      description: "Checkboxes allow users to select one or more items from a set",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "checked",
          type: "boolean",
          default: "false",
          description: "Whether the checkbox is checked"
        },
        {
          name: "indeterminate",
          type: "boolean",
          default: "false",
          description: "Whether the checkbox is in an indeterminate state"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the checkbox is disabled"
        },
        {
          name: "label",
          type: "string",
          description: "Label for the checkbox"
        }
      ]
    },
    radio: {
      title: "Radio",
      description: "Radio buttons allow users to select one option from a set",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "checked",
          type: "boolean",
          default: "false",
          description: "Whether the radio is checked"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the radio is disabled"
        },
        {
          name: "name",
          type: "string",
          description: "Name attribute for the input, used for grouping radio buttons"
        },
        {
          name: "label",
          type: "string",
          description: "Label for the radio button"
        }
      ]
    },
    select: {
      title: "Select",
      description: "Select components allow users to select from a list of options",
      status: "stable",
      version: "3.5.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "outlined",
          description: "Visual style of the select. Options: outlined, filled, underlined"
        },
        {
          name: "size",
          type: "string",
          default: "medium",
          description: "Size of the select. Options: small, medium, large"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Whether the select is disabled"
        },
        {
          name: "error",
          type: "boolean",
          default: "false",
          description: "Whether to show an error state"
        },
        {
          name: "multiple",
          type: "boolean",
          default: "false",
          description: "Whether multiple options can be selected"
        }
      ]
    }
  },
  navigation: {
    navbar: {
      title: "Navbar",
      description: "A navigation bar that displays at the top of the screen",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "primary",
          description: "Visual style of the navbar. Options: primary, secondary, transparent"
        },
        {
          name: "fixed",
          type: "boolean",
          default: "false",
          description: "Whether the navbar should be fixed at the top of the viewport"
        },
        {
          name: "expandBreakpoint",
          type: "string",
          default: "md",
          description: "Breakpoint at which the navbar expands from mobile to desktop view"
        }
      ]
    },
    tabs: {
      title: "Tabs",
      description: "Tabs organize content into different views which users can switch between",
      status: "stable",
      version: "2.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "default",
          description: "Visual style of the tabs. Options: default, underlined, pills"
        },
        {
          name: "alignment",
          type: "string",
          default: "start",
          description: "Horizontal alignment of the tabs. Options: start, center, end, justified"
        },
        {
          name: "size",
          type: "string",
          default: "medium",
          description: "Size of the tabs. Options: small, medium, large"
        }
      ]
    },
    breadcrumb: {
      title: "Breadcrumb",
      description: "Breadcrumbs indicate the current page's location within a navigational hierarchy",
      status: "stable",
      version: "2.5.0",
      props: [
        {
          name: "separator",
          type: "string | ReactNode",
          default: "/",
          description: "Character or element used to separate breadcrumb items"
        },
        {
          name: "maxItems",
          type: "number",
          description: "Maximum number of breadcrumb items to show before collapsing"
        }
      ]
    },
    pagination: {
      title: "Pagination",
      description: "Pagination allows users to navigate between pages of content",
      status: "stable",
      version: "3.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "default",
          description: "Visual style of pagination. Options: default, simple, rounded"
        },
        {
          name: "size",
          type: "string",
          default: "medium",
          description: "Size of pagination items. Options: small, medium, large"
        },
        {
          name: "showFirstLast",
          type: "boolean",
          default: "true",
          description: "Whether to show first/last page buttons"
        },
        {
          name: "siblingCount",
          type: "number",
          default: "1",
          description: "Number of sibling pages shown on each side of current page"
        }
      ]
    }
  },
  feedback: {
    alert: {
      title: "Alert",
      description: "Alerts display short, important messages that attract the user's attention",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "info",
          description: "Type of alert. Options: info, success, warning, error"
        },
        {
          name: "closable",
          type: "boolean",
          default: "false",
          description: "Whether the alert can be dismissed by the user"
        },
        {
          name: "icon",
          type: "ReactNode",
          description: "Custom icon to display with the alert"
        }
      ]
    },
    toast: {
      title: "Toast",
      description: "Toasts provide brief notifications that appear temporarily",
      status: "stable",
      version: "4.1.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "default",
          description: "Type of toast. Options: default, success, warning, error"
        },
        {
          name: "position",
          type: "string",
          default: "bottom-right",
          description: "Position of the toast. Options: top-right, top-center, top-left, bottom-right, bottom-center, bottom-left"
        },
        {
          name: "duration",
          type: "number",
          default: "5000",
          description: "Duration in milliseconds to show the toast before automatically dismissing"
        }
      ]
    },
    modal: {
      title: "Modal",
      description: "Modals display content that requires user interaction in a layer above the main interface",
      status: "stable",
      version: "1.0.0",
      props: [
        {
          name: "size",
          type: "string",
          default: "medium",
          description: "Size of the modal. Options: small, medium, large, full"
        },
        {
          name: "closeOnEscape",
          type: "boolean",
          default: "true",
          description: "Whether pressing the Escape key closes the modal"
        },
        {
          name: "closeOnOverlayClick",
          type: "boolean",
          default: "true",
          description: "Whether clicking the overlay closes the modal"
        },
        {
          name: "centered",
          type: "boolean",
          default: "true",
          description: "Whether the modal is vertically centered in the viewport"
        }
      ]
    },
    progress: {
      title: "Progress",
      description: "Progress indicators display the status of ongoing processes",
      status: "stable",
      version: "2.0.0",
      props: [
        {
          name: "variant",
          type: "string",
          default: "bar",
          description: "Type of progress indicator. Options: bar, circular, loader"
        },
        {
          name: "value",
          type: "number",
          description: "Current progress value (0-100)"
        },
        {
          name: "indeterminate",
          type: "boolean",
          default: "false",
          description: "Whether to show an indeterminate progress animation"
        },
        {
          name: "size",
          type: "string",
          default: "medium",
          description: "Size of the progress indicator. Options: small, medium, large"
        }
      ]
    }
  }
};