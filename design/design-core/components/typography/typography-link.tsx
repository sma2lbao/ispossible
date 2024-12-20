import React from "react";
import { Typography } from "./typography";
import { styles } from "./typography.stylex";
import type { TypographyLinkProps } from "./typography.types";

export const TypographyLink: React.FC<TypographyLinkProps> = (props) => {
  const { children, underline: _, ...rest } = props;

  return (
    <Typography as="a" {...rest} stylex={styles.host$link}>
      {children}
    </Typography>
  );
};
