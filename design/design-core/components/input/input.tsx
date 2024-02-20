import React from "react";

export interface InputProps {
  id?: string;
  value?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return <input />;
};
