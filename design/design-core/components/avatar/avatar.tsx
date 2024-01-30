import React from "react";

interface AvatarProps {
  shape: "circle" | "square";
  src: string;
  icon: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const {} = props;

  return <div></div>;
};
