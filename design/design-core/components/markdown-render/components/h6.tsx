import React, { type PropsWithChildren } from "react";
import { Typography } from "../../typography";

export const h6: React.FC<PropsWithChildren> = (props) => {
  return (
    <Typography variant="title" size="sm">
      {props.children}
    </Typography>
  );
};
