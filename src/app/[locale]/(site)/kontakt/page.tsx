import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).meta.kontaktTitle };
}

const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const cvHref: Record<Locale, string> = {
  pl: "/cv/grzegorz-martowski-pl.pdf",
  en: "/cv/grzegorz-martowski-en.pdf",
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-medium">{dict.kontakt.title}</h1>
        <p className="mt-2 text-muted-foreground">{dict.kontakt.intro}</p>
        <p className="mt-1 text-sm text-muted-foreground">{dict.kontakt.location}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a href={`mailto:${siteConfig.email}`} className={cn(buttonVariants({ variant: "default" }))}>
          {dict.kontakt.emailButton}
        </a>
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          GitHub
        </a>
        <a href={cvHref[locale]} download className={cn(buttonVariants({ variant: "outline" }))}>
          {dict.kontakt.cvButton}
        </a>
      </div>

      <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
        <p>{dict.kontakt.responseTime}</p>
        <p>{dict.kontakt.openTo}</p>
      </div>

      <dl className="flex flex-col gap-2 border-t border-border pt-6 text-sm">
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 text-muted-foreground">E-mail</dt>
          <dd>{siteConfig.email}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 text-muted-foreground">LinkedIn</dt>
          <dd>{displayUrl(siteConfig.linkedinUrl)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 text-muted-foreground">GitHub</dt>
          <dd>{displayUrl(siteConfig.githubUrl)}</dd>
        </div>
      </dl>
    </div>
  );
}
