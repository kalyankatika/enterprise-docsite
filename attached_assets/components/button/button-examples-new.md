---
layout: layouts/component.njk
title: Button Examples
description: Examples of the Button component in various contexts
---
# Button - Examples

A Button provides a way of initiating an action or task.

## Primary action

- Primary actions signify the most important thing the user needs to do to begin or advance the completion of a task.
- Limit the use of primary actions to one per page or layer.
- See the [Visual style](/components/button/button.html?tab=design#visual-style) section for usage information about "disabled" Buttons.



### Default
<div class="apex-kit-fds-theme">
  <eds-button>Primary action</eds-button>
</div>

```html
<eds-button>Primary action</eds-button>
```

## Secondary action

- Use instead of a link for in-page actions.
- See the [Visual style](/components/button/button.html?tab=design#visual-style) section for usage information about "disabled" Buttons.

### Default
<div class="apex-kit-fds-theme">
  <eds-button eds-variant="secondary">Secondary action</eds-button>
</div>

```html
<eds-button eds-variant="secondary">Secondary action</eds-button>
```

## Tertiary action

- Use instead of a link for in-page actions.
- See the [Visual style](/components/button/button.html?tab=design#visual-style) section for usage information about "disabled" Buttons.

### Default
<div class="apex-kit-fds-theme">
<eds-button eds-variant="tertiary">Tertiary action</eds-button>
</div>

```html
<eds-button eds-variant="tertiary">Tertiary action</eds-button>
```

## Invitation

> **Deprecation warning**
>
> Please note that the invitation button variants will no longer be supported after Apex Kit for Web v5.
> Any instances of the invitation button in an application should be updated to use one of the variants above before upgrading to the next major version.

- Only use "invitation" actions to communicate "account opening" or benefits "enrollment."
- Only the "large" size is available so that the Button meets accessibility color contrast specifications.
- See the [Visual style](/components/button/button.html?tab=design#visual-style) section for usage information about "invitation" and "disabled" Buttons.

### Default
<div class="apex-kit-fds-theme">
<eds-button eds-variant="invitation" eds-size="large">Invitation</eds-button>
</div>

```html
<eds-button eds-variant="invitation" eds-size="large">Invitation</eds-button>
```

## With icons

Use an icon to add additional context.

### Left icon
<div class="apex-kit-fds-theme">
<eds-button eds-icon-left="action__print">Primary action</eds-button>
</div>

### Right icon
<div class="apex-kit-fds-theme">
<eds-button eds-icon-right="action__caret-right">Primary action</eds-button>
</div>

### Icons on both sides
<div class="apex-kit-fds-theme">
<eds-button eds-icon-left="action__print" eds-icon-right="action__caret-right">Primary action</eds-button>
</div>

```html
<!-- Left icon -->
<eds-button eds-icon-left="action__print">Primary action</eds-button>

<!-- Right icon-->
<eds-button eds-icon-right="action__caret-right">Primary action</eds-button>

<!-- Both sides-->
<eds-button eds-icon-left="action__print" eds-icon-right="action__caret-right"
  >Primary action</eds-button
>
```

## Icon-only

- Use "secondary" or "tertiary" Button styles.
- Use for in-page actions when there is no mistaking its function.
- Consider using [screen-reader-only text](/components/button/button.html?tab=accessibility#icon-only-1) or a [Tooltip](/components/tooltip/tooltip.html) to add further context.
- In some cases, it can be placed inside a text field (e.g., search, get a quote, et al.).

### Secondary
<div class="apex-kit-fds-theme">
<eds-button eds-variant="secondary" eds-icon-left="action__chat" eds-icon-only>
    Click to chat
</eds-button>
</div>

### Tertiary
<div class="apex-kit-fds-theme">
<eds-button eds-variant="tertiary" eds-icon-left="action__hide" eds-icon-only>
    Hide
</eds-button>
</div>

```html
<!-- Secondary -->
<eds-button eds-variant="secondary" eds-icon-left="action__chat" eds-icon-only>
  Click to chat
</eds-button>

<!-- Tertiary -->
<eds-button eds-variant="tertiary" eds-icon-left="action__hide" eds-icon-only>
  Hide
</eds-button>
```

## Sizes

### Large
<div class="apex-kit-fds-theme">
  <eds-button eds-size="large">Primary action</eds-button>
</div>

### Medium (Default)
<div class="apex-kit-fds-theme">
  <eds-button>Primary action</eds-button>
</div>

### Small
<div class="apex-kit-fds-theme">
  <eds-button eds-size="small">Primary action</eds-button>
</div>

```html
<!-- Large -->
<eds-button eds-size="large">Primary action</eds-button>

<!-- Medium (Default)-->
<eds-button>Primary action</eds-button>

<!-- Small-->
<eds-button eds-size="small">Primary action</eds-button>
```

## Width

- By default, a Button's width is determined by the length of its text and/or size of its icon.
- A "full width" Button conforms to the width of its parent container.

### Full width in a parent container
<div class="apex-kit-fds-theme">
<div style="border: 3px dotted #A810DE; padding:1rem;">
    <eds-button eds-full-width eds-icon-left="action__attach">Primary action</eds-button>
</div>
</div>

```html
<!-- Inline styles used for demonstration only -->
<div style="border: 3px dotted #A810DE; padding:1rem;">
  <eds-button eds-full-width eds-icon-left="action__attach"
    >Primary action</eds-button>
</div>
```

- Adjusting the parent's width will change the "full width" Button. Note the inclusion of a 16rem (256px) `max-width` to the parent `<div>` in the example code below.

### Full width in a shorter parent container
<div class="apex-kit-fds-theme">
  <div style="border: 3px dotted #A810DE; padding:1rem; max-width:16rem;">
      <eds-button eds-full-width eds-icon-left="action__attach">Primary action</eds-button>
  </div>
</div>

```html
<!-- Inline styles used for demonstration only -->
<div style="border: 3px dotted #A810DE; padding:1rem; max-width:16rem;">
  <eds-button eds-full-width eds-icon-left="action__attach"
    >Primary action</eds-button>
</div>
```
