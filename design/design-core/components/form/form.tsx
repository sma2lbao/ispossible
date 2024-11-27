import React from "react";
import type { FormProps } from "./form.types";
import { type FieldValues, useForm } from "react-hook-form";

export function Form<T extends FieldValues>(props: FormProps<T>) {
  const { children } = props;
  const form = useForm<T>();

  const handleSubmit = () => {};

  return <form onSubmit={handleSubmit}>{children}</form>;
}
