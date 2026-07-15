import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

/** Sharp SVG brand tile — black background, single-line JLA Link in site teal. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 88 88"
      role="img"
      aria-label="JLA Link"
      className={cn(
        "h-10 w-10 shrink-0 rounded-xl sm:h-11 sm:w-11",
        className
      )}
    >
      <rect width="88" height="88" rx="16" fill="#000000" />
      <text
        x="44"
        y="49"
        textAnchor="middle"
        fill="#00C4B4"
        fontFamily="var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="13.5"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        JLA Link
      </text>
    </svg>
  );
}
