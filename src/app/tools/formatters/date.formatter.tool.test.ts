import { dateFormatterTool } from "src/app/tools/formatters/date.formatter.tool";

const fn = dateFormatterTool;

describe("dateFormatterTool", () => {
  it("should handle words separated by spaces", () => {
    expect(fn(1695653981370)).toBe("25/09/2023");
  });
});
