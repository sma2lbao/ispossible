import React from "react";
import type { FormFieldProps } from "./form.types";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { x } from "../../shared";
import { styles } from "./form.stylex";
import "@design/icon/exclamation-circle-filled";

export function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
  const { required, label, name, rules, children } = props;
  const {
    formState: { errors },
    register,
    control,
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
          return React.cloneElement(children as React.ReactElement, {
            ...option.field,
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
