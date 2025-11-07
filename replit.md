# Overview

This is a modern, interactive portfolio website for Anaswara Raghuthaman, a Software Engineer. The portfolio features advanced visual animations including Three.js particle systems, typing animations, dynamic gradient backgrounds, floating geometric shapes, and interactive components like testimonial carousels and work experience slideshows. The site is built as a static frontend application with no backend server requirements, designed to showcase professional experience, projects, skills, and testimonials with stunning visual effects.

# Recent Changes

**November 7, 2025**
- Implemented automatic image slideshows in work experience timeline (3 images per job, 3.5s auto-rotation)
- Created creative animated hero section with typing animation, dynamic gradient background, and floating shapes
- Enhanced Three.js particle system with mouse-responsive interactions
- Added smooth fade transitions (1s duration) between slideshow images
- Fixed all image references with hosted placeholder URLs (About section profile and testimonial avatars)
- Implemented responsive design with mobile-optimized layouts
- Created comprehensive README documentation

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack**: Pure HTML5, CSS3, and Vanilla JavaScript with no framework dependencies
- **Rationale**: Lightweight performance and minimal load times for a portfolio site
- **Pros**: Fast loading, no build process, easy to host statically
- **Cons**: Manual DOM manipulation for complex interactions

**Visual Effects Engine**: Three.js (CDN-loaded v0.152.2) for 3D particle systems
- **Rationale**: Professional visual appeal with interactive 500+ particle field responding to mouse movement
- **Implementation**: Separate canvas container integrated into hero section
- **Pros**: Impressive visual effects, hardware-accelerated rendering
- **Cons**: Additional library dependency, potential performance impact on low-end devices

**Animation System**: CSS3 transitions and JavaScript-based animations
- **Components**:
  - Typing animation (character-by-character text reveal)
  - Dynamic gradient backgrounds with smooth color transitions
  - Floating geometric shapes with rotation effects
  - Fade transitions for image slideshows (1-second duration)
  - Carousel sliding animations for testimonials
- **Rationale**: Native browser capabilities for smooth 60fps animations

**Responsive Design Pattern**: Mobile-first with flexible layouts
- **Implementation**: CSS Grid and Flexbox for adaptive layouts
- **Features**: Touch-friendly navigation, viewport-optimized hero section
- **Breakpoints**: Adjusts for different screen sizes without framework

## Component Architecture

**Hero Section**:
- Layered visual system (3D canvas + CSS particles + floating shapes + text content)
- Typing animation with cursor effect
- Glass-morphism CTA button design
- Dynamic gradient background cycling through color palettes

**Work Experience Timeline**:
- Automatic image slideshows (3 images per position)
- Auto-rotation every 3.5 seconds
- Fixed-height design for visual consistency
- Company logo integration with circular icons

**Testimonial Carousel**:
- Navigation: Arrow buttons and dot indicators
- Expandable text with "Read More/Less" functionality
- Smooth slide transitions using CSS transforms
- State management via JavaScript DOM manipulation

**Navigation**:
- Sticky header with scroll persistence
- Anchor-based routing for single-page navigation
- External PDF resume link (opens in new tab)

## File Organization

**Structure**:
- `index.html` - Main HTML structure and content
- `styles.css` - All styling, animations, and responsive rules
- `script.js` - Interactive behavior and animation initialization
- `attached_assets/` - Alternative/backup versions of core files
- `MyResume.pdf` - External resume document

**Initialization Flow**:
1. DOMContentLoaded event triggers initialization
2. Hero animations start (typing, Three.js setup)
3. Work experience slideshows initialize with timers
4. Testimonial carousel sets up event listeners

# External Dependencies

## Third-Party Libraries

**Three.js**: 3D graphics library loaded via CDN
- **Version**: 0.152.2
- **Source**: `https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js`
- **Usage**: Particle system rendering in hero section
- **Integration**: Loaded in HTML head, initialized in `initThreeJS()` function

**Google Fonts**: Poppins font family
- **Weights**: 300, 400, 600, 700
- **Source**: Google Fonts CDN with preconnect optimization
- **Usage**: Primary typography throughout the site

## Static Assets

**Resume Document**: `MyResume.pdf`
- Hosted locally, linked from navigation
- Opens in new browser tab

**Images**: Placeholder images referenced in README
- Work experience slideshows (3 images per job)
- Company logos (circular icons)
- Testimonial avatars

## Hosting & Deployment

**Server**: Python's built-in HTTP server (mentioned in README)
- **Rationale**: Simple static file serving for development/demo
- **Alternative**: Any static hosting service (GitHub Pages, Netlify, Vercel)
- **Requirements**: No server-side processing needed

## Browser APIs

**Canvas API**: Used by Three.js for WebGL rendering
**DOM API**: Direct manipulation for animations and interactions
**CSS Custom Properties**: For dynamic theming and animations