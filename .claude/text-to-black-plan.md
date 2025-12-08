# Text Color Change Plan: White to Black for Body Text

## Problem
The current white text against the dark/cosmic backgrounds is still not providing sufficient contrast for readability. Users are having difficulty reading most of the text content.

## Solution
Change all paragraph and body text from white variations to black/dark colors while preserving headings in their current styling (typically yellow/gold for emphasis). This will create better readability while maintaining the cosmic theme.

## Files to Modify

### 1. **index.html**
- Change all paragraph text (`<p>` tags) from white variants to black/dark colors
- Update feature card descriptions to use dark text
- Modify stats secondary text (Downloads, Rating, Levels labels)
- Update footer descriptive text
- Change navigation links to dark text for better contrast
- Update badge text to dark color

### 2. **privacy-policy.html**
- Change all content paragraphs from white/gray to black/dark
- Update navigation links to dark text
- Modify footer links and descriptive text

### 3. **src/input.css**
- Add new utility classes for dark text:
```css
.text-body-dark {
  color: #1a1a1a !important;
}

.text-secondary-dark {
  color: #333333 !important;
}

.text-paragraph-dark {
  color: #000000 !important;
}
```

- Update component styles:
- `.feature-card p` and similar selectors to use dark text
- Button text color adjustments
- Navigation link colors

## Specific Changes by Element Type

### Paragraphs (p tags)
- Change from `text-white`, `text-white/95`, `text-white/90` to `text-black` or `text-gray-900`

### Navigation Links
- Desktop nav: Change to `text-gray-800` or `text-black`
- Mobile menu: Same dark colors
- Hover states: Change to `text-yellow-600` or similar darker yellow

### Feature Cards
- Descriptions: Use `text-gray-900` or `text-black`
- Maintain yellow/gold for headings and icons

### Stats Section
- Numbers: Keep yellow/gold as is
- Labels (Downloads, Rating, etc.): Change to `text-gray-800`

### Footer
- Links: `text-gray-800`
- Descriptive text: `text-gray-700`
- Copyright: Can remain lighter gray

### Buttons
- `.btn-secondary`: Change text to dark color
- Ensure contrast with button backgrounds

## Background Considerations
Since we're changing to dark text, we need to ensure:

1. **Cards with light backgrounds**: The feature cards and glass morphism elements might need background adjustments to ensure dark text is visible
2. **Overlay areas**: Any section with light overlays might need consideration
3. **Hover states**: Text should remain readable on hover

## Implementation Steps

1. Update all paragraph text in index.html
2. Modify navigation colors in both HTML files
3. Update feature card descriptions
4. Adjust stats and footer text
5. Add dark text utility classes to CSS
6. Update privacy-policy.html
7. Rebuild CSS with `npm run build`
8. Test visibility across all sections

## Color Palette for Text
- Primary body text: `#000000` (black)
- Secondary text: `#333333` (dark gray)
- Navigation: `#1a1a1a` (very dark gray)
- Links: `#4a5568` (medium dark gray)
- Hover: `#d69e2e` (darker gold/yellow)

## Note
Headings (h1, h2, h3, etc.) should remain in their current colors (typically yellow/gold) to maintain the design hierarchy and cosmic theme.