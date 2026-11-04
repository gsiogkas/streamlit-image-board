"""Selection bridge between Image Board and AgGrid (original / v2).

Contract
--------
The shared checklist is a plain ``list[str]`` of stable item / row ids
(JSON-serializable, CSV-friendly). Both widgets should:

1. Display selection from that list (board: ``selected_ids=…``,
   AgGrid: ``pre_selected_rows`` from :func:`aggrid_preselected_rows`).
2. Write selection back into the same list shape
   (board: ``BoardResult.selected_ids``,
   AgGrid: :func:`selected_ids_from_aggrid`).

AgGrid row identity is taken from a dataframe column (default ``\"id\"``).
``pre_selected_rows`` uses **0-based positional indices** into the dataframe
passed to ``AgGrid`` / ``AgGridBuilder`` — the format used by both classic
``streamlit-aggrid`` and ``streamlit-aggrid-v2`` ``configure_selection``.
"""

from __future__ import annotations

from collections.abc import Sequence
from typing import Any


def normalize_selected_ids(
    value: Any,
    *,
    item_order: Sequence[str] | None = None,
) -> list[str]:
    """Normalize arbitrary selection payloads to a stable ``list[str]``.

    Accepts ``None``, a single id, an iterable of ids, a comma-separated
    string, or objects with ``selected_ids`` / ``selected_csv`` attributes
    (e.g. :class:`~streamlit_image_board.BoardResult`).
    """
    if value is None:
        ids: list[str] = []
    elif isinstance(value, str):
        ids = [p for p in (part.strip() for part in value.split(",")) if p]
    elif hasattr(value, "selected_ids"):
        raw = getattr(value, "selected_ids", None)
        if isinstance(raw, (list, tuple, set)):
            ids = [str(x) for x in raw if x is not None and str(x) != ""]
        elif getattr(value, "selected_csv", None):
            ids = normalize_selected_ids(value.selected_csv)
        else:
            ids = []
    elif isinstance(value, dict) and "selected_ids" in value:
        ids = normalize_selected_ids(value.get("selected_ids"))
    elif isinstance(value, (list, tuple, set)):
        ids = [str(x) for x in value if x is not None and str(x) != ""]
    else:
        ids = [str(value)]

    if not item_order:
        # Preserve first-seen order.
        seen: set[str] = set()
        out: list[str] = []
        for item_id in ids:
            if item_id not in seen:
                out.append(item_id)
                seen.add(item_id)
        return out

    order = [str(x) for x in item_order]
    seen = set()
    out = []
    for item_id in order:
        if item_id in ids and item_id not in seen:
            out.append(item_id)
            seen.add(item_id)
    for item_id in ids:
        if item_id not in seen:
            out.append(item_id)
            seen.add(item_id)
    return out


def selected_ids_to_csv(ids: Sequence[str]) -> str:
    """Serialize a checklist to CSV (empty string when none selected)."""
    return ",".join(normalize_selected_ids(ids))


def selected_ids_from_csv(csv: str | None) -> list[str]:
    """Parse a checklist CSV back to ``list[str]``."""
    return normalize_selected_ids(csv)


def _rows_from_aggrid_payload(payload: Any) -> list[dict[str, Any]]:
    """Extract row dicts from AgGrid response / selected_rows variants."""
    if payload is None:
        return []

    rows = payload
    if hasattr(payload, "selected_rows"):
        rows = payload.selected_rows
    elif isinstance(payload, dict) and "selected_rows" in payload:
        rows = payload.get("selected_rows")
    # aggrid-v2 sometimes exposes the selection under these names instead.
    elif hasattr(payload, "selectedData"):
        rows = payload.selectedData
    elif isinstance(payload, dict) and "selectedData" in payload:
        rows = payload.get("selectedData")

    if rows is None:
        return []

    # Empty DataFrame / Series → no selection (avoid treating as one blank row).
    if hasattr(rows, "empty") and bool(rows.empty):
        return []

    # pandas DataFrame (optional dependency)
    if hasattr(rows, "to_dict") and hasattr(rows, "columns"):
        try:
            return list(rows.to_dict(orient="records"))
        except TypeError:
            return list(rows.to_dict("records"))

    if isinstance(rows, dict):
        # Sometimes a single row dict.
        return [rows]

    if isinstance(rows, (list, tuple)):
        out: list[dict[str, Any]] = []
        for row in rows:
            if row is None:
                continue
            if isinstance(row, dict):
                out.append(row)
            elif hasattr(row, "_asdict"):
                out.append(dict(row._asdict()))
            elif hasattr(row, "to_dict"):
                try:
                    out.append(dict(row.to_dict()))
                    continue
                except Exception:
                    pass
                out.append({"id": row})
            else:
                # Fallback: treat as id scalar.
                out.append({"id": row})
        return out

    return []


def selected_ids_from_aggrid(
    response_or_rows: Any,
    *,
    id_column: str = "id",
    item_order: Sequence[str] | None = None,
) -> list[str]:
    """Pull selected ids from an AgGrid response (classic or v2).

    Works with:

    * ``response.selected_rows`` / ``response[\"selected_rows\"]``
    * a bare list of row dicts
    * a pandas DataFrame of selected rows
    """
    rows = _rows_from_aggrid_payload(response_or_rows)
    ids: list[str] = []
    for row in rows:
        if id_column in row and row[id_column] is not None:
            ids.append(str(row[id_column]))
            continue
        # Common alternates if the grid renamed the field.
        for alt in ("id", "Id", "ID", "key", "uuid"):
            if alt in row and row[alt] is not None:
                ids.append(str(row[alt]))
                break
    return normalize_selected_ids(ids, item_order=item_order)


def aggrid_preselected_rows(
    data: Any,
    selected_ids: Sequence[str] | Any,
    *,
    id_column: str = "id",
) -> list[int]:
    """Map checklist ids → AgGrid ``pre_selected_rows`` indices.

    ``data`` may be a pandas DataFrame or a sequence of row mappings.
    Indices are 0-based positions in ``data`` (AgGrid / GridOptionsBuilder
    ``configure_selection(..., pre_selected_rows=…)``).
    """
    wanted = set(normalize_selected_ids(selected_ids))
    if not wanted:
        return []

    indices: list[int] = []

    # DataFrame path
    if hasattr(data, "columns") and hasattr(data, "iloc"):
        if id_column not in getattr(data, "columns", []):
            raise KeyError(f"id_column {id_column!r} not in dataframe columns {list(data.columns)}")
        series = data[id_column]
        for i, value in enumerate(series.tolist()):
            if value is not None and str(value) in wanted:
                indices.append(int(i))
        return indices

    # Sequence of dicts / objects
    if isinstance(data, Sequence) and not isinstance(data, (str, bytes)):
        for i, row in enumerate(data):
            value = row.get(id_column) if isinstance(row, dict) else getattr(row, id_column, None)
            if value is not None and str(value) in wanted:
                indices.append(int(i))
        return indices

    raise TypeError("data must be a pandas DataFrame or a sequence of row mappings")


def filter_rows_by_ids(
    data: Any,
    selected_ids: Sequence[str] | Any,
    *,
    id_column: str = "id",
) -> Any:
    """Return only rows whose ``id_column`` is in the checklist.

    DataFrames stay DataFrames; sequences of dicts return a filtered list.
    """
    wanted = set(normalize_selected_ids(selected_ids))
    if hasattr(data, "columns") and hasattr(data, "loc"):
        if id_column not in data.columns:
            raise KeyError(f"id_column {id_column!r} not in dataframe columns {list(data.columns)}")
        mask = data[id_column].map(lambda v: v is not None and str(v) in wanted)
        return data.loc[mask].copy()

    if isinstance(data, Sequence) and not isinstance(data, (str, bytes)):
        out = []
        for row in data:
            value = row.get(id_column) if isinstance(row, dict) else getattr(row, id_column, None)
            if value is not None and str(value) in wanted:
                out.append(row)
        return out

    raise TypeError("data must be a pandas DataFrame or a sequence of row mappings")


def merge_selection_sources(
    *sources: Any,
    item_order: Sequence[str] | None = None,
    prefer: str = "union",
) -> list[str]:
    """Combine several checklist sources (board, aggrid, session, CSV).

    Parameters
    ----------
    prefer:
        ``\"union\"`` (default) merges all ids,
        ``\"first\"`` keeps the first non-empty source,
        ``\"last\"`` keeps the last non-empty source.
    """
    normalized = [normalize_selected_ids(src) for src in sources]
    if prefer == "first":
        for ids in normalized:
            if ids:
                return normalize_selected_ids(ids, item_order=item_order)
        return []
    if prefer == "last":
        for ids in reversed(normalized):
            if ids:
                return normalize_selected_ids(ids, item_order=item_order)
        return []

    merged: list[str] = []
    seen: set[str] = set()
    for ids in normalized:
        for item_id in ids:
            if item_id not in seen:
                merged.append(item_id)
                seen.add(item_id)
    return normalize_selected_ids(merged, item_order=item_order)


def merge_page_selection(
    global_ids: Sequence[str] | Any,
    page_ids: Sequence[str],
    widget_selected: Sequence[str] | Any,
    *,
    item_order: Sequence[str] | None = None,
) -> list[str]:
    """Merge a page-local widget selection into a global checklist.

    Keeps ids that are not on the current page; replaces on-page membership
    with ``widget_selected``. Use whenever the board / AgGrid only receives a
    host page slice (otherwise adopting widget ids wholesale drops off-page
    selections).
    """
    previous = normalize_selected_ids(global_ids, item_order=item_order)
    page = {str(x) for x in page_ids if x is not None and str(x) != ""}
    widget = normalize_selected_ids(widget_selected)
    kept = [i for i in previous if i not in page]
    added = [i for i in widget if i in page]
    # Preserve any widget ids that somehow fall outside page (defensive).
    extras = [i for i in widget if i not in page and i not in kept]
    return normalize_selected_ids([*kept, *added, *extras], item_order=item_order)


def sync_checklist(
    *,
    session_state: Any,
    key: str = "image_board_selection",
    board: Any = None,
    aggrid: Any = None,
    id_column: str = "id",
    item_order: Sequence[str] | None = None,
    page_ids: Sequence[str] | None = None,
) -> list[str]:
    """Bidirectional sync helper for Streamlit ``session_state``.

    Typical pattern::

        sel = sync_checklist(
            session_state=st.session_state,
            board=board_result,
            aggrid=grid_response,
            id_column=\"id\",
            page_ids=[r.id for r in page_records],
        )
        # pass sel into st_image_board(selected_ids=sel) and
        # configure_selection(..., pre_selected_rows=aggrid_preselected_rows(df, sel))

    Resolution order when both widgets report a change vs the stored list:

    1. If board ids differ from session → adopt board and wait for AgGrid to
       echo the new preselection (avoids an empty first paint wiping ids).
    2. Else if AgGrid ids change after that echo (or after the first snapshot)
       → adopt AgGrid, including an intentional empty / deselect-all.
    3. Else keep session.

    When ``page_ids`` is set, board/AgGrid payloads are treated as **page-local**
    and merged via :func:`merge_page_selection` so off-page ids survive.
    """
    previous = normalize_selected_ids(
        session_state.get(key, []),
        item_order=item_order,
    )
    snap_key = f"{key}__aggrid_snap"
    await_key = f"{key}__await_aggrid"

    def _as_global(widget_payload: Any) -> list[str]:
        if page_ids is None:
            return normalize_selected_ids(widget_payload, item_order=item_order)
        return merge_page_selection(
            previous,
            page_ids,
            widget_payload,
            item_order=item_order,
        )

    board_ids = _as_global(board) if board is not None else previous

    next_ids = previous

    if board is not None and board_ids != previous:
        next_ids = board_ids
        session_state[snap_key] = list(next_ids)
        session_state[await_key] = True
    elif aggrid is not None:
        aggrid_ids = _as_global(
            selected_ids_from_aggrid(aggrid, id_column=id_column)
        )
        awaiting = bool(session_state.get(await_key))
        if awaiting:
            if aggrid_ids == previous:
                session_state[snap_key] = list(aggrid_ids)
                session_state[await_key] = False
            # Otherwise keep waiting for AgGrid to reflect pre_selected_rows.
        elif snap_key not in session_state:
            session_state[snap_key] = list(aggrid_ids)
        elif aggrid_ids != normalize_selected_ids(
            session_state.get(snap_key), item_order=item_order
        ):
            session_state[snap_key] = list(aggrid_ids)
            next_ids = aggrid_ids

    session_state[key] = list(next_ids)
    session_state[f"{key}_csv"] = selected_ids_to_csv(next_ids)
    return list(next_ids)


def configure_aggrid_selection(
    grid_options_builder: Any,
    selected_ids: Sequence[str] | Any,
    *,
    data: Any,
    id_column: str = "id",
    selection_mode: str = "multiple",
    use_checkbox: bool = True,
    header_checkbox: bool = True,
    **kwargs: Any,
) -> Any:
    """Apply checklist-compatible selection on a ``GridOptionsBuilder``.

    Requires ``streamlit-aggrid`` / ``streamlit-aggrid-v2``. Returns the
    builder for chaining.

    After ``builder.build()``, pass the options through
    :func:`finalize_aggrid_selection` so AG Grid 32+ / aggrid-v2 actually
    renders the checkbox column.
    """
    pre = aggrid_preselected_rows(data, selected_ids, id_column=id_column)
    grid_options_builder.configure_selection(
        selection_mode,
        use_checkbox=use_checkbox,
        header_checkbox=header_checkbox,
        pre_selected_rows=pre,
        **kwargs,
    )
    return grid_options_builder


def finalize_aggrid_selection(
    grid_options: dict[str, Any],
    *,
    selection_mode: str = "multiple",
    use_checkbox: bool = True,
    header_checkbox: bool = True,
) -> dict[str, Any]:
    """Patch built ``gridOptions`` so selection checkboxes render on AG Grid 32+.

    ``streamlit-aggrid-v2`` ships AG Grid 36, which ignores legacy
    ``checkboxSelection`` on data columns unless ``rowSelection`` uses the
    object form (``mode`` / ``checkboxes``). Call this after
    ``GridOptionsBuilder.build()``.
    """
    if selection_mode == "disabled":
        grid_options.pop("rowSelection", None)
        grid_options.pop("selectionColumnDef", None)
        return grid_options

    mode = "multiRow" if selection_mode == "multiple" else "singleRow"
    grid_options["rowSelection"] = {
        "mode": mode,
        "checkboxes": bool(use_checkbox),
        "headerCheckbox": bool(header_checkbox) and selection_mode == "multiple",
        "enableClickSelection": True,
    }
    if use_checkbox:
        grid_options["selectionColumnDef"] = {
            "pinned": "left",
            "width": 50,
            "maxWidth": 56,
            "suppressAutoSize": True,
            "resizable": False,
        }
    for col in grid_options.get("columnDefs") or []:
        if isinstance(col, dict):
            col.pop("checkboxSelection", None)
            col.pop("headerCheckboxSelection", None)
            col.pop("headerCheckboxSelectionFilteredOnly", None)
    return grid_options


__all__ = [
    "aggrid_preselected_rows",
    "configure_aggrid_selection",
    "finalize_aggrid_selection",
    "filter_rows_by_ids",
    "merge_page_selection",
    "merge_selection_sources",
    "normalize_selected_ids",
    "selected_ids_from_aggrid",
    "selected_ids_from_csv",
    "selected_ids_to_csv",
    "sync_checklist",
]
