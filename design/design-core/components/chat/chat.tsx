import React from "react";
import { styles } from "./chat.stylex";
import { InputArea } from "./input-area";
import { MessageArea } from "./message-area";
import { x } from "../../shared";
import type { IChatProps } from "./chat.types";

export const Chat: React.FC<IChatProps> = (props) => {
  const {
    className,
    style,
    stylex,
    messages = [],
    loading,
    onMessageSend,
  } = props;

  return (
    <div {...x(className, style, styles.chat, stylex)}>
      <MessageArea messages={messages} />
      <InputArea onSend={onMessageSend} disabled={loading} />
    </div>
  );
};
