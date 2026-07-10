"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Shield, Zap, Award, HeartHandshake } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/lib/site-config";

const valueIcons = {
  trust: Shield,
  efficiency: Zap,
  expertise: Award,
  personalized: HeartHandshake,
};

export function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const valueKeys = ["trust", "efficiency", "expertise", "personalized"] as const;

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <SectionHeading
              label={t("label")}
              title={t("title")}
              description={t("description")}
              wide
            />
            <p className="mt-5 text-base leading-relaxed text-muted sm:mt-6">
              {t("story")}
            </p>
            <Button asChild variant="outline" className="mt-7">
              <Link href="/about">
                {t("learnMore")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_8px_40px_-8px_rgba(10,37,64,0.15)]">
              <Image
                src={siteImages.about}
                alt={
                  locale === "zh"
                    ? siteImages.aboutAlt.zh
                    : siteImages.aboutAlt.en
                }
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {valueKeys.map((key, index) => {
            const Icon = valueIcons[key];
            return (
              <FadeIn key={key} delay={index * 0.08}>
                <div className="card-premium group h-full p-5 sm:p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white sm:mb-4 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy sm:text-lg">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`values.${key}.description`)}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
