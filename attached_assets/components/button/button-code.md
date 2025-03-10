# Button - Code

## Installation

```bash
# Using npm
npm install @fmr-ap153177/apex-kit

# Using yarn
yarn add @fmr-ap153177/apex-kit
```

## Attributes

| Attribute                      | Type    | Validation                                                                                                                 | Default   | Description                                                                                                                                                                                                               |
| ------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eds-disabled`                 | boolean | --                                                                                                                         | `false`   | Disables the Button when true.                                                                                                                                                                                            |
| `eds-full-width`               | boolean | --                                                                                                                         | `false`   | If true, the Button width will stretch to 100% of the parent container.                                                                                                                                                   |
| `eds-gradient-background`      | boolean | Can only be used in combination with variant options `primary`, `secondary`, `invitation`.                                 | `false`   | If true, a gradient background design will be used. This property can be used to ease visual transition to the new eds 3.x design language. **Note, this property is deprecated and will be removed in future versions.** |
| `eds-href`                     | string  | --                                                                                                                         | --        | Renders a Button that functions as a link. When provided, the element in the template will switch from `<button>` to an `<a>`.                                                                                            |
| `eds-id`                       | string  | --                                                                                                                         | --        | Sets the `id` to the native `<button>` or `<a>` element.                                                                                                                                                                  |
| `eds-icon-left`                | string  | --                                                                                                                         | --        | A eds [Icon name](/components/icon/icon.html?tab=examples#names). When provided, will render an icon to the left of the text.                                                                                             |
| `eds-icon-right`               | string  | --                                                                                                                         | --        | A eds [Icon name](/components/icon/icon.html?tab=examples#names). When provided, will render an icon to the right of the text.                                                                                            |
| `eds-icon-only`                | boolean | Anything other than an empty string, `true`, or `eds-icon-only` will be treated as `false`.                                | `false`   | Applies the [eds-screen-reader-only](/visual-style/mixins/mixins.html?tab=current-mixins#accessibility) mixin to the Button's text so that only the icon is visible.                                                      |
| `eds-native-anchor-attributes` | object  | string, boolean, number. See the [Native attribute support](#native-attribute-support) section for additional information. | --        | Sets native or custom attributes on the native `<a>` element. Use when you are using a Button that functions as a link.                                                                                                   |
| `eds-native-button-attributes` | object  | string, boolean, number. See the [Native attribute support](#native-attribute-support) section for additional information. | --        | Sets native or custom attributes on the native `<button>` element.                                                                                                                                                        |
| `eds-size`                     | string  | `small`, `medium`, `large`                                                                                                 | --        | Determines the size of the Button.                                                                                                                                                                                        |
| `eds-text`                     | string  | --                                                                                                                         | --        | Sets in the internal text of the Button.                                                                                                                                                                                  |
| `eds-type`                     | string  | `button`, `submit`, `reset`                                                                                                | `button`  | Sets the `type` attribute of the native `<button>` element in the component template.                                                                                                                                     |
| `eds-variant`                  | string  | `primary`, `secondary`, `tertiary`, `invitation`                                                                           | `primary` | Determines which visual style the Button will use when rendered.                                                                                                                                                          |

### Native attribute support

The Button component supports the ability to append attributes to the native `<button>` and `<a>` elements that are created when the component is rendered.

The attributes and values provided should be compatible with the type of element that the Button component will render.

#### Usage examples

The following are different examples of how to add native or custom attributes.
Always check recommendations from your framework on best pratices when interacting with DOM elements.

Using `eds-native-button-attributes` as an attribute:

```html
<eds-button eds-native-button-attributes='{"formmethod": "post"}'
  >Submit</eds-button
>
```

Using `eds-native-button-attributes` as a JavaScript property:

```html
<eds-button id="nativeAttributesExampleButton">Submit</eds-button>

<script>
  let button = document.querySelector("#nativeAttributesExampleButton");

  button.edsNativeButtonAttributes = {
    formmethod: "post",
  };
</script>
```

If you are using the Button component as a link, use `eds-native-anchor-attributes` to add attributes to the `<a>` element.

## Slots

| Name         | Default content                                 | Description                                                                                                                                                                   |
| ------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`    | --                                              | Use in place of the `eds-text` attribute. If both the `eds-text` attribute and default slot content are set, the slot content will be rendered.                               |
| `icon-left`  | A `<eds-icon>` if the `icon-left` prop is set.  | Use in place of the `eds-icon-left` attribute. If both the `eds-icon-left` attribute and named slot content of `eds-icon-left` are set, the slot content will be rendered.    |
| `icon-right` | A `<eds-icon>` if the `icon-right` prop is set. | Use in place of the `eds-icon-right` attribute. If both the `eds-icon-right` attribute and named slot content of `eds-icon-right` are set, the slot content will be rendered. |

### Slot examples

This slot example can also be rendered using the props API.

```html
<eds-button>
  <eds-icon eds-name="file__pdf" slot="icon-left"></eds-icon>
  Download PDF
  <eds-icon eds-name="action__download" slot="icon-right"></eds-icon>
</eds-button>
```

This example is functionally equivalent to the previous example.

**Note:** The opening and closing `eds-button` tags must be placed with no whitespace in between. Otherwise, this will not work. You may consider using self-closing tags as this will achieve the same result.

```html
<eds-button
  eds-text="Download PDF"
  eds-icon-left="file__pdf"
  eds-icon-right="action__download"
></eds-button>
```

## Events

The Button component does not emit any custom events.

## Methods

The Button component does not implement any public methods.

## CSS modifier classes

You may use CSS modifier classes to make small presentational changes to the Button component. Please use them with care as they override the design language and can lead to accessibility and user experience issues.

| Class name                         | Applies to         | Outcome                                                                                                                                                                         |
| ---------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.eds-button--large`               | `.eds-button-root` | Adjusts styling to render a large Button.                                                                                                                                       |
| `.eds-button--small`               | `.eds-button-root` | Adjusts styling to render a small Button.                                                                                                                                       |
| `.eds-button--primary`             | `.eds-button-root` | Renders the primary variant of a Button.                                                                                                                                        |
| `.eds-button--secondary`           | `.eds-button-root` | Renders the secondary variant of a Button.                                                                                                                                      |
| `.eds-button--tertiary`            | `.eds-button-root` | Renders the tertiary variant of a Button.                                                                                                                                       |
| `.eds-button--invitation`          | `.eds-button-root` | Renders the invitation variant of a Button.                                                                                                                                     |
| `.eds-button--icon-only`           | `.eds-button-root` | Applies the [eds-screen-reader-only](/visual-style/mixins/mixins.html?tab=current-mixins#accessibility) mixin to the Button's text so that only the icon is visible.            |
| `.eds-button--gradient-background` | `.eds-button-root` | Triggers the gradient background alternate display for primary, secondary, or invitation Buttons. **Note, this property is deprecated and will be removed in future versions.** |
| `.eds-button--full-width`          | `.eds-button-root` | Renders a Button that fills 100% of the width of the container it's placed in.                                                                                                  |

## Namespacing

Alternate namespacing of the Button component is possible by sub-classing. Sub-classing can be used to override the default CSS rules or default behavior to provide application-specific behaviors.

### Component tag namespacing

```html
<eds3-button>...</eds3-button>
```

### CSS class namespacing

```html
<button class="eds3-button-root eds-button--primary">...</button>
```

## Import Reference

| Import                                                        | Required |
| ------------------------------------------------------------- | -------- |
| `import { edsButton } from '@fmr-ap153177/apex-kit';`         | Yes      |
| `import { edsIcon } from '@fmr-ap153177/apex-kit';`           | Yes      |
| `import { injectSpriteSheet } from '@fmr-ap153177/apex-kit';` | Yes      |
