import { useState } from "react";
import { Directory } from "src/app/tools/models/directory.model";
import { OperationError } from "./error.model";
import { Operation } from "../../models/operation.model";
import toast from "react-hot-toast";

export const useErrors = () => {
  const [errors, setError] = useState<Directory<OperationError>>({});

  const addErrors = <T>(operation: Operation<T>, error: OperationError) => {
    setError((prev) => {
      return {
        ...prev,
        [operation.id ?? "undefined"]: error,
      };
    });
  };

  const getErrors = (operationId: string) => {
    return errors[operationId];
  };

  const onOperationError = (operation: Operation<any>, error: any) => {
    const errorId = operation.id ? `(${operation.id})` : "";
    return toast.error(`Server error: "${error?.message}" ${errorId}`, {
      id: "server-error",
      duration: 4000,
    });
  };

  const generalErrorsHandler = (operation: Operation<any>, errors: any) => {
    errors?.forEach((error: any) => onOperationError(operation, error));
  };

  return {
    addErrors,
    generalErrorsHandler,
    getErrors,
  };
};
