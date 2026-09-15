import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";
import { localeAlternates } from "@/i18n/metadata";

const paths = ["", "/portfolio", "/blog", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(localeAlternates(path)).map(([lang, href]) => [lang, `${siteConfig.url}${href}`]),
    );
    return locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      alternates: { languages },
    }));
  });
}
