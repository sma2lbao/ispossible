import React from "react";
import { styles } from "./chat.stylex";
import { LoadingItem } from "./loading-item";
import { x } from "../../shared";
import { Avatar } from "../avatar";
import { MarkdownRender } from "../markdown-render";
import { Space } from "../space";
import { Typography } from "../typography";
import "@design/icon/user";
import "@design/icon/robot";
import type { IMessageProps } from "./chat.types";

export const MessageItem: React.FC<IMessageProps> = (props) => {
  const {
    name,
    role,
    content,
    isIdentify = true,
    thinking = false,
    thought,
  } = props;
  const align = role === "user" ? "right" : "left";

  return (
    <div {...x(styles.message$item)}>
      {isIdentify ? (
        <div {...x(styles.message$item$header(align))}>
          <Space stylex={styles.message$item$role(align)}>
            <Avatar size={32}>
              {role === "user" ? <is-user /> : <is-robot />}
            </Avatar>
            <Typography variant="title">{name}</Typography>
          </Space>
        </div>
      ) : null}
      <div {...x(styles.message$item$content(align, isIdentify ? 42 : 0))}>
        {thinking ? <LoadingItem /> : null}
        {thought ? (
          <Typography
            as="div"
            variant="label"
            stylex={styles.message$item$content$thought}
          >
            {thought}
          </Typography>
        ) : null}
        <MarkdownRender raw={content} />
      </div>
    </div>
  );
};
