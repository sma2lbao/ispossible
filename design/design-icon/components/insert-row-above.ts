"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-insert-row-above",
  `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1569683507961" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10819" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M878.7 336H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V368c0.1-17.7-14.8-32-33.2-32zM360 792H184V632h176v160z m0-224H184V408h176v160z m240 224H424V632h176v160z m0-224H424V408h176v160z m240 224H664V632h176v160z m0-224H664V408h176v160zM904 160H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z" p-id="10820"></path></svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-insert-row-above": IsIcon;
    }
    interface IsIcon {}
  }
}