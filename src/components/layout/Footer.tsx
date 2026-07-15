import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin } from "lucide-react";
import { SocialContactIcons } from "@/components/layout/SocialContactIcons";
import { BrandLockup } from "@/components/layout/BrandLockup";
import { siteContact } from "@/lib/site-config";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tContact = await getTranslations("contact.info");

  const links = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("about") },
    { href: "/services", label: tNav("services") },
    { href: "/#faq", label: tNav("faq") },
    { href: "/resources", label: tNav("resources") },
    { href: "/contact", label: tNav("contact") },
  ];

  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-wide section-padding !py-12 sm:!py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <BrandLockup
                nameClassName="text-lg text-teal"
                subtitleClassName="text-white/70"
              />
              <p className="mt-2 text-sm text-white/60">{t("tagline")}</p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal">
              {t("contactUs")}
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {tContact("location")}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-teal" />
                <a
                  href={`mailto:${siteContact.email}`}
                  className="hover:text-white"
                >
                  {siteContact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContact.phoneTel}`}
                  className="tracking-wide hover:text-white"
                >
                  {siteContact.phone}
                </a>
              </li>
            </ul>
            <SocialContactIcons size="sm" className="mt-4" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} JLA Link. {t("rights")}
          </p>
          <Link
            href="/privacy"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
