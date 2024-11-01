import React from "react";
import { CheckboxContextProps } from "./checkbox.types";

export const CheckboxGroupContext =
  React.createContext<CheckboxContextProps | null>(null);
