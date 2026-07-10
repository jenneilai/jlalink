import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { BackLink } from "@/components/layout/BackLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { siteImages } from "@/lib/site-config";
import { Shield, Zap, Award, HeartHandshake } from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const valueIcons = {
  trust: Shield,
  efficiency: Zap,
  expertise: Award,
  personalized: HeartHandshake,
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tCommon = await getTranslations("common");
  const valueKeys = ["trust", "efficiency", "expertise", "personalized"] as const;
  const aboutAlt =
    locale === "zh" ? siteImages.aboutPageAlt.zh : siteImages.aboutPageAlt.en;

  return (
    <>
      <PageHero titleKey="about" />
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <SectionHeading
                label={t("label")}
                title={t("title")}
                description={t("description")}
              />
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {t("story")}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={siteImages.aboutPage}
                  alt={aboutAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2">
            {valueKeys.map((key, index) => {
              const Icon = valueIcons[key];
              return (
                <FadeIn key={key} delay={index * 0.08}>
                  <div className="flex gap-5 rounded-2xl border border-border p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy">
                        {t(`values.${key}.title`)}
                      </h3>
                      <p className="mt-2 text-muted">
                        {t(`values.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center border-t border-border pt-12">
            <BackLink fallbackHref="/" label={tCommon("goBack")} />
          </div>
        </div>
      </section>
    </>
  );
}
