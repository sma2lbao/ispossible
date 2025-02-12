import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonTextProps } from "./skeleton.types";
import { x } from "../../shared";

const SkeletonText: React.FC<SkeletonTextProps> = (props) => {
  const {
    width = "60%",
    height,
    rows = 3,
    stylex,
    style,
    rootStyle,
    rootStylex,
  } = props;

  return (
    <div {...x(rootStyle, rootStylex)}>
      {Array(rows)
        .fill(null)
        .map((_value, index) => (
          <p
            key={index}
            {...x(
              style,
              stylex,
              styles.skeleton$text(
                Array.isArray(width)
                  ? width[index]
                  : rows - 1 === index
                  ? width
                  : "100%",
                height
              )
            )}
          ></p>
        ))}
    </div>
  );
};

export default SkeletonText;
