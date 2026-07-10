"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/#faq", key: "faq" as const },
  { href: "/resources", key: "resources" as const },
  { href: "/contact", key: "contact" as const },
];

function isActivePath(pathname: string, href: string, hash: string) {
  const currentHash = hash.startsWith("#") ? hash : hash ? `#${hash}` : "";

  if (href === "/") {
    return pathname === "/" && !currentHash;
  }

  if (href.includes("#")) {
    const [path, anchor] = href.split("#");
    const targetPath = path || "/";
    return pathname === targetPath && currentHash === `#${anchor}`;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function useLocationHash() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return hash;
}

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const hash = useLocationHash();
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const isHome = pathname === "/";
  const useSolidHeader = !isHome || pastHero || open;

  const updateScrollState = useCallback(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }
    const hero = document.getElementById("hero");
    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setPastHero(heroBottom <= 88);
    } else {
      setPastHero(window.scrollY > window.innerHeight * 0.75);
    }
  }, [isHome]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        useSolidHeader
          ? "border-b border-white/10 bg-white/85 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/75"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-wide flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300",
              useSolidHeader
                ? "bg-navy text-white shadow-lg shadow-navy/20"
                : "border border-white/25 bg-white/10 text-white backdrop-blur-sm"
            )}
          >
            JLA
          </div>
          <div className="hidden sm:block">
            <p
              className={cn(
                "text-base font-bold tracking-tight transition-colors duration-300",
                useSolidHeader ? "text-navy" : "text-white"
              )}
            >
              JLA Link
            </p>
            <p
              className={cn(
                "text-xs transition-colors duration-300",
                useSolidHeader ? "text-muted" : "text-white/75"
              )}
            >
              捷联
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href, hash);
            return (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                active
                  ? "text-teal"
                  : useSolidHeader
                    ? "text-navy/80 hover:text-teal"
                    : "text-white/90 hover:text-teal"
              )}
            >
              {t(item.key)}
            </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher variant={useSolidHeader ? "default" : "onDark"} />
          <Button
            asChild
            variant={useSolidHeader ? "default" : "secondary"}
            size="sm"
            className={cn(!useSolidHeader && "border-white/25 bg-white/10 text-white hover:bg-white/20")}
          >
            <Link href="/contact">{t("getStarted")}</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-lg p-2 transition-colors lg:hidden",
            useSolidHeader ? "text-navy" : "text-white"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white/95 px-4 py-6 shadow-lg backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href, hash);
              return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  active ? "text-teal" : "text-navy hover:text-teal"
                )}
              >
                {t(item.key)}
              </Link>
              );
            })}
            <div className="flex items-center justify-between border-t border-border pt-4">
              <LanguageSwitcher />
              <Button asChild size="sm">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  {t("getStarted")}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
