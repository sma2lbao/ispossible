import React from "react";
import { Dialog, DialogProps } from "./dialog";
import { createRoot } from "react-dom/client";
import { Space } from "../space";
import { Button } from "../button";
import stylex from "@stylexjs/stylex";

export type UseDialogOpenProps = Omit<DialogProps, "children" | "visible">;

export type UseDialogConfirmProps = Omit<UseDialogOpenProps, "action"> & {
  onCancle?: () => void;
  onConfirm?: () => void;
};

const styles = stylex.create({
  container: {
    borderRadius: 4,
    padding: 16,
  },

  content: {
    minWidth: 300,
  },

  footer: {
    marginTop: 16,
    textAlign: "right",
  },
});

export function useDialog() {
  const open = (props: UseDialogOpenProps) => {
    const { onClose, content, action } = props;

    const rootDOM = document.createElement("div");
    document.body.appendChild(rootDOM);
    const root = createRoot(rootDOM);

    const handleClose = () => {
      document.body.removeChild(rootDOM);
      onClose?.();
    };

    root.render(
      <Dialog visible onClose={handleClose} action={action}>
        {content}
      </Dialog>
    );
  };

  const confirm = (props: UseDialogConfirmProps) => {
    const { onCancle, onConfirm, onClose, content } = props;

    const rootDOM = document.createElement("div");
    document.body.appendChild(rootDOM);
    const root = createRoot(rootDOM);

    const handleClose = () => {
      document.body.removeChild(rootDOM);
      onClose?.();
    };

    const handleCancle = () => {
      document.body.removeChild(rootDOM);
      onCancle?.();
    };

    const handleConfirm = () => {
      document.body.removeChild(rootDOM);
      onConfirm?.();
    };

    root.render(
      <Dialog
        visible
        style={styles.container}
        onClose={handleClose}
        action={
          <div {...stylex.props(styles.footer)}>
            <Space>
              <Button type="primary" onClick={handleConfirm}>
                确认
              </Button>
              <Button onClick={handleCancle}>取消</Button>
            </Space>
          </div>
        }
      >
        <div {...stylex.props(styles.content)}>{content}</div>
      </Dialog>
    );
  };

  return {
    open,
    confirm,
  };
}
