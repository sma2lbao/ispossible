import React from "react";

export interface BadgeProps {
  color?: string;
  count?: React.ReactNode;
  dot?: boolean;
  overflowCount?: number;
}

export const Badge: React.FC<BadgeProps> = () => {
  return <span></span>;
};
