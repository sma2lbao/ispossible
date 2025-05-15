"use client";

import { Chat, type IMessage } from "@design/core";
import stylex from "@stylexjs/stylex";
import { deepseek } from "../services";
import { useState } from "react";
import { useSettingsStore } from "@/providers/settings-store-provider";
import { formatAnswerMessage } from "../shared/chat-message";

const styles = stylex.create({
  chat$page: {
    width: 900,
    margin: "0 auto",
    height: "100%",
    minHeight: "100%",
  },
});

export default function Home() {
  const [messages, updateMessages] = useState<IMessage[]>([]);
  const { dsApi } = useSettingsStore((state) => state);

  const handleMessageSend = (message: string) => {
    const inputMessage: IMessage = {
      id: Date.now() + "",
      role: "user",
      name: "User",
      content: message,
    };
    updateMessages([...messages, inputMessage]);
    handleReply(inputMessage.content);
  };

  const handleReply = (input: string) => {
    const replyID = `${Date.now() + 1}`;
    deepseek.chat(
      {
        content: input,
        onmessage: (message) => {
          const answer = formatAnswerMessage(message);
          updateMessages((messages) => {
            const currentMessage = messages.find((item) => item.id === replyID);
            if (!currentMessage) {
              const nextMessage: IMessage = {
                id: replyID,
                name: "Assistant",
                role: "assistant",
                content: answer.content ?? "",
                rawContent: answer.rawContent,
                thinking: answer.isThinking,
                thought: answer.thought,
              };
              return [...messages, nextMessage];
            } else {
              Object.assign(currentMessage, {
                thinking: answer.isThinking,
                thought: answer.thought,
                content: answer.content ?? "",
                rawContent: answer.rawContent,
              });
              return [...messages];
            }
          });
        },
      },
      {
        api: dsApi,
      }
    );
  };

  return (
    <div {...stylex.props(styles.chat$page)}>
      <Chat messages={messages} onMessageSend={handleMessageSend} />
    </div>
  );
}
