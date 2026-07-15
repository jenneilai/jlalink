import Image from "next/image";
import { cn } from "@/lib/utils";

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
      <Image
        src="/brand-logo.png"
        alt="JLA Link"
        width={96}
        height={96}
        quality={100}
        unoptimized
        className="h-10 w-10 shrink-0 rounded-xl object-contain sm:h-11 sm:w-11"
        priority
      />
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
