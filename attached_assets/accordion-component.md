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
---

### Interaction guidelines

- An accordion has an icon to indicate to users the state and that it’s interactive.
  - The 2 icons used are:
    - Expand: Chevron pointing right or plus symbols.
    - Collapse: Chevron pointing down or minus symbols.
- Ideally, default the accordion to closed to limit clutter on the screen.
- The content within an accordion should not be critical or actionable.


| State      | Description |
| ---------- | ----------- |
| Selected   | When an accordion row is selected, it means that it is currently open. When it is in this state, the user should see more information in the now expanded area. This expanded area is sometimes called a pane or region. |
| Unselected | When an accordion row is unselected, it means that it isn’t currently open or expanded. |

### Usage guidelines

| Do | Don't |
| -- | ----- |
| Create clear, concise, and descriptive accordion headings. | Allow only 1 section to be expanded at a time. |
| Use to progressively disclose information that’s required (legal or other), but not essential to the understanding of the page or screen. | Hide content users need to read, understand, or react to in an accordion. |
| Display content in mobile or another experience when space is at a premium. | Use text like "show more" or "show less" as text for the heading. |
| Simplify and reduce the amount of content needed if possible, so that an accordion isn’t needed. Overload the accordion with too many sections. | Neglect keyboard navigation and focus management. |
| | Place critical actions or information inside accordions, like CTAs or alerts, because they may not be opened. |
| | Use an accordion if the user needs to switch quickly between sections. Tabs may be more appropriate.          |
| | Use accordions for long paragraphs of text.                                                                   |

### Accessibility considerations

- Don't auto-close accordions without the user's explicit request. Open/Close all is ok, but don't close based on other interactions on the page.
- Be mindful of page heading context when choosing a heading level for the trigger. The current default is heading level 3.
- Wrap multiple stacked accordions in list semantics using HTML or ARIA attributes (coded example provided for reference).

### Content guidance

#### Usage

- Accordions begin by default in the collapsed state with all content panels closed.
- Starting in a collapsed state gives the user a high-level overview of the available information in each section by heading.
- An accordion reduces cognitive load by letting the user scan headings for important information.
- If the user needs that information, they can open and reveal it.
- An accordion must always expand information below the main heading.

#### Format

- Accordion headings should be as brief as possible while still being clear and descriptive.
- In some instances, an optional subheading can add more context.
- Within the accordion pane or drawer, keep content simple and concise.
- Include links if needed, but they must not be required actions. For example, a link could be used in an answer to a frequently asked question (FAQ).
- Content may be split into paragraphs. However, simplify and reduce the amount of content if possible, so that an accordion isn’t needed.
- If content is longer than the viewport, then the accordion should vertically scroll.

## Design

### Visual design specifications


1. Control Icon
2. Heading
3. Sub-heading (optional)
4. Expanded Content
