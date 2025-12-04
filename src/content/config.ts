// src/content/config.ts
import { defineCollection, z } from "astro:content";

const newsletter = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    date: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  newsletter,
};
