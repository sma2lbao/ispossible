import React from "react";
import { Controller } from "react-hook-form";
import type { FormFieldProps } from "./form.types";
import { FormFieldContext } from "./form.context";

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, description, name, children } = props;

  return (
    <FormFieldContext.Provider value={{ name }}></FormFieldContext.Provider>
  );
};
