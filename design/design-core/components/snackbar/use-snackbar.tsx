import React from "react";
import { Snackbar, SnackbarProps } from "./snackbar";
import { createRoot } from "react-dom/client";

export type UseSnackbarOpenProps = Omit<SnackbarProps, "children" | "visible">;
export function useSnackbar() {
  const open = (props: UseSnackbarOpenProps) => {
    const { content, timeout, onClose, action } = props;

    const rootDOM = document.createElement("div");
    document.body.appendChild(rootDOM);
    const root = createRoot(rootDOM);

    const handleClose = () => {
      document.body.removeChild(rootDOM);
      onClose?.();
    };
    root.render(
      <Snackbar visible onClose={handleClose} timeout={timeout} action={action}>
        {content}
      </Snackbar>
    );
  };

  return {
    open,
  };
}
