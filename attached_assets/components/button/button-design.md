# Button - Design

You can view the Fidelity Design System (FDS) [design guidance](https://design.fmr.com/fds/web/data-entry/button/#visual-design-specifications) for this component.

## Use when

- Initiating a task that uses a form, trade ticket, research or planning tool.
- Moving forward or backward through a multi-step process/workflow.
- Submitting data into a form, trade ticket, research or planning tool.
- Initiating an action that alters or edits an existing dataset.
- Acknowledging a dialog.
- Canceling a task.
- Closing a layer.
- Initiating an action that performs an operation outside of the browser like "Printing" or "Email."

## Don't use when

Presenting an array of elements that navigate to other pages outside of a specific process/workflow. Instead, use a [Link](/components/link/link.html).

## Visual style

### Disabled Buttons

The use of "disabled" Buttons is strongly discouraged. They create accessibility challenges and cause confusion for people within an experience. When evaluating when to use a "disabled" Button, consider these scenarios:

- **Legacy experience: <span class="docsite_disabled-button-use">Only use</span>** "disabled" Buttons if they already exist within the experience and are necessary to maintain consistency.
- **New experience: <span class="docsite_disabled-button-dont-use">Don't use</span>** "disabled" Buttons and rethink how the interaction could be presented in a better way.

### Spacing and width

By default, the width of Buttons are determined by their content. "Full width" Buttons are contrained by the width of their parent container.

![An example image of the correct amount of space existing between sets of buttons.](/images/button/doc-Buttons-margin-do.png)
_Always use 1rem (16px) of margin between Buttons._

![An example image of the correct amount of space existing between sets of buttons.](/images/button/doc-Buttons-width-do.png)
_By default, the width of Buttons are determined by their content. "Full width" Buttons are contrained by the width of their parent container._

### Application

![An example image of the correct application of invitation actions.](/images/button/doc-Buttons-invitation-application.png)
_Only use "invitation" actions to communicate "account opening" or benefits "enrollment." Limit the number of these actions on the page even if the page is long and the message is repeated._

![An example image of the correct application of a primary action.](/images/button/doc-Buttons-primary-application.png)
_Only use one "primary" action on a page. Use "secondary" and "tertiary" actions for actions of lesser importance._

### Grouping

![An example image of the primary action to the right of the secondary action.](/images/button/doc-Buttons-order-horizontal-do.png)
_Always place the "primary" action on the right in a horizontal Button group._

![An example image of the primary action incorrectly positioned to the left of the secondary action.](/images/button/doc-Buttons-order-horizontal-dont.png)
_Never place the "primary" action on the left in a horizontal Button group._

![An example image of a primary action button positioned above a secondary action button.](/images/button/doc-Buttons-order-vertical-do.png)
_Always place the "primary" action at the top of a vertical Button group._

![An example image of a primary action button incorrectly positioned beneath a secondary action button.](/images/button/doc-Buttons-order-vertical-dont.png)
_Never place the "primary" action on the bottom a vertical Button group._

### Secondary Button background color

The "secondary" variant of the Button has a transparent background.

![An example image of a secondary action button on a white background.](/images/button/doc-buttons-secondary-background.png)
_The "secondary" action Button on white._

![An example image of a secondary action button on a gray background.](/images/button/doc-buttons-secondary-background.png)
_The "secondary" action Button on gray._

## Behavior

### Keyboard access

- ENTER/RETURN activates the Button.
- SPACEBAR activates the Button.

## Content

- Always give Buttons short, meaningful labels that make sense out of content. Generic labels violate an accessibility requirement that a screen reader should be able to clearly communicate intent. (e.g., "Edit profile" instead of "Profile")
- Always use sentence case for Button labels.
- Never include typographic symbols in Button labels. (e.g., ® or ™)
