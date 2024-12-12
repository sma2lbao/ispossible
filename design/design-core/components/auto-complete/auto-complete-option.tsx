import React from "react";
import type { AutoCompleteOptionProps } from "./auto-complete.types";
import { x } from "../../shared";
import { styles } from "./auto-complete.stylex";

export const AutoCompleteOption: React.FC<AutoCompleteOptionProps> = (
  props
) => {
  const { children, onClick } = props;
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div {...x(styles.autoComplete$option)} onClick={handleClick}>
      {children}
    </div>
  );
};
