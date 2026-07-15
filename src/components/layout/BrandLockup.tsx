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
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-[0_0_20px_rgba(46,232,240,0.25)] sm:h-11 sm:w-11"
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
