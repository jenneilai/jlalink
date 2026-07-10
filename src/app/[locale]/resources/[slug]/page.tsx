import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Calendar } from "lucide-react";
import {
  ArticleContent,
  type ArticleBody,
} from "@/components/resources/ArticleContent";
import { BackLink } from "@/components/layout/BackLink";
import { RelatedArticles } from "@/components/resources/RelatedArticles";
import { BlogConsultantCta } from "@/components/resources/BlogUi";
import { getArticleBySlug, ARTICLE_SLUGS } from "@/lib/resources";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ARTICLE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const t = await getTranslations({ locale, namespace: "resources" });
  return {
    title: `${t(`articles.${article.key}.title`)} | JLA Link`,
    description: t(`articles.${article.key}.excerpt`),
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations("resources");
  const tCommon = await getTranslations("common");
  const content = t.raw(`articles.${article.key}.content`) as ArticleBody;

  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-10 pt-28 sm:pb-12 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2d4a]" />
        <div className="container-wide relative px-4 sm:px-6 lg:px-8">
          <BackLink
            fallbackHref="/resources"
            label={tCommon("goBack")}
            variant="light"
            className="mb-6"
          />
          <div className="relative mb-8 aspect-[21/9] max-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src={article.image}
              alt={t(`articles.${article.key}.title`)}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <span className="absolute bottom-4 left-4 z-10 rounded-full bg-navy/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:text-[11px]">
              {t(`articles.${article.key}.category`)}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/70 sm:text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {t(`articles.${article.key}.date`)}
            </span>
            <span>{t(`articles.${article.key}.readTime`)}</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t(`articles.${article.key}.title`)}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/75 sm:text-lg">
            {t(`articles.${article.key}.excerpt`)}
          </p>
          <p className="mt-5 max-w-2xl border-l-2 border-teal pl-4 text-sm leading-relaxed text-teal/95">
            {t(`articles.${article.key}.serviceFocus`)}
          </p>
        </div>
      </section>

      <div className="flex justify-center border-b border-border bg-white py-10 sm:py-12">
        <BlogConsultantCta label={t("speakToConsultants")} />
      </div>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ArticleContent
            intro={content.intro}
            sections={content.sections}
            closing={content.closing}
            consultantLabel={t("speakToConsultants")}
            fallbackHref="/resources"
            backLabel={tCommon("goBack")}
          />
        </div>
      </section>

      <RelatedArticles currentSlug={slug} />
    </>
  );
}
