import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { AuthenticationInput, SignUpInput, User } from "src/graphql/client";

export interface UsersRepository {
  createUser(user: SignUpInput, code: string): Promise<User>;
  login(loginProps: AuthenticationInput): Promise<{ sessionToken: string }>;
  getLoggedInUser(): Promise<User>;
}

export const useUsersDomain = (repoId = "UsersRepository") => {
  const { repository } = useRepositoryFeature<UsersRepository>(repoId);
  const { user } = useSessionFeature();

  const getUser = () => {
    return repository.getLoggedInUser();
  };

  const isUserReady = () => {
    const userHasABrandWithAssets = user?.businessAccount?.brands?.some(
      (brand) => brand.adAccounts?.length,
    );
    return user?.businessAccount?.brands?.length && userHasABrandWithAssets;
  };

  const createUser = async (input: any) => {
    return repository.createUser(
      {
        name: `${input.name} ${input.lastName}`,
        email: input.email,
        password: input.password,
      },
      input.earlyAccessToken ?? "",
    );
  };

  return {
    getUser,
    isUserReady,
    createUser,
  };
};
