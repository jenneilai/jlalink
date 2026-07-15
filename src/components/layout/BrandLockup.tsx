import { cn } from "@/lib/utils";
import { BrandMark } from "./BrandMark";

type BrandLockupProps = {
  nameClassName?: string;
  subtitleClassName?: string;
  showSubtitle?: boolean;
  className?: string;
};

export function BrandLockup({
  nameClassName,
  subtitleClassName,
  showSubtitle = true,
  className,
}: BrandLockupProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BrandMark />
      <div className={cn(showSubtitle ? "hidden sm:block" : "block")}>
        <p className={cn("text-base font-bold tracking-tight", nameClassName)}>
          JLA Link
        </p>
        {showSubtitle ? (
          <p className={cn("text-xs", subtitleClassName)}>捷联</p>
        ) : null}
      </div>
    </div>
  );
}
