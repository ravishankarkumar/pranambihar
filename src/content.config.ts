import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    pillar: z.enum(['places', 'food', 'culture', 'people', 'history', 'now']),
    pillarLabel: z.string(),
    format: z.enum(['Field Note', 'Long Read', 'Practical Guide', 'Portrait', 'Maker & Material', 'Bihar Brief']),
    district: z.string(),
    publishedAt: z.coerce.date(),
    verifiedAt: z.coerce.date(),
    readTime: z.number().int().positive(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

const foods = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/foods' }),
  schema: z.object({
    name: z.string(),
    localName: z.string().optional(),
    description: z.string(),
    category: z.enum(['Main dishes', 'Everyday table', 'Breads & snacks', 'Drinks', 'Sweets & festival foods']),
    region: z.string(),
    season: z.string(),
    vegetarian: z.boolean(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { stories, foods };
