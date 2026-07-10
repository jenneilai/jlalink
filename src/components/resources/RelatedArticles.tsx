import { getTranslations } from "next-intl/server";
import { BlogCard } from "@/components/resources/BlogCard";
import { BlogConsultantCta } from "@/components/resources/BlogUi";
import { ARTICLES } from "@/lib/resources";

interface RelatedArticlesProps {
  currentSlug: string;
}

export async function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const t = await getTranslations("resources");
  const related = ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="section-padding section-alt border-t border-border">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
            {t("relatedLabel")}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
            {t("relatedTitle")}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {related.map(({ key, slug, image }) => (
            <BlogCard
              key={key}
              slug={slug}
              image={image}
              category={t(`articles.${key}.category`)}
              serviceFocus={t(`articles.${key}.serviceFocus`)}
              title={t(`articles.${key}.title`)}
              excerpt={t(`articles.${key}.excerpt`)}
              date={t(`articles.${key}.date`)}
              variant="featured"
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <BlogConsultantCta label={t("speakToConsultants")} />
        </div>
      </div>
    </section>
  );
}
