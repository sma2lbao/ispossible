import { FC, useLayoutEffect, useRef } from "react";

export interface DocumentData {
  type: "document";
  args: {
    height: number;
  };
}

export const MessageContainer: FC = () => {
  const sendMessage = () => {
    const answer: DocumentData = {
      type: "document",
      args: {
        height: document.body.scrollHeight,
      },
    };
    window.parent?.postMessage(answer, "*");
  };

  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      sendMessage();
    });
    observer.observe(document.body);

    return () => {
      observer.unobserve(document.body);
    };
  }, []);

  return null;
};
