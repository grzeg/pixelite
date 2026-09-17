import { describe, expect, it } from "vitest";

import { defaultLocale, isLocale, locales } from "./config";

describe("isLocale", () => {
  it("accepts every configured locale", () => {
    for (const locale of locales) {
      expect(isLocale(locale)).toBe(true);
    }
  });

  it("rejects unknown values", () => {
    expect(isLocale("fr")).toBe(false);
    expect(isLocale("")).toBe(false);
  });

  it("uses pl as the default locale", () => {
    expect(defaultLocale).toBe("pl");
  });
});
