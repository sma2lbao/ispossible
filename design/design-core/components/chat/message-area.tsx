import React from "react";
import { styles } from "./chat.stylex";
import { MessageItem } from "./message-item";
import { x } from "../../shared";

export const MessageArea: React.FC = (props) => {
  return (
    <div {...x(styles.message$area)}>
      <MessageItem id="key1" role="user" name="User" content="请问你是谁" />
      <MessageItem id="key11" role="user" name="User" content="请问你是谁" />
      <MessageItem id="key12" role="user" name="User" content="请问你是谁" />
      <MessageItem id="key13" role="user" name="User" content="请问你是谁" />
      <MessageItem id="key14" role="user" name="User" content="请问你是谁" />
      <MessageItem
        id="key2"
        role="system"
        name="System"
        content="请问你是谁？"
      />
      <MessageItem
        id="key3"
        role="assistant"
        name="Assistant"
        content="请问你是谁？"
      />
      <MessageItem id="key4" role="user" name="User" content="请问你是谁" />
    </div>
  );
};
