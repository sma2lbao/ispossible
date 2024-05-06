import React, { useEffect, useRef, useState } from "react";
import stylex, { StyleXStyles } from "@stylexjs/stylex";

export interface DialogProps {
  /**
   * 是否可见
   * @default false
   */
  visible?: boolean;
  /**
   * 内容
   */
  content?: React.ReactNode;
  /**
   * 内容 （与content作用一致，优先级更高）
   */
  children?: React.ReactNode;
  /**
   * 操作按钮
   */
  action?: React.ReactNode;
  onClose?: () => void;
  style?: StyleXStyles;
}

const styles = stylex.create({
  root: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, .4)",
    zIndex: 9,
  },
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    zIndex: 10,
  },
  content: {},
  actions: {},
});

export const Dialog: React.FC<DialogProps> = (props) => {
  const { visible = false, content, children, onClose, action, style } = props;
  const [innerVisible, setInnerVisible] = useState(visible);
  const container = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const current = e.target;
    if (current instanceof Node && !container.current?.contains(current)) {
      setInnerVisible(false);
    }
  };

  useEffect(() => {
    if (!visible) {
      onClose?.();
    }
  }, [visible]);

  if (!innerVisible) return;
  return (
    <div {...stylex.props(styles.root)} onClick={handleClick}>
      <div ref={container} {...stylex.props(styles.container, style)}>
        <div {...stylex.props(styles.content)}>{children || content}</div>
        <div {...stylex.props(styles.actions)}>{action}</div>
      </div>
    </div>
  );
};
