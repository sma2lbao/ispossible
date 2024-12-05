"use client";

import React, { useEffect, useMemo, useState } from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./tabs.stylex";
import { TabsContext } from "./tabs.context";
import type { TabPaneProps, TabsContextProps, TabsProps } from "./tabs.types";
import { TabPane } from "./tab-pane";

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    children,
    onTabClick,
    onChange,
    defaultActiveKey,
    activeKey,
    type = "line",
  } = props;
  const [rawActiveKey, setRawActiveKey] = useState<string | undefined>(
    defaultActiveKey
  );
  const isControl = "activeKey" in props;

  const contextValue: TabsContextProps = {
    activeKey: rawActiveKey,
  };

  const parsePanes = useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const { tab, icon, disabled, itemKey, closable } =
            child.props as TabPaneProps;
          return { tab, icon, disabled, itemKey, closable };
        }
      }),
    [children]
  );

  const handleClick = (item: Omit<TabPaneProps, "children">) => {
    if (item.disabled) return;
    onTabClick?.(item.itemKey!);
    onChange?.(item.itemKey!);
    if (!isControl) {
      setRawActiveKey(item.itemKey);
    }
  };

  useEffect(() => {
    if (isControl) {
      setRawActiveKey(activeKey);
      return;
    }
  }, [activeKey]);

  const renderBar = () => {
    return (
      <div
        {...stylex.props(
          styles.tabs$bar,
          type === "line" && styles.tabs$bar$line
        )}
      >
        {parsePanes?.map((item, index) => {
          return (
            <div
              key={item.itemKey || index}
              onClick={() => handleClick(item)}
              {...stylex.props(
                styles.tabs$tab,
                styles.tabs$tab$single,
                rawActiveKey === item.itemKey && styles.tabs$tab$active,
                item.disabled && styles.tabs$tab$disabled
              )}
            >
              {item.tab}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div {...stylex.props(styles.tabs)}>
      {renderBar()}
      <div {...stylex.props(styles.tabs$content)}>
        <TabsContext.Provider value={contextValue}>
          {children}
        </TabsContext.Provider>
      </div>
    </div>
  );
};
