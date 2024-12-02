"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-borderless-table",
  `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1569683537953" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10937" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M117 368h231v64H117zM676 368h241v64H676zM412 368h200v64H412zM412 592h200v64H412zM676 592h241v64H676zM117 592h231v64H117zM412 432V179h-64v666h64V592zM676 368V179h-64v666h64V432z" p-id="10938"></path></svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-borderless-table": IsIcon;
    }
    interface IsIcon {}
  }
}