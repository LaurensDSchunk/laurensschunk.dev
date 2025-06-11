import type { MetadataRoute } from "next";
import projects from "@/data/projects.json";

const base = "https://laurensschunk.dev/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(2025, 5, 11),
      priority: 1,
    },
    {
      url: base + "portfolio",
      lastModified: new Date(),
      priority: 0.8,
    },
    // Fills in all of the projects
    ...projects.map((p) => ({
      url: base + `portfolio/${p.slug}`,
      lastModified: new Date(),
      priority: 0.5,
    })),
    // Tools
    {
      url: base + "tools/grade-calc",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
