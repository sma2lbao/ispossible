import stylex from "@stylexjs/stylex";
import React from "react";
import { type SkeletonParagraphProps } from "./skeleton.types";
import { spacings } from "../../themes/tokens/spacing.stylex";

const styles = stylex.create({
  container: {},
  paragraph: (width: string) => ({
    height: 16,
    backgroundColor: "#ddd",
    borderRadius: 4,
    width: width || "100%",
    margin: 0,
    marginBottom: spacings["margin$1.5"],
  }),
});

const SkeletonParagraph: React.FC<SkeletonParagraphProps> = (props) => {
  const { width = "60%", rows = 3 } = props;

  return (
    <div {...stylex.props(styles.container)}>
      {Array(rows)
        .fill(null)
        .map((_value, index) => (
          <p
            key={index}
            {...stylex.props(
              styles.paragraph(
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

export default SkeletonParagraph;
