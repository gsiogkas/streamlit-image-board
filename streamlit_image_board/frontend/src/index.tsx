import {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";

import { mountImageGallery, type MountController } from "./mount";
import type { GalleryDataShape, GalleryStateShape } from "./types";

type Bridge = {
  controller: MountController;
  setStateValue: FrontendRendererArgs<
    GalleryStateShape,
    GalleryDataShape
  >["setStateValue"];
};

const bridges = new WeakMap<
  FrontendRendererArgs["parentElement"],
  Bridge
>();

const GalleryRoot: FrontendRenderer<GalleryStateShape, GalleryDataShape> = (
  args,
) => {
  const { data, parentElement, setStateValue } = args;
  const rootElement = parentElement.querySelector(".react-root");

  if (!rootElement) {
    throw new Error("Unexpected: React root element not found");
  }

  let bridge = bridges.get(parentElement);
  if (!bridge) {
    const holder: Bridge = {
      setStateValue,
      controller: null as unknown as MountController,
    };
    holder.controller = mountImageGallery(rootElement, data, (payload) => {
      holder.setStateValue("selected_ids", payload.selected_ids);
      holder.setStateValue("selected_csv", payload.selected_csv);
      holder.setStateValue("clicked_button", payload.clicked_button);
      holder.setStateValue("clicked_item", payload.clicked_item);
      holder.setStateValue("action_nonce", payload.action_nonce);
    });
    bridges.set(parentElement, holder);
    bridge = holder;
  } else {
    bridge.setStateValue = setStateValue;
    bridge.controller.update(data);
  }

  return () => {
    const existing = bridges.get(parentElement);
    if (existing) {
      existing.controller.destroy();
      bridges.delete(parentElement);
    }
  };
};

export default GalleryRoot;
