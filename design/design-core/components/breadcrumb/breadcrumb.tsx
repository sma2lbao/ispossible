import React from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./breadcrumb.stylex";
import { BreadcrumbContext } from "./breadcrumb.context";
import { BreadcrumbItem } from "./breadcrumb-item";
import type {
  BreadcrumbContextProps,
  BreadcrumbProps,
} from "./breadcrumb.types";

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { separator = ">", children } = props;
  const contextValue: BreadcrumbContextProps = {};

  const renderChildren = () => {
    const items = React.Children.toArray(children).filter((child) => {
      return React.isValidElement(child) && child.type === BreadcrumbItem;
    });

    const len = items?.length ?? 0;
    if (len === 0) return null;
    return items?.map((child, index) => {
      if (index === len - 1) {
        return React.cloneElement(child as React.ReactElement, {
          stylex: styles.breadcrumb$item$active,
          key: index,
        });
      }
      return (
        <React.Fragment key={index}>
          {child}
          {
            <span {...stylex.props(styles.breadcrumb$item$separator)}>
              {separator}
            </span>
          }
        </React.Fragment>
      );
    });
  };

  return (
    <div {...stylex.props(styles.breadcrumb)}>
      <BreadcrumbContext.Provider value={contextValue}>
        {renderChildren()}
      </BreadcrumbContext.Provider>
    </div>
  );
};
