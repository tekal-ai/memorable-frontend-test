import { titleCaseFormatterTool } from "./title-case.formatter.tool";

const fn = titleCaseFormatterTool;

describe("titleCaseFormatterTool", () => {
  it("should handle words separated by spaces", () => {
    expect(fn("hola mundo")).toBe("Hola mundo");
  });

  it("should handle words separated by underscores", () => {
    expect(fn("hola_mundo")).toBe("Hola mundo");
  });

  it("should handle words separated by capital letters", () => {
    expect(fn("holaMundo")).toBe("Hola mundo");
  });

  it("should handle mixed cases", () => {
    expect(fn("holaMundo mundo_hola HolaMundo")).toBe(
      "Hola mundo mundo hola hola mundo",
    );
  });

  it("should handle empty strings", () => {
    expect(fn("")).toBe("");
  });

  it("should handle single words", () => {
    expect(fn("hola")).toBe("Hola");
    expect(fn("Hola")).toBe("Hola");
  });
});
