# Alert - Code

## Installation

```bash
# Using npm
npm install @fmr-ap153177/apex-kit

# Using yarn
yarn add @fmr-ap153177/apex-kit
```

## Attributes

| Attribute                     | Type    | Validation                                                                                 | Default       | Description                                                                                                                                        |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eds-a11y-icon-text`          | string  | --                                                                                         | --            | Specify an accessible title for the alert's svg icon.                                                                                              |
| `eds-disable-a11y-attributes` | boolean | --                                                                                         | `false`       | Prevents `aria-live` and `role` attributes from being added to the Alert. Note, this option is deprecated and will be removed in the next version. |
| `eds-dismiss-icon-a11y-text`  | string  | --                                                                                         | Dismiss alert | Screen reader-only text that is set to the dismiss `eds-icon` title for accessibility.                                                             |
| `eds-dismissible`             | boolean | Anything other than empty string, `true`, or `eds-dismissible` will be treated as `false`. | `false`       | Determines if a dismiss icon will be added to the Alert.                                                                                           |
| `eds-text`                    | string  | --                                                                                         | --            | Fallback content for message if you cannot use slots.                                                                                              |
| `eds-title`                   | string  | --                                                                                         | --            | Allows you to put a title within the Alert.                                                                                                        |
| `eds-title-heading-level`     | number  | `2`, `3`, `4`, `5`, `6`                                                                    | `2`           | Provides a means to adjust the Alert heading level to better fit the page layout for accessibility.                                                |
| `eds-variant`                 | string  | `critical`, `info`, `warning`, `success`                                                   | `critical`    | Defines what variant of alert needs to be used.                                                                                                    |

## Slots

| Name      | Default content | Description                                                                                    |
| --------- | --------------- | ---------------------------------------------------------------------------------------------- |
| `default` | --              | Content that is placed inside `<eds-alert>` will be added to the content section of the Alert. |

## Events

The `eds-alert-closed` event can be used when you need to know when the Alert is being closed using the dismiss action. This will only be available if you set the `eds-dismissible` attribute to `true` in the web component.

## Methods

`closeAlert()` is a public function that can be used to close that specific alert instance. The `eds-alert-closed` event will occur when this is called.

## CSS modifier classes

You may use CSS modifier classes to make small presentational changes to the Alert component. Please use them with care as they override the design language and can lead to accessibility and user experience issues.

| Class name             | Applies to        | Outcome                          |
| ---------------------- | ----------------- | -------------------------------- |
| `.eds-alert--critical` | `.eds-alert-root` | Adds critical Alert styles.      |
| `.eds-alert--info`     | `.eds-alert-root` | Adds informational Alert styles. |
| `.eds-alert--success`  | `.eds-alert-root` | Adds success Alert styles.       |
| `.eds-alert--warning`  | `.eds-alert-root` | Adds warning Alert styles.       |

## Namespacing

Alternate namespacing of the Alert component is possible by sub-classing. Sub-classing can be used to override the default CSS rules or default behavior to provide application-specific behaviors.

### Component tag namespacing

```html
<eds3-alert>...</eds3-alert>
```

### CSS class namespacing

```html
<div class="eds3-alert-root eds-alert--critical">...</div>
```

## Import Reference

| Import                                                                                                                                                                                       | Required                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `import { edsAlert } from '@fmr-ap153177/apex-kit';`                                                                                                                                         | Yes                                         |
| `import { edsIcon } from '@fmr-ap153177/apex-kit';`                                                                                                                                          | Yes                                         |
| `import { injectSpriteSheet } from '@fmr-ap153177/apex-kit';`                                                                                                                                | Yes, unless using `injectCustomSpriteSheet` |
| `import { injectCustomSpriteSheet, ICON_ALERT_CRITICAL_OUTLINE, ICON_ALERT_INFO_OUTLINE, ICON_ALERT_SUCCESS, ICON_ALERT_WARNING_OUTLINE, ICON_ACTION_CLOSE } from '@fmr-ap153177/apex-kit';` | Yes, unless using `injectSpriteSheet`       |
