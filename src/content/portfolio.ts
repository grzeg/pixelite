export type PortfolioEntry = {
  slug: string;
  title: string;
  context: string;
  problem: string;
  contribution: string[];
  outcome: string;
  tags: string[];
  caseStudy?: string;
};

// TODO: to jest przykładowy wpis ilustrujący szablon z docs/brand-brief.md.
// Zastąp/rozbuduj realnymi wpisami przed publikacją.
export const portfolioEntries: PortfolioEntry[] = [
  {
    slug: "migracja-platnosci-bez-przestoju",
    title: "Migracja płatności bez przestoju w ruchu świątecznym",
    context: "Duży e-commerce modowy · rola: Senior Frontend Engineer · 2022–2023",
    problem:
      "Dostawca płatności zapowiedział wygaszenie starego API w środku sezonu świątecznego — bez migracji sklep tracił możliwość przyjmowania zamówień.",
    contribution: [
      "Zaprojektowałem warstwę abstrakcji nad providerem płatności, żeby móc przełączać implementacje bez zmian w checkout UI.",
      "Wprowadziłem stopniowy rollout (feature flag + A/B) zamiast big-bang release, żeby ograniczyć ryzyko w szczycie sezonu.",
      "Skoordynowałem pracę z zespołem backend i QA tak, żeby migracja przeszła bez okna serwisowego.",
    ],
    outcome: "Zero przestoju w Black Friday/Cyber Monday, zespół przejął utrzymanie nowej integracji bez mojego udziału po 2 tygodniach.",
    tags: ["Next.js", "TypeScript", "e-commerce", "płatności", "A/B testing"],
  },
];
