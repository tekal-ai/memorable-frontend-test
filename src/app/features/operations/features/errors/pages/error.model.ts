export type CustomError = {
  extensions: {
    code: string;
  };
  path: string[];
  message: string;
};
