import React from "react";
import { styles } from "./chat.stylex";
import { LoadingItem } from "./loading-item";
import { x } from "../../shared";
import { Avatar } from "../avatar";
import { Space } from "../space";
import { Typography } from "../typography";
import type { IMessageProps } from "./chat.types";

export const MessageItem: React.FC<IMessageProps> = (props) => {
  const {
    name = "User",
    role = "user",
    content = `Hello, I'm your AI assistant.`,
    isIdentify = true,
    thinking = false,
  } = props;
  const align = role === "user" ? "right" : "left";

  return (
    <div {...x(styles.message$item)}>
      {isIdentify ? (
        <div {...x(styles.message$item$header(align))}>
          <Space stylex={styles.message$item$role(align)}>
            <Avatar size={32}></Avatar>
            <Typography variant="title">{name}</Typography>
          </Space>
        </div>
      ) : null}
      <div {...x(styles.message$item$content(align, isIdentify ? 42 : 0))}>
        <Typography variant="body">{content}</Typography>
        {thinking ? <LoadingItem /> : null}
      </div>
    </div>
  );
};
