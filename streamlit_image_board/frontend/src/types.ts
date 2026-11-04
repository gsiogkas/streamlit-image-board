import type { CSSProperties } from "react";

export type ButtonVariant = "default" | "primary" | "danger" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

/** What happens when the user clicks the thumbnail (not the checkbox). */
export type ImageClickMode = "select" | "open" | "none";

export type GalleryButton = {
  id: string;
  label: string;
  variant: ButtonVariant;
  size: ButtonSize;
  /** Optional per-button inline styles (sanitized). */
  style: CSSProperties;
  disabled: boolean;
};

/** Non-button text chip / line with optional inline styles. */
export type GalleryText = {
  id: string;
  text: string;
  /** CSSProperties-like map from the host (sanitized on the way in). */
  style: CSSProperties;
  /** Visual preset: muted | accent | danger | badge | default */
  variant: "default" | "muted" | "accent" | "danger" | "badge";
  /** When true, clicking the text emits an action like a button. */
  clickable: boolean;
};

export type GalleryItem = {
  id: string;
  src: string;
  label: string;
  label_style: CSSProperties;
  caption: string;
  caption_style: CSSProperties;
  /** Overlay text shown when hovering the image (falls back to label). */
  hover_text: string;
  /** Per-card chrome: background, color, fontFamily, etc. */
  card_style: CSSProperties;
  /** Optional override for board-level image_click. */
  image_click: ImageClickMode | null;
  /** URL to open when image_click is "open" (falls back to src). */
  open_url: string;
  /** Optional file size in bytes (for selection size counter). */
  size_bytes: number | null;
  disabled: boolean;
  buttons: GalleryButton[];
  texts: GalleryText[];
};

export type GalleryDataShape = {
  items: GalleryItem[];
  columns: number;
  gap: number;
  selectable: boolean;
  /** Show checkboxes in addition to selection UI. */
  show_checkboxes: boolean;
  /** Default thumbnail click behavior (overridable per item). */
  image_click: ImageClickMode;
  /** When opening, use window.open(..., "_blank"). */
  open_in_new_tab: boolean;
  /** Show hover text overlay on images. */
  show_hover_text: boolean;
  /**
   * Show label / caption / text chips / per-card buttons under each thumbnail.
   * When false, cards are image-only (checkboxes + hover still apply).
   */
  show_card_info: boolean;
  /** Show selected file count + size total in the toolbar. */
  show_selection_stats: boolean;
  /** CSS color for the selected image frame. */
  selection_color: string;
  /** Default card chrome applied under each item's card_style. */
  card_style: CSSProperties;
  /**
   * Board-wide button theme (radius, colors, padding, primary/danger accents).
   * Applied as CSS variables; per-button ``style`` still overrides.
   */
  button_style: CSSProperties;
  selected_ids: string[];
  multi_select: boolean;
  show_select_all: boolean;
  buttons: GalleryButton[];
  max_height: number;
  /**
   * Items per page. `0` disables paging (scroll overflow instead).
   * Selection checklist spans all pages.
   */
  page_size: number;
  /** Where to render First/Prev/Next/Last when paging. */
  pager_position: "top" | "bottom";
  thumbnail_fit: "cover" | "contain";
  empty_message: string;
};

export type GalleryStateShape = {
  selected_ids: string[] | null;
  /** Comma-separated mirror of selected_ids for easy host parsing. */
  selected_csv: string | null;
  clicked_button: string | null;
  clicked_item: string | null;
  action_nonce: number | null;
};
