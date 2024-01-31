import React from "react";
import stylex from "@stylexjs/stylex";
import { colors, radiusSizes } from "../theme/tokens.stylex";
import "@design/icon/user";

export interface AvatarProps {
  shape?: "circle" | "square";
  src?: string;
  icon?: React.ReactNode;
  border?: boolean;
  size?: number;
}

const styles = stylex.create({
  root: (size) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    // backgroundColor: colors.secondary,
    color: colors.secondary,
    fontSize: size * 0.8 < 12 ? 12 : size * 0.6,
    borderRadius: radiusSizes.basic,
    overflow: "hidden",
  }),
  border: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border,
  },
  circle: {
    borderRadius: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "transparent",
  },
});

export const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    shape = "square",
    src,
    icon = <is-user />,
    size = 80,
    border = true,
  } = props;

  return (
    <div
      {...stylex.props(
        styles.root(size),
        shape === "circle" && styles.circle,
        border && styles.border
      )}
    >
      {src ? (
        <img src={src} alt="avatar" {...stylex.props(styles.image)} />
      ) : (
        icon
      )}
    </div>
  );
};
