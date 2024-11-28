import React from "react";
import type { FormContextProps } from "./form.types";

export const FormContext = React.createContext<FormContextProps | null>(null);
