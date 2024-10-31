import React from "react";
import { CheckboxGroupContext } from "./checkbox.context";
import type {
  CheckboxContextProps,
  CheckboxGroupProps,
} from "./checkbox.types";

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { children } = props;

  const contextValue: CheckboxContextProps = {};

  return (
    <div>
      <CheckboxGroupContext.Provider value={contextValue}>
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
};
