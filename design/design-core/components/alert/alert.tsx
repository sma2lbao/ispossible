import React, { useState } from "react";
import stylex, { StyleXStyles } from "@stylexjs/stylex";
import "@design/icon/close";
import "@design/icon/close-circle";
import "@design/icon/info-circle";
import "@design/icon/warning";
import "@design/icon/check-circle";

export interface AlertProps {
  /**
   * 提示内容
   */
  message: React.ReactNode;
  /**
   * 可关闭配置
   */
  closable?: boolean;
  /**
   * 指定提示的样式
   * @default info
   */
  type?: "success" | "info" | "warning" | "error";

  onClose?: () => void;

  style?: StyleXStyles;
}

const styles = stylex.create({
  root: {
    display: "flex",
    padding: "8px 16px",
    borderRadius: 4,
  },
  content: {
    flex: 1,
    display: "flex",
  },
  icon: {
    marginRight: 6,
    display: "flex",
    alignItems: "center",
  },
  info: {
    backgroundColor: "#fffbe6",
  },
  warning: {
    backgroundColor: "#faad14",
  },
  error: {
    backgroundColor: "#faad14",
  },
  success: {
    backgroundColor: "#faad14",
  },
  closable: {
    marginLeft: 8,
    alignSelf: "center",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
});

const icons: Record<string, React.ReactNode> = {
  success: <is-check-circle />,
  info: <is-info-circle />,
  warning: <is-warning />,
  error: <is-close-circle />,
};

export const Alert: React.FC<AlertProps> = (props) => {
  const { message, type = "info", onClose } = props;
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) {
    return null;
  }

  return (
    <div {...stylex.props(styles.root, styles[type])}>
      <div {...stylex.props(styles.content)}>
        <div {...stylex.props(styles.icon)}>{icons[type]}</div>
        <div>{message}</div>
      </div>
      <div {...stylex.props(styles.closable)} onClick={handleClick}>
        <is-close />
      </div>
    </div>
  );
};

export default Alert;
