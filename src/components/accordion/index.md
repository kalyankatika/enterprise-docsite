---
title: Accordion
layout: component
description: Accordions are lightweight containers that can function independently or be integrated into a single-page section, interacting with the expansion controls and other adjacent content.
activeTab: design
sections:
  anatomy: |
    An accordion consists of a container, header buttons, expanded/collapsed indicators, and collapsible panels. The header controls the visibility of its associated panel.
    
    ![Accordion anatomy](https://via.placeholder.com/600x200/e0e0e0/333333?text=Accordion+Anatomy+Diagram)
    
    1. **Accordion container**: Wrapper that groups all accordion items
    2. **Header button**: Interactive element that toggles the visibility of its panel
    3. **Expansion indicator**: Icon that visually indicates whether a panel is expanded or collapsed
    4. **Panel**: Content container that can be shown or hidden
    
  considerations: |
    ## When to use the accordion component
    - If you need to break down complex content into manageable sections
    - When screen space is limited and you need to prioritize information
    - For FAQ sections where users want to quickly scan questions
    - When information should be revealed progressively to avoid overwhelming users
    
    ## When to use something else
    - If users need to see all content at once for comparison
    - When content is brief enough to display without hiding
    - If most users will need all the information rather than just specific sections
    - When hiding content will significantly disrupt the user's workflow

  usage: |
    An accordion can be used to create the page and lay out the content in a way that follows good accessibility and helps the users:
    - Use clear, descriptive headers that communicate the panel content
    - Keep accordion content concise
    - Consider using icons alongside text in headers
    - Group related information within each panel
    - Position accordions so they're easy to discover
    - Limit nesting of accordions to avoid complexity
    - Ensure sufficient contrast between expanded and collapsed states
    - Consider allowing multiple panels to be open simultaneously when appropriate
    
  behavior: |
    ## Expanding
    When a user clicks or taps the accordion header, the panel toggles between expanded and collapsed states. All other components in the accordion remain in their current state.
    
    When clicking on a collapsed header:
    - The panel expands to reveal its content
    - The expansion indicator rotates to indicate the expanded state
    - The `aria-expanded` attribute changes to `true`
    - The panel's `hidden` attribute is removed
    
    When clicking on an expanded header:
    - The panel collapses to hide its content
    - The expansion indicator rotates back to indicate the collapsed state
    - The `aria-expanded` attribute changes to `false`
    - The panel receives the `hidden` attribute

  best-practices: |
    ## Content
    - Keep header text short, descriptive, and clearly indicating the content
    - Avoid long content that would create excessive scrolling
    - Structure content with headings where appropriate
    - Use consistent content patterns across accordion items
    - Consider progressive disclosure of complex information
    - Include visual indicators or previews when helpful
    - Ensure proper content hierarchy within panels
    - Limit embedded interactive elements to avoid confusion

  specifications: |
    ## Accordion title
    - Font: System UI bold
    - Font size: 16px
    - Line height: 24px
    
    ## Accordion content
    - Font: System UI regular
    - Font size: 14px
    - Line height: 20px
    
    ## Padding
    - Header: 16px
    - Content: 0 16px 16px
    
    ## Border
    - 1px solid border
    - Border radius: 4px
    
    ## Color
    - Border: #E0E0E0
    - Background: White
    - Header text: #333333
    - Content text: #666666
    - Hover state: #F5F5F5
---
