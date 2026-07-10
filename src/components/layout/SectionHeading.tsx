import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  wide?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
  className,
  wide = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        wide ? "max-w-3xl" : "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal sm:mb-3 sm:text-sm">
        {label}
      </p>
      <h2
        className={cn(
          "text-balance text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem] lg:leading-[1.15]",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-pretty text-base font-medium leading-relaxed sm:mt-4 sm:text-lg sm:leading-[1.7]",
            light ? "text-white/75" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
