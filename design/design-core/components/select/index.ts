"use client";

import { Select } from "./select";
import { SelectOption } from "./select-option";

type ExportSelectType = typeof Select & {
  Option: typeof SelectOption;
};

const ExportSelect = Select as ExportSelectType;
ExportSelect.Option = SelectOption;

export { ExportSelect as Select };
