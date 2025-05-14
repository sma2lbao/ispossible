import React, { type PropsWithChildren } from "react";
import { CodeHighlight } from "../../code-highlight";

export const code: React.FC<PropsWithChildren<{ className: string }>> = (
  props
) => {
  const cls = props.className?.split("-");
  const language = cls ? cls[cls.length - 1] ?? "js" : "js";

  return <CodeHighlight code={props.children} language={language} />;
};
