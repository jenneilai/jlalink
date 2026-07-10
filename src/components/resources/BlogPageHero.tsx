import { getTranslations } from "next-intl/server";
import { BackLink } from "@/components/layout/BackLink";
import { BlogConsultantCta } from "@/components/resources/BlogUi";

export async function BlogPageHero() {
  const t = await getTranslations("resources.blogHero");
  const tCommon = await getTranslations("common");

  return (
    <section className="border-b border-border bg-white pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <BackLink
          fallbackHref="/"
          label={tCommon("goBack")}
          className="mb-8"
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal">
            {t("label")}
          </p>
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            {t("title")}
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

export async function BlogConsultantBand() {
  const t = await getTranslations("resources");
  return (
    <div className="flex justify-center border-b border-border bg-white py-10 sm:py-12">
      <BlogConsultantCta label={t("speakToConsultants")} />
    </div>
  );
}
