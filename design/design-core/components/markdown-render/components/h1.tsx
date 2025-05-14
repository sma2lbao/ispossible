import React, { type PropsWithChildren } from "react";
import { Typography } from "../../typography";

export const h1: React.FC<PropsWithChildren> = (props) => {
  return (
    <Typography variant="headline" size="lg">
      {props.children}
    </Typography>
  );
};
