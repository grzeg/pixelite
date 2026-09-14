import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-medium">Kontakt</h1>
        <p className="mt-2 text-muted-foreground">Najprościej: napisz maila albo znajdź mnie na LinkedIn.</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a href={`mailto:${siteConfig.email}`} className={cn(buttonVariants({ variant: "default" }))}>
          Napisz e-mail
        </a>
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          LinkedIn
        </a>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
