import type {
  GalleryButton,
  GalleryDataShape,
  GalleryItem,
  GalleryText,
  ImageClickMode,
} from "./types";
import { sanitizeStyle } from "./styleSanitize";

function asImageClick(raw: unknown): ImageClickMode | null {
  if (raw === "select" || raw === "open" || raw === "none") return raw;
  return null;
}

function asButton(raw: unknown): GalleryButton | null {
  if (!raw || typeof raw !== "object") return null;
  const b = raw as Record<string, unknown>;
  if (typeof b.id !== "string" || !b.id) return null;
  const variant =
    b.variant === "primary" || b.variant === "danger" || b.variant === "ghost"
      ? b.variant
      : "default";
  const size = b.size === "sm" || b.size === "lg" ? b.size : "md";
  return {
    id: b.id,
    label: typeof b.label === "string" ? b.label : b.id,
    variant,
    size,
    style: sanitizeStyle(b.style),
    disabled: Boolean(b.disabled),
  };
}

function asText(raw: unknown): GalleryText | null {
  if (!raw || typeof raw !== "object") return null;
  const t = raw as Record<string, unknown>;
  const text =
    typeof t.text === "string"
      ? t.text
      : typeof t.label === "string"
        ? t.label
        : null;
  if (text == null) return null;
  const id =
    typeof t.id === "string" && t.id
      ? t.id
      : `text-${text.slice(0, 24)}`;
  const variant =
    t.variant === "muted" ||
    t.variant === "accent" ||
    t.variant === "danger" ||
    t.variant === "badge"
      ? t.variant
      : "default";
  return {
    id,
    text,
    style: sanitizeStyle(t.style),
    variant,
    clickable: Boolean(t.clickable),
  };
}

function asItem(raw: unknown): GalleryItem | null {
  if (!raw || typeof raw !== "object") return null;
  const item = raw as Record<string, unknown>;
  if (typeof item.id !== "string" || typeof item.src !== "string") return null;
  const buttons = Array.isArray(item.buttons)
    ? item.buttons.map(asButton).filter((b): b is GalleryButton => b != null)
    : [];
  const texts = Array.isArray(item.texts)
    ? item.texts.map(asText).filter((t): t is GalleryText => t != null)
    : [];
  const label = typeof item.label === "string" ? item.label : item.id;
  const hoverRaw = item.hover_text ?? item.hoverText;
  const cardStyleRaw =
    item.card_style ?? item.cardStyle ?? item.style ?? null;
  const card_style = {
    ...sanitizeStyle(
      typeof item.background === "string" || typeof item.color === "string"
        ? {
            ...(typeof item.background === "string"
              ? { background: item.background }
              : {}),
            ...(typeof item.color === "string" ? { color: item.color } : {}),
            ...(typeof item.font_family === "string" ||
            typeof item.fontFamily === "string"
              ? {
                  fontFamily:
                    (item.font_family as string) ||
                    (item.fontFamily as string),
                }
              : {}),
          }
        : {},
    ),
    ...sanitizeStyle(cardStyleRaw),
  };
  const openRaw = item.open_url ?? item.openUrl ?? item.href ?? item.link;
  const sizeRaw =
    item.size_bytes ?? item.sizeBytes ?? item.size ?? item.bytes ?? item.filesize;
  let size_bytes: number | null = null;
  if (typeof sizeRaw === "number" && Number.isFinite(sizeRaw) && sizeRaw >= 0) {
    size_bytes = Math.floor(sizeRaw);
  } else if (typeof sizeRaw === "string" && sizeRaw.trim()) {
    const n = Number(sizeRaw);
    if (Number.isFinite(n) && n >= 0) size_bytes = Math.floor(n);
  }
  return {
    id: item.id,
    src: item.src,
    label,
    label_style: sanitizeStyle(item.label_style ?? item.labelStyle),
    caption: typeof item.caption === "string" ? item.caption : "",
    caption_style: sanitizeStyle(item.caption_style ?? item.captionStyle),
    hover_text:
      typeof hoverRaw === "string" && hoverRaw.length > 0 ? hoverRaw : label,
    card_style,
    image_click: asImageClick(item.image_click ?? item.imageClick),
    open_url: typeof openRaw === "string" ? openRaw : "",
    size_bytes,
    disabled: Boolean(item.disabled),
    buttons,
    texts,
  };
}

export function normalizeGalleryProps(
  props: Partial<GalleryDataShape> | null | undefined,
): GalleryDataShape {
  const p = props ?? {};
  const items = Array.isArray(p.items)
    ? p.items.map(asItem).filter((i): i is GalleryItem => i != null)
    : [];
  const selected_ids = Array.isArray(p.selected_ids)
    ? p.selected_ids.map(String)
    : [];
  const buttons = Array.isArray(p.buttons)
    ? p.buttons.map(asButton).filter((b): b is GalleryButton => b != null)
    : [];

  const columnsRaw = Number(p.columns);
  const columns = Number.isFinite(columnsRaw)
    ? Math.max(1, Math.min(columnsRaw, 8))
    : 4;

  const selectionColor =
    typeof p.selection_color === "string" && p.selection_color.trim()
      ? p.selection_color.trim()
      : "#0f766e";

  const imageClick =
    asImageClick(p.image_click) ??
    (p.selectable === false ? "open" : "select");

  return {
    items,
    columns,
    gap: Math.max(0, Number(p.gap) || 0),
    selectable: p.selectable !== false,
    show_checkboxes: p.show_checkboxes !== false,
    image_click: imageClick,
    open_in_new_tab: p.open_in_new_tab !== false,
    show_hover_text: p.show_hover_text !== false,
    show_card_info: p.show_card_info !== false,
    show_selection_stats: p.show_selection_stats !== false,
    selection_color: selectionColor,
    card_style: sanitizeStyle(p.card_style),
    button_style: sanitizeStyle(p.button_style),
    selected_ids,
    multi_select: p.multi_select !== false,
    show_select_all: Boolean(p.show_select_all),
    buttons,
    max_height: Math.max(120, Number(p.max_height) || 640),
    page_size: (() => {
      const raw = Number(p.page_size);
      if (!Number.isFinite(raw) || raw <= 0) return 0;
      return Math.max(1, Math.min(Math.floor(raw), 200));
    })(),
    pager_position: p.pager_position === "bottom" ? "bottom" : "top",
    thumbnail_fit: p.thumbnail_fit === "contain" ? "contain" : "cover",
    empty_message:
      typeof p.empty_message === "string" ? p.empty_message : "No images",
  };
}

export function selectedIdsKey(ids: string[]): string {
  return [...ids].sort().join("\0");
}
