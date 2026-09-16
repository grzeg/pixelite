import { notFound } from "next/navigation";

import { ContentWindowBold } from "@/components/content-window";
import { Cookies } from "@/components/cookies";
import { ParticleField } from "@/components/particle-field";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);

  return (
    <div className="relative min-h-dvh w-full bg-brand-orange">
      <div className="fixed inset-0">
        <ParticleField className="absolute inset-0" count={70} particleColor="rgba(255, 255, 255, 0.85)" lineColorRgb="255, 255, 255" />
      </div>

      <SiteHeader locale={locale} dict={dict} />

      <main className="relative z-10 mx-auto w-full max-w-3xl px-6 py-24 sm:py-28">
        <ContentWindowBold>{children}</ContentWindowBold>
      </main>

      <SiteFooter />
      <Cookies dict={dict} />
    </div>
  );
}
