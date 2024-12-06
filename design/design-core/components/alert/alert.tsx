import React, { useState } from "react";
import type { AlertProps } from "./alert.types";
import { x } from "../../shared";
import { styles } from "./alert.stylex";
import { Button } from "../button";
import { Typography } from "../typography";
import "@design/icon/close";
import "@design/icon/info-circle-filled";
import "@design/icon/check-circle-filled";
import "@design/icon/close-circle-filled";
import "@design/icon/warning-filled";

const iconsConfig = {
  info: <is-info-circle-filled />,
  success: <is-check-circle-filled />,
  warning: <is-warning-filled />,
  error: <is-close-circle-filled />,
};

export const Alert: React.FC<AlertProps> = (props) => {
  const {
    type = "info",
    bordered = false,
    title,
    description,
    closable = true,
    onClose,
    justify = "center",
    icon = iconsConfig[type],
    style,
    stylex,
    className,
  } = props;
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div
      {...x(
        className,
        style,
        styles.alert,
        styles[`alert$${type}`],
        bordered && styles[`alert$border$${type}`],
        stylex
      )}
    >
      <div {...x(styles.alert$content$warp)}>
        <div
          {...x(
            styles.alert$content,
            justify === "start" && styles.alert$content$start
          )}
        >
          {Boolean(icon) ? <div {...x(styles.alert$icon)}>{icon}</div> : null}
          <div {...x(styles.alert$content$body)}>
            {Boolean(title) ? (
              <Typography
                stylex={styles.alert$content$title}
                as="div"
                variant="title"
                size="md"
              >
                {title}
              </Typography>
            ) : null}

            <Typography
              stylex={styles.alert$content$description}
              variant="body"
              size="md"
            >
              {description}
            </Typography>
          </div>
        </div>
        {closable ? (
          <Button
            stylex={styles.alert$close}
            theme="ghost"
            icon={<is-close />}
            onClick={handleClose}
          />
        ) : null}
      </div>
    </div>
  );
};
