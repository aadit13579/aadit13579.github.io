import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aadit13579.github.io/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/veda`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/data-center`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/llm-observatory`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/isl`,
      lastModified: new Date(),
    },
  ];
}