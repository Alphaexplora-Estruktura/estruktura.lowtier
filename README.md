# Estruktura

> **The Zenith of Artisanal Foundations** — A luxury artisanal carpet brand website built with React, TypeScript, Vite, and Tailwind CSS v4.

---

## Overview

**Estruktura** is a premium single-page marketing website for an exclusive artisanal carpet brand. The site is designed to evoke opulence, heritage, and craftsmanship through a carefully curated dark aesthetic — deep crimsons, antique gold accents, and a cream palette — paired with cinematic scroll animations and glassmorphism UI effects.

The project is commission-based. Visitors are guided through the brand story, explore the private collection, discover the craftsmanship process, and ultimately request a private consultation.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.2.0 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | ~5.9.3 | Type safety |
| [Vite](https://vite.dev/) | ^7.3.1 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.1 | Utility-first styling |
| ESLint | ^9.39.1 | Code linting |

---

## Project Structure

```
estruktura/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images & media
│   ├── components/             # Reusable UI sections
│   │   ├── Navbar.tsx          # Fixed header with scroll-aware glassmorphism & mobile menu
│   │   ├── Hero.tsx            # Full-screen landing section with animated headline
│   │   ├── About.tsx           # Brand heritage & philosophy section
│   │   ├── Collection.tsx      # Private Reserve product grid (6 collections)
│   │   ├── Craftsmanship.tsx   # Feature grid showcasing craft standards
│   │   ├── Gallery.tsx         # Masonry-style texture showcase
│   │   └── CTA.tsx             # Commission request form / contact section
│   ├── hooks/
│   │   └── useIntersectionObserver.ts  # Custom hook for scroll-triggered animations
│   ├── pages/
│   │   └── Home.tsx            # Root page composing all sections + footer
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Global styles, custom utilities & Tailwind config import
├── tailwind.config.ts          # Custom design tokens & theme
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+**
- npm (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd estruktura

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## Design System

### Color Palette

The brand palette is defined as custom Tailwind tokens in `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `estruktura-bg` | `#4D0011` | Page background (deep crimson) |
| `estruktura-accent` | `#7B1830` | Ambient glows & radial gradients |
| `estruktura-gold` | `#DBBE9B` | Primary accent — headings, borders, CTAs |
| `estruktura-cream` | `#F8F1D6` | Body text & general foreground |

### Typography

| Role | Font | Source |
|---|---|---|
| Headings (`font-serif`) | Playfair Display | Google Fonts |
| Body / UI (`font-sans`) | Lato | Google Fonts |

### Custom Utilities (`index.css`)

- **`.text-glow-gold`** — Applies a warm golden text-shadow for glowing emphasis on gold text.
- **`.glass-panel`** — Glassmorphism surface: deep crimson background, `backdrop-blur`, gold border.
- **`.carpet-texture-overlay`** — Adds a subtle SVG fractal noise pseudo-element over images to simulate a woven textile feel.

---

## Page Sections

The single page (`Home.tsx`) renders the following sections in order:

### 1. `Navbar`
- Fixed header that transitions from transparent to a blurred glassmorphism background on scroll.
- Desktop navigation with animated underline hover effects.
- Fully responsive mobile menu overlay with staggered animation.

### 2. `Hero`
- Full-viewport hero with a dark textured background image and radial gradient vignette.
- Staggered `fade-in-up` CSS animations for the tagline, headline, sub-headline, and CTA buttons.
- Two CTAs: **"Request Private Access"** (jumps to contact) and a "discover" scroll teaser with a bouncing chevron.

### 3. `About`
- Two-column layout: brand philosophy text on the left, an artisan photo grid on the right.
- Animated stat call-outs: **450 Hours Per Weave** and **100% Artisan Silk & Wool**.
- Scroll-triggered slide-in animations via `useIntersectionObserver`.

### 4. `Collection`
- A responsive 3-column product grid titled **"The Curator's Vault"**.
- Six named collections with limited availability status badges (e.g. "3 Available", "Sold Out - Waitlist", "Commission Only").
- Hover effects: image scale reveal, persistent tinted veil that lifts on hover, and a curiosity CTA overlay.
- Staggered entrance animations with 150ms per-card offset.

### 5. `Craftsmanship`
- Alternating image/text feature grid showcasing four craft standards:
  - Hand-Knotted Construction
  - Himalayan Wool & Artisan Silk
  - Natural Dye Mastery
  - Bespoke Dimensioning

### 6. `Gallery`
- Masonry-style CSS grid of 6 carpet texture close-up images.
- `GalleryCard` sub-component uses `useIntersectionObserver` for per-card fade-in.
- Hover reveals a zoom-invite overlay with a frosted glass badge.

### 7. `CTA` (Contact)
- Commission request form with architectural gold corner brackets.
- Fields: Principal Name, Estate/Project Location, Confidential Email.
- Live urgency indicator: animated red pulse with remaining slot count.

---

## Custom Hook: `useIntersectionObserver`

Located at `src/hooks/useIntersectionObserver.ts`.

A reusable hook that wraps the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to drive scroll-triggered CSS animations. Returns a `[ref, isVisible]` tuple.

```tsx
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

// Apply to an element:
<div ref={ref} className={isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}>
  ...
</div>
```

---

## Key Design Decisions

- **No routing**: The site is a single scrollable page. All navigation links use anchor hashes (`#about`, `#collection`, `#contact`), assisted by `scroll-behavior: smooth`.
- **Animation architecture**: All scroll animations are pure CSS class toggling driven by the `useIntersectionObserver` hook — no animation library dependency.
- **Glassmorphism Navbar**: The navbar applies `backdrop-blur` and a semi-transparent dark background only after the user scrolls past 50px, preserving a clean transparent state over the hero.
- **Tailwind v4**: Uses the new `@import "tailwindcss"` syntax and `@config` directive instead of the legacy PostCSS plugin setup.

---

## License

This project is private. All rights strictly reserved © Estruktura.
