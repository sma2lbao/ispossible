import React from "react";
import { RadioContextProps } from "./radio.types";

export const RadioContext = React.createContext<RadioContextProps | null>(null);
