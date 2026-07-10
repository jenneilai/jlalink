import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { BackLink } from "@/components/layout/BackLink";
import { ContactSection } from "@/components/sections/ContactSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero titleKey="contact" />
      <ContactSection />
      <div className="container-wide flex justify-center border-t border-border bg-white pb-14 pt-4">
        <BackLink fallbackHref="/" label={tCommon("goBack")} />
      </div>
    </>
  );
}
