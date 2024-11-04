"use client";

import {
  info,
  success,
  warning,
  error,
  close,
  destroyAll,
} from "./notification.api";

const ExportNotification = {
  info,
  success,
  warning,
  error,
  close,
  destroyAll,
};

export { ExportNotification as Notification };
