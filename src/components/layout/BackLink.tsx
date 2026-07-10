"use client";

import { Link, useRouter } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackLinkProps {
  /** Used when there is no in-site history (e.g. direct visit) */
  fallbackHref?: string;
  /** @deprecated Use fallbackHref */
  href?: string;
  label: string;
  variant?: "light" | "dark";
  className?: string;
}

export function BackLink({
  fallbackHref,
  href,
  label,
  variant = "dark",
  className,
}: BackLinkProps) {
  const router = useRouter();
  const fallback = fallbackHref ?? href ?? "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallback);
  };

  return (
    <Link
      href={fallback}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3",
        variant === "light"
          ? "rounded-full border border-white/25 bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20"
          : "rounded-full border border-border bg-white px-5 py-2.5 text-navy shadow-sm hover:border-teal hover:text-teal",
        className
      )}
    >
      <ArrowLeft className="h-4 w-4 shrink-0" />
      {label}
    </Link>
  );
}
