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
    relatedPlaces: z.array(z.string()).default([]),
    relatedFoods: z.array(z.string()).default([]),
    relatedCulture: z.array(z.string()).default([]),
    relatedPeople: z.array(z.string()).default([]),
    relatedHistory: z.array(z.string()).default([]),
    relatedEscapes: z.array(z.string()).default([]),
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
    relatedCulture: z.array(z.string()).default([]),
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

const snacks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/snacks' }),
  schema: z.object({
    title: z.string(),
    localName: z.string().optional(),
    summary: z.string(),
    items: z.array(z.string()),
    moment: z.string(),
    region: z.string(),
    type: z.enum(['Pairing', 'Street snack', 'Roasted snack', 'Everyday ritual']),
    vegetarian: z.boolean(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

const fruits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fruits' }),
  schema: z.object({
    name: z.string(),
    localName: z.string().optional(),
    summary: z.string(),
    season: z.string(),
    region: z.string(),
    identity: z.string(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

const prasads = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prasads' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    observance: z.string(),
    items: z.array(z.string()),
    region: z.string(),
    season: z.string(),
    status: z.enum(['Documented starting point', 'Regional and household tradition']),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    relatedFoods: z.array(z.string()).default([]),
    relatedCulture: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
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
    travelTime: z.string(),
    bestSeason: z.string(),
    idealGroup: z.array(z.string()),
    transport: z.string(),
    departure: z.string(),
    returnBy: z.string(),
    pace: z.string(),
    budget: z.string(),
    bestFor: z.array(z.string()),
    stops: z.array(z.string()),
    itinerary: z.array(z.object({ period: z.string(), plan: z.string() })),
    foodStops: z.array(z.string()).default([]),
    practicalNotes: z.array(z.string()).default([]),
    verifiedAt: z.coerce.date(),
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
    section: z.enum(['festivals', 'languages', 'art-craft', 'textiles', 'music-performance', 'traditions', 'living-memory']),
    kind: z.enum(['Festival', 'Language', 'Art & craft', 'Textile', 'Music & performance', 'Living tradition', 'Living memory']),
    season: z.string(),
    region: z.string(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    videos: z.array(z.object({
      youtubeId: z.string(),
      title: z.string(),
      channel: z.string(),
      caption: z.string().optional(),
    })).default([]),
    relatedFoods: z.array(z.string()).default([]),
    relatedPeople: z.array(z.string()).default([]),
    relatedPlaces: z.array(z.string()).default([]),
    relatedHistory: z.array(z.string()).default([]),
  }),
});

const history = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/history' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.enum(['Ancient Bihar', 'Faith & learning', 'Kingdoms & powers', 'Colonial Bihar', 'Freedom movement', 'Modern Bihar']),
    dateLabel: z.string(),
    region: z.string(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    relatedPlaces: z.array(z.string()).default([]),
    relatedPeople: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    knownFor: z.string(),
    summary: z.string(),
    category: z.enum(['Historical figures', 'Artists & writers', 'Scientists & scholars', 'Sport & public life', 'Entrepreneurs & builders', 'Community custodians']),
    years: z.string(),
    region: z.string(),
    featured: z.boolean().default(false),
    accent: z.enum(['gold', 'blue', 'red', 'green', 'clay', 'indigo']),
    relatedCulture: z.array(z.string()).default([]),
    relatedHistory: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { stories, foods, foodCombinations, snacks, fruits, prasads, places, journeys, culture, history, people };
