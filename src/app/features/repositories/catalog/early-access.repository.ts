import {
  EarlyAccessRepository,
  ValidationCodeStatus,
} from "src/domain/users/early-access.domain";
import { client } from "../clients/graphql.client";

export class EarlyAccessBackendRepository implements EarlyAccessRepository {
  async isValid(token: string): Promise<ValidationCodeStatus> {
    return client.chain.query
      .validateInvitationCode({
        invitationCode: token,
      })
      .get() as Promise<ValidationCodeStatus>;
  }
}
