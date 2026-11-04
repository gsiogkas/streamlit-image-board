"""Download / resize public-domain demo thumbnails into examples/images/."""

from __future__ import annotations

import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "examples" / "images"
UA = "streamlit-image-board-demo/0.1 (https://github.com/gsiogkas/streamlit-image-board)"

# Commons filenames known / expected to be Public domain (U.S. gov or released PD).
CANDIDATES: list[tuple[str, str]] = [
    ("tiger.jpg", "Bengal_tiger.jpg"),
    ("earth.jpg", "The_Earth_seen_from_Apollo_17.jpg"),
    ("bee.jpg", "Honeybee_(1).jpg"),
    ("bison.jpg", "Bison_Badlands_South_Dakota.jpg"),
    ("penguins.jpg", "Emperor_penguins.jpg"),
    ("saturn.jpg", "Saturn_during_Equinox.jpg"),
    ("bear.jpg", "Black_bear_in_cave.jpg"),
    ("eagle.jpg", "Haliaeetus_leucocephalus2.jpg"),
    ("crane.jpg", "Grus_americana1.jpg"),
    ("wolf.jpg", "Canis_lupus_laying.jpg"),
]


def api_imageinfo(filename: str) -> dict:
    params = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": f"File:{filename}",
            "prop": "imageinfo",
            "iiprop": "url|extmetadata|size",
            "format": "json",
        }
    )
    req = urllib.request.Request(
        f"https://commons.wikimedia.org/w/api.php?{params}",
        headers={"User-Agent": UA},
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    page = next(iter(data["query"]["pages"].values()))
    if "missing" in page or "imageinfo" not in page:
        raise LookupError(f"missing file: {filename}")
    return page["imageinfo"][0]


def download(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.read()


def resize_jpeg(path: Path, max_edge: int = 320) -> None:
    im = Image.open(path).convert("RGB")
    w, h = im.size
    edge = max(w, h)
    if edge > max_edge:
        scale = max_edge / float(edge)
        im = im.resize(
            (max(1, int(w * scale)), max(1, int(h * scale))),
            Image.Resampling.LANCZOS,
        )
    im.save(path, format="JPEG", quality=85, optimize=True)


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)
    kept: list[tuple[str, str, str]] = []
    for out_name, commons_name in CANDIDATES:
        if len(kept) >= 8:
            break
        time.sleep(1.5)
        try:
            info = api_imageinfo(commons_name)
        except Exception as exc:  # noqa: BLE001
            print(f"skip {commons_name}: meta {exc}")
            continue
        lic = info.get("extmetadata", {}).get("LicenseShortName", {}).get("value", "")
        if "public domain" not in lic.lower():
            print(f"skip {commons_name}: license {lic!r}")
            continue
        url = info["url"]
        artist = info.get("extmetadata", {}).get("Artist", {}).get("value", "")[:120]
        out = ROOT / out_name
        try:
            out.write_bytes(download(url))
            resize_jpeg(out)
        except Exception as exc:  # noqa: BLE001
            print(f"skip {commons_name}: download {exc}")
            if out.exists():
                out.unlink()
            continue
        print(f"ok {out_name} ({out.stat().st_size} B) ← {commons_name} [{lic}]")
        kept.append((out_name, commons_name, artist))

    # Drop leftover jpgs not in the keep set
    keep_names = {name for name, _, _ in kept} | {"ATTRIBUTION.md"}
    for path in ROOT.iterdir():
        if path.name not in keep_names and path.suffix.lower() in {".jpg", ".jpeg", ".png"}:
            path.unlink()
            print("removed", path.name)

    print("kept", [k[0] for k in kept])


if __name__ == "__main__":
    main()
