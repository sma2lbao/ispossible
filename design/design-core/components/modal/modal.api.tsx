import React from "react";
import { createRoot } from "react-dom/client";
import { Modal } from "./modal";
import { ModalContext } from "./modal.context";
import type {
  BuildModalFunc,
  BuildModalOptions,
  BuiltInModalFunc,
  ModalProps,
} from "./modal.types";

const buildModal: BuildModalFunc = (type, options) => {
  const { onClosed, ...rest } = options || {};
  const containerElement = document.createElement("div");
  document.body.appendChild(containerElement);
  const container = createRoot(containerElement);

  const destroy = () => {
    container.unmount();
    containerElement.remove();
  };

  const handleClosed = () => {
    destroy();
    onClosed?.();
  };

  const contextValue: ModalProps = {
    ...rest,
    onClosed: handleClosed,
    type,
    visible: true,
  };

  const update = (options: BuildModalOptions) => {
    Object.assign(contextValue, options);
  };

  container.render(
    <ModalContext.Provider value={contextValue}>
      <Modal />
    </ModalContext.Provider>
  );

  return {
    destroy,
    update,
  };
};

export const info: BuiltInModalFunc = (options) => {
  return buildModal("info", options);
};

export const warning: BuiltInModalFunc = (options) => {
  return buildModal("warning", options);
};

export const success: BuiltInModalFunc = (options) => {
  return buildModal("success", options);
};

export const error: BuiltInModalFunc = (options) => {
  return buildModal("error", options);
};

export const confirm: BuiltInModalFunc = (options) => {
  return buildModal("confirm", options);
};
