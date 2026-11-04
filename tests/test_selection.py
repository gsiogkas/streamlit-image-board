"""Unit tests for AgGrid <-> board selection bridge (no Streamlit runtime)."""

from __future__ import annotations

from streamlit_image_board.selection import (
    aggrid_preselected_rows,
    filter_rows_by_ids,
    finalize_aggrid_selection,
    merge_page_selection,
    merge_selection_sources,
    normalize_selected_ids,
    selected_ids_from_aggrid,
    selected_ids_from_csv,
    selected_ids_to_csv,
    sync_checklist,
)


def test_normalize_and_csv_roundtrip() -> None:
    assert normalize_selected_ids("a, b,,c") == ["a", "b", "c"]
    assert selected_ids_to_csv(["a", "b"]) == "a,b"
    assert selected_ids_from_csv("a,b") == ["a", "b"]


def test_selected_ids_from_aggrid_list_and_response() -> None:
    rows = [{"id": "teal", "label": "Teal"}, {"id": "sky", "label": "Sky"}]
    assert selected_ids_from_aggrid(rows) == ["teal", "sky"]
    assert selected_ids_from_aggrid({"selected_rows": rows}) == ["teal", "sky"]

    class Resp:
        selected_rows = rows

    assert selected_ids_from_aggrid(Resp()) == ["teal", "sky"]
    assert selected_ids_from_aggrid(None) == []
    assert selected_ids_from_aggrid({"selected_rows": None}) == []

    try:
        import pandas as pd

        empty = pd.DataFrame(columns=["id", "label"])
        assert selected_ids_from_aggrid({"selected_rows": empty}) == []
        assert selected_ids_from_aggrid(
            {"selected_rows": pd.DataFrame(rows)}
        ) == ["teal", "sky"]
    except ImportError:
        pass


def test_aggrid_preselected_rows_from_dicts() -> None:
    data = [
        {"id": "teal"},
        {"id": "slate"},
        {"id": "amber"},
    ]
    assert aggrid_preselected_rows(data, ["amber", "teal"]) == [0, 2]


def test_merge_page_selection_keeps_off_page() -> None:
    assert merge_page_selection(
        ["a", "b", "c", "d"],
        ["b", "c"],
        ["c"],  # deselected b on this page
    ) == ["a", "d", "c"]
    assert merge_page_selection(
        ["a", "b"],
        ["c", "d"],
        ["c", "d"],
    ) == ["a", "b", "c", "d"]
    # Empty widget selection clears only the page.
    assert merge_page_selection(["a", "b", "c"], ["b", "c"], []) == ["a"]


def test_sync_checklist_page_ids_merge() -> None:
    state: dict = {"shared": ["a", "b", "c"]}
    # First AgGrid paint snapshots the page-merged checklist.
    sync_checklist(
        session_state=state,
        key="shared",
        aggrid=[{"id": "b"}, {"id": "c"}],
        page_ids=["b", "c"],
    )
    # User deselects b on the page → keep off-page a, drop b.
    out = sync_checklist(
        session_state=state,
        key="shared",
        aggrid=[{"id": "c"}],
        page_ids=["b", "c"],
    )
    assert out == ["a", "c"]


def test_finalize_aggrid_selection_object_api() -> None:
    opts = {
        "rowSelection": "multiple",
        "columnDefs": [
            {
                "field": "id",
                "checkboxSelection": True,
                "headerCheckboxSelection": True,
            }
        ],
    }
    out = finalize_aggrid_selection(opts)
    assert out["rowSelection"] == {
        "mode": "multiRow",
        "checkboxes": True,
        "headerCheckbox": True,
        "enableClickSelection": True,
    }
    assert out["selectionColumnDef"]["pinned"] == "left"
    assert "checkboxSelection" not in out["columnDefs"][0]


def test_filter_rows_by_ids() -> None:
    data = [{"id": "a"}, {"id": "b"}, {"id": "c"}]
    assert filter_rows_by_ids(data, ["c", "a"]) == [{"id": "a"}, {"id": "c"}]


def test_merge_and_sync() -> None:
    assert merge_selection_sources(["a"], ["b", "a"], prefer="union") == [
        "a",
        "b",
    ]
    assert merge_selection_sources([], ["b"], prefer="last") == ["b"]

    state: dict = {}
    first = sync_checklist(session_state=state, board=["teal", "sky"])
    assert first == ["teal", "sky"]
    assert state["image_board_selection"] == ["teal", "sky"]

    # Empty AgGrid paint while awaiting echo must not wipe.
    held = sync_checklist(
        session_state=state,
        board=["teal", "sky"],
        aggrid=[],
    )
    assert held == ["teal", "sky"]

    # Catch-up echo clears the await flag.
    echoed = sync_checklist(
        session_state=state,
        board=["teal", "sky"],
        aggrid=[{"id": "teal"}, {"id": "sky"}],
    )
    assert echoed == ["teal", "sky"]

    # Later AgGrid edits win when board still matches session.
    second = sync_checklist(
        session_state=state,
        board=["teal", "sky"],
        aggrid=[{"id": "amber"}],
    )
    assert second == ["amber"]
