"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

export function SetHtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale === "zh" ? "zh-CN" : "en";
    root.classList.toggle("locale-zh", locale === "zh");
  }, [locale]);

  return null;
}
