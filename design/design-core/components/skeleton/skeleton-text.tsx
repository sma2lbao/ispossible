import stylex from "@stylexjs/stylex";
import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonTextProps } from "./skeleton.types";

const SkeletonText: React.FC<SkeletonTextProps> = (props) => {
  const { width = "60%", rows = 3 } = props;

  return (
    <div>
      {Array(rows)
        .fill(null)
        .map((_value, index) => (
          <p
            key={index}
            {...stylex.props(
              styles.skeleton$text(
                Array.isArray(width)
                  ? width[index]
                  : rows - 1 === index
                  ? width
                  : "100%"
              )
            )}
          ></p>
        ))}
    </div>
  );
};

export default SkeletonText;
