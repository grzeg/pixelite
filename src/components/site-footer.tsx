import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <div className="flex gap-4">
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
