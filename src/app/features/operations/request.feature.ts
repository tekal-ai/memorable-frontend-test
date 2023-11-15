import toast from "react-hot-toast";
import { useErrors } from "./features/errors/errors.feature";
import { useLoadings } from "./features/loadings/loadings.feature";
import { Operation } from "./models/operation.model";

export const useRequestFeature = () => {
  const { addErrors, getErrors, generalErrorsHandler } = useErrors();
  const { addLoading, isLoading } = useLoadings();

  const sendToastRequest = async <T>(operation: Operation<T>) => {
    toast.promise(sendRequest(operation), {
      loading: operation.onLoadingMsg || `Loading...`,
      success: operation.onSuccessMsg || `Success!`,
      error: operation.onErrorMsg || `Unexpected error`,
    });
  };

  const sendRequest = async <T>(
    operation: Operation<T>,
  ): typeof operation.request => {
    const { request, onError, onSuccess, onFinish } = operation;
    addLoading(operation, true);
    return new Promise((resolve, reject) => {
      return request
        .then((response) => {
          onSuccess && onSuccess(response);
          resolve(response);
        })
        .catch((error) => {
          !onError && generalErrorsHandler(operation, error.errors);
          onError && onError(error.errors);
          addErrors(operation, error.errors);
          reject(error.errors);
        })
        .finally(() => {
          addLoading(operation, false);
          onFinish && onFinish();
        });
    });
  };

  return {
    sendRequest,
    sendToastRequest,
    getErrors,
    isLoading,
  };
};
