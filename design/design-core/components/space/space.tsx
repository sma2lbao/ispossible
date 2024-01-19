import React from "react";

interface SpaceProps {
  children: React.ReactNode;
  separator?: React.ReactNode;
  size?: number;
  direction?: "x" | "y";
}

export const Space: React.FC<SpaceProps> = (props) => {
  const { children, separator = "|", size = 8, direction = "x" } = props;

  const isArray = Array.isArray(children);

  if (!isArray) {
    return <>{children}</>;
  }

  return <div></div>;
};
