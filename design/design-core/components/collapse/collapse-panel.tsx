import React, { useContext } from "react";
import type { CollapsePanelProps } from "./collapse.types";
import stylex from "@stylexjs/stylex";
import { styles } from "./collapse-stylex";
import { CollapseContext } from "./collapse.context";

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
