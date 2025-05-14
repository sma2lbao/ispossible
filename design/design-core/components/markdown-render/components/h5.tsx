import React, { type PropsWithChildren } from "react";
import { Typography } from "../../typography";

export const h5: React.FC<PropsWithChildren> = (props) => {
  return (
    <Typography variant="title" size="md">
      {props.children}
    </Typography>
  );
};
