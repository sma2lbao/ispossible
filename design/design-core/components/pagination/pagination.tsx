import React, { useMemo } from "react";
import stylex from "@stylexjs/stylex";
import { Space } from "../space";
import { Button } from "../button";
import "@design/icon/right";
import "@design/icon/left";

const styles = stylex.create({
  root: {},
  ellipsis: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "super",
  },
});

export interface PaginationProps {
  /**
   * 总条目数
   */
  total?: number;
  /**
   * 每页条目数
   * @default 20
   */
  pageSize?: number;
  /**
   * 当前页
   * @default 1
   */
  page?: number;
  onPageChange?: (nextPage: number) => void;
}

const MAX_DISPLAY = 5;

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { total = 0, pageSize = 10, page = 1, onPageChange } = props;
  const maxPage = Math.ceil(total / pageSize);
  const visiblePages = useMemo<number[]>(() => {
    if (maxPage <= MAX_DISPLAY) {
      return Array(maxPage)
        .fill(undefined)
        .map((_, index) => index + 1);
    }
    if (page === 1 || page - 1 === 1) {
      return Array(MAX_DISPLAY)
        .fill(undefined)
        .map((_, index) => 1 + index);
    }
    if (page + 1 === maxPage || page === maxPage) {
      return Array(MAX_DISPLAY)
        .fill(undefined)
        .map((_, index) => maxPage - index)
        .reverse();
    }
    return [page - 2, page - 1, page, page + 1, page + 2];
  }, [page, maxPage]);

  const handleClickNumber = (nextPage: number) => {
    if (nextPage !== page) {
      onPageChange?.(nextPage);
    }
  };

  const handleClickPervious = () => {
    onPageChange?.(page - 1);
  };

  const handleClickNext = () => {
    onPageChange?.(page + 1);
  };

  return (
    <div {...stylex.props(styles.root)}>
      <Space>
        <Button disabled={page === 1} onClick={handleClickPervious}>
          <is-left />
        </Button>

        {!visiblePages.includes(1) && (
          <Button onClick={() => handleClickNumber(1)}>1</Button>
        )}

        {visiblePages[0] > 2 && (
          <span {...stylex.props(styles.ellipsis)}>...</span>
        )}

        {visiblePages.map((item, index) => (
          <Button
            key={"page-" + item + ":" + index}
            onClick={() => handleClickNumber(item)}
          >
            {item}
          </Button>
        ))}

        {visiblePages[MAX_DISPLAY - 1] < maxPage - 1 && (
          <span {...stylex.props(styles.ellipsis)}>...</span>
        )}

        {!visiblePages.includes(maxPage) && (
          <Button onClick={() => handleClickNumber(maxPage)}>{maxPage}</Button>
        )}

        <Button disabled={maxPage === page} onClick={handleClickNext}>
          <is-right />
        </Button>
      </Space>
    </div>
  );
};
