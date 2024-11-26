import React, { useContext } from "react";
import type { SelectOptionProps } from "./select.types";
import { x } from "../../shared";
import { styles } from "./select.stylex";
import { SelectContext } from "./select.context";

export const SelectOption: React.FC<SelectOptionProps> = (props) => {
  const context = useContext(SelectContext);
  const { label, value, disabled, children } = props;

  const handleClick = () => {
    if (disabled) return;
    context?.onSelectOption(props);
  };

  return (
    <div
      {...x(
        styles.select$option,
        disabled && styles.select$option$disabled,
        value === context?.value && styles.select$option$selected
      )}
      onClick={handleClick}
    >
      <div {...x(styles.select$option$text)}>{label ?? children ?? value}</div>
    </div>
  );
};
