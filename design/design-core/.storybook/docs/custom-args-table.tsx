import React, { useEffect } from "react";
import { ArgTypes, HeaderMdx } from "@storybook/blocks";

export const CustomArgsTable = (props) => {
  useEffect(() => {
    const theadDOMs = document.querySelectorAll(
      "thead.docblock-argstable-head th span"
    );
    if (theadDOMs.length) {
      theadDOMs.forEach((node) => {
        const text = node.textContent;

        switch (text) {
          case "Name": {
            node.textContent = "属性";
            break;
          }
          case "Description": {
            node.textContent = "说明";
            break;
          }
          case "Default": {
            node.textContent = "默认值";
            break;
          }
        }
      });
    }
  }, []);

  return (
    <div>
      <HeaderMdx as="h3" id="api-参考">
        API 参考
      </HeaderMdx>
      <ArgTypes {...props} />
    </div>
  );
};
