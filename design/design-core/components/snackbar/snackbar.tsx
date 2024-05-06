import React, { useEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";

export interface SnackbarProps {
  visible?: boolean;
  content?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  timeout?: number;
  onClose?: () => void;
}

const styles = stylex.create({
  root: {
    display: "flex",
    padding: "8px 12px",
    borderRadius: 4,
    fontSize: 14,
    lineHeight: "20px",
    backgroundColor: "#323232",
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 500,
    position: "fixed",
    top: 24,
    right: "auto",
    bottom: "auto",
    left: "50%",
    transform: "translateX(-50%)",
  },
  content: {},
  action: {
    minWidth: 60,
  },
});

export const Snackbar: React.FC<SnackbarProps> = (props) => {
  const {
    content,
    children,
    action,
    visible = false,
    timeout = 3000,
    onClose,
  } = props;
  const [innerVisible, setInnerVisible] = useState(visible);
  const timer = useRef(0);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      setInnerVisible(false);
    }, timeout);
  }, []);

  useEffect(() => {
    if (!innerVisible) {
      onClose?.();
    }
  }, [innerVisible]);

  if (!innerVisible) return;
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.content)}>{children || content}</div>
      <div {...stylex.props(styles.action)}>{action}</div>
    </div>
  );
};
