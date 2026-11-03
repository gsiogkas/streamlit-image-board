import css from "./gallery.css?inline";

const STYLE_ID = "streamlit-image-board-styles";

/**
 * Inject board CSS into the component's root (usually a CCv2 shadow root).
 * Document-head injection does not pierce shadow DOM, which left the grid
 * without `display: grid` and collapsed to a single column.
 */
export function ensureGalleryStyles(host?: ParentNode | null): void {
  if (typeof document === "undefined") return;

  const rootNode =
    host && "getRootNode" in host
      ? (host as Node).getRootNode()
      : host ?? document;

  const target: ParentNode =
    rootNode instanceof ShadowRoot
      ? rootNode
      : rootNode instanceof Document
        ? rootNode.head
        : document.head;

  if (
    (target as ParentNode & { querySelector?: typeof document.querySelector })
      .querySelector?.(`#${STYLE_ID}`)
  ) {
    return;
  }

  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = css;
  target.appendChild(el);
}
