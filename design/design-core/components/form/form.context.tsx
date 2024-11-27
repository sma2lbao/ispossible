import React from "react";
import { FormContextProps, FormFieldContextProps } from "./form.types";

export const FormFieldContext =
  React.createContext<FormFieldContextProps | null>(null);

export const FormContext = React.createContext<FormContextProps | null>(null);
