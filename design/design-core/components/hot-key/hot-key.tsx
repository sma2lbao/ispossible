import React from "react";
import { styles } from "./hot-key.stylex";
import { useHotKey } from "../../hooks/use-hot-key";
import { x } from "../../shared";
import { Space } from "../space";
import type { IHotKeyProps } from "./hot-key.types";

export const HotKey: React.FC<IHotKeyProps> = (props) => {
  const { selector, hotKeys, onHotKeyPressed } = props;

  useHotKey({
    hotKeys,
    selector,
    onHotKeyPressed,
  });

  return (
    <Space stylex={styles.hotkey} separator={<span {...x(styles.hotkey$split)}>+</span>} size={0}>
      {hotKeys.map((hotKey) => (
        <span key={hotKey} {...x(styles.hotkey$span)}>
          {hotKey}
        </span>
      ))}
    </Space>
  );
};
