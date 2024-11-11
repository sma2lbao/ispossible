import React from "react";
import { styles } from "./layout.stylex";
import { x } from "../../shared";
import type { ContentProps } from "./layout.types";

export const Content: React.FC<ContentProps> = (props) => {
  const { children, className, style, stylex: customStylex } = props;

  return (
    <div
      className={className}
      style={style}
      {...x(className, style, styles.content, customStylex)}
    >
      {children}
    </div>
  );
};
