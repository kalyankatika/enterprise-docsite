# Alert - Examples

An Alert is a message that communicates page-, section-, or system level statuses including critical, warning, success, or information.

## Critical Alert

- Use to indicate "high" priority or an error.
- Use to describe situations which may not allow users to proceed.
- If the Alert is due to an error, ensure that the content provides context for the error and any steps that the user may take to correct it.

```html
<eds-alert eds-disable-a11y-attributes
  >Please refresh the page or try again later.</eds-alert
>
```

## Warning Alert

- Use to indicate "medium" priority or warning.
- Use to describe situations or responses that may cause unexpected or undesirable results, or indicate a change that requires attention.
- Typical warning messages describe situations such as date and data range violations, server/system problems, and non-critical security information.
- Note: A warning will not prevent a user from completing a transaction.

```html
<eds-alert eds-disable-a11y-attributes eds-variant="warning">
  The market closes today, August 13, 2019, at 4 PM ET. If you start a
  transaction request and don't complete it before the close of market, you'll
  need to restart the request and you may lose the information you entered. If
  you start after the close of market, the information you entered will not be
  affected and the request will process on the next available trade date.
</eds-alert>
```

## Informational Alert

- Use to indicate a message that is informational.
- Use to describe or explain a situation that is important but won't prevent a user from completing an action.

```html
<eds-alert eds-disable-a11y-attributes eds-variant="info">
  If you modify your distribution elections, it may result in a delay of
  payment.
</eds-alert>
```

## Success Alert

- Use to indicate a transaction has been successfully completed.
- Use to indicate the confirmation of an action.

```html
<eds-alert eds-disable-a11y-attributes eds-variant="success">
  Confirmation number 14303332012554WHD. Please print and save this confirmation
  for your records before leaving this page. After the transaction has been
  processed, an email notification will be sent to anneslater@thea.com.
</eds-alert>
```

## Alert with title

_Since version 3.16.3, eds-title emits a Lvl 2 heading by default for proper accessibility markup. In the unlikely event you need a different heading level, set the `eds-title-heading-level` prop to the appropriate level._

```html
<eds-alert
  eds-disable-a11y-attributes
  eds-variant="critical"
  eds-title="A technical error occurred"
  >Please refresh the page or try again later.</eds-alert
>
```

## Dismissible Alert

```html
<eds-alert
  eds-disable-a11y-attributes
  eds-variant="critical"
  eds-title="A technical error occurred"
  eds-dismissible
>
  Please refresh the page or try again later.
</eds-alert>
```

## Default Slot

```html
<eds-alert
  eds-variant="critical"
  eds-title="A technical error occurred"
  eds-dismissible
>
  Please refresh the page or try again later.
</eds-alert>
```
