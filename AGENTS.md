# AGENTS.md — Pixelite website

Zasady pracy agenta AI projektującego i implementującego stronę Pixelite.

Brief marketingowy/treściowy: [docs/brand-brief.md](docs/brand-brief.md) — czytaj przed każdą decyzją dot. treści, IA, tonu.

## Stack (ustalony, nie zmieniać bez pytania)

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS
- shadcn/ui — komponenty bazowe, nie budować własnego design systemu od zera
- Sanity (headless CMS) — treść bloga (`/studio`, `src/sanity/`). Sanity MCP podłączony w [.mcp.json](.mcp.json) — agent może odpytywać schema/dataset przez GROQ bez kopiowania kodu do kontekstu (autoryzacja OAuth per-user, nie sekret w repo).
- Storybook — dokumentacja i testy (vitest + play functions) komponentów UI
- Deploy: Vercel

## Kolorystyka i logo

Realna paleta marki (nie wymyślać innych kolorów) i lista assetów: [docs/brand-brief.md](docs/brand-brief.md#kolorystyka). Tokeny CSS w [src/app/globals.css](src/app/globals.css) (`--brand-orange`, `--brand-orange-strong`, `--brand-cream`, `--brand-charcoal`). `--brand-orange` (#FF7600) nie ma wystarczającego kontrastu WCAG AA jako tekst/tło przycisku na jasnym tle — do tego służy `--brand-orange-strong` (#B85500), do czego mapuje się `--primary`. Nie używaj czystego `--brand-orange` na tekst/małe elementy interaktywne na jasnym tle.

## i18n (PL/EN)

Strona jest dwujęzyczna, routing `/pl/...` i `/en/...` (`src/app/[locale]/`, `src/middleware.ts`). Zasady:

- Każdy nowy string UI-owy idzie do [src/i18n/dictionaries.ts](src/i18n/dictionaries.ts) (oba języki naraz, nie tylko PL) — nigdy nie hardkoduj tekstu bezpośrednio w JSX stron pod `[locale]`.
- Każdy wewnętrzny link musi być prefiksowany locale: `` `/${locale}/portfolio` ``, nie `"/portfolio"`.
- Nowe strony pod `[locale]` odczytują `params.locale`, walidują przez `isLocale()` (`notFound()` jeśli nie), i pobierają `getDictionary(locale)`.
- `/studio` (Sanity) jest celowo POZA `[locale]` — to narzędzie admina, nie treść użytkownika, nie tłumacz go.
- `middleware.ts` musi być w `src/`, nie w roocie repo (bo projekt używa katalogu `src/`) — inaczej Next.js go cicho ignoruje.
- Treść portfolio jest per-locale w [src/content/portfolio.ts](src/content/portfolio.ts) (`Record<Locale, PortfolioEntry[]>`) — każdy nowy wpis dodaj w obu językach.

## Storybook i testy

Dla każdego nowego reużywalnego komponentu UI (`src/components/ui/*`, współdzielone komponenty jak `SiteHeader`) dodaj kolokowany `*.stories.tsx` — bez wyjątków, nawet dla "prostych" komponentów (np. banera). To wymóg, nie sugestia: jeśli go pominiesz, nikt inny tego nie złapie automatycznie. Wzorzec i zasady (tagi `ai-generated`/`needs-work`, dokładnie jeden `CssCheck` na projekt, kiedy pisać `play`) zgodnie z tym, co ustawił `npx storybook skills setup` — sprawdź istniejące pliki w `src/components/**/*.stories.tsx` jako wzór.

Dla czystej logiki bez UI (helpery w `src/lib/`, `src/i18n/`, reguły w middleware) dodaj kolokowany `*.test.ts` — osobny projekt `unit` w [vitest.config.ts](vitest.config.ts) (node, bez przeglądarki), wzór w [src/i18n/config.test.ts](src/i18n/config.test.ts).

Przed uznaniem zadania za skończone zawsze uruchom `pnpm test` (odpala oba projekty: `storybook` + `unit`).

E2e (czarna skrzynka, prawdziwy build+start): [playwright.config.ts](playwright.config.ts), specy w `e2e/*.spec.ts`, uruchamiane `pnpm test:e2e`. Osobna warstwa od Storybook/unit — dopisuj tu tylko sanity-check ścieżek krytycznych (np. routing, główna nawigacja), nie duplikuj tego, co pokrywa Storybook play function.

## Formatowanie i commity

- Prettier ([.prettierrc.json](.prettierrc.json)) jest źródłem prawdy dla stylu — `pnpm format` przed commitem, `pnpm format:check` gate'uje CI. ESLint ma `eslint-config-prettier` na końcu configu, więc nie duplikuje reguł stylistycznych.
- Husky (`.husky/commit-msg`) + commitlint ([commitlint.config.mjs](commitlint.config.mjs)) odrzucają commit, jeśli nie jest Conventional Commit — to jest teraz wymuszone, nie tylko konwencja w dokumentacji.

## Deploy i CI

- Deploy: Vercel, auto-build z każdego push/PR. `next build` sam gate'uje lint (`eslint-config-next`) i typy (`tsc`) — build failuje jeśli któreś nie przejdzie, nic dodatkowego nie trzeba w repo konfigurować pod to.
- Vercel NIE odpala `vitest` (ani Storybook, ani unit testów) — to robi [.github/workflows/ci.yml](.github/workflows/ci.yml) jako wymagany check na PR (`pnpm format:check`, `pnpm lint`, `tsc --noEmit`, `pnpm test`, `pnpm test:e2e`). Traktuj czerwony CI tak samo jak czerwony build na Vercelu — nie mergować.
- Dependabot ([.github/dependabot.yml](.github/dependabot.yml)) otwiera PR-y na aktualizacje zależności (npm + github-actions) raz w tygodniu — to nadal wymaga review usera, nie mergować automatycznie.
- Zmienne środowiskowe (`NEXT_PUBLIC_SANITY_*`, `NEXT_PUBLIC_GA_ID`) ustawia się w dashboardzie Vercela (per environment: Production/Preview), nie w repo — `.env.local.example` to tylko wzór dla lokalnego dev.

## Model routing (agent AI)

- Boilerplate, `*.stories.tsx`, `*.test.ts`, mechaniczne rename/refaktor — tani/szybki model wystarcza.
- Decyzje architektoniczne, i18n routing, integracja z Sanity/CMS, cokolwiek dotykające `middleware.ts` lub struktury `[locale]` — mocniejszy model, tu błąd kosztuje więcej niż oszczędność.

## Styl komunikacji agenta

- W czacie: zwięźle, bez lania wody, bez grzecznościowych zwrotów — meritum, nie fluff. Nie dotyczy kodu, commitów i opisów PR — te zawsze pełnym, poprawnym językiem.
- Nie skracaj kosztem treści technicznej — liczby, nazwy plików, konkretne komendy zawsze zostają.

## Commit messages

- Konwencja: [Conventional Commits](https://www.conventionalcommits.org/) — prefiks `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `ci:`. Subject po angielsku, tryb rozkazujący, bez kropki na końcu.
- Body tylko gdy "why" nieoczywiste z samego diffu (nie opisuj "co" — to widać w kodzie).
- Skill `/caveman-commit` generuje message w tym samym formacie (Conventional Commits, ultra-skompresowany) — użyj go swobodnie, nie zastępuje tej konwencji, tylko ją realizuje szybciej.

## Priorytety projektowe

1. Strona główna = router do 3 ścieżek (Portfolio, Blog, Kontakt/sociale), nie CV. Krótka, szybka, minimalistyczna.
2. Portfolio to najważniejsza ścieżka — traktuj ją priorytetowo względem bloga i innych podstron.
3. LinkedIn link zawsze widoczny (header/footer) na każdej podstronie.
4. Zdjęcie autora: tylko na podstronie portfolio, nigdy na stronie głównej.
5. Ton: spokojny, inżynierski, konkretny. Unikaj marketingowego/hype języka, buzzwordów, superlatywów bez pokrycia.

## Treść portfolio

- Każdy wpis wg szablonu w [docs/brand-brief.md](docs/brand-brief.md#szablon-wpisu-portfolio): Tytuł → Kontekst → Problem biznesowy → Wkład → Efekt → Tagi tech → (opcjonalnie) case study.
- Nazwy firm: Xebia i PGS Software można podać wprost. Wszystkie inne projekty klientów — anonimizuj (branża/typ firmy zamiast nazwy).
- Opis zawsze zaczyna od problemu biznesowego, nie od stacku technologicznego.
- Nie wymyślaj metryk/liczb efektów — jeśli user ich nie poda, zostaw pole jakościowe albo oznacz jako TODO do uzupełnienia przez usera.

## Konwencje kodu

- Komponenty serwerowe domyślnie (App Router); `"use client"` tylko gdy potrzebna interaktywność.
- Treść portfolio/bloga jako dane (MDX lub JSON/TS w repo) — nie hardkoduj treści w JSX komponentów strony.
- Brak nowych zależności poza ustalonym stackiem bez zapytania usera.
- Dostępność: kontrast, semantyczny HTML, focus states — must-have, nie nice-to-have (strona ma budować wiarygodność wobec rekruterów, w tym technicznych).
- Nie dodawaj treści placeholder typu "Lorem ipsum" w commitowanym kodzie — użyj wyraźnie oznaczonych TODO albo zapytaj usera o realną treść.

## Zakres i granice

- Nie publikuj (deploy, push do zdalnego repo) bez wyraźnej zgody usera na dany krok.
- Nie zmieniaj ustalonego stacku, IA (3 ścieżki z głównej) ani zasad anonimizacji klientów bez pytania — to decyzje usera, nie agenta.
- Przy niejasności co do treści (dane liczbowe, nazwy klientów, zdjęcia) — pytaj usera, nie zgaduj.

Kiedy decydować samemu, a kiedy pytać:

- **Decyduj sam, bez pytania**: treść commit message, nazwy branchy, drobne konwencje kodu (formatowanie, nazwy zmiennych/plików) w ramach ustalonego stacku.
- **Pytaj, gdy jest więcej niż jedno rozsądne podejście**: wybór konkretnego wzorca/hooka/podejścia w ramach ustalonego stacku (np. który komponent shadcn, jak rozbić plik na moduły) — jeśli nie ma jednego oczywistego rozwiązania, zatrzymaj się i zapytaj zamiast zgadywać.
