export const currencyFormatterTool = (number: number) => {
  const a = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return a.format(number);
};
