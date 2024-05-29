import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wecodez.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/tr`,
      lastModified,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
        },
      },
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr`,
        },
      },
      priority: 1,
    },
    {
      url: `${baseUrl}/tr/about`,
      lastModified,
      alternates: {
        languages: {
          en: `${baseUrl}/en/about`,
        },
      },
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr/about`,
        },
      },
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tr/contact`,
      lastModified,
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
        },
      },
      priority: 0.5,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr/contact`,
        },
      },
      priority: 0.5,
    },
  ];
}
