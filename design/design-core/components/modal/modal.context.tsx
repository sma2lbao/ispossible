import React from "react";
import type { ModalProps } from "./modal.types";

export const ModalContext = React.createContext<ModalProps | null>(null);
