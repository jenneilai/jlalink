import { setRequestLocale } from "next-intl/server";
import { BlogPageHero, BlogConsultantBand } from "@/components/resources/BlogPageHero";
import { BlogListing } from "@/components/resources/BlogListing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BlogPageHero />
      <BlogConsultantBand />
      <section className="section-padding section-alt">
        <div className="container-wide">
          <BlogListing />
        </div>
      </section>
    </>
  );
}
