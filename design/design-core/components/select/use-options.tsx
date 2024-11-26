import React from "react";
import { SelectOption } from "./select-option";
import type { SelectOptionProps } from "./select.types";

export default function useOptions(children?: React.ReactNode) {
  return React.useMemo(() => {
    const options: SelectOptionProps[] = [];
    React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === SelectOption) {
        options.push(child.props);
      }
    });
    return {
      options,
    };
  }, [children]);
}
