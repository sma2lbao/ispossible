import React, { useEffect, useRef, useState } from "react";
import { SelectOption } from "./select-option";
import { SelectContext } from "./select.context";
import { styles } from "./select.stylex";
import useOptions from "./use-options";
import { useClickOutside } from "../../hooks/use-click-outside";
import { mergeRefs, x } from "../../shared";
import { Input } from "../input";
import { Popover } from "../popover";
import type {
  DisplayValueType,
  SelectContextProps,
  SelectOptionProps,
  SelectProps,
  SelectValueType,
} from "./select.types";
import "@design/icon/close-circle-filled";
import "@design/icon/down";
import "@design/icon/search";

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      filter = false,
      placeholder,
      prefix,
      suffix,
      clearable,
      children,
      onChange,
      onSearch,
      style,
      stylex,
      className,
    } = props;
    const triggerRef = useRef<HTMLDivElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const clearIcon = <is-close-circle-filled />;
    const [visible, setVisible] = useState(false);
    const [rawValue, setRawValue] = useState<SelectValueType>(defaultValue);
    const [keyword, setKeyword] = useState<string>("");
    const { options } = useOptions(children);
    const isControl = "value" in props;
    const isClearable = clearable && Boolean(rawValue != null);

    const displayValue: DisplayValueType[] = React.useMemo(() => {
      if (rawValue) {
        const optionValue = options
          ?.filter((option) => option.value === rawValue)
          .map((option) => {
            return {
              value: option.value,
              label: option.label ?? option.children ?? option.value,
              disabled: option.disabled,
            };
          });
        if (!optionValue || optionValue.length === 0) {
          return [
            {
              value: rawValue,
              label: rawValue,
              disabled: false,
            },
          ];
        }
        return optionValue;
      }
      return [];
    }, [rawValue]);

    const handleClick = () => {
      setVisible(true);
    };

    const handleOutside = () => {
      setVisible(false);
    };

    const handleOnClosed = () => {
      setKeyword("");
    };

    const handleKeywordChange = (value: string) => {
      setKeyword(value);
      onSearch?.(value);
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
        <div
          {...x(styles.select$option$list$container(minWidth))}
          ref={popupRef}
        >
          {filter && (
            <div {...x(styles.select$option$list$search$wrap)}>
              <Input
                prefix={<is-search />}
                value={keyword}
                onChange={handleKeywordChange}
              />
            </div>
          )}
          <div {...x(styles.select$option$list)}>
            <SelectContext.Provider value={contextValue}>
              {options.map((itemProps, index) => (
                <SelectOption {...itemProps} key={itemProps.value ?? index} />
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
        onClosed={handleOnClosed}
      >
        <div
          {...x(
            style,
            className,
            styles.select,
            visible && styles.select$foucs,
            stylex
          )}
          ref={mergeRefs(triggerRef, ref)}
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
                key={`display-value:${value.value ?? index}`}
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
  }
);
