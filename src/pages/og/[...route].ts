import { OGImageRoute } from 'astro-og-canvas';
import type { OGImageOptions } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

// Generates a 1200x630 PNG per page at /og/<route>.png so every link gets
// a real card image instead of the single static og.webp.

type PageMeta = { title: string; description?: string };

const STATIC_PAGES: Record<string, PageMeta> = {
  index: {
    title: 'Ryan Bahadori',
    description: 'Developer, wrestler, and photographer.',
  },
  work: { title: 'Work', description: 'Things I have built and shipped.' },
  writing: { title: 'Writing', description: 'thoughts on design, code, and life.' },
  resources: { title: 'Resources', description: 'Curated links worth keeping around.' },
  projects: { title: 'Projects', description: 'Open source, live from GitHub.' },
};

function imageOptions(page: PageMeta): OGImageOptions {
  return {
    title: page.title,
    description: page.description,
    fonts: ['./public/static/fonts/inter-var.woff2'],
    bgGradient: [
      [13, 17, 23],
      [22, 27, 34],
    ],
    font: {
      title: { size: 64, color: [230, 241, 255], weight: 'Bold' },
      description: { size: 32, color: [139, 148, 158] },
    },
  };
}

// This version of astro-og-canvas takes a plain pages object (not a loader
// function), so resolve the collection first.
const posts = await getCollection('writing');
const PAGES: Record<string, PageMeta> = {
  ...STATIC_PAGES,
  ...Object.fromEntries(
    posts.map((post) => [
      `writing/${post.id}`,
      { title: post.data.title, description: post.data.summary } satisfies PageMeta,
    ]),
  ),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: PAGES,
  // Flat slugs ("writing-my-post.png") avoid file/dir collisions between
  // top-level pages and nested post routes, and give images real extensions.
  getSlug: (path) => `${path.replaceAll('/', '-')}.png`,
  getImageOptions: (_path, page) => imageOptions(page),
});
