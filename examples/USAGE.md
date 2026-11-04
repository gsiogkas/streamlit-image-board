# Usage examples

Install:

```bash
pip install streamlit-image-board
# or from this repo:
pip install -e .
```

## Minimal board

```python
import streamlit as st
from streamlit_image_board import st_image_board

result = st_image_board(
    [
        {"id": "a", "src": "https://…/a.jpg", "label": "A"},
        {"id": "b", "src": "https://…/b.jpg", "label": "B"},
    ],
    columns=4,
    key="board",
)
st.write(result.selected_ids)
```

## Local public-domain demos

```python
from pathlib import Path
from PIL import Image
from streamlit_image_board import st_image_board

img_dir = Path("examples/images")
items = [
    {
        "id": p.stem,
        "image": Image.open(p),
        "label": p.stem.title(),
        "open_url": f"file:{p.name}",
    }
    for p in sorted(img_dir.glob("*.jpg"))
]
result = st_image_board(items, columns=4, page_size=8, show_card_info=False)
```

## Columns / rows controls

```python
result = st_image_board(
    items,
    columns=4,
    rows=2,                      # page size = 4×2 = 8
    show_layout_controls=True,   # steppers in the toolbar
    pager_position="top",
)
st.caption(f"Layout {result.layout_columns}×{result.layout_rows}")
```

Hide the steppers with `show_layout_controls=False` (host still sets `columns` / `rows` / `page_size`).

## Image click: select vs open

```python
result = st_image_board(
    items,
    image_click="open",          # or "select" / "none"
    open_in_new_tab=True,
    show_checkboxes=True,        # selection still works via checkbox
)
```

## Light / dark theme

```python
result = st_image_board(
    items,
    theme="dark",  # or "light" / "auto"
    theme_overrides={"accent": "#2dd4bf", "panel": "#1e293b"},
)
```

## Image-only cards + button theme

```python
result = st_image_board(
    items,
    theme="light",
    show_card_info=False,
    button_style={
        "borderRadius": "999px",
        "primaryBackground": "#0f766e",
        "dangerColor": "#b91c1c",
    },
    buttons=[
        {"id": "ok", "label": "Approve", "variant": "primary", "size": "lg"},
        {"id": "no", "label": "Skip", "variant": "ghost"},
    ],
)
```

## Host-controlled paging + chrome-only

```python
from streamlit_image_board import merge_page_selection, st_image_board

checklist = st.session_state.setdefault("sel", [])
page_ids = [i["id"] for i in page_items]

result = st_image_board(
    page_items if show_grid else [{"id": i, "size_bytes": sizes.get(i)} for i in checklist],
    columns=4,
    rows=2,
    selected_ids=checklist,
    total_count=total,
    page_index=page,
    show_items=show_grid,          # False → toolbar/pager only
    show_layout_controls=True,
    key=f"board_{view_nonce}",     # remount on view flip
)
if show_grid:
    checklist = merge_page_selection(checklist, page_ids, result.selected_ids)
    st.session_state["sel"] = checklist
# result.page_index / layout_columns / layout_rows → re-slice next run
```

Pair chrome-only with a selectable `st.dataframe(..., on_select="rerun",
selection_mode="multi-row")` (or AgGrid) and the same `merge_page_selection`
helper so off-page ids survive.

## JSON config

```python
result = st_image_board(config="examples/board_config.json")
# or items only:
result = st_image_board("examples/items.json", columns=3, show_layout_controls=True)
```

See also [`board_config.json`](board_config.json), [`items.json`](items.json), and
[`images/ATTRIBUTION.md`](images/ATTRIBUTION.md).

## Run the demo app

```bash
streamlit run app.py
```
