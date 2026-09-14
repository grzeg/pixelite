export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];

// Używany tylko jako fallback przy wykrywaniu języka w middleware — w URL zawsze
// jawny prefiks /pl albo /en (patrz middleware.ts), bez domyślnego bez-prefiksowego.
export const defaultLocale: Locale = "pl";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
