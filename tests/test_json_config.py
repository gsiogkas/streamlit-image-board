"""Tests for JSON board config / items loaders."""

from __future__ import annotations

import json
from pathlib import Path

import pytest
from streamlit_image_board.json_config import (
    load_board_config,
    load_board_items,
    load_json,
)

EXAMPLES = Path(__file__).resolve().parents[1] / "examples"


def test_load_items_from_list() -> None:
    assert load_board_items([{"id": "a"}]) == [{"id": "a"}]


def test_load_items_from_json_array_string() -> None:
    raw = json.dumps([{"id": "x", "src": "https://example.com/x.png"}])
    assert load_board_items(raw)[0]["id"] == "x"


def test_load_items_from_examples_file() -> None:
    items = load_board_items(EXAMPLES / "items.json")
    assert len(items) == 2
    assert items[0]["id"] == "tiger"
    assert items[0]["src"].endswith("tiger.jpg")


def test_load_config_from_examples_file() -> None:
    cfg = load_board_config(EXAMPLES / "board_config.json")
    assert cfg["image_click"] == "open"
    assert cfg["columns"] == 3
    assert len(cfg["items"]) == 3
    assert cfg["items"][2]["image_click"] == "select"


def test_load_config_from_list_wraps_items() -> None:
    cfg = load_board_config([{"id": "only"}])
    assert cfg == {"items": [{"id": "only"}]}


def test_load_json_passthrough_dict() -> None:
    assert load_json({"a": 1}) == {"a": 1}


def test_load_items_object_without_items_raises() -> None:
    with pytest.raises(ValueError, match="items"):
        load_board_items({"columns": 2})
