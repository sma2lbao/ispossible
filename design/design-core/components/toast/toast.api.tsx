import React from "react";
import short from "short-uuid";
import { Root, createRoot } from "react-dom/client";
import stylex from "@stylexjs/stylex";
import { Toast } from "./toast";
import { styles } from "./toast.stylex";
import type { ToastBuildFunc, ToastBuiltInFunc } from "./toast.types";

type CacheItem = {
  element: HTMLDivElement;
  root: Root;
};

const toastCache = new Map<string, CacheItem>();

const buildToast: ToastBuildFunc = (type, message, options) => {
  const { id, onClose, ...rest } = options || {};
  const toastID = id ?? short.generate();
  const containerElement = document.createElement("div");
  document.body.appendChild(containerElement);
  const container = createRoot(containerElement);
  container.render(
    <div {...stylex.props(styles.toast$wrap)}>
      <Toast type={type} content={message} {...rest} />
    </div>
  );
  toastCache.set(toastID, {
    element: containerElement,
    root: container,
  });
  return toastID;
};

export const info: ToastBuiltInFunc = (message, options) => {
  const toastId = buildToast("info", message, options);
  setTimeout(() => {
    close(toastId);
  }, 2000);
  return toastId;
};

export const success: ToastBuiltInFunc = (message, options) => {
  const toastId = buildToast("success", message, options);
  setTimeout(() => {
    close(toastId);
  }, 2000);
  return toastId;
};

export const warning: ToastBuiltInFunc = (message, options) => {
  const toastId = buildToast("warning", message, options);
  setTimeout(() => {
    close(toastId);
  }, 2000);
  return toastId;
};

export const error: ToastBuiltInFunc = (message, options) => {
  const toastId = buildToast("error", message, options);
  setTimeout(() => {
    close(toastId);
  }, 2000);
  return toastId;
};

/**
 * 主动关闭
 * @param id
 * @returns
 */
export const close = (id: string) => {
  if (!id || !toastCache.has(id)) return;
  const cache = toastCache.get(id);
  if (cache) {
    cache.root?.unmount();
    cache.element?.remove();
  }
  toastCache.delete(id);
};

export const destroyAll = () => {
  for (const cache of toastCache.values()) {
    if (cache) {
      cache.root?.unmount();
      cache.element?.remove();
    }
  }
  toastCache.clear();
};
