import React, { useEffect, useState } from "react";
import { CheckboxGroupContext } from "./checkbox.context";
import type {
  CheckboxContextProps,
  CheckboxGroupProps,
  CheckboxValueType,
} from "./checkbox.types";

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, disabled = false, onChange, value } = props;
  const [innerValue, setInnerValue] = useState<CheckboxValueType[]>(
    value || []
  );
  const [registeredValues, setRegisteredValues] = React.useState<
    CheckboxValueType[]
  >([]);

  const registerValue = (value: CheckboxValueType) => {
    setRegisteredValues((prevValues) => [...prevValues, value]);
  };

  const cancelValue = (value: CheckboxValueType) => {
    setRegisteredValues((prevValues) => prevValues.filter((v) => v !== value));
  };

  const toggleValue = (value: CheckboxValueType) => {
    const index = innerValue.indexOf(value);
    const nextValue = [...innerValue];
    if (index === -1) {
      nextValue.push(value);
    } else {
      nextValue.splice(index, 1);
    }
    if (!("value" in props)) {
      setInnerValue(nextValue);
    }

    onChange?.(nextValue.filter((value) => registeredValues.includes(value)));
  };

  const contextValue: CheckboxContextProps = {
    value,
    disabled,
    registerValue,
    cancelValue,
    toggleValue,
  };

  useEffect(() => {
    setInnerValue(value || []);
  }, [value]);

  return (
    <div>
      <CheckboxGroupContext.Provider value={contextValue}>
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
};
