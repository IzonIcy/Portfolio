# https://portfolio-ecru-rho-94.vercel.app/

Personal site and blog. Built with Astro because I wanted something fast that doesn't ship a megabyte of JavaScript just to render text.

**Live:** [https://ryanbahadori.com](https://ryanbahadori.com)

## What's here

- A portfolio of work and projects
- Long-form writing on things I've been thinking about
- RSS feed at `/rss.xml`
- Dark mode, responsive, hits 95+ on Lighthouse

## Stack

Astro 5, React 18 (where I actually need interactivity), Tailwind CSS, MDX for content. Deployed on Vercel.

The MDX pipeline uses rehype-pretty-code (Shiki) for syntax highlighting — I spent way too long tweaking the theme config to get it right.

## Run it

```bash
npm install
npm run dev     # localhost:4321
npm run build   # static site to dist/
```

## Structure

```
src/
├── pages/          # routes: index, work, writing/[slug], etc.
├── content/        # MDX posts
├── components/     # astro + react components
├── layouts/        # page shells
├── data/           # structured content (work history, resources)
└── styles/         # tailwind + prose overrides
```

## Why Astro?

I've used Next.js for years but for a content site it always felt like overkill. Astro gives you zero JS by default — the blog pages are just HTML and CSS until you actually need a component that does something interactive. Simpler mental model, faster builds.

## License

MIT
