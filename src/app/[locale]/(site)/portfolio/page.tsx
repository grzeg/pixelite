import { notFound } from "next/navigation";

import { TimelineSplit } from "@/components/career/timeline-split";
import {
  getCareer,
  getCertifications,
  getEcosystem,
  getEducation,
  getLanguages,
} from "@/content/career";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/portfolio",
    title: dict.meta.portfolioTitle,
    description: dict.meta.portfolioDescription,
  });
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);
  const career = getCareer(locale);
  const education = getEducation(locale);
  const languages = getLanguages(locale);
  const certifications = getCertifications(locale);
  const ecosystem = getEcosystem();

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-medium">{dict.portfolio.title}</h1>

      <div>
        <h2 className="mb-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {dict.portfolio.experienceLabel}
        </h2>
        <TimelineSplit
          entries={career}
          education={education}
          educationLabel={dict.portfolio.educationLabel}
          languages={languages}
          languagesLabel={dict.portfolio.languagesLabel}
          certifications={certifications}
          certificationsLabel={dict.portfolio.certificationsLabel}
          ecosystem={ecosystem}
          ecosystemLabel={dict.portfolio.ecosystemLabel}
        />
      </div>
    </div>
  );
}
