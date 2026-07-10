"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroGlobeVisual } from "@/components/sections/HeroGlobeVisual";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Space atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(0,196,180,0.14)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(6,21,37,0.95)_0%,transparent_45%)]" />

      {/* Mobile — large backdrop globe */}
      <div className="pointer-events-none absolute -right-[20%] top-1/2 z-0 h-[min(120vw,640px)] w-[min(120vw,640px)] -translate-y-1/2 opacity-55 lg:hidden">
        <HeroGlobeVisual compact />
      </div>

      {/* Desktop — cinematic oversized globe, bleeds off-screen */}
      <div className="pointer-events-none absolute -right-[18%] top-1/2 z-0 hidden h-[min(105vh,920px)] w-[min(105vh,920px)] -translate-y-1/2 lg:block xl:-right-[14%] xl:h-[min(110vh,1000px)] xl:w-[min(110vh,1000px)]">
        <HeroGlobeVisual />
      </div>

      {/* Left readability mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />

      <div className="container-wide relative z-10 w-full px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
        <div
          className="max-w-2xl lg:max-w-[540px] xl:max-w-xl"
          suppressHydrationWarning
        >
          <motion.span
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal backdrop-blur-sm sm:mb-6 sm:text-sm"
          >
            {t("badge")}
          </motion.span>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "font-extrabold leading-[1.1] tracking-tight text-white",
              locale === "zh"
                ? "text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
                : "text-4xl sm:text-5xl lg:text-5xl xl:text-[3.5rem]"
            )}
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-base font-medium leading-relaxed text-white/80 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-[1.75]"
          >
            {t("subheadline")}
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <Button asChild size="lg" className="shadow-xl shadow-teal/30">
              <Link href="/contact">
                {t("ctaPrimary")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/#services">{t("ctaSecondary")}</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-white/35" />
      </motion.div>
    </section>
  );
}
