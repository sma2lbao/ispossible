import React, { useEffect, useRef, useState } from "react";
import type {
  DisplayValueType,
  SelectContextProps,
  SelectOptionProps,
  SelectProps,
  SelectValueType,
} from "./select.types";
import { Popover } from "../popover";
import { x } from "../../shared";
import { styles } from "./select.stylex";
import { SelectOption } from "./select-option";
import { useClickOutside } from "../../hooks/use-click-outside";
import { SelectContext } from "./select.context";
import useOptions from "./use-options";
import "@design/icon/close-circle-filled";
import "@design/icon/down";

export const Select: React.FC<SelectProps> = (props) => {
  const {
    value,
    defaultValue,
    placeholder,
    prefix,
    suffix,
    clearable,
    children,
    onChange,
  } = props;
  const triggerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const clearIcon = <is-close-circle-filled />;
  const [visible, setVisible] = useState(false);
  const [rawValue, setRawValue] = useState<SelectValueType>(defaultValue);
  const { options } = useOptions(children);
  const isControl = "value" in props;
  const isClearable = clearable && Boolean(rawValue != null);

  const displayValue: DisplayValueType[] = React.useMemo(() => {
    if (rawValue) {
      return options
        ?.filter((option) => option.value === rawValue)
        .map((option) => {
          return {
            key: option.key,
            value: option.value,
            label: option.label ?? option.children ?? option.value,
            disabled: option.disabled,
          };
        });
    }
    return [];
  }, [options, rawValue]);

  const handleClick = () => {
    setVisible(true);
  };

  const handleOutside = () => {
    setVisible(false);
  };

  const handleSelectOption = (option: SelectOptionProps) => {
    let nextValue = rawValue;
    if (rawValue !== option.value) {
      nextValue = option.value;
    }
    if (!isControl) {
      setRawValue(nextValue);
    }
    onChange?.(nextValue);
    setVisible(false);
  };

  // 点击外面时
  useClickOutside([triggerRef, popupRef], handleOutside);

  useEffect(() => {
    if (isControl) {
      setRawValue(value);
    }
  }, [value]);

  const renderOptions = () => {
    const minWidth = triggerRef.current?.getBoundingClientRect().width ?? 0;
    const contextValue: SelectContextProps = {
      onSelectOption: handleSelectOption,
      value: rawValue,
    };

    return (
      <div {...x(styles.select$option$list$container(minWidth))} ref={popupRef}>
        <div {...x(styles.select$option$list)}>
          <SelectContext.Provider value={contextValue}>
            {options.map((itemProps, index) => (
              <SelectOption {...itemProps} key={itemProps.key ?? index} />
            ))}
          </SelectContext.Provider>
        </div>
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
      trigger="custom"
      popupStyle={{ padding: 0 }}
      visible={visible}
    >
      <div
        {...x(
          { minWidth: "200px" },
          styles.select,
          visible && styles.select$foucs
        )}
        ref={triggerRef}
        onClick={handleClick}
      >
        {prefix ? renderPrefix() : null}
        <div {...x(styles.select$selection)}>
          {displayValue.length === 0 && Boolean(placeholder) && (
            <div
              {...x(
                styles.select$content$text,
                styles.select$content$placeholder
              )}
            >
              {placeholder}
            </div>
          )}
          {displayValue.map((value, index) => (
            <div
              {...x(styles.select$content$text)}
              key={`display-value:${value.key ?? index}`}
            >
              {value.label}
            </div>
          ))}
        </div>
        {suffix ? renderSuffix() : null}
        {isClearable ? (
          <div {...x(styles.select$clear)}>{clearIcon}</div>
        ) : (
          <div {...x(styles.select$arrow)}>
            <is-down />
          </div>
        )}
      </div>
    </Popover>
  );
};
