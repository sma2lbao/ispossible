import React, { type PropsWithChildren } from "react";
import { Typography } from "../../typography";

export const h4: React.FC<PropsWithChildren> = (props) => {
  return (
    <Typography variant="title" size="lg">
      {props.children}
    </Typography>
  );
};
