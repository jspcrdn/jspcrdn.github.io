import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { about };
