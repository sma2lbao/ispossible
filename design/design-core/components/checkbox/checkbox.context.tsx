import React from "react";
import { CheckboxGroupProps } from "./checkbox.types";

export const CheckboxGroupContext =
  React.createContext<CheckboxGroupProps | null>(null);
