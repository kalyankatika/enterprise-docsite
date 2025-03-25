---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Menu
  key: web-menu
  parent: web-components
  order: 1
  channel: web
description: Menu is a navigational component that provides a trigger button and drop-down with a list of given links.
aliases: Dropdown, Navigation menu, Action menu
tags: web
name: FDSMenu
status: Production
tokens: menu
useTabs: true
---

<!-- SECTION: examples -->
## Basic usage

At a minimum, the component takes a list of links that follows the [ListItemObject](/components/list-group/list-group.html?tab=code#listitemobject) API from the [List group](/components/list-group/list-group.html) component.

<div class="example">
  <eds-menu eds-menu-list-items='
      [
          {
              "text": "Mutual funds",
              "href": "#"
          },
          {
              "text": "ETFs",
              "href": "#"
          },
          {
              "text": "Bonds",
              "href": "#"
          },
          {
              "text": "Active Trader Pro",
              "href": "#",
              "disabled": true,
              "newWindow": true
          }
      ]
  '></eds-menu>
</div>

```html
<eds-menu eds-menu-list-items='
    [
        {
            "text": "Mutual funds",
            "href": "#"
        },
        {
            "text": "ETFs",
            "href": "#"
        },
        {
            "text": "Bonds",
            "href": "#"
        },
        {
            "text": "Active Trader Pro",
            "href": "#",
            "disabled": true,
            "newWindow": true
        }
    ]
'></eds-menu>
```

## Positioning

The menu component can be aligned to the left of the trigger button or the right of the trigger button to align with the design of the consuming application.

<div class="example">
  <eds-menu eds-position="right" eds-menu-list-items='
      [
          {
              "text": "Mutual funds",
              "href": "#"
          },
          {
              "text": "ETFs",
              "href": "#"
          },
          {
              "text": "Bonds",
              "href": "#"
          },
          {
              "text": "Active Trader Pro",
              "href": "#",
              "disabled": true,
              "newWindow": true
          }
      ]
  '></eds-menu>
</div>

```html
<eds-menu eds-position="right" eds-menu-list-items='
    [
        {
            "text": "Mutual funds",
            "href": "#"
        },
        {
            "text": "ETFs",
            "href": "#"
        },
        {
            "text": "Bonds",
            "href": "#"
        },
        {
            "text": "Active Trader Pro",
            "href": "#",
            "disabled": true,
            "newWindow": true
        }
    ]
'></eds-menu>
```

## Configurable trigger button

The trigger button can be configured with having an icon on either side of the text, an icon only, or custom text.
When using the icon only variant, the text is used for the accessible label used by screen reader technologies.

<div class="example">
  <eds-menu eds-button-icon-left="menu" eds-menu-list-items='
      [
          {
              "text": "Mutual funds",
              "href": "#"
          },
          {
              "text": "Active Trader Pro",
              "href": "#",
              "disabled": true,
              "newWindow": true
          }
      ]
  ' eds-button-text="Left icon"></eds-menu>
</div>

<div class="example">
  <eds-menu eds-button-icon-right="menu" eds-menu-list-items='
      [
          {
              "text": "Mutual funds",
              "href": "#"
          },
          {
              "text": "Active Trader Pro",
              "href": "#",
              "disabled": true,
              "newWindow": true
          }
      ]
  ' eds-button-text="Right icon"></eds-menu>
</div>

<div class="example">
  <eds-menu eds-button-icon-right="nav__overflow-vertical" eds-button-icon-only eds-menu-list-items='
      [
          {
              "text": "Mutual funds",
              "href": "#"
          },
          {
              "text": "Active Trader Pro",
              "href": "#",
              "disabled": true,
              "newWindow": true
          }
      ]
  '></eds-menu>
</div>

<div class="example">
  <eds-menu eds-button-text="Manage" eds-button-icon-right="nav__overflow-vertical" eds-menu-list-items='
      [
          {
              "text": "Mutual funds",
              "href": "#"
          },
          {
              "text": "Active Trader Pro",
              "href": "#",
              "disabled": true,
              "newWindow": true
          }
      ]
  '></eds-menu>
</div>

```code-tabs
<!-- Icon left -->
<eds-menu eds-button-icon-left="menu" eds-menu-list-items='
    [
        {
            "text": "Mutual funds",
            "href": "#"
        },
        {
            "text": "Active Trader Pro",
            "href": "#",
            "disabled": true,
            "newWindow": true
        }
    ]
' eds-button-text="Left icon"></eds-menu>
<!-- tab-separator -->
<!-- Icon right -->
<eds-menu eds-button-icon-right="menu" eds-menu-list-items='
    [
        {
            "text": "Mutual funds",
            "href": "#"
        },
        {
            "text": "Active Trader Pro",
            "href": "#",
            "disabled": true,
            "newWindow": true
        }
    ]
' eds-button-text="Right icon"></eds-menu>

<!-- Icon only -->
<eds-menu eds-button-icon-right="nav__overflow-vertical" eds-button-icon-only eds-menu-list-items='
    [
        {
            "text": "Mutual funds",
            "href": "#"
        },
        {
            "text": "Active Trader Pro",
            "href": "#",
            "disabled": true,
            "newWindow": true
        }
    ]
'></eds-menu>

<!-- Custom text -->
<eds-menu eds-button-text="Manage" eds-button-icon-right="nav__overflow-vertical" eds-menu-list-items='
    [
        {
            "text": "Mutual funds",
            "href": "#"
        },
        {
            "text": "Active Trader Pro",
            "href": "#",
            "disabled": true,
            "newWindow": true
        }
    ]
'></eds-menu>
```
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/content/menu/#visual-design-specifications) for this component.

## Interaction guidelines

Clicking the trigger button will toggle the menu open and closed. When the menu is open, clicking outside of the menu or an item within the menu will automatically close the menu.

### Usage guidelines

| Do | Don't |
| -- | ----- |
| Use the `eds-position` attribute to set the alignment of the drop-down. | Manipulate the positioning of the menu with custom CSS. |
| Only open the menu downward. | Change the direction the menu will open with custom CSS. |
| Use the [ListItemObject](/components/list-group/list-group.html?tab=code#listitemobject) API from the [List group](/components/list-group/list-group.html) component for defining menu options. | Inject other HTML element or components into the menu. |
| Use in the built-in trigger button and the given configuration options | Hide or override the built-in trigger button for a different trigger. |

## Content guidance

### Usage

The menu uses the ListItemObject API to add links to the menu.

### Format

- The menu trigger button can be aligned by the consuming application with the positioning set to match the position of the associated menu.
- The component has a max width of 512px on large screens and 100% on small screens.
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Attributes

| Attribute               | Type             | Validation                                                                                      | Default   | Description |
| ----------------------- | ---------------- | ----------------------------------------------------------------------------------------------- | --------- | ----------- |
| `eds-button-icon-left`  | string           | --                                                                                              | --        | An icon to display on the left side of the trigger button. |
| `eds-button-icon-only`  | boolean          | Anything other than empty string, `true`, or `eds-button-icon-only` will be treated as `false.` | `false`   | Whether or not to show the trigger button as icon only. |
| `eds-button-icon-right` | string           | --                                                                                              | --        | An icon to display on the right side of the trigger button |
| `eds-button-text`       | string           | --                                                                                              | `Menu`    | The text to display on the trigger button or used for accessibility labelling when `eds-button-icon-only` is `true`. |
| `eds-button-variant`    | string           | `primary`, `secondary`, `tertiary`                                                              | `primary` | Button variant type to use for the trigger button. |
| `eds-menu-list-items`   | ListItemObject[] | --                                                                                              | []        | List of menu items to render in the menu. The [ListItemObject](/components/list-group/list-group.html?tab=code#listitemobject) API from the [List group](/components/list-group/list-group.html) is used for the structure of the menu items. |
| `eds-open`              | boolean          | Anything other than empty string, `true`, or `eds-open` will be treated as `false.`             | `false`   | Whether or not the menu is open. |
| `eds-position`          | string           | `left`, `right`                                                                                 | `left`    | Position for placing the menu aligned to the left or right of the trigger button. |

### Slots

The Menu component does not have any slots.

### Events

The Menu component does not dispatch any events.

### Methods

The Menu component does not implement any public methods.

### CSS modifier classes

The Menu component does not expose any CSS modifier classes.

### Namespacing

#### Web Component
```html
<eds3-menu>Option A</eds3-menu>
```

### Import Reference

| Import                                                                      | Required |
| --------------------------------------------------------------------------- | --- |
| `import { edsButton } from '@xyz-ap153177/apex-kit';`                       | Yes |
| `import { edsIcon } from '@xyz-ap153177/apex-kit';`                         | Yes |
| `import { edsLink } from '@xyz-ap153177/apex-kit';`                         | Yes |
| `import { edsListGroup } from '@xyz-ap153177/apex-kit';`                    | Yes |
| `import { edsMenu } from '@xyz-ap153177/apex-kit';`                         | Yes |
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Accessibility Considerations

- Ensure that the component's links are not altered by the consuming application so that they conform to accessibility standards
- Allow the component to manage focus when opening/closing the menu to allow assistive technologies to be in the right place based on user interactions

### ARIA Attributes

The Menu component uses the following ARIA attributes:

- `aria-haspopup="true"`: Applied to the button to indicate it controls a menu
- `aria-expanded`: Indicates whether the menu is currently expanded/shown
- `role="menu"`: Applied to the menu container
- `role="menuitem"`: Applied to each menu item

### Keyboard Navigation

| Key | Function |
| --- | -------- |
| `Tab` | Moves focus to the menu button |
| `Enter` or `Space` | When focus is on the button, opens or closes the menu |
| `Escape` | Closes the menu if it is open |
| `Up/Down Arrows` | When menu is open, navigates between menu items |
| `Enter` | When focus is on a menu item, activates the item (follows the link) |

### Screen Reader Support

- Menu button should announce that it controls a popup menu
- When opened, menu items should be announced properly
- When menu is closed, focus should return to the button
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Menu

Menu is a navigational component that provides a trigger button and drop-down with a list of given links.
