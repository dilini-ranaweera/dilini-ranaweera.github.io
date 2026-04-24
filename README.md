# Dilini Ranaweera — Personal Website

My personal site, rebuilt from scratch on a modern React stack and deployed to GitHub Pages.

**Live:** https://dilini-ranaweera.github.io

## Stack

- **React 18** — component model
- **Vite 5** — dev server + production build (replaces Create React App)
- **Framer Motion** — scroll reveals and micro-interactions (replaces the abandoned `react-reveal`)
- **Lucide React** — icon set (replaces Material UI icons)
- **Modern CSS** — custom properties, fluid `clamp()` typography, a real mobile breakpoint, respects `prefers-reduced-motion`

## Local development

```bash
npm install
npm run dev        # starts a Vite dev server at http://localhost:5173
npm run build      # production build to ./dist
npm run preview    # preview the production build locally
```

## Project structure

```
.
├── index.html                       # Vite entry point
├── public/                          # static assets served at the site root
│   ├── me.jpg, meme.jpg, favicon.ico, ...
│   └── images/                      # work-experience images
├── src/
│   ├── main.jsx                     # React entry
│   ├── App.jsx
│   ├── styles.css                   # all styles (design tokens + components + responsive)
│   ├── data.js                      # experiences + projects content (edit me to update the site)
│   └── components/
│       ├── Navbar.jsx               # sticky nav + mobile drawer
│       ├── Hero.jsx                 # gradient hero w/ staggered reveal
│       ├── About.jsx
│       ├── Experience.jsx           # 3-column grid on desktop, 1-col on mobile
│       ├── Projects.jsx             # alternating image/text
│       ├── Footer.jsx
│       └── Reveal.jsx               # small Framer Motion wrapper
├── .github/workflows/deploy.yml     # GitHub Pages deploy via GitHub Actions
├── vite.config.js
└── package.json
```

## Editing content

All the "what's on the page" content lives in **`src/data.js`** — work experiences and personal projects. Intro and About copy lives in `src/components/Hero.jsx` and `src/components/About.jsx`.

## Deployment

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Installs deps with `npm ci`
2. Builds the site with `npm run build`
3. Uploads `dist/` as a Pages artifact
4. Deploys it to GitHub Pages

For this to work you need to:

1. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`. The Actions tab will show the deploy running; once green, the site is live.
