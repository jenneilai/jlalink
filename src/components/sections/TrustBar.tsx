"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function TrustBar() {
  const t = useTranslations("trust");

  const items = ["verified", "onGround", "bilingual", "response"] as const;

  return (
    <section className="border-y border-border bg-white py-6 sm:py-8">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((key) => (
              <div
                key={key}
                className="flex items-start gap-3 rounded-xl bg-background px-4 py-3 sm:items-center"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal sm:mt-0" />
                <div>
                  <p className="text-sm font-semibold text-navy">
                    {t(`items.${key}.title`)}
                  </p>
                  <p className="text-xs leading-relaxed text-muted">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
