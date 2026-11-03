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
    if (allSelected) clearAll();
    else selectAll();
  }, [allSelected, clearAll, selectAll]);

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

  return (
    <div className="sig-root" style={rootStyle}>
      {(data.show_select_all || data.buttons.length > 0 || data.selectable) && (
        <div className="sig-toolbar">
          {data.selectable ? (
            <span className="sig-count">
              {enabledSelectedCount} selected
              {enabledIds.length ? ` / ${enabledIds.length}` : ""}
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
                    ? "Deselect all"
                    : someSelected
                      ? "Select remaining"
                      : "Select all"
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
              >
                Select all
              </button>
              <button
                type="button"
                className="sig-btn"
                disabled={noneSelected}
                onClick={clearAll}
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

      <div className="sig-scroll" style={{ maxHeight: data.max_height }}>
        {data.items.length === 0 ? (
          <div className="sig-empty">{data.empty_message}</div>
        ) : (
          <div className="sig-grid" style={gridStyle}>
            {data.items.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                selected={selected.includes(item.id)}
                selectable={data.selectable}
                showCheckboxes={data.show_checkboxes}
                showHoverText={data.show_hover_text}
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
    </div>
  );
}
