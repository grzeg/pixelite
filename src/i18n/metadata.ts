import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export function ogLocaleFor(locale: Locale) {
  return locale === "pl" ? "pl_PL" : "en_US";
}

// Buduje hreflang alternates (w tym x-default) dla danej ścieżki bez prefiksu
// locale, np. path="/portfolio" -> { pl: "/pl/portfolio", en: "/en/portfolio", "x-default": "/pl/portfolio" }.
export function localeAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `/${locale}${path}`;
  }
  languages["x-default"] = `/${defaultLocale}${path}`;
  return languages;
}

export function canonicalPath(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

// Wspólny kształt metadanych podstrony: canonical + hreflang + Open Graph + Twitter Card.
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = canonicalPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: localeAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocaleFor(locale),
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
