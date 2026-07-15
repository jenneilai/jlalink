"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

const HEADER_OFFSET = 80;

function scrollToHashTarget(behavior: ScrollBehavior = "smooth") {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const target = document.getElementById(hash);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

/** Browser scroll restore + anchor jumps with fixed header offset */
export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  useEffect(() => {
    const run = () => {
      requestAnimationFrame(() => scrollToHashTarget("smooth"));
    };

    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, [pathname]);

  return null;
}
