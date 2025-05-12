import React from "react";
import { styles } from "./chat.stylex";
import { MessageItem } from "./message-item";
import { x } from "../../shared";
import type { IMessageArea } from "./chat.types";

export const MessageArea: React.FC<IMessageArea> = (props) => {
  const { messages = [] } = props;

  return (
    <div {...x(styles.message$area)}>
      {messages.map((item) => {
        return (
          <MessageItem
            key={item.id}
            id={item.id}
            role={item.role}
            name={item.name}
            thinking={item.thinking}
            thought={item.thought}
            content={item.content}
          />
        );
      })}
    </div>
  );
};
