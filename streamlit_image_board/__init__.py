"""Streamlit Image Board — snappy Components v2 selectable image grid."""

from __future__ import annotations

import base64
import io
from collections.abc import Callable, Sequence
from dataclasses import dataclass, field
from functools import lru_cache
from pathlib import Path
from typing import Any

import streamlit as st
from PIL import Image

from streamlit_image_board.json_config import load_board_config, load_board_items
from streamlit_image_board.selection import (
    aggrid_preselected_rows,
    configure_aggrid_selection,
    filter_rows_by_ids,
    merge_selection_sources,
    normalize_selected_ids,
    selected_ids_from_aggrid,
    selected_ids_from_csv,
    selected_ids_to_csv,
    sync_checklist,
)

_UNSET = object()

BoardItemInput = str | Image.Image | dict[str, Any]
# Back-compat alias
GalleryItemInput = BoardItemInput


@lru_cache(maxsize=1)
def _get_component() -> Callable[..., Any]:
    """Register the CCv2 component on first use (requires Streamlit runtime)."""
    return st.components.v2.component(
        "streamlit-image-board.st_image_board",
        js="index.js",
        html='<div class="react-root"></div>',
    )


@dataclass
class BoardResult:
    """Output of the image board component.

    Attributes
    ----------
    selected_ids:
        Unified selection from checkboxes **and** image clicks — plain
        ``list[str]`` of item ids, ordered like the board items.
    selected_csv:
        Same selection as a comma-separated string (easy to split / log).
    clicked_button:
        Id of the last toolbar / per-item button pressed, or None.
    clicked_item:
        Id of the last card that was activated (click / Enter), or None.
    action_nonce:
        Monotonic counter so Streamlit can detect repeated button presses.
    """

    selected_ids: list[str] = field(default_factory=list)
    selected_csv: str = ""
    clicked_button: str | None = None
    clicked_item: str | None = None
    action_nonce: int = 0

    def as_list(self) -> list[str]:
        """Return selected ids as a plain Python list of strings."""
        return list(self.selected_ids)

    def as_set(self) -> set[str]:
        """Return selected ids as a set of strings."""
        return set(self.selected_ids)

    def to_aggrid_preselected(
        self,
        data: Any,
        *,
        id_column: str = "id",
    ) -> list[int]:
        """Map this checklist to AgGrid ``pre_selected_rows`` indices."""
        from streamlit_image_board.selection import aggrid_preselected_rows

        return aggrid_preselected_rows(data, self.selected_ids, id_column=id_column)


# Back-compat alias
GalleryResult = BoardResult


def _noop() -> None:
    """Required CCv2 on_change stub so default state keys are always present."""


_ALLOWED_STYLE_KEYS = frozenset(
    {
        "color",
        "background",
        "backgroundColor",
        "background-color",
        "fontSize",
        "font-size",
        "fontWeight",
        "font-weight",
        "fontStyle",
        "font-style",
        "fontFamily",
        "font-family",
        "lineHeight",
        "line-height",
        "letterSpacing",
        "letter-spacing",
        "textAlign",
        "text-align",
        "textDecoration",
        "text-decoration",
        "textTransform",
        "text-transform",
        "opacity",
        "padding",
        "paddingTop",
        "padding-top",
        "paddingRight",
        "padding-right",
        "paddingBottom",
        "padding-bottom",
        "paddingLeft",
        "padding-left",
        "margin",
        "marginTop",
        "margin-top",
        "marginRight",
        "margin-right",
        "marginBottom",
        "margin-bottom",
        "marginLeft",
        "margin-left",
        "border",
        "borderRadius",
        "border-radius",
        "borderColor",
        "border-color",
        "borderWidth",
        "border-width",
        "borderStyle",
        "border-style",
        "boxShadow",
        "box-shadow",
        "whiteSpace",
        "white-space",
        "overflow",
        "textOverflow",
        "text-overflow",
        "maxWidth",
        "max-width",
        "width",
        "display",
        "alignSelf",
        "align-self",
    }
)


def _sanitize_style(raw: Any) -> dict[str, Any]:
    if not isinstance(raw, dict):
        return {}
    out: dict[str, Any] = {}
    for key, value in raw.items():
        prop = str(key)
        if prop not in _ALLOWED_STYLE_KEYS:
            continue
        if isinstance(value, (int, float)) and not isinstance(value, bool):
            out[prop] = value
            continue
        if not isinstance(value, str):
            continue
        v = value.strip()
        if not v or len(v) > 120:
            continue
        lower = v.lower()
        if any(bad in lower for bad in ("url(", "expression(", "javascript:", "@import", "</")):
            continue
        out[prop] = v
    return out


def _image_to_data_url(img: Image.Image, *, max_edge: int = 720) -> str:
    work = img.convert("RGB")
    w, h = work.size
    edge = max(w, h)
    if edge > max_edge:
        scale = max_edge / float(edge)
        work = work.resize(
            (max(1, int(w * scale)), max(1, int(h * scale))),
            Image.Resampling.LANCZOS,
        )
    buf = io.BytesIO()
    work.save(buf, format="JPEG", quality=85, optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/jpeg;base64,{b64}"


def _normalize_item(raw: BoardItemInput, index: int) -> dict[str, Any]:
    if isinstance(raw, Image.Image):
        label = f"Image {index + 1}"
        return {
            "id": str(index),
            "src": _image_to_data_url(raw),
            "label": label,
            "label_style": {},
            "caption": "",
            "caption_style": {},
            "hover_text": label,
            "card_style": {},
            "image_click": None,
            "open_url": "",
            "disabled": False,
            "buttons": [],
            "texts": [],
        }

    if isinstance(raw, str):
        label = f"Image {index + 1}"
        return {
            "id": str(index),
            "src": raw,
            "label": label,
            "label_style": {},
            "caption": "",
            "caption_style": {},
            "hover_text": label,
            "card_style": {},
            "image_click": None,
            "open_url": "",
            "disabled": False,
            "buttons": [],
            "texts": [],
        }

    if not isinstance(raw, dict):
        raise TypeError(f"Gallery item must be str, PIL.Image, or dict; got {type(raw)!r}")

    item_id = str(raw.get("id", index))
    src = raw.get("src") or raw.get("url") or raw.get("image")
    if isinstance(src, Image.Image):
        src = _image_to_data_url(src)
    if not isinstance(src, str) or not src:
        raise ValueError(f"Gallery item {item_id!r} needs a src/url/image")

    buttons = raw.get("buttons") or []
    if not isinstance(buttons, (list, tuple)):
        raise TypeError(f"Item buttons for {item_id!r} must be a list")

    texts = raw.get("texts") or []
    if not isinstance(texts, (list, tuple)):
        raise TypeError(f"Item texts for {item_id!r} must be a list")

    label = str(raw.get("label") or raw.get("title") or item_id)
    hover = raw.get("hover_text", raw.get("hoverText"))
    hover_text = str(hover) if hover not in (None, "") else label

    card_style: dict[str, Any] = {}
    if isinstance(raw.get("background"), str):
        card_style["background"] = raw["background"]
    if isinstance(raw.get("color"), str):
        card_style["color"] = raw["color"]
    font_family = raw.get("font_family", raw.get("fontFamily"))
    if isinstance(font_family, str) and font_family.strip():
        card_style["fontFamily"] = font_family.strip()
    card_style.update(
        _sanitize_style(raw.get("card_style") or raw.get("cardStyle") or raw.get("style"))
    )

    click_raw = raw.get("image_click", raw.get("imageClick"))
    image_click = str(click_raw) if click_raw in {"select", "open", "none"} else None
    open_url = raw.get("open_url", raw.get("openUrl", raw.get("href", raw.get("link"))))
    open_url_s = str(open_url) if isinstance(open_url, str) else ""

    return {
        "id": item_id,
        "src": src,
        "label": label,
        "label_style": _sanitize_style(raw.get("label_style") or raw.get("labelStyle")),
        "caption": str(raw.get("caption") or ""),
        "caption_style": _sanitize_style(raw.get("caption_style") or raw.get("captionStyle")),
        "hover_text": hover_text,
        "card_style": card_style,
        "image_click": image_click,
        "open_url": open_url_s,
        "disabled": bool(raw.get("disabled", False)),
        "buttons": _normalize_buttons(buttons),
        "texts": _normalize_texts(texts),
    }


def _normalize_buttons(buttons: Sequence[Any] | None) -> list[dict]:
    if not buttons:
        return []
    out: list[dict] = []
    for b in buttons:
        if not isinstance(b, dict) or "id" not in b:
            continue
        out.append(
            {
                "id": str(b["id"]),
                "label": str(b.get("label") or b["id"]),
                "variant": str(b.get("variant") or "default"),
                "disabled": bool(b.get("disabled", False)),
            }
        )
    return out


def _normalize_texts(texts: Sequence[Any] | None) -> list[dict]:
    if not texts:
        return []
    out: list[dict] = []
    for i, t in enumerate(texts):
        if isinstance(t, str):
            out.append(
                {
                    "id": f"text-{i}",
                    "text": t,
                    "style": {},
                    "variant": "default",
                    "clickable": False,
                }
            )
            continue
        if not isinstance(t, dict):
            continue
        text = t.get("text", t.get("label"))
        if text is None:
            continue
        text_s = str(text)
        tid = str(t.get("id") or f"text-{i}")
        variant = str(t.get("variant") or "default")
        if variant not in {"default", "muted", "accent", "danger", "badge"}:
            variant = "default"
        out.append(
            {
                "id": tid,
                "text": text_s,
                "style": _sanitize_style(t.get("style")),
                "variant": variant,
                "clickable": bool(t.get("clickable", False)),
            }
        )
    return out


def _parse_selected_ids(
    raw_ids: Any,
    raw_csv: Any,
    *,
    item_order: Sequence[str],
) -> tuple[list[str], str]:
    """Normalize selection from list and/or CSV into a stable ``list[str]``."""
    ids: list[str] = []
    if isinstance(raw_ids, list):
        ids = [str(x) for x in raw_ids if x is not None and str(x) != ""]
    elif isinstance(raw_csv, str) and raw_csv.strip():
        ids = [part for part in (p.strip() for p in raw_csv.split(",")) if part]

    seen: set[str] = set()
    deduped: list[str] = []
    for item_id in item_order:
        if item_id in ids and item_id not in seen:
            deduped.append(item_id)
            seen.add(item_id)
    for item_id in ids:
        if item_id not in seen:
            deduped.append(item_id)
            seen.add(item_id)

    return deduped, ",".join(deduped)


def _normalize_image_click(value: Any, *, selectable: bool) -> str:
    if value in {"select", "open", "none"}:
        return str(value)
    return "select" if selectable else "open"


def st_image_board(
    items: Sequence[BoardItemInput] | str | Path | None = None,
    *,
    config: dict[str, Any] | str | Path | None = None,
    columns: Any = _UNSET,
    gap: Any = _UNSET,
    selectable: Any = _UNSET,
    show_checkboxes: Any = _UNSET,
    image_click: Any = _UNSET,
    open_in_new_tab: Any = _UNSET,
    show_hover_text: Any = _UNSET,
    selection_color: Any = _UNSET,
    card_style: Any = _UNSET,
    selected_ids: Any = _UNSET,
    multi_select: Any = _UNSET,
    show_select_all: Any = _UNSET,
    buttons: Any = _UNSET,
    card_buttons: Any = _UNSET,
    card_texts: Any = _UNSET,
    height: Any = _UNSET,
    max_height: Any = _UNSET,
    thumbnail_fit: Any = _UNSET,
    empty_message: Any = _UNSET,
    key: str | None = None,
) -> BoardResult:
    """Render a React image board with local checkbox / frame selection.

    Selection and hover interactions run inside the widget (instant UI). Streamlit
    receives ``selected_ids`` / ``selected_csv`` and button/click events via
    Components v2 state. Checkbox selection is independent of thumbnail click
    mode when ``image_click="open"``.

    Parameters
    ----------
    items:
        Images as URL/data-URL strings, Pillow images, dicts, a JSON array
        string, or a path to a ``.json`` file. Dict keys include ``id``,
        ``src`` / ``url`` / ``image``, ``label``, ``caption``, ``hover_text``,
        ``card_style`` / ``background`` / ``color`` / ``font_family``,
        ``image_click``, ``open_url`` / ``href``, ``disabled``, ``buttons``,
        ``texts``.
    config:
        Optional full board JSON/dict (``items`` + options). Values in
        ``config`` fill defaults; explicit kwargs override them.
    columns:
        Target column count for the CSS grid (clamped 1–8). Defaults to ``4``.
    gap:
        Gap between cards in pixels. Defaults to ``12``.
    selectable:
        Allow selection (checkboxes / select-all). Independent of thumbnail
        click mode.
    show_checkboxes:
        When ``selectable``, also show a checkbox on each image.
    image_click:
        Thumbnail click behavior: ``"select"`` (default), ``"open"`` (emit
        ``clicked_button="open"`` and optionally ``window.open``), or
        ``"none"``. Per-item ``image_click`` overrides this.
    open_in_new_tab:
        When ``image_click="open"``, open ``open_url`` (or ``src``) in a new tab.
    show_hover_text:
        Show overlay text on image hover (``hover_text``, else ``label``).
    selection_color:
        CSS color for the selected image frame. Defaults to ``"#0f766e"``.
    card_style:
        Default card chrome (``background``, ``color``, ``fontFamily``, …)
        applied under each item's own ``card_style``.
    selected_ids:
        Controlled selection from the host. When this list identity/content
        changes, React adopts it; otherwise local toggles stay snappy.
    multi_select:
        Allow multiple checked items. When False, selecting one clears others.
    show_select_all:
        Show toolbar All / Select all / Deselect all when multi-select is on.
    buttons:
        Toolbar action buttons. Each dict: ``id``, ``label``, optional
        ``variant`` (``default`` | ``primary`` | ``danger``), ``disabled``.
    card_buttons:
        Default per-card buttons applied to every item (merged before
        item-specific ``buttons``).
    card_texts:
        Default per-card text chips applied to every item (merged before
        item-specific ``texts``).
    height:
        Fixed component height in pixels. ``None`` sizes to content up to
        ``max_height``.
    max_height:
        Max scrollable height when ``height`` is None. Defaults to ``640``.
    thumbnail_fit:
        CSS ``object-fit`` for thumbnails: ``cover`` (default) or ``contain``.
    empty_message:
        Message when ``items`` is empty.
    key:
        Optional Streamlit widget key.

    Returns
    -------
    BoardResult
        ``selected_ids`` / ``selected_csv`` plus the latest button / item click.
        Opening an image sets ``clicked_button="open"`` and ``clicked_item``.
    """
    cfg: dict[str, Any] = load_board_config(config) if config is not None else {}

    def pick(name: str, default: Any, value: Any) -> Any:
        if value is not _UNSET:
            return value
        if name in cfg:
            return cfg[name]
        return default

    if items is None:
        raw_items: Sequence[Any] = cfg.get("items") or []
    elif isinstance(items, (str, Path)):
        raw_items = load_board_items(items)
    elif isinstance(items, (list, tuple)):
        # JSON array string accidentally wrapped? already a sequence.
        raw_items = items
    else:
        raw_items = [items]

    columns = int(pick("columns", 4, columns))
    gap = int(pick("gap", 12, gap))
    selectable = bool(pick("selectable", True, selectable))
    show_checkboxes = bool(pick("show_checkboxes", True, show_checkboxes))
    image_click = str(pick("image_click", "select", image_click))
    open_in_new_tab = bool(pick("open_in_new_tab", True, open_in_new_tab))
    show_hover_text = bool(pick("show_hover_text", True, show_hover_text))
    selection_color = str(pick("selection_color", "#0f766e", selection_color))
    card_style = pick("card_style", None, card_style)
    selected_ids = pick("selected_ids", None, selected_ids)
    multi_select = bool(pick("multi_select", True, multi_select))
    show_select_all = bool(pick("show_select_all", True, show_select_all))
    buttons = pick("buttons", None, buttons)
    card_buttons = pick("card_buttons", None, card_buttons)
    card_texts = pick("card_texts", None, card_texts)
    height = pick("height", None, height)
    max_height = int(pick("max_height", 640, max_height))
    thumbnail_fit = str(pick("thumbnail_fit", "cover", thumbnail_fit))
    empty_message = str(pick("empty_message", "No images", empty_message))

    click_mode = _normalize_image_click(image_click, selectable=selectable)
    normalized = [_normalize_item(item, i) for i, item in enumerate(raw_items)]
    shared_card_buttons = _normalize_buttons(card_buttons)
    shared_card_texts = _normalize_texts(card_texts)
    if shared_card_buttons or shared_card_texts:
        for item in normalized:
            if shared_card_buttons:
                item["buttons"] = list(shared_card_buttons) + list(item.get("buttons") or [])
            if shared_card_texts:
                item["texts"] = list(shared_card_texts) + list(item.get("texts") or [])

    cols = max(1, min(int(columns), 8))
    component_height = int(height) if height is not None else int(max_height)
    initial_selected = [str(x) for x in (selected_ids or [])]

    data = {
        "items": normalized,
        "columns": cols,
        "gap": max(0, int(gap)),
        "selectable": bool(selectable),
        "show_checkboxes": bool(show_checkboxes and selectable),
        "image_click": click_mode,
        "open_in_new_tab": bool(open_in_new_tab),
        "show_hover_text": bool(show_hover_text),
        "selection_color": str(selection_color or "#0f766e"),
        "card_style": _sanitize_style(card_style),
        "selected_ids": initial_selected,
        "multi_select": bool(multi_select),
        "show_select_all": bool(show_select_all and multi_select and selectable),
        "buttons": _normalize_buttons(buttons),
        "max_height": int(max_height if height is None else height),
        "thumbnail_fit": "contain" if thumbnail_fit == "contain" else "cover",
        "empty_message": str(empty_message),
    }

    raw = _get_component()(
        key=key,
        data=data,
        default={
            "selected_ids": list(initial_selected),
            "selected_csv": ",".join(initial_selected),
            "clicked_button": None,
            "clicked_item": None,
            "action_nonce": 0,
        },
        on_selected_ids_change=_noop,
        on_selected_csv_change=_noop,
        on_clicked_button_change=_noop,
        on_clicked_item_change=_noop,
        on_action_nonce_change=_noop,
        height=component_height,
    )

    ids, csv = _parse_selected_ids(
        getattr(raw, "selected_ids", None),
        getattr(raw, "selected_csv", None),
        item_order=[item["id"] for item in normalized],
    )

    return BoardResult(
        selected_ids=ids,
        selected_csv=csv,
        clicked_button=getattr(raw, "clicked_button", None),
        clicked_item=getattr(raw, "clicked_item", None),
        action_nonce=int(getattr(raw, "action_nonce", 0) or 0),
    )


def st_image_gallery(*args: Any, **kwargs: Any) -> BoardResult:
    """Deprecated alias for :func:`st_image_board`."""
    return st_image_board(*args, **kwargs)


__all__ = [
    "BoardResult",
    "GalleryResult",
    "aggrid_preselected_rows",
    "configure_aggrid_selection",
    "filter_rows_by_ids",
    "load_board_config",
    "load_board_items",
    "merge_selection_sources",
    "normalize_selected_ids",
    "selected_ids_from_aggrid",
    "selected_ids_from_csv",
    "selected_ids_to_csv",
    "st_image_board",
    "st_image_gallery",
    "sync_checklist",
]
