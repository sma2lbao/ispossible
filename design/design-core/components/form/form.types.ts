import type {
  DefaultValues,
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export interface FormProps<TFieldValues extends FieldValues = FieldValues> {
  onSubmit?: (data: TFieldValues) => void;

  onFail?: (errors: FieldErrors<TFieldValues>) => void;

  defaultValues?: DefaultValues<TFieldValues> | DefaultValues<TFieldValues>;

  children?: React.ReactNode;
}

export interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  required?: boolean;

  label: React.ReactNode;

  name: TName;

  description?: string;

  rules?: Pick<
    RegisterOptions<TFieldValues, TName>,
    "required" | "min" | "maxLength" | "minLength" | "validate"
  >;

  children?: React.ReactNode;
}

export interface FormContextProps {}
