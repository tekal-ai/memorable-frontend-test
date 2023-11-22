import { CustomError } from "../error.model";

export function transformErrorToCustomErrorTool(
  error: Error,
  path: string[],
): CustomError {
  return {
    extensions: {
      code: "RuntimeError",
    },
    path,
    message: error.message,
  };
}
