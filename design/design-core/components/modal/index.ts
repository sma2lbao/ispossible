"use client";

import { Modal } from "./modal";
import { info, warning, error, success, confirm } from "./modal.api";
import { BuiltInModalFunc } from "./modal.types";

type ExportModalType = typeof Modal & {
  info: BuiltInModalFunc;
  warning: BuiltInModalFunc;
  error: BuiltInModalFunc;
  success: BuiltInModalFunc;
  confirm: BuiltInModalFunc;
};

const ExportModal = Modal as ExportModalType;

ExportModal.info = info;
ExportModal.warning = warning;
ExportModal.error = error;
ExportModal.success = success;
ExportModal.confirm = confirm;

export { ExportModal as Modal };
