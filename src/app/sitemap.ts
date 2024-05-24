import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wecodez.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: baseUrl + "/tr",
          en: baseUrl + "/en",
        },
      },
      priority: 1,
    },
    {
      url: baseUrl + "/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: baseUrl + "/tr/about",
          en: baseUrl + "/en/about",
        },
      },
      priority: 0.8,
    },
    {
      url: baseUrl + "/contact",
      lastModified: new Date(),
      alternates: {
        languages: {
          tr: baseUrl + "/tr/contact",
          en: baseUrl + "/en/contact",
        },
      },
      priority: 0.5,
    },
  ];
}
