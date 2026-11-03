import type { CSSProperties } from "react";

/** Allow-listed CSS properties for host-provided text / label styles. */
const ALLOWED = new Set([
  "color",
  "background",
  "backgroundColor",
  "fontSize",
  "fontWeight",
  "fontStyle",
  "fontFamily",
  "lineHeight",
  "letterSpacing",
  "textAlign",
  "textDecoration",
  "textTransform",
  "opacity",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "border",
  "borderRadius",
  "borderColor",
  "borderWidth",
  "borderStyle",
  "boxShadow",
  "whiteSpace",
  "overflow",
  "textOverflow",
  "maxWidth",
  "width",
  "display",
  "alignSelf",
]);

function toCamel(prop: string): string {
  return prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

function safeValue(value: unknown): string | number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return null;
  const v = value.trim();
  if (!v || v.length > 120) return null;
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

/** Sanitize a host style dict into a React CSSProperties object. */
export function sanitizeStyle(raw: unknown): CSSProperties {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const out: Record<string, string | number> = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    const camel = toCamel(key);
    if (!ALLOWED.has(camel)) continue;
    const safe = safeValue(value);
    if (safe == null) continue;
    out[camel] = safe;
  }
  return out as CSSProperties;
}
