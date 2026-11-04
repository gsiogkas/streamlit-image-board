"""File-size helpers for selected board items."""

from __future__ import annotations

from collections.abc import Mapping, Sequence
from typing import Any


def format_bytes(num_bytes: int | float | None, *, places: int = 1) -> str:
    """Format a byte count as a short human string (``0 B``, ``12.3 KB``, …)."""
    if num_bytes is None:
        return ""
    try:
        n = float(num_bytes)
    except (TypeError, ValueError):
        return ""
    if n < 0 or n != n:  # NaN
        return ""
    units = ("B", "KB", "MB", "GB", "TB")
    value = n
    unit_i = 0
    while value >= 1024 and unit_i < len(units) - 1:
        value /= 1024.0
        unit_i += 1
    if unit_i == 0:
        return f"{int(value)} B"
    return f"{value:.{places}f} {units[unit_i]}"


def parse_size_bytes(raw: Any) -> int | None:
    """Coerce ``size`` / ``size_bytes`` / numeric strings to a non-negative int."""
    if raw is None or isinstance(raw, bool):
        return None
    if isinstance(raw, (int, float)):
        if raw < 0 or raw != raw:
            return None
        return int(raw)
    if isinstance(raw, str):
        text = raw.strip().lower().replace(",", "")
        if not text:
            return None
        # plain integer / float
        try:
            return parse_size_bytes(float(text))
        except ValueError:
            pass
        # "12.5 kb", "2mb", "1024 b"
        for unit, mult in (
            ("tb", 1024**4),
            ("gb", 1024**3),
            ("mb", 1024**2),
            ("kb", 1024),
            ("kib", 1024),
            ("mib", 1024**2),
            ("gib", 1024**3),
            ("b", 1),
        ):
            if text.endswith(unit):
                num = text[: -len(unit)].strip()
                try:
                    return int(float(num) * mult)
                except ValueError:
                    return None
    return None


def size_from_data_url(src: str) -> int | None:
    """Estimate payload bytes from a ``data:…;base64,…`` URL."""
    if not isinstance(src, str) or not src.startswith("data:"):
        return None
    marker = ";base64,"
    idx = src.find(marker)
    if idx < 0:
        return None
    b64 = src[idx + len(marker) :]
    if not b64:
        return 0
    padding = b64.count("=")
    return max(0, (len(b64) * 3) // 4 - padding)


def selected_size_bytes(
    items: Sequence[Mapping[str, Any]],
    selected_ids: Sequence[str],
) -> tuple[int, int, int]:
    """Return ``(count, total_bytes, sized_count)`` for the selection.

    ``total_bytes`` sums only items that expose a non-null ``size_bytes``.
    ``sized_count`` is how many selected items contributed a size.
    """
    by_id = {str(item.get("id")): item for item in items if item.get("id") is not None}
    total = 0
    sized = 0
    count = 0
    for item_id in selected_ids:
        item = by_id.get(str(item_id))
        if item is None:
            continue
        count += 1
        raw = item.get("size_bytes")
        if raw is None:
            continue
        try:
            n = int(raw)
        except (TypeError, ValueError):
            continue
        if n < 0:
            continue
        total += n
        sized += 1
    return count, total, sized


def selection_stats_label(
    *,
    selected_count: int,
    total_count: int,
    selected_bytes: int,
    sized_count: int,
) -> str:
    """Toolbar-style label: ``3 selected / 8 · 1.2 MB``."""
    base = f"{selected_count} selected"
    if total_count:
        base = f"{base} / {total_count}"
    if sized_count > 0:
        return f"{base} · {format_bytes(selected_bytes)}"
    return base


__all__ = [
    "format_bytes",
    "parse_size_bytes",
    "selected_size_bytes",
    "selection_stats_label",
    "size_from_data_url",
]
