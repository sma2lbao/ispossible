import React from "react";
import type { SelectOptionProps } from "./select.types";
import { x } from "../../shared";
import { styles } from "./select.stylex";

export const SelectOption: React.FC<SelectOptionProps> = (props) => {
  const { label, value, children, ...rest } = props;
  return (
    <div {...x(styles.select$option)}>
      <div {...x(styles.select$option$text)}>{children}</div>
    </div>
  );
};
