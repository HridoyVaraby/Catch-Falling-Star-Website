# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Development mode - watch and rebuild CSS on changes
npm run dev

# Production build
npm run build

# Build output
# CSS: src/input.css → dist/output.css
```

## Architecture Overview

This is a static landing page for the "Catch Falling Star" mobile game with a cosmic space theme. The project uses a Tailwind CSS-first approach with vanilla JavaScript for interactions.

### Core Technologies
- **Tailwind CSS v3.4.17**: Utility-first CSS framework with custom cosmic theme
- **GSAP**: Animation library for scroll-triggered animations and interactive effects
- **PostCSS**: CSS processing pipeline with Autoprefixer

### Key Files Structure
- `index.html`: Main landing page with inline styles for hero animations
- `privacy-policy.html`: Secondary page using compiled CSS
- `src/input.css`: Tailwind CSS entry point with custom styles, animations, and utility classes
- `src/main.js`: GSAP animations and interactive JavaScript
- `dist/output.css`: Compiled CSS output (generated)
- `tailwind.config.js`: Extended Tailwind configuration with cosmic theme

### Design System

The website uses a comprehensive cosmic color palette defined in Tailwind config:
- Primary backgrounds: `gradient-void`, `gradient-cosmic`, `gradient-stellar`
- Accent colors: `star-yellow`, `nebula-purple`, `cosmic-cyan`, `aurora-pink`
- Text visibility: Use full white (`text-white`) for navigation, `text-white/95` for body text

### Animation Architecture

GSAP animations are organized in `src/main.js` with these key components:
1. **Hero Section**: Sequential timeline with badge, headings, and phone mockup entrance
2. **ScrollTrigger**: Section-based animations that trigger on viewport entry
3. **Interactive Elements**: Parallax effects, custom cursor (desktop), and mobile menu
4. **Dynamic Elements**: Starfield generation, shooting stars, and stat counters

### CSS Customization Patterns

When modifying styles:
1. **Utility classes**: Prefer Tailwind utilities
2. **Custom CSS**: Add to `src/input.css` using `@layer components` or `@layer utilities`
3. **Animations**: Define keyframes in `tailwind.config.js` for consistency
4. **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

### JavaScript Interactions

Key interactive features:
- Smooth scroll navigation using GSAP ScrollToPlugin
- Mobile menu toggle with slide-in animation
- Dynamic starfield background with multiple layers
- Shooting star effects triggered periodically
- Stats counter animation with GSAP TextPlugin
- Custom cursor glow effect (desktop only)

### Asset Organization

- `/assets/favicon/`: Complete favicon set for all platforms
- `/assets/images/`: Game screenshots and logo
- Images are loaded lazily with appropriate alt text
- Phone mockups use consistent dimensions (300x600px desktop, 240x480px mobile)

### Build Process

1. `npm run dev`: Runs Tailwind in watch mode for development
2. `npm run build`: Compiles optimized CSS for production
3. PostCSS processes CSS with Autoprefixer for browser compatibility
4. No JavaScript bundling required - vanilla JS loaded directly

### Common Modification Patterns

- **Colors**: Modify Tailwind config color palette or use CSS custom properties
- **Animations**: Add new keyframes to `tailwind.config.js` or custom CSS to `src/input.css`
- **Layout**: Adjust using Tailwind utilities with responsive prefixes
- **New Sections**: Follow existing HTML structure with semantic elements
- **Typography**: Use defined font families (`display`, `body`, `accent`) from config

### Browser Compatibility

Supports modern browsers (Chrome 60+, Firefox 60+, Safari 12+, Edge 79+). Uses CSS Grid, Flexbox, and modern JavaScript features.