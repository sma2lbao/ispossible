import React, { useContext } from "react";
import { SelectContext } from "./select.context";
import { styles } from "./select.stylex";
import { x } from "../../shared";
import type { SelectOptionProps } from "./select.types";

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
