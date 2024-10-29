import React from "react";
import stylex from "@stylexjs/stylex";
import { Button } from "../button";
import { styles } from "./notification.stylex";
import type { NotificationProps } from "./notification.types";
import "@design/icon/close";
import "@design/icon/info-circle-filled";
import "@design/icon/check-circle-filled";
import "@design/icon/close-circle-filled";
import "@design/icon/warning-filled";

export const Notification: React.FC<NotificationProps> = (props) => {
  const {
    id,
    title,
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
      <div {...stylex.props(styles.notification$content$icon$wrap)}>
        <span
          {...stylex.props(
            styles.notification$content$icon(iconColor),
            type === "info" && styles.notification$info,
            type === "success" && styles.notification$success,
            type === "warning" && styles.notification$warning,
            type === "error" && styles.notification$error
          )}
        >
          {icon ? icon : iconsConfig[type!]}
        </span>
      </div>
    );
  };

  const renderCloseIcon = () => {
    return showClose ? (
      <span {...stylex.props(styles.notification$content$close)}>
        <Button
          theme="ghost"
          color="rgba(28,31,35,.8)"
          icon={<is-close />}
          stylex={styles.notification$close$icon}
          onClick={() => onClickClose?.(id)}
        ></Button>
      </span>
    ) : null;
  };

  return (
    <div {...stylex.props(styles.notification)}>
      <div {...stylex.props(styles.notification$content)}>
        {renderIcon()}
        <div {...stylex.props(styles.notification$content$inner)}>
          <div {...stylex.props(styles.notification$content$inner$container)}>
            <div {...stylex.props(styles.notification$content$inner$title)}>
              {title}
            </div>
            <div {...stylex.props(styles.notification$content$inner$text)}>
              {content}
            </div>
          </div>
          {renderCloseIcon()}
        </div>
      </div>
    </div>
  );
};
