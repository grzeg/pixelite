import { Mail } from "lucide-react";

import { CORNER_CLUSTER } from "@/components/corner-cluster";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <>
      <div aria-label="Social media" className={`fixed bottom-6 left-6 z-20 ${CORNER_CLUSTER}`}>
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
          <LinkedinIcon className="size-5" />
        </a>
        <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:opacity-80">
          <GithubIcon className="size-5" />
        </a>
        <a href={`mailto:${siteConfig.email}`} aria-label="E-mail" className="hover:opacity-80">
          <Mail className="size-5" strokeWidth={1.75} />
        </a>
      </div>

      <p className="fixed bottom-6 right-6 z-20 text-sm text-white/70">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </>
  );
}
