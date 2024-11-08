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
    const ele = document.body.querySelector(".sb-unstyled");
    if (!ele) return;
    observer.observe(ele);

    return () => {
      observer.unobserve(document.body);
    };
  }, []);

  return null;
};
