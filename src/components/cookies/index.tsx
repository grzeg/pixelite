"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionaries";
import { COOKIE_CONSENT_KEY } from "@/lib/cookie-consent";

type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function Cookies({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    // localStorage is unavailable during SSR, so visibility can only be determined client-side, after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setVisible(true);
  }, []);

  function decide(value: ConsentValue) {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.gtag?.("consent", "update", { analytics_storage: value });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-30 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl bg-brand-charcoal px-5 py-4 text-sm text-white shadow-2xl sm:flex-row sm:items-center sm:justify-between">
      <p className="text-white/85">{dict.cookies.message}</p>
      <div className="flex shrink-0 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          onClick={() => decide("denied")}
        >
          {dict.cookies.reject}
        </Button>
        <Button size="sm" onClick={() => decide("granted")}>
          {dict.cookies.accept}
        </Button>
      </div>
    </div>
  );
}
