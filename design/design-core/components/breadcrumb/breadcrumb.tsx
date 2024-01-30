import React from "react";
import stylex from "@stylexjs/stylex";
import { Typography } from "../typography";
import type { BreadCrumbProps } from "./breadcrumb.types";

const styles = stylex.create({
  root: {},
  item: {
    cursor: "pointer",
  },
});

export const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
  const { separator, items } = props;
  return (
    <div {...stylex.props(styles.root)}>
      {items.map((item, index) => (
        <>
          <Typography
            tagName="span"
            key={item.title + index}
            {...stylex.props(styles.item)}
          >
            {item.title}
          </Typography>
          {index !== items.length - 1 ? separator : null}
        </>
      ))}
    </div>
  );
};

BreadCrumb.defaultProps = {
  separator: "/",
  items: [],
};
