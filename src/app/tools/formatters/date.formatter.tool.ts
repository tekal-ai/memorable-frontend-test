import { format } from "date-fns";

const DATE_FORMAT = "dd/MM/yyyy";
export const dateFormatterTool = (dateInMilliseconds: number) => {
  return format(new Date(dateInMilliseconds), DATE_FORMAT);
};
