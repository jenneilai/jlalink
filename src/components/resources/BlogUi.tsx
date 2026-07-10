import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** WeLink-style uppercase consultant CTA pill */
export function BlogConsultantCta({ label }: { label: string }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-full bg-navy px-10 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-navy-light sm:px-12 sm:text-xs"
    >
      {label}
    </Link>
  );
}

interface BlogSeeAllNavProps {
  seeAllLabel: string;
  onPrev: () => void;
  onNext: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  seeAllHref?: string;
}

/** WeLink-style ← SEE ALL → navigation */
export function BlogSeeAllNav({
  seeAllLabel,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  seeAllHref = "/resources",
}: BlogSeeAllNavProps) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Previous articles"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-opacity sm:h-12 sm:w-12",
          !canPrev && "cursor-not-allowed opacity-30"
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <Link
        href={seeAllHref}
        className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-navy-light sm:px-10 sm:text-xs"
      >
        {seeAllLabel}
      </Link>

      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Next articles"
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-opacity sm:h-12 sm:w-12",
          !canNext && "cursor-not-allowed opacity-30"
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

/** Blog page category filter pill — active = filled navy */
export function BlogFilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
        active
          ? "bg-navy text-white shadow-md shadow-navy/20"
          : "bg-transparent text-muted hover:text-navy"
      )}
    >
      {label}
    </button>
  );
}
