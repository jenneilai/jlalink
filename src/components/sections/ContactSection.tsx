"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { SocialContactIcons } from "@/components/layout/SocialContactIcons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteContact } from "@/lib/site-config";

export function ContactSection() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding section-alt">
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

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-5 lg:gap-10">
          <FadeIn className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card-premium p-6 sm:p-8"
            >
              {submitted ? (
                <div className="flex min-h-[280px] items-center justify-center text-center">
                  <p className="text-lg font-medium text-teal">
                    {t("form.success")}
                  </p>
                </div>
              ) : (
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("form.name")}</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("form.email")}</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("form.phone")}</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("form.company")}</Label>
                      <Input id="company" name="company" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea id="message" name="message" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    {t("form.submit")}
                  </Button>
                </div>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy p-6 text-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25)] sm:p-8">
              <h3 className="text-lg font-bold sm:text-xl">{t("info.title")}</h3>

              <div className="mt-8 space-y-8">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal">
                      {t("info.locationLabel")}
                    </p>
                    <p className="mt-2 font-medium text-white">
                      {t("info.location")}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {t("info.locationDetail")}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <div className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal">
                        {t("info.contactLabel")}
                      </p>
                      <div className="mt-3 space-y-2">
                        <a
                          href={`mailto:${siteContact.email}`}
                          className="block font-medium text-white transition-colors hover:text-teal"
                        >
                          {siteContact.email}
                        </a>
                        <a
                          href={`tel:${siteContact.phoneTel}`}
                          className="block font-medium tracking-wide text-white transition-colors hover:text-teal"
                        >
                          {siteContact.phone}
                        </a>
                      </div>

                      <div className="mt-5">
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-teal">
                          {t("info.messagingLabel")}
                        </p>
                        <SocialContactIcons size="md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
