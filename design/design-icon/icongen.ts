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

  let importComponentContent = `"use client"\n`;
  const hostComponentNameArray: string[] = [];

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
    importComponentContent += `\nimport "./${componentFileName}"`;
    hostComponentNameArray.push(`is-${componentFileName}`);
    writeFileSync(
      join(COMPONENT_DIRNAME, componentFileName + COMPONENT_EXTNAME),
      componentFileContent,
      {
        encoding: "utf-8",
      }
    );
  });
  const exportHostComponentNames = hostComponentNameArray.map(
    (name) => `\n"${name}"`
  );

  importComponentContent += `\n\nexport default [${exportHostComponentNames}
]`;
  writeFileSync(
    join(COMPONENT_DIRNAME, "index" + COMPONENT_EXTNAME),
    importComponentContent,
    {
      encoding: "utf-8",
    }
  );
}

function returnContent(name: string, svgContent: string) {
  return `"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-${name}",
  \`${svgContent}\`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-${name}": IsIcon;
    }
    interface IsIcon {}
  }
}`;
}
