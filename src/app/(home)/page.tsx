import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ParticleField } from "@/components/particle-field";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const CORNER_CLUSTER =
  "flex items-center gap-5 rounded-full bg-black/15 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-brand-orange">
      <ParticleField
        className="absolute inset-0"
        count={90}
        particleColor="rgba(255, 255, 255, 0.85)"
        lineColorRgb="255, 255, 255"
      />

      <nav aria-label="Główna" className={`absolute top-6 right-6 z-10 ${CORNER_CLUSTER}`}>
        {navItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger render={<Link href={item.href} className="hover:opacity-80">{item.label}</Link>} />
            <TooltipContent>Stay tuned</TooltipContent>
          </Tooltip>
        ))}
      </nav>

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
        <Image src="/brand/logo-symbol.svg" alt={siteConfig.name} width={140} height={161} className="h-24 w-auto sm:h-32" priority />
        <p className="text-sm font-medium tracking-[0.3em] text-white uppercase">{siteConfig.name}</p>
        <p className="max-w-md text-sm text-white/80">{siteConfig.tagline}</p>
      </div>

      <div aria-label="Social media" className={`absolute bottom-6 left-6 z-10 ${CORNER_CLUSTER}`}>
        <Tooltip>
          <TooltipTrigger
            render={
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
                <LinkedinIcon className="size-5" />
              </a>
            }
          />
          <TooltipContent>Stay tuned</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80">
                <GithubIcon className="size-5" />
              </a>
            }
          />
          <TooltipContent>Stay tuned</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <a href={`mailto:${siteConfig.email}`} aria-label="E-mail" className="hover:opacity-80">
                <Mail className="size-5" strokeWidth={1.75} />
              </a>
            }
          />
          <TooltipContent>Stay tuned</TooltipContent>
        </Tooltip>
      </div>

      <p className="absolute bottom-6 right-6 z-10 text-sm text-white/70">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </div>
  );
}
