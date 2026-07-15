import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

/** Sharp SVG brand tile — black background, readable teal JLA Link type. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 88 88"
      role="img"
      aria-label="JLA Link"
      className={cn(
        "h-12 w-12 shrink-0 rounded-xl sm:h-14 sm:w-14",
        className
      )}
    >
      <rect width="88" height="88" rx="16" fill="#000000" />
      <text
        x="44"
        y="36"
        textAnchor="middle"
        fill="#00C4B4"
        fontFamily="var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        JLA
      </text>
      <text
        x="44"
        y="58"
        textAnchor="middle"
        fill="#00C4B4"
        fontFamily="var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="0.02em"
      >
        Link
      </text>
    </svg>
  );
}
