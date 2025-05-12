import React, { useState } from "react";
import { styles } from "./chat.stylex";
import { x } from "../../shared";
import { Button } from "../button";
import { Textarea } from "../textarea";
import "@design/icon/send";
import type { IInputAreaProps } from "./chat.types";

export const InputArea: React.FC<IInputAreaProps> = (props) => {
  const { onSend } = props;
  const [input, setInput] = useState<string>();

  const handleChange = (newValue: string) => {
    setInput(newValue);
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLTextAreaElement> = () => {
    // console.log(e);
  };

  const handleSend = () => {
    if (!input) return;
    onSend?.(input);
    setInput("");
  };

  return (
    <div {...x(styles.input$area)}>
      <div {...x(styles.input$area$text)}>
        <Textarea onKeyUp={handleKeyUp} value={input} onChange={handleChange} />
        <Button
          icon={<is-send />}
          color="primary"
          theme="solid"
          stylex={styles.input$area$text$send}
          onClick={handleSend}
        ></Button>
      </div>
    </div>
  );
};
