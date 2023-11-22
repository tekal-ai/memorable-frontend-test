import { decimalNumberTool } from "./decimal-number.tool";

export const percentFormatterTool = (num: number): string => {
  if (!num) return "";
  return `${decimalNumberTool(num)}%`;
};
