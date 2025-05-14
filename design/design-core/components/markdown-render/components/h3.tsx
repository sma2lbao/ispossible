import React, { type PropsWithChildren } from "react";
import { Typography } from "../../typography";

export const h3: React.FC<PropsWithChildren> = (props) => {
  return (
    <Typography variant="headline" size="sm">
      {props.children}
    </Typography>
  );
};
