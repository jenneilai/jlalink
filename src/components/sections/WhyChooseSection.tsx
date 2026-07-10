"use client";

import { useTranslations } from "next-intl";
import {
  MapPin,
  Languages,
  Settings2,
  ShieldCheck,
  BookOpen,
  Building2,
  Handshake,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";

const whyConfig = [
  { key: "qualifiedSuppliers" as const, icon: ShieldCheck },
  { key: "flexibleServices" as const, icon: Settings2 },
  { key: "mandarin" as const, icon: Languages },
  { key: "location" as const, icon: MapPin },
  { key: "marketKnowledge" as const, icon: BookOpen },
  { key: "onSiteVisits" as const, icon: Building2 },
  { key: "noHiddenCommissions" as const, icon: Handshake },
];

export function WhyChooseSection() {
  const t = useTranslations("whyChoose");

  return (
    <section className="section-padding relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2d4a]" />
      <div className="container-wide relative">
        <FadeIn>
          <SectionHeading
            label={t("label")}
            title={t("title")}
            description={t("description")}
            light
            align="center"
            wide
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {whyConfig.map(({ key, icon: Icon }, index) => (
            <FadeIn key={key} delay={index * 0.06}>
              <div className="card-premium-dark h-full p-5 sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/20 text-teal sm:mb-4 sm:h-11 sm:w-11">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
