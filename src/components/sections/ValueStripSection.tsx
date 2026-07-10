"use client";

import { useTranslations } from "next-intl";
import { Languages, Search, ShieldCheck, Truck, Clock } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const items = [
  { key: "language" as const, icon: Languages },
  { key: "suppliers" as const, icon: Search },
  { key: "quality" as const, icon: ShieldCheck },
  { key: "logistics" as const, icon: Truck },
  { key: "time" as const, icon: Clock },
];

export function ValueStripSection() {
  const t = useTranslations("painPoints");

  return (
    <section className="border-b border-border bg-white py-10 sm:py-12">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-teal">
            {t("label")}
          </p>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ key, icon: Icon }, index) => (
            <FadeIn key={key} delay={index * 0.05}>
              <div className="card-premium h-full p-5 text-center sm:p-6 sm:text-left">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal sm:mx-0">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-navy sm:text-base">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
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
