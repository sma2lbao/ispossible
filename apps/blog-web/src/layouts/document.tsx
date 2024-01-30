import React from "react";
import { Button } from "@design/core";
import { Footer } from "@design/pro";

export interface DocumentProps {
  children?: React.ReactNode;
}

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Button>test</Button>
      {children}
      <Footer />
    </div>
  );
};

export default Document;
