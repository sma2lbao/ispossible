import stylex from "@stylexjs/stylex";
import React from "react";
import { Root, createRoot } from "react-dom/client";
import short from "short-uuid";
import { Toast } from "./toast";
import { styles } from "./toast.stylex";
import type {
  ToastBuildFunc,
  ToastBuiltInFunc,
  ToastProps,
} from "./toast.types";

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
      <Toast type={type} content={message} {...rest} id={toastID} />
    </div>
  );
  toastCache.set(toastID, {
    element: containerElement,
    root: container,
  });
  return toastID;
};

/**
 * 点击关闭按钮回调
 * @param id
 * @param onClickClose
 */
const handleClickClose = (
  id?: string,
  onClickClose?: ToastProps["onClickClose"]
) => {
  onClickClose?.(id);
  if (id) {
    close(id);
  }
};

export const info: ToastBuiltInFunc = (message, options) => {
  const { duration = 2000, onClickClose, ...rest } = options || {};

  const toastID = buildToast("info", message, {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(toastID);
    }, duration);
  }
  return toastID;
};

export const success: ToastBuiltInFunc = (message, options) => {
  const { duration = 2000, onClickClose, ...rest } = options || {};

  const toastID = buildToast("success", message, {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(toastID);
    }, duration);
  }
  return toastID;
};

export const warning: ToastBuiltInFunc = (message, options) => {
  const { duration = 2000, onClickClose, ...rest } = options || {};

  const toastID = buildToast("warning", message, {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(toastID);
    }, duration);
  }
  return toastID;
};

export const error: ToastBuiltInFunc = (message, options) => {
  const { duration = 2000, onClickClose, ...rest } = options || {};

  const toastID = buildToast("error", message, {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(toastID);
    }, duration);
  }
  return toastID;
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
