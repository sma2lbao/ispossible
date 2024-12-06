import React from "react";
import type { ProgressProps } from "./progress.types";
import { x } from "../../shared";
import { styles } from "./progress.stylex";

export const Progress: React.FC<ProgressProps> = (props) => {
  const {
    direction = "x",
    type = "line",
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
