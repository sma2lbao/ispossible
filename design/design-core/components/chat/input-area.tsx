import React, { useRef, useState } from "react";
import { styles } from "./chat.stylex";
import { useHotKey } from "../../hooks/use-hot-key";
import { x } from "../../shared";
import { Button } from "../button";
import { Textarea } from "../textarea";
import "@design/icon/send";
import type { IInputAreaProps } from "./chat.types";

export const InputArea: React.FC<IInputAreaProps> = (props) => {
  const { disabled = false, onSend } = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState<string>();
  useHotKey({
    hotKeys: ['control', 'enter'],
    selector() {
      return textareaRef.current
    },
    onHotKeyPressed() {
      handleSend()
    },
  })

  const handleChange = (newValue: string) => {
    setInput(newValue);
  };


  const handleSend = () => {
    if (!input) return;
    onSend?.(input);
    setInput("");
  };

  return (
    <div {...x(styles.input$area)}>
      <div {...x(styles.input$area$text)}>
        <Textarea value={input} onChange={handleChange} ref={textareaRef} />
        <Button
          color="primary"
          theme="solid"
          icon={<is-send />}
          disabled={disabled}
          stylex={styles.input$area$text$send}
          onClick={handleSend}
        ></Button>
      </div>
    </div>
  );
};
