import React, { type PropsWithChildren } from "react";
import { Typography } from "../../typography";

export const p: React.FC<PropsWithChildren> = (props) => {
  return <Typography variant="body">{props.children}</Typography>;
};
