"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

        <FadeIn className="mx-auto mt-10 max-w-2xl lg:mt-12">
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
                <div className="flex justify-center pt-1">
                  <Button type="submit" size="lg" className="w-full sm:w-auto sm:min-w-[200px]">
                    {t("form.submit")}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
