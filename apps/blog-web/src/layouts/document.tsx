import React from "react";
import { Button } from "@design/core";

export interface DocumentProps {
  children?: React.ReactNode;
}

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      <Button>ceshi </Button>
    </div>
  );
};

export default Document;
