import type { CSSProperties } from "react";

export type BoardTheme = "light" | "dark" | "auto";

/** Friendly override keys → CSS custom properties on `.sig-root`. */
const TOKEN_TO_VAR: Record<string, string> = {
  bg: "--sig-bg",
  background: "--sig-bg",
  surface: "--sig-surface",
  surfaceHover: "--sig-surface-hover",
  border: "--sig-border",
  text: "--sig-text",
  muted: "--sig-muted",
  accent: "--sig-accent",
  accentSoft: "--sig-accent-soft",
  selection: "--sig-selection",
  danger: "--sig-danger",
  dangerSoft: "--sig-danger-soft",
  radius: "--sig-radius",
  shadow: "--sig-shadow",
  panel: "--sig-panel",
  panelHover: "--sig-panel-hover",
  // also accept CSS-variable style keys
  "--sig-bg": "--sig-bg",
  "--sig-surface": "--sig-surface",
  "--sig-surface-hover": "--sig-surface-hover",
  "--sig-border": "--sig-border",
  "--sig-text": "--sig-text",
  "--sig-muted": "--sig-muted",
  "--sig-accent": "--sig-accent",
  "--sig-accent-soft": "--sig-accent-soft",
  "--sig-selection": "--sig-selection",
  "--sig-danger": "--sig-danger",
  "--sig-danger-soft": "--sig-danger-soft",
  "--sig-radius": "--sig-radius",
  "--sig-shadow": "--sig-shadow",
  "--sig-panel": "--sig-panel",
  "--sig-panel-hover": "--sig-panel-hover",
};

function toCamel(key: string): string {
  return key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

function safeTokenValue(value: unknown): string | null {
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (typeof value !== "string") return null;
  const v = value.trim();
  if (!v || v.length > 160) return null;
  const lower = v.toLowerCase();
  if (
    lower.includes("url(") ||
    lower.includes("expression(") ||
    lower.includes("javascript:") ||
    lower.includes("@import") ||
    lower.includes("</")
  ) {
    return null;
  }
  return v;
}

export function normalizeTheme(raw: unknown): BoardTheme {
  if (raw === "dark" || raw === "light" || raw === "auto") return raw;
  return "light";
}

export function resolveTheme(theme: BoardTheme): "light" | "dark" {
  if (theme === "light" || theme === "dark") return theme;
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

/** Sanitize host theme_overrides into CSS variable map. */
export function themeOverridesToCssVars(
  overrides: Record<string, unknown> | null | undefined,
): CSSProperties {
  if (!overrides || typeof overrides !== "object") return {};
  const vars: Record<string, string> = {};
  for (const [key, value] of Object.entries(overrides)) {
    const safe = safeTokenValue(value);
    if (safe == null) continue;
    const direct = TOKEN_TO_VAR[key] || TOKEN_TO_VAR[toCamel(key)];
    if (direct) {
      vars[direct] = safe;
      continue;
    }
    if (key.startsWith("--sig-")) {
      vars[key] = safe;
    }
  }
  return vars as CSSProperties;
}
