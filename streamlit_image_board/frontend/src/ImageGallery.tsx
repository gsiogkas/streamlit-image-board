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
import { buttonStyleToCssVars } from "./styleSanitize";
import { resolveTheme } from "./theme";
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
    | "action_nonce"
    | "layout_columns"
    | "layout_rows"
    | "page_index",
  value: string[] | string | number | null,
) => void;

function LayoutStepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="sig-layout-stepper" role="group" aria-label={label}>
      <span className="sig-layout-label">{label}</span>
      <button
        type="button"
        className="sig-btn sig-btn-sm"
        disabled={value <= min}
        aria-label={`Decrease ${label}`}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        −
      </button>
      <span className="sig-layout-value" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="sig-btn sig-btn-sm"
        disabled={value >= max}
        aria-label={`Increase ${label}`}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </button>
    </div>
  );
}

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
  const sizeClass = button.size !== "md" ? `sig-btn-${button.size}` : "";
  return (
    <button
      type="button"
      className={`sig-btn sig-btn-${button.variant} ${sizeClass} ${className}`.trim()}
      style={button.style}
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

  const [columns, setColumns] = useState(() => data.columns);
  const [rows, setRows] = useState(() =>
    data.rows > 0 ? data.rows : data.show_layout_controls ? 2 : 0,
  );

  useEffect(() => {
    setColumns(data.columns);
  }, [data.columns]);

  useEffect(() => {
    if (data.rows > 0) setRows(data.rows);
    else if (!data.show_layout_controls) setRows(0);
  }, [data.rows, data.show_layout_controls]);

  const pushLayout = useCallback(
    (nextCols: number, nextRows: number) => {
      setStateValue("layout_columns", nextCols);
      setStateValue("layout_rows", nextRows > 0 ? nextRows : null);
    },
    [setStateValue],
  );

  useEffect(() => {
    pushLayout(columns, rows);
  }, [columns, rows, pushLayout]);

  const effectiveColumns = columns;
  const hostPaged = data.total_count >= 0;
  const pageSize = useMemo(() => {
    if (rows > 0) return Math.max(1, effectiveColumns * rows);
    if (data.page_size > 0) return data.page_size;
    return 0;
  }, [data.page_size, effectiveColumns, rows]);

  const catalogSize = hostPaged ? data.total_count : data.items.length;
  const pageCount = pageSize
    ? Math.max(1, Math.ceil(Math.max(0, catalogSize) / pageSize) || 1)
    : 1;
  const [page, setPage] = useState(() =>
    Math.min(Math.max(0, data.page_index || 0), Math.max(0, pageCount - 1)),
  );

  const pushPage = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(0, next), Math.max(0, pageCount - 1));
      setPage(clamped);
      if (hostPaged) setStateValue("page_index", clamped);
    },
    [hostPaged, pageCount, setStateValue],
  );

  useEffect(() => {
    if (hostPaged) {
      const hostPage = Math.min(
        Math.max(0, data.page_index || 0),
        Math.max(0, pageCount - 1),
      );
      setPage(hostPage);
      return;
    }
    setPage((prev) => Math.min(Math.max(0, prev), pageCount - 1));
  }, [hostPaged, data.page_index, pageCount, itemIdsKey]);

  const pageItems = useMemo(() => {
    // Host already sliced when total_count is set.
    if (!pageSize || hostPaged) return data.items;
    const start = page * pageSize;
    return data.items.slice(start, start + pageSize);
  }, [data.items, hostPaged, page, pageSize]);

  const onColumnsChange = useCallback(
    (next: number) => {
      setColumns(next);
      pushLayout(next, rows);
      pushPage(0);
    },
    [pushLayout, pushPage, rows],
  );

  const onRowsChange = useCallback(
    (next: number) => {
      setRows(next);
      pushLayout(columns, next);
      pushPage(0);
    },
    [columns, pushLayout, pushPage],
  );

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
    const next = orderSelected(data.selected_ids, itemIds);
    setSelected(next);
    // Align Streamlit component return value with host so chrome-only /
    // view flips don't resurrect ids cleared by the table.
    setStateValue("selected_ids", next);
    setStateValue("selected_csv", next.join(","));
  }, [hostSelectedKey, data.selected_ids, itemIds, setStateValue]);

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

  const goFirst = useCallback(() => pushPage(0), [pushPage]);
  const goPrev = useCallback(() => pushPage(page - 1), [page, pushPage]);
  const goNext = useCallback(() => pushPage(page + 1), [page, pushPage]);
  const goLast = useCallback(
    () => pushPage(Math.max(0, pageCount - 1)),
    [pageCount, pushPage],
  );

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() =>
    resolveTheme(data.theme),
  );

  useEffect(() => {
    setResolvedTheme(resolveTheme(data.theme));
    if (data.theme !== "auto" || typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setResolvedTheme(resolveTheme("auto"));
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [data.theme]);

  const rootStyle: CSSProperties = {
    ...data.theme_overrides,
    ...(data.selection_color
      ? {
          ["--sig-selection" as string]: data.selection_color,
          ["--sig-accent" as string]: data.selection_color,
        }
      : {}),
    ...buttonStyleToCssVars(data.button_style),
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`,
    gap: data.gap,
    width: "100%",
  };

  const paging =
    pageSize > 0 && (hostPaged ? catalogSize > 0 : data.items.length > 0);
  const pagerOnTop = data.pager_position !== "bottom";
  const rangeStart = catalogSize === 0 ? 0 : page * pageSize + 1;
  const rangeEnd = Math.min(catalogSize, (page + 1) * pageSize);
  const pageLabel =
    catalogSize === 0 ? "Page 0 of 0" : `Page ${page + 1} of ${pageCount}`;

  const pager = paging ? (
    <div className="sig-pager" role="navigation" aria-label="Board pages">
      <button
        type="button"
        className="sig-btn"
        disabled={page <= 0}
        onClick={goFirst}
        aria-label="First page"
        title="First page"
      >
        First
      </button>
      <button
        type="button"
        className="sig-btn"
        disabled={page <= 0}
        onClick={goPrev}
        aria-label="Previous page"
        title="Previous page"
      >
        Prev
      </button>
      <span className="sig-pager-label" aria-live="polite">
        {pageLabel}
        <span className="sig-pager-range">
          {" "}
          · {rangeStart}–{rangeEnd} of {catalogSize}
        </span>
      </span>
      <button
        type="button"
        className="sig-btn"
        disabled={page >= pageCount - 1}
        onClick={goNext}
        aria-label="Next page"
        title="Next page"
      >
        Next
      </button>
      <button
        type="button"
        className="sig-btn"
        disabled={page >= pageCount - 1}
        onClick={goLast}
        aria-label="Last page"
        title="Last page"
      >
        Last
      </button>
    </div>
  ) : null;

  const showToolbar =
    (data.show_items &&
      (data.show_select_all || data.buttons.length > 0 || data.selectable)) ||
    data.show_layout_controls;

  return (
    <div
      className={`sig-root sig-theme-${resolvedTheme}`}
      data-theme={resolvedTheme}
      style={rootStyle}
    >
      {showToolbar ? (
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
          ) : !data.show_items && data.show_selection_stats ? (
            // Chrome-only host mode: still announce global selection.
            <span
              className="sig-count"
              title="Selected file count (host checklist)"
            >
              {selectionStatsLabel(selected, data.items, 0)}
            </span>
          ) : data.show_items ? (
            <span className="sig-count">{data.items.length} images</span>
          ) : null}

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

          {data.show_layout_controls ? (
            <div className="sig-layout-controls">
              <LayoutStepper
                label="Columns"
                value={effectiveColumns}
                min={1}
                max={8}
                onChange={onColumnsChange}
              />
              <LayoutStepper
                label="Rows"
                value={rows > 0 ? rows : 2}
                min={1}
                max={8}
                onChange={(next) => {
                  if (rows <= 0) setRows(next);
                  onRowsChange(next);
                }}
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {pagerOnTop ? pager : null}

      {data.show_items ? (
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
      ) : null}

      {!pagerOnTop ? pager : null}
    </div>
  );
}
