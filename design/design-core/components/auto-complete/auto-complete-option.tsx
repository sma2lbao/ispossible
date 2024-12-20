import React from "react";
import { styles } from "./auto-complete.stylex";
import { x } from "../../shared";
import type { AutoCompleteOptionProps } from "./auto-complete.types";

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
