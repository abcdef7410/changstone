import type { MetadataRoute } from "next";
import { projects } from "./cases/projects";
import { site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/cases", "/detention-basin", "/gypsum", ...projects.map(({ slug }) => `/cases/${slug}`)].map((path) => ({ url: `${site.url}${path}` }));
}
