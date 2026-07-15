import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

/** Crisp vector-style mark — black tile + teal type (matches site palette). */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-black text-center leading-none sm:h-11 sm:w-11",
        className
      )}
      aria-hidden="true"
    >
      <span className="text-[10px] font-bold tracking-[0.1em] text-teal sm:text-[11px]">
        JLA
      </span>
      <span className="mt-0.5 text-[8px] font-semibold tracking-[0.08em] text-teal sm:text-[9px]">
        Link
      </span>
    </div>
  );
}
