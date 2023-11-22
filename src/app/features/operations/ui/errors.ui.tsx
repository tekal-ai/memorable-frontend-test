import { Alert } from "antd";
import { FC } from "react";
import { OperationError } from "../features/errors/error.model";

type ErrorsProps = {
  errors: OperationError[];
};

export const Errors: FC<ErrorsProps> = ({ errors }) => {
  return (
    <div>
      {errors?.map((error) => (
        <Alert
          key={error.message}
          message={error.message}
          type="error"
          showIcon
        />
      ))}
    </div>
  );
};
