import React from "react";
import { styles } from "./typography.stylex";
import { x } from "../../shared";
import { commonStyles } from "../../themes/common-styles";
import type { TypographyProps, ISize, IVariant } from "./typography.types";

export const asTagMap: Record<`${IVariant}$${ISize}`, React.ElementType> = {
  display$lg: "span",
  display$md: "span",
  display$sm: "span",
  headline$lg: "h1",
  headline$md: "h2",
  headline$sm: "h3",
  title$lg: "h4",
  title$md: "h5",
  title$sm: "h6",
  body$lg: "p",
  body$md: "p",
  body$sm: "p",
  label$lg: "span",
  label$md: "span",
  label$sm: "span",
};

export const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  (props, ref) => {
    const {
      as,
      color,
      style,
      className,
      stylex: customStylex,
      variant = "body",
      size = "md",
      children,
      gutterBottom,
      dimmed,
      truncate,
      truncateLines,
      ...rest
    } = props;

    const Component = as ?? asTagMap[`${variant}$${size}`];

    return (
      <Component
        {...rest}
        {...x(
          className,
          style,
          styles.host(color),
          dimmed && styles["host$dimmed"],
          truncate && commonStyles.truncate,
          !!truncateLines &&
            truncateLines > 0 &&
            commonStyles.truncateLines(truncateLines),
          gutterBottom && styles["host$gutterBottom"],
          styles[`${variant}$${size}`],
          customStylex
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);
