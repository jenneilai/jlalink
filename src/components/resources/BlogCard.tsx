import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  serviceFocus?: string;
  title: string;
  date: string;
  excerpt?: string;
  readMore?: string;
  readTime?: string;
  variant?: "grid" | "featured";
  className?: string;
}

export function BlogCard({
  slug,
  image,
  category,
  serviceFocus,
  title,
  date,
  excerpt,
  readMore,
  readTime,
  variant = "grid",
  className,
}: BlogCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article className={cn("group", className)}>
      <Link
        href={`/resources/${slug}`}
        className={cn(
          "relative block overflow-hidden rounded-xl bg-muted/20 sm:rounded-2xl",
          isFeatured ? "aspect-[4/3]" : "aspect-[16/10] sm:aspect-[5/3]"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes={
            isFeatured
              ? "(max-width: 768px) 100vw, 33vw"
              : "(max-width: 768px) 100vw, 40vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-navy/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:text-[11px]">
          {category}
        </span>
      </Link>

      <div className={cn("mt-4 sm:mt-5")}>
        {serviceFocus && (
          <p className="text-xs font-medium leading-snug text-teal">{serviceFocus}</p>
        )}
        <h2
          className={cn(
            "font-bold leading-snug text-navy transition-colors group-hover:text-teal",
            serviceFocus ? "mt-2" : "mt-0",
            isFeatured ? "text-lg sm:text-xl lg:text-2xl" : "text-xl sm:text-2xl"
          )}
        >
          <Link href={`/resources/${slug}`}>
            <span className="sr-only">{category}: </span>
            {title}
          </Link>
        </h2>
        <p className="mt-2.5 text-sm text-muted">
          {date}
          {readTime ? ` · ${readTime}` : ""}
        </p>
        {excerpt && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
            {excerpt}
          </p>
        )}
        {readMore && (
          <Link
            href={`/resources/${slug}`}
            className="mt-3 inline-flex text-sm font-semibold text-teal hover:underline"
          >
            {readMore} →
          </Link>
        )}
      </div>
    </article>
  );
}
