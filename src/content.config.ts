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

const foodCombinations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/food-combinations' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    items: z.array(z.object({ label: z.string(), foodId: z.string().optional() })),
    occasion: z.string(),
    region: z.string(),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    featured: z.boolean().default(false),
  }),
});

const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    district: z.string(),
    kind: z.enum(['History & heritage', 'Nature', 'Sacred journey', 'City & culture']),
    duration: z.string(),
    bestSeason: z.string(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    highlights: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

const journeys = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journeys' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    duration: z.string(),
    startFrom: z.string(),
    bestFor: z.array(z.string()),
    stops: z.array(z.string()),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
  }),
});

const culture = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/culture' }),
  schema: z.object({
    title: z.string(),
    localName: z.string().optional(),
    summary: z.string(),
    section: z.enum(['festivals', 'languages', 'traditions', 'before-it-fades']),
    kind: z.enum(['Festival', 'Language', 'Living tradition', 'Before it fades']),
    season: z.string(),
    region: z.string(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { stories, foods, foodCombinations, places, journeys, culture };
