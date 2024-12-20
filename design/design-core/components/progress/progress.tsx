import React from "react";
import { styles } from "./progress.stylex";
import { x } from "../../shared";
import type { ProgressProps } from "./progress.types";

export const Progress: React.FC<ProgressProps> = (props) => {
  const {
    direction = "x",
    stroke,
    trackStroke,
    percent = 0,
    className,
    style,
    stylex,
  } = props;

  return (
    <div
      {...x(
        className,
        style,
        styles.progress,
        direction === "x" && styles.progress$x,
        stylex
      )}
    >
      <div {...x(styles.progress$track(trackStroke))}>
        <div
          {...x(
            { width: `${percent}%`, backgroundColor: stroke },
            styles.progress$x$track$inner
          )}
        ></div>
      </div>
    </div>
  );
};
