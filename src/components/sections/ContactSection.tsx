"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/layout/SectionHeading";
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

  const infoItems = [
    {
      icon: MapPin,
      label: t("info.locationLabel"),
      content: (
        <>
          <p className="font-medium text-white">{t("info.location")}</p>
          <p className="mt-1 text-sm leading-relaxed text-white/65">
            {t("info.locationDetail")}
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      label: t("info.emailLabel"),
      content: (
        <a
          href={`mailto:${siteContact.email}`}
          className="font-medium text-white transition-colors hover:text-teal"
        >
          {siteContact.email}
        </a>
      ),
    },
    {
      icon: Phone,
      label: t("info.phoneLabel"),
      content: (
        <a
          href={`tel:${siteContact.phoneTel}`}
          className="font-medium tracking-wide text-white transition-colors hover:text-teal"
        >
          {siteContact.phone}
        </a>
      ),
    },
    {
      icon: MessageCircle,
      label: t("info.messagingLabel"),
      content: (
        <div className="space-y-1 text-sm leading-relaxed text-white/80">
          <p>
            <a
              href={`https://wa.me/${siteContact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white transition-colors hover:text-teal"
            >
              {t("info.whatsapp")}
            </a>
            <span className="text-white/50"> · </span>
            <span className="text-white/80">{t("info.wechat")}</span>
          </p>
          <p className="font-medium tracking-wide text-white">
            {siteContact.phone}
            <span className="ml-2 text-white/50">·</span>
            <span className="ml-2 text-white/70">{siteContact.wechatId}</span>
          </p>
        </div>
      ),
    },
  ];

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
            <div className="h-full rounded-2xl border border-white/10 bg-navy p-6 text-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25)] sm:p-8">
              <h3 className="text-lg font-bold sm:text-xl">{t("info.title")}</h3>
              <ul className="mt-8 divide-y divide-white/10">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal">
                        {item.label}
                      </p>
                      <div className="mt-2">{item.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
