import React from "react";
import type { SelectProps } from "./select.types";
import { Popover } from "../popover";
import { x } from "../../shared";
import { styles } from "./select.stylex";

export const Select: React.FC<SelectProps> = (props) => {
  const {} = props;

  const renderOptions = () => {
    return <div></div>;
  };

  return (
    <Popover content={renderOptions}>
      <div {...x(styles.select)}></div>
    </Popover>
  );
};
