import React from "react";
import { createRoot } from "react-dom/client";
import { ImagePreview } from "./image-preview";

export const preview = (src: string | string[]) => {
  const containerElement = document.createElement("div");
  document.body.appendChild(containerElement);
  const container = createRoot(containerElement);
  const handleClose = () => {
    container.unmount();
    containerElement.remove();
  };
  container.render(<ImagePreview src={src} onClose={handleClose} />);
};
