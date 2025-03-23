---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Accordion
  key: web-accordion
  parent: web-components
  order: 1
  channel: web
description: Accordions are used to organize and present content in a collapsible and space-efficient manner.
aliases: Expand, Collapse, Expand/Collapse sections, Expand/Collapse panel
tags: web
name: FDSAccordion
status: Production
tokens: accordion
storybook:
  section: web-components
  name: accordion
  story: heading-and-subheading
  inContext: in-context
  height: 400
resources:
  figmaNodeId: 29529-301870
  githubComponentPath: accordion
akfw5: 
 - "expand-collapse"
tabsEnabled: true
tabContent:
  examples: |
    ## Examples

    ### Basic Accordion
    
    <div class="example">
      <eds-accordion>
        <eds-accordion-item heading="Section 1">
          This is the content for section 1.
        </eds-accordion-item>
        <eds-accordion-item heading="Section 2">
          This is the content for section 2.
        </eds-accordion-item>
        <eds-accordion-item heading="Section 3">
          This is the content for section 3.
        </eds-accordion-item>
      </eds-accordion>
    </div>

    ```html
    <eds-accordion>
      <eds-accordion-item heading="Section 1">
        This is the content for section 1.
      </eds-accordion-item>
      <eds-accordion-item heading="Section 2">
        This is the content for section 2.
      </eds-accordion-item>
      <eds-accordion-item heading="Section 3">
        This is the content for section 3.
      </eds-accordion-item>
    </eds-accordion>
    ```

    ### Accordion with Subheadings
    
    <div class="example">
      <eds-accordion>
        <eds-accordion-item 
          heading="Payment Information" 
          subheading="Update your payment details">
          Content about payment information.
        </eds-accordion-item>
        <eds-accordion-item 
          heading="Shipping Address" 
          subheading="Manage delivery locations">
          Content about shipping addresses.
        </eds-accordion-item>
      </eds-accordion>
    </div>

    ```html
    <eds-accordion>
      <eds-accordion-item 
        heading="Payment Information" 
        subheading="Update your payment details">
        Content about payment information.
      </eds-accordion-item>
      <eds-accordion-item 
        heading="Shipping Address" 
        subheading="Manage delivery locations">
        Content about shipping addresses.
      </eds-accordion-item>
    </eds-accordion>
    ```

  design: |
    ## Design Guidelines

    ### Interaction guidelines

    - An accordion has an icon to indicate to users the state and that it's interactive.
      - The 2 icons used are:
        - Expand: Chevron pointing right or plus symbols.
        - Collapse: Chevron pointing down or minus symbols.
    - Ideally, default the accordion to closed to limit clutter on the screen.
    - The content within an accordion should not be critical or actionable.

    | State      | Description |
    | ---------- | ----------- |
    | Selected   | When an accordion row is selected, it means that it is currently open. When it is in this state, the user should see more information in the now expanded area. This expanded area is sometimes called a pane or region. |
    | Unselected | When an accordion row is unselected, it means that it isn't currently open or expanded. |

    ### Usage guidelines

    | Do | Don't |
    | -- | ----- |
    | Create clear, concise, and descriptive accordion headings. | Allow only 1 section to be expanded at a time. |
    | Use to progressively disclose information that's required (legal or other), but not essential to the understanding of the page or screen. | Hide content users need to read, understand, or react to in an accordion. |
    | Display content in mobile or another experience when space is at a premium. | Use text like "show more" or "show less" as text for the heading. |
    | Simplify and reduce the amount of content needed if possible, so that an accordion isn't needed. Overload the accordion with too many sections. | Neglect keyboard navigation and focus management. |
    | | Place critical actions or information inside accordions, like CTAs or alerts, because they may not be opened. |
    | | Use an accordion if the user needs to switch quickly between sections. Tabs may be more appropriate.          |
    | | Use accordions for long paragraphs of text.                                                                   |

    ### Visual design specifications

    1. Control Icon
    2. Heading
    3. Sub-heading (optional)
    4. Expanded Content

  code: |
    ## Implementation

    ### Installation

    ```bash
    npm install @your-org/eds-components
    ```

    ### Basic Usage

    ```html
    <eds-accordion>
      <eds-accordion-item heading="Section Title">
        Content goes here
      </eds-accordion-item>
    </eds-accordion>
    ```

    ### Properties

    #### Accordion Component

    | Property | Type | Default | Description |
    | -------- | ---- | ------- | ----------- |
    | `multiple` | boolean | `true` | Allow multiple panels to be expanded simultaneously |
    | `icon-position` | string | `left` | Position of the expand/collapse icon (`left` or `right`) |

    #### Accordion Item Component

    | Property | Type | Default | Description |
    | -------- | ---- | ------- | ----------- |
    | `heading` | string | - | The heading text for the accordion item |
    | `subheading` | string | - | Optional subheading text |
    | `expanded` | boolean | `false` | Whether the panel is expanded by default |
    | `disabled` | boolean | `false` | Disables the accordion item |

    ### Events

    | Event | Description |
    | ----- | ----------- |
    | `expand` | Fired when an accordion item is expanded |
    | `collapse` | Fired when an accordion item is collapsed |

    ### Methods

    | Method | Description |
    | ------ | ----------- |
    | `expand()` | Expands the accordion item |
    | `collapse()` | Collapses the accordion item |
    | `toggle()` | Toggles the accordion item's expanded state |

  accessibility: |
    ## Accessibility Considerations

    ### ARIA Attributes

    The Accordion component uses the following ARIA attributes:

    - `aria-expanded`: Indicates whether the accordion section is expanded
    - `aria-controls`: Associates the button with the panel it controls
    - `aria-labelledby`: Associates the panel with its controlling button
    - `role="region"`: Applied to the content panel for proper screen reader announcement

    ### Keyboard Navigation

    | Key | Function |
    | --- | -------- |
    | `Tab` | Moves focus to the next focusable element |
    | `Shift + Tab` | Moves focus to the previous focusable element |
    | `Enter` or `Space` | When focus is on the accordion header, toggles the expansion state |
    | `Home` | When focus is on an accordion header, moves focus to the first accordion header |
    | `End` | When focus is on an accordion header, moves focus to the last accordion header |

    ### Screen Reader Support

    - Don't auto-close accordions without the user's explicit request. Open/Close all is ok, but don't close based on other interactions on the page.
    - Be mindful of page heading context when choosing a heading level for the trigger. The current default is heading level 3.
    - Wrap multiple stacked accordions in list semantics using HTML or ARIA attributes (coded example provided for reference).

    ### Content Considerations

    - Accordion headings should be as brief as possible while still being clear and descriptive.
    - In some instances, an optional subheading can add more context.
    - Within the accordion pane or drawer, keep content simple and concise.
---

<!-- This content will only be shown when tabs are not enabled -->
# Accordion Component

Accordions are used to organize and present content in a collapsible and space-efficient manner.

## Overview

### Interaction guidelines

- An accordion has an icon to indicate to users the state and that it's interactive.
  - The 2 icons used are:
    - Expand: Chevron pointing right or plus symbols.
    - Collapse: Chevron pointing down or minus symbols.
- Ideally, default the accordion to closed to limit clutter on the screen.
- The content within an accordion should not be critical or actionable.
