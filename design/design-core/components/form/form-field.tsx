import React from "react";
import type { FormFieldProps } from "./form.types";
import {
  type FieldValues,
  type Path,
  type PathValue,
  Controller,
  useFormContext,
} from "react-hook-form";
import { x } from "../../shared";
import { styles } from "./form.stylex";
import "@design/icon/exclamation-circle-filled";
import { Input } from "../input";
import { Upload, UploadFile } from "../upload";

export function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
  const { required, label, name, rules, children } = props;
  const {
    formState: { errors },
    register,
    control,
    setValue,
  } = useFormContext<T>();

  const isError = name in errors;

  const renderChildren = () => {
    const type = (children as React.ReactElement)?.type;
    if (typeof type === "string") {
      const registerReturn = register(name, { ...rules });

      return React.cloneElement(children as React.ReactElement, {
        ...registerReturn,
      });
    }

    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={(option) => {
          const { name, value, disabled, ref, onChange, onBlur } = option.field;
          const element = children as React.ReactElement;
          if (element.type === Input) {
            return React.cloneElement(element, {
              name,
              value,
              disabled: disabled ?? element.props.disabled,
              ref,
              onBlur,
              onChange: (value: string) => {
                setValue(name, value as PathValue<T, Path<T>>);
              },
            });
          }

          if (element.type === Upload) {
            return React.cloneElement(element, {
              name,
              files: value,
              disabled,
              onBlur,
              ref,
              onChange: (_: UploadFile, files: UploadFile[]) => {
                setValue(name, files as PathValue<T, Path<T>>);
              },
            });
          }

          return React.cloneElement(element, {
            name,
            value,
            disabled,
            ref,
            onChange,
            onBlur,
          });
        }}
      />
    );
  };

  const renderErrorMessage = () => {
    if (!isError) return null;

    return (
      <div {...x(styles.form$field$message$error)}>
        <span {...x(styles.form$field$status$icon)}>
          <is-exclamation-circle-filled />
        </span>
        <span>{errors[name]?.message as string}</span>
      </div>
    );
  };

  return (
    <div {...x(styles.form$field)}>
      {label && (
        <label
          {...x(
            styles.form$field$label,
            required && styles.form$field$label$required
          )}
        >
          {label}
        </label>
      )}
      <div {...x(styles.form$field$main)}>
        {renderChildren()}
        {renderErrorMessage()}
      </div>
    </div>
  );
}
