import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CORNER_CLUSTER } from "@/components/corner-cluster";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ParticleField } from "@/components/particle-field";
import { siteConfig } from "@/config/site";
import { getCareer } from "@/content/career";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);
  const currentRole = getCareer(locale)[0];

  const navItems = [
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/kontakt`, label: dict.nav.kontakt },
  ];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    jobTitle: dict.home.tagline,
    url: `${siteConfig.url}/${locale}`,
    sameAs: [siteConfig.linkedinUrl, siteConfig.githubUrl],
    worksFor: {
      "@type": "Organization",
      name: currentRole.company,
    },
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-brand-orange">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <ParticleField
        className="absolute inset-0"
        count={90}
        particleColor="rgba(255, 255, 255, 0.85)"
        lineColorRgb="255, 255, 255"
      />

      <nav aria-label={dict.nav.main} className={`absolute top-6 right-6 z-20 ${CORNER_CLUSTER}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:opacity-80">
            {item.label}
          </Link>
        ))}
        <LocaleSwitcher locale={locale} />
      </nav>

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
        <Image
          src="/brand/logo-symbol.svg"
          alt={siteConfig.name}
          width={140}
          height={161}
          className="h-24 w-auto sm:h-32"
          priority
        />
        <h1 className="text-2xl font-semibold tracking-[0.2em] text-white uppercase sm:text-3xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-md text-sm text-white/80">{dict.home.tagline}</p>
      </div>

      <div aria-label="Social media" className={`absolute bottom-6 left-6 z-20 ${CORNER_CLUSTER}`}>
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80"
        >
          <LinkedinIcon className="size-5" />
        </a>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:opacity-80"
        >
          <GithubIcon className="size-5" />
        </a>
        <a href={`mailto:${siteConfig.email}`} aria-label="E-mail" className="hover:opacity-80">
          <Mail className="size-5" strokeWidth={1.75} />
        </a>
      </div>

      <p className="absolute bottom-6 right-6 z-20 text-sm text-white/70">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </div>
  );
}
