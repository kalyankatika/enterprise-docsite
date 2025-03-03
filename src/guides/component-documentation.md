---
layout: layouts/base.njk
title: Component Documentation Guide
description: Guidelines for creating and migrating component documentation in the Enterprise Design System
---

# Component Documentation Guide

This guide outlines the standardized structure and process for creating or migrating component documentation within the Enterprise Design System (EDS) documentation platform.

## Component Structure

All components in the EDS documentation follow a standardized structure consisting of:

1. **Main Component Page**: Overview and general information
2. **Four Tab Pages**:
   - **Design**: Visual specifications and guidelines
   - **Code**: Implementation details and examples
   - **Accessibility**: Accessibility requirements and best practices
   - **Examples**: Interactive examples and use cases

### Directory Structure

Components should be organized following this directory structure:

```
src/
└── components/
    └── all/
        └── [component-name]/
            ├── index.md (Main component page)
            ├── design/
            │   └── index.md (Design guidelines)
            ├── code/
            │   └── index.md (Code implementation)
            ├── accessibility/
            │   └── index.md (Accessibility guidelines)
            └── examples/
                └── index.md (Usage examples)
```

## Creating Component Documentation

### 1. Main Component Page (`index.md`)

The main component page should include:

- Component name (title)
- Brief description
- Overview
- Types/variants
- When to use
- Best practices
- Related components
- Links to the four tab pages

**Template:**

```markdown
---
layout: layouts/component.njk
title: [Component Name]
description: [Brief description of the component]
tags: allComponents
---

# [Component Name]

[Brief description of the component]

## Overview

[General information and purpose of the component]

## Types

- **[Type 1]**: [Description]
- **[Type 2]**: [Description]
- **[Type 3]**: [Description]

## When to Use

- [Use case 1]
- [Use case 2]
- [Use case 3]

## Best Practices

- [Best practice 1]
- [Best practice 2]
- [Best practice 3]

## Related Components

- [Related component 1](/components/all/[related-component-1]/)
- [Related component 2](/components/all/[related-component-2]/)

## Tabs

- [Design](design/)
- [Code](code/)
- [Accessibility](accessibility/)
- [Examples](examples/)
```

### 2. Design Tab (`design/index.md`)

The design tab should include:

- Anatomy
- Visual design specifications
- Colors
- Typography
- Sizing and spacing
- States
- Variations
- Do's and don'ts

**Template:**

```markdown
---
layout: layouts/component.njk
title: [Component Name] Design
description: Design guidelines for the [Component Name] component
---

# [Component Name] Design Guidelines

## Anatomy

[Description of component parts and structure]

## Visual Design

### Colors

[Color specifications]

### Typography

[Typography specifications]

### Sizing and Spacing

[Sizing and spacing specifications]

## States

[Interactive states documentation]

## Variations

[Component variations documentation]

## Design Do's and Don'ts

### Do's

- [Design recommendation 1]
- [Design recommendation 2]

### Don'ts

- [Design warning 1]
- [Design warning 2]
```

### 3. Code Tab (`code/index.md`)

The code tab should include:

- HTML implementation
- CSS
- JavaScript (if applicable)
- Framework-specific implementations (React, Vue, etc.)
- Usage examples
- Accessibility considerations
- Customization options

**Template:**

```markdown
---
layout: layouts/component.njk
title: [Component Name] Code
description: Implementation guidelines for the [Component Name] component
---

# [Component Name] Code Implementation

[Brief introduction to implementing the component]

## HTML Implementation

```html
[HTML code example]
```

## CSS

```css
[CSS code example]
```

## JavaScript

```javascript
[JavaScript code example]
```

## React Implementation

```jsx
[React code example]
```

## Usage

```jsx
[Usage examples]
```

## Accessibility Considerations in Code

[Accessibility implementation details]

## Customization Options

[Customization documentation with table of properties]
```

### 4. Accessibility Tab (`accessibility/index.md`)

The accessibility tab should include:

- WCAG compliance requirements
- Implementation requirements
- Keyboard support
- Screen reader considerations
- Testing guidelines
- Common issues to avoid

**Template:**

```markdown
---
layout: layouts/component.njk
title: [Component Name] Accessibility
description: Accessibility guidelines for the [Component Name] component
---

# [Component Name] Accessibility Guidelines

[Brief introduction to accessibility for this component]

## WCAG Compliance

[WCAG success criteria]

## Implementation Requirements

[Implementation details for accessibility]

## Keyboard Accessibility

[Keyboard support documentation]

## Screen Reader Considerations

[Screen reader support documentation]

## Testing Guidelines

[How to test accessibility]

## Common Accessibility Issues to Avoid

[List of common issues]
```

### 5. Examples Tab (`examples/index.md`)

The examples tab should include:

- Basic examples
- Advanced examples
- Interactive examples
- Use case demonstrations
- Code samples with visual results

**Template:**

```markdown
---
layout: layouts/component.njk
title: [Component Name] Examples
description: Examples of the [Component Name] component in various contexts
---

# [Component Name] Examples

[Brief introduction to the examples section]

## Basic Examples

[Basic examples with code and visual representation]

## Advanced Examples

[Advanced examples with code and visual representation]

## Use Case Examples

[Use case specific examples]
```

## Migrating Legacy Documentation

When migrating component documentation from legacy systems:

1. Follow the standardized structure outlined above
2. Convert all HTML or Nunjucks content to Markdown
3. Update references to design tokens and variables
4. Ensure all code examples are up-to-date
5. Add any missing sections required by the new structure
6. Optimize images and other assets

## Component Categories

Components should be categorized under one of these groups within the "All Components" section:

- **Layout Components**: Components that define structure and layout
- **Navigation Components**: Components used for navigation
- **Form Components**: Components used in forms and user input
- **Feedback Components**: Components that provide feedback to users
- **Content Components**: Components for displaying content

## Best Practices for Documentation

1. **Be concise**: Keep documentation clear and to the point
2. **Use examples**: Provide practical examples for each concept
3. **Show visuals**: Include screenshots, diagrams, or live examples
4. **Maintain consistency**: Use consistent terminology and style
5. **Link related content**: Cross-reference related components and concepts
6. **Keep code examples simple**: Focus on the core concepts in examples
7. **Consider beginners**: Assume minimal prior knowledge
8. **Update regularly**: Keep documentation in sync with component changes

## Component Status

Include the component's current status in the main page:

- **Production Ready**: Fully tested and ready for use in production
- **Beta**: Feature complete, but may still undergo changes
- **In Development**: Currently being developed and not ready for production use
- **Deprecated**: Still supported but scheduled for replacement

## Documentation Review Process

All component documentation should go through the following review process:

1. Technical review by developers
2. Design review by designers
3. Accessibility review by accessibility experts
4. Content review by technical writers
5. Final approval by documentation team lead