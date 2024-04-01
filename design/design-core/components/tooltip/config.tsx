import React from "react";
import { type Placement } from "./types";
import "@design/icon/caret-left";
import "@design/icon/caret-right";
import "@design/icon/caret-bottom";
import "@design/icon/caret-top";

export const arrowSize = 20;
export const delay = 200;

export const arrowConfig: Record<Placement, React.ReactNode> = {
  top: <is-caret-bottom />,
  topLeft: <is-caret-bottom />,
  topRight: <is-caret-bottom />,
  right: <is-caret-left />,
  rightTop: <is-caret-left />,
  rightBottom: <is-caret-left />,
  bottom: <is-caret-top />,
  bottomLeft: <is-caret-top />,
  bottomRight: <is-caret-top />,
  left: <is-caret-right />,
  leftTop: <is-caret-right />,
  leftBottom: <is-caret-right />,
};

export const arrowPlacement: Record<Placement, Placement> = {
  top: "bottom",
  topLeft: "bottomLeft",
  topRight: "bottomRight",
  right: "left",
  rightTop: "leftTop",
  rightBottom: "leftBottom",
  bottom: "top",
  bottomLeft: "topLeft",
  bottomRight: "topRight",
  left: "right",
  leftTop: "rightTop",
  leftBottom: "rightBottom",
};
