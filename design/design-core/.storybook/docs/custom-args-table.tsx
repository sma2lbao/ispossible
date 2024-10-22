import React, { useEffect } from "react";
import { ArgTypes } from "@storybook/blocks";

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

  return <ArgTypes {...props} />;
};
