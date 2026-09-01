# Taylor Bornstein — Portfolio

Personal portfolio site: content and communications director. Built with
[Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed as a static
site so it's fast and cheap to host anywhere.

## Stack

- **Astro** — pages are plain `.astro` files, no client-side framework needed for a mostly-static
  site like this.
- **Tailwind v4** — styling via utility classes; theme tokens (colors, fonts) live in
  `src/styles/global.css` under `@theme`.
- **Content collections** — each work sample is a markdown file in `src/content/work/`, validated
  against the schema in `src/content.config.ts`.

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks then builds to dist/
npm run preview   # serve the production build locally
```

## Adding a work sample

Add a new markdown file to `src/content/work/`, e.g. `src/content/work/my-project.md`:

```markdown
---
title: "Project Title"
client: "Client Name"       # optional
role: "Content Strategist"
summary: "One sentence: what it was and what it achieved."
date: 2026-01-15
tags: ["Strategy", "Case Study"]
featured: true               # show on the homepage
draft: false                 # set true to hide from the live site
externalUrl: "https://..."   # optional link to the published piece
---

The body of the page — the full case study, in markdown.
```

The file's name becomes its URL: `my-project.md` → `/work/my-project`.

The four current entries (`bolt-ai-content-stack.md`, `mendix-pr-program.md`,
`mendix-team-buildout.md`, `mendix-brand-voice.md`) are drawn from real work history. Edit them
directly, add `externalUrl` where a published piece exists, or replace with new files entirely.

## Content still to confirm

- **Contact email** (`src/pages/contact.astro`) — currently set to the personal Gmail on file;
  swap in a professional address if you'd rather use one.
- **About page** (`src/pages/about.astro`) — bio and role history are filled in from your
  background; refine the voice/detail as you like.
- **Work samples** — the four entries are real but written from resume-level facts; add
  specifics, screenshots, or links to published pieces where you have them.

## Deploying

This is a static site (`npm run build` outputs `dist/`), so it works with any static host.
Netlify and Vercel both auto-detect Astro and deploy on push with no extra config — connect this
GitHub repo in either dashboard and point your domain (e.g. `www.taylorbornstein.com`) at it.
GitHub Pages works too via `astro build` in a workflow, if you'd rather avoid a third-party host.

## Project structure

```
src/
  components/     Nav, Footer, WorkCard
  content/work/   one markdown file per work sample
  layouts/        BaseLayout.astro (SEO meta, fonts, nav/footer)
  pages/          index, work/, about, contact
  styles/         global.css (Tailwind + theme tokens)
```

## Note on `job-search-context.md`

This repo also holds `job-search-context.md` — a CLAUDE.md-style context file with job-search
strategy (target roles, salary requirement, company screening notes). It's unrelated to the site
itself and isn't referenced by any page. Since this repo may end up connected to a public
deploy host, consider moving that file somewhere private rather than leaving it here.
