import Prism from "prismjs";
import React, { useEffect, useRef } from "react";
import "prism-themes/themes/prism-one-light.min.css";
import type { ICodeHighlightProps } from "./code-highlight.types";

Prism.manual = true;

export const CodeHighlight: React.FC<ICodeHighlightProps> = (props) => {
  const { code, language } = props;
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};
