export function getStackFunctionNamesTool(stack: string): string[] {
  return stack
    .split("\n")
    .filter((line) => line.includes("at "))
    .map((line) => line.replace(/^\s+at\s/, ""))
    .map((line) => line.replace(/\s\(.*$/, ""))
    .filter((line) => !line.includes("http"))
    .filter((line) => !line.includes("renderWithHooks"))
    .filter((line) => !line.includes("mountMemo"))
    .filter((line) => !line.includes("Object.useMemo"))
    .filter((line) => !line.includes("useMemo"))
    .filter((line) => !line.includes("updateFunctionComponent"));
}
