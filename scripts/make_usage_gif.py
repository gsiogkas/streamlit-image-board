"""Generate docs/assets/usage.gif — short board selection loop (no Streamlit needed)."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "assets" / "usage.gif"
W, H = 960, 620
COLS, ROWS = 4, 2
GAP = 14
PAD = 24
# Reserved vertical bands so commentary is never covered by toolbar/grid.
HEADER_TOP = 20
TITLE_H = 34
CAPTION_H = 28
HEADER_GAP = 10
TOOLBAR_H = 44
TOOLBAR_GAP = 14


def _font(size: int) -> ImageFont.ImageFont:
    for name in (
        "/usr/share/fonts/TTF/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ):
        try:
            return ImageFont.truetype(name, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


SWATCHES = [
    ("#0f766e", "#ecfdf5", "#065f46", "Teal"),
    ("#334155", "#0f172a", "#e2e8f0", "Slate"),
    ("#b45309", "#fff7ed", "#9a3412", "Amber"),
    ("#be123c", "#fff1f2", "#9f1239", "Rose"),
    ("#3730a3", "#eef2ff", "#312e81", "Indigo"),
    ("#4d7c0f", "#f7fee7", "#3f6212", "Lime"),
    ("#78716c", "#f5f5f4", "#57534e", "Locked"),
    ("#0369a1", "#f0f9ff", "#075985", "Sky"),
]


def _layout() -> tuple[int, int, int]:
    """Return (title_y, caption_y, toolbar_y)."""
    title_y = HEADER_TOP
    caption_y = title_y + TITLE_H
    toolbar_y = caption_y + CAPTION_H + HEADER_GAP
    return title_y, caption_y, toolbar_y


def _grid_top() -> int:
    _, _, toolbar_y = _layout()
    return toolbar_y + TOOLBAR_H + TOOLBAR_GAP


def _card_box(i: int) -> tuple[int, int, int, int]:
    grid_top = _grid_top()
    grid_w = W - 2 * PAD
    card_w = (grid_w - GAP * (COLS - 1)) // COLS
    card_h = (H - grid_top - PAD - GAP) // ROWS
    c, r = i % COLS, i // COLS
    x0 = PAD + c * (card_w + GAP)
    y0 = grid_top + r * (card_h + GAP)
    return x0, y0, x0 + card_w, y0 + card_h


def _draw_frame(selected: set[int], hover: int | None, caption: str) -> Image.Image:
    img = Image.new("RGB", (W, H), "#f8fafc")
    draw = ImageDraw.Draw(img)
    title_font = _font(28)
    small = _font(16)
    tiny = _font(13)
    title_y, caption_y, toolbar_y = _layout()

    draw.rounded_rectangle(
        (12, 12, W - 12, H - 12),
        radius=18,
        fill="#ffffff",
        outline="#e2e8f0",
        width=2,
    )

    # Header band (title + commentary) — kept clear of toolbar/grid.
    draw.text((PAD, title_y), "streamlit-image-board", fill="#0f172a", font=title_font)
    draw.rectangle(
        (PAD, caption_y, W - PAD, caption_y + CAPTION_H - 4),
        fill="#f8fafc",
    )
    draw.text((PAD, caption_y + 4), caption, fill="#475569", font=small)

    # Toolbar below commentary.
    draw.rounded_rectangle(
        (PAD, toolbar_y, W - PAD, toolbar_y + TOOLBAR_H),
        radius=10,
        fill="#f1f5f9",
        outline="#e2e8f0",
    )
    draw.text(
        (PAD + 14, toolbar_y + 12),
        f"{len(selected)} selected / 7",
        fill="#64748b",
        font=small,
    )
    bx = PAD + 220
    toolbar_btns = (
        ("All", len(selected) == 7),
        ("Select all", False),
        ("Deselect all", False),
    )
    for label, filled in toolbar_btns:
        tw = 90 if label != "Select all" else 110
        fill = "#0f766e" if filled and label == "All" else "#ffffff"
        fg = "#ffffff" if filled and label == "All" else "#0f172a"
        draw.rounded_rectangle(
            (bx, toolbar_y + 8, bx + tw, toolbar_y + 36),
            radius=8,
            fill=fill,
            outline="#cbd5e1",
        )
        draw.text((bx + 12, toolbar_y + 13), label, fill=fg, font=tiny)
        bx += tw + 8

    for i, (swatch, bg, fg, name) in enumerate(SWATCHES):
        x0, y0, x1, y1 = _card_box(i)
        draw.rounded_rectangle((x0, y0, x1, y1), radius=12, fill=bg, outline="#cbd5e1", width=2)
        if i in selected:
            draw.rounded_rectangle((x0, y0, x1, y1), radius=12, outline="#0f766e", width=4)

        thumb_h = int((y1 - y0) * 0.58)
        draw.rounded_rectangle((x0 + 8, y0 + 8, x1 - 8, y0 + thumb_h), radius=8, fill=swatch)
        if i in selected:
            draw.rectangle(
                (x0 + 12, y0 + 12, x1 - 12, y0 + thumb_h - 4),
                outline="#0f766e",
                width=4,
            )

        cx0, cy0 = x0 + 16, y0 + 16
        draw.rounded_rectangle(
            (cx0, cy0, cx0 + 16, cy0 + 16),
            radius=3,
            fill="#ffffff",
            outline="#94a3b8",
        )
        if i in selected:
            draw.rectangle((cx0 + 3, cy0 + 3, cx0 + 13, cy0 + 13), fill="#0f766e")

        draw.text((x0 + 12, y0 + thumb_h + 12), name, fill=fg, font=small)
        draw.text((x0 + 12, y0 + thumb_h + 34), "sample plate", fill=fg, font=tiny)

        if hover == i:
            overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
            od = ImageDraw.Draw(overlay)
            od.rectangle(
                (x0 + 8, y0 + thumb_h - 36, x1 - 8, y0 + thumb_h),
                fill=(15, 23, 42, 180),
            )
            img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
            draw = ImageDraw.Draw(img)
            draw.text(
                (x0 + 16, y0 + thumb_h - 28),
                f"Hover · {name}",
                fill="#ffffff",
                font=tiny,
            )

    return img


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    frames: list[Image.Image] = []
    sequence: list[tuple[set[int], int | None, str, int]] = [
        (set(), None, "0.1 · selectable board · styled cards", 12),
        (set(), 0, "Hover shows overlay text", 10),
        ({0}, 0, "Click image → selection frame", 10),
        ({0, 2, 3}, None, "Multi-select via image or checkbox", 12),
        ({0, 1, 2, 3, 4, 5, 7}, None, "Select all (enabled cards)", 12),
        (set(), None, "Deselect all", 10),
        ({2, 7}, None, "Checklist syncs as list[str] ids", 14),
    ]
    for selected, hover, caption, hold in sequence:
        frame = _draw_frame(selected, hover, caption)
        frames.extend([frame] * hold)

    frames[0].save(
        OUT,
        save_all=True,
        append_images=frames[1:],
        duration=90,
        loop=0,
        optimize=True,
    )
    print(f"wrote {OUT} ({len(frames)} frames)")


if __name__ == "__main__":
    main()
