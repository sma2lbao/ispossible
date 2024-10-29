import React from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./drawer.stylex";
import { DrawerProps } from "./drawer.types";
import "@design/icon/close";
import { createPortal } from "react-dom";
import { Button } from "../button";

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    title,
    visible,
    footer,
    closable = true,
    closeIcon = <is-close />,
    children,
  } = props;

  const renderCloseIcon = () => {
    return closable ? (
      <Button
        theme="ghost"
        color="rgba(28,31,35,.8)"
        stylex={styles.drawer$header$close}
        icon={closeIcon}
      ></Button>
    ) : null;
  };

  const renderPortal = () => {
    return createPortal(
      <div {...stylex.props(styles.drawer$portal)}>
        <div {...stylex.props(styles.drawer)}>
          <div {...stylex.props(styles.drawer$mask)}></div>
          <div {...stylex.props(styles.drawer$inner)}>
            <div {...stylex.props(styles.drawer$content)}>
              <div {...stylex.props(styles.drawer$header)}>
                <div {...stylex.props(styles.drawer$title)}>{title}</div>
                {renderCloseIcon()}
              </div>
              <div {...stylex.props(styles.drawer$body)}>{children}</div>
              <div {...stylex.props(styles.drawer$footer)}>{footer}</div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return visible ? renderPortal() : null;
};
