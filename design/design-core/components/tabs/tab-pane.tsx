import React, { useContext } from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./tabs.stylex";
import { TabsContext } from "./tabs.context";
import type { TabPaneProps } from "./tabs.types";

export const TabPane: React.FC<TabPaneProps> = (props) => {
  const context = useContext(TabsContext);
  const { children, itemKey } = props;

  return (
    <div {...stylex.props(styles.tabs$pane)}>
      {context?.activeKey === itemKey ? children : null}
    </div>
  );
};
