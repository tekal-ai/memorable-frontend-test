import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";

export interface EarlyAccessRepository {
  isValid(token: string): Promise<ValidationCodeStatus>;
}

export interface validationCodeResponse {
  isValid: boolean;
  status: ValidationCodeStatus;
}

export type ValidationCodeStatus =
  | "INVITATION_CODE_ALREADY_USED"
  | "INVITATION_CODE_NOT_FOUND"
  | "INVITATION_EMAIL_MISMATCH"
  | "INVITATION_ALREADY_USED"
  | "INVITATION_EXPIRED"
  | "INVITATION_CODE_VALID";

export const useEarlyAccessDomain = (repoId = "EarlyAccessRepository") => {
  const { repository } = useRepositoryFeature<EarlyAccessRepository>(repoId);

  const isValid = (token: string): Promise<validationCodeResponse> => {
    return new Promise((resolve, reject) => {
      repository
        .isValid(token)
        .then((result) => {
          if (result === "INVITATION_CODE_VALID") {
            resolve({
              isValid: true,
              status: result,
            });
          } else {
            resolve({
              isValid: false,
              status: result,
            });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    isValid,
  };
};
