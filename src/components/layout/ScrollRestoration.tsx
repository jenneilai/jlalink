"use client";

import { useEffect } from "react";

/** Ensure browser restores scroll position when using history back */
export function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  return null;
}
