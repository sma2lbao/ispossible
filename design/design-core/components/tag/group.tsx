
import stylex from "@stylexjs/stylex";
import React from "react";
import { Tag } from "./tag";
import { styles } from "./tag.stylex";
import { Popover } from "../popover";
import { Space } from "../space";
import type { TagGroupProps } from "./tag.types";

export const TagGroup: React.FC<TagGroupProps> = (props) => {
  const { maxTagCount, tagList, onTagClose } = props;
  const n = maxTagCount == null ? 0 : tagList.length - maxTagCount;

  return (
    <div {...stylex.props(styles.tagGroup)}>
      {tagList.slice(0, maxTagCount).map((tag, index) => {
        const { label, tagKey = index, ...rest } = tag;
        return (
          <Tag key={tagKey} {...rest} closeable onClose={onTagClose}>
            {label}
          </Tag>
        );
      })}
      {n > 0 ? (
        <Popover
          content={() => (
            <Space>
              {tagList.slice(maxTagCount).map((tag, index) => {
                const { label, tagKey = index, ...rest } = tag;
                return (
                  <Tag key={tagKey} {...rest}>
                    {label}
                  </Tag>
                );
              })}
            </Space>
          )}
        >
          <Tag closeable={false} type="ghost" key="__n">
            +{n}
          </Tag>
        </Popover>
      ) : null}
    </div>
  );
};
