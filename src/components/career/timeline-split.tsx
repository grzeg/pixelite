import { Badge } from "@/components/ui/badge";
import type { CareerEntry, Certification, Education, Language } from "@/content/career";

// Wariant 3: dwukolumnowy split — obecna rola szczegółowo po lewej,
// reszta kariery skondensowana w kompaktowym słupku po prawej, a wykształcenie/
// języki/certyfikaty w zwartym pasku na dole.
export function TimelineSplit({
  entries,
  education,
  educationLabel,
  languages,
  languagesLabel,
  certifications,
  certificationsLabel,
}: {
  entries: CareerEntry[];
  education: Education;
  educationLabel: string;
  languages: Language[];
  languagesLabel: string;
  certifications: Certification[];
  certificationsLabel: string;
}) {
  const [featured, ...rest] = entries;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <div className="flex h-full flex-col gap-2 rounded-lg bg-muted/50 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <span className="font-medium">{featured.role}</span>
              <span className="text-xs text-muted-foreground">{featured.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{featured.company}</p>
            <p className="text-sm text-muted-foreground">{featured.summary}</p>
            {featured.tags ? (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="tech">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:border-l sm:border-border sm:pl-6">
          {rest.map((entry) => (
            <div key={`${entry.company}-${entry.period}`} className="text-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <span className="font-medium">{entry.company}</span>
                <span className="text-xs text-muted-foreground">{entry.period}</span>
              </div>
              <p className="text-xs text-muted-foreground">{entry.role}</p>
              {entry.tags ? (
                <div className="mt-1 flex flex-wrap gap-1">
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant="tech" className="h-4 px-1.5 text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 border-t border-border pt-4 sm:grid-cols-3">
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">{educationLabel}</p>
          <p className="mb-1.5 text-sm">{education.school}</p>
          <ul className="flex flex-col gap-2">
            {education.degrees.map((entry) => (
              <li key={entry.degree} className="flex items-start gap-1.5 text-xs">
                <span className="text-muted-foreground">–</span>
                <span className="flex flex-col">
                  <span>{entry.degree}</span>
                  <span className="text-muted-foreground">{entry.years}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">{languagesLabel}</p>
          <ul className="flex flex-col gap-1.5">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-baseline gap-1.5 text-xs">
                <span className="text-muted-foreground">–</span>
                <span>{lang.name}</span>
                <Badge variant="tech" className="h-4 px-1.5 text-[10px]">
                  {lang.level}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">{certificationsLabel}</p>
          <ul className="flex flex-col gap-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-start gap-1.5 text-xs">
                <span className="text-muted-foreground">–</span>
                <span className="flex flex-col">
                  <span>{cert.name}</span>
                  <span className="text-muted-foreground">{cert.date}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
