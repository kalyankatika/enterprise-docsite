---
layout: layouts/page.njk
title: Input Components
description: Components that enable users to input or manipulate data
excludeFromSearch: false
contentType: Documentation
eleventyNavigation:
  key: Inputs
  parent: Components
  order: 1
---

# Input Components

Input components are UI elements that allow users to enter data, make selections, or trigger actions. They are essential building blocks for forms and interactive interfaces.

## Available Input Components

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
  {% for component in collections.inputComponents %}
    <a href="{{ component.url }}" class="eds-component-card">
      <h3 class="text-xl font-medium mb-2">{{ component.data.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ component.data.description }}</p>
      <span class="eds-link">View Component →</span>
    </a>
  {% endfor %}
</div>

## Accessibility Considerations

When using input components, keep these accessibility considerations in mind:

- All form controls should have associated labels
- Form elements should be keyboard accessible
- Error messages should be clearly associated with their respective inputs
- Required fields should be clearly indicated
- Focus states should be visible for keyboard users

## Best Practices

### Use clear and concise labels

Labels should clearly describe the purpose of the input. Avoid using vague or technical terms that might confuse users.

### Provide helpful validation

Validate user input and provide clear error messages when the input doesn't meet the requirements. Use inline validation where appropriate.

### Group related inputs

Group related inputs together using fieldsets and legends to provide context and improve understanding.

### Use appropriate input types

Use the appropriate input type for the data being collected (e.g., email, number, date) to provide the best user experience and enable browser-specific features.

### Maintain consistency

Use input components consistently throughout your application to create a cohesive user experience.

## Form Layout Guidelines

- Align labels and inputs consistently
- Use a single-column layout for most forms
- Place related fields in close proximity
- Use appropriate spacing between form elements
- Position form actions (buttons) at the bottom of the form

For more detailed guidance on forms, please refer to the [Form Patterns](/patterns/forms/) documentation.