export const delayTool = (ms: number) =>
  new Promise((res) => setTimeout(res, ms));
