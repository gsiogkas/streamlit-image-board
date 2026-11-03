import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";

import ImageGallery, { type GallerySetStateValue } from "./ImageGallery";
import { normalizeGalleryProps } from "./props";
import { ensureGalleryStyles } from "./styles";
import type { GalleryDataShape, GalleryStateShape } from "./types";

export { normalizeGalleryProps } from "./props";

export type GalleryChangePayload = {
  selected_ids: string[];
  selected_csv: string;
  clicked_button: string | null;
  clicked_item: string | null;
  action_nonce: number;
};

export type MountController = {
  update: (props: Partial<GalleryDataShape>) => void;
  destroy: () => void;
};

const roots = new WeakMap<Element, Root>();

export function mountImageGallery(
  element: Element,
  props: Partial<GalleryDataShape> | null | undefined,
  onChange?: (payload: GalleryChangePayload) => void,
): MountController {
  let current = normalizeGalleryProps(props);
  let latest: GalleryChangePayload = {
    selected_ids: [...current.selected_ids],
    selected_csv: current.selected_ids.join(","),
    clicked_button: null,
    clicked_item: null,
    action_nonce: 0,
  };

  const setStateValue: GallerySetStateValue = (name, value) => {
    if (name === "selected_ids") {
      const ids = Array.isArray(value) ? value.map(String) : [];
      latest = {
        ...latest,
        selected_ids: ids,
        selected_csv: ids.join(","),
      };
    } else if (name === "selected_csv") {
      latest = {
        ...latest,
        selected_csv: typeof value === "string" ? value : "",
      };
    } else if (name === "clicked_button") {
      latest = {
        ...latest,
        clicked_button: typeof value === "string" ? value : null,
      };
    } else if (name === "clicked_item") {
      latest = {
        ...latest,
        clicked_item: typeof value === "string" ? value : null,
      };
    } else if (name === "action_nonce") {
      latest = {
        ...latest,
        action_nonce: typeof value === "number" ? value : 0,
      };
    }
    onChange?.(latest);
  };

  const render = () => {
    ensureGalleryStyles(element);
    let root = roots.get(element);
    if (!root) {
      root = createRoot(element);
      roots.set(element, root);
    }
    root.render(
      <StrictMode>
        <ImageGallery {...current} setStateValue={setStateValue} />
      </StrictMode>,
    );
  };

  render();

  return {
    update(next) {
      current = normalizeGalleryProps({ ...current, ...next });
      render();
    },
    destroy() {
      const root = roots.get(element);
      if (root) {
        root.unmount();
        roots.delete(element);
      }
      if (element instanceof HTMLElement) {
        element.replaceChildren();
      }
    },
  };
}

export type { GalleryDataShape, GalleryStateShape };
