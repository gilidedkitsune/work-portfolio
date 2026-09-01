import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    role: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
  }),
});

export const collections = { work };
