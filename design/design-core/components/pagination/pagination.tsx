import stylex from "@stylexjs/stylex";
import React, { useMemo } from "react";
import { styles } from "./pagination.stylex";
import { Button } from "../button";
import { Space } from "../space";
import type { PaginationProps } from "./pagination.types";
import "@design/icon/left";
import "@design/icon/right";

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

  /**
   * 点击上一页
   */
  const handleClickPervious = () => {
    onPageChange?.(page - 1);
  };

  /**
   * 点击下一页
   */
  const handleClickNext = () => {
    onPageChange?.(page + 1);
  };

  return (
    <div {...stylex.props(styles.pagination)}>
      <Space>
        <Button
          theme="ghost"
          disabled={page === 1}
          onClick={handleClickPervious}
        >
          <is-left />
        </Button>

        {!visiblePages.includes(1) && (
          <Button
            theme={page === 1 ? "light" : "ghost"}
            onClick={() => handleClickNumber(1)}
          >
            1
          </Button>
        )}

        {visiblePages[0] > 2 && (
          <span {...stylex.props(styles.pagination$ellipsis)}>...</span>
        )}

        {visiblePages.map((item, index) => (
          <Button
            key={"page-" + item + ":" + index}
            theme={item === page ? "light" : "ghost"}
            onClick={() => handleClickNumber(item)}
          >
            {item}
          </Button>
        ))}

        {visiblePages[MAX_DISPLAY - 1] < maxPage - 1 && (
          <span {...stylex.props(styles.pagination$ellipsis)}>...</span>
        )}

        {!visiblePages.includes(maxPage) && (
          <Button
            theme={maxPage === page ? "light" : "ghost"}
            onClick={() => handleClickNumber(maxPage)}
          >
            {maxPage}
          </Button>
        )}

        <Button
          theme="ghost"
          disabled={maxPage === page}
          onClick={handleClickNext}
        >
          <is-right />
        </Button>
      </Space>
    </div>
  );
};
