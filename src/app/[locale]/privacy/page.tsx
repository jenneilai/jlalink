import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { BackLink } from "@/components/layout/BackLink";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.privacy" });
  return {
    title: `${t("title")} | JLA Link`,
    description: t("subtitle"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  const tCommon = await getTranslations("common");
  const sections = t.raw("sections") as {
    title: string;
    paragraphs: string[];
  }[];

  return (
    <>
      <PageHero titleKey="privacy" />
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-muted">{t("lastUpdated")}</p>
            <p className="mt-6 text-lg leading-relaxed text-muted">{t("intro")}</p>

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-navy sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-muted/20 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-navy">{t("contactTitle")}</h2>
              <p className="mt-3 leading-relaxed text-muted">{t("contactText")}</p>
              <p className="mt-2 font-medium text-navy">{t("contactEmail")}</p>
            </div>

            <div className="mt-12 flex justify-center border-t border-border pt-10">
              <BackLink fallbackHref="/" label={tCommon("goBack")} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
