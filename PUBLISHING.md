# Publishing guide

Do these in order for a **first** release: **GitHub → PyPI → Streamlit `.app` demo → Components gallery**.

For later releases, see [Updating an existing release](#updating-an-existing-release).

Current package version: **0.2.0**

---

## 1. GitHub — initial commit and push

Do this once from the repo root (`streamlit-image-board`).

### 1a. Preflight (presentable tree)

```bash
# rebuild frontend so build/index.js matches src
cd streamlit_image_board/frontend
npm install
npm run build
cd ../..

# optional: refresh usage gif
uv run python scripts/make_usage_gif.py

# lint + format
uv run --with ruff ruff check streamlit_image_board tests app.py
uv run --with ruff ruff format streamlit_image_board tests app.py

# quick unit tests (no Streamlit browser)
uv run --with pytest pytest -q
```

Confirm these are present and not ignored:

- `streamlit_image_board/frontend/build/index.js`
- `docs/assets/usage.gif`
- `LICENSE`, `README.md`, `PUBLISHING.md`, `requirements.txt`
- `examples/board_config.json`, `examples/items.json`

### 1b. Commit (including version bumps)

```bash
# if git is not initialized yet
git init
git branch -M main

# refresh GIF after UI changes
uv run python scripts/make_usage_gif.py

git add .
git status   # no .venv, node_modules, __pycache__, .ruff_cache
git commit -m "$(cat <<'EOF'
Release 0.2.0: layout steppers, paging, button theme, PD demos.

EOF
)"
```

### 1c. Create remote and push

1. On GitHub: **New repository** → name `streamlit-image-board` → **Public** →  
   **do not** add README / license / `.gitignore` (this tree already has them).
2. Auth: GitHub **rejects account passwords** for `git push`. Use a
   **Personal Access Token (PAT)** or **SSH**.

**HTTPS + PAT**

1. GitHub → **Settings → Developer settings → Personal access tokens**  
   - Fine-grained: this repo, **Contents: Read and write**  
   - Or classic: scope **`repo`**
2. Push (Username = GitHub username, Password = **the token**):

```bash
git remote add origin https://github.com/YOUR_GITHUB_USER/streamlit-image-board.git
# if origin already exists:
# git remote set-url origin https://github.com/YOUR_GITHUB_USER/streamlit-image-board.git
git push -u origin main
```

**SSH**

```bash
ssh-keygen -t ed25519 -C "you@email" -f ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub   # add under GitHub → SSH and GPG keys
ssh -T git@github.com
git remote add origin git@github.com:YOUR_GITHUB_USER/streamlit-image-board.git
git push -u origin main
```

Optional release tag:

```bash
git tag v0.1.0
git push origin v0.1.0
```

Update placeholders after the final URLs exist:

- [`pyproject.toml`](pyproject.toml) — `[project.urls]`
- [`gallery/streamlit-image-board.json`](gallery/streamlit-image-board.json) — author + links
- This guide’s `YOUR_GITHUB_USER` placeholders

---

## 2. PyPI

### One-time setup

1. Create an account at [pypi.org](https://pypi.org) (and ideally [test.pypi.org](https://test.pypi.org)).
2. Create an **API token** (Account settings → API tokens → entire account or project).
3. Prefer Trusted Publishing later; for a first publish, token is fine.

### Build and publish

```bash
# from repo root — frontend build must be committed / present
cd streamlit_image_board/frontend && npm run build && cd ../..

uv build
# upload (username is __token__, password is the PyPI API token including pypi- prefix)
export UV_PUBLISH_TOKEN="pypi-...."
uv publish
```

Or interactive:

```bash
uv publish
# Username: __token__
# Password: pypi-YOUR_TOKEN
```

Optional dry run on TestPyPI first:

```bash
uv publish --publish-url https://test.pypi.org/legacy/
```

Verify: https://pypi.org/project/streamlit-image-board/

```bash
pip install streamlit-image-board
```

Bump `version` in both before each new upload (PyPI versions are immutable):

- root [`pyproject.toml`](pyproject.toml)
- [`streamlit_image_board/pyproject.toml`](streamlit_image_board/pyproject.toml)

Also keep [`streamlit_image_board/frontend/package.json`](streamlit_image_board/frontend/package.json) in sync for clarity.

---

## 3. Streamlit Community Cloud demo (`.streamlit.app`)

This repo is Cloud-ready:

- [`app.py`](app.py) — demo entrypoint
- [`requirements.txt`](requirements.txt) — installs Streamlit deps **and this package from `.`**
- Built assets committed under `streamlit_image_board/frontend/build/`

### Deploy (after GitHub push)

1. Open [share.streamlit.io](https://share.streamlit.io) / Community Cloud and sign in with GitHub.
2. **New app** → select `YOUR_GITHUB_USER/streamlit-image-board`.
3. Main file: `app.py`
4. Branch: `main`
5. Deploy (first build installs from `requirements.txt`, including `.`).

Suggested demo URL slug:

`https://image-board-demo.streamlit.app`

Put that URL into `gallery/streamlit-image-board.json` → `links.demo`.

Re-deploy: push to `main` (auto) or Cloud dashboard → **Reboot**.

### After PyPI exists (optional)

You can change `requirements.txt` to install from PyPI instead of the repo copy:

```text
streamlit>=1.51
pillow
pandas
streamlit-image-board>=0.1.0
```

Keeping `.` is fine and always matches the demo branch (recommended while iterating).

---

## 4. Streamlit Components gallery

Gallery submissions are a PR to the open registry:

https://github.com/streamlit/gallery/tree/main/components/registry

### First-time listing

1. Publish to PyPI and deploy the `.streamlit.app` demo first (gallery wants real links).
2. Fork https://github.com/streamlit/gallery
3. Add a file:

   `components/registry/components/streamlit-image-board.json`

4. Copy from this repo’s template after editing placeholders:

   [`gallery/streamlit-image-board.json`](gallery/streamlit-image-board.json)

5. Open a PR to `streamlit/gallery`. CI validates the JSON.
6. After merge, the component appears on https://streamlit.io/components after the weekly refresh (early Monday UTC).

Suggested categories (already in the template): `Images & video`, `Widgets`.

---

## Updating an existing release

### A. Bump version locally

1. Set the new version in:
   - [`pyproject.toml`](pyproject.toml)
   - [`streamlit_image_board/pyproject.toml`](streamlit_image_board/pyproject.toml)
   - [`streamlit_image_board/frontend/package.json`](streamlit_image_board/frontend/package.json)
2. Rebuild frontend (required if JS/TS changed):

```bash
cd streamlit_image_board/frontend
npm install
npm run build
cd ../..
```

3. Commit and push to GitHub:

```bash
git add .
git commit -m "Release 0.2.0: <short summary of changes>"
git push origin main
git tag v0.2.0
git push origin v0.2.0
```

### B. Publish the new version to PyPI

PyPI **never** overwrites a version. Always bump first, then:

```bash
uv build
uv publish
```

Users upgrade with:

```bash
pip install -U streamlit-image-board
```

### C. Refresh the Streamlit `.app` demo

- If `requirements.txt` uses `.` (this repo): Community Cloud usually **auto-redeploys** after you push `main`. If not, open the app in the Cloud dashboard → **Reboot** / **Redeploy**.
- If `requirements.txt` pins PyPI: bump the pin if needed, push, then reboot the app.

### D. Update the Streamlit Components gallery entry

You usually **do not** need a new gallery PR for a version bump. Open a follow-up PR only if metadata/links/media changed.

---

## Checklist

### First release

- [ ] Frontend `npm run build` artifacts committed
- [ ] `docs/assets/usage.gif` present
- [ ] Ruff clean
- [ ] GitHub repo public and pushed
- [ ] PyPI package `streamlit-image-board` live
- [ ] Community Cloud app live (`*.streamlit.app`)
- [ ] Gallery JSON filled with real GitHub / PyPI / demo URLs
- [ ] PR opened to `streamlit/gallery`

### Each update

- [ ] Version bumped in both `pyproject.toml` files (+ frontend `package.json`)
- [ ] Frontend rebuilt and committed if UI changed
- [ ] Optional: refresh [`docs/assets/usage.gif`](docs/assets/usage.gif)
- [ ] GitHub `main` pushed (+ optional `vX.Y.Z` tag)
- [ ] New version uploaded with `uv publish`
- [ ] Streamlit Cloud redeployed / rebooted
- [ ] Gallery JSON PR only if metadata/links changed

### Refreshing the usage GIF

Preferred (deterministic, no browser capture):

```bash
uv run python scripts/make_usage_gif.py
```

Or record from the running demo (`streamlit run app.py`): select cards → hover → Select all → Deselect all → show styled cards. Export as `docs/assets/usage.gif`.

---

## LinkedIn announcement

See [`docs/LINKEDIN_ANNOUNCEMENT.md`](docs/LINKEDIN_ANNOUNCEMENT.md).
