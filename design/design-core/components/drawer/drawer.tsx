import stylex from "@stylexjs/stylex";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { styles } from "./drawer.stylex";
import { DrawerProps } from "./drawer.types";
import "@design/icon/close";
import { Button } from "../button";

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    title,
    visible,
    footer,
    closable = true,
    closeIcon = <is-close />,
    children,
    onClosed,
  } = props;

  const [innerVisible, setInnerVisible] = useState(false);

  const handleClickClose = () => {
    setInnerVisible(false);
    onClosed?.();
  };

  useEffect(() => {
    if (typeof visible === "boolean") {
      setInnerVisible(visible);
    }
  }, [visible]);

  const renderCloseIcon = () => {
    return closable ? (
      <Button
        theme="ghost"
        color="rgba(28,31,35,.8)"
        stylex={styles.drawer$header$close}
        icon={closeIcon}
        onClick={handleClickClose}
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

  return innerVisible ? renderPortal() : null;
};
