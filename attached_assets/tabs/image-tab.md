---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Image
  key: web-image
  parent: web-components
  order: 1
  channel: web
description: Image provides an easy way to display a responsive image styled to match the FDS standards.
aliases: Picture, Photo, Figure
tags: web
name: FDSImage
status: Production
tokens: image
useTabs: true
---

<!-- SECTION: examples -->
## Basic usage

At a minimum, the `eds-src` attribute must be provided to display an image. For accessibility reasons, the `eds-alt-text` should also be included when possible.

<div class="example">
  <eds-image
    eds-src="https://placehold.co/300x200?text=Default+Image"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
  ></eds-image>
</div>

```html
<eds-image
    eds-src="https://placehold.co/300x200?text=Default+Image"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
></eds-image>
```

## Caption text

Caption text can be provided either as basic text using the `eds-caption-text` attribute or as HTML using the `caption` slot. Please note that HTML should not be passed in via the `eds-caption-text` attribute as it will not render properly.

<div class="example">
  <eds-image
    eds-src="https://placehold.co/300x200?text=Text+Caption"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-caption-text="This is a sample text caption for the Image Component."
  ></eds-image>
</div>

<div class="example">
  <eds-image
    eds-src="https://placehold.co/300x200?text=HTML+Caption"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
  >
    <span slot="caption">
      This is a sample HTML caption for the Image Component.<sup><a href="#fn-01">&dagger;</a></sup>
    </span>
  </eds-image>
</div>

```code-tabs
<!-- Text caption -->
<eds-image
    eds-src="https://placehold.co/300x200?text=Text+Caption"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-caption-text="This is a sample text caption for the Image Component."
></eds-image>
<!-- tab-separator -->
<!-- Slotted caption -->
<eds-image
    eds-src="https://placehold.co/300x200?text=HTML+Caption"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
>
    <span slot="caption">
        This is a sample HTML caption for the Image Component.<sup><a href="#fn-01">&dagger;</a></sup>
    </span>
</eds-image>
```

## Shape variants

The image can be displayed in three shapes: default, round, and circle. When using the circle shape, ensure that the `eds-width` and `eds-height` attributes are provided and are the same value.

<div class="example">
  <eds-image
    eds-src="https://placehold.co/300x200?text=Default+Variant"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-caption-text="This is a sample text caption for the default variant of the Image Component."
  ></eds-image>
</div>

<div class="example">
  <eds-image
    eds-src="https://placehold.co/300x200?text=Round+Variant"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-variant="round"
    eds-caption-text="This is a sample text caption for the round variant of the Image Component."
  ></eds-image>
</div>

<div class="example">
  <eds-image
    eds-src="https://placehold.co/300x300?text=Circle+Variant"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="300"
    eds-caption-text="This is a sample text caption for the circle variant of the Image Component."
    eds-variant="circle"
  ></eds-image>
</div>

```code-tabs
<!-- Default -->
<eds-image
    eds-src="https://placehold.co/300x200?text=Default+Variant"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-caption-text="This is a sample text caption for the default variant of the Image Component."
></eds-image>
<!-- tab-separator -->
<!-- Round -->
<eds-image
    eds-src="https://placehold.co/300x200?text=Round+Variant"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-variant="round"
    eds-caption-text="This is a sample text caption for the round variant of the Image Component."
></eds-image>
<!-- tab-separator -->
<!-- Circle -->
<eds-image
    eds-src="https://placehold.co/300x300?text=Circle+Variant"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="300"
    eds-caption-text="This is a sample text caption for the circle variant of the Image Component."
    eds-variant="circle"
></eds-image>
```

## Responsive sizing

The component has the ability to provide images at multiple qualities and sizes combined with their corresponding media queries for determining which image to display. This is added in combination with the `eds-src` attribute which is required.

<div class="example">
  <eds-image
    eds-src="https://placehold.co/300x200?text=Default+Image"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-variant="round"
    eds-sources='[{"media":"(max-width: 600px)","srcset":"https://placehold.co/600x400?text=Source+1+Image"},{"media":"(min-width: 900px)","srcset":"https://placehold.co/900x600?text=Source+2+Image"}]'
  ></eds-image>
</div>

```html
<eds-image
    eds-src="https://placehold.co/300x200?text=Default+Image"
    eds-alt-text="An example placeholder image"
    eds-width="300"
    eds-height="200"
    eds-variant="round"
    eds-sources='[{"media":"(max-width: 600px)","srcset":"https://placehold.co/600x400?text=Source+1+Image"},{"media":"(min-width: 900px)","srcset":"https://placehold.co/900x600?text=Source+2+Image"}]'
></eds-image>
```
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/content/image/#visual-design-specifications) for this component.

### Shape Variants

The Image component provides three shape variants:
- **Square** (default): Standard rectangular image with no border radius
- **Round**: Image with rounded corners, using a moderate border radius
- **Circle**: Perfectly circular image, ideal for profile pictures or avatars

### Captions

Images can include captions to provide additional context or attribution information:
- Captions should be concise and descriptive
- Use captions to provide source attribution when necessary
- Captions should complement, not repeat, the image's alt text

### Responsive Usage

The Image component automatically handles responsive behavior:
- Images scale appropriately across screen sizes
- Multiple source options can be provided for different display conditions
- Maintain appropriate aspect ratios when scaling
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Attributes
        
| Attribute          | Type          | Validation                  | Default  | Description |
| -------------------| ------------- | --------------------------- | -------- | ----------- |
| `eds-alt-text`     | string        | --                          | --       | Alternate text used for accessibility or when an image path is incorrect and the image can't be loaded. |
| `eds-caption-text` | string        | --                          | --       | Caption text to display below the image. If HTML needs to be used, use the `caption` slot instead. If both `eds-caption-text` and `caption` slot have a value, the slot will be displayed. |
| `eds-height`       | string        | --                          | --       | The height to display the image. If the image is taller than the value provided (keeping the same aspect ratio in relation to `eds-width`), then the image will display with the height in proportion to `eds-width` even if it is larger than the value provided for `eds-height`. |
| `eds-sources`      | ImageSource[] | --                          | --       | A stringified array of [ImageSource objects](#imagesource) to display along with the media queries for when to display which option. If no media queries are matches for any provided sources, `eds-src` will be used. |
| `eds-src`          | string        | --                          | --       | Path to the default image to display if no sources are provided or match. If no value is provided for this attribute or `eds-sources` then nothing will display. |
| `eds-variant`      | string        | 'square', 'round', 'circle' | 'square' | The shape of the image. When using circle, ensure that the provided image has the same width and height and that the `eds-width` and `eds-height` are set to the same value. |
| `eds-width`        | string        | --                          | --       | The width to display the image. |

### ImageSource
An object representing the shape of the info that is used to generate a `<source>` tag within the component's `<picture>` tag.

| Key             | Type   | Validation | Default | Description |
| --------------- | ------ | ---------- | ------- | ----------- |
| `height`        | string | --         | --      | Height of the source image. |
| `media`         | string | --         | --      | Media query to test for whether to pick this source image for display when compared truthy and compared against the other truthy media queries for the other sources. |
| `sizes`         | string | --         | --      | Sizes that the source image is available in. |
| `srcset`        | string | --         | --      | Comma-separated list of one or more source image paths and their descriptors. |
| `type`          | string | --         | --      | The mime type of the source image. |
| `width`         | string | --         | --      | Width of the source image. |
| `[key: string]` | string | --         | --      | Other attributes to render on the source's tag that are not listed as properties above. |

### Slots

| Name      | Default content                          | Description |
| --------- | ---------------------------------------- | ----------- |
| `caption` | If set, the value of `eds-caption-text`. | When HTML content is required for the caption, the slot should be used. |

### Events
The Image component does not emit any custom events.

### Methods
The Image component does not implement any public methods.

### CSS Modifier classes

| Class name          | Applies to        | Outcome |
| ------------------- | ----------------- | ------- |
| `eds-image--circle` | `.eds-image-root` | Adjusts the border radius of the corners to display the image as a circle. Ensure that the height and width of the source image are the same and that the `height` and `width` attributes of the `<img>` tag are the same. |
| `eds-image--round`  | `.eds-image-root` | Adjusts the border radius of the corners to be rounded. |
| `eds-image--square` | `.eds-image-root` | Adjusts the border radius of the corners to be squared. |

### Namespacing

#### Web Component
```html
<eds3-image></eds3-image>
```

#### HTML/CSS
```html
<figure class="eds3-image-root">...</figure>
```

### Import Reference

| Import                                                                          | Required |
| ------------------------------------------------------------------------------- | --- |
| `import { edsImage } from '@xyz-ap153177/apex-kit';`                            | Yes |
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Accessibility Considerations

- When possible, the `eds-alt-text` property should be included and contain relevant alt text for use on the image
- When necessary or useful, the caption text should be included via the `eds-caption-text` attribute for text only captions or the `captions` slot for captions that contain HTML

### Alt Text Guidelines

Alt text should:
- Be descriptive and concise
- Convey the purpose of the image, not just describe what it contains
- Not include phrases like "image of" or "picture of" (screen readers already announce it as an image)
- Be empty (but still present as `alt=""`) for purely decorative images

### Figure and Figcaption

The Image component uses semantic HTML:
- The component wraps the image in a `<figure>` element
- Captions are implemented using the `<figcaption>` element
- This provides proper semantic structure for assistive technologies

### Responsive Considerations

- The component maintains aspect ratio when resizing to prevent visual distortion
- Images will scale appropriately on different screen sizes without losing critical information
- Proper responsive behaviors help users with low vision or those who need to zoom content
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Image

Image provides an easy way to display a responsive image styled to match the FDS standards.
