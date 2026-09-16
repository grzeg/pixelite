import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";

import "@/app/globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";
import { COOKIE_CONSENT_KEY } from "@/lib/cookie-consent";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    ...pageMetadata({
      locale,
      path: "",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
    }),
    title: {
      default: dict.meta.homeTitle,
      template: `%s · ${dict.meta.homeTitle}`,
    },
    verification: {
      google: siteConfig.googleSiteVerification,
    },
  };
}

export default async function LocaleLayout({
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

  return (
    <html lang={locale} className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {gaId ? (
          <>
            <Script id="consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                var consent;
                try { consent = localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_KEY)}); } catch (e) {}
                gtag('consent', 'default', {
                  analytics_storage: consent === 'granted' ? 'granted' : 'denied',
                  ad_storage: 'denied',
                });
              `}
            </Script>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                gtag('js', new Date());
                gtag('config', ${JSON.stringify(gaId)});
              `}
            </Script>
          </>
        ) : null}
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
