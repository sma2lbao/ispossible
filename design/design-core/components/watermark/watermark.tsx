import React from "react";

interface WatermarkProps {
  gap?: [number, number];
  children: React.ReactNode;
}

export const Watermark: React.FC<WatermarkProps> = (props) => {
  const { children } = props;

  const renderWater = () => {
    const cvs = document.createElement("canvas");
    const ctx = cvs.getContext("2d");
  };

  return <div>{children}</div>;
};
