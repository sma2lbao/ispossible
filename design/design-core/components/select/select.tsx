import React, { useRef, useState } from "react";
import type { SelectProps } from "./select.types";
import { Popover } from "../popover";
import { x } from "../../shared";
import { styles } from "./select.stylex";
import "@design/icon/close-circle-filled";
import { SelectOption } from "./select-option";

export const Select: React.FC<SelectProps> = (props) => {
  const { prefix, suffix, children } = props;
  const triggerRef = useRef<HTMLDivElement>(null);
  const clearIcon = <is-close-circle-filled />;
  const [visible, setVisible] = useState(false);

  const renderOptions = () => {
    const minWidth = triggerRef.current?.getBoundingClientRect().width ?? 0;

    const nextChildren = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === SelectOption) {
        return child;
      }
    });
    return (
      <div {...x(styles.select$option$list$container(minWidth))}>
        <div {...x(styles.select$option$list)}>{nextChildren}</div>
      </div>
    );
  };

  const renderPrefix = () => {
    return <div {...x(styles.select$prefix)}>{prefix}</div>;
  };

  const renderSuffix = () => {
    return <div {...x(styles.select$suffix)}>{suffix}</div>;
  };

  return (
    <Popover
      content={renderOptions}
      trigger="click"
      popupStyle={{ padding: 0 }}
      visible={visible}
    >
      <div {...x({ minWidth: "200px" }, styles.select)} ref={triggerRef}>
        {prefix ? renderPrefix() : null}
        <div {...x(styles.select$selection)}></div>
        {suffix ? renderSuffix() : null}
        <div {...x(styles.select$clear)}>{clearIcon}</div>
        {/* <div {...x(styles.select$arrow)}></div> */}
      </div>
    </Popover>
  );
};
