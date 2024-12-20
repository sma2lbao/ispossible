import stylex from "@stylexjs/stylex";
import React, { useContext } from "react";
import { styles } from "./collapse-stylex";
import { CollapseContext } from "./collapse.context";
import type { CollapsePanelProps } from "./collapse.types";

export const CollapsePanel: React.FC<CollapsePanelProps> = (props) => {
  const context = useContext(CollapseContext);
  const { header, children, itemKey, disabled } = props;
  const active = context?.activeItemKeySet.has(itemKey);

  const handleClickHeader = () => {
    if (disabled) return;
    context?.onClickItem(itemKey);
  };

  return (
    <div {...stylex.props(styles.collapse$panel)}>
      <div
        {...stylex.props(
          styles.collapse$panel$header,
          disabled && styles.collapse$panel$header$disabled
        )}
        onClick={handleClickHeader}
      >
        <span>{header}</span>
        <span {...stylex.props(styles.collapse$panel$header$right)}>
          <span {...stylex.props(styles.collapse$panel$header$icon)}>
            {active ? context?.expandIcon : context?.collapseIcon}
          </span>
        </span>
      </div>
      <div
        {...stylex.props(
          styles.collapse$panel$content,
          !active && styles.collapse$pane$hidden
        )}
      >
        {children}
      </div>
    </div>
  );
};
