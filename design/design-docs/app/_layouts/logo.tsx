"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";

const styles = stylex.create({
  logo: {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".25rem",
    cursor: "pointer",
    fontSize: 24,
  },
});

const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/", { scroll: true });
  };

  return (
    <span onClick={handleClick} {...stylex.props(styles.logo)}>
      Design
    </span>
  );
};

export default Logo;
