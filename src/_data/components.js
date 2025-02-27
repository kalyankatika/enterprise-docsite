module.exports = [
  {
    name: "button",
    title: "Button",
    category: "base",
    description: "Buttons allow users to trigger an action or event with a single click.",
    status: "stable",
    previewTemplate: "_includes/examples/button/basic.njk",
    code: `<button class="eds-btn eds-btn-primary">
  Primary Button
</button>
<button class="eds-btn eds-btn-secondary">
  Secondary Button
</button>
<button class="eds-btn eds-btn-outline">
  Outline Button
</button>`,
    codeDescription: "Buttons can be styled with different variants by adding the appropriate class. Use `eds-btn-primary` for main actions, `eds-btn-secondary` for secondary actions, and `eds-btn-outline` for tertiary actions.",
    props: [
      {
        name: "variant",
        type: "string",
        default: "primary",
        description: "The visual style of the button. Options include `primary`, `secondary`, and `outline`."
      },
      {
        name: "size",
        type: "string",
        default: "medium",
        description: "The size of the button. Options include `small`, `medium`, and `large`."
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When true, prevents the user from interacting with the button."
      },
      {
        name: "icon",
        type: "string",
        default: null,
        description: "Optional icon to display within the button."
      }
    ],
    examples: [
      {
        title: "Primary Button",
        description: "Use for the main action in a form or section.",
        template: "_includes/examples/button/primary.njk",
        code: `<button class="eds-btn eds-btn-primary">
  Primary Button
</button>`
      },
      {
        title: "Secondary Button",
        description: "Use for secondary actions alongside a primary button.",
        template: "_includes/examples/button/secondary.njk",
        code: `<button class="eds-btn eds-btn-secondary">
  Secondary Button
</button>`
      },
      {
        title: "Outline Button",
        description: "Use for tertiary actions or in places where a subtle button is needed.",
        template: "_includes/examples/button/outline.njk",
        code: `<button class="eds-btn eds-btn-outline">
  Outline Button
</button>`
      },
      {
        title: "Button with Icon",
        description: "Buttons can include icons to provide additional context.",
        template: "_includes/examples/button/with-icon.njk",
        code: `<button class="eds-btn eds-btn-primary flex items-center">
  <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>
  Add Item
</button>`
      },
      {
        title: "Disabled Button",
        description: "Use disabled buttons to indicate that an action is not currently available.",
        template: "_includes/examples/button/disabled.njk",
        code: `<button class="eds-btn eds-btn-primary opacity-50 cursor-not-allowed" disabled>
  Disabled Button
</button>`
      }
    ]
  },
  {
    name: "card",
    title: "Card",
    category: "layout",
    description: "Cards are used to group related content and actions in a container.",
    status: "stable",
    previewTemplate: "_includes/examples/card/basic.njk",
    code: `<div class="eds-card">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-[var(--color-text-muted)]">Card content and description go here.</p>
  <div class="mt-4">
    <button class="eds-btn eds-btn-primary">Action</button>
  </div>
</div>`,
    codeDescription: "Cards provide a flexible container for grouping content. They can contain titles, text, images, and actions. Use the `eds-card` class to create a basic card.",
    props: [
      {
        name: "elevation",
        type: "string",
        default: "low",
        description: "The shadow level of the card. Options include `none`, `low`, `medium`, and `high`."
      },
      {
        name: "padding",
        type: "string",
        default: "medium",
        description: "The internal padding of the card. Options include `none`, `small`, `medium`, and `large`."
      },
      {
        name: "border",
        type: "boolean",
        default: "true",
        description: "Whether to show a border around the card."
      }
    ],
    examples: [
      {
        title: "Basic Card",
        description: "A simple card with title and content.",
        template: "_includes/examples/card/basic.njk",
        code: `<div class="eds-card">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-[var(--color-text-muted)]">Card content and description go here.</p>
</div>`
      },
      {
        title: "Card with Actions",
        description: "A card with action buttons in the footer.",
        template: "_includes/examples/card/with-actions.njk",
        code: `<div class="eds-card">
  <h3 class="text-lg font-semibold mb-2">Card with Actions</h3>
  <p class="text-[var(--color-text-muted)] mb-4">This card has action buttons in the footer.</p>
  <div class="flex space-x-2 mt-4 pt-4 border-t border-[var(--color-border)]">
    <button class="eds-btn eds-btn-primary">Primary Action</button>
    <button class="eds-btn eds-btn-secondary">Secondary</button>
  </div>
</div>`
      },
      {
        title: "Card with Image",
        description: "A card that includes an image above the content.",
        template: "_includes/examples/card/with-image.njk",
        code: `<div class="eds-card p-0 overflow-hidden">
  <img src="/assets/images/sample-image.jpg" alt="Sample image" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-lg font-semibold mb-2">Card with Image</h3>
    <p class="text-[var(--color-text-muted)]">This card includes an image above the content.</p>
    <button class="eds-btn eds-btn-outline mt-4">Learn more</button>
  </div>
</div>`
      }
    ]
  },
  {
    name: "alert",
    title: "Alert",
    category: "feedback",
    description: "Alerts display short, important messages that attract the user's attention.",
    status: "stable",
    previewTemplate: "_includes/examples/alert/basic.njk",
    code: `<div class="eds-alert eds-alert-info">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Information alert</p>
      <p class="text-sm">This is an information message.</p>
    </div>
  </div>
</div>`,
    codeDescription: "Alerts can be used to provide feedback about an action or to highlight important information. Use the appropriate variant based on the type of message.",
    props: [
      {
        name: "variant",
        type: "string",
        default: "info",
        description: "The type of alert. Options include `info`, `success`, `warning`, and `error`."
      },
      {
        name: "title",
        type: "string",
        default: null,
        description: "Optional title for the alert."
      },
      {
        name: "dismissible",
        type: "boolean",
        default: "false",
        description: "Whether the alert can be dismissed by the user."
      }
    ],
    examples: [
      {
        title: "Info Alert",
        description: "Used for general information and neutral messages.",
        template: "_includes/examples/alert/info.njk",
        code: `<div class="eds-alert eds-alert-info">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Information alert</p>
      <p class="text-sm">This is an information message.</p>
    </div>
  </div>
</div>`
      },
      {
        title: "Success Alert",
        description: "Used to indicate a successful action or positive message.",
        template: "_includes/examples/alert/success.njk",
        code: `<div class="eds-alert eds-alert-success">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Success alert</p>
      <p class="text-sm">Your changes have been saved successfully.</p>
    </div>
  </div>
</div>`
      },
      {
        title: "Warning Alert",
        description: "Used to indicate potential issues that require attention.",
        template: "_includes/examples/alert/warning.njk",
        code: `<div class="eds-alert eds-alert-warning">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Warning alert</p>
      <p class="text-sm">Please review your information before continuing.</p>
    </div>
  </div>
</div>`
      },
      {
        title: "Error Alert",
        description: "Used to indicate errors or critical issues that need immediate attention.",
        template: "_includes/examples/alert/error.njk",
        code: `<div class="eds-alert eds-alert-error">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
    <div>
      <p class="font-medium">Error alert</p>
      <p class="text-sm">An error occurred while processing your request.</p>
    </div>
  </div>
</div>`
      },
      {
        title: "Dismissible Alert",
        description: "An alert that can be dismissed by the user.",
        template: "_includes/examples/alert/dismissible.njk",
        code: `<div class="eds-alert eds-alert-info" x-data="{ show: true }" x-show="show">
  <div class="flex justify-between">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p class="font-medium">Dismissible alert</p>
        <p class="text-sm">Click the X button to dismiss this alert.</p>
      </div>
    </div>
    <button @click="show = false" class="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>`
      }
    ]
  }
];