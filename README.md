# 🌟 Catch Falling Star - Mobile Game Landing Page

<div align="center">

![Catch Falling Star Logo](./assets/images/logo.png)

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://your-website-url.com)
[![Google Play](https://img.shields.io/badge/Google_Play-Get_it_on-blue?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/details?id=your.package.name)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

*A stunning, responsive landing page for the "Catch Falling Star" mobile game featuring a cosmic theme, interactive animations, and modern web technologies.*

</div>

## 📱 About The Project

**Catch Falling Star** is a mobile game where players embark on an extraordinary cosmic adventure, catching falling stars while avoiding space debris. This landing page showcases the game with an immersive space-themed design, featuring:

- Progressive difficulty that adapts to player skill level
- Multiple star types with varying point values
- High score tracking and global leaderboards
- Life system with heart collectibles
- Special power-ups and cosmic themes
- Over 50 levels of increasing challenge

## ✨ Features

### 🎮 Game Features
- **Progressive Difficulty**: Dynamically adapts to your skill level
- **Multiple Star Types**: Different stars with varying point values
- **High Score Tracking**: Compete globally and track personal bests
- **Life System**: Collect hearts to gain extra lives
- **Power-Ups**: Special abilities to boost your gameplay
- **Cosmic Themes**: Unlock stunning visual themes and backgrounds
- **50+ Levels**: Extensive gameplay with increasing challenges

### 🌐 Website Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**:
  - Multi-layer star system with depth effects
  - Nebula cloud effects with drifting animations
  - Periodic shooting stars
  - Parallax scrolling effects
  - Custom cursor effects (desktop only)
- **Modern UI/UX**:
  - Glass morphism effects
  - Gradient backgrounds with cosmic themes
  - Smooth scroll animations
  - Video modal integration
  - Mobile-friendly navigation menu
- **Accessibility**:
  - Reduced motion support
  - Keyboard navigation
  - Focus indicators
  - Screen reader friendly

## 🛠️ Technologies Used

### Frontend Stack
- **HTML5**: Semantic markup and modern web standards
- **CSS3**:
  - Tailwind CSS v3.4.17 for utility-first styling
  - PostCSS for CSS processing
  - Custom CSS animations and effects
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Google Fonts**:
  - Orbitron (headings)
  - Exo 2 (body text)
  - Space Mono (monospace)
- **Font Awesome**: Icon library for UI elements

### Build Tools
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing pipeline
- **Autoprefixer**: Cross-browser compatibility

## 📁 Project Structure

```
Catch-Falling-Star-Website/
├── assets/
│   ├── favicon/               # Favicon files for all devices
│   │   ├── favicon.ico
│   │   ├── apple-touch-icon.png
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   └── site.webmanifest
│   └── images/                # Game screenshots and assets
│       ├── logo.png
│       ├── screenshot_startgame.png
│       ├── screenshot_gameplay_1.png
│       ├── screenshot_gameplay_2.png
│       └── screenshot_gameover.png
├── src/
│   ├── input.css              # Tailwind CSS input file
│   ├── main.js                # Main JavaScript functionality
│   └── video-modal.css        # Video modal specific styles
├── dist/
│   └── output.css             # Compiled CSS output
├── index.html                 # Main landing page
├── privacy-policy.html        # Privacy policy page
├── package.json               # Project metadata and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Catch-Falling-Star-Website.git
   cd Catch-Falling-Star-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   This will start the Tailwind CSS watch process that automatically rebuilds CSS when changes are made.

4. **Build for production**
   ```bash
   npm run build
   ```
   This compiles the CSS for production deployment.

### Development Workflow
1. Make changes to HTML or JavaScript files directly
2. For CSS changes, modify `src/input.css` or add custom styles
3. The `npm run dev` command will automatically compile CSS changes
4. Open `index.html` in your browser to preview changes

## 🎨 Customization

### Colors & Themes
The website uses a cosmic color palette defined in CSS custom properties:

```css
:root {
  --cosmic-void: #0a0416;
  --deep-space: #1a1033;
  --nebula-purple: #4a1d7a;
  --stellar-pink: #ff6b9d;
  --cosmic-cyan: #00d9ff;
  --solar-gold: #ffd23f;
  /* ... and more */
}
```

### Animations
Key animations include:
- **Twinkling Stars**: `twinkle` animation
- **Floating Effects**: `float` animation
- **Shooting Stars**: `shooting-star` animation
- **Nebula Drift**: `nebula-drift` animation
- **Card Reveals**: `card-reveal` animation

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📱 Browser Support

- **Chrome/Chromium**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Safari**: 12+
- **Chrome Mobile**: 60+

## 🎯 Game Controls

### Desktop
- **Mouse**: Move cursor left/right to control basket
- **Arrow Keys**: Alternative control method
- **Click**: Interact with UI elements

### Mobile
- **Touch**: Drag finger left/right to move basket
- **Tap**: Interact with buttons and UI elements

## 📊 Game Statistics

- **Downloads**: 100K+
- **App Rating**: 4.8★
- **Levels**: 50+
- **Session Duration**: 5-15 minutes
- **Target Audience**: All ages (5+)

## 🔒 Privacy & Security

This website and game respect user privacy:
- No personal data collection
- No third-party tracking
- Offline gameplay capability
- GDPR compliant
- COPPA compliant for younger players

See [Privacy Policy](./privacy-policy.html) for detailed information.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow semantic HTML practices
- Maintain responsive design principles
- Test on multiple devices and browsers
- Keep accessibility in mind
- Comment complex JavaScript functionality

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first CSS framework
- **Google Fonts** for the beautiful typography
- **Font Awesome** for the comprehensive icon set
- **The JavaScript community** for inspiration and best practices

## 📞 Contact & Support

- **Website**: [https://your-website-url.com](https://your-website-url.com)
- **Google Play**: [Link to your Google Play Store listing](https://play.google.com/store/apps/details?id=your.package.name)
- **Email**: support@catchfallingstar.com
- **Twitter**: [@CatchFallingStar](https://twitter.com/catchfallingstar)
- **Discord**: [Join our community](https://discord.gg/catchfallingstar)

## 🔮 Future Enhancements

### Planned Website Features
- [ ] Progressive Web App (PWA) support
- [ ] Multiple language support
- [ ] Dark/light theme toggle
- [ ] Enhanced accessibility features
- [ ] Game statistics dashboard
- [ ] Community features and forums

### Planned Game Features
- [ ] Multiplayer mode
- [ ] Tournament system
- [ ] Additional star types
- [ ] Seasonal events
- [ ] Achievement system
- [ ] Cloud save synchronization

---

<div align="center">

**Made with ❤️ for cosmic adventurers everywhere!**

[⬆️ Back to Top](#-catch-falling-star---mobile-game-landing-page)

</div>