import { decimalNumberTool } from "./decimal-number.tool";

const fn = decimalNumberTool;

describe("decimalNumberTool", () => {
  it("should return the same number if it is greater than or equal to 1", () => {
    expect(fn(1.2345)).toBe(1.23);
    expect(fn(10)).toBe(10);
    expect(fn(1)).toBe(1);
  });

  it("should return the same number if it does not have a decimal part", () => {
    expect(fn(0)).toBe(0);
    expect(fn(1)).toBe(1);
    expect(fn(2)).toBe(2);
  });

  it("should return the number rounded to the number of decimals equal to the number of zeros after the decimal point plus one", () => {
    expect(fn(0.00123)).toBe(0.0012);
    expect(fn(0.000123)).toBe(0.00012);
    expect(fn(0.0000123)).toBe(0.000012);
  });

  it("should return the number rounded to the number of decimals equal to the number of zeros after the decimal point plus one, even if there are non-zero digits after", () => {
    expect(fn(0.0012304)).toBe(0.0012);
    expect(fn(0.00012304)).toBe(0.00012);
    expect(fn(0.000012304)).toBe(0.000012);
  });
});
