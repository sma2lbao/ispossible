import React, { useEffect, useRef } from "react";

export interface TooltipProps {
  title: (() => React.ReactNode) | React.ReactNode;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { title, children } = props;
  const domRef = useRef<any>(null);

  useEffect(() => {}, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Tooltip;
