"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { BackLink } from "@/components/layout/BackLink";
import { BlogCard } from "@/components/resources/BlogCard";
import { BlogConsultantCta, BlogFilterPill } from "@/components/resources/BlogUi";
import { ARTICLES } from "@/lib/resources";

const FILTER_IDS = ["all", "tradeShows", "sourcing", "quality", "logistics"] as const;
type FilterId = (typeof FILTER_IDS)[number];

export function BlogListing() {
  const t = useTranslations("resources");
  const tCommon = useTranslations("common");
  const [active, setActive] = useState<FilterId>("all");

  const filtered =
    active === "all"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-1 border-b border-border pb-8 sm:gap-2">
        {FILTER_IDS.map((id) => (
          <BlogFilterPill
            key={id}
            label={t(`filters.${id}`)}
            active={active === id}
            onClick={() => setActive(id)}
          />
        ))}
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
        {filtered.map(({ key, slug, image }) => (
          <BlogCard
            key={key}
            slug={slug}
            image={image}
            category={t(`articles.${key}.category`)}
            serviceFocus={t(`articles.${key}.serviceFocus`)}
            title={t(`articles.${key}.title`)}
            excerpt={t(`articles.${key}.excerpt`)}
            date={t(`articles.${key}.date`)}
            readTime={t(`articles.${key}.readTime`)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">{t("noResults")}</p>
      )}

      <div className="mt-16 flex flex-col items-center gap-6 border-t border-border pt-14 text-center sm:mt-20">
        <p className="max-w-lg text-muted">{t("ctaBlock.description")}</p>
        <BlogConsultantCta label={t("speakToConsultants")} />
        <BackLink fallbackHref="/" label={tCommon("goBack")} className="mt-2" />
      </div>
    </>
  );
}
