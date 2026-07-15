"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { BlogCard } from "@/components/resources/BlogCard";
import { BlogConsultantCta, BlogSeeAllNav } from "@/components/resources/BlogUi";
import { ARTICLES } from "@/lib/resources";

export function ResourcesSection() {
  const t = useTranslations("resources");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-blog-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="resources" className="scroll-mt-20 section-padding bg-white pb-0">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            label={t("label")}
            title={t("title")}
            description={t("description")}
            wide
            align="center"
            className="mx-auto"
          />
        </FadeIn>
      </div>

      <div className="mt-10 flex justify-center border-y border-border bg-white py-10 sm:mt-12 sm:py-12">
        <BlogConsultantCta label={t("speakToConsultants")} />
      </div>

      <div className="section-alt section-padding !pt-12 !pb-14">
        <div className="container-wide">
          <div
            ref={scrollRef}
            className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 scrollbar-hide sm:-mx-6 sm:px-6 lg:gap-8"
          >
            {ARTICLES.map(({ key, slug, image }) => (
              <div
                key={key}
                data-blog-card
                className="w-[min(100%,340px)] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
              >
                <BlogCard
                  slug={slug}
                  image={image}
                  category={t(`articles.${key}.category`)}
                  serviceFocus={t(`articles.${key}.serviceFocus`)}
                  title={t(`articles.${key}.title`)}
                  excerpt={t(`articles.${key}.excerpt`)}
                  date={t(`articles.${key}.date`)}
                  variant="featured"
                />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <BlogSeeAllNav
              seeAllLabel={t("seeAll")}
              onPrev={() => scrollBy(-1)}
              onNext={() => scrollBy(1)}
              canPrev={canPrev}
              canNext={canNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
