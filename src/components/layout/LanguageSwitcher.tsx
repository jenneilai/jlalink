"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "default" | "onDark";
};

export function LanguageSwitcher({
  className,
  variant = "default",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const onDark = variant === "onDark";

  const switchLocale = (nextLocale: "en" | "zh") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border p-1 text-xs font-medium transition-colors duration-300",
        onDark
          ? "border-white/20 bg-white/10 backdrop-blur-sm"
          : "border-border bg-white",
        className
      )}
      aria-label="Language switcher"
    >
      <Globe
        className={cn(
          "ml-2 h-3.5 w-3.5",
          onDark ? "text-white/70" : "text-muted"
        )}
      />
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={cn(
          "rounded-full px-3 py-1.5 transition-colors",
          locale === "en"
            ? onDark
              ? "bg-white text-navy"
              : "bg-navy text-white"
            : onDark
              ? "text-white/80 hover:text-white"
              : "text-muted hover:text-navy"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLocale("zh")}
        className={cn(
          "rounded-full px-3 py-1.5 transition-colors",
          locale === "zh"
            ? onDark
              ? "bg-white text-navy"
              : "bg-navy text-white"
            : onDark
              ? "text-white/80 hover:text-white"
              : "text-muted hover:text-navy"
        )}
      >
        简体
      </button>
    </div>
  );
}
