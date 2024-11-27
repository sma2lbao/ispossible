import type { FieldValues } from "react-hook-form";

export interface FormProps<T extends FieldValues> {
  onSubmit: (data: T) => void;

  children?: React.ReactNode;
}

export interface FormFieldProps {
  label: React.ReactNode;

  name: string;

  description?: string;

  children?: React.ReactNode;
}

export interface FormContextProps {}

export interface FormFieldContextProps {
  name: string;
}
