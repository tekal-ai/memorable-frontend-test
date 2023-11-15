import { token } from "src/app/legacy/token.tool";
import { createClient } from "../../../../graphql/client";
import { graphqlEndpoint } from "./graphql.client";

export const wsClient = createClient({
  url: graphqlEndpoint.replace(/^http/, "ws"),
  subscription: {
    headers: () => ({ authorization: token.asHeader() }),
  },
});
