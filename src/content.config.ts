import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writingCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  writing: writingCollection,
};