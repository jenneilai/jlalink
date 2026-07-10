"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { cn } from "@/lib/utils";

const faqKeys = [
  "services",
  "alibaba1688",
  "languages",
  "gettingStarted",
  "difficulty",
  "costs",
  "existingSuppliers",
] as const;

export function FaqSection() {
  const t = useTranslations("faq");
  const [openKey, setOpenKey] = useState<string | null>(faqKeys[0]);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            label={t("label")}
            title={t("title")}
            description={t("description")}
            align="center"
            wide
            className="mx-auto"
          />
        </FadeIn>

        <div className="card-premium mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden lg:mt-12">
          {faqKeys.map((key, index) => {
            const isOpen = openKey === key;
            return (
              <FadeIn key={key} delay={index * 0.05}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-teal/5 sm:px-8"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-navy sm:text-lg">
                      {t(`items.${key}.question`)}
                    </span>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-teal transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-200",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted sm:px-8 sm:text-base">
                        {t(`items.${key}.answer`)}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
