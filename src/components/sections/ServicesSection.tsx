"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { serviceConfig } from "@/lib/services-config";
import { serviceImages, type ServiceImageKey } from "@/lib/service-images";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();
  const [activeKey, setActiveKey] = useState<ServiceImageKey>("prospecting");

  return (
    <section id="services" className="scroll-mt-20 section-padding bg-white">
      <div className="container-wide">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              label={t("label")}
              title={t("title")}
              description={t("description")}
              wide
            />
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/services">
                {t("viewAll")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <FadeIn className="lg:sticky lg:top-28">
            <div className="card-premium relative overflow-hidden">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                {serviceConfig.map(({ key }) => {
                  const image = serviceImages[key];
                  const alt = locale === "zh" ? image.alt.zh : image.alt.en;
                  return (
                    <Image
                      key={key}
                      src={image.src}
                      alt={alt}
                      fill
                      className={cn(
                        "object-cover transition-opacity duration-500 ease-in-out",
                        activeKey === key ? "opacity-100" : "opacity-0"
                      )}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={key === "prospecting"}
                    />
                  );
                })}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-teal">
                    {t("imageLabel")}
                  </p>
                  <p
                    key={activeKey}
                    className="mt-2 animate-in fade-in duration-300 text-lg font-medium leading-relaxed text-white/90"
                  >
                    {t(`items.${activeKey}.imageCaption`)}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="card-premium divide-y divide-border overflow-hidden">
            {serviceConfig.map(({ key, icon: Icon }, index) => (
              <FadeIn key={key} delay={index * 0.05}>
                <ServiceRow
                  icon={Icon}
                  title={t(`items.${key}.title`)}
                  description={t(`items.${key}.description`)}
                  isActive={activeKey === key}
                  onSelect={() => setActiveKey(key)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  icon: Icon,
  title,
  description,
  isActive,
  onSelect,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "flex w-full items-center gap-4 px-5 py-5 text-left transition-colors sm:px-6",
          isActive ? "bg-teal/[0.04]" : "hover:bg-muted/30"
        )}
        aria-expanded={isActive}
      >
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
            isActive
              ? "bg-teal text-white"
              : "bg-navy/5 text-navy group-hover:bg-teal/10"
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span className="flex-1 text-base font-semibold text-navy sm:text-lg">
          {title}
        </span>
        <ChevronRight
          className={cn(
            "h-5 w-5 shrink-0 text-teal transition-transform duration-200",
            isActive && "rotate-90"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-[4.75rem] text-sm leading-relaxed text-muted sm:px-6 sm:text-[15px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
