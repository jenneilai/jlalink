import { getTranslations } from "next-intl/server";
import { BackLink } from "@/components/layout/BackLink";

interface PageHeroProps {
  titleKey: "about" | "services" | "resources" | "contact" | "privacy";
  backHref?: string;
}

export async function PageHero({
  titleKey,
  backHref = "/",
}: PageHeroProps) {
  const t = await getTranslations("pages");
  const tCommon = await getTranslations("common");

  return (
    <section className="relative overflow-hidden bg-navy pb-14 pt-28 sm:pb-16 sm:pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2d4a]" />
      <div className="container-wide relative px-4 sm:px-6 lg:px-8">
        <BackLink
          fallbackHref={backHref}
          label={tCommon("goBack")}
          variant="light"
          className="mb-6"
        />
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal sm:mb-3 sm:text-sm">
          JLA Link · 捷联
        </p>
        <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t(`${titleKey}.title`)}
        </h1>
        <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-white/75 sm:mt-4 sm:text-lg">
          {t(`${titleKey}.subtitle`)}
        </p>
      </div>
    </section>
  );
}
