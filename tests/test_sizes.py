"""Tests for selection size helpers."""

from __future__ import annotations

from streamlit_image_board.sizes import (
    format_bytes,
    parse_size_bytes,
    selected_size_bytes,
    selection_stats_label,
    size_from_data_url,
)


def test_format_bytes() -> None:
    assert format_bytes(0) == "0 B"
    assert format_bytes(512) == "512 B"
    assert format_bytes(1536) == "1.5 KB"
    assert format_bytes(1024 * 1024) == "1.0 MB"


def test_parse_size_bytes() -> None:
    assert parse_size_bytes(100) == 100
    assert parse_size_bytes("2 KB") == 2048
    assert parse_size_bytes("1.5mb") == int(1.5 * 1024 * 1024)
    assert parse_size_bytes(None) is None
    assert parse_size_bytes(-1) is None


def test_size_from_data_url() -> None:
    # "AAAA" base64 → 3 bytes (with no padding issues: AAAA is 3 bytes)
    url = "data:image/png;base64,AAAA"
    assert size_from_data_url(url) == 3
    assert size_from_data_url("https://example.com/x.png") is None


def test_selected_size_bytes_and_label() -> None:
    items = [
        {"id": "a", "size_bytes": 1000},
        {"id": "b", "size_bytes": 2000},
        {"id": "c"},
    ]
    count, total, sized = selected_size_bytes(items, ["a", "c", "b"])
    assert count == 3
    assert total == 3000
    assert sized == 2
    assert (
        selection_stats_label(
            selected_count=count,
            total_count=3,
            selected_bytes=total,
            sized_count=sized,
        )
        == "3 selected / 3 · 2.9 KB"
    )
