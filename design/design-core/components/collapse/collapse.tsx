import React, { useEffect, useState } from "react";
import { CollapseContext } from "./collapse.context";
import type { CollapseProps, CollapseContextProps } from "./collapse.types";
import "@design/icon/caret-right";
import "@design/icon/caret-bottom";

export const Collapse: React.FC<CollapseProps> = (props) => {
  const {
    accordion = false,
    children,
    defaultActiveKey,
    activeKey,
    collapseIcon = <is-caret-right />,
    expandIcon = <is-caret-bottom />,
    onChange,
  } = props;
  const isControl = "activeKey" in props;
  const [activeItemKeySet, setActiveItemKeySet] = useState<Set<string>>(() => {
    const defaultItemKeys = Array.isArray(defaultActiveKey)
      ? defaultActiveKey
      : typeof defaultActiveKey === "string"
      ? [defaultActiveKey]
      : [];
    return new Set(defaultItemKeys);
  });

  const handleClickItem = (itemKey: string) => {
    const nextActiveItemKeySet = activeItemKeySet;

    if (!accordion) {
      nextActiveItemKeySet.has(itemKey)
        ? nextActiveItemKeySet.delete(itemKey)
        : nextActiveItemKeySet.add(itemKey);
    } else {
      if (nextActiveItemKeySet.has(itemKey)) {
        nextActiveItemKeySet.clear();
      } else {
        nextActiveItemKeySet.clear();
        nextActiveItemKeySet.add(itemKey);
      }
    }

    if (!isControl) {
      setActiveItemKeySet(new Set(nextActiveItemKeySet));
    }
    onChange?.(Array.from(nextActiveItemKeySet));
  };

  const contextValue: CollapseContextProps = {
    activeItemKeySet: activeItemKeySet,
    onClickItem: handleClickItem,
    collapseIcon,
    expandIcon,
  };

  useEffect(() => {
    const nextItemKeys = Array.isArray(activeKey)
      ? activeKey
      : typeof activeKey === "string"
      ? [activeKey]
      : [];
    setActiveItemKeySet(new Set(nextItemKeys));
  }, [activeKey]);

  return (
    <div>
      <CollapseContext.Provider value={contextValue}>
        {children}
      </CollapseContext.Provider>
    </div>
  );
};
