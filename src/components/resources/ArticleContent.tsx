import { BackLink } from "@/components/layout/BackLink";
import { BlogConsultantCta } from "@/components/resources/BlogUi";

export type ArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ArticleBody = {
  intro: string;
  closing: string;
  cta: string;
  sections: ArticleSection[];
};

interface ArticleContentProps {
  intro: string;
  sections: ArticleSection[];
  closing: string;
  consultantLabel: string;
  fallbackHref: string;
  backLabel: string;
}

export function ArticleContent({
  intro,
  sections,
  closing,
  consultantLabel,
  fallbackHref,
  backLabel,
}: ArticleContentProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <BackLink fallbackHref={fallbackHref} label={backLabel} className="mb-8" />

      <p className="text-lg leading-relaxed text-muted">{intro}</p>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              {section.title}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-4 leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((item) => (
                  <li key={item.slice(0, 48)} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted/20 px-6 py-10 text-center sm:px-10 sm:py-12">
        <p className="mx-auto max-w-xl leading-relaxed text-navy">{closing}</p>
        <div className="mt-8 flex justify-center">
          <BlogConsultantCta label={consultantLabel} />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-6 border-t border-border pt-10">
        <BackLink fallbackHref={fallbackHref} label={backLabel} />
      </div>
    </article>
  );
}
