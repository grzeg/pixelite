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
    portfolioDescription: string;
    blogTitle: string;
    blogDescription: string;
    kontaktTitle: string;
    kontaktDescription: string;
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
    homeDescription:
      "Grzegorz Martowski — Senior Frontend Engineer / Tech Lead. 15 lat doświadczenia w e-commerce, płatnościach i React/Next.js/TypeScript.",
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "Portfolio i przebieg kariery Grzegorza Martowskiego — Senior Frontend Engineer / Tech Lead, 15 lat w e-commerce i React/TypeScript.",
    blogTitle: "Blog",
    blogDescription: "Notatki techniczne o React, Next.js, e-commerce i pracy z AI w codziennym developmencie.",
    kontaktTitle: "Kontakt",
    kontaktDescription: "Skontaktuj się z Grzegorzem Martowskim — Senior Frontend Engineer / Tech Lead specjalizującym się w e-commerce.",
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
    homeDescription:
      "Grzegorz Martowski — Senior Frontend Engineer / Tech Lead. 15 years of experience in e-commerce, payments, and React/Next.js/TypeScript.",
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "Portfolio and career history of Grzegorz Martowski — Senior Frontend Engineer / Tech Lead, 15 years in e-commerce and React/TypeScript.",
    blogTitle: "Blog",
    blogDescription: "Technical notes on React, Next.js, e-commerce, and working with AI in day-to-day development.",
    kontaktTitle: "Contact",
    kontaktDescription: "Get in touch with Grzegorz Martowski — Senior Frontend Engineer / Tech Lead specializing in e-commerce.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { pl, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
