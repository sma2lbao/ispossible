import React from "react";
import type { TypographyLinkProps } from "./typography.types";
import { Typography } from "./typography";
import { styles } from "./typography.stylex";

export const TypographyLink: React.FC<TypographyLinkProps> = (props) => {
  const { children, underline = false, ...rest } = props;

  return (
    <Typography as="a" {...rest} stylex={styles.host$link}>
      {children}
    </Typography>
  );
};
