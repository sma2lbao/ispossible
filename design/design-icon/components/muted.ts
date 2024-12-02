"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-muted",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fillRule="evenodd"><path d="M771.915 115c-5.863 0-11.877 1.644-17.42 5.267L400 351.966H236c-8.837 0-16 7.165-16 16.003V656.03c0 8.838 7.163 16.003 16 16.003h164l354.495 231.7c5.542 3.621 11.558 5.267 17.42 5.267C788.566 909 804 895.749 804 876.94V147.06c0-18.808-15.436-32.06-32.085-32.06M732 220.997v582.005L439.386 611.75l-17.948-11.73H292V423.98h129.438l17.948-11.73z"/></svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-muted": IsIcon;
    }
    interface IsIcon {}
  }
}