import type { Locale } from "@/i18n/config";

export type CareerEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  tags?: string[];
  featured?: boolean;
};

export type Education = {
  school: string;
  degrees: { degree: string; years: string }[];
};

export type Language = {
  name: string;
  level: string;
};

export type Certification = {
  name: string;
  date: string;
};

export type EcosystemItem = {
  label: string;
  icon: "apple" | "webstorm" | "claude";
};

const ecosystem: EcosystemItem[] = [
  { label: "MacBook / macOS", icon: "apple" },
  { label: "JetBrains WebStorm", icon: "webstorm" },
  { label: "Claude Code", icon: "claude" },
];

// Źródło: CV (PDF, PL/ENG) dostarczone przez usera. Chronologicznie od najnowszej.
const career: Record<Locale, CareerEntry[]> = {
  pl: [
    {
      role: "Senior Frontend Developer / Tech Lead",
      company: "Xebia / PGS Software",
      period: "01.2019 – obecnie",
      summary:
        "Senior Frontend Developer w projektach e-commerce i compliance. W obecnym projekcie e-commerce pełnię rolę Tech Leada i współpracuję z zespołami CRO/SEO. Przeprowadziłem migrację przekierowań z Akamai Cloudlet do Contentful z użyciem agentów AI. Z ciekawych projektów — pół roku pracowałem w projekcie z pełnym, całodniowym pair programmingiem przy dużej platformie e-commerce z branży turystycznej.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Webpack Module Federation",
        "Storybook",
        "Cypress",
        "Optimizely",
        "Datadog",
        "Auth0",
        "Turborepo",
        "Claude Code",
        "Contentful",
        "Akamai",
        "AI agents",
        "SEO",
      ],
      featured: true,
    },
    {
      role: "Frontend Developer",
      company: "Avra sp. z o.o.",
      period: "10.2014 – 12.2018",
      summary:
        "Przejście od full-stacku w PHP/Symfony do frontendu (jQuery, AngularJS, React). Rozwój platformy dla jednego z największych dostawców benefitów pracowniczych w Polsce.",
      tags: ["PHP", "Symfony", "jQuery", "AngularJS", "React"],
    },
    {
      role: "Freelance Web Developer",
      company: "Pixelite",
      period: "10.2014 – 12.2018",
      summary:
        "Własna działalność (obok etatu w Avra) — strony dla klientów, bezpośrednia współpraca z klientami i grafikami.",
      tags: ["WordPress", "HTML/CSS", "Photoshop"],
    },
    {
      role: "Junior Web Developer",
      company: "The Green Line",
      period: "05.2014 – 12.2014",
      summary: "PHP, Zend Framework, praca w międzynarodowym zespole.",
      tags: ["PHP", "Zend Framework"],
    },
    {
      role: "Junior Web Developer",
      company: "Funmedia",
      period: "10.2013 – 04.2014",
      summary: "PHP, Zend Framework, MySQL.",
      tags: ["PHP", "Zend Framework", "MySQL"],
    },
    {
      role: "Junior Web Developer / Publisher",
      company: "Credit Suisse CoE Wrocław",
      period: "07.2012 – 04.2013",
      summary: "Adobe CQ5, jQuery, HTML/CSS — strony dla klientów.",
      tags: ["Adobe CQ5", "jQuery", "HTML/CSS"],
    },
  ],
  en: [
    {
      role: "Senior Frontend Developer / Tech Lead",
      company: "Xebia / PGS Software",
      period: "01.2019 – present",
      summary:
        "Senior Frontend Developer across e-commerce and compliance projects. On the current e-commerce project I'm Tech Lead and work closely with CRO/SEO teams. I carried out a redirect migration from Akamai Cloudlet to Contentful using AI agents. One highlight: six months on a large travel-industry e-commerce platform with full-day pair programming.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Webpack Module Federation",
        "Storybook",
        "Cypress",
        "Optimizely",
        "Datadog",
        "Auth0",
        "Turborepo",
        "Claude Code",
        "Contentful",
        "Akamai",
        "AI agents",
        "SEO",
      ],
      featured: true,
    },
    {
      role: "Frontend Developer",
      company: "Avra sp. z o.o.",
      period: "10.2014 – 12.2018",
      summary:
        "Transitioned from full-stack PHP/Symfony to frontend (jQuery, AngularJS, React). Developed a platform for one of the largest employee benefits providers in Poland.",
      tags: ["PHP", "Symfony", "jQuery", "AngularJS", "React"],
    },
    {
      role: "Freelance Web Developer",
      company: "Pixelite",
      period: "10.2014 – 12.2018",
      summary:
        "Own freelance practice (alongside the Avra role) — client websites, direct client and designer collaboration.",
      tags: ["WordPress", "HTML/CSS", "Photoshop"],
    },
    {
      role: "Junior Web Developer",
      company: "The Green Line",
      period: "05.2014 – 12.2014",
      summary: "PHP, Zend Framework, working in an international team.",
      tags: ["PHP", "Zend Framework"],
    },
    {
      role: "Junior Web Developer",
      company: "Funmedia",
      period: "10.2013 – 04.2014",
      summary: "PHP, Zend Framework, MySQL.",
      tags: ["PHP", "Zend Framework", "MySQL"],
    },
    {
      role: "Junior Web Developer / Publisher",
      company: "Credit Suisse CoE Wrocław",
      period: "07.2012 – 04.2013",
      summary: "Adobe CQ5, jQuery, HTML/CSS — client websites.",
      tags: ["Adobe CQ5", "jQuery", "HTML/CSS"],
    },
  ],
};

const education: Record<Locale, Education> = {
  pl: {
    school: "Politechnika Wrocławska",
    degrees: [
      { degree: "Mgr inż., Teleinformatyka", years: "2007–2012" },
      { degree: "Lic., Zarządzanie", years: "2010–2013" },
    ],
  },
  en: {
    school: "Wrocław University of Science and Technology",
    degrees: [
      { degree: "M.Sc. Eng., Telecommunications and IT", years: "2007–2012" },
      { degree: "B.A., Management", years: "2010–2013" },
    ],
  },
};

const languages: Record<Locale, Language[]> = {
  pl: [
    { name: "Angielski", level: "C1" },
    { name: "Niemiecki", level: "B1" },
  ],
  en: [
    { name: "English", level: "C1" },
    { name: "German", level: "B1" },
  ],
};

const certifications: Record<Locale, Certification[]> = {
  pl: [
    { name: "Google Cloud Generative AI Leader", date: "06.2026" },
    { name: "Professional Scrum Master I (PSM I)", date: "10.2016" },
    { name: "ACERT – Academic Certificate of English Language Competence", date: "06.2009" },
  ],
  en: [
    { name: "Google Cloud Generative AI Leader", date: "06.2026" },
    { name: "Professional Scrum Master I (PSM I)", date: "10.2016" },
    { name: "ACERT – Academic Certificate of English Language Competence", date: "06.2009" },
  ],
};

export function getCareer(locale: Locale): CareerEntry[] {
  return career[locale];
}

export function getEducation(locale: Locale): Education {
  return education[locale];
}

export function getLanguages(locale: Locale): Language[] {
  return languages[locale];
}

export function getCertifications(locale: Locale): Certification[] {
  return certifications[locale];
}

export function getEcosystem(): EcosystemItem[] {
  return ecosystem;
}
