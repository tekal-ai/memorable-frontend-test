import { useState } from "react";
import { Directory } from "src/app/tools/models/directory.model";
import { OperationLoading } from "./loading.model";
import { Operation } from "../../models/operation.model";

export const useLoadings = () => {
  const [loadings, setIsLoading] = useState<Directory<OperationLoading>>({});

  const addLoading = <T>(operation: Operation<T>, isLoading: boolean) => {
    setIsLoading((prev) => {
      return {
        ...prev,
        [operation.id ?? "undefined"]: isLoading,
      };
    });
  };

  const isLoading = (operationId: string) => {
    return loadings[operationId];
  };

  return {
    addLoading,
    isLoading,
  };
};
