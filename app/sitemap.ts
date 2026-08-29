import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/info", "/contact", "/work", "/terms", "/privacy"];
  return routes.map((route) => ({
    url: `https://webzyra.xyz${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
