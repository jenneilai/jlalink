import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { BackLink } from "@/components/layout/BackLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { serviceConfig } from "@/lib/services-config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero titleKey="services" />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <p className="mx-auto mb-4 max-w-3xl text-center text-lg font-medium text-navy">
            {t("pageLead")}
          </p>
          <p className="mx-auto mb-14 max-w-3xl text-center text-lg text-muted">
            {t("description")}
          </p>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceConfig.map(({ key, icon: Icon }, index) => (
              <FadeIn key={key} delay={index * 0.06}>
                <article className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-white p-8 shadow-sm transition-all hover:border-teal/30 hover:shadow-lg">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-teal">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-navy">
                        {t(`items.${key}.title`)}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-teal">
                        {t(`items.${key}.benefit`)}
                      </p>
                      <p className="mt-3 leading-relaxed text-muted">
                        {t(`items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                  <p className="border-t border-border pt-5 text-sm leading-relaxed text-muted">
                    {t(`items.${key}.detail`)}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-16 flex justify-center border-t border-border pt-12">
            <BackLink fallbackHref="/" label={tCommon("goBack")} />
          </div>
        </div>
      </section>
    </>
  );
}
