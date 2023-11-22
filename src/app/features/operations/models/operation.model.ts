import { OperationError } from "../features/errors/error.model";

export interface Operation<T> {
  id?: string;
  request: Promise<T>;
  onSuccess?: (response: T) => void;
  onFinish?: () => void;
  onError?: (error: OperationError[]) => void;
  onLoadingMsg?: string;
  onSuccessMsg?: string;
  onErrorMsg?: string;
}
