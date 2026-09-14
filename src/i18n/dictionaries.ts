import type { Locale } from "@/i18n/config";

export type Dictionary = {
  nav: { main: string; portfolio: string; blog: string; kontakt: string };
  home: {
    tagline: string;
  };
  portfolio: {
    title: string;
    experienceLabel: string;
    educationLabel: string;
    languagesLabel: string;
    certificationsLabel: string;
  };
  blog: {
    title: string;
    intro: string;
    comingSoon: string;
  };
  kontakt: {
    title: string;
    intro: string;
    location: string;
    responseTime: string;
    openTo: string;
    emailButton: string;
    cvButton: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    portfolioTitle: string;
    blogTitle: string;
    kontaktTitle: string;
  };
};

const pl: Dictionary = {
  nav: { main: "Główna", portfolio: "Portfolio", blog: "Blog", kontakt: "Kontakt" },
  home: {
    tagline: "Senior Frontend Engineer, Tech Lead, AI-native developer",
  },
  portfolio: {
    title: "Portfolio",
    experienceLabel: "Przebieg kariery",
    educationLabel: "Wykształcenie",
    languagesLabel: "Języki obce",
    certificationsLabel: "Certyfikaty",
  },
  blog: {
    title: "Blog",
    intro: "Notatki techniczne — dla ludzi, którzy budują podobne rzeczy.",
    comingSoon: "Nowe wpisy już wkrótce — wpadnij tu ponownie za jakiś czas.",
  },
  kontakt: {
    title: "Kontakt",
    intro: "Najprościej: napisz maila albo znajdź mnie na LinkedIn.",
    location: "Wrocław, Polska · CET",
    responseTime: "Zwykle odpowiadam w ciągu 24–48h.",
    openTo: "Otwarty na rozmowy o rolach Senior/Staff Engineer i Tech Lead w firmach produktowych.",
    emailButton: "Napisz e-mail",
    cvButton: "Pobierz CV (PDF)",
  },
  meta: {
    homeTitle: "Pixelite",
    homeDescription: "Senior/Staff Engineer — React/Next.js, TypeScript, e-commerce.",
    portfolioTitle: "Portfolio",
    blogTitle: "Blog",
    kontaktTitle: "Kontakt",
  },
};

const en: Dictionary = {
  nav: { main: "Main", portfolio: "Portfolio", blog: "Blog", kontakt: "Contact" },
  home: {
    tagline: "Senior Frontend Engineer, Tech Lead, AI-native developer",
  },
  portfolio: {
    title: "Portfolio",
    experienceLabel: "Career",
    educationLabel: "Education",
    languagesLabel: "Languages",
    certificationsLabel: "Certifications",
  },
  blog: {
    title: "Blog",
    intro: "Technical notes — for people building similar things.",
    comingSoon: "New posts coming soon — check back later.",
  },
  kontakt: {
    title: "Contact",
    intro: "Easiest way: send an email or find me on LinkedIn.",
    location: "Wrocław, Poland · CET",
    responseTime: "I usually reply within 24–48 hours.",
    openTo: "Open to conversations about Senior/Staff Engineer and Tech Lead roles at product companies.",
    emailButton: "Send email",
    cvButton: "Download CV (PDF)",
  },
  meta: {
    homeTitle: "Pixelite",
    homeDescription: "Senior/Staff Engineer — React/Next.js, TypeScript, e-commerce.",
    portfolioTitle: "Portfolio",
    blogTitle: "Blog",
    kontaktTitle: "Contact",
  },
};

const dictionaries: Record<Locale, Dictionary> = { pl, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
