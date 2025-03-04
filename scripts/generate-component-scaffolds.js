/**
 * Component Scaffold Generator
 * 
 * This script creates the basic structure for components with all required tabs:
 * - Main index.md
 * - design/index.md
 * - code/index.md
 * - accessibility/index.md
 * - examples/index.md
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Base component directory
const BASE_DIR = path.join(__dirname, '../src/components/all');

// Template for main component index.md
const MAIN_TEMPLATE = (componentName, componentTitle) => `---
layout: layouts/component.njk
title: ${componentTitle}
description: ${componentTitle} component for the Enterprise Design System
tags: allComponents
---

# ${componentTitle}

Brief description of the ${componentTitle.toLowerCase()} component.

## Overview

Overview of the ${componentTitle.toLowerCase()} component, its purpose, and typical use cases.

## Types

- **Type 1**: Description of type 1
- **Type 2**: Description of type 2
- **Type 3**: Description of type 3

## When to Use

- Use case 1
- Use case 2
- Use case 3

## Best Practices

- Best practice 1
- Best practice 2
- Best practice 3
- Best practice 4

## Related Components

- [Component 1](/components/all/component-1/)
- [Component 2](/components/all/component-2/)

## Tabs

- [Design](design/)
- [Code](code/)
- [Accessibility](accessibility/)
- [Examples](examples/)
`;

// Template for design tab
const DESIGN_TEMPLATE = (componentName, componentTitle) => `---
layout: layouts/component.njk
title: ${componentTitle} Design
description: Design guidelines for the ${componentTitle} component
---

# ${componentTitle} Design Guidelines

## Anatomy

The ${componentTitle.toLowerCase()} component consists of several key elements:

1. **Element 1**: Description of element 1
2. **Element 2**: Description of element 2
3. **Element 3**: Description of element 3

## Visual Design

### Colors

| State | Property | Value |
|-------|----------|-------|
| Default | Background | var(--color-neutral-10) |
| Default | Border | var(--color-neutral-40) |
| Hover | Background | var(--color-neutral-20) |
| Hover | Border | var(--color-primary) |

### Typography

- **Text style 1**: 16px/1rem, font-weight: 600
- **Text style 2**: 14px/0.875rem, font-weight: 400

### Sizing and Spacing

- **Padding**: 16px (1rem)
- **Margin**: 8px (0.5rem)
- **Border radius**: 4px (0.25rem)

## States

- **Default**: Description of default state
- **Hover**: Description of hover state
- **Focus**: Description of focus state
- **Active**: Description of active state
- **Disabled**: Description of disabled state

## Variations

### Variation 1

Description of variation 1.

### Variation 2

Description of variation 2.

## Design Do's and Don'ts

### Do's

- Design recommendation 1
- Design recommendation 2
- Design recommendation 3

### Don'ts

- Design caution 1
- Design caution 2
- Design caution 3
`;

// Template for code tab
const CODE_TEMPLATE = (componentName, componentTitle) => `---
layout: layouts/component.njk
title: ${componentTitle} Code
description: Implementation guidelines for the ${componentTitle} component
---

# ${componentTitle} Implementation

## HTML Structure

\`\`\`html
<!-- Basic ${componentTitle} -->
<div class="eds-${componentName}">
  <div class="eds-${componentName}__content">
    <!-- Component content goes here -->
  </div>
</div>
\`\`\`

## CSS Implementation

\`\`\`css
.eds-${componentName} {
  display: block;
  position: relative;
}

.eds-${componentName}__content {
  padding: var(--spacing-4);
}
\`\`\`

## JavaScript

\`\`\`javascript
// Optional JavaScript for enhanced functionality
function initialize${componentTitle.replace(/\s+/g, '')}() {
  // Implementation details
}
\`\`\`

## React Implementation

\`\`\`jsx
import React from 'react';
import './${componentName}.css';

const ${componentTitle.replace(/\s+/g, '')} = ({ children, className, ...props }) => {
  return (
    <div className={\`eds-${componentName} \${className || ''}\`} {...props}>
      <div className="eds-${componentName}__content">
        {children}
      </div>
    </div>
  );
};

export default ${componentTitle.replace(/\s+/g, '')};
\`\`\`

## Usage Examples

### Basic Usage

\`\`\`jsx
<${componentTitle.replace(/\s+/g, '')}>
  Content goes here
</${componentTitle.replace(/\s+/g, '')}>
\`\`\`

### With Options

\`\`\`jsx
<${componentTitle.replace(/\s+/g, '')} 
  className="custom-class"
  data-testid="test-${componentName}"
>
  Content with options
</${componentTitle.replace(/\s+/g, '')}>
\`\`\`

## Accessibility Considerations

- Ensure proper ARIA attributes
- Support keyboard navigation
- Maintain sufficient color contrast
`;

// Template for accessibility tab
const ACCESSIBILITY_TEMPLATE = (componentName, componentTitle) => `---
layout: layouts/component.njk
title: ${componentTitle} Accessibility
description: Accessibility guidelines for the ${componentTitle} component
---

# ${componentTitle} Accessibility Guidelines

## Overview

Ensuring the ${componentTitle.toLowerCase()} component is accessible to all users, including those using assistive technologies.

## WCAG Compliance

This component should meet the following WCAG 2.1 success criteria:

- **1.3.1 Info and Relationships** (Level A): Information, structure, and relationships conveyed through presentation can be programmatically determined.
- **1.4.3 Contrast** (Level AA): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.
- **2.1.1 Keyboard** (Level A): All functionality is operable through a keyboard interface.
- **2.4.7 Focus Visible** (Level AA): Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

## Keyboard Accessibility

| Key | Function |
| --- | --- |
| Tab | Moves focus to the component |
| Enter/Space | Activates the component |
| Arrow keys | Navigates within the component (if applicable) |

## Screen Reader Support

- Use appropriate ARIA roles and attributes
- Ensure proper labeling of interactive elements
- Provide context for screen reader users

## Implementation Checklist

### Semantic HTML
- Use native HTML elements when possible
- Use appropriate heading levels
- Maintain a logical DOM structure

### Focus Management
- Ensure visible focus indication
- Implement logical tab order
- Trap focus when needed (e.g., in modals)

### Color and Contrast
- Maintain sufficient color contrast
- Don't rely solely on color to convey information
- Test with grayscale to verify information is still understandable

### States and Properties
- Properly communicate component state using ARIA when needed
- Use ARIA live regions for dynamic content when appropriate

## Testing Recommendations

### Automated Testing
- Use accessibility tools to check for common issues
- Verify HTML validity

### Manual Testing
- Test with keyboard navigation
- Test with screen readers
- Verify proper focus management

## Code Example with Accessibility Features

\`\`\`html
<div class="eds-${componentName}" role="region" aria-labelledby="${componentName}-title">
  <h2 id="${componentName}-title">Accessible ${componentTitle}</h2>
  <div class="eds-${componentName}__content">
    <!-- Accessible content goes here -->
  </div>
</div>
\`\`\`
`;

// Template for examples tab
const EXAMPLES_TEMPLATE = (componentName, componentTitle) => `---
layout: layouts/component.njk
title: ${componentTitle} Examples
description: Examples of different ${componentTitle.toLowerCase()} variants and use cases
---

# ${componentTitle} Examples

## Basic Example

Basic usage of the ${componentTitle.toLowerCase()} component.

\`\`\`html
<div class="eds-${componentName}">
  <div class="eds-${componentName}__content">
    Basic ${componentTitle.toLowerCase()} content
  </div>
</div>
\`\`\`

<div class="example-preview">
  <div class="eds-${componentName}">
    <div class="eds-${componentName}__content">
      Basic ${componentTitle.toLowerCase()} content
    </div>
  </div>
</div>

## Variation 1

Description of variation 1.

\`\`\`html
<div class="eds-${componentName} eds-${componentName}--variation-1">
  <div class="eds-${componentName}__content">
    Variation 1 content
  </div>
</div>
\`\`\`

<div class="example-preview">
  <div class="eds-${componentName} eds-${componentName}--variation-1">
    <div class="eds-${componentName}__content">
      Variation 1 content
    </div>
  </div>
</div>

## Variation 2

Description of variation 2.

\`\`\`html
<div class="eds-${componentName} eds-${componentName}--variation-2">
  <div class="eds-${componentName}__content">
    Variation 2 content
  </div>
</div>
\`\`\`

<div class="example-preview">
  <div class="eds-${componentName} eds-${componentName}--variation-2">
    <div class="eds-${componentName}__content">
      Variation 2 content
    </div>
  </div>
</div>

## Interactive Example

Interactive example with JavaScript integration.

\`\`\`html
<div class="eds-${componentName}" id="interactive-${componentName}">
  <div class="eds-${componentName}__content">
    Interactive content
  </div>
  <button class="eds-button" id="${componentName}-action-button">Interact</button>
</div>

<script>
  document.getElementById('${componentName}-action-button').addEventListener('click', function() {
    // Interactive functionality
    alert('${componentTitle} interaction triggered');
  });
</script>
\`\`\`

<div class="example-preview">
  <div class="eds-${componentName}" id="interactive-${componentName}">
    <div class="eds-${componentName}__content">
      Interactive content
    </div>
    <button class="eds-button" id="${componentName}-action-button">Interact</button>
  </div>
</div>

## Responsive Behavior

Demonstrates how the ${componentTitle.toLowerCase()} responds to different screen sizes.

\`\`\`html
<div class="eds-${componentName} eds-${componentName}--responsive">
  <div class="eds-${componentName}__content">
    This ${componentTitle.toLowerCase()} adapts to different screen sizes
  </div>
</div>
\`\`\`

<div class="example-preview">
  <div class="eds-${componentName} eds-${componentName}--responsive">
    <div class="eds-${componentName}__content">
      This ${componentTitle.toLowerCase()} adapts to different screen sizes
    </div>
  </div>
</div>
`;

// Function to create component scaffolds
function createComponentScaffold(componentPath) {
  // Extract component name from path
  const componentName = path.basename(componentPath);
  
  // Format title (capitalize words, replace hyphens with spaces)
  const componentTitle = componentName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Create directories if they don't exist
  const dirs = ['design', 'code', 'accessibility', 'examples'];
  dirs.forEach(dir => {
    const dirPath = path.join(componentPath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    }
  });
  
  // Create main index.md if it doesn't exist or is empty
  const mainIndexPath = path.join(componentPath, 'index.md');
  if (!fs.existsSync(mainIndexPath) || fs.readFileSync(mainIndexPath, 'utf8').trim() === '') {
    fs.writeFileSync(mainIndexPath, MAIN_TEMPLATE(componentName, componentTitle));
    console.log(`Created main index.md for ${componentName}`);
  }
  
  // Create tab files if they don't exist or are empty
  const tabTemplates = {
    'design/index.md': DESIGN_TEMPLATE,
    'code/index.md': CODE_TEMPLATE,
    'accessibility/index.md': ACCESSIBILITY_TEMPLATE,
    'examples/index.md': EXAMPLES_TEMPLATE
  };
  
  Object.entries(tabTemplates).forEach(([tabPath, template]) => {
    const fullPath = path.join(componentPath, tabPath);
    if (!fs.existsSync(fullPath) || fs.readFileSync(fullPath, 'utf8').trim() === '') {
      fs.writeFileSync(fullPath, template(componentName, componentTitle));
      console.log(`Created ${tabPath} for ${componentName}`);
    }
  });
  
  return `Completed scaffold for ${componentName}`;
}

// Get all component directories
function getComponentDirectories() {
  try {
    // Skip parent directory, alert, button, and checkbox (already done)
    const output = execSync(`find ${BASE_DIR} -maxdepth 1 -type d | grep -v "alert\\|button\\|checkbox\\|/components/all$"`, { encoding: 'utf8' });
    return output.trim().split('\n');
  } catch (error) {
    console.error('Error getting component directories:', error);
    return [];
  }
}

// Main execution
const componentDirs = getComponentDirectories();
console.log(`Found ${componentDirs.length} components to scaffold`);

componentDirs.forEach((dir, index) => {
  console.log(`Processing (${index + 1}/${componentDirs.length}): ${dir}`);
  createComponentScaffold(dir);
});

console.log('Completed all component scaffolds');