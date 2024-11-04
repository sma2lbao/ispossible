import stylex from "@stylexjs/stylex";
import type { TypographyProps, ISize, IVariant } from "./typography.types";

import { styles } from "./typography.stylex";
import React from "react";
import { commonStyles } from "../../themes/common-styles";

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
        {...stylex.props(
          customStylex,
          styles.host(color),
          dimmed && styles["host$dimmed"],
          truncate && commonStyles.truncate,
          !!truncateLines &&
            truncateLines > 0 &&
            commonStyles.truncateLines(truncateLines),
          gutterBottom && styles["host$gutterBottom"],
          styles[`${variant}$${size}`]
        )}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);
