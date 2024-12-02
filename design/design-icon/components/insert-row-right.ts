"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-insert-row-right",
  `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1569683555439" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11291" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M856 112h-80c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8zM656 112H192c-17.7 0-32 14.9-32 33.3v733.3c0 18.4 14.3 33.3 32 33.3h464c17.7 0 32-14.9 32-33.3V145.3c0-18.4-14.3-33.3-32-33.3zM392 840H232V664h160v176z m0-240H232V424h160v176z m0-240H232V184h160v176z m224 480H456V664h160v176z m0-240H456V424h160v176z m0-240H456V184h160v176z" p-id="11292"></path></svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-insert-row-right": IsIcon;
    }
    interface IsIcon {}
  }
}