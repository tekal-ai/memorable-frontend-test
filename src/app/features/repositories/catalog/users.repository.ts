import { client } from "src/app/features/repositories/clients/graphql.client";
import { UsersRepository } from "src/domain/users/users.domain";
import { AuthenticationInput, SignUpInput, User } from "src/graphql/client";

export class UsersBackendRepository implements UsersRepository {
  getLoggedInUser() {
    return client.chain.query.getLoggedInUser.get({
      id: true,
      name: true,
      email: true,
      businessAccount: {
        id: true,
        brands: {
          adAccounts: true,
          id: true,
          logoUrl: true,
          name: true,
          sector: true,
          socialAccounts: true,
          status: true,
        },
      },
      isAdmin: true,
    }) as Promise<User>;
  }

  async login(input: AuthenticationInput) {
    return client.chain.mutation
      .logIn({
        input: {
          email: input.email,
          password: input.password,
        },
      })
      .get({
        sessionToken: true,
      });
  }

  async createUser(user: SignUpInput, code: string): Promise<User> {
    return client.chain.mutation
      .signUp({
        user,
        code,
      })
      .get({
        id: 1,
      }) as Promise<User>;
  }
}
