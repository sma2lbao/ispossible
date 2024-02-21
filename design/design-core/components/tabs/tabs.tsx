import React, { useEffect, useMemo, useState } from "react";
import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

const styles = stylex.create({
  root: {},
  top: {
    display: "flex",
    alignItems: "center",
  },
  item: {
    cursor: "pointer",
    padding: "8px 16px",
  },
  disabled: {
    pointerEvents: "none",
  },
  active: {
    color: colors.primary,
  },
  content: {
    padding: "16px",
  },
});

export interface TabItemProps {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export interface TabsProps {
  activeId?: string;
  items: TabItemProps[];
  onChange?: (activeId: string) => void;
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { items = [], activeId, onChange } = props;
  const [activeIdInternal, setActiveIdInternal] = useState<string>(() => {
    return activeId ?? items.find((item) => !item.disabled)?.id ?? "";
  });

  const activeTab = useMemo(() => {
    return items.find((item) => item.id === activeIdInternal);
  }, [activeIdInternal, items]);

  const handleClickTab = (tab: TabItemProps) => {
    if (tab.disabled || tab.id === activeIdInternal) return;
    setActiveIdInternal(tab.id);
    onChange?.(tab.id);
  };

  useEffect(() => {
    if (activeId && activeIdInternal !== activeId) {
      setActiveIdInternal(activeId);
    }
  }, [activeId]);

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.top)}>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => handleClickTab(item)}
              {...stylex.props(
                styles.item,
                item?.id === activeIdInternal && styles.active,
                item.disabled && styles.disabled
              )}
            >
              {item.icon}
              {item.label}
            </div>
          );
        })}
      </div>
      <div {...stylex.props(styles.content)}>{activeTab?.children}</div>
    </div>
  );
};
