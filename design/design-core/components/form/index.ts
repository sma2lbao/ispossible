"use client";

import { Form } from "./form";
import { FormField } from "./form-field";

type ExportFormType = typeof Form & {
  Field: typeof FormField;
};

const ExportForm = Form as ExportFormType;
ExportForm.Field = FormField;

export { ExportForm as Form };
