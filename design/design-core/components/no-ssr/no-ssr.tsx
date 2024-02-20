"use client";
import React from "react";

export interface NoSsrProps {
  children: React.ReactNode;
  defer?: boolean;
  fallback?: React.ReactNode;
}

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default useEnhancedEffect;

export const NoSsr: React.FC<NoSsrProps> = (props) => {
  const { children, defer = false, fallback = null } = props;
  const [mountedState, setMountedState] = React.useState(false);

  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);

  React.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);

  return <React.Fragment>{mountedState ? children : fallback}</React.Fragment>;
};
