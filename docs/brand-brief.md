# Pixelite — brand brief

## Cel strony
Budować wiarygodność wobec klientów i przede wszystkim **potencjalnych pracodawców**.

Docelowa rola: **Senior/Staff Engineer w firmie produktowej**.
Specjalizacja: **React/Next.js, TypeScript, e-commerce**.
Motywacja: rozwijanie produktu użytecznego dla ludzi — nie samo „kodowanie feature'ów".

## Wyróżniki (co ma być widoczne)
- 15 lat doświadczenia, od startupów po korporacje.
- Dowożenie obietnic, spokojna współpraca, bardzo dobry feedback.
- Złożone feature'y także poza frontendem (np. integracja Akamai → Contentful).
- React Sync / mentoring.
- Współpraca z CRO/SEO.
- E-commerce: płatności, A/B testy, mikrofrontendy.

## Wizerunek
„Inżynier budujący solidne produkty" — nie wyrazista marka kreatywna.

## Styl wizualny
Spokojny, minimalistyczny.

## Architektura informacji

### Strona główna
Punkt wejścia, **nie długie CV**. Zadanie: szybko poprowadzić do trzech ścieżek:
1. **Portfolio** — najważniejsza ścieżka, dla rekrutera.
2. **Blog** — dla osób technicznych.
3. **Kontakt i sociale** — dla wszystkich.

LinkedIn: stale widoczny skrót/link (np. w headerze/footerze, na każdej podstronie).

Zdjęcie: **nie na stronie głównej**; może pojawić się na podstronie portfolio.

### Portfolio
Krótkie wpisy pokazujące „co, gdzie i jak".

Zasady dot. nazw:
- Można wymienić publicznie: **Xebia, PGS Software**.
- Konkretne projekty klientów: **anonimowo** (branża/typ firmy, nie nazwa).

Struktura opisu: zaczyna od **problemu biznesowego**, potem zwięźle wyjaśnia **wkład autora**.

## Szablon wpisu portfolio

Każdy wpis to krótka karta (lista) + opcjonalnie rozwinięcie (strona szczegółowa). Pola:

1. **Tytuł** — krótki, zorientowany na efekt (np. „Migracja płatności bez przestoju w ruchu świątecznym", nie „Praca nad modułem checkout").
2. **Kontekst** — typ firmy/branża + rola + okres (np. „Duży e-commerce modowy, rola: Senior FE, 2022–2023"). Firma nazwana tylko jeśli Xebia/PGS Software, inaczej anonimowo.
3. **Problem biznesowy** (2–3 zdania) — co bolało biznes/użytkownika, zanim zacząłem. Bez żargonu technicznego na starcie.
4. **Mój wkład** (bullet listy, „co i jak") — konkretne decyzje/działania, nie lista technologii. Np.:
   - Zaprojektowałem X, bo Y.
   - Wprowadziłem A/B test na Z, co pozwoliło zmierzyć W.
   - Poprowadziłem migrację z Akamai do Contentful bez przestoju.
5. **Efekt / rezultat** — metryka jeśli dostępna (np. „-30% czasu ładowania", „+X% konwersji"), w innym wypadku efekt jakościowy (np. „zespół przejął utrzymanie bez mojego udziału po 2 tyg.").
6. **Tagi technologiczne** — krótka lista chipów (React, Next.js, TypeScript, e-commerce, płatności, A/B testing, mikrofrontendy, CRO/SEO, Contentful, Akamai...).
7. **(Opcjonalnie) Głębszy case study** — link do rozwiniętej podstrony, tylko gdy wpis tego wymaga (złożony projekt).

Kolejność w liście portfolio: najbardziej reprezentatywne/senior-level wpisy na górze (nie chronologicznie).

## Kolorystyka
Wyciągnięta z realnych plików logo (`Desktop/Pixelite/Projekty/Pixelite/pixelite/`), nie wymyślona:

| Token | Hex | Użycie |
|---|---|---|
| `--brand-orange` | `#FF7600` | prawdziwy kolor marki — grafika, logo, duże akcenty, tryb ciemny (tam ma wystarczający kontrast) |
| `--brand-orange-strong` | `#B85500` | przyciemniony wariant — przyciski/linki/tekst na jasnym tle (czysty `#FF7600` nie przechodzi WCAG AA na jasnym tle) |
| `--brand-cream` | `#FEF2E4` | jasne tło alternatywne, tło pod logo w wariancie "Main"/"Inverted" |
| `--brand-charcoal` | `#444444` | ciemny tekst/tło, wariant logo "Black"/"White" |

Zdefiniowane w [src/app/globals.css](../src/app/globals.css) jako CSS custom properties + zmapowane na tokeny Tailwind (`bg-brand-orange` itd.) oraz na semantyczne tokeny shadcn (`--primary` = `--brand-orange-strong` w jasnym motywie, `--brand-orange` w ciemnym).

## Logo i assety
Źródło: `Desktop/Pixelite/Projekty/Pixelite/pixelite/` (poza repo). Skopiowane warianty w [public/brand/](../public/brand/):
- `logo-main.svg` — pełny lockup na kremowym tle (do użycia na pomarańczowym/ciemnym tle strony)
- `logo-black.svg` — ciemny wordmark, transparentne tło → **używany w headerze** (jasna strona)
- `logo-white.svg` — jasny wordmark, do ciemnych sekcji/dark mode
- `logo-inverted.svg`, `logo-symbol.svg` — warianty pomocnicze/favicon
Favicon (ico, apple-touch, android-chrome, `site.webmanifest`) już wpięty w `src/app/`.

## Strona główna — styl wizualny
Pełnoekranowy splash (osobny layout, bez wspólnego headera/footera z resztą strony — patrz `src/app/(home)/page.tsx`):
- Tło: pełne `--brand-orange` (#FF7600).
- Animacja **particles** na całą stronę: biała sieć cząstek (canvas, wyłączana przy `prefers-reduced-motion`). Komponent: [src/components/particle-field.tsx](../src/components/particle-field.tsx) — kolory/gęstość konfigurowalne przez propsy.
- Logo (symbol, nie pełny lockup) wyśrodkowane — dokładnie tak jak w oficjalnych plikach marki (`Pixelite Logo Symbol` na pomarańczowym tle).
- Menu (Portfolio/Blog/Kontakt) w prawym górnym rogu, sociale (LinkedIn/GitHub/e-mail) w lewym dolnym — obie grupy w białych "pigułkach" (`bg-black/15` + blur) dla czytelności, bo czysta biel na `#FF7600` nie przechodzi WCAG AA dla drobnego tekstu.
- Pozostałe podstrony (Portfolio/Blog/Kontakt) dostały tę samą kolorystykę: pomarańczowe tło + particles widoczne w marginesach/nav/footer, ale centralna treść siedzi w statycznym białym "oknie" w stylu IDE (ciemny pasek tytułowy, kolorowe traffic-lights, zakładka z monospace ścieżką pliku, np. `~/pixelite/portfolio.tsx`) które zasłania particles i jest czytelne. Komponent: [src/components/content-window.tsx](../src/components/content-window.tsx) (`ContentWindowBold`, wybrany wariant — jest też `ContentWindowSubtle` jako mniej wyrazista alternatywa). Layout: `src/app/[locale]/(site)/layout.tsx`.

## Internacjonalizacja (i18n)
- Dwa języki: **PL i EN**, oba jawne w URL (`/pl/...`, `/en/...`), bez domyślnego bez-prefiksowego — `/` przekierowuje wg `Accept-Language` przez `src/middleware.ts` (uwaga: middleware musi siedzieć w `src/`, nie w roocie repo, bo projekt używa katalogu `src/`).
- Przełącznik języka: [src/components/locale-switcher.tsx](../src/components/locale-switcher.tsx), widoczny w rogu nav (home i podstrony).
- Słowniki UI: [src/i18n/dictionaries.ts](../src/i18n/dictionaries.ts). Treść bio na stronie głównej oparta na realnym CV (PL/ENG) usera.
- Portfolio: [src/content/portfolio.ts](../src/content/portfolio.ts) — wpisy trzymane per-locale (`Record<Locale, PortfolioEntry[]>`), `getPortfolioEntries(locale)`.
- Blog (Sanity): schema `post` ma pole `language` (`pl`/`en`), query filtruje po nim — każdy wpis blogowy trzeba będzie utworzyć osobno per język w Studio.
- Routing: `src/app/[locale]/layout.tsx` to właściwy root layout (ustawia `<html lang>`, `generateStaticParams` dla `pl`/`en`). `/studio` celowo POZA `[locale]` (własny root layout w `src/app/studio/layout.tsx`) — to narzędzie admina, nie treść do tłumaczenia.

## Stack techniczny
Next.js + TypeScript + Tailwind + shadcn/ui + Vercel + Storybook (dokumentacja/testy komponentów UI).

## Decyzje techniczne (domknięte)
- **Kontakt**: `mailto:` + LinkedIn + GitHub, bez formularza — minimalny koszt utrzymania, pasuje do spokojnego/inżynierskiego tonu. Form do rozważenia dopiero jeśli realnie zabraknie tego rozwiązania.
- **Blog**: headless CMS **Sanity** (nie MDX) — jako świadoma "wprawka" (nowe narzędzie względem Contentfula znanego z portfolio), darmowy tier, Studio embedowane w repo pod `/studio`, integracja przez `next-sanity`.
- **Dane kontaktowe**: realne wartości w [src/config/site.ts](../src/config/site.ts) — `grzegorz.martowski@gmail.com`, `github.com/grzeg`, LinkedIn.

## Otwarte pytania / do doprecyzowania
- Liczba wpisów portfolio na start (MVP) — obecnie 1 przykładowy wpis (PL+EN) w [src/content/portfolio.ts](../src/content/portfolio.ts) do zastąpienia realną treścią z CV.
- Zdjęcie autora na podstronie portfolio — mamy je w plikach CV (PDF), do wyciągnięcia i dodania.
- Sanity: trzeba założyć realny projekt (obecnie CMS nieskonfigurowany) i wpisać `NEXT_PUBLIC_SANITY_PROJECT_ID` w `.env.local`.
