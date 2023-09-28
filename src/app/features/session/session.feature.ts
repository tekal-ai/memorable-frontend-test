import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { token } from "src/app/legacy/token.tool";
import { useSessionState } from "./session.state";
import { Route } from "src/app/features/navigation/models/route.model";
import { AuthenticationInput, Brand, User } from "src/graphql/client";
import { UsersRepository } from "src/domain/users/users.domain";

export const useSessionFeature = (repoId = "UsersRepository") => {
  const { repository } = useRepositoryFeature<UsersRepository>(repoId);

  const state = useSessionState();

  const selectBrand = (brand: Brand) => {
    if (!brand) return;
    state.selectBrand(brand);
  };

  const logout = async () => {
    localStorage.clear();
    token.clear();
    state.removeUser();
  };

  const login = (loginProps: AuthenticationInput) => {
    return new Promise((resolve, reject) => {
      repository
        .login(loginProps)
        .then(({ sessionToken }) => {
          token.persist = true;
          token.set(sessionToken);
          setSessionId(sessionToken);
          repository
            .getLoggedInUser()
            .then((user) => {
              state.setUser(user);
              resolve(user);
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const canINavigateTo = (route: Route) => {
    if (route.isOnlyAdmin) {
      return state.user?.isAdmin;
    }
    if (route.isExcludeAdmin) {
      return !state.user?.isAdmin;
    }
    return true;
  };

  const getUser = () => {
    return repository.getLoggedInUser();
  };

  const setUser = (user: User | undefined) => {
    state.setUser(user);
  };

  const isAdmin = () => {
    return state.user?.isAdmin;
  };

  const setSessionId = (sessionId: string) => {
    state.setSessionId(sessionId);
  };

  const setIsLoading = (isLoading: boolean) => {
    state.setIsLoading(isLoading);
  };

  return {
    user: state.user as User,
    currentBrand: state.currentBrand,
    isLoading: state.isLoading,
    selectBrand,
    login,
    logout,
    getUser,
    setSessionId,
    setUser,
    canINavigateTo,
    isAdmin,
    setIsLoading,
  };
};
