import Image from "next/image";
import Link from "next/link";

import { CORNER_CLUSTER } from "@/components/corner-cluster";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const navItems = [
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/kontakt`, label: dict.nav.kontakt },
  ];

  return (
    <>
      <Link href={`/${locale}`} aria-label={siteConfig.name} className="fixed top-6 left-6 z-20 flex items-center hover:opacity-80">
        <Image src="/brand/logo-symbol.svg" alt={siteConfig.name} width={40} height={46} className="h-8 w-auto" priority />
      </Link>

      <nav aria-label={dict.nav.main} className={`fixed top-6 right-6 z-20 ${CORNER_CLUSTER}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:opacity-80">
            {item.label}
          </Link>
        ))}
        <LocaleSwitcher locale={locale} />
      </nav>
    </>
  );
}
