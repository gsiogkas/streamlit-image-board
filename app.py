"""Demo app for streamlit-image-board."""

from __future__ import annotations

from pathlib import Path

import streamlit as st
from PIL import Image
from streamlit_image_board import (
    aggrid_preselected_rows,
    selected_ids_from_aggrid,
    st_image_board,
    sync_checklist,
)

_ROOT = Path(__file__).resolve().parent
_EXAMPLES = _ROOT / "examples"
_DEMO_IMAGES = _EXAMPLES / "images"

st.set_page_config(page_title="Image Board Demo", page_icon=":framed_picture:")
st.title("Streamlit Image Board")
st.caption(
    "React Components v2 — selectable board with hover text and actions. "
    "Demo photos are public-domain (see `examples/images/ATTRIBUTION.md`)."
)


def load_demo(name: str) -> Image.Image:
    """Load a bundled public-domain JPEG from ``examples/images/``."""
    return Image.open(_DEMO_IMAGES / name).convert("RGB")


SAMPLES = [
    {
        "id": "tiger",
        "image": load_demo("tiger.jpg"),
        "label": "Bengal tiger",
        "hover_text": "USFWS — click image or checkbox to select",
        "label_style": {"fontWeight": "700"},
        "caption": "Wildlife",
        "open_url": "https://commons.wikimedia.org/wiki/File:Bengal_tiger.jpg",
        "card_style": {
            "background": "#ecfdf5",
            "color": "#065f46",
            "fontFamily": "Georgia, 'Times New Roman', serif",
        },
        "texts": [
            {"id": "tag", "text": "NEW", "variant": "badge"},
            {"id": "src", "text": "USFWS", "variant": "muted"},
        ],
    },
    {
        "id": "earth",
        "image": load_demo("earth.jpg"),
        "label": "Blue Marble",
        "hover_text": "Earth from Apollo 17 (NASA)",
        "caption": "Space",
        "background": "#0f172a",
        "color": "#e2e8f0",
        "font_family": "ui-monospace, SFMono-Regular, Menlo, monospace",
        "open_url": "https://commons.wikimedia.org/wiki/File:The_Earth_seen_from_Apollo_17.jpg",
        "texts": [{"text": "NASA", "style": {"fontStyle": "italic", "opacity": "0.85"}}],
    },
    {
        "id": "bee",
        "image": load_demo("bee.jpg"),
        "label": "Honeybee",
        "hover_text": "Needs review",
        "caption": "Macro",
        "card_style": {"background": "#fff7ed", "color": "#9a3412"},
        "open_url": "https://commons.wikimedia.org/wiki/File:Honeybee_(1).jpg",
        "texts": [{"id": "warn", "text": "review", "variant": "danger", "clickable": True}],
    },
    {
        "id": "bison",
        "image": load_demo("bison.jpg"),
        "label": "Bison",
        "hover_text": "Badlands National Park (NPS)",
        "caption": "Plains",
        "card_style": {"background": "#fff1f2", "color": "#9f1239"},
        "open_url": "https://commons.wikimedia.org/wiki/File:Bison_Badlands_South_Dakota.jpg",
    },
    {
        "id": "penguins",
        "image": load_demo("penguins.jpg"),
        "label": "Emperor penguins",
        "hover_text": "NSF / U.S. Antarctic Program",
        "caption": "Antarctic",
        "card_style": {"background": "#eef2ff", "color": "#312e81"},
        "open_url": "https://commons.wikimedia.org/wiki/File:Emperor_penguins.jpg",
    },
    {
        "id": "saturn",
        "image": load_demo("saturn.jpg"),
        "label": "Saturn",
        "hover_text": "Saturn during equinox (NASA/JPL)",
        "caption": "Planets",
        "card_style": {"background": "#f7fee7", "color": "#3f6212"},
        "open_url": "https://commons.wikimedia.org/wiki/File:Saturn_during_Equinox.jpg",
    },
    {
        "id": "locked",
        "image": load_demo("bear.jpg"),
        "label": "Black bear",
        "hover_text": "Locked — not selectable",
        "caption": "disabled",
        "disabled": True,
        "card_style": {"background": "#f5f5f4", "color": "#57534e"},
        "open_url": "https://commons.wikimedia.org/wiki/File:Black_bear_in_cave.jpg",
        "texts": [{"text": "locked", "variant": "badge", "style": {"background": "#78716c"}}],
    },
    {
        "id": "eagle",
        "image": load_demo("eagle.jpg"),
        "label": "Bald eagle",
        "hover_text": "Haliaeetus leucocephalus",
        "caption": "Raptors",
        "card_style": {"background": "#f0f9ff", "color": "#075985"},
        "open_url": "https://commons.wikimedia.org/wiki/File:Haliaeetus_leucocephalus2.jpg",
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
show_card_info = st.sidebar.checkbox(
    "Card info / buttons",
    True,
    help="Show label, caption, chips, and Open under each image.",
)
show_select_all = st.sidebar.checkbox("Select / deselect all", True)
multi = st.sidebar.checkbox("Multi-select", True)
show_layout = st.sidebar.checkbox(
    "Columns / rows controls",
    True,
    help="Toolbar steppers to change grid columns and rows per page.",
)
rows = st.sidebar.number_input(
    "Rows per page",
    min_value=0,
    max_value=8,
    value=2,
    step=1,
    help="0 = unused (use page size). >0 → page size = columns × rows.",
)
page_size = st.sidebar.number_input(
    "Page size",
    min_value=0,
    max_value=48,
    value=0,
    step=1,
    help="0 = scroll (or use rows). Ignored when rows > 0.",
)
pager_position = st.sidebar.selectbox(
    "Pager position",
    ["top", "bottom"],
    help="First / Prev / Next / Last placement when paging is on.",
)
fit = st.sidebar.selectbox("Thumbnail fit", ["cover", "contain"])
theme = st.sidebar.selectbox(
    "Theme",
    ["light", "dark", "auto"],
    help="Board chrome. auto follows the OS color scheme.",
)
override_selection = st.sidebar.checkbox("Override selection / accent color", False)
selection_color = (
    st.sidebar.color_picker("Selection frame", "#0f766e") if override_selection else None
)
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
style_buttons = st.sidebar.checkbox("Custom button aesthetics", False)
btn_radius = st.sidebar.selectbox("Button radius", ["8px", "4px", "999px", "0px"], index=0)
btn_size = st.sidebar.selectbox("Toolbar button size", ["md", "sm", "lg"])
btn_bg = st.sidebar.color_picker("Button background", "#ffffff")
btn_fg = st.sidebar.color_picker("Button text", "#0f172a")
btn_primary = st.sidebar.color_picker("Primary button", "#0f766e")
btn_danger = st.sidebar.color_picker("Danger button", "#b91c1c")

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
    show_card_info=show_card_info,
    show_select_all=show_select_all,
    card_buttons=(
        [{"id": "open", "label": "Open", "variant": "default"}] if show_card_info else None
    ),
    card_texts=(
        [{"id": "hint", "text": "tap image", "variant": "muted"}] if show_card_info else None
    ),
    theme=theme,
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
    button_style=(
        {
            "background": btn_bg,
            "color": btn_fg,
            "borderRadius": btn_radius,
            "padding": "6px 12px",
            "fontWeight": "650",
            "primaryBackground": btn_primary,
            "primaryColor": "#ffffff",
            "dangerBackground": "#fee2e2",
            "dangerColor": btn_danger,
        }
        if style_buttons
        else None
    ),
    selected_ids=st.session_state.shared_selection,
    multi_select=multi,
    page_size=int(page_size),
    rows=int(rows),
    show_layout_controls=show_layout,
    pager_position=pager_position,
    thumbnail_fit=fit,
    max_height=520,
    buttons=[
        {
            "id": "approve",
            "label": "Approve selected",
            "variant": "primary",
            "size": btn_size,
        },
        {
            "id": "delete",
            "label": "Delete selected",
            "variant": "danger",
            "size": btn_size,
        },
    ],
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

c1, c2, c3, c4 = st.columns(4)
with c1:
    st.subheader("selected_ids")
    st.code(repr(result.selected_ids))
with c2:
    st.subheader("selected_csv")
    st.code(result.selected_csv or "(empty)")
with c3:
    st.subheader("Selection size")
    st.code(result.stats_label(total_count=len(visible_ids)) or f"{result.selected_count} selected")
    st.caption(
        f"{result.selected_count} files · "
        f"{result.selected_bytes} bytes"
        + (f" ({result.selected_size})" if result.selected_size else "")
    )
with c4:
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
    from streamlit_image_board import finalize_aggrid_selection

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
        gridOptions=finalize_aggrid_selection(gb.build()),
        update_mode=GridUpdateMode.SELECTION_CHANGED,
        fit_columns_on_grid_load=False,
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
