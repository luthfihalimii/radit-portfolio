import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const optionalString = z.preprocess((value) => {
  if (value === null || value === undefined) return undefined;
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }
  if (typeof value === "number") return String(value);
  return value;
}, z.string().optional());

const sharedEntryFields = {
  title: z.string(),
  date: optionalString,
  tags: z.array(z.string()).optional(),
  url: optionalString,
};

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    name: z.string(),
    designation: z.string(),
    location: z.string(),
    pronouns: optionalString,
    website: optionalString,
  }),
});

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    ...sharedEntryFields,
    org: z.string().optional(),
    location: z.string().optional(),
  }),
});

const studies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/studies" }),
  schema: z.object({
    ...sharedEntryFields,
    institute: z.string().optional(),
    location: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    ...sharedEntryFields,
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certificates" }),
  schema: z.object({
    ...sharedEntryFields,
    org: z.string().optional(),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    date: optionalString,
    url: optionalString,
    url_name: optionalString,
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/contact" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    url: optionalString,
  }),
});

export const collections = {
  about,
  works,
  studies,
  projects,
  certificates,
  blogs,
  contact,
};
