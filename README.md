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

The 41 current entries were ported from the taylorbornstein.com / Journo Portfolio export —
real work spanning Mendix, Iron Mountain, and freelance/personal writing back to 2005. The
`/work` page groups them by career chapter (`src/pages/work/index.astro`), inferred from the
`role` field — keep that field consistent with the era mapping there if you add more.

## Content still to confirm

- **Contact email** (`src/pages/contact.astro`) — currently set to the personal Gmail on file;
  swap in a professional address if you'd rather use one.
- **About page** (`src/pages/about.astro`) — bio and role history are filled in from your
  background; refine the voice/detail as you like.
- **Hosted assets** — many entries link to `media.journoportfolio.com` (PDFs/images) or to
  `taylorbornstein.com/articles/...` pages that won't exist once this site replaces the old one.
  Worth migrating: download the Journo Portfolio media and self-host it (e.g. in `public/`), and
  either recover the `/articles/...` copy or drop those `externalUrl`s. A handful of entries
  (the `Web Copy — *` and two short stories) have no link at all — add the original text to the
  markdown body when you have it.
- **Featured picks** — five entries are marked `featured: true` for the homepage; swap in
  whichever best represent current work.

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
