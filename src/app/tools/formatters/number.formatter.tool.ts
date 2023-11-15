export const numberFormatterTool = (number: number) => {
  const a = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return a.format(number);
};
