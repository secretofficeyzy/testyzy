import type { MetadataRoute } from "next";
import { routing } from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/site";

const publicPaths = [
  "",
  "/preturi",
  "/despre",
  "/contact",
  "/yzyshop",
  "/yzyshop/merch",
  "/yzyshop/anvelope",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) => {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;

    return publicPaths.map((path) => ({
      url: `${siteUrl}${prefix}${path}`,
      lastModified,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    }));
  });
}
