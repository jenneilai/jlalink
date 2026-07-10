import { getTranslations } from "next-intl/server";
import { BlogConsultantCta } from "@/components/resources/BlogUi";

export async function ServicesCtaBand() {
  const t = await getTranslations("servicesCta");

  return (
    <section className="border-y border-border bg-white py-14 sm:py-16">
      <div className="container-wide px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
          {t("label")}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-2xl font-extrabold text-navy sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{t("subtitle")}</p>
        <div className="mt-8 flex justify-center">
          <BlogConsultantCta label={t("button")} />
        </div>
      </div>
    </section>
  );
}
