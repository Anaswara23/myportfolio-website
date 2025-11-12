# Anaswara Raghuthaman - Portfolio Website

A modern, interactive portfolio website showcasing professional experience, projects, and skills with stunning visual animations.

Website Link: https://anaswara23.github.io/myportfolio-website/

## Features

### Hero Section
- **Typing Animation**: Animated greeting text that types out character by character
- **Dynamic Gradient Background**: Smoothly transitioning gradient colors that cycle through different palettes
- **Floating Geometric Shapes**: Animated shapes that float and rotate in the background
- **Three.js Particle System**: Interactive 500+ particle field that responds to mouse movement
- **Glass-morphism CTA Button**: Modern frosted glass effect on the call-to-action button

### Work Experience Timeline
- **Automatic Image Slideshows**: Each job position features a slideshow of 3 images
- **Smooth Fade Transitions**: Images transition with 1-second fade effects
- **Auto-Rotation**: Images automatically change every 3.5 seconds
- **Fixed Height Design**: Slideshow height matches the timeline content for visual consistency
- **Company Logos**: Circular icons showing company branding

### Interactive Testimonials
- **Carousel Navigation**: Arrow buttons and dot indicators for easy navigation
- **Read More/Less**: Expandable testimonial text for better readability
- **Smooth Transitions**: Elegant sliding animations between testimonials

### Responsive Design
- Mobile-optimized layout for all screen sizes
- Flexible grid systems that adapt to different viewports
- Touch-friendly navigation controls
- Optimized hero section height on smaller devices

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern animations, transitions, and flexbox/grid layouts
- **Vanilla JavaScript**: No dependencies for lightweight performance
- **Three.js**: 3D particle effects and interactive visualizations
- **Google Fonts**: Poppins font family

## Setup Instructions

1. The website is served using Python's built-in HTTP server
2. Open the website in your browser
3. All animations start automatically

## Customization

### Replacing Images

You can easily replace the placeholder images with your own:

1. **Profile Picture** (About section): Replace the Unsplash URL in line 64 of `index.html`
2. **Testimonial Avatars**: Replace URLs in lines 321, 342, and 364 of `index.html`
3. **Work Experience Slideshows**: Update the background-image URLs in each timeline item's slideshow section

### Adjusting Slideshow Speed

In `script.js`, line 75, change the interval value (currently 3500ms = 3.5 seconds):

```javascript
}, 3500); // Change this value
```

### Modifying Animation Timing

- **Typing Speed**: Line 13 in `script.js` - Change `setTimeout` delay (currently 100ms)
- **Gradient Animation**: Line 52 in `styles.css` - Adjust animation duration (currently 15s)
- **Floating Shapes**: Line 135 in `styles.css` - Modify animation duration (currently 20s)

## Browser Compatibility

- Modern browsers with ES6 support
- WebGL support recommended for Three.js effects (gracefully degrades without it)
- Works on Chrome, Firefox, Safari, and Edge

## Performance

- Lightweight: No heavy frameworks or libraries
- Optimized animations using CSS transforms and opacity
- Efficient particle system with controlled render loop
- Images loaded from CDN for fast delivery

## License

All rights reserved © 2025 Anaswara Raghuthaman
