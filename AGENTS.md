# AGENTS.md — Pixelite website

Zasady pracy agenta AI projektującego i implementującego stronę Pixelite.

Brief marketingowy/treściowy: [docs/brand-brief.md](docs/brand-brief.md) — czytaj przed każdą decyzją dot. treści, IA, tonu.

## Stack (ustalony, nie zmieniać bez pytania)
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS
- shadcn/ui — komponenty bazowe, nie budować własnego design systemu od zera
- Sanity (headless CMS) — treść bloga (`/studio`, `src/sanity/`)
- Storybook — dokumentacja i testy (vitest + play functions) komponentów UI
- Deploy: Vercel

## Kolorystyka i logo
Realna paleta marki (nie wymyślać innych kolorów) i lista assetów: [docs/brand-brief.md](docs/brand-brief.md#kolorystyka). Tokeny CSS w [src/app/globals.css](src/app/globals.css) (`--brand-orange`, `--brand-orange-strong`, `--brand-cream`, `--brand-charcoal`). `--brand-orange` (#FF7600) nie ma wystarczającego kontrastu WCAG AA jako tekst/tło przycisku na jasnym tle — do tego służy `--brand-orange-strong` (#B85500), do czego mapuje się `--primary`. Nie używaj czystego `--brand-orange` na tekst/małe elementy interaktywne na jasnym tle.

## Storybook
Dla każdego nowego reużywalnego komponentu UI (`src/components/ui/*`, współdzielone komponenty jak `SiteHeader`) dodaj kolokowany `*.stories.tsx`. Wzorzec i zasady (tagi `ai-generated`/`needs-work`, dokładnie jeden `CssCheck` na projekt, kiedy pisać `play`) zgodnie z tym, co ustawił `npx storybook skills setup` — sprawdź istniejące pliki w `src/components/**/*.stories.tsx` jako wzór. Po dodaniu story uruchom `npx vitest --project storybook run` przed uznaniem zadania za skończone.

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
