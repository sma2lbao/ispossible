import React from "react";
import "./typography.styles";
import type { TypographyProps } from "./typography.types";

const Typography: React.FC<TypographyProps> = (props) => {
  const { children, tagName } = props;
  const Tag = tagName ?? "span";

  return <Tag>{children}</Tag>;
};

export default Typography;
