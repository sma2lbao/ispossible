import { readdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, basename, extname, join } from "path";

const SVG_DIRNAME = "./svgs";
const COMPONENT_DIRNAME = "./components";
const COMPONENT_EXTNAME = ".ts";

main();

function main() {
  const svgFiles = readdirSync(SVG_DIRNAME, {
    recursive: true,
    encoding: "utf-8",
  }).filter((file) => file.endsWith(".svg"));

  svgFiles.forEach((svgFile) => {
    const suffix = dirname(svgFile);
    let componentFileName = basename(svgFile, extname(svgFile));
    if (suffix !== "outlined") {
      componentFileName += `-${suffix}`;
    }
    const svgFileContent = readFileSync(join(SVG_DIRNAME, svgFile), {
      encoding: "utf-8",
    });
    const componentFileContent = returnContent(
      componentFileName,
      svgFileContent
    );
    writeFileSync(
      join(COMPONENT_DIRNAME, componentFileName + COMPONENT_EXTNAME),
      componentFileContent,
      {
        encoding: "utf-8",
      }
    );
  });
}

function returnContent(name: string, svgContent: string) {
  return `"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-${name}",
  \`${svgContent}\`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-${name}": IsIcon;
    }
    interface IsIcon {}
  }
}`;
}
