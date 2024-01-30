import React from "react";
import { Footer } from "@design/pro";

export interface DocumentProps {
  children?: React.ReactNode;
}

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Document;
