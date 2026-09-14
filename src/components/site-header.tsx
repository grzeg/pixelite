import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label={siteConfig.name} className="flex items-center">
          <Image src="/brand/logo-black.svg" alt={siteConfig.name} width={220} height={60} className="h-8 w-auto" priority />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </Link>
        </nav>
      </div>
    </header>
  );
}
