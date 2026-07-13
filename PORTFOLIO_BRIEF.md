# Portfolio Website Brief

## About Me
- **Name:** Jhervis Arevalo
- **Status:** BSCS (Bachelor of Science in Computer Science) Student
- **Career Goal:** Mobile App Developer
- **Location:** Quezon City, Philippines

## Skills
- **Programming Languages:** C++, Python, Dart, Java

## Contact
- **GitHub:** https://github.com/jhervisarevalo-educ
- **Email:** jrarevalo110104@gmail.com

## Website Goals
Build a personal portfolio website that introduces me, showcases my skills, and highlights my journey toward becoming a mobile app developer. The site should feel clean, modern, and professional, suitable for sharing with recruiters, professors, or potential employers/clients.

## Suggested Sections
1. **Hero / Landing Section**
   - My name and title (e.g., "Jhervis Arevalo — BSCS Student & Aspiring Mobile App Developer")
   - A short tagline about my goals
   - Location (Quezon City, Philippines)

2. **About Me**
   - Brief bio: currently a BSCS student focused on becoming a mobile app developer
   - Mention interest in mobile development (Dart/Flutter, Java/Android, etc.)

3. **Skills**
   - Display programming languages: C++, Python, Dart, Java
   - Use icons, badges, or a simple grid/list

4. **Projects**
   - Pull project repositories from my GitHub (https://github.com/jhervisarevalo-educ) if possible
   - Use MCP/GitHub integration to list repos with descriptions
   - Otherwise, leave placeholder project cards I can fill in later

5. **Contact**
   - Email: jrarevalo110104@gmail.com
   - GitHub link: https://github.com/jhervisarevalo-educ
   - Optional: simple contact form or "mailto:" button

## Design Preferences
- Clean, modern, minimal design
- Mobile-responsive (works well on phones, since I want to be a mobile dev — this is a nice touch/theme)
- Dark mode or light mode toggle (optional, nice-to-have)
- Simple color palette (e.g., one accent color + neutral background)
- **Animated throughout** — the site should feel lively and interactive, not static (see Animations section below)

## Animations
I want animations woven into the site, not just a static page. Suggested places to use them:

1. **Hero / Landing Section**
   - Fade-in or slide-up animation for my name/title when the page loads
   - Optional: typing/typewriter effect for the tagline (e.g., cycling through "Mobile App Developer", "BSCS Student", "Flutter Enthusiast")
   - Subtle background animation (floating shapes, gradient shift, or particles) — keep it lightweight, not distracting

2. **Scroll Animations**
   - Sections (About, Skills, Projects, Contact) should fade/slide into view as the user scrolls down
   - Use an intersection-observer-based approach so it's smooth and not janky

3. **Skills Section**
   - Animate skill badges/icons in with a staggered entrance (one after another, not all at once)
   - Optional: hover effect that makes each skill icon scale up slightly or glow

4. **Projects Section**
   - Project cards animate in with a slight fade/slide on scroll
   - Hover effect on cards (lift up slightly with a shadow, or reveal more info)

5. **Navigation**
   - Smooth scroll when clicking nav links (instead of an instant jump)
   - Optional: animated underline or highlight on the active nav link

6. **Micro-interactions**
   - Buttons (like the contact/email button) should have a smooth hover/press animation
   - Page transitions, if using a framework with routing, should be smooth rather than instant

### Animation Implementation Notes
- Keep animations **smooth and subtle** — performance and good taste matter more than flashy effects
- Respect `prefers-reduced-motion` so the site is accessible to users sensitive to motion
- Suggested tools depending on tech stack:
  - Plain HTML/CSS/JS: CSS transitions/keyframes + Intersection Observer API
  - React/Next.js/Astro: Framer Motion (or GSAP for more advanced sequences)
- Avoid animations that block usability or delay the user from reading content (e.g., don't hide text behind long intro animations)

## Tech Stack (recommended)
- **Framework:** Astro — fast, ships minimal JavaScript by default, well-suited for a content-focused portfolio site
- **Styling:** Tailwind CSS — utility-first styling, fast to build and easy to keep consistent
- **Animations:** Vanilla JS with the Intersection Observer API for scroll-triggered reveals, plus CSS transitions/keyframes for hover and micro-interactions
- **Deployment:** Vercel or Netlify (both have simple, free hosting for Astro sites); GitHub Pages is a fallback option

**Alternative stack (if I want more interactivity/room to grow later):** Next.js + Tailwind CSS + Framer Motion for animations. This is heavier but makes complex animation sequencing easier and gives more room to add things like a blog or CMS down the line.

OpenCode should default to the Astro + Tailwind + vanilla JS stack unless there's a strong reason to switch (e.g., I ask for more complex interactive features later).

## Instructions for OpenCode
- Scaffold the portfolio website using the recommended tech stack above (Astro + Tailwind CSS + vanilla JS animations).
- Use the "About Me," "Skills," "Projects," and "Contact" sections as the core structure.
- Implement the animations described in the Animations section above — scroll-triggered reveals, staggered skill badges, hover effects on project cards, smooth nav scrolling, and subtle micro-interactions.
- If GitHub MCP access is available, fetch my repositories and generate project cards automatically.
- Keep placeholder content clearly marked (e.g., `<!-- TODO: add project description -->`) wherever real project details are still needed.
- Generate an `AGENTS.md` file at the project root after scaffolding, summarizing the tech stack, animation libraries, and conventions used, so future edits stay consistent.
