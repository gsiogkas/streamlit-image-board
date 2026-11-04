"""Load board items / full board configs from JSON (str, path, or dict)."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

BOARD_OPTION_KEYS = frozenset(
    {
        "columns",
        "gap",
        "selectable",
        "show_checkboxes",
        "show_hover_text",
        "show_card_info",
        "show_selection_stats",
        "selection_color",
        "card_style",
        "button_style",
        "selected_ids",
        "multi_select",
        "show_select_all",
        "buttons",
        "card_buttons",
        "card_texts",
        "height",
        "max_height",
        "page_size",
        "pager_position",
        "thumbnail_fit",
        "empty_message",
        "image_click",
        "open_in_new_tab",
    }
)


def _read_json_text(raw: str) -> Any:
    text = raw.strip()
    if not text:
        raise ValueError("Empty JSON input")
    # Path-like JSON file
    path = Path(text)
    if len(text) < 512 and path.suffix.lower() == ".json" and path.is_file():
        return json.loads(path.read_text(encoding="utf-8"))
    return json.loads(text)


def load_json(value: Any) -> Any:
    """Parse JSON from a dict/list (passthrough), JSON string, or ``.json`` path."""
    if value is None:
        return None
    if isinstance(value, (dict, list)):
        return value
    if isinstance(value, Path):
        return json.loads(value.read_text(encoding="utf-8"))
    if isinstance(value, (bytes, bytearray)):
        return json.loads(value.decode("utf-8"))
    if isinstance(value, str):
        return _read_json_text(value)
    raise TypeError(f"Unsupported JSON input type: {type(value)!r}")


def load_board_items(value: Any) -> list[Any]:
    """Return a list of board item dicts/strings from JSON-friendly input.

    Accepts:

    * ``list`` of items
    * JSON array string
    * path to a ``.json`` file containing an array **or**
      ``{"items": [...], ...options}``
    """
    data = load_json(value)
    if data is None:
        return []
    if isinstance(data, list):
        return list(data)
    if isinstance(data, dict):
        items = data.get("items")
        if isinstance(items, list):
            return list(items)
        raise ValueError("JSON object must contain an 'items' array")
    raise TypeError(f"Board items JSON must be a list or object; got {type(data)!r}")


def load_board_config(value: Any) -> dict[str, Any]:
    """Load a full board config ``{items, columns, image_click, ...}``.

    Returns a dict with at least ``items`` (list). Other recognized option keys
    are forwarded for ``st_image_board(**config)``.
    """
    data = load_json(value)
    if data is None:
        return {"items": []}
    if isinstance(data, list):
        return {"items": list(data)}
    if not isinstance(data, dict):
        raise TypeError(f"Board config must be a list or object; got {type(data)!r}")

    items = data.get("items", [])
    if not isinstance(items, list):
        raise ValueError("Board config 'items' must be a list")

    out: dict[str, Any] = {"items": list(items)}
    for key in BOARD_OPTION_KEYS:
        if key in data:
            out[key] = data[key]
    return out


__all__ = [
    "BOARD_OPTION_KEYS",
    "load_board_config",
    "load_board_items",
    "load_json",
]
