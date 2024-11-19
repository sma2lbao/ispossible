import React from "react";
import { x } from "../../shared";
import { styles } from "./list.stylex";
import stylex from "@stylexjs/stylex";
import type { ListProps } from "./list.types";
import "@design/icon/loading";
import { Typography } from "../typography";

export const List: React.FC<ListProps> = (props) => {
  const {
    hasLoadMore,
    loading,
    finished,
    error,
    className,
    style,
    stylex: customStylex,
    children,
    header,
    footer,
    onLoad,
  } = props;

  const handleClick: React.ReactEventHandler = () => {
    onLoad?.();
  };

  const renderHeader = () => {
    if ("header" in props) {
      return header;
    }
    return null;
  };

  const renderMore = () => {
    if (!hasLoadMore) return null;

    if (loading) {
      return (
        <div {...x(styles.list$tools)}>
          <is-loading {...stylex.attrs(styles.loading)} />
          <span>加载中</span>
        </div>
      );
    }

    if (error) {
      return (
        <div {...x(styles.list$tools)}>
          <Typography.Link onClick={handleClick}>重新加载</Typography.Link>
        </div>
      );
    }

    if (finished) {
      return (
        <div {...x(styles.list$tools)}>
          <span>没有更多了</span>
        </div>
      );
    }

    return (
      <div {...x(styles.list$tools)}>
        <Typography.Link onClick={handleClick}>加载更多</Typography.Link>
      </div>
    );
  };

  const renderFooter = () => {
    if ("footer" in props) {
      return footer;
    }
    return null;
  };

  return (
    <div {...x(className, style, styles.list, customStylex)}>
      {renderHeader()}
      <ul {...x(styles.list$items)}>{children}</ul>
      {renderMore()}
      {renderFooter()}
    </div>
  );
};
