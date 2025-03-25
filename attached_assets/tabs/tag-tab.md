---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Tag
  key: web-tag
  parent: web-components
  order: 1
  channel: web
description: Tags are used to label, organize, or categorize information.
aliases: Label, Category marker, Indicator
tags: web
name: FDSTag
status: Production
tokens: tag
useTabs: true
---

<!-- SECTION: examples -->
## Default

A tag is used to visually highlight words or phrases that are part of a semantic list describing neighboring content, such as categories for an article or card.

<div class="example">
  <eds-tag>Tag</eds-tag>
</div>

```html
<eds-tag>Tag</eds-tag>
```

## Multiple tags

Multiple tags that are closely related should be children of the same parent element.
It's best to present multiple tags as a list.

<div class="example">
  <p id="article-categories" role="list" aria-label="categories">
    <eds-tag aria-describedby="article-categories" role="listitem">Category 1</eds-tag>
    <eds-tag aria-describedby="article-categories" role="listitem">Category 2</eds-tag>
    <eds-tag aria-describedby="article-categories" role="listitem">Category 3</eds-tag>
  </p>
</div>

```html
<p id="article-categories" role="list" aria-label="categories">
    <eds-tag aria-describedby="article-categories" role="listitem">Category 1</eds-tag>
    <eds-tag aria-describedby="article-categories" role="listitem">Category 2</eds-tag>
    <eds-tag aria-describedby="article-categories" role="listitem">Category 3</eds-tag>
</p>
```

### In Context Example

<div class="example">
  <eds-card>
    <div>
      <p class="eds-text--overline">Investing</p>
      <h2 class="eds-text--title">Why choose Enterprise funds?</h2>
      <p class="eds-text--paragraph-lede">
        There's a reason we're a world leader in mutual funds—our rich history, global research, and dedication to innovation create more choices for you.
      </p>
      <p id="article-categories" role="list" aria-label="categories">
        <eds-tag aria-describedby="article-categories" role="listitem">Category 1</eds-tag>
        <eds-tag aria-describedby="article-categories" role="listitem">Category 2</eds-tag>
        <eds-tag aria-describedby="article-categories" role="listitem">Category 3</eds-tag>
      </p>
    </div>
    <p class="eds-text--paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo vel aliquet
      aliquet, libero nunc hendrerit justo, nec tincidunt libero nunc vel justo.
      <eds-link href="#">Read more</eds-link>
    </p>
  </eds-card>
</div>
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/content/tag/#visual-design-specifications) for this component.

## Interaction guidelines

A tag is a static component that is placed inside or in close proximity to other UI elements to show helpful details or attributes.

- Use a tag to show the number of unread messages.
- Use a tag to show an article's category

## Usage guidelines

| Do                                 | Don't                      |
| ---------------------------------- | -------------------------- |
| Use concise, sentence case labels. | Use tags for interactions. |


## Accessibility considerations

### Placement

Tag placement ensures that the pattern is accessible.
Put tags in close proximity to title/header in a content trunk.

- If a tag is close to the content that it describes, make sure it follows in the DOM.
- If there is other content in between the tag and what it describes visually, then the tag should be programmatically associated with the content, especially if they are meant to represent status.

## Content guidance

### Usage

- Tags can be used to define categories or group information that is repeatable.
- Check to see what tags exist before creating new ones.

### Format

- Use direct, simple, concise language for tag labels.
- Tag labels are sentence case.

## Behavior

A tag is static, so there should be no interactivity assigned to it.
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Attributes

Component has no custom attributes or properties.

### Usage example

This example shows how to add `aria-describedby` attributes to a tag and designate it as a list.

```html
<p id="article-categories" role="list" aria-label="categories">
    <eds-tag aria-describedby="article-categories" role="listitem">Category 1</eds-tag>
    <eds-tag aria-describedby="article-categories" role="listitem">Category 2</eds-tag>
    <eds-tag aria-describedby="article-categories" role="listitem">Category 3</eds-tag>
</p>
```

### Slots

| **Name** | **Default content** | **Description** |
| -------- | ------------------- | --------------- |
| default  | -- | Any (simple) html content in between the tags will render |

### Events

The Tag component does not emit any custom events.

### Methods

The Tag component does not implement any public methods.

### CSS modifier classes

The Tag component does not implement any CSS modifier classes.

### Namespacing

#### Web Component
```html
<eds3-tag>...</eds3-tag>
```

#### HTML/CSS
```html
<span class="eds3-tag-root">...</span>
```

### Import Reference

| Import                                                                      | Required |
| --------------------------------------------------------------------------- | -------- |
| `import { edsTag } from '@xyz-ap153177/apex-kit';`                          | Yes      |
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Accessibility Considerations

### Attribution

Component is a simple inline element that wraps text. It can take advantage of native HTML attributes for accessibility.

- A tag or group of tags should have a description.
- More than one tag should be in a list.

In the following example, we show a paragraph designated as a list with each eds-tag as a list-item described by the paragraph's accessible label.

```html
<p id="a11y-example-1" role="list" aria-label="categories">
    <eds-tag aria-describedby="a11y-example-1" role="listitem">Category 1</eds-tag>
    <eds-tag aria-describedby="a11y-example-1" role="listitem">Category 2</eds-tag>
    <eds-tag aria-describedby="a11y-example-1" role="listitem">Category 3</eds-tag>
</p>
```

### ARIA Attributes

When using tags as a list of items, use these attributes:
- `role="list"` on the containing element
- `aria-label` on the containing element to describe the list
- `role="listitem"` on each tag
- `aria-describedby` on each tag, pointing to the ID of the containing element

### Screen Reader Announcements

With proper ARIA attributes, screen readers will announce:
- The list description (from aria-label)
- Each tag as a list item
- The total number of items in the list
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Tag

Tags are used to label, organize, or categorize information.
