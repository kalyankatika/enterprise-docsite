---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Breadcrumbs
  key: web-breadcrumbs
  parent: web-components
  order: 1
  channel: web
description: Breadcrumbs help a user understand where the current page resides in the overall hierarchy of the site and enable the user to navigate back up through the content order.
aliases: Navigation, Path navigation, Location indicator
tags: web
name: FDSBreadcrumbs
status: Production
tokens: breadcrumbs
storybook:
  section: web-components
  name: breadcrumbs
  story: default
  inContext: in-context
  height: 400
resources:
  figmaNodeId: 29529-301870
  githubComponentPath: breadcrumbs
useTabs: true
---

<!-- SECTION: examples -->
## Examples

### Default

A basic breadcrumbs component with links to previous levels in the hierarchy.

<div class="example">
  <eds-breadcrumbs
    breadcrumbs-links='[
        {"text":"Home","href":"#1"},
        {"text":"Category","href":"#2"},
        {"text":"Paints","href":"#3"}
    ]'></eds-breadcrumbs>
</div>

```html
<eds-breadcrumbs
    breadcrumbs-links='[
        {"text":"Home","href":"#1"},
        {"text":"Category","href":"#2"},
        {"text":"Paints","href":"#3"}
    ]'></eds-breadcrumbs>
```
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/navigation/breadcrumbs/#visual-design-specifications) for this component.

### Interaction guidelines

- Breadcrumbs should be placed under the page header and above the page's h1.
- Breadcrumbs are intended to supplement other navigational components.
- For large viewports, breadcrumbs are listed horizontally under the masthead or main navigation of an experience and above the primary content/page title.
- For smaller viewports, view should display back arrow and next-to-last link.

### Usage guidelines

| Do | Don't |
| --- | --- |
| Use breadcrumbs to show hierarchical navigation. | Use breadcrumbs for non-hierarchical navigation |
| Provide clear, concise, sentence case labels for each breadcrumb item. | Over-complicate breadcrumbs with excessive visual elements. |
| Ensure that breadcrumbs are responsive and adaptable, if viewport size is a limitation, prioritize most recent page as a back link. | Cause number of breadcrumbs to wrap to a second line when viewed at 100% on desktop. |
| List the current page or active section as the last item in the breadcrumbs. | Create breadcrumbs that break or become unreadable on smaller screens. |
| Match labels in the navigation and the H1 of the page. | Use breadcrumbs to replace the main navigation on a page. |
| Make sure your breadcrumbs reflect the page/section titles for screen readers. | Use breadcrumbs to show progress through a process or transaction. |

### Placement

- Breadcrumbs should be placed under the page title.
- Breadcrumbs are listed horizontally under the masthead or main navigation of an experience and above the primary content/page title.

## Content guidance

### Usage

Breadcrumbs can be used:

- When the site or app has more than 2 layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.
- When the user is most likely to have landed on the page from an external source.

### Format

A breadcrumb trail is typically comprised of 4 main elements:

- Home: A link back to the home page of the experience.
- Page link: A link that navigates to another page in the hierarchy.
- Separator: A symbol (>) that visually separates each level in the trail, not interactive.
- Current page: The current page title, not interactive

The breadcrumbs component helps users understand and move between the multiple levels of a website.

- If you're using other navigational elements on the page, consider whether users need the additional support of breadcrumbs.
- By default, breadcrumbs are displayed with hierarchy in reading order.
- It's usual to see a progression from least specific (the highest-level page or least specific category) to most specific category.
- The highest-level page may be the homepage or the root of the current section.
- On mobile, replace the full breadcrumb trail with a link back to the previous page.
- Breadcrumbs truncate when there is not enough room to display all levels of the breadcrumb list or to manage relevance of the visible breadcrumb items in a deeply nested hierarchy.
- By default, truncation should occur at the end of the title.
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Importing

```javascript
import { edsBreadcrumbs } from '@xyz-ap153177/apex-kit';
```

## Attributes

| Attribute | Type | Validation | Default | Description |
| --------- | ---- | ---------- | ------- | ----------- |
| `breadcrumbs-links` | {"text": string, "href": string}[] | -- | -- | An array of text and hrefs that are used to render the breadcrumb links.<br><strong>Note:</strong> Be sure the value is valid JSON and not a JavaScript object. |

## Slots

The Breadcrumbs component does not use any slots.

## Events

The Breadcrumbs component does not emit any custom events.

## Methods

The Breadcrumbs component does not implement any public methods.

## CSS modifier classes

The Breadcrumbs component does not implement any CSS modifiers.

### Namespacing

#### Web Component
```html
<eds3-breadcrumbs>...</eds3-breadcrumbs>
```

#### HTML/CSS
```html
<nav class="eds3-breadcrumbs-root">...</nav>
```

### Import Reference

| Import | Required |
| ------ | -------- |
| `import { edsBreadcrumbs } from '@xyz-ap153177/apex-kit';` | Yes |
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Accessibility Considerations

- The provided aria-label defaults to "breadcrumbs" to identify the navigation region. It can be adjusted for the rare case where there are multiple breadcrumbs in the view, or for cases where a more specific label is appropriate.
- The current view is indicated as such by the aria-current attribute.

[Source: Accessibility at Enterprise](https://accessibility.xyz.com/archive/example/breadcrumbs/)

### ARIA Attributes

The Breadcrumbs component uses the following ARIA attributes:

- `role="navigation"`: Identifies the element as a navigation landmark
- `aria-label="breadcrumbs"`: Labels the navigation landmark
- `aria-current="page"`: Indicates the current page in the breadcrumb trail

### Keyboard Navigation

| Key | Function |
| --- | -------- |
| `Tab` | Moves focus to the next breadcrumb link |
| `Shift + Tab` | Moves focus to the previous breadcrumb link |
| `Enter` or `Space` | Activates the focused breadcrumb link |

### Screen Reader Support

- Breadcrumbs should be announced as a navigation region
- Each link in the breadcrumb trail should be announced with its text
- The current page should be announced as "current page"
- The separator character should not be announced to screen reader users
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Breadcrumbs

Breadcrumbs help a user understand where the current page resides in the overall hierarchy of the site and enable the user to navigate back up through the content order. Users can click the links to go back to previous pages.

## Overview

Breadcrumbs are an important navigational aid that shows the user's current location within a website's hierarchy and provides a way to navigate back to previous levels.
