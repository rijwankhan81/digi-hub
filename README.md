# Digi Hub — Website (Next.js + TypeScript + SCSS Modules + Framer Motion)

One-page marketing site for **Digi Hub**, built from the original proposal:
header/nav, hero with an animated "hub" diagram, an 8-service directory
("ports"), a showreel/video section, a client marquee, and a footer.

## Tech used

- **Next.js 14** (App Router) + **TypeScript**
- **CSS/SCSS Modules** (`*.module.scss`) — one stylesheet per component, no global class leakage
- **Framer Motion** — every section animates in on scroll/mount:
  - Header slides down on load, mobile menu expands/collapses
  - Hero heading + buttons stagger in
  - Hub diagram: lines draw in, nodes pop in with a stagger, pulses travel outward, core glows
  - Services rows fade/slide in one by one as you scroll, arrow animates on hover
  - Showreel background fades in, play button pops with a spring, copy staggers in
  - Client logos scroll in an infinite marquee
  - Footer CTA and heading reveal on scroll
- Your uploaded logo (`public/logo.jpg`) is used in the header and footer

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

> Note: `next/font/google` fetches font files (Space Grotesk, IBM Plex Sans,
> IBM Plex Mono) from Google Fonts at build time, so an internet connection
> is required when running `npm run build` / `npm run dev` the first time.

## Project structure

```
src/
  app/
    layout.tsx        → fonts + global styles
    page.tsx           → assembles all sections
    globals.scss       → design tokens (colors, spacing) as CSS variables
  components/
    Header/            → sticky nav, mobile menu
    Hero/               → headline + CTA
    HubDiagram/         → animated SVG "hub" graphic (Framer Motion)
    Services/           → 8-service "port list"
    Showreel/           → video/showreel placeholder section
    Clients/            → logo marquee
    Footer/             → contact + sitemap
public/
  logo.jpg              → your Digi Hub logo
```

## Customizing

- **Copy & services**: edit the arrays at the top of `Services.tsx` and `Clients.tsx`
- **Colors**: change the CSS variables in `src/app/globals.scss`
- **Real showreel video**: in `Showreel.tsx`, swap the `.bg` div for a `<video>` element
- **Real client logos**: replace the text tiles in `Clients.tsx` with `next/image` logo images
# digi-hub
