import React, { useEffect } from "react";
import type { FormContextProps, FormProps } from "./form.types";
import {
  useForm,
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";
import { FormContext } from "./form.context";

export function Form<T extends FieldValues>(props: FormProps<T>) {
  const { children, onSubmit, onFail, defaultValues } = props;
  const methods = useForm<T>({
    defaultValues,
  });

  const contextValue: FormContextProps = {};

  const handleSubmit: SubmitHandler<T> = (data) => {
    onSubmit?.(data);
  };

  const handleFail: SubmitErrorHandler<T> = (errors) => {
    onFail?.(errors);
  };

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues]);

  return (
    <form onSubmit={methods.handleSubmit(handleSubmit, handleFail)}>
      <FormProvider {...methods}>
        <FormContext.Provider value={contextValue}>
          {children}
        </FormContext.Provider>
      </FormProvider>
    </form>
  );
}
