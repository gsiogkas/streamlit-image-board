import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
} from "react";

import { selectedIdsKey } from "./props";
import type {
  GalleryButton,
  GalleryDataShape,
  GalleryItem,
  GalleryText,
  ImageClickMode,
} from "./types";

export type GallerySetStateValue = (
  name:
    | "selected_ids"
    | "selected_csv"
    | "clicked_button"
    | "clicked_item"
    | "action_nonce",
  value: string[] | string | number | null,
) => void;

type Props = GalleryDataShape & {
  setStateValue: GallerySetStateValue;
};

function ActionButton({
  button,
  onClick,
  className = "",
}: {
  button: GalleryButton;
  onClick: (id: string) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`sig-btn sig-btn-${button.variant} ${className}`.trim()}
      disabled={button.disabled}
      onClick={(e) => {
        e.stopPropagation();
        onClick(button.id);
      }}
    >
      {button.label}
    </button>
  );
}

function TextChip({
  text,
  onClick,
}: {
  text: GalleryText;
  onClick: (id: string) => void;
}) {
  const className = [
    "sig-text",
    text.variant !== "default" ? `sig-text-${text.variant}` : "",
    text.clickable ? "sig-text-clickable" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (!text.clickable) {
    return (
      <span className={className} style={text.style} title={text.text}>
        {text.text}
      </span>
    );
  }

  return (
    <span
      className={className}
      style={text.style}
      title={text.text}
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        onClick(text.id);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          onClick(text.id);
        }
      }}
    >
      {text.text}
    </span>
  );
}

function resolveImageClick(
  item: GalleryItem,
  boardMode: ImageClickMode,
): ImageClickMode {
  return item.image_click ?? boardMode;
}

function GalleryCard({
  item,
  selected,
  selectable,
  showCheckboxes,
  showHoverText,
  showCardInfo,
  thumbnailFit,
  cardStyle,
  imageClick,
  openInNewTab,
  onToggle,
  onOpen,
  onButton,
}: {
  item: GalleryItem;
  selected: boolean;
  selectable: boolean;
  showCheckboxes: boolean;
  showHoverText: boolean;
  showCardInfo: boolean;
  thumbnailFit: "cover" | "contain";
  cardStyle: CSSProperties;
  imageClick: ImageClickMode;
  openInNewTab: boolean;
  onToggle: (id: string) => void;
  onOpen: (itemId: string, url: string) => void;
  onButton: (buttonId: string, itemId: string) => void;
}) {
  const clickMode = resolveImageClick(item, imageClick);
  const openUrl = item.open_url || item.src;

  const handleImageAction = () => {
    if (item.disabled) return;
    if (clickMode === "none") return;
    if (clickMode === "select") {
      if (selectable) onToggle(item.id);
      return;
    }
    // open
    if (openUrl && openInNewTab && typeof window !== "undefined") {
      window.open(openUrl, "_blank", "noopener,noreferrer");
    }
    onOpen(item.id, openUrl);
  };

  const onImageClick = (e: MouseEvent) => {
    if (item.disabled) return;
    const target = e.target as HTMLElement;
    if (target.closest("input, button")) return;
    e.stopPropagation();
    handleImageAction();
  };

  const onCardKeyDown = (e: KeyboardEvent) => {
    if (item.disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleImageAction();
    }
  };

  const mergedCardStyle: CSSProperties = {
    ...cardStyle,
    ...item.card_style,
  };

  const thumbInteractive = !item.disabled && clickMode !== "none";
  const ariaLabel =
    clickMode === "select"
      ? `${selected ? "Deselect" : "Select"} ${item.label}`
      : clickMode === "open"
        ? `Open ${item.label}`
        : item.label;

  return (
    <article
      className={[
        "sig-card",
        selected ? "sig-card-selected" : "",
        item.disabled ? "sig-card-disabled" : "",
        showCardInfo ? "" : "sig-card-image-only",
      ]
        .filter(Boolean)
        .join(" ")}
      style={mergedCardStyle}
      tabIndex={thumbInteractive ? 0 : -1}
      aria-selected={selectable ? selected : undefined}
      aria-disabled={item.disabled || undefined}
      onKeyDown={thumbInteractive ? onCardKeyDown : undefined}
    >
      <div
        className={[
          "sig-thumb-wrap",
          selected ? "sig-thumb-wrap-selected" : "",
          clickMode === "none" ? "sig-thumb-wrap-static" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        role={thumbInteractive ? "button" : undefined}
        aria-label={thumbInteractive ? ariaLabel : item.label}
        onClick={thumbInteractive ? onImageClick : undefined}
      >
        {selectable && showCheckboxes && (
          <input
            className="sig-check"
            type="checkbox"
            checked={selected}
            disabled={item.disabled}
            aria-label={`Select ${item.label}`}
            onChange={() => onToggle(item.id)}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <img
          className="sig-thumb"
          src={item.src}
          alt={item.label}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{ objectFit: thumbnailFit }}
        />
        {showHoverText && item.hover_text ? (
          <div className="sig-hover-overlay" title={item.hover_text}>
            {item.hover_text}
          </div>
        ) : null}
      </div>
      {showCardInfo ? (
        <>
          <div className="sig-meta">
            <div className="sig-label" title={item.label} style={item.label_style}>
              {item.label}
            </div>
            {item.caption ? (
              <div
                className="sig-caption"
                title={item.caption}
                style={item.caption_style}
              >
                {item.caption}
              </div>
            ) : null}
          </div>
          {item.texts.length > 0 ? (
            <div className="sig-texts">
              {item.texts.map((t) => (
                <TextChip
                  key={t.id}
                  text={t}
                  onClick={(textId) => onButton(textId, item.id)}
                />
              ))}
            </div>
          ) : null}
          {item.buttons.length > 0 ? (
            <div className="sig-card-actions">
              {item.buttons.map((b) => (
                <ActionButton
                  key={b.id}
                  button={{ ...b, disabled: b.disabled || item.disabled }}
                  onClick={(buttonId) => onButton(buttonId, item.id)}
                />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </article>
  );
}

function orderSelected(ids: string[], itemIds: string[]): string[] {
  const set = new Set(ids.map(String));
  const ordered = itemIds.filter((id) => set.has(id));
  for (const id of set) {
    if (!ordered.includes(id)) ordered.push(id);
  }
  return ordered;
}

function formatBytes(numBytes: number): string {
  if (!Number.isFinite(numBytes) || numBytes < 0) return "";
  const units = ["B", "KB", "MB", "GB", "TB"] as const;
  let value = numBytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  if (unit === 0) return `${Math.round(value)} B`;
  return `${value.toFixed(1)} ${units[unit]}`;
}

function selectionStatsLabel(
  selectedIds: string[],
  items: GalleryItem[],
  totalEnabled: number,
): string {
  const byId = new Map(items.map((item) => [item.id, item]));
  let sized = 0;
  let totalBytes = 0;
  for (const id of selectedIds) {
    const item = byId.get(id);
    if (!item || item.size_bytes == null) continue;
    sized += 1;
    totalBytes += item.size_bytes;
  }
  const count = selectedIds.length;
  let label = `${count} selected`;
  if (totalEnabled) label = `${label} / ${totalEnabled}`;
  if (sized > 0) label = `${label} · ${formatBytes(totalBytes)}`;
  return label;
}

export default function ImageGallery({
  setStateValue,
  ...data
}: Props) {
  const hostSelectedKey = selectedIdsKey(data.selected_ids);
  const [selected, setSelected] = useState<string[]>(() => data.selected_ids);
  const actionNonce = useRef(0);
  const lastPushedSelection = useRef(hostSelectedKey);
  // Ignore stale Streamlit props until the host echoes our last push.
  const awaitingHostEcho = useRef(false);

  const itemIds = useMemo(() => data.items.map((i) => i.id), [data.items]);
  const itemIdsKey = useMemo(() => itemIds.join("\0"), [itemIds]);

  const pageSize = data.page_size > 0 ? data.page_size : 0;
  const pageCount = pageSize
    ? Math.max(1, Math.ceil(data.items.length / pageSize))
    : 1;
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((prev) => Math.min(Math.max(0, prev), pageCount - 1));
  }, [pageCount, itemIdsKey]);

  const pageItems = useMemo(() => {
    if (!pageSize) return data.items;
    const start = page * pageSize;
    return data.items.slice(start, start + pageSize);
  }, [data.items, page, pageSize]);

  useEffect(() => {
    if (hostSelectedKey === lastPushedSelection.current) {
      awaitingHostEcho.current = false;
      return;
    }
    if (awaitingHostEcho.current) {
      // Host still sending the previous selection — keep local UI snappy.
      return;
    }
    lastPushedSelection.current = hostSelectedKey;
    setSelected(orderSelected(data.selected_ids, itemIds));
  }, [hostSelectedKey, data.selected_ids, itemIds]);

  const pushSelection = useCallback(
    (nextRaw: string[]) => {
      const next = orderSelected(nextRaw, itemIds);
      const key = selectedIdsKey(next);
      lastPushedSelection.current = key;
      awaitingHostEcho.current = true;
      setSelected(next);
      // Same list for checkbox + image click — easy to parse in Python.
      setStateValue("selected_ids", next);
      setStateValue("selected_csv", next.join(","));
    },
    [itemIds, setStateValue],
  );

  const emitAction = useCallback(
    (buttonId: string | null, itemId: string | null) => {
      actionNonce.current += 1;
      setStateValue("clicked_button", buttonId);
      setStateValue("clicked_item", itemId);
      setStateValue("action_nonce", actionNonce.current);
    },
    [setStateValue],
  );

  const enabledIds = useMemo(
    () => data.items.filter((i) => !i.disabled).map((i) => i.id),
    [data.items],
  );

  const toggle = useCallback(
    (id: string) => {
      if (!data.selectable) return;
      const item = data.items.find((i) => i.id === id);
      if (!item || item.disabled) return;

      let next: string[];
      if (data.multi_select) {
        const set = new Set(selected);
        if (set.has(id)) set.delete(id);
        else set.add(id);
        next = [...set];
      } else {
        next = selected.includes(id) ? [] : [id];
      }
      pushSelection(next);
    },
    [data.items, data.multi_select, data.selectable, pushSelection, selected],
  );

  const selectAll = useCallback(() => {
    pushSelection([...enabledIds]);
  }, [enabledIds, pushSelection]);

  const clearAll = useCallback(() => {
    pushSelection([]);
  }, [pushSelection]);

  const onToolbarButton = useCallback(
    (buttonId: string) => emitAction(buttonId, null),
    [emitAction],
  );

  const onCardButton = useCallback(
    (buttonId: string, itemId: string) => emitAction(buttonId, itemId),
    [emitAction],
  );

  const onOpen = useCallback(
    (itemId: string, _url: string) => emitAction("open", itemId),
    [emitAction],
  );

  const enabledSelectedCount = enabledIds.filter((id) =>
    selected.includes(id),
  ).length;
  const allSelected =
    enabledIds.length > 0 && enabledSelectedCount === enabledIds.length;
  const someSelected = enabledSelectedCount > 0 && !allSelected;
  const noneSelected = enabledSelectedCount === 0;

  const toggleSelectAll = useCallback(() => {
    // Partial or empty → select all. Fully selected → deselect all.
    // Never rely on the browser's native checkbox flip (indeterminate is flaky).
    // Checklist is global across pages when paging is enabled.
    if (allSelected) clearAll();
    else selectAll();
  }, [allSelected, clearAll, selectAll]);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPage((p) => Math.min(pageCount - 1, p + 1));
  }, [pageCount]);

  const rootStyle: CSSProperties = {
    ["--sig-selection" as string]: data.selection_color,
    ["--sig-accent" as string]: data.selection_color,
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${data.columns}, minmax(0, 1fr))`,
    gap: data.gap,
    width: "100%",
  };

  const paging = pageSize > 0 && data.items.length > 0;
  const pageLabel =
    data.items.length === 0
      ? "Page 0 of 0"
      : `Page ${page + 1} of ${pageCount}`;

  return (
    <div className="sig-root" style={rootStyle}>
      {(data.show_select_all || data.buttons.length > 0 || data.selectable) && (
        <div className="sig-toolbar">
          {data.selectable ? (
            <span
              className="sig-count"
              title={
                data.show_selection_stats
                  ? "Selected file count and total size (all pages)"
                  : undefined
              }
            >
              {data.show_selection_stats
                ? selectionStatsLabel(selected, data.items, enabledIds.length)
                : `${enabledSelectedCount} selected${
                    enabledIds.length ? ` / ${enabledIds.length}` : ""
                  }`}
            </span>
          ) : (
            <span className="sig-count">{data.items.length} images</span>
          )}

          {data.show_select_all ? (
            <div className="sig-select-all">
              <button
                type="button"
                className={[
                  "sig-select-all-master",
                  allSelected ? "sig-select-all-master-on" : "",
                  someSelected ? "sig-select-all-master-partial" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                disabled={enabledIds.length === 0}
                aria-pressed={allSelected}
                aria-label={allSelected ? "Deselect all" : "Select all"}
                title={
                  allSelected
                    ? "Deselect all pages"
                    : someSelected
                      ? "Select remaining (all pages)"
                      : "Select all (all pages)"
                }
                onClick={toggleSelectAll}
              >
                <span
                  className="sig-select-all-box"
                  aria-hidden="true"
                  data-state={
                    allSelected ? "all" : someSelected ? "some" : "none"
                  }
                />
                <span>All</span>
              </button>
              <button
                type="button"
                className="sig-btn"
                disabled={allSelected || enabledIds.length === 0}
                onClick={selectAll}
                title="Select every item across all pages"
              >
                Select all
              </button>
              <button
                type="button"
                className="sig-btn"
                disabled={noneSelected}
                onClick={clearAll}
                title="Clear selection on all pages"
              >
                Deselect all
              </button>
            </div>
          ) : null}

          {data.buttons.map((b) => (
            <ActionButton key={b.id} button={b} onClick={onToolbarButton} />
          ))}
        </div>
      )}

      <div
        className={paging ? "sig-page" : "sig-scroll"}
        style={paging ? undefined : { maxHeight: data.max_height }}
      >
        {data.items.length === 0 ? (
          <div className="sig-empty">{data.empty_message}</div>
        ) : (
          <div className="sig-grid" style={gridStyle}>
            {pageItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                selected={selected.includes(item.id)}
                selectable={data.selectable}
                showCheckboxes={data.show_checkboxes}
                showHoverText={data.show_hover_text}
                showCardInfo={data.show_card_info}
                thumbnailFit={data.thumbnail_fit}
                cardStyle={data.card_style}
                imageClick={data.image_click}
                openInNewTab={data.open_in_new_tab}
                onToggle={toggle}
                onOpen={onOpen}
                onButton={onCardButton}
              />
            ))}
          </div>
        )}
      </div>

      {paging ? (
        <div className="sig-pager" role="navigation" aria-label="Board pages">
          <button
            type="button"
            className="sig-btn"
            disabled={page <= 0}
            onClick={goPrev}
            aria-label="Previous page"
          >
            Prev
          </button>
          <span className="sig-pager-label" aria-live="polite">
            {pageLabel}
            <span className="sig-pager-range">
              {" "}
              · {page * pageSize + 1}–
              {Math.min(data.items.length, (page + 1) * pageSize)} of{" "}
              {data.items.length}
            </span>
          </span>
          <button
            type="button"
            className="sig-btn"
            disabled={page >= pageCount - 1}
            onClick={goNext}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
