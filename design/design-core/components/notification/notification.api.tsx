import stylex from "@stylexjs/stylex";
import React from "react";
import { Root, createRoot } from "react-dom/client";
import short from "short-uuid";
import { Notification } from "./notification";
import { styles } from "./notification.stylex";
import type {
  NotificationProps,
  NotificationBuildFunc,
  NotificationBuiltInFunc,
} from "./notification.types";

type CacheItem = {
  element: HTMLDivElement;
  root: Root;
};

const notificationCache = new Map<string, CacheItem>();

const buildNotification: NotificationBuildFunc = (type, options) => {
  const { id, ...rest } = options || {};
  const notificationID = id ?? short.generate();
  const containerElement = document.createElement("div");
  document.body.appendChild(containerElement);
  const container = createRoot(containerElement);
  container.render(
    <div {...stylex.props(styles.notification$wrap)}>
      <Notification type={type} {...rest} id={notificationID} />
    </div>
  );
  notificationCache.set(notificationID, {
    element: containerElement,
    root: container,
  });
  return notificationID;
};

/**
 * 点击关闭按钮回调
 * @param id
 * @param onClickClose
 */
const handleClickClose = (
  id?: string,
  onClickClose?: NotificationProps["onClickClose"]
) => {
  onClickClose?.(id);
  if (id) {
    close(id);
  }
};

export const info: NotificationBuiltInFunc = (options) => {
  const { duration = 3000, onClickClose, ...rest } = options || {};

  const notificationID = buildNotification("info", {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(notificationID);
    }, duration);
  }
  return notificationID;
};

export const success: NotificationBuiltInFunc = (options) => {
  const { duration = 3000, onClickClose, ...rest } = options || {};

  const notificationID = buildNotification("success", {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(notificationID);
    }, duration);
  }
  return notificationID;
};

export const warning: NotificationBuiltInFunc = (options) => {
  const { duration = 3000, onClickClose, ...rest } = options || {};

  const notificationID = buildNotification("warning", {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(notificationID);
    }, duration);
  }
  return notificationID;
};

export const error: NotificationBuiltInFunc = (options) => {
  const { duration = 3000, onClickClose, ...rest } = options || {};

  const notificationID = buildNotification("error", {
    onClickClose: handleClickClose,
    ...rest,
  });
  if (duration > 0) {
    setTimeout(() => {
      close(notificationID);
    }, duration);
  }
  return notificationID;
};

/**
 * 主动关闭
 * @param id
 * @returns
 */
export const close = (id: string) => {
  if (!id || !notificationCache.has(id)) return;
  const cache = notificationCache.get(id);
  if (cache) {
    cache.root?.unmount();
    cache.element?.remove();
  }
  notificationCache.delete(id);
};

export const destroyAll = () => {
  for (const cache of notificationCache.values()) {
    if (cache) {
      cache.root?.unmount();
      cache.element?.remove();
    }
  }
  notificationCache.clear();
};
