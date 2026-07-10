import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueStripSection } from "@/components/sections/ValueStripSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServicesCtaBand } from "@/components/sections/ServicesCtaBand";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ValueStripSection />
      <AboutSection />
      <ServicesSection />
      <ServicesCtaBand />
      <WhyChooseSection />
      <ResourcesSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
