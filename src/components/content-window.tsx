"use client";

import { usePathname } from "next/navigation";

function fileLabel(pathname: string) {
  const segment = pathname.split("/").filter(Boolean).pop() ?? "index";
  return `~/pixelite/${segment}.tsx`;
}

export function ContentWindowSubtle({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-background shadow-xl ring-1 ring-foreground/10">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="size-2.5 rounded-full bg-foreground/15" />
        <span className="size-2.5 rounded-full bg-foreground/15" />
      </div>
      <div className="px-6 py-10 sm:px-10 sm:py-12">{children}</div>
    </div>
  );
}

export function ContentWindowBold({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-foreground/10">
      <div className="flex items-center gap-3 bg-brand-charcoal px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="rounded-t-md bg-white/10 px-3 py-1 font-mono text-xs text-white/80">{fileLabel(pathname)}</div>
      </div>
      <div className="px-6 py-10 sm:px-10 sm:py-12">{children}</div>
    </div>
  );
}
