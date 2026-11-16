import type { Locale } from "@/i18n/config";

export type CareerEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights?: string[];
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

// Źródło prawdy: CV (public/cv/*.pdf). Każda zmiana w CV = zmiana tutaj. Chronologicznie od najnowszej.
const career: Record<Locale, CareerEntry[]> = {
  pl: [
    {
      role: "Senior Frontend Developer",
      company: "Xebia (dawniej PGS Software)",
      period: "01.2019 – obecnie",
      summary:
        "Ścieżka kariery: Frontend Developer (01.2019) → Senior Frontend Developer (10.2022). Praca w modelu usług dla klientów, zwykle w zespołach 4–5-osobowych: projekty w obszarach e-commerce (retail, turystyka), płatności, healthcare i compliance. Obecnie odpowiadam za kod oraz decyzje techniczne w obszarze funkcjonalności SEO i CRO w projekcie e-commerce (retail) w Next.js.",
      highlights: [
        "Biblioteka płatności (PCI): niezależna od frameworka implementacja płatności kartą w TypeScripcie (3D Secure, Apple Pay), zbudowana w dwuosobowym zespole.",
        "Migracja 4000+ przekierowań (Akamai → Contentful): przekierowania dodają teraz sami użytkownicy CMS, bez angażowania wsparcia, SEO/CRO i DevOps.",
        "Bezpieczeństwo zależności (Dependabot): wyeliminowane alerty w ok. 50 repozytoriach klienta, także we wspólnych bibliotekach frontendowych.",
        "Wewnętrzna gildia React.js: od ponad roku jestem jej opiekunem i moderatorem (15–30+ uczestników z różnych projektów).",
      ],
      tags: [
        "React",
        "Next.js (App Router)",
        "React Server Components",
        "TypeScript",
        "Node.js (skrypty)",
        "Webpack Module Federation",
        "Storybook",
        "Optimizely",
        "Datadog",
        "Hotjar",
        "Lighthouse",
        "Core Web Vitals",
        "Contentful",
        "Akamai",
        "PCI",
        "3D Secure",
        "Apple Pay",
        "SEO",
        "CRO",
        "Claude Code",
      ],
      featured: true,
    },
    {
      role: "Frontend Developer",
      company: "Avra sp. z o.o.",
      period: "10.2014 – 12.2018",
      summary:
        "Rozwój i utrzymanie platformy jednego z największych dostawców benefitów pracowniczych w Polsce. Migracja frontendu z jQuery do React.js w nowej architekturze mikroserwisowej.",
      tags: ["React", "JavaScript", "AngularJS", "jQuery", "HTML5", "CSS3", "PHP/Symfony", "Git"],
    },
    {
      role: "Freelance Web Developer",
      company: "Pixelite",
      period: "06.2014 – 12.2018",
      summary: "Własna działalność, równolegle z pracą w Avra.",
    },
    {
      role: "Junior Web Developer",
      company: "The Green Line",
      period: "05.2014 – 10.2014",
      summary: "Junior Web Developer.",
    },
    {
      role: "Junior Web Developer",
      company: "Funmedia",
      period: "10.2013 – 04.2014",
      summary: "Junior Web Developer.",
    },
    {
      role: "Junior Web Developer / Publisher",
      company: "Credit Suisse CoE Wrocław",
      period: "07.2012 – 04.2013",
      summary: "Junior Web Developer / Publisher.",
    },
  ],
  en: [
    {
      role: "Senior Frontend Developer",
      company: "Xebia (formerly PGS Software)",
      period: "01.2019 – present",
      summary:
        "Career progression: Frontend Developer (01.2019) → Senior Frontend Developer (10.2022). Client-services model, usually in teams of 4–5: projects in e-commerce (retail, travel), payments, healthcare and compliance. I currently own the codebase and technical decisions for SEO and CRO features on a retail e-commerce project in Next.js.",
      highlights: [
        "Payments library (PCI): a framework-agnostic card payment implementation in TypeScript (3D Secure, Apple Pay), built in a two-person team.",
        "Migration of 4,000+ redirects (Akamai → Contentful): CMS users now add redirects themselves, without involving support, SEO/CRO or DevOps.",
        "Dependency security (Dependabot): resolved security alerts across ~50 client repositories, including shared frontend libraries.",
        "Internal React.js guild: lead and moderator for over a year (15–30+ attendees from various projects).",
      ],
      tags: [
        "React",
        "Next.js (App Router)",
        "React Server Components",
        "TypeScript",
        "Node.js (scripting)",
        "Webpack Module Federation",
        "Storybook",
        "Optimizely",
        "Datadog",
        "Hotjar",
        "Lighthouse",
        "Core Web Vitals",
        "Contentful",
        "Akamai",
        "PCI",
        "3D Secure",
        "Apple Pay",
        "SEO",
        "CRO",
        "Claude Code",
      ],
      featured: true,
    },
    {
      role: "Frontend Developer",
      company: "Avra sp. z o.o.",
      period: "10.2014 – 12.2018",
      summary:
        "Developed and maintained the platform of one of the largest employee benefits providers in Poland. Migrated the frontend from jQuery to React.js within a new microservice architecture.",
      tags: ["React", "JavaScript", "AngularJS", "jQuery", "HTML5", "CSS3", "PHP/Symfony", "Git"],
    },
    {
      role: "Freelance Web Developer",
      company: "Pixelite",
      period: "06.2014 – 12.2018",
      summary: "Own freelance practice, concurrent with the Avra role.",
    },
    {
      role: "Junior Web Developer",
      company: "The Green Line",
      period: "05.2014 – 10.2014",
      summary: "Junior Web Developer.",
    },
    {
      role: "Junior Web Developer",
      company: "Funmedia",
      period: "10.2013 – 04.2014",
      summary: "Junior Web Developer.",
    },
    {
      role: "Junior Web Developer / Publisher",
      company: "Credit Suisse CoE Wrocław",
      period: "07.2012 – 04.2013",
      summary: "Junior Web Developer / Publisher.",
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
      { degree: "MEng, Teleinformatics", years: "2007–2012" },
      { degree: "Bachelor’s degree, Management", years: "2010–2013" },
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
  ],
  en: [
    { name: "Google Cloud Generative AI Leader", date: "06.2026" },
    { name: "Professional Scrum Master I (PSM I)", date: "10.2016" },
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
