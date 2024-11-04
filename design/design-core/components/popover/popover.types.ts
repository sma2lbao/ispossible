import { TooltipProps } from "../tooltip/tooltip.types";

export interface PopoverProps extends Omit<TooltipProps, "title"> {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
}
