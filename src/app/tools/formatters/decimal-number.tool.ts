export function decimalNumberTool(num: number): number {
  const numString = num.toString();
  const decimalIndex = numString.indexOf(".");

  if (num >= 1) {
    return Number(num.toFixed(2));
  }

  if (decimalIndex === -1) {
    return num;
  }

  const numOfZeros = numString.substring(decimalIndex).search(/[^0.]/);
  const numOfDecimals = numOfZeros + 1;

  const factor = Math.pow(10, numOfDecimals);
  return Math.round(num * factor) / factor;
}
