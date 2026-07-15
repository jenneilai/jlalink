import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-md text-muted">{t("description")}</p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/">{t("backHome")}</Link>
      </Button>
    </div>
  );
}
