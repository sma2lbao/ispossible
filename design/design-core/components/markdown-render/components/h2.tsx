import React, { type PropsWithChildren } from "react";
import { Typography } from "../../typography";

export const h2: React.FC<PropsWithChildren> = (props) => {
  return (
    <Typography variant="headline" size="md">
      {props.children}
    </Typography>
  );
};
