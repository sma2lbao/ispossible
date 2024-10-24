import React from "react";

import { styles } from "./toast.stylex";
import stylex from "@stylexjs/stylex";
import { ToastProps } from "./toast.types";
import { Button } from "../button";
import "@design/icon/info-circle-filled";

export const Toast: React.FC<ToastProps> = (props) => {
  const { content } = props;

  return (
    <div {...stylex.props(styles.toast)}>
      <div {...stylex.props(styles.toast$content)}>
        <span {...stylex.props(styles.toast$content$icon)}>
          <is-info-circle-filled />
        </span>
        <span {...stylex.props(styles.toast$content$text())}>{content}</span>
        <span {...stylex.props(styles.toast$content$close)}>
          <Button
            theme="ghost"
            color="rgba(28,31,35,.8)"
            icon={<is-close />}
            stylex={styles.toast$close$icon}
          ></Button>
        </span>
      </div>
    </div>
  );
};
