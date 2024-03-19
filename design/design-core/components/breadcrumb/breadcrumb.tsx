import React from "react";
import stylex from "@stylexjs/stylex";
import { Typography } from "../typography";
import type { BreadCrumbProps } from "./breadcrumb.types";

const styles = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
  },
  item: {
    color: "#333",
    textDecoration: "none",
  },
  link: {
    cursor: "pointer",
  },
  separator: {
    margin: "0 4px",
    fontSize: 12,
  },
});

export const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
  const { separator, items } = props;
  return (
    <div {...stylex.props(styles.root)}>
      {items.map((item, index) => {
        const { path, href } = item;
        const isLast = index === items.length - 1;
        const isLink = path != null || href != null;

        return (
          <React.Fragment key={index}>
            <Typography
              tagName="span"
              link={isLink}
              href={path || href}
              key={index}
              style={[styles.item, isLink && styles.link]}
            >
              {item.title}
            </Typography>
            {!isLast && (
              <Typography tagName="span" style={styles.separator}>
                {separator}
              </Typography>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

BreadCrumb.defaultProps = {
  separator: "/",
  items: [],
};
