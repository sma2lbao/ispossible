import React from "react";

import { styles } from "./toast.stylex";
import stylex from "@stylexjs/stylex";
import { ToastProps } from "./toast.types";
import { Button } from "../button";
import "@design/icon/info-circle-filled";
import "@design/icon/check-circle-filled";
import "@design/icon/close-circle-filled";
import "@design/icon/warning-filled";

export const Toast: React.FC<ToastProps> = (props) => {
  const {
    content,
    type,
    icon,
    iconColor,
    showClose = true,
    onClickClose,
  } = props;
  const iconsConfig = {
    info: <is-info-circle-filled />,
    success: <is-check-circle-filled />,
    warning: <is-warning-filled />,
    error: <is-close-circle-filled />,
  };

  const renderIcon = () => {
    if (!icon && !type) return null;

    return (
      <span
        {...stylex.props(
          styles.toast$content$icon(iconColor),
          type === "info" && styles.toast$info,
          type === "success" && styles.toast$success,
          type === "warning" && styles.toast$warning,
          type === "error" && styles.toast$error
        )}
      >
        {icon ? icon : iconsConfig[type!]}
      </span>
    );
  };

  const renderCloseIcon = () => {
    return showClose ? (
      <span {...stylex.props(styles.toast$content$close)}>
        <Button
          theme="ghost"
          color="rgba(28,31,35,.8)"
          icon={<is-close />}
          stylex={styles.toast$close$icon}
          onClick={onClickClose}
        ></Button>
      </span>
    ) : null;
  };

  return (
    <div {...stylex.props(styles.toast)}>
      <div {...stylex.props(styles.toast$content)}>
        {renderIcon()}
        <span {...stylex.props(styles.toast$content$text())}>{content}</span>
        {renderCloseIcon()}
      </div>
    </div>
  );
};
