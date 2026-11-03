"""Demo app for streamlit-image-board."""

from __future__ import annotations

from pathlib import Path

import streamlit as st
from PIL import Image, ImageDraw
from streamlit_image_board import (
    aggrid_preselected_rows,
    selected_ids_from_aggrid,
    st_image_board,
    sync_checklist,
)

_EXAMPLES = Path(__file__).resolve().parent / "examples"

st.set_page_config(page_title="Image Board Demo", page_icon=":framed_picture:")
st.title("Streamlit Image Board")
st.caption("React Components v2 — selectable board with hover text and actions.")


def make_swatch(color: str, label: str, size: int = 320) -> Image.Image:
    img = Image.new("RGB", (size, size), color)
    draw = ImageDraw.Draw(img)
    draw.rectangle((16, 16, size - 17, size - 17), outline="white", width=4)
    draw.text((28, size - 56), label, fill="white")
    return img


SAMPLES = [
    {
        "id": "teal",
        "image": make_swatch("#0f766e", "Teal"),
        "label": "Teal",
        "hover_text": "Teal — click image or checkbox to select",
        "label_style": {"fontWeight": "700"},
        "caption": "Primary",
        "open_url": "https://github.com/gsiogkas/streamlit-image-board",
        "card_style": {
            "background": "#ecfdf5",
            "color": "#065f46",
            "fontFamily": "Georgia, 'Times New Roman', serif",
        },
        "texts": [
            {"id": "tag", "text": "NEW", "variant": "badge"},
            {"id": "size", "text": "320×320", "variant": "muted"},
        ],
    },
    {
        "id": "slate",
        "image": make_swatch("#334155", "Slate"),
        "label": "Slate",
        "hover_text": "Slate archive plate",
        "caption": "Neutral",
        "background": "#0f172a",
        "color": "#e2e8f0",
        "font_family": "ui-monospace, SFMono-Regular, Menlo, monospace",
        "texts": [{"text": "archive", "style": {"fontStyle": "italic", "opacity": "0.85"}}],
    },
    {
        "id": "amber",
        "image": make_swatch("#b45309", "Amber"),
        "label": "Amber",
        "hover_text": "Needs review",
        "caption": "Warm",
        "card_style": {"background": "#fff7ed", "color": "#9a3412"},
        "texts": [{"id": "warn", "text": "review", "variant": "danger", "clickable": True}],
    },
    {
        "id": "rose",
        "image": make_swatch("#be123c", "Rose"),
        "label": "Rose",
        "hover_text": "Rose accent",
        "caption": "Accent",
        "card_style": {"background": "#fff1f2", "color": "#9f1239"},
    },
    {
        "id": "indigo",
        "image": make_swatch("#3730a3", "Indigo"),
        "label": "Indigo",
        "hover_text": "Indigo cool tone",
        "caption": "Cool",
        "card_style": {"background": "#eef2ff", "color": "#312e81"},
    },
    {
        "id": "lime",
        "image": make_swatch("#4d7c0f", "Lime"),
        "label": "Lime",
        "hover_text": "Lime fresh",
        "caption": "Fresh",
        "card_style": {"background": "#f7fee7", "color": "#3f6212"},
    },
    {
        "id": "locked",
        "image": make_swatch("#78716c", "Locked"),
        "label": "Locked",
        "hover_text": "Locked — not selectable",
        "caption": "disabled",
        "disabled": True,
        "card_style": {"background": "#f5f5f4", "color": "#57534e"},
        "texts": [{"text": "locked", "variant": "badge", "style": {"background": "#78716c"}}],
    },
    {
        "id": "sky",
        "image": make_swatch("#0369a1", "Sky"),
        "label": "Sky",
        "hover_text": "Sky blue",
        "caption": "Blue",
        "card_style": {"background": "#f0f9ff", "color": "#075985"},
    },
]

cols = st.sidebar.slider("Columns", 2, 6, 4)
selectable = st.sidebar.checkbox("Selectable", True)
show_checks = st.sidebar.checkbox("Show checkboxes", True)
image_click = st.sidebar.selectbox(
    "Image click",
    ["select", "open", "none"],
    help="Thumbnail click: toggle selection, open URL, or do nothing (checkboxes still work).",
)
open_new_tab = st.sidebar.checkbox("Open in new tab", True)
show_hover = st.sidebar.checkbox("Hover text", True)
show_select_all = st.sidebar.checkbox("Select / deselect all", True)
multi = st.sidebar.checkbox("Multi-select", True)
fit = st.sidebar.selectbox("Thumbnail fit", ["cover", "contain"])
selection_color = st.sidebar.color_picker("Selection frame", "#0f766e")
use_default_chrome = st.sidebar.checkbox("Apply default card chrome", False)
default_bg = st.sidebar.color_picker("Default card background", "#ffffff")
default_fg = st.sidebar.color_picker("Default card text", "#0f172a")
default_font = st.sidebar.selectbox(
    "Default card font",
    [
        "Segoe UI, system-ui, sans-serif",
        "Georgia, 'Times New Roman', serif",
        "ui-monospace, SFMono-Regular, Menlo, monospace",
    ],
)

if "kept" not in st.session_state:
    st.session_state.kept = {item["id"] for item in SAMPLES if item["id"] != "locked"}
if "log" not in st.session_state:
    st.session_state.log = []
if "last_nonce" not in st.session_state:
    st.session_state.last_nonce = 0
if "shared_selection" not in st.session_state:
    st.session_state.shared_selection = []

visible = [item for item in SAMPLES if item["id"] in st.session_state.kept]
visible_ids = [item["id"] for item in visible]

# Attach open targets for demo "open" mode (data URLs work poorly as tabs).
demo_items = []
for item in visible:
    row = dict(item)
    row.setdefault(
        "open_url",
        f"https://github.com/gsiogkas/streamlit-image-board#{item['id']}",
    )
    demo_items.append(row)

result = st_image_board(
    demo_items,
    columns=cols,
    selectable=selectable,
    show_checkboxes=show_checks,
    image_click=image_click,
    open_in_new_tab=open_new_tab,
    show_hover_text=show_hover,
    show_select_all=show_select_all,
    selection_color=selection_color,
    card_style=(
        {
            "background": default_bg,
            "color": default_fg,
            "fontFamily": default_font,
        }
        if use_default_chrome
        else None
    ),
    selected_ids=st.session_state.shared_selection,
    multi_select=multi,
    thumbnail_fit=fit,
    max_height=520,
    buttons=[
        {"id": "approve", "label": "Approve selected", "variant": "primary"},
        {"id": "delete", "label": "Delete selected", "variant": "danger"},
    ],
    card_buttons=[{"id": "open", "label": "Open", "variant": "default"}],
    card_texts=[{"id": "hint", "text": "tap image", "variant": "muted"}],
    key="demo_board",
)

# Keep a session checklist that AgGrid (or other grids) can share.
st.session_state.shared_selection = sync_checklist(
    session_state=st.session_state,
    key="shared_selection",
    board=result,
    item_order=visible_ids,
)

if result.action_nonce and result.action_nonce != st.session_state.last_nonce:
    st.session_state.last_nonce = result.action_nonce
    if result.clicked_button == "delete":
        for item_id in result.selected_ids:
            st.session_state.kept.discard(item_id)
        st.session_state.log.append(f"Deleted {result.selected_ids}")
        st.rerun()
    elif result.clicked_button == "approve":
        st.session_state.log.append(f"Approved {result.selected_ids}")
    elif result.clicked_button == "open" and result.clicked_item:
        st.session_state.log.append(f"Opened image {result.clicked_item}")
    elif result.clicked_button == "warn" and result.clicked_item:
        st.session_state.log.append(f"Review clicked on {result.clicked_item}")
    elif result.clicked_item:
        st.session_state.log.append(f"Activated {result.clicked_item}")

c1, c2, c3 = st.columns(3)
with c1:
    st.subheader("selected_ids")
    st.code(repr(result.selected_ids))
with c2:
    st.subheader("selected_csv")
    st.code(result.selected_csv or "(empty)")
with c3:
    st.subheader("Last action")
    st.write(
        {
            "button": result.clicked_button,
            "item": result.clicked_item,
            "nonce": result.action_nonce,
        }
    )

st.subheader("Event log")
st.write(st.session_state.log[-8:] or "(empty)")

st.divider()
st.subheader("AgGrid checklist bridge")
st.caption(
    "Shared contract is `list[str]` ids (also as CSV). Works with classic "
    "`streamlit-aggrid` and `streamlit-aggrid-v2`."
)

table_rows = [
    {"id": item["id"], "label": item["label"], "caption": item.get("caption", "")}
    for item in visible
]
preselected = aggrid_preselected_rows(table_rows, st.session_state.shared_selection, id_column="id")
st.write(
    {
        "shared_selection": st.session_state.shared_selection,
        "aggrid_pre_selected_rows": preselected,
    }
)

try:
    import pandas as pd
    from st_aggrid import AgGrid, GridOptionsBuilder, GridUpdateMode

    df = pd.DataFrame(table_rows)
    gb = GridOptionsBuilder.from_dataframe(df)
    gb.configure_selection(
        "multiple",
        use_checkbox=True,
        header_checkbox=True,
        pre_selected_rows=preselected,
    )
    grid = AgGrid(
        df,
        gridOptions=gb.build(),
        update_mode=GridUpdateMode.SELECTION_CHANGED,
        fit_columns_on_grid_load=True,
        key="demo_aggrid",
        height=260,
    )
    before = list(st.session_state.shared_selection)
    after = sync_checklist(
        session_state=st.session_state,
        key="shared_selection",
        board=result,
        aggrid=grid,
        id_column="id",
        item_order=visible_ids,
    )
    st.caption(f"AgGrid → checklist: {selected_ids_from_aggrid(grid)}")
    if after != before:
        st.rerun()
except ImportError:
    st.info(
        "Install `pandas` plus `streamlit-aggrid` or `streamlit-aggrid-v2` "
        "to exercise the live grid sync (`pip install -e '.[aggrid]'`)."
    )
    st.code(
        "\n".join(
            [
                "from st_aggrid import AgGrid, GridOptionsBuilder",
                "from streamlit_image_board import (",
                "    configure_aggrid_selection, sync_checklist,",
                ")",
                "gb = GridOptionsBuilder.from_dataframe(df)",
                "configure_aggrid_selection(gb, st.session_state.shared_selection, data=df)",
                "grid = AgGrid(df, gridOptions=gb.build())",
                "sync_checklist(session_state=st.session_state, board=result, aggrid=grid)",
            ]
        ),
        language="python",
    )

if st.button("Reset board"):
    st.session_state.kept = {item["id"] for item in SAMPLES if item["id"] != "locked"}
    st.session_state.log = []
    st.session_state.last_nonce = 0
    st.session_state.shared_selection = []
    st.rerun()

st.divider()
st.subheader("JSON config demo")
st.caption(
    "Load a full board from `examples/board_config.json` "
    "(image_click=open, with one per-item select override)."
)
if st.checkbox("Show JSON-driven board", value=False):
    json_result = st_image_board(
        config=_EXAMPLES / "board_config.json",
        key="json_board",
    )
    st.write(
        {
            "selected_ids": json_result.selected_ids,
            "clicked_button": json_result.clicked_button,
            "clicked_item": json_result.clicked_item,
        }
    )
