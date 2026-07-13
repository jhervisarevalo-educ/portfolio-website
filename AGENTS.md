# AGENTS.md — Portfolio Website

## Tech Stack
- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 3.4 (utility-first, dark mode via `class` strategy)
- **Animations:** Vanilla JS — Intersection Observer API for scroll reveals, CSS transitions/keyframes for hover/micro-interactions
- **Fonts:** Inter (body), Space Grotesk (headings) — loaded via Google Fonts
- **Language:** TypeScript (strict mode)

## Project Structure
```
src/
├── layouts/Layout.astro      # Base HTML shell (meta, fonts, global styles, dark mode init)
├── components/
│   ├── Navbar.astro           # Fixed glass-morphism nav, smooth scroll, mobile hamburger
│   ├── Hero.astro             # Landing section, typing effect, starfield canvas
│   ├── About.astro            # Bio section with scroll reveal
│   ├── Skills.astro           # Skill badges with staggered entrance + hover glow
│   ├── Projects.astro         # Project cards with hover lift + glow border
│   ├── Contact.astro          # Email/GitHub links with glowing CTA button
│   └── Footer.astro           # Simple footer with social links
├── scripts/
│   └── animations.js          # All JS: scroll reveals, typing effect, starfield, theme toggle
├── styles/
│   └── (global styles are in Layout.astro <style is:global>)
└── pages/
    └── index.astro            # Main page assembling all components
```

## Color Palette (Space Theme)
| Token | Hex | Usage |
|-------|-----|-------|
| `space-black` | `#0B0D17` | Primary background |
| `space-surface` | `#1A1D2E` | Cards, elevated surfaces |
| `space-glow` | `#22D3EE` | Primary accent (cyan) |
| Purple | `#7C3AED` | Secondary accent |
| Gradient | Purple → Cyan | Hero text, buttons |

## Animation Conventions
1. **Scroll reveals:** Use `.reveal` or `.reveal-stagger` CSS classes on elements. The Intersection Observer in `animations.js` adds `.visible` when in view.
2. **Stagger delays:** Use `style="transition-delay: ${i * 100}ms"` on `.reveal-stagger` elements.
3. **Hover effects:** Use Tailwind `hover:` utilities + custom `.glow-border` class for cosmic glow on cards.
4. **Typing effect:** Configured in `animations.js` — edit the `phrases` array to change cycling text.
5. **Starfield:** Canvas-based particle animation in Hero section. Lightweight, respects `prefers-reduced-motion`.
6. **`prefers-reduced-motion`:** All animations are disabled for users with this OS setting. Elements snap to final state immediately.

## Dark / Light Mode
- Dark mode is the default (`<html class="dark">`)
- Toggle persisted in `localStorage` under key `theme`
- Layout.astro includes an inline `<script>` to apply stored theme before paint (no flash)
- Light mode uses `body:not(.dark)` overrides in global CSS

## Key Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Projects
- `Projects.astro` contains 3 group project cards: Collar Sort, BluPlan, BankQueue
- Each card shows: title, description, tech tags (languages + frameworks), "Group Project" badge, and link to GitHub repo
- Repos hosted under the `Larusu` GitHub account

## Placeholder Content
- Skill icons are emoji — replace with proper SVG icons or a library if desired

## Deployment
- Built for static hosting: Vercel, Netlify, or GitHub Pages
- No server-side logic — fully static output in `dist/`
