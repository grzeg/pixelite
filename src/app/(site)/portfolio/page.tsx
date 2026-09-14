import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioEntries } from "@/content/portfolio";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-medium">Portfolio</h1>
        <p className="mt-2 text-muted-foreground">
          Wybrane projekty — problem biznesowy, mój wkład, efekt. Nazwy klientów są anonimizowane, poza
          Xebia i PGS Software.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {portfolioEntries.map((entry) => (
          <Card key={entry.slug}>
            <CardHeader>
              <CardTitle>{entry.title}</CardTitle>
              <CardDescription>{entry.context}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p>{entry.problem}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {entry.contribution.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="text-sm font-medium">{entry.outcome}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
