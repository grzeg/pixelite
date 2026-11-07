# Pixelite

[![CI](https://github.com/grzeg/pixelite/actions/workflows/ci.yml/badge.svg)](https://github.com/grzeg/pixelite/actions/workflows/ci.yml)

**EN** Personal site of Grzegorz Martowski, published as Pixelite: a portfolio with a career timeline, a blog and a contact page, in Polish and English. Live at [pixelite.pl](https://pixelite.pl). Built with Next.js (App Router), strict TypeScript and a CI pipeline that checks formatting, lint, types, component tests, a production build, end-to-end tests and Lighthouse.

**PL** Osobista strona Grzegorza Martowskiego, publikowana jako Pixelite: portfolio z osią kariery, blog i kontakt, po polsku i angielsku. Działa pod adresem [pixelite.pl](https://pixelite.pl). Zbudowana w Next.js (App Router) i strict TypeScript, z CI, które sprawdza formatowanie, lint, typy, testy komponentów, build produkcyjny, testy e2e i Lighthouse.

## Stack

- Next.js (App Router, React Server Components) + TypeScript (strict)
- Tailwind CSS + shadcn/ui
- Sanity: blog content (`/studio`, `src/sanity/`), rendered with Portable Text
- Storybook (Vitest + play functions + a11y addon), Vitest, Playwright, Lighthouse CI
- Sentry error tracking (enabled only when a DSN is set)
- Deploy: Vercel. CI: GitHub Actions

## Features / Funkcje

**EN**

- Routing under `/pl` and `/en`; every UI string lives in one dictionary file.
- Canonical URLs, `hreflang` alternates (including `x-default`), Open Graph and Twitter metadata on every page.
- Homepage as a short router to three paths: portfolio, blog and contact.
- Career timeline and portfolio content kept as typed data per locale, not hardcoded in JSX.
- `Person` structured data (schema.org), sitemap and robots.
- Blog posts from Sanity, filtered by language. Without a configured Sanity project the blog shows its empty state instead of failing.
- Cookie consent: analytics storage is granted only after the visitor accepts.

**PL**

- Routing pod `/pl` i `/en`; wszystkie teksty interfejsu w jednym pliku słownika.
- Canonical, alternatywy `hreflang` (z `x-default`) oraz metadane Open Graph i Twitter na każdej stronie.
- Strona główna jako krótki router do trzech ścieżek: portfolio, blog i kontakt.
- Oś kariery i treść portfolio jako typowane dane per język, a nie wpisane na sztywno w JSX.
- Dane strukturalne `Person` (schema.org), sitemap i robots.
- Wpisy bloga z Sanity, filtrowane po języku. Bez skonfigurowanego projektu Sanity blog pokazuje pusty stan zamiast się wywracać.
- Zgoda na cookies: pamięć analityczna jest przyznawana dopiero po akceptacji odwiedzającego.

## Decisions / Decyzje

**Accessible brand colour / Dostępny kolor marki**

**EN** The brand orange (`#FF7600`) does not have enough contrast as text or a button background on a light surface. `--primary` therefore maps to a darker `--brand-orange-strong` (`#B85500`), and the plain orange is kept for large decorative areas.

**PL** Pomarańcz marki (`#FF7600`) nie ma wystarczającego kontrastu jako tekst ani tło przycisku na jasnym tle. Dlatego `--primary` wskazuje na ciemniejszy `--brand-orange-strong` (`#B85500`), a czysty pomarańcz zostaje dla dużych powierzchni dekoracyjnych.

**Accessibility as a gate, not a goal / Dostępność jako bramka**

**EN** Three layers check accessibility: the `jsx-a11y` ESLint plugin, the Storybook a11y addon and Lighthouse CI. Lighthouse runs on `/pl`, `/pl/portfolio` and `/pl/kontakt`, three runs each, and an accessibility score below 0.95 fails the build. Performance (0.8), best practices (0.9) and SEO (0.9) are warnings.

**PL** Dostępność sprawdzają trzy warstwy: wtyczka ESLint `jsx-a11y`, dodatek a11y w Storybooku i Lighthouse CI. Lighthouse uruchamia się na `/pl`, `/pl/portfolio` i `/pl/kontakt`, po trzy razy, a wynik dostępności poniżej 0.95 przerywa build. Wydajność (0.8), dobre praktyki (0.9) i SEO (0.9) są tylko ostrzeżeniami.

**Content as data / Treść jako dane**

**EN** Career and portfolio entries live in `src/content/career.ts` as per-locale data, and pages only render them. Adding or correcting an entry never touches page components.

**PL** Wpisy kariery i portfolio są w `src/content/career.ts` jako dane per język, a strony tylko je wyświetlają. Dodanie lub poprawka wpisu nie dotyka komponentów stron.

**Locale from `Accept-Language` / Język z `Accept-Language`**

**EN** The middleware picks `/pl` or `/en` from the browser's `Accept-Language` header and falls back to Polish. `/studio` and static assets are excluded from the redirect.

**PL** Middleware wybiera `/pl` lub `/en` na podstawie nagłówka `Accept-Language` przeglądarki i w razie braku dopasowania używa polskiego. `/studio` i pliki statyczne są wyłączone z przekierowania.

**Cheap observability / Tania obserwowalność**

**EN** Sentry runs with a 10% trace sample, without session replay or profiling, and is switched off entirely when no DSN is configured. That is enough for a low-traffic personal site.

**PL** Sentry działa z próbkowaniem 10% śladów, bez nagrywania sesji i profilowania, a bez skonfigurowanego DSN jest całkowicie wyłączony. To wystarcza dla strony osobistej o niewielkim ruchu.

**Built with an AI agent, under written rules / Praca z agentem AI według spisanych zasad**

**EN** The site was developed with an AI coding agent. Its rules (stack, i18n conventions, test requirements, content and tone guidelines, Conventional Commits) are in [AGENTS.md](AGENTS.md), and the CI gates decide what gets merged.

**PL** Strona powstała z użyciem agenta AI do kodowania. Jego zasady (stack, konwencje i18n, wymagania testowe, wytyczne dotyczące treści i tonu, Conventional Commits) są w [AGENTS.md](AGENTS.md), a o tym, co trafi do `main`, decyduje CI.

## Setup

```bash
pnpm install
cp .env.local.example .env.local
pnpm dev
```

**EN** Every variable in `.env.local` is optional: Sanity (`NEXT_PUBLIC_SANITY_*`), Google Analytics (`NEXT_PUBLIC_GA_ID`) and Sentry (`NEXT_PUBLIC_SENTRY_DSN`). On Vercel, set them per environment in the dashboard.

**PL** Wszystkie zmienne w `.env.local` są opcjonalne: Sanity (`NEXT_PUBLIC_SANITY_*`), Google Analytics (`NEXT_PUBLIC_GA_ID`) i Sentry (`NEXT_PUBLIC_SENTRY_DSN`). Na Vercelu ustawia się je w dashboardzie, osobno dla każdego środowiska.

## Commands / Komendy

```bash
pnpm dev              # dev server (localhost:3000)
pnpm build            # production build (gates lint + types)
pnpm start            # start production build

pnpm lint             # ESLint
pnpm format           # Prettier: fix
pnpm format:check     # Prettier: check (CI gate)

pnpm test             # Storybook (Vitest + play) + unit tests
pnpm test:e2e         # Playwright, on a real build + start
pnpm lhci             # Lighthouse CI (needs a production build)

pnpm storybook        # Storybook dev server (localhost:6006)
pnpm build-storybook  # Storybook static build
```

## Structure / Struktura

- `src/app/[locale]/(home)` — homepage / strona główna
- `src/app/[locale]/(site)` — portfolio, blog, contact / portfolio, blog, kontakt
- `src/app/studio/` — Sanity Studio, outside `[locale]` / Sanity Studio, poza `[locale]`
- `src/components/` — components (`ui/` = shadcn-based) / komponenty (`ui/` = oparte na shadcn)
- `src/content/` — career and portfolio data / dane kariery i portfolio
- `src/i18n/` — PL/EN dictionaries, locale config, metadata helpers / słowniki PL/EN, konfiguracja locale, helpery metadanych
- `src/sanity/` — Sanity client, queries, schema / klient, zapytania i schemat Sanity
- `e2e/` — Playwright specs / specy Playwright

## CI

**EN** `.github/workflows/ci.yml` runs `format:check`, `lint`, `tsc --noEmit`, `test`, `build`, `test:e2e` and `lhci`, on every PR to `main` and on every push to `main`.

**PL** `.github/workflows/ci.yml` uruchamia `format:check`, `lint`, `tsc --noEmit`, `test`, `build`, `test:e2e` i `lhci`, na każdym PR do `main` i przy każdym pushu do `main`.

## License / Licencja

MIT
