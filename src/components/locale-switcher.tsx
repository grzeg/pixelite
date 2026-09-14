"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/config";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "";
  const other: Locale = locale === "pl" ? "en" : "pl";
  const rest = pathname.split("/").slice(2).join("/");
  const href = `/${other}${rest ? `/${rest}` : ""}`;

  return (
    <Link href={href} className="hover:opacity-80" aria-label={other === "pl" ? "Polski" : "English"}>
      {other.toUpperCase()}
    </Link>
  );
}
