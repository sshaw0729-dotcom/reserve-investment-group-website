"use client";

import { useEffect, RefObject } from "react";

/**
 * Wires the light/dark toggle button (#theme-toggle / #theme-icon) that's
 * baked into the shared footer markup on every funnel page.
 *
 * IMPORTANT: this sets `data-theme` on the page's own root element
 * (rootRef.current), NOT on document.documentElement. That keeps each
 * funnel page's theme fully self-contained so it can never fight with
 * (or be fought by) the main site's own dark-mode implementation, even
 * if the main site also happens to use a `data-theme` attribute.
 */
export function useFunnelTheme(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const SUN_PATH =
      '<path d="M13.5 9.8A6 6 0 0 1 6.2 2.5a6 6 0 1 0 7.3 7.3z" fill="currentColor"/>';
    const MOON_PATH =
      '<circle cx="8" cy="8" r="3.2"/><path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3.1 3.1l1.1 1.1M11.8 11.8l1.1 1.1M3.1 12.9l1.1-1.1M11.8 4.2l1.1-1.1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" fill="none"/>';

    function apply(theme: "light" | "dark") {
      if (!root) return;
      root.setAttribute("data-theme", theme);
      const icon = root.querySelector("#theme-icon");
      if (icon) icon.innerHTML = theme === "dark" ? MOON_PATH : SUN_PATH;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let current: "light" | "dark" = prefersDark ? "dark" : "light";
    apply(current);

    const toggle = root.querySelector("#theme-toggle");
    const onClick = () => {
      current = current === "dark" ? "light" : "dark";
      apply(current);
    };
    toggle?.addEventListener("click", onClick);
    return () => toggle?.removeEventListener("click", onClick);
  }, [rootRef]);
}
