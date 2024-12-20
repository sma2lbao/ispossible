import React, { useEffect, useRef, useState } from "react";
import { AutoCompleteOption } from "./auto-complete-option";
import { styles } from "./auto-complete.stylex";
import { useClickOutside } from "../../hooks/use-click-outside";
import { mergeRefs, x } from "../../shared";
import { Input } from "../input";
import { Popover } from "../popover";
import type {
  AutoCompleteItem,
  AutoCompleteProps,
} from "./auto-complete.types";
import "@design/icon/search";

export const AutoComplete = React.forwardRef<HTMLDivElement, AutoCompleteProps>(
  (props, ref) => {
    const {
      data = [],
      value,
      prefix = <is-search />,
      onChange,
      onSearch,
      onSelect,
      renderItem,
      ...rest
    } = props;
    const [visible, setVisible] = useState(false);
    const [rawValue, setRawValue] = useState<string>("");
    const outterRef = useRef<HTMLDivElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const isControl = "value" in props;

    const handleChange = (value: string) => {
      onChange?.(value);
      onSearch?.(value);
      !isControl && setRawValue(value);
    };

    const handleOutside = () => {
      setVisible(false);
    };

    const handleSelect = (item: AutoCompleteItem) => {
      setVisible(false);
      const value = typeof item === "string" ? item : item.value;
      onSelect?.(value);
      onChange?.(value);
      !isControl && setRawValue(value);
    };

    useClickOutside([outterRef, popupRef], handleOutside);

    useEffect(() => {
      if (value === rawValue) return;
      if (isControl) {
        setRawValue(value ?? "");
      }
    }, [value]);

    const renderOptions = () => {
      const minWidth = outterRef.current?.getBoundingClientRect().width ?? 0;
      return (
        <div {...x(styles.autoComplete$popup(minWidth))} ref={popupRef}>
          {data?.length ? (
            data.map((item, index) => {
              const label = typeof item === "string" ? item : item.label;
              return (
                <AutoCompleteOption
                  key={`${label + index}`}
                  onClick={() => handleSelect(item)}
                >
                  {typeof renderItem === "function" ? renderItem(item) : label}
                </AutoCompleteOption>
              );
            })
          ) : (
            <div {...x(styles.autoComplete$popup$empty)}>暂无内容</div>
          )}
        </div>
      );
    };

    return (
      <Popover
        popupStyle={{ padding: 0 }}
        content={renderOptions}
        trigger="custom"
        visible={visible}
      >
        <div ref={mergeRefs(outterRef, ref)}>
          <Input
            {...rest}
            prefix={prefix}
            value={rawValue}
            onChange={handleChange}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </Popover>
    );
  }
);
