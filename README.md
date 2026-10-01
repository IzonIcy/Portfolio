# Ryan Bahadori — Portfolio

Live at [portfolio-ecru-rho-94.vercel.app](https://portfolio-ecru-rho-94.vercel.app/)

[![CI](https://github.com/IzonIcy/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/IzonIcy/Portfolio/actions/workflows/ci.yml)

Personal site. Built with Astro because I wanted something fast that doesn't ship a megabyte of JavaScript just to render text.

## What's here

- A portfolio of work and projects
- Projects pulled live from GitHub at build time
- Search over the whole site via Pagefind
- Dark mode, responsive, hits 95+ on Lighthouse

## Stack

Astro 7, React 19 (where I actually need interactivity), Tailwind CSS. Deployed on Vercel.

## Run it

```bash
npm install
npm run dev     # localhost:4321
npm run build   # static site to dist/
```

## Structure

```
src/
├── pages/          # routes: index, work, projects, resources, search
├── components/     # astro + react components
├── layouts/        # page shells
├── data/           # structured content (work history, resources)
└── styles/         # tailwind + prose overrides
```

## Why Astro?

I've used Next.js for years but for a content site it always felt like overkill. Astro gives you zero JS by default and the pages are just HTML and CSS until you actually need a component that does something interactive. Simpler mental model, and has faster builds.

## License

MIT
