---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Input
  key: web-input
  parent: web-components
  order: 1
  channel: web
description: Part of a Field Group, an Input provides a way to enter text and numerical data into a Form.
aliases: Text field, Text input, Text box
tags: web
name: FDSInput
status: Production
tokens: input
useTabs: true
---

<!-- SECTION: examples -->
## Default

- Never use this component on its own. 
- Always accompany this component with a clear and concise [Label](/components/label/label.html) inside a [Field Group](/components/field-group/field-group.html) to meet accessibility guidelines.

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." eds-id="default-example"></eds-input>
  </eds-field-group>
</div>

```html
<eds-field-group>
  <eds-label eds-for="default-example">Address line 1</eds-label>
  <eds-input eds-value="123 Main St." eds-id="default-example"></eds-input>
</eds-field-group>
```

## States

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-hover">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." class="docsite-eds-input--hover" eds-id="default-example-hover"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-focus">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." class="docsite-eds-input--focus" eds-id="default-example-focus"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-error">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." eds-error eds-id="default-example-error"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-error-hover">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." eds-error class="docsite-eds-input--error-hover" eds-id="default-example-error-hover"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-disabled">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." eds-disabled eds-id="default-example-disabled"></eds-input>
  </eds-field-group>
</div>

## In a Field Group

-   Always indicate when an entry is required by using the `eds-required` attribute.
-   Never augment a poorly written <eds-link eds-href="/components/label/label.html">Label</eds-link> with placeholder text.

<div class="example">
  <eds-field-group>
    <eds-label eds-for='input-01'>Address line 1</eds-label>
    <eds-microcopy eds-id='input-01-micro'>Optional microcopy about the field group.</eds-microcopy>
    <eds-input eds-aria-describedby='input-01-micro' eds-id='input-01' eds-required eds-value='1234 Main St.'></eds-input>
  </eds-field-group>
</div>

```html
<eds-field-group>
    <eds-label eds-for='input-01'>Address line 1</eds-label>
    <eds-microcopy eds-id='input-01-micro'>Optional microcopy about the field group.</eds-microcopy>
    <eds-input eds-aria-describedby='input-01-micro' eds-id='input-01' eds-required eds-value='1234 Main St.'></eds-input>
</eds-field-group>
```

### In Error State

<div class="example">
  <eds-field-group>
    <eds-label eds-for='input-02'>Address line 1</eds-label>
    <eds-microcopy eds-id='input-02-micro'>Optional microcopy about the field group.</eds-microcopy>
    <eds-input eds-error eds-aria-describedby='error-msg input-02-micro' eds-id='input-02'></eds-input>
    <eds-inline-alert eds-id='error-msg' eds-variant='critical'>Enter address.</eds-inline-alert>
  </eds-field-group>
</div>

```html
<eds-field-group>
    <eds-label eds-for='input-02'>Address line 1</eds-label>
    <eds-microcopy eds-id='input-02-micro'>Optional microcopy about the field group.</eds-microcopy>
    <eds-input eds-error eds-aria-describedby='error-msg input-02-micro' eds-id='input-02'></eds-input>
    <eds-inline-alert eds-id='error-msg' eds-variant='critical'>Enter address.</eds-inline-alert>
</eds-field-group>
```

## Types  
-   For touch devices, the `eds-type` attribute will invoke the appropriate touch keyboard, however, for number fields requiring non-integer values it's recommended *not* to use `eds-type="number"` and instead use `inputmode="numeric"` as described below in [Number Fields](#number-fields)
-   For email, number, password, value, and url types, the default width is 100% of its parent container.
-   For phone, ssn, and zip types, the default width corresponds to the format of the expected content. Setting the property of `eds-full-width` to true will force the width to be 100% of the parent container.

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-text">Address line 1</eds-label>
    <eds-input eds-type="text" eds-value="123 Main St." eds-id="type-example-text"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-email">email address</eds-label>
    <eds-input eds-type="email" eds-value="test@test.com" eds-id="type-example-email"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-number">Number</eds-label>
    <eds-input eds-type="number" eds-value="12345" eds-id="type-example-number"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-password">Password</eds-label>
    <eds-input eds-type="password" eds-value="myAwesomePassword" eds-id="type-example-password"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-phone">Phone number</eds-label>
    <eds-input eds-type="phone" eds-value="123-456-7890" eds-id="type-examplephone-"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-ssn">Social Security Number</eds-label>
    <eds-input eds-type="ssn" eds-value="123-45-6789" eds-id="type-example-ssn"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-url">URL</eds-label>
    <eds-input eds-type="url" eds-value="http://www.Enterprise.com" eds-id="type-example-url"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="type-example-zip">ZIP code</eds-label>
    <eds-input eds-type="zip" eds-value="27712-1234" eds-id="type-example-zip"></eds-input>
  </eds-field-group>
</div>

```html
<!-- Type: text -->
<eds-field-group>
    <eds-label eds-for="type-example-text">Address line 1</eds-label>
    <eds-input eds-type="text" eds-value="123 Main St." eds-id="type-example-text"></eds-input>
</eds-field-group>

<!-- Type: email -->
<eds-field-group>
    <eds-label eds-for="type-example-email">email address</eds-label>
    <eds-input eds-type="email" eds-value="test@test.com" eds-id="type-example-email"></eds-input>
</eds-field-group>

<!-- Type: number -->
<eds-field-group>
    <eds-label eds-for="type-example-number">Number</eds-label>
    <eds-input eds-type="number" eds-value="12345" eds-id="type-example-number"></eds-input>
</eds-field-group>

<!-- Type: password -->
<eds-field-group>
    <eds-label eds-for="type-example-password">Password</eds-label>
    <eds-input eds-type="password" eds-value="myAwesomePassword" eds-id="type-example-password"></eds-input>
</eds-field-group>

<!-- Type: phone -->
<eds-field-group>
    <eds-label eds-for="type-example-phone">Phone number</eds-label>
    <eds-input eds-type="phone" eds-value="123-456-7890" eds-id="type-examplephone-"></eds-input>
</eds-field-group>

<!-- Type: ssn -->
<eds-field-group>
    <eds-label eds-for="type-example-ssn">Social Security Number</eds-label>
    <eds-input eds-type="ssn" eds-value="123-45-6789" eds-id="type-example-ssn"></eds-input>
</eds-field-group>

<!-- Type: url -->
<eds-field-group>
    <eds-label eds-for="type-example-url">URL</eds-label>
    <eds-input eds-type="url" eds-value="http://www.Enterprise.com" eds-id="type-example-url"></eds-input>
</eds-field-group>

<!-- Type: zip -->
<eds-field-group>
    <eds-label eds-for="type-example-zip">ZIP code</eds-label>
    <eds-input eds-type="zip" eds-value="27712-1234" eds-id="type-example-zip"></eds-input>
</eds-field-group>
```

## Number Fields

The recommended approach is to: 

- use the default `eds-type="text"`
- use `inputmode="numeric"` to set a numeric keyboard for touchscreen devices (see [inputmode on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)). This can be achieved with `eds-native-input-attributes`

<div class="example">
  <eds-field-group>
    <eds-label eds-for="example-number-field">Number field</eds-label>
    <eds-input eds-type="text" eds-native-input-attributes='{"inputmode": "numeric"}' eds-value="1234" eds-id="example-number-field"></eds-input>
  </eds-field-group>
</div>

```html
<eds-field-group>
    <eds-label eds-for="example-number-field">Number field</eds-label>
    <eds-input eds-type="text" eds-native-input-attributes='{"inputmode": "numeric"}' eds-value="1234" eds-id="example-number-field"></eds-input>
</eds-field-group>
```

Using `eds-type="number"` for non integer numbers presents some usability and accessibility issues:

- Character input validation differs between browsers (eg, allowing non-numeric values or the use of the exponent character 'e')
- The number input isn't well supported by NVDA
- Most browsers also use a default stepper/srcoll functionality that can be undesirable in many use cases.

## Capturing Dates
- For basic date format validation, use `eds-pattern` to set the pattern attribute on the native input.

<div class="example">
  <eds-field-group>
    <eds-label eds-for='input-date'>Date of Birth</eds-label>
    <eds-input eds-placeholder="Mmm-DD-YYYY" eds-pattern="\w{3}-\d{2}-\d{4}" eds-aria-describedby='input-date-micro' eds-id='input-date'></eds-input>
  </eds-field-group>
</div>

```html
<eds-field-group>
    <eds-label eds-for='input-date'>Date of Birth</eds-label>
    <eds-input eds-placeholder="Mmm-DD-YYYY" eds-pattern="\w{3}-\d{2}-\d{4}" eds-aria-describedby='input-date-micro' eds-id='input-date'></eds-input>
</eds-field-group>
```

## With placeholder text
-   Never rely on placeholder text to describe an Input.
-   Only use placeholder text to add additional context that a <eds-link eds-href="/components/label/label.html">Label</eds-link> or <eds-link eds-href="/components/microcopy/microcopy.html">Microcopy</eds-link> can't provide.

<div class="example">
  <eds-field-group>
    <eds-label eds-for="placeholder-example">Search or get a quote</eds-label>
    <eds-input eds-placeholder="Name, symbol, family, or Top 10 holding" eds-id="placeholder-example"></eds-input>
  </eds-field-group>
</div>

```html
<eds-field-group>
    <eds-label eds-for="placeholder-example">Search or get a quote</eds-label>
    <eds-input eds-placeholder="Name, symbol, family, or Top 10 holding" eds-id="placeholder-example"></eds-input>
</eds-field-group>
```

## With glyphs
-   Glyphs are [typographic symbols](/visual-style/typography/typography.html#Enterprise-sans---full-repertoire-of-characters).
-   Only use a single glyph in either of the available slot positions.

<div class="example">
  <eds-field-group>
    <eds-label eds-for="glyph-example-left">Left glyph</eds-label>
    <eds-input eds-aria-describedby="dollar-glyph" eds-id="glyph-example-left">
        <span id="dollar-glyph" slot="icon-left">$</span>
    </eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="glyph-example-right">Right glyph</eds-label>
    <eds-input eds-aria-describedby="percent-glyph" eds-id="glyph-example-right">
        <span id="percent-glyph" slot="icon-right">%</span>
    </eds-input>
  </eds-field-group>
</div>

```html
<!-- Left glyph -->
<eds-field-group>
    <eds-label eds-for="glyph-example-left">Left glyph</eds-label>
    <eds-input eds-aria-describedby="dollar-glyph" eds-id="glyph-example-left">
        <span id="dollar-glyph" slot="icon-left">$</span>
    </eds-input>
</eds-field-group>

<!-- Right glyph -->
<eds-field-group>
    <eds-label eds-for="glyph-example-right">Right glyph</eds-label>
    <eds-input eds-aria-describedby="percent-glyph" eds-id="glyph-example-right">
        <span id="percent-glyph" slot="icon-right">%</span>
    </eds-input>
</eds-field-group>
```

## With icons  

<div class="example">
  <eds-field-group>
    <eds-label eds-for="icon-example-left">Left icon</eds-label>
    <eds-input eds-icon-left="action__search" eds-id="icon-example-left"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="icon-example-right">Right icon</eds-label>
    <eds-input eds-icon-right="action__cancel" eds-id="icon-example-right"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="icon-exampl-both">Icons on both sides</eds-label>
    <eds-input eds-icon-left="action__search" eds-icon-right="action__cancel" eds-placeholder="Search or get a quote" eds-id="icon-exampl-both"></eds-input>
  </eds-field-group>
</div>

```html
<!-- Left icon -->
<eds-field-group>
    <eds-label eds-for="icon-example-left">Left icon</eds-label>
    <eds-input eds-icon-left="action__search" eds-id="icon-example-left"></eds-input>
</eds-field-group>

<!-- Right icon-->  
<eds-field-group>
    <eds-label eds-for="icon-example-right">Right icon</eds-label>
    <eds-input eds-icon-right="action__cancel" eds-id="icon-example-right"></eds-input>
</eds-field-group>

<!-- Both sides-->  
<eds-field-group>
    <eds-label eds-for="icon-exampl-both">Icons on both sides</eds-label>
    <eds-input eds-icon-left="action__search" eds-icon-right="action__cancel" eds-placeholder="Search or get a quote" eds-id="icon-exampl-both"></eds-input>
</eds-field-group>
```

## Alignment

<div class="example">
  <eds-field-group>
    <eds-label eds-for="alignment-example-left">Left</eds-label>
    <eds-input eds-text-align="left" eds-value="1,000,000" eds-id="alignment-example-left"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="alignment-example-center">Center</eds-label>
    <eds-input eds-text-align="center" eds-value="1,000,000" eds-id="alignment-example-center"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="alignment-example-right">Right</eds-label>
    <eds-input eds-text-align="right" eds-value="1,000,000" eds-id="alignment-example-right"></eds-input>
  </eds-field-group>
</div>

```html
<!-- Left -->
<eds-field-group>
    <eds-label eds-for="alignment-example-left">Left</eds-label>
    <eds-input eds-text-align="left" eds-value="1,000,000" eds-id="alignment-example-left"></eds-input>
</eds-field-group>

<!-- Center -->
<eds-field-group>
    <eds-label eds-for="alignment-example-center">Center</eds-label>
    <eds-input eds-text-align="center" eds-value="1,000,000" eds-id="alignment-example-center"></eds-input>
</eds-field-group>

<!-- Right -->
<eds-field-group>
    <eds-label eds-for="alignment-example-right">Right</eds-label>
    <eds-input eds-text-align="right" eds-value="1,000,000" eds-id="alignment-example-right"></eds-input>
</eds-field-group>
```

## Sizes

<div class="example">
  <eds-field-group>
    <eds-label eds-for="size-example-large">Large</eds-label>
    <eds-input eds-size="large" eds-value="Large" eds-id="size-example-large"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="size-example-medium">Medium (default)</eds-label>
    <eds-input eds-size="medium" eds-value="Medium" eds-id="size-example-medium"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="size-example-small">Small</eds-label>
    <eds-input eds-size="small" eds-value="Small" eds-id="size-example-small"></eds-input>
  </eds-field-group>
</div>

```html
<!-- Large -->
<eds-field-group>
    <eds-label eds-for="size-example-large">Large</eds-label>
    <eds-input eds-size="large" eds-value="Large" eds-id="size-example-large"></eds-input>
</eds-field-group>

<!-- Medium (default) -->
<eds-field-group>
    <eds-label eds-for="size-example-medium">Medium (default)</eds-label>
    <eds-input eds-size="medium" eds-value="Medium" eds-id="size-example-medium"></eds-input>
</eds-field-group>

<!-- Small -->
<eds-field-group>
    <eds-label eds-for="size-example-small">Small</eds-label>
    <eds-input eds-size="small" eds-value="Small" eds-id="size-example-small"></eds-input>
</eds-field-group>
```

## Display data
- The Input does not offer a "display" state.
- Display data is presented in a <eds-link eds-href="/components/field-group/field-group.html">Field Group</eds-link> as styled text. Refer to the <eds-link eds-href="/patterns/display-data.html">Display Data</eds-link> pattern for more information on how to format and style different types of data.

<div class="example">
  <eds-field-group>
    <eds-label>Mailing address</eds-label>
    <address class='eds-field-group__display-data'>1234 Main St.<br>Apt. 10<br>Boston, MA 02110-1234</address>
  </eds-field-group>
</div>

```html
<eds-field-group>
    <eds-label>Mailing address</eds-label>
    <address class='eds-field-group__display-data'>1234 Main St.<br>Apt. 10<br>Boston, MA 02110-1234</address>
</eds-field-group>
```
<!-- ENDSECTION -->

<!-- SECTION: design -->
## Design Guidelines

You can view the Enterprise Design System (FDS) [design guidance](https://design.xyz.com/fds/web/data-entry/input/#visual-design-specifications) for this component.

## Use when

The contents of an entry can't be predicted and/or captured by another type of form control.

## Don't use when

Multiple lines of text are required. Use a [Textarea](/components/textarea/textarea.html) instead.

## Behavior
-   The actual size of small, medium, and large inputs will change in
    response to browser width.
-   Input data is submitted using a [Button](/components/button/button.html).
-   Placeholder text disappears on focus which does not meet many
    [accessibility standards](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research) and is not widely endorsed.

## Content

If you must use placeholders, always begin with a verb and always use sentence case unless the placeholder is intended to reflect a date format.

### Dates Inputs
When entering a date, it's critical to clearly indicate the month by displaying the date in a format that is understood by non-US plan sponsors and customers.

- Use Mmm-DD-YYYY (Jun-05-2021) as the general standard.
- For global date input, use DD-Mmm-YYYY (05-Jun-2021).
- Always use the first 3 letters of the month, followed by a 2-digit day and 4-digit year.
- Hyphens are used for this format rather than slashes (Jun-05-2021).

### Date Display Formats
- Use Mmm-DD-YYYY (Jun-05-2021) as the general standard.
- For global date entry, DD-Mmm-YYYY (05-Jun-2021).
- Depending on components, use Mmm-YYYY (Jun-2021) or Month YYYY (June 2021) to display month/year.
- In running text only, use Month [D]D, YYYY (June 5, 2021). Spell out the month and do not add leading zero for day.

### Phone numbers

Per the [Content style guide](https://sp.xyzcloud.com/sites/ContentResourceCenter/SitePages/Editorial-style-guide.aspx#for-domestic-phone-numbers) domestic phone numbers should use only hyphens as a separator between segments (ex: 123-555-0110).
<!-- ENDSECTION -->

<!-- SECTION: code -->
## Implementation

### Installation

```bash
npm install @xyz-ap153177/apex-kit
```

### Attributes

| Attribute                            | Type    | Validation                                                                                                                                               | Default | Description                                                                                                                                                                                                                                                                                                          |
| ------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eds-aria-describedby`               | string  | --                                                                                                                                                       | --      | A string of `id`s separated by spaces that will be set at the `aria-describedby` attribute on the `<input>` element.                                                                                                                                                                                                 |
| `eds-aria-label`                     | string  | --                                                                                                                                                       | --      | A string that will be set on the `<input>` element. This is required if the consumer is not using the `eds-id` attribute to associate a [Label](/components/label/label.html) component with the `<input>` element.                                                                     |
| `eds-class`                          | string  | --                                                                                                                                                       | --      | A string of space-separated classes that are rendered within the component's template on the `.eds-input-root` tag. (e.g., `my-special-input-class`)                                                                                                                                                                 |
| `eds-disabled`                       | boolean | Anything other than empty string, `true`, or `eds-disabled` will be treated as false.                                                                    | `false` | Sets the disabled state and adjusts the style on the `<input>` element.  This will also set `aria-disabled="true"` on the `<input>` "x" element.                                                                                                                                                                     |
| `eds-error`                          | boolean | Anything other than empty string, `true`, or `eds-error` will be treated as false.                                                                       | `false` | Sets the error state and adjusts the style on the `<input>` element.  This will also set `aria-invalid="true"` on the `<input>` element.                                                                                                                                                                             |
| `eds-full-width`                     | boolean | Anything other than empty string, `true`, or `eds-full-width` will be treated as false                                                                   | --      | Force the component to be displayed as full width. For types that default to component width (e.g., SSN, phone, zip), setting `eds-full-width` to true will force them to be displayed as full width. <br><br>Likewise, setting `eds-full-width` to false will force components to be displayed at component width.  |
| `eds-icon-left`                      | string  | --                                                                                                                                                       | --      | A eds [Icon name](/components/icon/icon.html?tab=examples#names). When provided, will render the icon inside the input field on the left.                                                                                                                                               |
| `eds-icon-right`                     | string  | --                                                                                                                                                       | --      | A eds [Icon name](/components/icon/icon.html?tab=examples#names). When provided, will render the icon inside the input field on the right.                                                                                                                                              |
| `eds-id`                             | string  | --                                                                                                                                                       | --      | Sets the `id` to the native `<input>` element. Used to associate the native `<input>` element with the native `<label>` element.                                                                                                                                                                                     |
| `eds-native-input-attributes`        | object  | string, boolean, number. See the [Native attribute support](#native-attribute-support) section for additional information.  | --      | Sets native or custom attributes on the native `<input>` element.                                                                                                                                                                                                                                                    |
| `eds-pattern`                        | string  | --                                                                                                                                                       | --      | Sets the pattern text of the `<input>` element.                                                                                                                                                                                                                                                     |
| `eds-placeholder`                    | string  | --                                                                                                                                                       | --      | Sets the placeholder text of the `<input>` element.                                                                                                                                                                                                                                                                  |
| `eds-required`                       | boolean | Anything other than empty string, `true`, or `eds-required` will be treated as false                                                                     | `false` | Indicates if user Input is required.  This will also set `aria-required="true"` on the `<input>` element.                                                                                                                                                                                                            |
| `eds-size`                           | string  | `small`, `medium`, `large`                                                                                                                               | `medium`| Determines the size of the input and its containing text.                                                                                                                                                                                                                                                            |
| `eds-text-align`                     | string  | `left`, `center`, or `right`                                                                                                                             | `left`  | Aligns the text within the `<input>` element.                                                                                                                                                                                                                                                                        |
| `eds-type`                           | string  | `email`, `number`, `password`, `phone`, `value`, `url`, `ssn`, or `zip`                                                                                  | `text`  | Sets the type attribute of the `<input>` element and is used to help provide default widths.                                                                                                                                         |
| `eds-value`                          | string  | --                                                                                                                                                       | --      | Sets the value of the `<input>` element.                                                                                                                                                                                             |

### Usage examples

The following are different examples of how to add native or custom attributes.
Always check recommendations from your framework on best pratices when interacting with DOM elements.

Using `eds-native-input-attributes` as an attribute:

```html
<eds-input
    id="nativeAttributesExampleInput"
    eds-native-input-attributes='{"readonly": true}'>
</eds-input>
```

Using `eds-native-input-attributes` as a JavaScript property:

```javascript
<eds-input id="nativeAttributesExampleInput"></eds-input>

<script>
    let input = document.querySelector('#nativeAttributesExampleInput');
    
    input.edsNativeInputAttributes = {
        readonly: true,
    };
</script>
```

### Slots

| Name         | Default content                                 | Description                                                                                                                                                                   |
| ------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon-left`  | --                                              | Use in place of the `eds-icon-left` attribute. If both the `eds-icon-left` attribute and named slot content of `eds-icon-left` are set, the slot content will be rendered.    |
| `icon-right` | --                                              | Use in place of the `eds-icon-right` attribute. If both the `eds-icon-right` attribute and named slot content of `eds-icon-right` are set, the slot content will be rendered. |

### Slot usage example

```html
<eds-input>
    <eds-icon slot="icon-left" eds-name="action__search" eds-size="small"></eds-icon>
</eds-input>
```

This example, using the attributes API, is functionally equivalent to the previous example:

```html
<eds-input eds-icon-left="action__search"></eds-input>
```

### Events

The Input component does not emit any custom events.

### Methods

The Input component does not implement any public methods. 

### CSS modifier classes

| Class name                    | Applies to        | Outcome                                                                                                                                                                   |
| ----------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.eds-input__input`           | `<input>`         | Adjusts the style of the native input element to look like an Apex Kit for Web input.                                                                                            |
| `.eds-input__icon`            | Any element       | Adjusts the style of the element to be positioned and aligned correctly.                                                                                                  |
| `.eds-input--small`           | `.eds-input-root` | Adjusts the style to render an input element with "small" text.                                                                                                           |
| `.eds-input--medium`          | `.eds-input-root` | Adjusts the style to render an input element with "medium" text.                                                                                                          |
| `.eds-input--large`           | `.eds-input-root` | Adjusts the style to render an input element with "large" text.                                                                                                           |
| `.eds-input--error`           | `.eds-input-root` | Adjusts the style to render an input element in its error state.                                                                                                          |
| `.eds-input--disabled`        | `.eds-input-root` | Adjusts the style to render an input element in its disabled state. This class is used in combination with the native `.eds-input-root` element's \`disabled\` attribute. |
| `.eds-input--full-width`      | `.eds-input-root` | Adjusts the style to render an input element the full width of its container.                                                                                             |
| `.eds-input--component-width` | `.eds-input-root` | Adjusts the style to render an input element the full width of its container.                                                                                             |
| `.eds-input--icon`            | `.eds-input-root` | Adjusts the style to render an input element with additional styling to support an icon.                                                                                  |
| `.eds-input--icon-left`       | `.eds-input-root` | Adjusts the style to render an input element with the icon to the left of the content.                                                                                    |
| `.eds-input--icon-right`      | `.eds-input-root` | Adjusts the style to render an input element with the icon to the right of the content.                                                                                   |
| `.eds-input--text-left`       | `.eds-input-root` | Adjust the style to render an input element with the text left-aligned.                                                                                                   |
| `.eds-input--text-center`     | `.eds-input-root` | Adjust the style to render an input element with the text center-aligned.                                                                                                 |
| `.eds-input--text-right`      | `.eds-input-root` | Adjust the style to render an input element with the text right-aligned.                                                                                                  |

### Namespacing

#### Web Component
```html
<eds3-input></eds3-input>
```

#### HTML/CSS
```html
<div class="eds3-input-root eds-input--medium eds-input--text-left">...</div>
```

### Import Reference

| Import                                                                          | Required |
| ------------------------------------------------------------------------------- | --- |
| `import { edsInput } from '@xyz-ap153177/apex-kit';`                          | Yes |
| `import { edsIcon } from '@xyz-ap153177/apex-kit';`                           | Yes |
| `import { injectSpriteSheet } from '@xyz-ap153177/apex-kit';`                 | Yes |
<!-- ENDSECTION -->

<!-- SECTION: accessibility -->
## Input in field groups
-   Always have an associated `<eds-input>` as part of the [Field Group](/components/field-group/field-group.html).
-   Use the `eds-id` attribute to associate the `<eds-label>` to the
    `<eds-input>`.
-   Alternatively, you can use the `eds-aria-label` attribute to associate a
    `<input>` element with a label.

## Associating the Input with a Label

Using the `eds-id` attribute allows for consumers to associate a
`<label>`  with the native `<input>` element that is used internally
within `<eds-input>` component.

The following will be made possible by associating a `<label>`  in this
way:
-   The hover state of the `<input>` element will be triggered when a
    user hovers over the [Label](/components/label/label.html).
-   The `<input>` element will be focused when a user clicks on the
    [Label](/components/label/label.html).
-   A screen reader will read the label's text to the user when they
    focus on the `<input>` element.

## Not associating the Input element with a Label
-   Using the `eds-aria-label` attribute allows for consumers to use a
    `<eds-input>` component without associating a `<label>` while
    still meeting accessibility guidelines.
-   By using `eds-aria-label` in this way a screen reader will read the [Label](/components/label/label.html)'s text to the user when they focus on the `<input>` element.
-   `aria-label` will be added to the native `<input>` element.

<div class="example">
  <eds-field-group>
    <eds-input eds-aria-label="This will be treated as a label"></eds-input>
  </eds-field-group>
</div>

```html
<eds-field-group><eds-input eds-aria-label="This will be treated as a label"></eds-input></eds-field-group>
```

## Required fields
-   Always use `aria-required="true"` for fields that are required.
-   Use the `eds-required` attribute to configure the `aria-required`
    attribute.

## Additional description text for Input element

Use `eds-aria-describedby` to reference additional content describing the `<input>` element that is not within its associated `<label>`. This will result in adding `aria-describedby` to the native `<input>` element.    

```html
<p id="input-description">Additional content that describes what the input is used for.</p>
<eds-field-group><eds-input eds-aria-describedby="input-description"></eds-input></eds-field-group>
```

**Note:** Using `aria-describedby` is preferred over `aria-label` when text is or can usefully be made visible on-screen.

### Error indication
-   Always use `aria-invalid="true"` for `<input>` elements that are in
    error.
-   Use the `eds-error` attribute to configure the `aria-invalid` attribute.

### Disabled indication
-   Always use `aria-disabled="true"` for `<input>` elements that are
    disabled.
-   Use the `eds-disabled` attribute to configure the `aria-disabled`
    attribute.

## Input with glyphs or icons

### Glyph that provides additional context

When using a glyph (a typographic symbol) to provide additional context, use the `icon-left` or `icon-right` slot (instead of the `eds-icon-left` or `eds-icon-right` attribute). Add an `id` to the `<span>` that wraps the glyph and add the `eds-aria-describedby` attribute to `<eds-input>` with the value of the glyph's `id`.

```html
<eds-field-group>
<eds-label eds-for="amount-input">Amount</eds-label>
<eds-input eds-aria-describedby="dollar-glyph" eds-id="amount-input">
<span id="dollar-glyph" slot="icon-left" class="eds-input__icon">$</span>
</eds-input>
</eds-field-group>
```

A Field Group with a "$" glyph inside the Input provides context that the Label, "Amount," does not.

### Icon does not provide additional context

If the icon **does not** provide additional context, then the icon should remain hidden from screen readers. If using the icon slot in this case, be sure to add `aria-hidden="true"` to the icon so that it will not be exposed to screen readers. If using the icon attribute, then the icon should already have `aria-hidden="true"` set, so you do not need to add it explicitly.

```html
<eds-field-group>
<eds-label eds-for="search-input">Search</eds-label>
<eds-input eds-id="search-input"> 
<eds-icon slot="icon-left" eds-name="action__search" eds-size="small"></eds-icon> 
</eds-input>
</eds-field-group>
```

The search Icon does not need to be exposed to screen readers because the Field already has the "Search" Label.
<!-- ENDSECTION -->

<!-- This content will only be shown when tabs are not enabled -->
# Input

Part of a [Field Group](/components/field-group/field-group.html), an Input provides a way to enter text and numerical data into a [Form](/components/form/form.html). 

Visit [Form](/components/form/form.html) for more information and guidance on the construction of [Forms](/components/form/form.html).---
layout: assets/layouts/docs-component.njk
eleventyNavigation:
  title: Input
  key: web-input
  parent: web-components
  order: 1
  channel: web
description: Part of a Field Group, an Input provides a way to enter text and numerical data into a Form.
aliases: Text field, Text input, Text box
tags: web
name: FDSInput
status: Production
tokens: input
useTabs: true
---

<!-- SECTION: examples -->
## Default

- Never use this component on its own. 
- Always accompany this component with a clear and concise [Label](/components/label/label.html) inside a [Field Group](/components/field-group/field-group.html) to meet accessibility guidelines.

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." eds-id="default-example"></eds-input>
  </eds-field-group>
</div>

```html
<eds-field-group>
  <eds-label eds-for="default-example">Address line 1</eds-label>
  <eds-input eds-value="123 Main St." eds-id="default-example"></eds-input>
</eds-field-group>
```

## States

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-hover">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." class="docsite-eds-input--hover" eds-id="default-example-hover"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-focus">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." class="docsite-eds-input--focus" eds-id="default-example-focus"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-error">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." eds-error eds-id="default-example-error"></eds-input>
  </eds-field-group>
</div>

<div class="example">
  <eds-field-group>
    <eds-label eds-for="default-example-error-hover">Address line 1</eds-label>
    <eds-input eds-value="123 Main St." eds-error class="docsite-eds-input--error-hover" eds-id="default-example-error-hover"></eds-input>
  </eds-field-group>
</div>

<div class="example">
