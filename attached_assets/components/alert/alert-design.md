# Alert - Design

You can view the Fidelity Design System (FDS) [design guidance](https://design.fmr.com/fds/web/help-systems/message/#visual-design-specifications) for this component.

## Use when

Communicating information specifically about the page, system, or section of the page that the user is currently experiencing.

## Don't use when

- A message needs to be prompted by clicking on an action.
- Communicating information specific to items within the content of the page, like a form input error. Use an [Inline Alert](/components/inline-alert/inline-alert.html) instead.

## Visual style

- Specific [core palette colors](/visual-style/color/color.html#alerts) and [icons](/components/icon/icon.html#names) visually indicate the type of each Alert.
- Titles of critical Alerts are red to add visual importance.
- The background of the Alert content area should always be white. Never override the background to be transparent.

### Sizes

- A single size of the Alert is provided that adjusts responsively.
- While the height and width may change based on the parent container and content, the default fonts should only change based on responsive font size rules.

## Behavior

- Alerts will conform to the width of their parent container.
- The "dismiss" action is optional.
- "Dismissible" alerts will be removed from view if the reader clicks the "close" icon in the upper right corner of the container. Any subsequent content adjusts its vertical position accordingly.

![Diagram of an Alert closing using the dismiss icon.](/images/alert/doc-alert-dismiss.png)
_Using the dismiss icon will collapse the content in the Alert._

## Multiple Alerts

If multiple Alerts need to be displayed simultaneously, stack them with at least 1.5rem (24px) of margin between them.

![Diagram of how to place mutiple Alerts on a page.](/images/alert/doc-alert-multiple.png)
_Content will collapse when the Alert is dismissed._

## Placement

- Place page– and system–level alerts at the top of the page below the navigation but above the page title.
- Place section-specific alerts at the top of the section that it describes.

## Content

- Write messages in an objective and factual tone that is concise and easy to understand.
- Avoid redundancy when writing titles and messages. If a title doesn't offer additional value, remove it.
- Content may contain links that are actions the user may take.
- Use paragraphs, ordered and unordered lists, spans, and links for guidelines in the content area.
